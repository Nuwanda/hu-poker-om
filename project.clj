(defproject poker-site "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [om "0.7.0"]
                 [prismatic/om-tools "0.3.0" :exclusions [org.clojure/clojure]]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src/clj"]

  :min-lein-version "2.0.0"

  :cljsbuild {
    :builds [{:id "poker-site"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "poker_site.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
