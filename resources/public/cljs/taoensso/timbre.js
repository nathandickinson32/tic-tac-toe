// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
goog.require('goog.i18n.DateTimeFormat');
taoensso.encore.assert_min_encore_version.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(85),(0)], null));
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20341 = arguments.length;
var i__5750__auto___20342 = (0);
while(true){
if((i__5750__auto___20342 < len__5749__auto___20341)){
args__5755__auto__.push((arguments[i__5750__auto___20342]));

var G__20343 = (i__5750__auto___20342 + (1));
i__5750__auto___20342 = G__20343;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.call(null,f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq20337){
var G__20338 = cljs.core.first.call(null,seq20337);
var seq20337__$1 = cljs.core.next.call(null,seq20337);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20338,seq20337__$1);
}));

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_.call(null,(function (_old){
return config;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.encore.nested_merge.call(null,old,config);
}));
});
var err_20354 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_20355 = (function (p1__20345_SHARP_){
var G__20349 = p1__20345_SHARP_;
var G__20349__$1 = (((G__20349 instanceof cljs.core.Keyword))?G__20349.fqn:null);
switch (G__20349__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_20355.call(null,x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_20355.call(null,x))){
return x;
} else {
throw cljs.core.ex_info.call(null,err_20354,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__5025__auto__ = level__GT_int_20355.call(null,x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.call(null,err_20354,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
var valid_level__GT_int_20357 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return (valid_level__GT_int_20357.call(null,x) >= valid_level__GT_int_20357.call(null,y));
});
var fn_QMARK__20371 = cljs.core.fn_QMARK_;
var compile_20372 = taoensso.encore.fmemoize.call(null,(function (x){
return taoensso.encore.name_filter.call(null,x);
}));
var conform_QMARK__STAR__20373 = taoensso.encore.fmemoize.call(null,(function (x,ns){
return compile_20372.call(null,x).call(null,ns);
}));
var conform_QMARK__20374 = (function (ns_filter,ns){
if(cljs.core.truth_(fn_QMARK__20371.call(null,ns_filter))){
return ns_filter.call(null,ns);
} else {
return conform_QMARK__STAR__20373.call(null,ns_filter,ns);
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__20374.call(null,ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize.call(null,(function (specs,ns){
return taoensso.encore.rsome.call(null,(function (p__20364){
var vec__20365 = p__20364;
var ns_pattern = cljs.core.nth.call(null,vec__20365,(0),null);
var min_level = cljs.core.nth.call(null,vec__20365,(1),null);
if(cljs.core.truth_(conform_QMARK__STAR__20373.call(null,ns_pattern,ns))){
return taoensso.timbre.valid_level.call(null,min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_20379 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_20380 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
return valid_level_20379.call(null,(function (){var or__5025__auto__ = ((cljs.core.vector_QMARK_.call(null,x))?ns__GT__QMARK_min_level_20380.call(null,x,ns):x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
})());
});
var leglist_20382 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]).call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_20382.call(null,ns_whitelist);
var ns_blacklist__$1 = leglist_20382.call(null,ns_blacklist);
if(cljs.core.truth_((function (){var or__5025__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow","allow",-1857325745),ns_whitelist__$1,new cljs.core.Keyword(null,"deny","deny",1589338523),ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__20401 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__20402 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_20403 = taoensso.timbre.get_min_level;
var legacy_ns_filter_20404 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__20383 = arguments.length;
switch (G__20383) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,_QMARK_config);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__5025__auto__ = _QMARK_config;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = get_min_level_20403.call(null,default_min_level,(function (){var or__5025__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,config,new cljs.core.Keyword(null,"level","level",1290497552));
}
})(),_QMARK_ns_str);
if(cljs.core.truth_(level_GT__EQ__20401.call(null,level,min_level))){
var temp__5823__auto__ = (function (){var or__5025__auto__ = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return legacy_ns_filter_20404.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-whitelist","ns-whitelist",-1717299774)),cljs.core.get.call(null,config,new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142)));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var ns_filter = temp__5823__auto__;
if(cljs.core.truth_(may_log_ns_QMARK__20402.call(null,ns_filter,_QMARK_ns_str))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.set_min_level = (function taoensso$timbre$set_min_level(config,min_level){
return cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919),taoensso.timbre.valid_level.call(null,min_level));
});
taoensso.timbre.set_min_level_BANG_ = (function taoensso$timbre$set_min_level_BANG_(min_level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (old){
return taoensso.timbre.set_min_level.call(null,old,min_level);
}));
});
/**
 * Returns given Timbre `config` with its `:min-level` modified so that
 *   the given namespace has the specified minimum logging level.
 * 
 *   When no namespace is provided, `*ns*` will be used.
 *   When `?min-level` is nil, any minimum level specifications for the
 *   *exact* given namespace will be removed.
 * 
 *   See `*config*` docstring for more about `:min-level`.
 *   See also `set-min-level!` for a util to directly modify `*config*`.
 */
taoensso.timbre.set_ns_min_level = (function taoensso$timbre$set_ns_min_level(config,ns,_QMARK_min_level){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var e = (function (){try{if((!((ns == null)))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20427){if((e20427 instanceof Error)){
var e = e20427;
return e;
} else {
throw e20427;

}
}})();
if((e == null)){
return ns;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.timbre","taoensso.timbre",407940729,null),252,18,"/Users/nathandickinson/Projects/tic-tac-toe/resources/public/cljs/taoensso/timbre.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),ns,e,null);
}
})());
var min_level_STAR_ = (function (){var x = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919));
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",taoensso.timbre.valid_level.call(null,x)], null)], null);
}
})();
var min_level_STAR___$1 = cljs.core.reduce.call(null,(function (acc,p__20428){
var vec__20429 = p__20428;
var ns_pattern = cljs.core.nth.call(null,vec__20429,(0),null);
var _pattern_min_level = cljs.core.nth.call(null,vec__20429,(1),null);
var entry = vec__20429;
var temp__5823__auto__ = ((cljs.core._EQ_.call(null,ns_pattern,ns__$1)) || (cljs.core._EQ_.call(null,ns_pattern,cljs.core.PersistentHashSet.createAsIfByAssoc([ns__$1]))));
if(temp__5823__auto__){
var exact_match_QMARK_ = temp__5823__auto__;
return acc;
} else {
return cljs.core.conj.call(null,acc,entry);
}
}),(function (){var temp__5823__auto__ = _QMARK_min_level;
if(cljs.core.truth_(temp__5823__auto__)){
var new_min_level = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,taoensso.timbre.valid_level.call(null,new_min_level)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),min_level_STAR_);
var min_level_STAR___$2 = (function (){var temp__5823__auto__ = ((cljs.core._EQ_.call(null,cljs.core.count.call(null,min_level_STAR___$1),(1)))?(function (){var vec__20432 = min_level_STAR___$1;
var vec__20435 = cljs.core.nth.call(null,vec__20432,(0),null);
var ns_pattern = cljs.core.nth.call(null,vec__20435,(0),null);
var level = cljs.core.nth.call(null,vec__20435,(1),null);
if(cljs.core._EQ_.call(null,ns_pattern,"*")){
return level;
} else {
return null;
}
})():null);
if(cljs.core.truth_(temp__5823__auto__)){
var simplified = temp__5823__auto__;
return simplified;
} else {
return cljs.core.not_empty.call(null,min_level_STAR___$1);
}
})();
return cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"min-level","min-level",1634684919),min_level_STAR___$2);
});
var ret__5804__auto___20441 = (function (){
/**
 * Like `set-ns-min-level` but directly modifies `*config*`.
 * 
 *   Can conveniently set the minimum log level for the current ns:
 *  (set-ns-min-level! :info) => Sets min-level for current *ns*
 * 
 *   See `set-ns-min-level` for details.
 */
taoensso.timbre.set_ns_min_level_BANG_ = (function taoensso$timbre$set_ns_min_level_BANG_(var_args){
var G__20440 = arguments.length;
switch (G__20440) {
case 3:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_min_level){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","set-ns-min-level!","taoensso.timbre/set-ns-min-level!",50625106,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),null,(1),null)),(new cljs.core.List(null,_QMARK_min_level,null,(1),null)))));
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,ns,_QMARK_min_level){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","swap-config!","taoensso.timbre/swap-config!",-923245809,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"config__20438__auto__","config__20438__auto__",1342855272,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("taoensso.timbre","set-ns-min-level","taoensso.timbre/set-ns-min-level",1904371957,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"config__20438__auto__","config__20438__auto__",1342855272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),null,(1),null)),(new cljs.core.List(null,_QMARK_min_level,null,(1),null))))),null,(1),null))))),null,(1),null)))));
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(taoensso.timbre.set_ns_min_level_BANG_.cljs$lang$macro = true);

if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize.call(null,(function (appender_id,specs){
return taoensso.encore.rate_limiter.call(null,specs);
}));
}
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__20443 = timestamp_opts;
var map__20443__$1 = cljs.core.__destructure_map.call(null,map__20443);
var pattern = cljs.core.get.call(null,map__20443__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
if(cljs.core.keyword_identical_QMARK_.call(null,pattern,new cljs.core.Keyword(null,"iso8601","iso8601",609352650))){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = cljs.core.keyword_identical_QMARK_.call(null,_QMARK_err,new cljs.core.Keyword(null,"auto","auto",-566279492));
var fmt_msg_QMARK_ = cljs.core.keyword_identical_QMARK_.call(null,msg_type,new cljs.core.Keyword(null,"f","f",-1597136552));
var vec__20444 = vargs;
var v0 = cljs.core.nth.call(null,vec__20444,(0),null);
if(((auto_error_QMARK_) && (taoensso.encore.error_QMARK_.call(null,v0)))){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest.call(null,vargs);
var _QMARK_msg_fmt = ((fmt_msg_QMARK_)?(function (){var vec__20447 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__20447,(0),null);
return v0__$1;
})():null);
var vargs__$2 = ((fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.map_QMARK_.call(null,v0);
if(and__5023__auto__){
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v0));
} else {
return and__5023__auto__;
}
})())?v0:null);
var _QMARK_err__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(auto_error_QMARK_){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.call(null,_QMARK_meta,new cljs.core.Keyword(null,"err","err",-2089457205));
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest.call(null,vargs):vargs);
var _QMARK_msg_fmt = ((fmt_msg_QMARK_)?(function (){var vec__20450 = vargs__$1;
var v0__$1 = cljs.core.nth.call(null,vec__20450,(0),null);
return v0__$1;
})():null);
var vargs__$2 = ((fmt_msg_QMARK_)?taoensso.encore.vrest.call(null,vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.protected_fn = (function taoensso$timbre$protected_fn(error_msg,f){
return (function (data){
try{return f.call(null,data);
}catch (e20453){var t = e20453;
var map__20454 = data;
var map__20454__$1 = cljs.core.__destructure_map.call(null,map__20454);
var level = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_ns_str = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var _QMARK_line = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var _QMARK_column = cljs.core.get.call(null,map__20454__$1,new cljs.core.Keyword(null,"?column","?column",1004649085));
throw cljs.core.ex_info.call(null,error_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),f,new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"loc","loc",-584284901),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",441598760),_QMARK_ns_str,new cljs.core.Keyword(null,"file","file",-1269645878),_QMARK_file,new cljs.core.Keyword(null,"line","line",212345235),_QMARK_line], null)], null),t);
}});
});



/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__20456 = arguments.length;
switch (G__20456) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,null,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,null,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
return taoensso.timbre._log_BANG_.call(null,config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,null,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$12 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,_QMARK_column,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,config)){
var instant_20463 = (new Date());
var context_20464 = taoensso.timbre._STAR_context_STAR_;
var vargs_20465 = cljs.core.deref.call(null,vargs_);
var vec__20457_20466 = taoensso.timbre.parse_vargs.call(null,_QMARK_err,msg_type,vargs_20465);
var _QMARK_err_20467__$1 = cljs.core.nth.call(null,vec__20457_20466,(0),null);
var _QMARK_meta_20468 = cljs.core.nth.call(null,vec__20457_20466,(1),null);
var _QMARK_msg_fmt_20469 = cljs.core.nth.call(null,vec__20457_20466,(2),null);
var vargs_20470__$1 = cljs.core.nth.call(null,vec__20457_20466,(3),null);
var data_20471 = cljs.core.conj.call(null,(function (){var or__5025__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"instant","instant",655498374),new cljs.core.Keyword(null,"spying?","spying?",1753444487),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"vargs","vargs",-966597273),new cljs.core.Keyword(null,"?file","?file",1533429675),new cljs.core.Keyword(null,"error-level?","error-level?",778415885),new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822),new cljs.core.Keyword(null,"?err","?err",549653299),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"?line","?line",-631853385),new cljs.core.Keyword(null,"?meta","?meta",-793560773),new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891),new cljs.core.Keyword(null,"?column","?column",1004649085)],[instant_20463,spying_QMARK_,config,vargs_20470__$1,_QMARK_file,cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),level),_QMARK_ns_str,level,msg_type,_QMARK_err_20467__$1,context_20464,_QMARK_line,_QMARK_meta_20468,_QMARK_msg_fmt_20469,_QMARK_column]));
var _QMARK_data_20472 = cljs.core.reduce.call(null,(function (acc,mf){
var result = mf.call(null,acc);
if((result == null)){
return cljs.core.reduced.call(null,null);
} else {
return result;
}
}),data_20471,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"middleware","middleware",1462115504)));
var temp__5825__auto___20475 = _QMARK_data_20472;
if(cljs.core.truth_(temp__5825__auto___20475)){
var data_20477__$1 = temp__5825__auto___20475;
var map__20460_20478 = data_20477__$1;
var map__20460_20479__$1 = cljs.core.__destructure_map.call(null,map__20460_20478);
var vargs_20480__$2 = cljs.core.get.call(null,map__20460_20479__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var data_20481__$2 = taoensso.encore.assoc_nx.call(null,data_20477__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return taoensso.timbre.protected_fn.call(null,"Timbre error when calling (msg-fn <data>)",taoensso.timbre.default_output_msg_fn).call(null,data_20477__$1);
}),null)),new cljs.core.Keyword(null,"hash_","hash_",-827203612),(new cljs.core.Delay((function (){
return cljs.core.hash.call(null,(function (){var b2__1585__auto__ = cljs.core.get.call(null,_QMARK_meta_20468,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(b2__1585__auto__)){
var id = b2__1585__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,callsite_id,level], null);
} else {
var b2__1585__auto____$1 = cljs.core.get.call(null,_QMARK_meta_20468,new cljs.core.Keyword(null,"id!","id!",218090956));
if(cljs.core.truth_(b2__1585__auto____$1)){
var id = b2__1585__auto____$1;
return id;
} else {
var b2__1585__auto____$2 = cljs.core.get.call(null,_QMARK_meta_20468,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(b2__1585__auto____$2)){
var h = b2__1585__auto____$2;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,callsite_id,_QMARK_msg_fmt_20469,level], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs_20480__$2,callsite_id,_QMARK_msg_fmt_20469,level], null);
}
}
}
})());
}),null)));
var get_timestamp_delay_20482 = (function (){var get_shared_delay = taoensso.encore.fmemoize.call(null,(function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp.call(null,opts,cljs.core.get.call(null,data_20481__$2,new cljs.core.Keyword(null,"instant","instant",655498374)));
}),null));
}));
var base_opts_ = (new cljs.core.Delay((function (){
return cljs.core.conj.call(null,taoensso.timbre.default_timestamp_opts,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
}),null));
return (function (_QMARK_appender_opts){
if((((_QMARK_appender_opts == null)) || (cljs.core.keyword_identical_QMARK_.call(null,_QMARK_appender_opts,new cljs.core.Keyword(null,"inherit","inherit",-1840815422))))){
return get_shared_delay.call(null,cljs.core.deref.call(null,base_opts_));
} else {
return get_shared_delay.call(null,cljs.core.conj.call(null,cljs.core.deref.call(null,base_opts_),_QMARK_appender_opts));
}
});
})();
var get_output_fn_20483 = (function (){var base_fn = taoensso.encore.fmemoize.call(null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn));
return (function (_QMARK_appender_fn){
return taoensso.timbre.protected_fn.call(null,"Timbre error when calling (output-fn <data>)",(((((_QMARK_appender_fn == null)) || (cljs.core.keyword_identical_QMARK_.call(null,_QMARK_appender_fn,new cljs.core.Keyword(null,"inherit","inherit",-1840815422)))))?base_fn:_QMARK_appender_fn));
});
})();
var base_output_opts_20484 = cljs.core.get.call(null,config,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
cljs.core.reduce_kv.call(null,(function (_,id,appender){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057));
if(cljs.core.truth_(and__5023__auto__)){
return taoensso.timbre.may_log_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),level,_QMARK_ns_str,appender);
} else {
return and__5023__auto__;
}
})())){
var rate_limit_specs = cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022));
var rate_limit_okay_QMARK_ = (function (){var or__5025__auto__ = cljs.core.empty_QMARK_.call(null,rate_limit_specs);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var rl_fn = taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs);
return cljs.core.not.call(null,rl_fn.call(null,cljs.core.force.call(null,cljs.core.get.call(null,data_20481__$2,new cljs.core.Keyword(null,"hash_","hash_",-827203612)))));
}
})();
if(rate_limit_okay_QMARK_){
var map__20461 = appender;
var map__20461__$1 = cljs.core.__destructure_map.call(null,map__20461);
var apfn = cljs.core.get.call(null,map__20461__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var async_QMARK_ = cljs.core.get.call(null,map__20461__$1,new cljs.core.Keyword(null,"async?","async?",1523057758));
var timestamp_ = get_timestamp_delay_20482.call(null,cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807)));
var output_fn = get_output_fn_20483.call(null,cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539)));
var output_opts = (function (){var or__5025__auto__ = cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return base_output_opts_20484;
}
})();
var output_ = (new cljs.core.Delay((function (){
return output_fn.call(null,cljs.core.assoc.call(null,data_20481__$2,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),output_opts));
}),null));
var data__$3 = cljs.core.conj.call(null,data_20481__$2,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"appender-id","appender-id",-1917983538),id,new cljs.core.Keyword(null,"appender","appender",1267426510),appender,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),output_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),output_fn,new cljs.core.Keyword(null,"output_","output_",-36797880),output_,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417),timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5823__auto__ = cljs.core.get.call(null,appender,new cljs.core.Keyword(null,"middleware-fn","middleware-fn",-61585752));
if(cljs.core.truth_(temp__5823__auto__)){
var mfn = temp__5823__auto__;
return mfn.call(null,data__$3);
} else {
return data__$3;
}
})();
var temp__5825__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5825__auto____$1)){
var data__$4 = temp__5825__auto____$1;
return apfn.call(null,data__$4);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.get.call(null,config,new cljs.core.Keyword(null,"appenders","appenders",1245583998)));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 12);

