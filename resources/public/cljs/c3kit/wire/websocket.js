// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.websocket');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.api');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.websocketc');
goog.require('clojure.string');
goog.require('reagent.core');
c3kit.wire.websocket.client = null;
c3kit.wire.websocket.open_QMARK_ = reagent.core.atom.call(null,false);
c3kit.wire.websocket.reconnection_QMARK_ = cljs.core.atom.call(null,false);
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.pending_calls !== 'undefined')){
} else {
c3kit.wire.websocket.pending_calls = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
c3kit.wire.websocket.handle_remote_response = (function c3kit$wire$websocket$handle_remote_response(remote_call,response){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["remote response: ",response], null);
}),null)),null,(81),null);

return c3kit.wire.api.handle_api_response.call(null,response,remote_call);
});
c3kit.wire.websocket.build_remote_call = (function c3kit$wire$websocket$build_remote_call(kind,params,handler,opt_args){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options","options",99638489),c3kit.apron.corec.__GT_options.call(null,opt_args),new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null);
});
c3kit.wire.websocket.make_call_BANG_ = (function c3kit$wire$websocket$make_call_BANG_(p__15887){
var map__15888 = p__15887;
var map__15888__$1 = cljs.core.__destructure_map.call(null,map__15888);
var remote_call = map__15888__$1;
var kind = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var params = cljs.core.get.call(null,map__15888__$1,new cljs.core.Keyword(null,"params","params",710516235));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["call: ",kind,params], null);
}),null)),null,(82),null);

return c3kit.wire.websocketc.call_BANG_.call(null,c3kit.wire.websocket.client,kind,params,cljs.core.partial.call(null,c3kit.wire.websocket.handle_remote_response,remote_call));
});
c3kit.wire.websocket.call_BANG_ = (function c3kit$wire$websocket$call_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15939 = arguments.length;
var i__5750__auto___15940 = (0);
while(true){
if((i__5750__auto___15940 < len__5749__auto___15939)){
args__5755__auto__.push((arguments[i__5750__auto___15940]));

var G__15941 = (i__5750__auto___15940 + (1));
i__5750__auto___15940 = G__15941;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(c3kit.wire.websocket.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (kind,params,handler,opt_args){
var remote_call = c3kit.wire.websocket.build_remote_call.call(null,kind,params,handler,opt_args);
if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.open_QMARK_))){
return c3kit.wire.websocket.make_call_BANG_.call(null,remote_call);
} else {
return cljs.core.swap_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.conj,remote_call);
}
}));

(c3kit.wire.websocket.call_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(c3kit.wire.websocket.call_BANG_.cljs$lang$applyTo = (function (seq15919){
var G__15920 = cljs.core.first.call(null,seq15919);
var seq15919__$1 = cljs.core.next.call(null,seq15919);
var G__15921 = cljs.core.first.call(null,seq15919__$1);
var seq15919__$2 = cljs.core.next.call(null,seq15919__$1);
var G__15922 = cljs.core.first.call(null,seq15919__$2);
var seq15919__$3 = cljs.core.next.call(null,seq15919__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15920,G__15921,G__15922,seq15919__$3);
}));

c3kit.wire.websocket.on_open = (function c3kit$wire$websocket$on_open(_){
var calls = cljs.core.deref.call(null,c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__15935 = cljs.core.seq.call(null,calls);
var chunk__15936 = null;
var count__15937 = (0);
var i__15938 = (0);
while(true){
if((i__15938 < count__15937)){
var call = cljs.core._nth.call(null,chunk__15936,i__15938);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15948 = seq__15935;
var G__15949 = chunk__15936;
var G__15950 = count__15937;
var G__15951 = (i__15938 + (1));
seq__15935 = G__15948;
chunk__15936 = G__15949;
count__15937 = G__15950;
i__15938 = G__15951;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__15935);
if(temp__5825__auto__){
var seq__15935__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15935__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__15935__$1);
var G__15953 = cljs.core.chunk_rest.call(null,seq__15935__$1);
var G__15954 = c__5548__auto__;
var G__15955 = cljs.core.count.call(null,c__5548__auto__);
var G__15956 = (0);
seq__15935 = G__15953;
chunk__15936 = G__15954;
count__15937 = G__15955;
i__15938 = G__15956;
continue;
} else {
var call = cljs.core.first.call(null,seq__15935__$1);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15957 = cljs.core.next.call(null,seq__15935__$1);
var G__15958 = null;
var G__15959 = (0);
var G__15960 = (0);
seq__15935 = G__15957;
chunk__15936 = G__15958;
count__15937 = G__15959;
i__15938 = G__15960;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.websocket !== 'undefined') && (typeof c3kit.wire.websocket.push_handler !== 'undefined')){
} else {
c3kit.wire.websocket.push_handler = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.websocket","push-handler"),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","ping","ws/ping",-1670118340),(function (_){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (message){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unhandled push event: ",message], null);
}),null)),null,(83),null);
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","hello","ws/hello",-245030281),(function (p__15961){
var map__15964 = p__15961;
var map__15964__$1 = cljs.core.__destructure_map.call(null,map__15964);
var params = cljs.core.get.call(null,map__15964__$1,new cljs.core.Keyword(null,"params","params",710516235));
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello: ",params], null);
}),null)),null,(84),null);
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","open","ws/open",-1763599228),(function (_){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.open_QMARK_,true);

