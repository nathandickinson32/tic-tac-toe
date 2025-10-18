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
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__13382){
var vec__13383 = p__13382;
var k = cljs.core.nth.call(null,vec__13383,(0),null);
var v = cljs.core.nth.call(null,vec__13383,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__13386 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__13386)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__13386)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__13386)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__13386)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__13386)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__13386)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13386)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__13387){
var map__13388 = p__13387;
var map__13388__$1 = cljs.core.__destructure_map.call(null,map__13388);
var request = map__13388__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__13389 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__13389,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__13389,response_type);

G__13389.setTimeoutInterval(timeout);

G__13389.setWithCredentials(send_credentials);

return G__13389;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__13390){
var map__13391 = p__13390;
var map__13391__$1 = cljs.core.__destructure_map.call(null,map__13391);
var request = map__13391__$1;
var request_method = cljs.core.get.call(null,map__13391__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__13391__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__13391__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.call(null,map__13391__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__13391__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
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
var listener_13423 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__13392_13424 = xhr;
G__13392_13424.setProgressEventsEnabled(true);

G__13392_13424.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_13423,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__13392_13424.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_13423,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__11038__auto___13426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13403){
var state_val_13404 = (state_13403[(1)]);
if((state_val_13404 === (1))){
var state_13403__$1 = state_13403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13403__$1,(2),cancel);
} else {
if((state_val_13404 === (2))){
var inst_13394 = (state_13403[(2)]);
var inst_13395 = xhr.isComplete();
var inst_13396 = cljs.core.not.call(null,inst_13395);
var state_13403__$1 = (function (){var statearr_13405 = state_13403;
(statearr_13405[(7)] = inst_13394);

return statearr_13405;
})();
if(inst_13396){
var statearr_13406_13431 = state_13403__$1;
(statearr_13406_13431[(1)] = (3));

} else {
var statearr_13407_13432 = state_13403__$1;
(statearr_13407_13432[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (3))){
var inst_13398 = xhr.abort();
var state_13403__$1 = state_13403;
var statearr_13408_13434 = state_13403__$1;
(statearr_13408_13434[(2)] = inst_13398);

(statearr_13408_13434[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (4))){
var state_13403__$1 = state_13403;
var statearr_13409_13437 = state_13403__$1;
(statearr_13409_13437[(2)] = null);

(statearr_13409_13437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13404 === (5))){
var inst_13401 = (state_13403[(2)]);
var state_13403__$1 = state_13403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13403__$1,inst_13401);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__10856__auto__ = null;
var cljs_http$core$xhr_$_state_machine__10856__auto____0 = (function (){
var statearr_13410 = [null,null,null,null,null,null,null,null];
(statearr_13410[(0)] = cljs_http$core$xhr_$_state_machine__10856__auto__);

(statearr_13410[(1)] = (1));

return statearr_13410;
});
var cljs_http$core$xhr_$_state_machine__10856__auto____1 = (function (state_13403){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13411){var ex__10859__auto__ = e13411;
var statearr_13412_13438 = state_13403;
(statearr_13412_13438[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13403[(4)]))){
var statearr_13413_13439 = state_13403;
(statearr_13413_13439[(1)] = cljs.core.first.call(null,(state_13403[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13440 = state_13403;
state_13403 = G__13440;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__10856__auto__ = function(state_13403){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__10856__auto____1.call(this,state_13403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__10856__auto____0;
cljs_http$core$xhr_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__10856__auto____1;
return cljs_http$core$xhr_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13414 = f__11039__auto__.call(null);
(statearr_13414[(6)] = c__11038__auto___13426);

return statearr_13414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__13415){
var map__13416 = p__13415;
var map__13416__$1 = cljs.core.__destructure_map.call(null,map__13416);
var request = map__13416__$1;
var timeout = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__13416__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_13441 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
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
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_13441], null));

if(cljs.core.truth_(cancel)){
var c__11038__auto___13442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13421){
var state_val_13422 = (state_13421[(1)]);
if((state_val_13422 === (1))){
var state_13421__$1 = state_13421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13421__$1,(2),cancel);
} else {
if((state_val_13422 === (2))){
var inst_13418 = (state_13421[(2)]);
var inst_13419 = jsonp.cancel(req_13441);
var state_13421__$1 = (function (){var statearr_13425 = state_13421;
(statearr_13425[(7)] = inst_13418);

return statearr_13425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13421__$1,inst_13419);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__10856__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__10856__auto____0 = (function (){
var statearr_13427 = [null,null,null,null,null,null,null,null];
(statearr_13427[(0)] = cljs_http$core$jsonp_$_state_machine__10856__auto__);

(statearr_13427[(1)] = (1));

return statearr_13427;
});
var cljs_http$core$jsonp_$_state_machine__10856__auto____1 = (function (state_13421){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13428){var ex__10859__auto__ = e13428;
var statearr_13429_13443 = state_13421;
(statearr_13429_13443[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13421[(4)]))){
var statearr_13430_13444 = state_13421;
(statearr_13430_13444[(1)] = cljs.core.first.call(null,(state_13421[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13445 = state_13421;
state_13421 = G__13445;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__10856__auto__ = function(state_13421){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__10856__auto____1.call(this,state_13421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__10856__auto____0;
cljs_http$core$jsonp_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__10856__auto____1;
return cljs_http$core$jsonp_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13433 = f__11039__auto__.call(null);
(statearr_13433[(6)] = c__11038__auto___13442);

return statearr_13433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__13435){
var map__13436 = p__13435;
var map__13436__$1 = cljs.core.__destructure_map.call(null,map__13436);
var request = map__13436__$1;
var request_method = cljs.core.get.call(null,map__13436__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
