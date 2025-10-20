// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.server');
goog.require('cljs.core');
c3kit.wire.mock.server.impl = cljs.core.atom.call(null,null);
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._connections !== 'undefined')){
} else {
c3kit.wire.mock.server._connections = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-connections"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._initiate !== 'undefined')){
} else {
c3kit.wire.mock.server._initiate = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-initiate"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._open !== 'undefined')){
} else {
c3kit.wire.mock.server._open = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-open"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._reject !== 'undefined')){
} else {
c3kit.wire.mock.server._reject = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-reject"),(function (server,_sock,_code,_reason){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._close !== 'undefined')){
} else {
c3kit.wire.mock.server._close = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-close"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._send !== 'undefined')){
} else {
c3kit.wire.mock.server._send = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-send"),(function (server,_sock,_message){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._receive !== 'undefined')){
} else {
c3kit.wire.mock.server._receive = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-receive"),(function (server,_sock,_data){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._messages !== 'undefined')){
} else {
c3kit.wire.mock.server._messages = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-messages"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._flush !== 'undefined')){
} else {
c3kit.wire.mock.server._flush = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-flush"),(function (server,_sock){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.server !== 'undefined') && (typeof c3kit.wire.mock.server._shutdown !== 'undefined')){
} else {
c3kit.wire.mock.server._shutdown = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.server","-shutdown"),(function (server){
return new cljs.core.Keyword(null,"impl","impl",1677848700).cljs$core$IFn$_invoke$arity$1(server);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
/**
 * Returns a collection of active connections
 */
c3kit.wire.mock.server.connections = (function c3kit$wire$mock$server$connections(){
return c3kit.wire.mock.server._connections.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl));
});
/**
 * The socket initiates a connection to the server.
 */
c3kit.wire.mock.server.initiate = (function c3kit$wire$mock$server$initiate(sock){
return c3kit.wire.mock.server._initiate.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock);
});
/**
 * The server accepts and opens a socket connection request.
 * Invokes the socket onopen event and updates readyState to 1.
 */
c3kit.wire.mock.server.open = (function c3kit$wire$mock$server$open(sock){
return c3kit.wire.mock.server._open.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock);
});
/**
 * The server rejects a socket connection request.
 * Invokes the socket onerror, then onclose events and updates readyState to 3.
 */
c3kit.wire.mock.server.reject = (function c3kit$wire$mock$server$reject(sock,code,reason){
return c3kit.wire.mock.server._reject.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock,code,reason);
});
/**
 * The server closes a connection to the socket.
 * Invokes the socket onclose event and updates readyState to 3.
 */
c3kit.wire.mock.server.close = (function c3kit$wire$mock$server$close(sock){
return c3kit.wire.mock.server._close.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock);
});
/**
 * The server sends a message to the socket.
 * Invokes the socket onmessage event.
 */
c3kit.wire.mock.server.send = (function c3kit$wire$mock$server$send(sock,data){
return c3kit.wire.mock.server._send.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock,data);
});
/**
 * The socket sends a message to the server.
 */
c3kit.wire.mock.server.receive = (function c3kit$wire$mock$server$receive(sock,data){
return c3kit.wire.mock.server._receive.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock,data);
});
/**
 * A collection of messages sent by the socket.
 */
c3kit.wire.mock.server.messages = (function c3kit$wire$mock$server$messages(sock){
return c3kit.wire.mock.server._messages.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock);
});
/**
 * Flush out messages from a socket.
 */
c3kit.wire.mock.server.flush = (function c3kit$wire$mock$server$flush(sock){
return c3kit.wire.mock.server._flush.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl),sock);
});
/**
 * The server shuts down.
 * Invokes the socket onerror, then onclose events for all OPEN or CONNECTING sockets.
 */
c3kit.wire.mock.server.shutdown = (function c3kit$wire$mock$server$shutdown(){
return c3kit.wire.mock.server._shutdown.call(null,cljs.core.deref.call(null,c3kit.wire.mock.server.impl));
});
/**
 * Browser access with (set! js/Server repl-options)
 */
c3kit.wire.mock.server.repl_options = (function (){var obj21526 = ({"send":c3kit.wire.mock.server.send,"flush":c3kit.wire.mock.server.flush,"initiate":c3kit.wire.mock.server.initiate,"shutdown":c3kit.wire.mock.server.shutdown,"close":c3kit.wire.mock.server.close,"messages":cljs.core.comp.call(null,cljs.core.into_array,c3kit.wire.mock.server.messages),"reject":c3kit.wire.mock.server.reject,"open":c3kit.wire.mock.server.open,"receive":c3kit.wire.mock.server.receive,"connections":cljs.core.comp.call(null,cljs.core.into_array,c3kit.wire.mock.server.connections)});
return obj21526;
})();
cljs.core._add_method.call(null,c3kit.wire.mock.server._connections,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._initiate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._open,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._reject,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock,_code,_reason){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._close,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._send,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock,_data){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._receive,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock,_data){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._messages,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._flush,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server,_sock){
return null;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.server._shutdown,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_server){
return null;
}));

//# sourceMappingURL=server.js.map
