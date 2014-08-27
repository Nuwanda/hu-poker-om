(ns poker-site.hand-counter
   (:require [om.core :as om :include-macros true]
             [om-tools.dom :as dom :include-macros true]
             [om-tools.core :refer-macros [defcomponent]]
             [poker-site.util :as util]))

;;Component that handles hand count
(defcomponent hand-counter [data owner]
  (display-name [_]
                  "hand-counter")
  (did-mount [_]
             (let [inc-button (om/get-node owner "inc")]
               (.focus inc-button)))
  (render [_]
            (dom/div {:class "text-center" :style (util/display (:logged data))}
                     (dom/h3 (str "Hand count: "(:hand-count(:hu-state data))))
                     (dom/div {:class "btn-group"}
                              (dom/button {:ref "inc"
                                           :on-click #(om/transact! data [:hu-state :hand-count] inc)
                                           :class "btn btn-info"
                                           :style {:width "100px"}}
                                          "Increment")
                              (dom/button {:on-click #(om/transact! data [:hu-state :hand-count] (fn [_] 0))
                                           :class "btn btn-danger"
                                           :style {:width "100px"}}
                                          "Reset")))))
