// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.reader.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('pluto.reader.destructuring');
goog.require('pluto.reader.errors');
goog.require('pluto.reader.reference');
goog.require('pluto.utils');
pluto.reader.types.reference_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$query,null,cljs.core.cst$kw$view,null], null), null);
if((typeof pluto !== 'undefined') && (typeof pluto.reader !== 'undefined') && (typeof pluto.reader.types !== 'undefined') && (typeof pluto.reader.types.resolve !== 'undefined')){
} else {
/**
 * Resolve a value based on a type.
 * Returns a map of either:
 *  * data with the resolved data
 *  * errors encapsulating all errors generated during resolution
 */
pluto.reader.types.resolve = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("pluto.reader.types","resolve"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (ctx,ext,type,value){
if((value instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if((type instanceof cljs.core.Keyword)){
return type;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$one_DASH_of.cljs$core$IFn$_invoke$arity$1(type))){
return cljs.core.cst$kw$one_DASH_of;
} else {
if(cljs.core.set_QMARK_(type)){
return cljs.core.cst$kw$subset;
} else {
if(cljs.core.map_QMARK_(type)){
return cljs.core.cst$kw$assoc;
} else {
if(cljs.core.vector_QMARK_(type)){
return cljs.core.cst$kw$sequence;
} else {
return null;
}
}
}
}
}
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$symbol,(function (_,___$1,___$2,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
}));
pluto.reader.types.invalid_type_value = (function pluto$reader$types$invalid_type_value(type,value){
return pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type_DASH_value,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$boolean,(function (_,___$1,___$2,value){
if(cljs.core.boolean_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$boolean,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$number,(function (_,___$1,___$2,value){
if(typeof value === 'number'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$number,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (_,___$1,___$2,value){
if(typeof value === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$string,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyword,(function (_,___$1,___$2,value){
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$keyword,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (_,___$1,___$2,value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$vector,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (_,___$1,___$2,value){
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$map,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$subset,(function (_,___$1,type,value){
if(cljs.core.truth_((function (){var and__3938__auto__ = !((value == null));
if(and__3938__auto__){
return clojure.set.subset_QMARK_(value,type);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$subset,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$one_DASH_of,(function (_,___$1,p__2078,value){
var map__2079 = p__2078;
var map__2079__$1 = ((((!((map__2079 == null)))?(((((map__2079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2079):map__2079);
var one_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2079__$1,cljs.core.cst$kw$one_DASH_of);
var temp__5455__auto__ = (one_of.cljs$core$IFn$_invoke$arity$1 ? one_of.cljs$core$IFn$_invoke$arity$1(value) : one_of.call(null,value));
if(cljs.core.truth_(temp__5455__auto__)){
var o = temp__5455__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,o], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.types.invalid_type_value(cljs.core.cst$kw$one_DASH_of,value)], null)], null);
}
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sequence,(function (ctx,ext,type,value){
if(((cljs.core.vector_QMARK_(type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(type))) && (cljs.core.map_QMARK_(cljs.core.first(type))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pluto.reader.errors.merge_results_with,(function (p1__2081_SHARP_,p2__2082_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__2081_SHARP_),p2__2082_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__2083_SHARP_){
var G__2084 = ctx;
var G__2085 = ext;
var G__2086 = cljs.core.first(type);
var G__2087 = p1__2083_SHARP_;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(G__2084,G__2085,G__2086,G__2087) : pluto.reader.types.resolve.call(null,G__2084,G__2085,G__2086,G__2087));
}),value));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_sequential_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.sentinel = cljs.core.cst$kw$pluto$reader$types_SLASH_sentinel;
pluto.reader.types.property = (function pluto$reader$types$property(name,value){
var normalized_name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(name),"?",""));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3(value,normalized_name,pluto.reader.types.sentinel),cljs.core.cst$kw$name,normalized_name,cljs.core.cst$kw$optional_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name,normalized_name)], null);
});
pluto.reader.types.resolve_property = (function pluto$reader$types$resolve_property(ctx,ext,m,p__2089,type){
var map__2090 = p__2089;
var map__2090__$1 = ((((!((map__2090 == null)))?(((((map__2090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2090):map__2090);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$name);
var optional_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$optional_QMARK_);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2090__$1,cljs.core.cst$kw$value);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pluto.reader.types.sentinel,value)){
var map__2092 = (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,value) : pluto.reader.types.resolve.call(null,ctx,ext,type,value));
var map__2092__$1 = ((((!((map__2092 == null)))?(((((map__2092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2092):map__2092);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2092__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2092__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors((cljs.core.truth_(data)?cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,name], null),data):m),errors);
} else {
if(cljs.core.truth_(optional_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$data,((function (map__2090,map__2090__$1,name,optional_QMARK_,value){
return (function (p1__2088_SHARP_){
if(cljs.core.empty_QMARK_(p1__2088_SHARP_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return p1__2088_SHARP_;
}
});})(map__2090,map__2090__$1,name,optional_QMARK_,value))
);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_property,name)], null));
}
}
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$assoc,(function (ctx,ext,type,value){
if(cljs.core.map_QMARK_(type)){
return cljs.core.reduce_kv((function (p1__2094_SHARP_,p2__2095_SHARP_,p3__2096_SHARP_){
return pluto.reader.types.resolve_property(ctx,ext,p1__2094_SHARP_,pluto.reader.types.property(p2__2095_SHARP_,value),p3__2096_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,type);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_assoc_DASH_type,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$value,value], null))], null)], null);
}
}));
pluto.reader.types.resolve_arguments = (function pluto$reader$types$resolve_arguments(ctx,ext,event,arguments$){
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$capacities,cljs.core.cst$kw$events,event,cljs.core.cst$kw$arguments], null));
if(cljs.core.truth_(temp__5455__auto__)){
var type = temp__5455__auto__;
return (pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4 ? pluto.reader.types.resolve.cljs$core$IFn$_invoke$arity$4(ctx,ext,type,arguments$) : pluto.reader.types.resolve.call(null,ctx,ext,type,arguments$));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_missing_DASH_reference_DASH_arguments,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$events,cljs.core.cst$kw$value,event], null))], null)], null);
}
});
pluto.reader.types.replace_atom = (function pluto$reader$types$replace_atom(env,o){
if(cljs.core.contains_QMARK_(env,o)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,o);
} else {
if((o instanceof cljs.core.Symbol)){
return null;
} else {
if(typeof o === 'string'){
return pluto.utils.interpolate(env,o);
} else {
return o;

}
}
}
});
pluto.reader.types.event_after_env = (function pluto$reader$types$event_after_env(ref,data,args,bindings){
return (function (o,env){
var env__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,cljs.core.reduce_kv((function (p1__2097_SHARP_,p2__2098_SHARP_,p3__2099_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2097_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__2098_SHARP_)),p3__2099_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,o),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(pluto.reader.destructuring.destructure(bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o,args], 0))))], 0));
var dic = cljs.core.reduce_kv(((function (env__$1){
return (function (p1__2100_SHARP_,p2__2101_SHARP_,p3__2102_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2100_SHARP_,p2__2101_SHARP_,((cljs.core.contains_QMARK_(env__$1,p3__2102_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,p3__2102_SHARP_):p3__2102_SHARP_));
});})(env__$1))
,cljs.core.PersistentArrayMap.EMPTY,env__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o,cljs.core.reduce_kv(((function (env__$1,dic){
return (function (p1__2103_SHARP_,p2__2104_SHARP_,p3__2105_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2103_SHARP_,p2__2104_SHARP_,pluto.reader.types.replace_atom(dic,p3__2105_SHARP_));
});})(env__$1,dic))
,cljs.core.PersistentArrayMap.EMPTY,data)], 0))], null);
});
});
pluto.reader.types.reference_with_arguments = (function pluto$reader$types$reference_with_arguments(ctx,ext,ref,event,arguments$,args,bindings){
if(cljs.core.truth_(arguments$)){
var map__2106 = pluto.reader.types.resolve_arguments(ctx,ext,event,arguments$);
var map__2106__$1 = ((((!((map__2106 == null)))?(((((map__2106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2106):map__2106);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2106__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2106__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,pluto.reader.types.event_after_env(ref,data,args,bindings)], null),errors);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(function (o,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,o], null);
})], null);
}
});
pluto.reader.types.reference_symbol = (function pluto$reader$types$reference_symbol(value){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(value,(2));
});
/**
 * A local event must define a let block and have a single destructuring binding accessing 'properties.
 */
