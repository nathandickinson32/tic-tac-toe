// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.websocketc');
goog.require('cljs.core');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.utilc');
goog.require('c3kit.apron.cursor');
goog.require('c3kit.apron.time');
c3kit.wire.websocketc.request = (function c3kit$wire$websocketc$request(var_args){
var G__24637 = arguments.length;
switch (G__24637) {
case 2:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$2 = (function (id,kind){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request-id","request-id",-985684093),id,new cljs.core.Keyword(null,"kind","kind",-717265803),kind], null);
}));

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$3 = (function (id,kind,params){
return cljs.core.assoc.call(null,c3kit.wire.websocketc.request.call(null,id,kind),new cljs.core.Keyword(null,"params","params",710516235),params);
}));

(c3kit.wire.websocketc.request.cljs$core$IFn$_invoke$arity$4 = (function (id,kind,params,reply_QMARK_){
if(cljs.core.truth_(reply_QMARK_)){
return cljs.core.assoc.call(null,c3kit.wire.websocketc.request.call(null,id,kind,params),new cljs.core.Keyword(null,"reply?","reply?",126773098),true);
} else {
return c3kit.wire.websocketc.request.call(null,id,kind,params);
}
}));

(c3kit.wire.websocketc.request.cljs$lang$maxFixedArity = 4);

c3kit.wire.websocketc.response = (function c3kit$wire$websocketc$response(id,data){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-id","response-id",31488415),id,new cljs.core.Keyword(null,"payload","payload",-383036092),data], null);
});
c3kit.wire.websocketc.request_QMARK_ = (function c3kit$wire$websocketc$request_QMARK_(message){
return ((cljs.core.map_QMARK_.call(null,message)) && (cljs.core.contains_QMARK_.call(null,message,new cljs.core.Keyword(null,"request-id","request-id",-985684093))));
});
c3kit.wire.websocketc.response_QMARK_ = (function c3kit$wire$websocketc$response_QMARK_(message){
return ((cljs.core.map_QMARK_.call(null,message)) && (cljs.core.contains_QMARK_.call(null,message,new cljs.core.Keyword(null,"response-id","response-id",31488415))));
});
/**
 * Returns a map holding connection data.  A connection will contain, but is not limited to, these keys:
 * 
 *   :id               - a unique string id for the connection
 *   :socket           - network communication channel
 *   :request-counter  - to generate next request id in sequence for this connection
 *   :open?            - boolean
 *   :responders       - (maybe) map of request-id -> (fn [payload]) to handle responses
 *   :last-active-at   - time of last send or receive of data
 */
c3kit.wire.websocketc.connection = (function c3kit$wire$websocketc$connection(id,socket){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"request-counter","request-counter",1367607673),(0),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});
c3kit.wire.websocketc.unpack = (function c3kit$wire$websocketc$unpack(data){
try{return c3kit.apron.utilc._LT__edn.call(null,data);
}catch (e24657){var _ = e24657;
return data;
}});
c3kit.wire.websocketc.pack = (function c3kit$wire$websocketc$pack(message){
return c3kit.apron.utilc.__GT_edn.call(null,message);
});
c3kit.wire.websocketc.handle_request = (function c3kit$wire$websocketc$handle_request(server,connection,message){
var temp__5823__auto__ = new cljs.core.Keyword(null,"message-handler","message-handler",-256285430).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,server));
if(cljs.core.truth_(temp__5823__auto__)){
var handler = temp__5823__auto__;
var handler_msg = cljs.core.assoc.call(null,message,new cljs.core.Keyword(null,"connection-id","connection-id",1500693463),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection)));
var handler_msg__$1 = (function (){var temp__5823__auto____$1 = new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection));
if(cljs.core.truth_(temp__5823__auto____$1)){
var request = temp__5823__auto____$1;
return cljs.core.assoc.call(null,handler_msg,new cljs.core.Keyword(null,"request","request",1772954723),request);
} else {
return handler_msg;
}
})();
var result = handler.call(null,handler_msg__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reply?","reply?",126773098).cljs$core$IFn$_invoke$arity$1(handler_msg__$1))){
var reply = c3kit.wire.websocketc.response.call(null,new cljs.core.Keyword(null,"request-id","request-id",-985684093).cljs$core$IFn$_invoke$arity$1(handler_msg__$1),result);
return c3kit.wire.websocketc.send_to_BANG_.call(null,server,connection,new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection)),reply);
} else {
return null;
}
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket MISSING :message-handler!"], null);
}),null)),null,(102),null);
}
});
c3kit.wire.websocketc.send_internal_message = (function c3kit$wire$websocketc$send_internal_message(server,connection,kind,payload){
return c3kit.wire.websocketc.handle_request.call(null,server,connection,c3kit.wire.websocketc.request.call(null,null,kind,payload));
});
c3kit.wire.websocketc.connection_responder_BANG_ = (function c3kit$wire$websocketc$connection_responder_BANG_(conn_atom,id){
try{var old = cljs.core.get_in.call(null,cljs.core.deref.call(null,conn_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"responders","responders",8206855),id], null));
cljs.core.swap_BANG_.call(null,conn_atom,cljs.core.update,new cljs.core.Keyword(null,"responders","responders",8206855),cljs.core.dissoc,id);

return old;
}catch (e24668){var _ = e24668;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["connection MISSING; maybe OFFLINE"], null);
}),null)),null,(103),null);
}});
c3kit.wire.websocketc._cancel_timeout_BANG_ = (function c3kit$wire$websocketc$_cancel_timeout_BANG_(timeout){
return clearTimeout(timeout);
});
c3kit.wire.websocketc._activity_BANG_ = (function c3kit$wire$websocketc$_activity_BANG_(var_args){
var G__24673 = arguments.length;
switch (G__24673) {
case 1:
return c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (connection){
return c3kit.wire.websocketc._activity_BANG_.call(null,connection,c3kit.apron.time.now.call(null));
}));

(c3kit.wire.websocketc._activity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (connection,moment){
return cljs.core.swap_BANG_.call(null,connection,cljs.core.assoc,new cljs.core.Keyword(null,"last-active-at","last-active-at",347439929),moment);
}));