if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.callsite_counter !== 'undefined')){
} else {
/**
 * Simple counter, used to uniquely identify each log macro expansion.
 */
taoensso.timbre.callsite_counter = taoensso.encore.counter.call(null);
}
/**
 * Default (fn [data]) -> final output string, used to produce
 *   final formatted output_ string from final log data.
 * 
 *   Options (included as `:output-opts` in data sent to fns below):
 * 
 *  :error-fn ; When present and (:?err data) present,
 *            ; (error-fn data) will be called to generate output
 *            ; (e.g. a stacktrace) for the error.
 *            ;
 *            ; Default value: `default-output-error-fn`.
 *            ; Use `nil` value to exclude error output.
 * 
 *  :msg-fn   ; When present, (msg-fn data) will be called to
 *            ; generate a message from `vargs` (vector of raw
 *            ; logging arguments).
 *            ;
 *            ; Default value: `default-output-msg-fn`.
 *            ; Use `nil` value to exclude message output.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__20488 = arguments.length;
switch (G__20488) {
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (base_output_opts,data){
var data__$1 = ((cljs.core.empty_QMARK_.call(null,base_output_opts))?data:cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),cljs.core.conj.call(null,base_output_opts,cljs.core.get.call(null,data,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325)))));
return taoensso.timbre.default_output_fn.call(null,data__$1);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
var map__20489 = data;
var map__20489__$1 = cljs.core.__destructure_map.call(null,map__20489);
var level = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var _QMARK_ns_str = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
var output_opts = cljs.core.get.call(null,map__20489__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
return [(function (){var temp__5825__auto__ = cljs.core.force.call(null,timestamp_);
if(cljs.core.truth_(temp__5825__auto__)){
var ts = temp__5825__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case.call(null,cljs.core.name.call(null,level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = _QMARK_line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = cljs.core.get.call(null,output_opts,new cljs.core.Keyword(null,"msg-fn","msg-fn",-1873033940),taoensso.timbre.default_output_msg_fn);
if(cljs.core.truth_(temp__5825__auto__)){
var msg_fn = temp__5825__auto__;
return msg_fn.call(null,data);
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5825__auto__)){
var err = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.call(null,output_opts,new cljs.core.Keyword(null,"error-fn","error-fn",-171437615),taoensso.timbre.default_output_error_fn);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ef = temp__5825__auto____$1;
if(cljs.core.truth_(cljs.core.get.call(null,output_opts,new cljs.core.Keyword(null,"no-stacktrace?","no-stacktrace?",1701072694)))){
return null;
} else {
try{return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ef.call(null,data))].join('');
}catch (e20493){var _ = e20493;
return ["\n","[TIMBRE WARNING]: `error-fn` failed, falling back to `pr-str`:","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){try{return cljs.core.pr_str.call(null,err);
}catch (e20495){var ___$1 = e20495;
return "<pr-str failed>";
}})())].join('');
}}
} else {
return null;
}
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);

taoensso.timbre.default_arg__GT_str_fn = (function taoensso$timbre$default_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(typeof x === 'string'){
return x;
} else {
return cljs.core.pr_str.call(null,x);
}
}
});
taoensso.timbre.legacy_arg__GT_str_fn = (function taoensso$timbre$legacy_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(cljs.core.record_QMARK_.call(null,x)){
return cljs.core.pr_str.call(null,x);
} else {
return x;
}
}
});
taoensso.timbre.str_join = (function taoensso$timbre$str_join(var_args){
var G__20498 = arguments.length;
switch (G__20498) {
case 1:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return taoensso.timbre.str_join.call(null,taoensso.timbre.default_arg__GT_str_fn,xs);
}));

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2 = (function (arg__GT_str_fn,xs){
return taoensso.encore.str_join.call(null," ",cljs.core.map.call(null,arg__GT_str_fn),xs);
}));

(taoensso.timbre.str_join.cljs$lang$maxFixedArity = 2);

/**
 * (fn [data]) -> string, used by `default-output-fn` to generate output
 *   for `:vargs` value (vector of raw logging arguments) in log data.
 */
