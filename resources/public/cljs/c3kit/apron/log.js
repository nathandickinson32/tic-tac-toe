// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.log');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('clojure.string');
goog.require('taoensso.timbre');
c3kit.apron.log.captured_logs = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
 * Arity overrides for timbre/-log!
 */
c3kit.apron.log.capture_log_BANG_ = (function c3kit$apron$log$capture_log_BANG_(var_args){
var G__14122 = arguments.length;
switch (G__14122) {
case 9:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
cljs.core.swap_BANG_.call(null,c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
cljs.core.swap_BANG_.call(null,c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
cljs.core.swap_BANG_.call(null,c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$core$IFn$_invoke$arity$12 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,_QMARK_column,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
cljs.core.swap_BANG_.call(null,c3kit.apron.log.captured_logs,cljs.core.conj,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,_QMARK_column,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_], null));

return null;
}));

(c3kit.apron.log.capture_log_BANG_.cljs$lang$maxFixedArity = 12);

c3kit.apron.log.test_levels = (function c3kit$apron$log$test_levels(msg){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"report","report",1394055010),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(27),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"fatal","fatal",1874419888),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(28),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(29),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(30),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(31),null);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(32),null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(33),null);
});
c3kit.apron.log.level = (function c3kit$apron$log$level(){
return new cljs.core.Keyword(null,"min-level","min-level",1634684919).cljs$core$IFn$_invoke$arity$1(taoensso.timbre._STAR_config_STAR_);
});
c3kit.apron.log.set_level_BANG_ = (function c3kit$apron$log$set_level_BANG_(new_level){
if(cljs.core._EQ_.call(null,c3kit.apron.log.level.call(null),new_level)){
return null;
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"report","report",1394055010),"c3kit.apron.log",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Setting log level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_level)].join('')], null);
}),null)),null,(34),null);

return taoensso.timbre.set_min_level_BANG_.call(null,new_level);
}
});
c3kit.apron.log.off_BANG_ = (function c3kit$apron$log$off_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"report","report",1394055010));
});
c3kit.apron.log.fatal_BANG_ = (function c3kit$apron$log$fatal_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888));
});
c3kit.apron.log.error_BANG_ = (function c3kit$apron$log$error_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));
});
c3kit.apron.log.warn_BANG_ = (function c3kit$apron$log$warn_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552));
});
c3kit.apron.log.info_BANG_ = (function c3kit$apron$log$info_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"info","info",-317069002));
});
c3kit.apron.log.debug_BANG_ = (function c3kit$apron$log$debug_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
});
c3kit.apron.log.all_BANG_ = (function c3kit$apron$log$all_BANG_(){
return c3kit.apron.log.set_level_BANG_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415));
});
c3kit.apron.log.parse_captured_logs = (function c3kit$apron$log$parse_captured_logs(){
return cljs.core.map.call(null,(function (p1__14125_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"message","message",-406056002)],[cljs.core.nth.call(null,p1__14125_SHARP_,(1)),cljs.core.apply.call(null,cljs.core.str,cljs.core.deref.call(null,cljs.core.nth.call(null,p1__14125_SHARP_,(8))))]);
}),cljs.core.deref.call(null,c3kit.apron.log.captured_logs));
});
c3kit.apron.log.captured_logs_str = (function c3kit$apron$log$captured_logs_str(){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__14126_SHARP_){
return clojure.string.join.call(null," ",cljs.core.deref.call(null,cljs.core.nth.call(null,p1__14126_SHARP_,(8))));
}),cljs.core.deref.call(null,c3kit.apron.log.captured_logs)));
});
c3kit.apron.log.table_spec = (function c3kit$apron$log$table_spec(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14129 = arguments.length;
var i__5750__auto___14130 = (0);
while(true){
if((i__5750__auto___14130 < len__5749__auto___14129)){
args__5755__auto__.push((arguments[i__5750__auto___14130]));

var G__14131 = (i__5750__auto___14130 + (1));
i__5750__auto___14130 = G__14131;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var width = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.second,cols)) + cljs.core.count.call(null,cols));
var format_str = clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__14127_SHARP_){
return ["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__14127_SHARP_)),"s"].join('');
}),cols));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"format","format",-1306924766),format_str,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"title-fn","title-fn",-1701019188),(function (title){
var pad = ((width - title.length()) / (2));
return [clojure.string.join.call(null,"",cljs.core.take.call(null,pad,cljs.core.repeat.call(null," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n"].join('');
}),new cljs.core.Keyword(null,"header","header",119441134),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.partial.call(null,c3kit.apron.corec.formats,format_str),cljs.core.map.call(null,cljs.core.first,cols))),"\n",clojure.string.join.call(null,"",cljs.core.take.call(null,width,cljs.core.repeat.call(null,"-"))),"\n"].join('')], null);
}));

(c3kit.apron.log.table_spec.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.log.table_spec.cljs$lang$applyTo = (function (seq14128){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14128));
}));

/**
 * For ANSI color codes: https://en.wikipedia.org/wiki/ANSI_escape_code
 */
c3kit.apron.log.color_pr = (function c3kit$apron$log$color_pr(message,color){
return cljs.core.println.call(null,["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\u001B[0m"].join(''));
});
c3kit.apron.log._platform_time = (function c3kit$apron$log$_platform_time(){
return (new Date()).getTime();
});
c3kit.apron.log._nanos = (function c3kit$apron$log$_nanos(){
return (performance.now() * 1000.0);
});
var ret__5804__auto___14135 = /**
 * Same as clojure.core/time but logs (info) instead of printing elapsed time.
 */
c3kit.apron.log.time = (function c3kit$apron$log$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"start__14132__auto__","start__14132__auto__",-936656034,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("c3kit.apron.log","-nanos","c3kit.apron.log/-nanos",-240009368,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__14133__auto__","ret__14133__auto__",194763371,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"millis__14134__auto__","millis__14134__auto__",-956880995,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("c3kit.apron.log","-nanos","c3kit.apron.log/-nanos",-240009368,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"start__14132__auto__","start__14132__auto__",-936656034,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,1000000.0,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("c3kit.apron.log","info","c3kit.apron.log/info",2011604653,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"millis__14134__auto__","millis__14134__auto__",-956880995,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__14133__auto__","ret__14133__auto__",194763371,null),null,(1),null)))));
});
(c3kit.apron.log.time.cljs$lang$macro = true);


//# sourceMappingURL=log.js.map