(c3kit.wire.websocketc._activity_BANG_.cljs$lang$maxFixedArity = 2);

c3kit.wire.websocketc._activity_since_QMARK_ = (function c3kit$wire$websocketc$_activity_since_QMARK_(connection,moment){
var temp__5823__auto__ = new cljs.core.Keyword(null,"last-active-at","last-active-at",347439929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection));
if(cljs.core.truth_(temp__5823__auto__)){
var activity = temp__5823__auto__;
return c3kit.apron.time.before_QMARK_.call(null,moment,activity);
} else {
return false;
}
});
c3kit.wire.websocketc._handle_response = (function c3kit$wire$websocketc$_handle_response(connection,response){
var temp__5823__auto__ = c3kit.wire.websocketc.connection_responder_BANG_.call(null,connection,new cljs.core.Keyword(null,"response-id","response-id",31488415).cljs$core$IFn$_invoke$arity$1(response));
if(cljs.core.truth_(temp__5823__auto__)){
var responder = temp__5823__auto__;
var vec__24685 = responder;
var responder_fn = cljs.core.nth.call(null,vec__24685,(0),null);
var timeout = cljs.core.nth.call(null,vec__24685,(1),null);
if(cljs.core.truth_(timeout)){
c3kit.wire.websocketc._cancel_timeout_BANG_.call(null,timeout);
} else {
}

return responder_fn.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(response));
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket connection MISSING responder:",new cljs.core.Keyword(null,"response-id","response-id",31488415).cljs$core$IFn$_invoke$arity$1(response)], null);
}),null)),null,(104),null);
}
});
c3kit.wire.websocketc.handle_data = (function c3kit$wire$websocketc$handle_data(server,data){
var temp__5823__auto__ = new cljs.core.Keyword(null,"on-data","on-data",-502344804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,server));
if(cljs.core.truth_(temp__5823__auto__)){
var data_handler = temp__5823__auto__;
return data_handler.call(null,data);
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket UNHANDLED data received:",data], null);
}),null)),null,(105),null);
}
});
c3kit.wire.websocketc.handle_message = (function c3kit$wire$websocketc$handle_message(server,connection,data){
if(cljs.core.truth_(cljs.core.deref.call(null,connection))){
var message = c3kit.wire.websocketc.unpack.call(null,data);
c3kit.wire.websocketc._activity_BANG_.call(null,connection);

if(c3kit.wire.websocketc.request_QMARK_.call(null,message)){
return c3kit.wire.websocketc.handle_request.call(null,server,connection,message);
} else {
if(c3kit.wire.websocketc.response_QMARK_.call(null,message)){
return c3kit.wire.websocketc._handle_response.call(null,connection,message);
} else {
return c3kit.wire.websocketc.handle_data.call(null,server,message);

}
}
} else {
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket MISSING connection:",cljs.core.pr_str.call(null,connection)], null);
}),null)),null,(106),null);
}
});
c3kit.wire.websocketc._timeout_BANG_ = (function c3kit$wire$websocketc$_timeout_BANG_(server,connection,request_id){
if(cljs.core.truth_(c3kit.wire.websocketc.connection_responder_BANG_.call(null,connection,request_id))){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket TIMEOUT: ",request_id], null);
}),null)),null,(107),null);

