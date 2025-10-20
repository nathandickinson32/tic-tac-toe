// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

var cljs_time$coerce$ICoerce$to_date_time$dyn_21742 = (function (obj){
var x__5373__auto__ = (((obj == null))?null:obj);
var m__5374__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,obj);
} else {
var m__5372__auto__ = (cljs_time.coerce.to_date_time["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((((!((obj == null)))) && ((!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
return cljs_time$coerce$ICoerce$to_date_time$dyn_21742.call(null,obj);
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__21741 = millis;
if((G__21741 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__21741);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__5503__auto__ = (function cljs_time$coerce$from_string_$_iter__21743(s__21744){
return (new cljs.core.LazySeq(null,(function (){
var s__21744__$1 = s__21744;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__21744__$1);
if(temp__5825__auto__){
var s__21744__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21744__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__21744__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__21746 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__21745 = (0);
while(true){
if((i__21745 < size__5502__auto__)){
var f = cljs.core._nth.call(null,c__5501__auto__,i__21745);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e21747){if((e21747 instanceof Error)){
var _ = e21747;
return null;
} else {
throw e21747;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__21746,d);

var G__21758 = (i__21745 + (1));
i__21745 = G__21758;
continue;
} else {
var G__21760 = (i__21745 + (1));
i__21745 = G__21760;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21746),cljs_time$coerce$from_string_$_iter__21743.call(null,cljs.core.chunk_rest.call(null,s__21744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21746),null);
}
} else {
var f = cljs.core.first.call(null,s__21744__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e21748){if((e21748 instanceof Error)){
var _ = e21748;
return null;
} else {
throw e21748;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__21743.call(null,cljs.core.rest.call(null,s__21744__$2)));
} else {
var G__21765 = cljs.core.rest.call(null,s__21744__$2);
s__21744__$1 = G__21765;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__21749 = date;
var G__21749__$1 = (((G__21749 == null))?null:G__21749.getTime());
if((G__21749__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__21749__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__21750 = obj;
var G__21750__$1 = (((G__21750 == null))?null:cljs_time.coerce.to_date_time.call(null,G__21750));
if((G__21750__$1 == null)){
return null;
} else {
return G__21750__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long.call(null,obj);
var and__5023__auto__ = millis;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.quot.call(null,millis,(1000));
} else {
return and__5023__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__21754 = obj;
var G__21754__$1 = (((G__21754 == null))?null:cljs_time.coerce.to_date_time.call(null,G__21754));
var G__21754__$2 = (((G__21754__$1 == null))?null:G__21754__$1.getTime());
if((G__21754__$2 == null)){
return null;
} else {
return (new Date(G__21754__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__21756 = obj;
var G__21756__$1 = (((G__21756 == null))?null:cljs_time.coerce.to_date_time.call(null,G__21756));
if((G__21756__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__21756__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.call(null,goog.date.Date,cljs.core.type.call(null,obj))){
return obj;
} else {
var temp__5823__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5823__auto__)){
var dt = temp__5823__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5823__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__5823__auto__)){
var dt = temp__5823__auto__;
var G__21761 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__21761.setHours(dt.getHours());

G__21761.setMinutes(dt.getMinutes());

G__21761.setSeconds(dt.getSeconds());

G__21761.setMilliseconds(dt.getMilliseconds());

return G__21761;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

(Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
}));

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
}));

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
}));

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL);

(goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
}));

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map
