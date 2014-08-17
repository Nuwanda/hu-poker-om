(ns poker-site.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [poker-site.util :as util]
            [poker-site.facebook :as fb]))

(enable-console-print!)

(def app-state (atom {:hand-count 0 :logged false}))

;;Component that handles hand count
(defcomponent hand-counter [data owner opts]
  (display-name [_]
                  "hand-counter")
  (did-mount [_]
             (let [inc-button (om/get-node owner "inc")]
               (.focus inc-button)))
  (render [_]
            (dom/div {:class "text-center" :style (util/display (:logged data))}
                     (dom/h3 (str "Hand count: "(:hand-count data)))
                     (dom/div {:class "btn-group"}
                              (dom/button {:ref "inc"
                                           :on-click #(om/transact! data :hand-count inc)
                                           :class "btn btn-info"
                                           :style {:width "100px"}}
                                          "Increment")
                              (dom/button {:on-click #(om/transact! data :hand-count (fn [_] 0))
                                           :class "btn btn-danger"
                                           :style {:width "100px"}}
                                          "Reset")))))

(om/root hand-counter app-state {:target (. js/document (getElementById "app"))})

(om/root fb/login-button
         app-state
         {:target (. js/document (getElementById "fb-button"))
          :opts {:appId 304922749669792}})