pluto.reader.types.local_event_QMARK_ = (function pluto$reader$types$local_event_QMARK_(data){
if(cljs.core.list_QMARK_(data)){
var vec__2108 = data;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2108,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2108,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(data))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))) && (cljs.core.map_QMARK_(cljs.core.first(bindings))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$properties,cljs.core.second(bindings))) && (cljs.core.vector_QMARK_(pluto.reader.types.reference_symbol(data))));
} else {
return null;
}
});
/**
 * References local references defining let blocks
 */
pluto.reader.types.resolve_local_reference = (function pluto$reader$types$resolve_local_reference(ctx,ext,type,p__2111){
var vec__2112 = p__2111;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2112,(0),null);
var value = vec__2112;
var map__2115 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2115__$1 = ((((!((map__2115 == null)))?(((((map__2115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2115):map__2115);
var m = map__2115__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2115__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2115__$1,cljs.core.cst$kw$errors);
if(cljs.core.truth_(data)){
if(cljs.core.truth_(pluto.reader.types.local_event_QMARK_(data))){
var vec__2117 = pluto.reader.types.reference_symbol(data);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2117,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2117,(1),null);
var reference = vec__2117;
var bindings = cljs.core.first(cljs.core.second(data));
var map__2120 = pluto.reader.reference.resolve(ctx,ext,type,reference);
var map__2120__$1 = ((((!((map__2120 == null)))?(((((map__2120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2120):map__2120);
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$data);
var errors__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2120__$1,cljs.core.cst$kw$errors);
return pluto.reader.errors.merge_errors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ref,data__$1,cljs.core.cst$kw$event,event,cljs.core.cst$kw$args,args,cljs.core.cst$kw$bindings,bindings], null)], null),errors__$1);
} else {
if((data instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ref,data,cljs.core.cst$kw$event,name], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_local_DASH_event,data)], null)], null);

}
}
} else {
return m;
}
});
pluto.reader.types.resolve_event = (function pluto$reader$types$resolve_event(ctx,ext,type,p__2122){
var vec__2123 = p__2122;
var symbol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2123,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2123,(1),null);
var value = vec__2123;
var map__2126 = pluto.reader.types.resolve_local_reference(ctx,ext,type,value);
var map__2126__$1 = ((((!((map__2126 == null)))?(((((map__2126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2126):map__2126);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2126__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2126__$1,cljs.core.cst$kw$errors);
var map__2127 = data;
var map__2127__$1 = ((((!((map__2127 == null)))?(((((map__2127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2127):map__2127);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2127__$1,cljs.core.cst$kw$event);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2127__$1,cljs.core.cst$kw$ref);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2127__$1,cljs.core.cst$kw$args);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2127__$1,cljs.core.cst$kw$bindings);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?pluto.reader.types.reference_with_arguments(ctx,ext,ref,event,(function (){var or__3949__auto__ = args;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return arguments$;
}
})(),arguments$,bindings):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_event,symbol)], null),errors)], null):null)], 0));
});
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$event,(function (ctx,ext,type,p__2130){
var vec__2131 = p__2130;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2131,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2131,(1),null);
var value = vec__2131;
return pluto.reader.types.resolve_event(ctx,ext,type,value);
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$query,(function (ctx,ext,type,p__2134){
var vec__2135 = p__2134;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(0),null);
var arguments$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(1),null);
var value = vec__2135;
var map__2138 = pluto.reader.reference.resolve(ctx,ext,type,value);
var map__2138__$1 = ((((!((map__2138 == null)))?(((((map__2138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2138):map__2138);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2138__$1,cljs.core.cst$kw$data);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2138__$1,cljs.core.cst$kw$errors);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(data)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,(cljs.core.truth_(arguments$)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,arguments$], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null))], null):null),(cljs.core.truth_(errors)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_unknown_DASH_query,name)], null),errors)], null):null)], 0));
}));
pluto.reader.types.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,___$1,type,value){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pluto.reader.errors.error.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pluto$reader$errors_SLASH_invalid_DASH_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,type], null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,value], null):null)], 0)))], null)], null);
}));
