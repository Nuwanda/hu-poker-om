(ns poker-site.server
  (:use [org.httpkit.server :only [run-server]])
  (:require [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.core :as core :refer [GET defroutes]]
            [compojure.route :as route :refer [files not-found]]))

(defroutes all-routes
  (files "/" {:root "."})
  (not-found "<p>Page not found.</p>"))

(def in-dev? true)

(defn -main [& args]
  (let [handler (if in-dev?
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (run-server handler {:port 8080})))
