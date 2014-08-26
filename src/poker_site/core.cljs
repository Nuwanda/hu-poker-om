(ns poker-site.core
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [poker-site.facebook :as fb]
            [poker-site.hand-result :refer [hand-result]]
            [poker-site.hand-counter :refer [hand-counter]]
            [poker-site.stats :refer [stats]]))


(enable-console-print!)

(def app-state (atom {:logged false
                      :hu-state {
                        :hand-count 192
                        :player1 {:id 1 :stack 228 :bis 3 :name "Pedro Maia"}
                        :player2 {:id 2 :stack 372 :bis 3 :name "Pedro Lopes"}}}))

(defcomponent teste [data owner]
  (display-name [_]
                "root")
  (render [_]
          (dom/div
           (om/build stats data)
           (om/build hand-result data))))

(om/root teste app-state {:target (. js/document (getElementById "app"))})

(om/root fb/login-button
         app-state
         {:target (. js/document (getElementById "fb-button"))
          :opts {:appId 304922749669792}})
