// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.memory_server');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.mock.event');
goog.require('c3kit.wire.mock.server');
goog.require('c3kit.wire.socket');
c3kit.wire.mock.memory_server.__GT_MemServer = (function c3kit$wire$mock$memory_server$__GT_MemServer(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"sockets","sockets",-2073650194),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null);
});
c3kit.wire.mock.memory_server.assert_running_BANG_ = (function c3kit$wire$mock$memory_server$assert_running_BANG_(server){
if(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763).cljs$core$IFn$_invoke$arity$1(server)))){
return null;
} else {
throw cljs.core.ex_info.call(null,"Server is not running",server);
}
});
c3kit.wire.mock.memory_server.assert_connecting_BANG_ = (function c3kit$wire$mock$memory_server$assert_connecting_BANG_(sock){
if(c3kit.wire.socket.connecting_QMARK_.call(null,sock)){
return null;
} else {
throw cljs.core.ex_info.call(null,"Socket is not CONNECTING",sock);
}
});
c3kit.wire.mock.memory_server.assert_uninitialized = (function c3kit$wire$mock$memory_server$assert_uninitialized(sockets,sock){
if(cljs.core.contains_QMARK_.call(null,sockets,sock)){
throw cljs.core.ex_info.call(null,"Socket has already been initiated",sock);
} else {
return null;
}
});
c3kit.wire.mock.memory_server.shutdown_socket_BANG_ = (function c3kit$wire$mock$memory_server$shutdown_socket_BANG_(sock){
c3kit.apron.corec.oset.call(null,sock,"readyState",(3));

c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_ErrorEvent.call(null,sock));

return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_CloseEvent.call(null,sock,(1006),"",false));
});
cljs.core._add_method.call(null,c3kit.wire.mock.server._connections,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server){
return cljs.core.vec.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sockets","sockets",-2073650194).cljs$core$IFn$_invoke$arity$1(server))));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._initiate,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (p__15731,sock){
var map__15732 = p__15731;
var map__15732__$1 = cljs.core.__destructure_map.call(null,map__15732);
var sockets = cljs.core.get.call(null,map__15732__$1,new cljs.core.Keyword(null,"sockets","sockets",-2073650194));
c3kit.wire.mock.memory_server.assert_connecting_BANG_.call(null,sock);

c3kit.wire.mock.memory_server.assert_uninitialized.call(null,cljs.core.deref.call(null,sockets),sock);

cljs.core.swap_BANG_.call(null,sockets,cljs.core.assoc,sock,cljs.core.PersistentArrayMap.EMPTY);

return c3kit.wire.js.add_listener.call(null,sock,"close",(function (){
return cljs.core.swap_BANG_.call(null,sockets,cljs.core.dissoc,sock);
}));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._open,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock){
c3kit.wire.mock.memory_server.assert_running_BANG_.call(null,server);

c3kit.wire.mock.memory_server.assert_connecting_BANG_.call(null,sock);

c3kit.apron.corec.oset.call(null,sock,"readyState",(1));

return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_OpenEvent.call(null,sock));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._close,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock){
c3kit.wire.mock.memory_server.assert_running_BANG_.call(null,server);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(1),null], null), null).call(null,c3kit.wire.socket.ready_state.call(null,sock)))){
} else {
throw cljs.core.ex_info.call(null,"Socket is not CONNECTING or OPEN",sock);
}

c3kit.apron.corec.oset.call(null,sock,"readyState",(3));

return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_CloseEvent.call(null,sock,(1000),"closed by server",true));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._reject,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock,code,reason){
c3kit.wire.mock.memory_server.assert_running_BANG_.call(null,server);

c3kit.wire.mock.memory_server.assert_connecting_BANG_.call(null,sock);

c3kit.apron.corec.oset.call(null,sock,"readyState",(3));

c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_ErrorEvent.call(null,sock));

return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_CloseEvent.call(null,sock,code,reason,false));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._send,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock,data){
c3kit.wire.mock.memory_server.assert_running_BANG_.call(null,server);

if(c3kit.wire.socket.open_QMARK_.call(null,sock)){
} else {
throw cljs.core.ex_info.call(null,"Socket is not OPEN",sock);
}

return c3kit.wire.js.dispatch_event.call(null,sock,c3kit.wire.mock.event.__GT_MessageEvent.call(null,sock,data));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._receive,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock,data){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"sockets","sockets",-2073650194).cljs$core$IFn$_invoke$arity$1(server),cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sock,new cljs.core.Keyword(null,"messages","messages",345434482)], null),c3kit.apron.corec.conjv,data);
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._messages,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"sockets","sockets",-2073650194).cljs$core$IFn$_invoke$arity$1(server)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sock,new cljs.core.Keyword(null,"messages","messages",345434482)], null));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._flush,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (server,sock){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"sockets","sockets",-2073650194).cljs$core$IFn$_invoke$arity$1(server),cljs.core.update,sock,cljs.core.dissoc,new cljs.core.Keyword(null,"messages","messages",345434482));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._shutdown,new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (p__15737){
var map__15738 = p__15737;
var map__15738__$1 = cljs.core.__destructure_map.call(null,map__15738);
var server = map__15738__$1;
var running_QMARK_ = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"running?","running?",-257884763));
var sockets = cljs.core.get.call(null,map__15738__$1,new cljs.core.Keyword(null,"sockets","sockets",-2073650194));
c3kit.wire.mock.memory_server.assert_running_BANG_.call(null,server);

cljs.core.reset_BANG_.call(null,running_QMARK_,false);

return cljs.core.run_BANG_.call(null,c3kit.wire.mock.memory_server.shutdown_socket_BANG_,cljs.core.filter.call(null,cljs.core.some_fn.call(null,c3kit.wire.socket.open_QMARK_,c3kit.wire.socket.connecting_QMARK_),cljs.core.keys.call(null,cljs.core.deref.call(null,sockets))));
}));

//# sourceMappingURL=memory_server.js.map
