(ns pluto.reader
  "Read time: string to data structure, only tags are replaced by records
   Parse time: validate all the things, produce hiccup than can be used as is
   # Read
   # Parse
     * properties/children are defined as symbol only, can be defined in element having fn semantic (view, event, ..), are unified at parse time
     * conditionals are defined as list with symbol as first element. Replaced at parse time by references to corresponding reagent component
     * let (lexical scoping). No shadowing support (error). Resolve in local scope then delegate to :outer (chain collected from parents)
     * permissions required are accumulated at parse time
   # Activate
    * based on hooks, inject views / trigger events"
  (:refer-clojure :exclude [read])
  (:require [clojure.set              :as set]
            [clojure.spec.alpha       :as spec]
            [clojure.tools.reader.edn :as edn]
            [pluto.reader.errors      :as errors]
            [pluto.reader.hooks       :as hooks]
            pluto.reader.views
            [pluto.utils              :as utils]))

(defn reader-error [ex]
  (errors/error ::errors/reader-error (:ex-kind (ex-data ex))
                (merge {::errors/message (utils/ex-message ex)}
                       (when-let [c (utils/ex-cause ex)]
                         {:cause c}))))

(defn ^:export read
  "Reads an extension definition as an EDN string.

   No semantic validation is performed at this stage.

   Returns a map defining:
   * :data the extension definition as a map
   * :errors a vector of errors map triggered during read"
  [s]
  (try
    {:data (edn/read-string {} s)}
    (catch #?(:clj Exception :cljs :default) ex
      {:errors [(reader-error ex)]})))

;; Validation

(def mandatory-keys #{'meta})
(def valid-keys mandatory-keys)

(defn capacity? [m s]
  (let [keys (set (map name (keys m)))]
    (keys (name s))))

(defmulti valid-element? (fn [_ k _] (or (namespace k) (name k))))

(spec/def ::meta (spec/keys :req-un [::name ::description ::documentation]))

(spec/def ::hooks map?)

(defmethod valid-element? "hooks" [{:keys [hooks]} k v]
  (if (capacity? hooks (hooks/root-id k))
    (when-not (spec/valid? ::hooks v)
      [(errors/error ::errors/invalid-value k)])
    [(errors/error ::errors/invalid-key k)]))

(defmethod valid-element? "queries" [{:keys [queries]} k v])

(defmethod valid-element? "events" [{:keys [events]} k v])

(defmethod valid-element? "events" [{:keys [events]} k v])

(defmethod valid-element? "views" [_ _ _])

(defmethod valid-element? :default [_ k _]
  [(errors/error ::errors/invalid-key k)])

(defn validate [{:keys [capacities]} m]
  (let [keys         (set (keys m))
        missing-keys (set/difference mandatory-keys keys)]
    (reduce-kv #(if-let [errors (valid-element? capacities %2 %3)] (concat %1 errors) %1)
               (when (seq missing-keys) [(errors/error ::errors/missing-keys missing-keys)])
               (dissoc m 'meta))))

(defn parse-meta [v]
  (if (spec/valid? ::meta v)
    {:data {'meta v}}
    {:errors [(errors/error ::errors/invalid-meta v)]}))

(defn ^:export parse
  "Parse an extension definition map as encapsulated in :data key of the map returned by read.
   `ctx` is a map defining:
   * `capacities` a map of valid supported capacities (hooks, queries, events)

   Returns a map defining:
   * :data a map of meta and parsed hooks
   * :permissions a vector of required permissions
   * :errors a vector of errors maps triggered during parse"
  [ctx m]
  (let [errors (validate ctx m)]
    (errors/merge-results
      (parse-meta ('meta m))
      (hooks/parse ctx m)
      {:errors errors})))
