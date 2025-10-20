// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5825__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5825__auto__)){
var req = temp__5825__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__19487){
var vec__19488 = p__19487;
var k = cljs.core.nth.call(null,vec__19488,(0),null);
var v = cljs.core.nth.call(null,vec__19488,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19491 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__19491)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__19491)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__19491)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__19491)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__19491)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__19491)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19491)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19492){
var map__19493 = p__19492;
var map__19493__$1 = cljs.core.__destructure_map.call(null,map__19493);
var request = map__19493__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__19493__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19494 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__19494,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__19494,response_type);

G__19494.setTimeoutInterval(timeout);

G__19494.setWithCredentials(send_credentials);

return G__19494;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19495){
var map__19496 = p__19495;
var map__19496__$1 = cljs.core.__destructure_map.call(null,map__19496);
var request = map__19496__$1;
var request_method = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__19496__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__5025__auto__ = request_method;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_19534 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__19497_19536 = xhr;
G__19497_19536.setProgressEventsEnabled(true);

G__19497_19536.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_19534,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__19497_19536.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_19534,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14531__auto___19538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_19508){
var state_val_19509 = (state_19508[(1)]);
if((state_val_19509 === (1))){
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19508__$1,(2),cancel);
} else {
if((state_val_19509 === (2))){
var inst_19499 = (state_19508[(2)]);
var inst_19500 = xhr.isComplete();
var inst_19501 = cljs.core.not.call(null,inst_19500);
var state_19508__$1 = (function (){var statearr_19510 = state_19508;
(statearr_19510[(7)] = inst_19499);

return statearr_19510;
})();
if(inst_19501){
var statearr_19511_19539 = state_19508__$1;
(statearr_19511_19539[(1)] = (3));

} else {
var statearr_19512_19540 = state_19508__$1;
(statearr_19512_19540[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (3))){
var inst_19503 = xhr.abort();
var state_19508__$1 = state_19508;
var statearr_19513_19541 = state_19508__$1;
(statearr_19513_19541[(2)] = inst_19503);

(statearr_19513_19541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (4))){
var state_19508__$1 = state_19508;
var statearr_19514_19542 = state_19508__$1;
(statearr_19514_19542[(2)] = null);

(statearr_19514_19542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19509 === (5))){
var inst_19506 = (state_19508[(2)]);
var state_19508__$1 = state_19508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19508__$1,inst_19506);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__14407__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14407__auto____0 = (function (){
var statearr_19515 = [null,null,null,null,null,null,null,null];
(statearr_19515[(0)] = cljs_http$core$xhr_$_state_machine__14407__auto__);

(statearr_19515[(1)] = (1));

return statearr_19515;
});
var cljs_http$core$xhr_$_state_machine__14407__auto____1 = (function (state_19508){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_19508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19516){var ex__14410__auto__ = e19516;
var statearr_19517_19543 = state_19508;
(statearr_19517_19543[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_19508[(4)]))){
var statearr_19518_19544 = state_19508;
(statearr_19518_19544[(1)] = cljs.core.first.call(null,(state_19508[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19545 = state_19508;
state_19508 = G__19545;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14407__auto__ = function(state_19508){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14407__auto____1.call(this,state_19508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14407__auto____0;
cljs_http$core$xhr_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14407__auto____1;
return cljs_http$core$xhr_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19519 = f__14532__auto__.call(null);
(statearr_19519[(6)] = c__14531__auto___19538);

return statearr_19519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19520){
var map__19521 = p__19520;
var map__19521__$1 = cljs.core.__destructure_map.call(null,map__19521);
var request = map__19521__$1;
var timeout = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__19521__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19546 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_19546], null));

if(cljs.core.truth_(cancel)){
var c__14531__auto___19547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_19526){
var state_val_19527 = (state_19526[(1)]);
if((state_val_19527 === (1))){
var state_19526__$1 = state_19526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19526__$1,(2),cancel);
} else {
if((state_val_19527 === (2))){
var inst_19523 = (state_19526[(2)]);
var inst_19524 = jsonp.cancel(req_19546);
var state_19526__$1 = (function (){var statearr_19528 = state_19526;
(statearr_19528[(7)] = inst_19523);

return statearr_19528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19526__$1,inst_19524);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__14407__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14407__auto____0 = (function (){
var statearr_19529 = [null,null,null,null,null,null,null,null];
(statearr_19529[(0)] = cljs_http$core$jsonp_$_state_machine__14407__auto__);

(statearr_19529[(1)] = (1));

return statearr_19529;
});
var cljs_http$core$jsonp_$_state_machine__14407__auto____1 = (function (state_19526){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_19526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19530){var ex__14410__auto__ = e19530;
var statearr_19531_19548 = state_19526;
(statearr_19531_19548[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_19526[(4)]))){
var statearr_19532_19549 = state_19526;
(statearr_19532_19549[(1)] = cljs.core.first.call(null,(state_19526[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19550 = state_19526;
state_19526 = G__19550;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14407__auto__ = function(state_19526){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14407__auto____1.call(this,state_19526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14407__auto____0;
cljs_http$core$jsonp_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14407__auto____1;
return cljs_http$core$jsonp_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19533 = f__14532__auto__.call(null);
(statearr_19533[(6)] = c__14531__auto___19547);

return statearr_19533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19535){
var map__19537 = p__19535;
var map__19537__$1 = cljs.core.__destructure_map.call(null,map__19537);
var request = map__19537__$1;
var request_method = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
