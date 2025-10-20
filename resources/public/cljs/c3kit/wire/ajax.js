// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.ajax');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.flash');
goog.require('c3kit.wire.js');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.ajax.active_ajax_requests = reagent.core.atom.call(null,(0));
c3kit.wire.ajax.activity_QMARK_ = (function c3kit$wire$ajax$activity_QMARK_(){
return cljs.core.not_EQ_.call(null,(0),cljs.core.deref.call(null,c3kit.wire.ajax.active_ajax_requests));
});
c3kit.wire.ajax.server_down_QMARK_ = (function c3kit$wire$ajax$server_down_QMARK_(p__25794){
var map__25795 = p__25794;
var map__25795__$1 = cljs.core.__destructure_map.call(null,map__25795);
var error_code = cljs.core.get.call(null,map__25795__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var status = cljs.core.get.call(null,map__25795__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var and__5023__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),error_code);
if(and__5023__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(502),null], null), null).call(null,status);
} else {
return and__5023__auto__;
}
});
c3kit.wire.ajax.handle_server_down = (function c3kit$wire$ajax$handle_server_down(ajax_call){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Appears that server is down.  Will retry after in a moment."], null);
}),null)),null,(147),null);

c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.server_down_flash);

return c3kit.wire.js.timeout.call(null,(3000),(function (){
return c3kit.wire.ajax._do_ajax_request.call(null,ajax_call);
}));
});
c3kit.wire.ajax.handle_unexpected_response = (function c3kit$wire$ajax$handle_unexpected_response(response,ajax_call){
var temp__5823__auto__ = new cljs.core.Keyword(null,"on-http-error","on-http-error",268314602).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core.truth_(temp__5823__auto__)){
var on_http_error = temp__5823__auto__;
return on_http_error.call(null,response);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unexpected AJAX response: ",response,ajax_call], null);
}),null)),null,(148),null);
}
});
c3kit.wire.ajax.handle_unsuccessful_response = (function c3kit$wire$ajax$handle_unsuccessful_response(response,ajax_call){
if(cljs.core.truth_(c3kit.wire.ajax.server_down_QMARK_.call(null,response))){
return c3kit.wire.ajax.handle_server_down.call(null,ajax_call);
} else {
if(cljs.core._EQ_.call(null,(403),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return c3kit.wire.flash.add_BANG_.call(null,c3kit.wire.api.forbidden_flash);
} else {
return c3kit.wire.ajax.handle_unexpected_response.call(null,response,ajax_call);

}
}
});
c3kit.wire.ajax.success_QMARK_ = (function c3kit$wire$ajax$success_QMARK_(p__25796){
var map__25797 = p__25796;
var map__25797__$1 = cljs.core.__destructure_map.call(null,map__25797);
var status = cljs.core.get.call(null,map__25797__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return ((((200) <= status)) && ((status <= (299))));
});
c3kit.wire.ajax.triage_response = (function c3kit$wire$ajax$triage_response(response,ajax_call){
if(c3kit.wire.ajax.success_QMARK_.call(null,response)){
return c3kit.wire.api.handle_api_response.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response),ajax_call);
} else {
var temp__5823__auto__ = new cljs.core.Keyword(null,"ajax-on-unsuccessful-response","ajax-on-unsuccessful-response",-334902909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
return handler.call(null,response,ajax_call);
} else {
return c3kit.wire.ajax.handle_unsuccessful_response.call(null,response,ajax_call);
}

}
});
/**
 * Create a prep fn to add a CSRF header to each request
 *   (prep-csrf "X-CSRF-Token"] csrf-token)
 */
