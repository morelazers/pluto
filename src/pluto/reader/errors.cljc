(ns pluto.reader.errors
  "Inspired by https://github.com/cognitect-labs/anomalies"
  (:require [clojure.spec.alpha :as spec]))

(spec/def ::type #{::reader-error
                   ::invalid-meta
                   ::invalid-key
                   ::invalid-value
                   ::invalid-property-name
                   ::invalid-property-type
                   ::invalid-property-value
                   ::missing-keys
                   ::unknown-reference
                   ::unknown-component
                   ::invalid-view
                   ::invalid-block
                   ::unsupported-test-type})

(spec/def ::value any?)

(spec/def ::message string?)

(spec/def ::error (spec/keys :req [::type ::value]
                             :opt [::message]))

(defn valid-type? [type]
  (spec/valid? ::type type))

(defn error
  ([type o] (error type o {}))
  ([type o m]
   {:pre [(valid-type? type)]}
   (assoc m ::type type ::value o)))

(defn accumulate-errors [m s]
  (update m :errors concat s))

(defn merge-errors [m errors]
  (cond-> m
          (seq errors) (accumulate-errors errors)))

(defn update-errors [m errors]
  (if (seq errors)
    (update m :errors concat errors)
    m))

(defn merge-result [m {:keys [data errors]}]
  (-> m
      (update :data merge data)
      (update-errors errors)))

(defn merge-results [& ms]
  (reduce merge-result {} ms))