return c3kit.wire.websocketc.send_internal_message.call(null,server,connection,new cljs.core.Keyword("ws","timeout","ws/timeout",-318635850),request_id);
} else {
return null;
}
});
c3kit.wire.websocketc._create_timeout_BANG_ = (function c3kit$wire$websocketc$_create_timeout_BANG_(server,connection,request_id,timeout_millis){
return setTimeout((function (){
return c3kit.wire.websocketc._timeout_BANG_.call(null,server,connection,request_id);
}),timeout_millis);
});
c3kit.wire.websocketc.connection_request_BANG_ = (function c3kit$wire$websocketc$connection_request_BANG_(server,conn_atom,kind,params,responder){
var connection = cljs.core.swap_BANG_.call(null,conn_atom,(function (conn){
var request_counter = (new cljs.core.Keyword(null,"request-counter","request-counter",1367607673).cljs$core$IFn$_invoke$arity$2(conn,(0)) + (1));
var conn__$1 = cljs.core.assoc.call(null,conn,new cljs.core.Keyword(null,"request-counter","request-counter",1367607673),request_counter);
if(cljs.core.truth_(responder)){
var timeout = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,server));
if(cljs.core.truth_(temp__5825__auto__)){
var timeout_millis = temp__5825__auto__;
return c3kit.wire.websocketc._create_timeout_BANG_.call(null,server,conn__$1,request_counter,timeout_millis);
} else {
return null;
}
})();
return cljs.core.update.call(null,conn__$1,new cljs.core.Keyword(null,"responders","responders",8206855),cljs.core.assoc,request_counter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [responder,timeout], null));
} else {
return conn__$1;
}
}));
return c3kit.wire.websocketc.request.call(null,new cljs.core.Keyword(null,"request-counter","request-counter",1367607673).cljs$core$IFn$_invoke$arity$1(connection),kind,params,(!((responder == null))));
});
c3kit.wire.websocketc._do_call_BANG_ = (function c3kit$wire$websocketc$_do_call_BANG_(state,connection,kind,params,handler,options){
var options__$1 = (cljs.core.truth_(options)?c3kit.apron.corec.__GT_options.call(null,options):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection)))){
var message = c3kit.wire.websocketc.connection_request_BANG_.call(null,state,connection,kind,params,handler);
var socket = new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection));
c3kit.wire.websocketc._activity_BANG_.call(null,connection);

if(cljs.core.truth_(socket)){
return c3kit.wire.websocketc.send_to_BANG_.call(null,state,connection,socket,message);
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket send! with missing socket: ",message], null);
}),null)),null,(108),null);