c3kit.wire.ajax.prep_csrf = (function c3kit$wire$ajax$prep_csrf(header,token){
return (function (ajax_call){
return cljs.core.assoc_in.call(null,ajax_call,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"headers","headers",-835030129),header], null),token);
});
});
c3kit.wire.ajax.params_key = (function c3kit$wire$ajax$params_key(ajax_call){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["HEAD",null,"GET",null], null), null).call(null,new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(ajax_call)))){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
var G__25798 = new cljs.core.Keyword(null,"params-type","params-type",1941495334).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(ajax_call));
if(cljs.core._EQ_.call(null,null,G__25798)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"transit","transit",359458387),G__25798)){
return new cljs.core.Keyword(null,"transit-params","transit-params",357261095);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),G__25798)){
return new cljs.core.Keyword(null,"query-params","query-params",900640534);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),G__25798)){
return new cljs.core.Keyword(null,"form-params","form-params",1884296467);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885),G__25798)){
return new cljs.core.Keyword(null,"edn-params","edn-params",894273052);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1279968570),G__25798)){
return new cljs.core.Keyword(null,"json-params","json-params",-1112693596);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"multipart","multipart",1158197946),G__25798)){
return new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25798)].join('')));

}
}
}
}
}
}
}
}
});
c3kit.wire.ajax.pass_through_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)], null);
c3kit.wire.ajax.request_map = (function c3kit$wire$ajax$request_map(ajax_call){
var prep = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ajax-prep-fn","ajax-prep-fn",1814062099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})();
var map__25800 = prep.call(null,ajax_call);
var map__25800__$1 = cljs.core.__destructure_map.call(null,map__25800);
var ajax_call__$1 = map__25800__$1;
var options = cljs.core.get.call(null,map__25800__$1,new cljs.core.Keyword(null,"options","options",99638489));
var params = cljs.core.get.call(null,map__25800__$1,new cljs.core.Keyword(null,"params","params",710516235));
var G__25807 = cljs.core.select_keys.call(null,options,c3kit.wire.ajax.pass_through_keys);
if(cljs.core.truth_(params)){
return cljs.core.assoc.call(null,G__25807,c3kit.wire.ajax.params_key.call(null,ajax_call__$1),params);
} else {
return G__25807;
}
});
c3kit.wire.ajax._do_ajax_request = (function c3kit$wire$ajax$_do_ajax_request(p__25809){
var map__25810 = p__25809;
var map__25810__$1 = cljs.core.__destructure_map.call(null,map__25810);
var ajax_call = map__25810__$1;
var method = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"method","method",55703592));
var method_fn = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696));
var url = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.call(null,map__25810__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",method,url,params], null);
}),null)),null,(149),null);