if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.reconnection_QMARK_))){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.reconnection_QMARK_,false);

var temp__5825__auto___15969 = new cljs.core.Keyword(null,"ws-on-reconnected","ws-on-reconnected",2030895392).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config));
if(cljs.core.truth_(temp__5825__auto___15969)){
var on_reconnected_15970 = temp__5825__auto___15969;
on_reconnected_15970.call(null);
} else {
}
} else {
}

var calls = cljs.core.deref.call(null,c3kit.wire.websocket.pending_calls);
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.pending_calls,cljs.core.PersistentVector.EMPTY);

var seq__15965 = cljs.core.seq.call(null,calls);
var chunk__15966 = null;
var count__15967 = (0);
var i__15968 = (0);
while(true){
if((i__15968 < count__15967)){
var call = cljs.core._nth.call(null,chunk__15966,i__15968);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15971 = seq__15965;
var G__15972 = chunk__15966;
var G__15973 = count__15967;
var G__15974 = (i__15968 + (1));
seq__15965 = G__15971;
chunk__15966 = G__15972;
count__15967 = G__15973;
i__15968 = G__15974;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__15965);
if(temp__5825__auto__){
var seq__15965__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15965__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__15965__$1);
var G__15975 = cljs.core.chunk_rest.call(null,seq__15965__$1);
var G__15976 = c__5548__auto__;
var G__15977 = cljs.core.count.call(null,c__5548__auto__);
var G__15978 = (0);
seq__15965 = G__15975;
chunk__15966 = G__15976;
count__15967 = G__15977;
i__15968 = G__15978;
continue;
} else {
var call = cljs.core.first.call(null,seq__15965__$1);
c3kit.wire.websocket.make_call_BANG_.call(null,call);


var G__15979 = cljs.core.next.call(null,seq__15965__$1);
var G__15980 = null;
var G__15981 = (0);
var G__15982 = (0);
seq__15965 = G__15979;
chunk__15966 = G__15980;
count__15967 = G__15981;
i__15968 = G__15982;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","close","ws/close",1835153450),(function (_){
cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.open_QMARK_,false);

cljs.core.reset_BANG_.call(null,c3kit.wire.websocket.reconnection_QMARK_,true);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connection closed... reconnecting"], null);
}),null)),null,(85),null);

