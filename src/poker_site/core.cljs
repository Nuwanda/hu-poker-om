(ns poker-site.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [poker-site.util :as util]
            [poker-site.facebook :as fb]
            [cljs.core.async :refer [put! chan <!]]))

(enable-console-print!)

(def app-state (atom {:hand-count 0 :logged false}))

;;Component that handles hand count
(defcomponent hand-counter [data owner]
  (display-name [_]
                  "hand-counter")
  (did-mount [_]
             (let [inc-button (om/get-node owner "inc")]
               (.focus inc-button)))
  (render [_]
            (dom/div #js {:className "text-center" :style (util/display (:logged data))}
                     (dom/h3 nil (str "Hand count: "(:hand-count data)))
                     (dom/div #js {:className "btn-group"}
                              (dom/button #js {:ref "inc"
                                               :onClick #(om/transact! data :hand-count inc)
                                               :className "btn btn-info"
                                               :style #js {:width "100px"}}
                                          "Increment")
                              (dom/button #js {:onClick #(om/transact! data :hand-count (fn [_] 0))
                                               :className "btn btn-danger"
                                               :style #js {:width "100px"}}
                                          "Reset")))))

;;Component that handles fb login
(defcomponent fb-login [data owner]
  (display-name [_]
                "fb-login")
  (init-state [_]
              {:fb-events (chan)})
  (will-mount [_]
              (let [c (om/get-state owner :fb-events)]
                (fb/load-sdk (fn []
                               (fb/init {:appId "304922749669792"
                                         :status true
                                         :xfbml true
                                         :version "v2.0"})
                               (put! c [:loaded {}])))))
  (did-mount [_]
             (let [c (om/get-state owner :fb-events)]
               (go (loop []
                     (let [[event value] (<! c)]
                       (cond
                             (= event :loaded) (fb/Event:subscribe "auth.statusChange" #(put! c [:change (js->clj % :keywordize-keys true)]))
                             (= event :change) (if (= (:status value) "connected")
                                                 (om/transact! data :logged (fn [_] true))
                                                 (om/transact! data :logged (fn [_] false)))
                             :else (print event))
                     (recur))))))
  (render [_]
          (dom/div #js {:id "fb-root"} nil)))

(om/root hand-counter app-state {:target (. js/document (getElementById "app"))})

(om/root fb-login app-state {:target (. js/document (getElementById "fb-app"))})
