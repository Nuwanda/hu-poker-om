(ns poker-site.util)

(defn display [show]
  (if show
    #js {}
    #js {:display "none"}))
