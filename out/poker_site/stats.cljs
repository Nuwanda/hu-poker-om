(ns poker-site.stats
  (:require [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [poker-site.util :as util]))

(defcomponent player-stats [data owner]
  (display-name [_]
                "player-stats")
  (render [_]
          (dom/div {:class "panel panel-default"}
                   (dom/div {:class "panel-heading"}
                            (dom/h4 {:class "panel-title" :style {:text-align "center"}}
                                    (:name data (str "Player " (:id data)))))
                   (dom/ul {:class "list-group" :style {:text-align "center"}}
                           (dom/li {:class "list-group-item"} (str "Stack: " (:stack data)))
                           (dom/li {:class "list-group-item"} (str "BI's: " (:bis data))
                                   (dom/span {:class "glyphicon glyphicon-plus pull-right"
                                              :on-click (fn [_]
                                                           (om/transact! data :bis inc)
                                                           (om/transact! data :stack #(+ 100 %)))}))
                           (dom/li {:class "list-group-item"} (str "Win/Loss: " (- (:stack data) (* (:bis data) 100))))))))

(defcomponent stats [data owner]
  (display-name [_]
                "stats-view")
  (render [_]
          (dom/div {:class "row" :style (util/display (:logged data))}
                   (dom/h2 {:style {:text-align "center"}} "Challenge Status")
                   (dom/h4 {:style {:text-align "center"}} (str "Hands Played: "(:hand-count(:hu-state data))))
                   (dom/div {:class "col-md-3 col-md-offset-3"}
                            (om/build player-stats (:player1 (:hu-state data))))
                   (dom/div {:class "col-md-3"}
                            (om/build player-stats (:player2 (:hu-state data)))))))