taoensso.timbre.default_output_msg_fn = (function taoensso$timbre$default_output_msg_fn(p__20499){
var map__20500 = p__20499;
var map__20500__$1 = cljs.core.__destructure_map.call(null,map__20500);
var data = map__20500__$1;
var msg_type = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"msg-type","msg-type",-2132567822));
var _QMARK_msg_fmt = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891));
var vargs = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"vargs","vargs",-966597273));
var output_opts = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
var map__20501 = output_opts;
var map__20501__$1 = cljs.core.__destructure_map.call(null,map__20501);
var arg__GT_str_fn = cljs.core.get.call(null,map__20501__$1,new cljs.core.Keyword(null,"arg->str-fn","arg->str-fn",2064845310),taoensso.timbre.default_arg__GT_str_fn);
var G__20502 = msg_type;
if(cljs.core._EQ_.call(null,null,G__20502)){
return "";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"p","p",151049309),G__20502)){
return taoensso.timbre.str_join.call(null,arg__GT_str_fn,vargs);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),G__20502)){
if(typeof _QMARK_msg_fmt === 'string'){
return taoensso.encore.format_STAR_.call(null,_QMARK_msg_fmt,vargs);
} else {
throw cljs.core.ex_info.call(null,"Timbre format-style logging call without a format pattern string",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?msg-fmt","?msg-fmt",-852453891),_QMARK_msg_fmt,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,_QMARK_msg_fmt),new cljs.core.Keyword(null,"vargs","vargs",-966597273),vargs], null));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20502)].join('')));

}
}
}
});
/**
 * Default (fn [data]) -> string, used by `default-output-fn` to
 *   generate output for `:?err` value in log data.
 * 
 *   For Clj:
 *   Uses `org.clj-commons/pretty` to return an attractive stacktrace.
 *   Options:
 *     :stacktrace-fonts ; See `clj-commons.format.exceptions/*fonts*`
 * 
 *   For Cljs:
 *   Returns simple stacktrace string.
 */