return c3kit.wire.js.timeout.call(null,(1000),c3kit.wire.websocket.connect_BANG_.call(null,cljs.core.deref.call(null,c3kit.wire.api.config)));
}));
cljs.core._add_method.call(null,c3kit.wire.websocket.push_handler,new cljs.core.Keyword("ws","error","ws/error",-978964716),(function (_){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error"], null);
}),null)),null,(86),null);
}));
c3kit.wire.websocket.message_handler = (function c3kit$wire$websocket$message_handler(message){
return c3kit.wire.websocket.push_handler.call(null,message);
});
c3kit.wire.websocket.build_local_uri = (function c3kit$wire$websocket$build_local_uri(path){
var location__$1 = c3kit.wire.js.page_location.call(null);
var protocol = ((cljs.core._EQ_.call(null,"https:",c3kit.apron.corec.oget.call(null,location__$1,"protocol")))?"wss:":"ws:");
var host = c3kit.apron.corec.oget.call(null,location__$1,"host");
return [protocol,"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
});
c3kit.wire.websocket.build_connection_uri = (function c3kit$wire$websocket$build_connection_uri(p__15983,connection_id){
var map__15984 = p__15983;
var map__15984__$1 = cljs.core.__destructure_map.call(null,map__15984);
var ws_uri = cljs.core.get.call(null,map__15984__$1,new cljs.core.Keyword(null,"ws-uri","ws-uri",-867243454));
var ws_uri_path = cljs.core.get.call(null,map__15984__$1,new cljs.core.Keyword(null,"ws-uri-path","ws-uri-path",132764557));
var ws_csrf_token = cljs.core.get.call(null,map__15984__$1,new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868));
var uri = (function (){var or__5025__auto__ = ws_uri;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return c3kit.wire.websocket.build_local_uri.call(null,ws_uri_path);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),((clojure.string.includes_QMARK_.call(null,uri,"?"))?"&":"?"),"connection-id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(connection_id),"&ws-csrf-token=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ws_csrf_token)].join('');
});
c3kit.wire.websocket.connect_BANG_ = (function c3kit$wire$websocket$connect_BANG_(config){
var connection_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid.call(null));
var uri = c3kit.wire.websocket.build_connection_uri.call(null,config,connection_id);
return c3kit.wire.websocketc.connect_BANG_.call(null,c3kit.wire.websocket.client,uri,new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868).cljs$core$IFn$_invoke$arity$1(config),connection_id);
});
c3kit.wire.websocket.start_BANG_ = (function c3kit$wire$websocket$start_BANG_(){
if(cljs.core.truth_(c3kit.wire.websocket.client)){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,c3kit.wire.api.config)))){
(c3kit.wire.websocket.client = c3kit.wire.websocketc.create.call(null,c3kit.wire.websocket.message_handler,new cljs.core.Keyword(null,"atom-fn","atom-fn",-354652779),reagent.core.atom));

return c3kit.wire.websocket.connect_BANG_.call(null,cljs.core.deref.call(null,c3kit.wire.api.config));
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CSRF Token missing.  Unable to start websocket."], null);
}),null)),null,(87),null);
}
}
});
c3kit.wire.websocket.stop_BANG_ = (function c3kit$wire$websocket$stop_BANG_(){
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.wire.websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stopping websocket"], null);
}),null)),null,(88),null);
});
c3kit.wire.websocket.disconnected_button = (function c3kit$wire$websocket$disconnected_button(){
var open_QMARK_ = reagent.core.atom.call(null,false);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contextual-menu-anchor","div.contextual-menu-anchor",-514628572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#-disconnected-button.disconnected.naked","button#-disconnected-button.disconnected.naked",395710365),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,open_QMARK_,true);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fas.fa-exclamation-triangle.animation.error.small-margin-left","span.fas.fa-exclamation-triangle.animation.error.small-margin-left",1886480601)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,open_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#-disconnected-menu-overlay.contextual-menu","div#-disconnected-menu-overlay.contextual-menu",752932392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,open_QMARK_,false);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#-disconnected-menu.card","div#-disconnected-menu.card",876871192),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.small-margin-bottom","h5.small-margin-bottom",1748139976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fas.fa-link","span.fas.fa-link",-1115277902)], null),"Connection Broken"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.margin-bottom","p.margin-bottom",1527696980),"Your connection with the server has been broken. ","We are trying to reconnect.  If that doesn't seem to help, please try reloading this page."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.primary","button.primary",-486456892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),c3kit.wire.js.page_reload_BANG_], null),"Reload Page"], null)], null)], null):null)], null);
});
});
c3kit.wire.websocket.connection_status = (function c3kit$wire$websocket$connection_status(){
if(cljs.core.truth_(cljs.core.deref.call(null,c3kit.wire.websocket.open_QMARK_))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.websocket.disconnected_button], null);
}
});

//# sourceMappingURL=websocket.js.map
