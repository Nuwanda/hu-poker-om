(ns poker-site.server
  (:use [org.httpkit.server :only [run-server]])
  (:require [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :as core :refer [GET defroutes]]
            [compojure.route :as route :refer [files not-found]]
            [clj-json.core :as json]))

(defn json-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/json"}
   :body (json/generate-string data)})

(defn challenges
  ([]
   {
     :hand-count 0
     :player1 {:id 1 :stack 100 :bis 1 :name "Pedro Maia"}
     :player2 {:id 2 :stack 100 :bis 1 :name "Pedro Lopes"}})
  ([id]
   {
     :hand-count 192
     :player1 {:id 1 :stack 228 :bis 3 :name "Pedro Maia"}
     :player2 {:id 2 :stack 372 :bis 3 :name "Pedro Lopes"}}))

(defroutes all-routes
           (GET "/challenges" [] (json-response (challenges)))
           (GET "/challenges/:id" [id] (json-response (challenges id)))
           (files "/" {:root "."})
           (not-found "<p>Page not found</p>"))

(defn -main [& args]
  (let [handler (reload/wrap-reload (site #'all-routes))]
    (run-server handler {:port 8080})))