return false;
}
} else {
return false;
}
});
c3kit.wire.websocketc._ping_BANG_ = (function c3kit$wire$websocketc$_ping_BANG_(state,connection){
return c3kit.wire.websocketc._do_call_BANG_.call(null,state,connection,new cljs.core.Keyword("ws","ping","ws/ping",-1670118340),null,null,null);
});
c3kit.wire.websocketc._ping_inactive_connections_BANG_ = (function c3kit$wire$websocketc$_ping_inactive_connections_BANG_(state){
var temp__5825__auto__ = new cljs.core.Keyword(null,"ping-interval","ping-interval",2060167182).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__5825__auto__)){
var interval = temp__5825__auto__;
var moment = c3kit.apron.time.ago.call(null,c3kit.apron.time.seconds.call(null,interval));
var seq__24722 = cljs.core.seq.call(null,c3kit.wire.websocketc.connections.call(null,state));
var chunk__24723 = null;
var count__24724 = (0);
var i__24725 = (0);
while(true){
if((i__24725 < count__24724)){
var connection = cljs.core._nth.call(null,chunk__24723,i__24725);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref.call(null,connection);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection));
if(cljs.core.truth_(and__5023__auto____$1)){
return (!(c3kit.wire.websocketc._activity_since_QMARK_.call(null,connection,moment)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
c3kit.wire.websocketc._ping_BANG_.call(null,state,connection);
} else {
}


var G__24750 = seq__24722;
var G__24751 = chunk__24723;
var G__24752 = count__24724;
var G__24753 = (i__24725 + (1));
seq__24722 = G__24750;
chunk__24723 = G__24751;
count__24724 = G__24752;
i__24725 = G__24753;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq.call(null,seq__24722);
if(temp__5825__auto____$1){
var seq__24722__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24722__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__24722__$1);
var G__24755 = cljs.core.chunk_rest.call(null,seq__24722__$1);
var G__24756 = c__5548__auto__;
var G__24757 = cljs.core.count.call(null,c__5548__auto__);
var G__24758 = (0);
seq__24722 = G__24755;
chunk__24723 = G__24756;
count__24724 = G__24757;
i__24725 = G__24758;
continue;
} else {
var connection = cljs.core.first.call(null,seq__24722__$1);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref.call(null,connection);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection));
if(cljs.core.truth_(and__5023__auto____$1)){
return (!(c3kit.wire.websocketc._activity_since_QMARK_.call(null,connection,moment)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
c3kit.wire.websocketc._ping_BANG_.call(null,state,connection);
} else {
}


var G__24763 = cljs.core.next.call(null,seq__24722__$1);
var G__24764 = null;
var G__24765 = (0);
var G__24766 = (0);
seq__24722 = G__24763;
chunk__24723 = G__24764;
count__24724 = G__24765;
i__24725 = G__24766;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
c3kit.wire.websocketc.connection_closed_BANG_ = (function c3kit$wire$websocketc$connection_closed_BANG_(server,connection){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,connection)))){
c3kit.wire.websocketc.send_internal_message.call(null,server,connection,new cljs.core.Keyword("ws","close","ws/close",1835153450),null);

return cljs.core.swap_BANG_.call(null,connection,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
} else {
return null;
}
});
c3kit.wire.websocketc._connection_cursor = (function c3kit$wire$websocketc$_connection_cursor(state){
return c3kit.apron.cursor.cursor.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300)], null));
});

c3kit.wire.websocketc.connections = (function c3kit$wire$websocketc$connections(state){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.websocketc._connection_cursor.call(null,state)], null);
});

c3kit.wire.websocketc._socket_send_BANG_ = (function c3kit$wire$websocketc$_socket_send_BANG_(socket,data){
socket.send(data);

return true;
});

c3kit.wire.websocketc.send_to_BANG_ = (function c3kit$wire$websocketc$send_to_BANG_(_,_connection,socket,message){
return c3kit.wire.websocketc._socket_send_BANG_.call(null,socket,c3kit.wire.websocketc.pack.call(null,message));
});

c3kit.wire.websocketc._data_received = (function c3kit$wire$websocketc$_data_received(client,e){
var data = e.data;
return c3kit.wire.websocketc.handle_message.call(null,client,c3kit.wire.websocketc._connection_cursor.call(null,client),data);
});

c3kit.wire.websocketc._handle_open = (function c3kit$wire$websocketc$_handle_open(client,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket opened"], null);
}),null)),null,(109),null);

cljs.core.swap_BANG_.call(null,client,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),true);

return c3kit.wire.websocketc.send_internal_message.call(null,client,c3kit.wire.websocketc._connection_cursor.call(null,client),new cljs.core.Keyword("ws","open","ws/open",-1763599228),null);
});

c3kit.wire.websocketc._handle_close = (function c3kit$wire$websocketc$_handle_close(client,_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket close:"], null);
}),null)),null,(110),null);

cljs.core.swap_BANG_.call(null,client,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false);

return c3kit.wire.websocketc.send_internal_message.call(null,client,c3kit.wire.websocketc._connection_cursor.call(null,client),new cljs.core.Keyword("ws","close","ws/close",1835153450),null);
});

c3kit.wire.websocketc._handle_error = (function c3kit$wire$websocketc$_handle_error(client,e){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket error:"], null);
}),null)),null,(111),null);

return c3kit.wire.websocketc.send_internal_message.call(null,client,c3kit.wire.websocketc._connection_cursor.call(null,client),new cljs.core.Keyword("ws","error","ws/error",-978964716),cljs.core.js__GT_clj.call(null,e,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});

c3kit.wire.websocketc._add_connection_BANG_ = (function c3kit$wire$websocketc$_add_connection_BANG_(client,path,csrf_token,cid,socket){
return cljs.core.swap_BANG_.call(null,client,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),c3kit.wire.websocketc.connection.call(null,cid,socket),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"ws-csrf-token","ws-csrf-token",-1873854868),csrf_token);
});

