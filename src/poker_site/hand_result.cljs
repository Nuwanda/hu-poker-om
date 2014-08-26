(ns poker-site.hand-result
   (:require-macros [cljs.core.async.macros :refer [go go-loop]])
   (:require [om.core :as om :include-macros true]
             [om-tools.dom :as dom :include-macros true]
             [om-tools.core :refer-macros [defcomponent]]
             [poker-site.util :as util]
             [poker-site.facebook :as fb]
             [cljs.core.async :refer [put! <! chan pub sub]]
             [cljs.reader :refer [read-string]]))


;;only sends back to parent proper values
(defn- handle-input [event out id owner text]
  (let [value (.. event -target -value)]
    (if (re-find #"^[+-]?\d*\.?5?$" value)
      (do
        (put! out [id value])
        (om/set-state! owner :text value))
      (om/set-state! owner :text text))))

;;Om component that handles each player's hand result
(defcomponent player-result [data owner]
  (display-name [_]
                "player-result")
  (will-mount [_]
              (let [in-chan (chan)]
                (if (= (:id data) 1)
                  (sub (om/get-state owner :in) :id1 in-chan)
                  (sub (om/get-state owner :in) :id2 in-chan))
                (go-loop [msg (<! in-chan)]
                         (om/set-state! owner :text (:value msg))
                         (recur (<! in-chan)))))
  (render-state [_ {:keys [out text]}]
                (dom/div {:style {:text-align "center"}}
                        (dom/label (:name data (str "Player " (:id data))))
                        (dom/div {:class "input-group"}
                                 (dom/input {:class "form-control"
                                             :type "text"
                                             :style {:text-align "right"}
                                             :value text
                                             :on-change #(handle-input % out (:id @data) owner text)}
                                            nil)
                                 (dom/span {:class "input-group-addon"} "bb")))))


;;Function that handles hand import ("add hand" button)
(defn- import-hand [data owner out]
  (let [p1bb (om/get-state owner :p1bb)
        p2bb (om/get-state owner :p2bb)]
    (om/transact! data [:hu-state :player1 :stack] #(+ % p1bb))
    (om/transact! data [:hu-state :player2 :stack] #(+ % p2bb))
    (om/transact! data [:hu-state :hand-count] inc)
    (put! out {:category :clear})))

;;Get player in app-state by id
(defn- player-by-id [data id]
  (let [p1 (get-in data [:hu-state :player1])
        p2 (get-in data [:hu-state :player2])]
    (if (= id 1)
      p1
      p2)))

;;Return the smallest stack in play for bet validation
(defn- smaller-stack [data]
  (let [stack-p1 (:stack (player-by-id data 1))
        stack-p2 (:stack (player-by-id data 2))]
    (if (< stack-p1 stack-p2)
      stack-p1
      stack-p2)))

;;Valida tamanho das apostas
(defn- validate-bet [number stack]
  (if (> number 0)
    (min number stack)
    (max number (- 0 stack))))

;;Handle edge cases in the number regex:
;;things I want to allow in the input but isn't actually a number
(defn- parse-number [number]
  (cond
   (or (= number ".5") (= number "+.5"))                 0.5
   (= number "-.5")                                     -0.5
   (or (= number ".") (= number "-.") (= number "+."))   0
   (= number "")                                         0
   (or (= number "+") (= number "-"))                    0
   :else                                                 (read-string number)))

(defn- send-to-self? [number]
  (if (re-find #"\.$" number)
    false
    (if (= (parse-number number) 0)
      false
      true)))

;;Manda mensagem de novo valor para os dois clientes
(defn- send-message [out src msg to-self?]
  (if (= src 1)
    (do
      (when to-self?
        (put! out {:category :id1 :value msg}))
      (put! out {:category :id2 :value (- 0 msg)}))
    (do
      (when to-self?
        (put! out {:category :id2 :value msg}))
      (put! out {:category :id1 :value (- 0 msg)}))))

(defn- update-stacks [owner id validated]
  (if (= id 1)
    (do
      (om/set-state! owner :p1bb validated)
      (om/set-state! owner :p2bb (- 0 validated)))
    (do
      (om/set-state! owner :p2bb validated)
      (om/set-state! owner :p1bb (- 0 validated)))))

;;Recebe e valida input, envia de volta
(defn- handle-message [data owner]
  (let [in (om/get-state owner :in)
        out (om/get-state owner :outC)]
    (go-loop []
             (let [[id str-value] (<! in)
                   value (parse-number str-value)
                   to-self? (send-to-self? str-value)
                   validated (validate-bet value (smaller-stack @data))]
               (send-message out id validated to-self?)
               (update-stacks owner id validated))
             (recur))))

;;Component for hand result input
(defcomponent hand-result [data owner]
  (display-name [_]
                "hand-result")
  (init-state [_]
              (let [c (chan)]
                {:outP (pub c #(:category %))
                 :outC c
                 :in (chan)
                 :p1bb 0
                 :p2bb 0}))
  (will-mount [_]
              (handle-message data owner))
  (render-state [_ {:keys [outC outP in]}]
                (dom/div {:style (util/display (:logged data))}
                         (dom/div {:class "row"}
                                  (dom/h2 {:style {:text-align "center"}} "Next hand result")
                                  (dom/div {:class "col-md-2 col-md-offset-4"}
                                           (om/build player-result
                                                     (:player1 (:hu-state data))
                                                     {:init-state {:out in :in outP :text ""}}))
                                  (dom/div {:class "col-md-2"}
                                           (om/build player-result
                                                     (:player2 (:hu-state data))
                                                     {:init-state {:out in :in outP :text ""}})))
                         (dom/div {:class "row" :style {:margin-top "10px"}}
                            (dom/div {:class "col-md-2 col-md-offset-5" :style {:text-align "center"}}
                                     (dom/button {:class "btn btn-primary"
                                                  :on-click #(import-hand data owner outC)}
                                                 "Add Hand"))))))
