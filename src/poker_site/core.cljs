(ns poker-site.core
  (:require-macros)
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))

(enable-console-print!)

(def app-state (atom {:hand-count 0}))

(defcomponent hand-counter [data owner]
  (display-name [_]
                  "hand-counter")
  (did-mount [_]
             (let [inc-button (om/get-node owner "inc")]
               (.focus inc-button)))
  (render [_]
            (dom/div #js {:className "text-center"}
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

(om/root
  hand-counter
  app-state
  {:target (. js/document (getElementById "app"))})
