// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('pluto.storage.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pluto.storage');
pluto.storage.http.result = (function pluto$storage$http$result(xhr){
var status = xhr.status;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((404),status)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$value,status], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$success,cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content,xhr.responseText], null)], null)], null);
}
});

/**
* @constructor
 * @implements {pluto.storage.Storage}
*/
pluto.storage.http.HTTPStorage = (function (){
});
pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$ = cljs.core.PROTOCOL_SENTINEL;

pluto.storage.http.HTTPStorage.prototype.pluto$storage$Storage$fetch$arity$3 = (function (_,p__7431,callback){
var self__ = this;
var map__7432 = p__7431;
var map__7432__$1 = ((((!((map__7432 == null)))?(((((map__7432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7432):map__7432);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7432__$1,cljs.core.cst$kw$value);
var ___$1 = this;
var xhr = (new XMLHttpRequest());
xhr.open("GET",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"/extension.edn"].join(''),true);

xhr.send(null);

return xhr.onreadystatechange = ((function (xhr,___$1,map__7432,map__7432__$1,value){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.readyState,(4))){
var G__7434 = pluto.storage.http.result(xhr);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__7434) : callback.call(null,G__7434));
} else {
return null;
}
});})(xhr,___$1,map__7432,map__7432__$1,value))
;
});

pluto.storage.http.HTTPStorage.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

pluto.storage.http.HTTPStorage.cljs$lang$type = true;

pluto.storage.http.HTTPStorage.cljs$lang$ctorStr = "pluto.storage.http/HTTPStorage";

pluto.storage.http.HTTPStorage.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"pluto.storage.http/HTTPStorage");
});

/**
 * Positional factory function for pluto.storage.http/HTTPStorage.
 */
pluto.storage.http.__GT_HTTPStorage = (function pluto$storage$http$__GT_HTTPStorage(){
return (new pluto.storage.http.HTTPStorage());
});

