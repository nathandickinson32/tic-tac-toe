// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.memory_websocket');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.mock.event');
goog.require('c3kit.wire.mock.server');
goog.require('c3kit.wire.socket');
/**
 * Encode a string in UTF-8
 */
c3kit.wire.mock.memory_websocket.encode_utf8 = (function c3kit$wire$mock$memory_websocket$encode_utf8(s){
return cljs.core.js_invoke.call(null,(new TextEncoder()),"encode",s);
});
c3kit.wire.mock.memory_websocket.syntax_error_BANG_ = (function c3kit$wire$mock$memory_websocket$syntax_error_BANG_(message,data){
throw (new SyntaxError([cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('')));
});
c3kit.wire.mock.memory_websocket.select_protocol = (function c3kit$wire$mock$memory_websocket$select_protocol(protocols){
var protocols__$1 = cljs.core.js__GT_clj.call(null,protocols);
if(typeof protocols__$1 === 'string'){
return protocols__$1;
} else {
if((!(cljs.core.sequential_QMARK_.call(null,protocols__$1)))){
return c3kit.wire.mock.memory_websocket.syntax_error_BANG_.call(null,"Protocols must be a string or a collection",protocols__$1);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,protocols__$1),cljs.core.count.call(null,cljs.core.distinct.call(null,protocols__$1)))){
return c3kit.wire.mock.memory_websocket.syntax_error_BANG_.call(null,"Protocols may not contain duplicates",protocols__$1);
} else {
var or__5025__auto__ = cljs.core.first.call(null,protocols__$1);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}

}
}
}
});
c3kit.wire.mock.memory_websocket.assert_valid_url = (function c3kit$wire$mock$memory_websocket$assert_valid_url(url){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^wss?:\/\/[^#]*$/,url))){
return null;
} else {
return c3kit.wire.mock.memory_websocket.syntax_error_BANG_.call(null,"URL is invalid",url);
}
});
c3kit.wire.mock.memory_websocket.assert_short_reason = (function c3kit$wire$mock$memory_websocket$assert_short_reason(reason){
if(((123) < c3kit.apron.corec.oget.call(null,c3kit.wire.mock.memory_websocket.encode_utf8.call(null,reason),"length"))){
throw cljs.core.ex_info.call(null,"Reason must be less than 123 bytes",reason);
} else {
return null;
}
});
c3kit.wire.mock.memory_websocket.assert_closure_code = (function c3kit$wire$mock$memory_websocket$assert_closure_code(code){
if(((cljs.core._EQ_.call(null,(1000),code)) || (((((3000) <= code)) && ((code <= (4999))))))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Code must be either 1000 or between 3000 and 4999",code);
}
});
c3kit.wire.mock.memory_websocket.send = (function c3kit$wire$mock$memory_websocket$send(data){
var sock = this;
var G__23431 = c3kit.wire.socket.ready_state.call(null,sock);
switch (G__23431) {
case (0):
throw cljs.core.ex_info.call(null,"MemSocket is still in CONNECTING state.",data);

break;
case (1):
return c3kit.wire.mock.server.receive.call(null,sock,data);

break;
default:
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.mock.memory-websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MemSocket is already in CLOSING or CLOSED state."], null);
}),null)),null,(76),null);

}
});
c3kit.wire.mock.memory_websocket.on_close = (function c3kit$wire$mock$memory_websocket$on_close(sock,code,reason){
return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_CloseEvent.call(null,sock,code,reason,true));
});
c3kit.wire.mock.memory_websocket.close = (function c3kit$wire$mock$memory_websocket$close(var_args){
var G__23434 = arguments.length;
switch (G__23434) {
case 1:
return c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$1 = (function (sock){
return c3kit.wire.mock.memory_websocket.close.call(null,sock,(1000));
}));

(c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$2 = (function (sock,code){
c3kit.wire.mock.memory_websocket.assert_closure_code.call(null,code);

c3kit.wire.mock.memory_websocket.on_close.call(null,sock,code,"");

c3kit.apron.corec.oset.call(null,sock,"readyState",(3));

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.wire.mock.memory-websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Closing MemSocket with code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('')], null);
}),null)),null,(77),null);
}));

(c3kit.wire.mock.memory_websocket.close.cljs$core$IFn$_invoke$arity$3 = (function (sock,code,reason){
c3kit.wire.mock.memory_websocket.assert_closure_code.call(null,code);

c3kit.wire.mock.memory_websocket.assert_short_reason.call(null,reason);

c3kit.apron.corec.oset.call(null,sock,"readyState",(3));

c3kit.wire.mock.memory_websocket.on_close.call(null,sock,code,reason);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.wire.mock.memory-websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Closing MemSocket with code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code)].join('')], null);
}),null)),null,(78),null);

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"c3kit.wire.mock.memory-websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Closing MemSocket with reason: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reason)].join('')], null);
}),null)),null,(79),null);
}));

(c3kit.wire.mock.memory_websocket.close.cljs$lang$maxFixedArity = 3);

