(ns poker-site.hand-result
   (:require-macros [cljs.core.async.macros :refer [go go-loop]])
   (:require [om.core :as om :include-macros true]
             [om-tools.dom :as dom :include-macros true]
             [om-tools.core :refer-macros [defcomponent]]
             [poker-site.util :as util]
             [poker-site.facebook :as fb]
             [cljs.core.async :refer [put! <! chan]]
             [cljs.reader :refer [read-string]]))

(defn- validate-bet [number stack]
  (if (> number 0)
    (min number stack)
    (max number (- 0 stack))))

(defn- handle-result
  "Handles text change, in case it's a number sends it to the parent, doesn't allow non-numbers"
  [e id owner {:keys [text out]} stack]
  (let [value (.. e -target -value)]
    (if (re-find #"^[+-]?\d*$" value)
      (do
        (om/set-state! owner :text value)
        (when (not= value "")
          (let [number (read-string value)]
            (when (number? number)
              (let [final (validate-bet number stack)]
                (om/set-state! owner :text final)
                (put! out [id final]))))))
      (om/set-state! owner :text text))
    (when (= value "")
      (put! out [id 0]))))

;;Om component that handles each player's hand result
(defcomponent player-result [data owner]
  (display-name [_]
                "player-result")
  (will-mount [_]
              (let [in (om/get-state owner :in)]
                (go-loop []
                         (let [[id value :as msg] (<! in)]
                           (if (not= id (:id @data))
                             (om/set-state! owner :text (- 0 value))
                             (>! in msg)))
                         (recur))))
  (render-state [_ state]
                (dom/div {:style {:text-align "center"}}
                        (dom/label (:name data (str "Player " (:id data))))
                        (dom/div {:class "input-group"}
                                 (dom/input {:class "form-control"
                                             :type "text"
                                             :style {:text-align "right"}
                                             :on-change #(handle-result % (:id @data) owner state (:stack @data))
                                             :value (:text state)}
                                            nil)
                                 (dom/span {:class "input-group-addon"} "bb")))))

(defn import-hand [data owner out]
  (let [p1bb (om/get-state owner :p1bb)
        p2bb (om/get-state owner :p2bb)]
    (om/transact! data [:hu-state :player1 :stack] #(+ % p1bb))
    (om/transact! data [:hu-state :player2 :stack] #(+ % p2bb))
    (om/transact! data [:hu-state :hand-count] inc)
    (put! out [:clear 0])
    (put! out [:clear 0])))

;;Component for hand result input
(defcomponent hand-result [data owner]
  (display-name [_]
                "hand-result")
  (init-state [_]
              {:in (chan)
               :out (chan)
               :p1bb 0
               :p2bb 0})
  (will-mount [_]
              (let [in (om/get-state owner :in)
                    out (om/get-state owner :out)]
                (go-loop []
                         (let [[id v :as msg] (<! in)]
                           (if (= id 1)
                             (do
                               (om/set-state! owner :p1bb v)
                               (om/set-state! owner :p2bb (- 0 v)))
                             (do
                               (om/set-state! owner :p2bb v)
                               (om/set-state! owner :p1bb (- 0 v))))
                           (put! out msg))
                         (recur))))
  (render-state [_ {:keys [out in]}]
                (dom/div {:style (util/display (:logged data))}
                         (dom/div {:class "row"}
                                  (dom/h2 {:style {:text-align "center"}} "Next hand result")
                                  (dom/div {:class "col-md-2 col-md-offset-4"}
                                           (om/build player-result
                                                     (:player1 (:hu-state data))
                                                     {:init-state {:out in :in out :text "0"}}))
                                  (dom/div {:class "col-md-2"}
                                           (om/build player-result
                                                     (:player2 (:hu-state data))
                                                     {:init-state {:out in :in out :text "0"}})))
                         (dom/div {:class "row" :style {:margin-top "10px"}}
                            (dom/div {:class "col-md-2 col-md-offset-5" :style {:text-align "center"}}
                                     (dom/button {:class "btn btn-primary"
                                                  :on-click #(import-hand data owner out)}
                                                 "Add Hand"))))))