c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_ = (function c3kit$wire$websocketc$_ping_inactive_connections_and_set_timeout_BANG_(state,interval){
c3kit.wire.websocketc._ping_inactive_connections_BANG_.call(null,state);

return setTimeout((function (){
return c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_.call(null,state,interval);
}),interval);
});

c3kit.wire.websocketc.add_ping_task_BANG_ = (function c3kit$wire$websocketc$add_ping_task_BANG_(state,interval){
var task = (function (){
return c3kit.wire.websocketc._ping_inactive_connections_and_set_timeout_BANG_.call(null,state,interval);
});
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"ping-task","ping-task",841830678),setTimeout(task,interval));
});
c3kit.wire.websocketc.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-data","on-data",-502344804),null,new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823),(5000),new cljs.core.Keyword(null,"ping-interval","ping-interval",2060167182),(30)], null);
/**
 * Returns a atom to hold all the state and configuration to run a websocket client or server.
 * 
 *   message-handler - (fn [REQUEST]) to handle incoming RPC requests.
 * 
 *   REQUEST:
 *   :request-id    - each connection has it's own sequence starting at 1
 *   :kind          - used to dispatch behavior (see BUILTIN KINDS below)
 *   :params        - any clj form (data) needed to support the :kind of request
 *   :reply?        - true iff a response is expected
 *   :connection-id - uniquely identifying the connection to the server
 *   :request       - (server only) the ring request that initiated the websocket connection
 * 
 *   BUILTIN KINDS (values for :kind key in requests)
 *   :ws/open       - a connection is opened {:params nil}
 *   :ws/close      - a connection is closed {:params nil}
 *   :ws/hello      - sent from server to client when a connection is opened {:params nil}
 *   :ws/error      - an error occurred {:params error-map}
 *   :ws/timeout    - a request with {:reply? true} did not receive a response within :request-timeout milliseconds
 * 
 *   RESPONSE:
 *   :response-id   - id corresponding to originating request
 *   :payload       - any form
 * 
 *   OPTIONS - a map and/or key/value pairs:
 *   :on-data         	- (fn [data]) when incoming data fails to parse (edn) or satisfy request? or response?
 *   :request-timeout 	- (default: 5000) milliseconds to wait before cancelling request.  nil -> never timeout.
 *   :atom-fn      		- (default: core/atom) type of atom to story the state. Maybe reagent/atom.
 *   :ping-interval	 	- (default: 30) seconds between keep-alive pings on inactive connections. nil -> no pings
 *   
 */
c3kit.wire.websocketc.create = (function c3kit$wire$websocketc$create(var_args){
var args__5755__auto__ = [];
var len__5749__auto___24804 = arguments.length;
var i__5750__auto___24805 = (0);
while(true){
if((i__5750__auto___24805 < len__5749__auto___24804)){
args__5755__auto__.push((arguments[i__5750__auto___24805]));

var G__24806 = (i__5750__auto___24805 + (1));
i__5750__auto___24805 = G__24806;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.wire.websocketc.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.wire.websocketc.create.cljs$core$IFn$_invoke$arity$variadic = (function (message_handler,args){
var options = c3kit.apron.corec.__GT_options.call(null,args);
var atom_fn = new cljs.core.Keyword(null,"atom-fn","atom-fn",-354652779).cljs$core$IFn$_invoke$arity$2(options,cljs.core.atom);
var server = cljs.core.merge.call(null,c3kit.wire.websocketc.default_options,cljs.core.select_keys.call(null,options,cljs.core.keys.call(null,c3kit.wire.websocketc.default_options)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connection","connection",-123599300),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message-handler","message-handler",-256285430),message_handler], null));
var state_atom = atom_fn.call(null,server);
var temp__5825__auto___24807 = new cljs.core.Keyword(null,"ping-interval","ping-interval",2060167182).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom));
if(cljs.core.truth_(temp__5825__auto___24807)){
var interval_24808 = temp__5825__auto___24807;
c3kit.wire.websocketc.add_ping_task_BANG_.call(null,state_atom,interval_24808);
} else {
}

return state_atom;
}));

(c3kit.wire.websocketc.create.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.wire.websocketc.create.cljs$lang$applyTo = (function (seq24781){
var G__24782 = cljs.core.first.call(null,seq24781);
var seq24781__$1 = cljs.core.next.call(null,seq24781);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24782,seq24781__$1);
}));