taoensso.timbre.default_output_error_fn = (function taoensso$timbre$default_output_error_fn(p__20503){
var map__20504 = p__20503;
var map__20504__$1 = cljs.core.__destructure_map.call(null,map__20504);
var data = map__20504__$1;
var _QMARK_err = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var output_opts = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325));
var err = (function (){var e = (function (){try{if((!((_QMARK_err == null)))){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e20506){if((e20506 instanceof Error)){
var e = e20506;
return e;
} else {
throw e20506;

}
}})();
if((e == null)){
return _QMARK_err;
} else {
return taoensso.truss.impl._invar_violation_BANG_.call(null,true,new cljs.core.Symbol(null,"taoensso.timbre","taoensso.timbre",407940729,null),944,13,"/Users/nathandickinson/Projects/tic-tac-toe/resources/public/cljs/taoensso/timbre.cljc",new cljs.core.Keyword("taoensso.truss.impl","some?","taoensso.truss.impl/some?",1536228403),null,new cljs.core.Symbol(null,"?err","?err",-2104782470,null),_QMARK_err,e,null);
}
})();
var nl = "\n";
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.stack),(function (){var temp__5825__auto__ = cljs.core.ex_data.call(null,err);
if(cljs.core.truth_(temp__5825__auto__)){
var d = temp__5825__auto__;
return [nl,"ex-data:",nl,"    ",cljs.core.pr_str.call(null,d)].join('');
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = cljs.core.ex_cause.call(null,err);
if(cljs.core.truth_(temp__5825__auto__)){
var c = temp__5825__auto__;
return [nl,nl,"Caused by:",nl,cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.timbre.default_output_error_fn.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"?err","?err",549653299),c)))].join('');
} else {
return null;
}
})()].join('');
});
/**
 * Alpha, subject to change.
 * 
 *   Iterates through all appenders in config (enabled or not), and
 *   calls (:shutdown-fn appender) whenever that fn exists.
 * 
 *   This signals to these appenders that they should immediately
 *   close/release any resources that they may have open/acquired,
 *   and permanently noop on future logging requests.
 * 
 *   Returns the set of appender-ids that had a shutdown-fn called.
 * 
 *   This fn is called automatically on JVM shutdown, but can also
 *   be called manually.
 */
