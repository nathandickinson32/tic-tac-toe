// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.event');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
c3kit.wire.mock.event.JsWebSocket = WebSocket;
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.event !== 'undefined') && (typeof c3kit.wire.mock.event.__GT_OpenEvent !== 'undefined')){
} else {
c3kit.wire.mock.event.__GT_OpenEvent = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.event","->OpenEvent"),(function (ws){
return cljs.core.type.call(null,ws);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.event !== 'undefined') && (typeof c3kit.wire.mock.event.__GT_CloseEvent !== 'undefined')){
} else {
c3kit.wire.mock.event.__GT_CloseEvent = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.event","->CloseEvent"),(function (ws,_code,_reason,_clean_QMARK_){
return cljs.core.type.call(null,ws);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.event !== 'undefined') && (typeof c3kit.wire.mock.event.__GT_MessageEvent !== 'undefined')){
} else {
c3kit.wire.mock.event.__GT_MessageEvent = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.event","->MessageEvent"),(function (ws,_data){
return cljs.core.type.call(null,ws);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof c3kit !== 'undefined') && (typeof c3kit.wire !== 'undefined') && (typeof c3kit.wire.mock !== 'undefined') && (typeof c3kit.wire.mock.event !== 'undefined') && (typeof c3kit.wire.mock.event.__GT_ErrorEvent !== 'undefined')){
} else {
c3kit.wire.mock.event.__GT_ErrorEvent = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"c3kit.wire.mock.event","->ErrorEvent"),(function (ws){
return cljs.core.type.call(null,ws);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
c3kit.wire.mock.event.with_message_props = (function c3kit$wire$mock$event$with_message_props(e,sock,data){
var G__11476 = e;
c3kit.apron.corec.oset.call(null,G__11476,"lastEventId","");

c3kit.apron.corec.oset.call(null,G__11476,"data",data);

c3kit.apron.corec.oset.call(null,G__11476,"ports",cljs.core.PersistentVector.EMPTY);

c3kit.apron.corec.oset.call(null,G__11476,"origin",cljs.core.re_find.call(null,/^wss?:\/\/[^\\/]*/,c3kit.apron.corec.oget.call(null,sock,"url")));

return G__11476;
});
c3kit.wire.mock.event.with_close_props = (function c3kit$wire$mock$event$with_close_props(e,code,reason,clean_QMARK_){
var G__11477 = e;
c3kit.apron.corec.oset.call(null,G__11477,"code",code);

c3kit.apron.corec.oset.call(null,G__11477,"reason",reason);

c3kit.apron.corec.oset.call(null,G__11477,"wasClean",clean_QMARK_);

return G__11477;
});
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_MessageEvent,c3kit.wire.mock.event.JsWebSocket,(function (ws,data){
return c3kit.wire.mock.event.with_message_props.call(null,(new Event("message")),ws,data);
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_OpenEvent,c3kit.wire.mock.event.JsWebSocket,(function (_ws){
return (new Event("open"));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_ErrorEvent,c3kit.wire.mock.event.JsWebSocket,(function (_ws){
return (new Event("error"));
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_CloseEvent,c3kit.wire.mock.event.JsWebSocket,(function (_ws,code,reason,clean_QMARK_){
return c3kit.wire.mock.event.with_close_props.call(null,(new Event("close")),code,reason,clean_QMARK_);
}));
c3kit.wire.mock.event.__GT_MemEvent = (function c3kit$wire$mock$event$__GT_MemEvent(element){
var obj11479 = ({"eventPhase":(0),"cancelable":false,"currentTarget":element,"composed":false,"cancelBubble":false,"isTrusted":true,"returnValue":true,"timeStamp":cljs.core.js_invoke.call(null,performance,"now"),"bubbles":false,"target":element,"srcElement":element,"defaultPrevented":false});
return obj11479;
});
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_OpenEvent,new cljs.core.Keyword(null,"default","default",-1987822328),(function (sock){
var G__11480 = c3kit.wire.mock.event.__GT_MemEvent.call(null,sock);
c3kit.apron.corec.oset.call(null,G__11480,"type","open");

return G__11480;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_CloseEvent,new cljs.core.Keyword(null,"default","default",-1987822328),(function (sock,code,reason,clean_QMARK_){
var G__11481 = c3kit.wire.mock.event.__GT_MemEvent.call(null,sock);
c3kit.apron.corec.oset.call(null,G__11481,"type","close");

c3kit.wire.mock.event.with_close_props.call(null,G__11481,code,reason,clean_QMARK_);

return G__11481;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_MessageEvent,new cljs.core.Keyword(null,"default","default",-1987822328),(function (sock,data){
var G__11482 = c3kit.wire.mock.event.__GT_MemEvent.call(null,sock);
c3kit.apron.corec.oset.call(null,G__11482,"type","message");

c3kit.wire.mock.event.with_message_props.call(null,G__11482,sock,data);

return G__11482;
}));
cljs.core._add_method.call(null,c3kit.wire.mock.event.__GT_ErrorEvent,new cljs.core.Keyword(null,"default","default",-1987822328),(function (sock){
var G__11483 = c3kit.wire.mock.event.__GT_MemEvent.call(null,sock);
c3kit.apron.corec.oset.call(null,G__11483,"type","error");

return G__11483;
}));

//# sourceMappingURL=event.js.map