/**
 * Open a websocket connection to the server.
 * 
 *   client     - client state atom
 *   uri        - URI path to the websocket handler (wss://host/path?connection-id=abc&ws-csrf-token=xyz)
 *   csrf-token - required for security.  Default strategy is session/key from server.
 */
c3kit.wire.websocketc.connect_BANG_ = (function c3kit$wire$websocketc$connect_BANG_(client,uri,csrf_token,connection_id){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"c3kit.wire.websocketc",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket connect!"], null);
}),null)),null,(112),null);

var socket = (new WebSocket(uri));
c3kit.wire.websocketc._add_connection_BANG_.call(null,client,uri,csrf_token,connection_id,socket);

socket.addEventListener("open",cljs.core.partial.call(null,c3kit.wire.websocketc._handle_open,client));

socket.addEventListener("message",cljs.core.partial.call(null,c3kit.wire.websocketc._data_received,client));

socket.addEventListener("close",cljs.core.partial.call(null,c3kit.wire.websocketc._handle_close,client));

return socket.addEventListener("error",cljs.core.partial.call(null,c3kit.wire.websocketc._handle_error,client));
});
/**
 * Make a websocket RPC.
 * 
 *   state         - client or sever state (from create fn)
 *   connection-id - (server only) to select the client connection you want to call
 *   kind          - used to dispatch behavior, typically a keyword
 *   params        - (optional) any clj form (data) needed to support the :kind of request
 *   handler       - (optional) (fn [RESPONSE]) invoked when a response to the request is received (reply? implied true)
 * 
 *   OPTIONS - a map and/or key/value pairs:
 *   
 */
c3kit.wire.websocketc.call_BANG_ = (function c3kit$wire$websocketc$call_BANG_(var_args){
var G__24803 = arguments.length;
switch (G__24803) {
case 2:
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___24814 = arguments.length;
var i__5750__auto___24815 = (0);
while(true){
if((i__5750__auto___24815 < len__5749__auto___24814)){
args_arr__5774__auto__.push((arguments[i__5750__auto___24815]));

var G__24817 = (i__5750__auto___24815 + (1));
i__5750__auto___24815 = G__24817;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((4) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((4)),(0),null)):null);
return c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5775__auto__);

}
});

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,kind){
return c3kit.wire.websocketc.call_BANG_.call(null,state,kind,null,null);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,kind,params){
return c3kit.wire.websocketc.call_BANG_.call(null,state,kind,params,null);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,kind,params,handler,options){
return c3kit.wire.websocketc._do_call_BANG_.call(null,state,c3kit.wire.websocketc._connection_cursor.call(null,state),kind,params,handler,options);
}));

/** @this {Function} */
(c3kit.wire.websocketc.call_BANG_.cljs$lang$applyTo = (function (seq24798){
var G__24799 = cljs.core.first.call(null,seq24798);
var seq24798__$1 = cljs.core.next.call(null,seq24798);
var G__24800 = cljs.core.first.call(null,seq24798__$1);
var seq24798__$2 = cljs.core.next.call(null,seq24798__$1);
var G__24801 = cljs.core.first.call(null,seq24798__$2);
var seq24798__$3 = cljs.core.next.call(null,seq24798__$2);
var G__24802 = cljs.core.first.call(null,seq24798__$3);
var seq24798__$4 = cljs.core.next.call(null,seq24798__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24799,G__24800,G__24801,G__24802,seq24798__$4);
}));

(c3kit.wire.websocketc.call_BANG_.cljs$lang$maxFixedArity = (4));

c3kit.wire.websocketc.open_QMARK_ = (function c3kit$wire$websocketc$open_QMARK_(client){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,client),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"open?","open?",1238443125)], null));
});
/**
 * Close the connection.
 *   code   (optional) https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#status_codes
 *   reason (optional) A human-readable string explaining why the connection is closing
 */
c3kit.wire.websocketc.close_BANG_ = (function c3kit$wire$websocketc$close_BANG_(var_args){
var G__24816 = arguments.length;
switch (G__24816) {
case 1:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (state){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"socket","socket",59137063)], null)).close();
}));

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (state,code_or_reason){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"socket","socket",59137063)], null)).close(code_or_reason);
}));

(c3kit.wire.websocketc.close_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (state,code,reason){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.Keyword(null,"socket","socket",59137063)], null)).close(code,reason);
}));

(c3kit.wire.websocketc.close_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=websocketc.js.map