taoensso.timbre.shutdown_appenders_BANG_ = (function taoensso$timbre$shutdown_appenders_BANG_(var_args){
var G__20508 = arguments.length;
switch (G__20508) {
case 0:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.timbre.shutdown_appenders_BANG_.call(null,taoensso.timbre._STAR_config_STAR_);
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return cljs.core.reduce_kv.call(null,(function (acc,appender_id,appender){
var temp__5823__auto__ = new cljs.core.Keyword(null,"shutdown-fn","shutdown-fn",-1360269181).cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5823__auto__)){
var sfn = temp__5823__auto__;
sfn.call(null);

return cljs.core.conj.call(null,acc,appender_id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"appenders","appenders",1245583998).cljs$core$IFn$_invoke$arity$1(config));
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$lang$maxFixedArity = 1);

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"iso8601","iso8601",609352650)], null);
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn default-output-fn ; (fn [data]) -> final output for use by appenders
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-level","min-level",1634684919),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"ns-filter","ns-filter",108598448),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"timestamp-opts","timestamp-opts",-1359534807),taoensso.timbre.default_timestamp_opts,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),taoensso.timbre.default_output_fn,new cljs.core.Keyword(null,"appenders","appenders",1245583998),(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),taoensso.timbre.console_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"println","println",1920840330),taoensso.timbre.println_appender.call(null,cljs.core.PersistentArrayMap.EMPTY)], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This config map controls all Timbre behaviour including:
 *  - When to log (via min-level and namespace filtering)
 *  - How  to log (which appenders to use, etc.)
 *  - What to log (how log data will be transformed to final
 *                 output for use by appenders)
 * 
 *   Initial config value will be (in descending order of preference):
 * 
 *  1. `taoensso.timbre.config.edn`   JVM property  (read as EDN)
 *  2. `TAOENSSO_TIMBRE_CONFIG_EDN`   Env var       (read as EDN)
 *  3. `./taoensso.timbre.config.edn` resource file (read as EDN)
 *  4. Value of `default-config`
 * 
 *   For all EDN cases (1-3): the EDN can represent either a Clojure map
 *   to merge into `default-config`, or a qualified symbol that'll
 *   resolve to a Clojure map to merge into `default-config`.
 * 
 *   See `default-config` for more info on the base/default config.
 * 
 *   You can modify the config value with standard `alter-var-root`,
 *   or `binding`.
 * 
 *   For convenience, there's also some dedicated helper utils:
 * 
 *  - `set-config!`, `merge-config!`        ; Mutate *config*
 *  - `set-min-level!`, `set-ns-min-level!` ; Mutate *config* :min-level
 *  - `with-config`, `with-merged-config`   ; Bind *config*
 *  - `with-min-level`                      ; Bind *config* :min-level
 * 
 *   MAIN CONFIG OPTIONS
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set a namespace-specific min-level by
 *    providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [#{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *    See also `set-ns-min-level!` for a helper tool.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [data]) -> final output for use by appenders,
 *                  ; see `default-output-fn` for example
 *  :output-opts    ; Optional map added to data sent to output-fn
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *                       ; Tip: consider calling (shutdown-agents) as part of your
 *                       ; application shutdown if you have this enabled for any
 *                       ; appenders.
 * 
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop a call after exceeding given number
 *                       ; of the "same" calls within given rolling window/s.
 *                       ;
 *                       ; Example:
 *                       ;   [[100  (encore/ms :mins  1)]
 *                       ;    [1000 (encore/ms :hours 1)]] will noop a call after:
 *                       ;
 *                       ;   - >100  "same" calls in 1 rolling minute, or
 *                       ;   - >1000 "same" calls in 1 rolling hour
 *                       ;
 *                       ; "Same" calls are identified by default as the
 *                       ; combined hash of:
 *                       ;   - Callsite (i.e. each individual Timbre macro form)
 *                       ;   - Logging level
 *                       ;   - All arguments provided for logging
 *                       ;
 *                       ; You can manually override call identification:
 *                       ;   (timbre/infof ^:meta {:id "my-limiter-call-id"} ...)
 *                       ;
 * 
 *      :timestamp-opts  ; Optional appender-specific override for top-level option
 *      :output-fn       ; Optional appender-specific override for top-level option
 *      :output-opts     ; Optional appender-specific override for top-level option
 * 
 *      :fn              ; (fn [data]) -> side-effects, with keys described below
 * 
 *   LOG DATA
 *  A single map with keys:
 *    :config          ; Entire active config map
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :spying?         ; Is call occuring via the `spy` macro?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil
 *    :?column         ; Integer, or nil
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> final output for use by appenders
 *    :output_         ; Forceable result of calling (output-fn <this-data-map>)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as EDN)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as EDN)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as EDN)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as EDN)
 * 
 *  Note that compile-time options will OVERRIDE options in `*config*`.
 * 
 *   DEBUGGING INITIAL CONFIG
 *  See `:_init-config` for information re: Timbre's config on initial load.
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * Prefer `default-config`.
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.call(null,level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___20513 = arguments.length;
var i__5750__auto___20514 = (0);
while(true){
if((i__5750__auto___20514 < len__5749__auto___20513)){
args__5755__auto__.push((arguments[i__5750__auto___20514]));

var G__20515 = (i__5750__auto___20514 + (1));
i__5750__auto___20514 = G__20515;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.call(null,xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq20510){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20510));
}));


/**
 * Prefer `set-min-level!.`
 */
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_.call(null,(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"min-level","min-level",1634684919),level);
}));
});

/**
 * Prefer `default-output-error-fn`.
 */
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__20512 = arguments.length;
switch (G__20512) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.call(null,err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return taoensso.timbre.default_output_error_fn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"?err","?err",549653299),err,new cljs.core.Keyword(null,"output-opts","output-opts",-793411325),opts], null));
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=timbre.js.map