c3kit.wire.mock.memory_websocket.add_slash_QMARK_ = (function c3kit$wire$mock$memory_websocket$add_slash_QMARK_(url){
return cljs.core.not.call(null,cljs.core.re_find.call(null,/^wss?:\/\/[^\/]*\//,url));
});
c3kit.wire.mock.memory_websocket.normalize_url = (function c3kit$wire$mock$memory_websocket$normalize_url(url){
var G__23437 = url;
if(c3kit.wire.mock.memory_websocket.add_slash_QMARK_.call(null,url)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23437),"/"].join('');
} else {
return G__23437;
}
});
c3kit.wire.mock.memory_websocket.add_listener = (function c3kit$wire$mock$memory_websocket$add_listener(event_queue,event,listener){
if(cljs.core.not_any_QMARK_.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([listener]),cljs.core.get.call(null,cljs.core.deref.call(null,event_queue),event))){
return cljs.core.swap_BANG_.call(null,event_queue,cljs.core.update,event,c3kit.apron.corec.conjv,listener);
} else {
return null;
}
});
c3kit.wire.mock.memory_websocket.remove_listener = (function c3kit$wire$mock$memory_websocket$remove_listener(event_queue,event,listener){
return cljs.core.swap_BANG_.call(null,event_queue,cljs.core.update,event,(function (p1__23439_SHARP_){
return c3kit.apron.corec.removev.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([listener]),p1__23439_SHARP_);
}));
});
c3kit.wire.mock.memory_websocket.attempt_handler = (function c3kit$wire$mock$memory_websocket$attempt_handler(event,handler){
try{return handler.call(null,event);
}catch (e23440){var e = e23440;
var event_type = c3kit.apron.corec.oget.call(null,event,"type");
if(cljs.core._EQ_.call(null,"close",event_type)){
c3kit.apron.corec.oset.call(null,event,"wasClean",false);
} else {
}

return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.mock.memory-websocket",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Error occurred in MemSocket ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_type)].join(''),e], null);
}),null)),null,(80),null);
}});
c3kit.wire.mock.memory_websocket.dispatch_event = (function c3kit$wire$mock$memory_websocket$dispatch_event(event_queue,event){
var event_type = c3kit.apron.corec.oget.call(null,event,"type");
var handlers = cljs.core.seq.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,event_queue),event_type));
return cljs.core.run_BANG_.call(null,(function (p1__23441_SHARP_){
return c3kit.wire.mock.memory_websocket.attempt_handler.call(null,event,p1__23441_SHARP_);
}),handlers);
});
c3kit.wire.mock.memory_websocket.create_memory_socket = (function c3kit$wire$mock$memory_websocket$create_memory_socket(url,protocols){
c3kit.wire.mock.memory_websocket.assert_valid_url.call(null,url);

var event_queue = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var obj23443 = ({"extensions":"","protocol":c3kit.wire.mock.memory_websocket.select_protocol.call(null,protocols),"url":c3kit.wire.mock.memory_websocket.normalize_url.call(null,url),"binaryType":"blob","removeEventListener":(function (event,listener){
return c3kit.wire.mock.memory_websocket.remove_listener.call(null,event_queue,event,listener);
}),"bufferedAmount":(0),"send":c3kit.wire.mock.memory_websocket.send,"readyState":(0),"close":(function() {
var G__23448 = null;
var G__23448__0 = (function (){
var this$ = this;
return c3kit.wire.mock.memory_websocket.close.call(null,this$);
});
var G__23448__1 = (function (code){
var this$ = this;
return c3kit.wire.mock.memory_websocket.close.call(null,this$,code);
});
var G__23448__2 = (function (code,reason){
var this$ = this;
return c3kit.wire.mock.memory_websocket.close.call(null,this$,code,reason);
});
G__23448 = function(code,reason){
switch(arguments.length){
case 0:
return G__23448__0.call(this);
case 1:
return G__23448__1.call(this,code);
case 2:
return G__23448__2.call(this,code,reason);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23448.cljs$core$IFn$_invoke$arity$0 = G__23448__0;
G__23448.cljs$core$IFn$_invoke$arity$1 = G__23448__1;
G__23448.cljs$core$IFn$_invoke$arity$2 = G__23448__2;
return G__23448;
})()
,"dispatchEvent":(function (event){
return c3kit.wire.mock.memory_websocket.dispatch_event.call(null,event_queue,event);
}),"addEventListener":(function (event,listener){
return c3kit.wire.mock.memory_websocket.add_listener.call(null,event_queue,event,listener);
})});
return obj23443;
});
c3kit.wire.mock.memory_websocket.__GT_MemSocket = (function c3kit$wire$mock$memory_websocket$__GT_MemSocket(var_args){
var G__23447 = arguments.length;
switch (G__23447) {
case 1:
return c3kit.wire.mock.memory_websocket.__GT_MemSocket.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.mock.memory_websocket.__GT_MemSocket.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.mock.memory_websocket.__GT_MemSocket.cljs$core$IFn$_invoke$arity$1 = (function (url){
return c3kit.wire.mock.memory_websocket.__GT_MemSocket.call(null,url,cljs.core.clj__GT_js.call(null,cljs.core.PersistentVector.EMPTY));
}));

(c3kit.wire.mock.memory_websocket.__GT_MemSocket.cljs$core$IFn$_invoke$arity$2 = (function (url,protocols){
c3kit.wire.mock.memory_websocket.assert_valid_url.call(null,url);

var G__23449 = c3kit.wire.mock.memory_websocket.create_memory_socket.call(null,url,protocols);
c3kit.wire.mock.server.initiate.call(null,G__23449);

return G__23449;
}));

(c3kit.wire.mock.memory_websocket.__GT_MemSocket.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=memory_websocket.js.map
