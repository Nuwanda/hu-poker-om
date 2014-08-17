(ns poker-site.facebook
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]))


;; ref: https://developers.facebook.com/docs/javascript/


;; Privates.
(defn- wrap-keywordize-key [func]
  (fn [resp]
    (-> resp
        (js->clj :keywordize-keys true)
        (func))))


;; Publics.
(defn load-sdk [fb-async-init-cb]

  (let [doc js/document uid "fb-sdk-cljs"]

    (when-not (. doc (getElementById uid))

      ;; register onload callback.
      (-> js/window (.-fbAsyncInit) (set! fb-async-init-cb))

      ;; attatch facebook-sdk.
      (let [script (. doc (createElement "script"))]
        (-> script (.-id)    (set! uid))
        (-> script (.-async) (set! true))
        (-> script (.-src)   (set! "//connect.facebook.net/en_GB/sdk.js"))

        (let [fst-js (-> doc (.getElementsByTagName "script") (aget 0))
              parent (.-parentNode fst-js)]

          (.insertBefore parent script fst-js))))))

;;
;; Facebook APIs.

(defn init
  "ref: https://developers.facebook.com/docs/javascript/reference/FB.init/v2.0"
  [params]
  (-> (clj->js params)
      (js/FB.init)))

(defn api
  "ref: https://developers.facebook.com/docs/javascript/reference/FB.api"
  ([path something]
     (js/FB.api path (if (fn? something) (wrap-keywordize-key something) (clj->js something))))
  ([path something resp-cb]
     (js/FB.api path (clj->js something) (wrap-keywordize-key resp-cb)))
  ([path method params resp-cb]
     (js/FB.api path method (clj->js params) (wrap-keywordize-key resp-cb))))


(defn ui
  "ref: https://developers.facebook.com/docs/javascript/reference/FB.ui"
  ([params]         (js/FB.ui (clj->js params)))
  ([params resp-cb] (js/FB.ui (clj->js params) (wrap-keywordize-key resp-cb))))


(defn get-login-status
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus"
  [resp-cb]
  (js/FB.getLoginStatus
   (wrap-keywordize-key resp-cb)))


(defn login
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0"
  ([resp-cb]
     (login resp-cb {}))
  ([resp-cb opts]
     (js/FB.login
      (wrap-keywordize-key resp-cb)
      (clj->js opts))))


(defn logout
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.logout"
  [resp-cb]
  (js/FB.logout
   (wrap-keywordize-key resp-cb)))


(defn get-auth-response
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse"
  [resp-cb]
  (js/FB.getLoginStatus
   (wrap-keywordize-key resp-cb)))


(defn Event:subscribe
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v2.0"
  [event cb]
  (. js/FB.Event (subscribe event cb)))


(defn Event:unsubscribe
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.Event.unsubscribe"
  [event cb]
  (. js/FB.Event (unsubscribe event cb)))


(defn XFBML:parse
  "ref: https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse"
  ([]       (. js/FB.XFBML (parse)))
  ([dom]    (. js/FB.XFBML (parse dom)))
  ([dom cb] (. js/FB.XFBML (parse dom cb))))


;; Om components
(defcomponent login-button
  "Om component for the facebook login button, takes a map of options
  as specificied by https://developers.facebook.com/docs/plugins/login-button (not scope)"
  [data owner {:keys [appId max-rows size show-faces? auto-login? on-login]
               :or {max-rows 1
                    size "large"
                    show-faces? false
                    auto-login? true
                    on-login nil}}]
  (display-name [_]
                "fb-login")
  (init-state [_]
              {:fb-events (chan)})
  (will-mount [_]
              (let [c (om/get-state owner :fb-events)]
                (load-sdk (fn []
                            (init {:appId appId
                                   :status true
                                   :xfbml true
                                   :version "v2.0"})
                            (put! c [:loaded {}])))))
  (did-mount [_]
             (let [c (om/get-state owner :fb-events)]
               (go (loop []
                     (let [[event value] (<! c)]
                       (cond
                        (= event :loaded) (Event:subscribe "auth.statusChange" #(put! c [:change (js->clj % :keywordize-keys true)]))
                        (= event :change) (if (= (:status value) "connected")
                                            (om/transact! data :logged (fn [_] true))
                                            (om/transact! data :logged (fn [_] false)))
                        :else (print event))
                       (recur))))))
  om/IRender
  (render [_]
          (dom/div
                   (dom/div {:id "fb-root"} nil)
                   (dom/div {:class "fb-login-button" :data-max-rows max-rows
                             :data-size size :data-show-faces show-faces?
                             :data-auto-logout-link auto-login? :onLogin on-login} nil))))