var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_25831){
var state_val_25832 = (state_25831[(1)]);
if((state_val_25832 === (1))){
var inst_25813 = (state_25831[(7)]);
var inst_25811 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.inc);
var inst_25813__$1 = c3kit.wire.ajax.request_map.call(null,ajax_call);
var inst_25814 = method_fn.call(null,url,inst_25813__$1);
var state_25831__$1 = (function (){var statearr_25833 = state_25831;
(statearr_25833[(8)] = inst_25811);

(statearr_25833[(7)] = inst_25813__$1);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25831__$1,(2),inst_25814);
} else {
if((state_val_25832 === (2))){
var inst_25813 = (state_25831[(7)]);
var inst_25816 = (state_25831[(2)]);
var inst_25817 = cljs.core.__destructure_map.call(null,inst_25816);
var inst_25818 = cljs.core.get.call(null,inst_25817,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var inst_25819 = cljs.core.get.call(null,inst_25817,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_25820 = cljs.core.get.call(null,inst_25817,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_25822 = (function (){var request = inst_25813;
var map__25812 = inst_25817;
var response = inst_25817;
var error_code = inst_25818;
var status = inst_25819;
var body = inst_25820;
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [">",method,url,error_code,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(body)], null);
});
})();
var inst_25825 = (new cljs.core.Delay(inst_25822,null));
var inst_25827 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.ajax",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_25825,null,(150),null);
var inst_25828 = c3kit.wire.ajax.triage_response.call(null,inst_25817,ajax_call);
var inst_25829 = cljs.core.swap_BANG_.call(null,c3kit.wire.ajax.active_ajax_requests,cljs.core.dec);
var state_25831__$1 = (function (){var statearr_25838 = state_25831;
(statearr_25838[(9)] = inst_25827);

(statearr_25838[(10)] = inst_25828);

return statearr_25838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25831__$1,inst_25829);
} else {
return null;
}
}
});
return (function() {
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__ = null;
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____0 = (function (){
var statearr_25840 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25840[(0)] = c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__);

(statearr_25840[(1)] = (1));

return statearr_25840;
});
var c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____1 = (function (state_25831){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_25831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e25843){var ex__14410__auto__ = e25843;
var statearr_25844_25866 = state_25831;
(statearr_25844_25866[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_25831[(4)]))){
var statearr_25846_25867 = state_25831;
(statearr_25846_25867[(1)] = cljs.core.first.call(null,(state_25831[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25868 = state_25831;
state_25831 = G__25868;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__ = function(state_25831){
switch(arguments.length){
case 0:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____0.call(this);
case 1:
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____1.call(this,state_25831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____0;
c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto____1;
return c3kit$wire$ajax$_do_ajax_request_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_25847 = f__14532__auto__.call(null);
(statearr_25847[(6)] = c__14531__auto__);

return statearr_25847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
});
c3kit.wire.ajax.build_ajax_call = (function c3kit$wire$ajax$build_ajax_call(method,method_fn,url,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"method-fn","method-fn",1314848696),method_fn,new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.ajax._method_parts = (function c3kit$wire$ajax$_method_parts(method){
var G__25848 = method;
var G__25848__$1 = (((G__25848 instanceof cljs.core.Keyword))?G__25848.fqn:null);
switch (G__25848__$1) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",cljs_http.client.get], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["POST",cljs_http.client.post], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25848__$1)].join('')));

}
});
c3kit.wire.ajax.get_BANG_ = (function c3kit$wire$ajax$get_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25874 = arguments.length;
var i__5750__auto___25875 = (0);
while(true){
if((i__5750__auto___25875 < len__5749__auto___25874)){
args__5755__auto__.push((arguments[i__5750__auto___25875]));

var G__25876 = (i__5750__auto___25875 + (1));
i__5750__auto___25875 = G__25876;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"GET",cljs_http.client.get,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.get_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.get_BANG_.cljs$lang$applyTo = (function (seq25849){
var G__25850 = cljs.core.first.call(null,seq25849);
var seq25849__$1 = cljs.core.next.call(null,seq25849);
var G__25851 = cljs.core.first.call(null,seq25849__$1);
var seq25849__$2 = cljs.core.next.call(null,seq25849__$1);
var G__25852 = cljs.core.first.call(null,seq25849__$2);
var seq25849__$3 = cljs.core.next.call(null,seq25849__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25850,G__25851,G__25852,seq25849__$3);
}));

c3kit.wire.ajax.post_BANG_ = (function c3kit$wire$ajax$post_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25877 = arguments.length;
var i__5750__auto___25878 = (0);
while(true){
if((i__5750__auto___25878 < len__5749__auto___25877)){
args__5755__auto__.push((arguments[i__5750__auto___25878]));

var G__25879 = (i__5750__auto___25878 + (1));
i__5750__auto___25878 = G__25879;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.post_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,params,handler,opt_args){
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,"POST",cljs_http.client.post,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.post_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.ajax.post_BANG_.cljs$lang$applyTo = (function (seq25857){
var G__25858 = cljs.core.first.call(null,seq25857);
var seq25857__$1 = cljs.core.next.call(null,seq25857);
var G__25859 = cljs.core.first.call(null,seq25857__$1);
var seq25857__$2 = cljs.core.next.call(null,seq25857__$1);
var G__25860 = cljs.core.first.call(null,seq25857__$2);
var seq25857__$3 = cljs.core.next.call(null,seq25857__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25858,G__25859,G__25860,seq25857__$3);
}));

c3kit.wire.ajax.request_BANG_ = (function c3kit$wire$ajax$request_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25881 = arguments.length;
var i__5750__auto___25882 = (0);
while(true){
if((i__5750__auto___25882 < len__5749__auto___25881)){
args__5755__auto__.push((arguments[i__5750__auto___25882]));

var G__25883 = (i__5750__auto___25882 + (1));
i__5750__auto___25882 = G__25883;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(c3kit.wire.ajax.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params,handler,opt_args){
var method_name = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var method_fn = (function() { 
var G__25885__delegate = function (url__$1,p__25869){
var vec__25870 = p__25869;
var req = cljs.core.nth.call(null,vec__25870,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"url","url",276297046),url__$1], null)));
};
var G__25885 = function (url__$1,var_args){
var p__25869 = null;
if (arguments.length > 1) {
var G__25888__i = 0, G__25888__a = new Array(arguments.length -  1);
while (G__25888__i < G__25888__a.length) {G__25888__a[G__25888__i] = arguments[G__25888__i + 1]; ++G__25888__i;}
  p__25869 = new cljs.core.IndexedSeq(G__25888__a,0,null);
} 
return G__25885__delegate.call(this,url__$1,p__25869);};
G__25885.cljs$lang$maxFixedArity = 1;
G__25885.cljs$lang$applyTo = (function (arglist__25889){
var url__$1 = cljs.core.first(arglist__25889);
var p__25869 = cljs.core.rest(arglist__25889);
return G__25885__delegate(url__$1,p__25869);
});
G__25885.cljs$core$IFn$_invoke$arity$variadic = G__25885__delegate;
return G__25885;
})()
;
return c3kit.wire.ajax._do_ajax_request.call(null,c3kit.wire.ajax.build_ajax_call.call(null,method_name,method_fn,url,params,handler,opt_args));
}));

(c3kit.wire.ajax.request_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(c3kit.wire.ajax.request_BANG_.cljs$lang$applyTo = (function (seq25861){
var G__25862 = cljs.core.first.call(null,seq25861);
var seq25861__$1 = cljs.core.next.call(null,seq25861);
var G__25863 = cljs.core.first.call(null,seq25861__$1);
var seq25861__$2 = cljs.core.next.call(null,seq25861__$1);
var G__25864 = cljs.core.first.call(null,seq25861__$2);
var seq25861__$3 = cljs.core.next.call(null,seq25861__$2);
var G__25865 = cljs.core.first.call(null,seq25861__$3);
var seq25861__$4 = cljs.core.next.call(null,seq25861__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25862,G__25863,G__25864,G__25865,seq25861__$4);
}));


//# sourceMappingURL=ajax.js.map
