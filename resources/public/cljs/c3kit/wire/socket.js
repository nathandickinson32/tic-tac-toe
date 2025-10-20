// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.socket');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
c3kit.wire.socket.ready_state = (function c3kit$wire$socket$ready_state(ws){
return c3kit.apron.corec.oget.call(null,ws,"readyState");
});
c3kit.wire.socket.send_BANG_ = (function c3kit$wire$socket$send_BANG_(ws,data){
return cljs.core.js_invoke.call(null,ws,"send",data);
});
c3kit.wire.socket.close_BANG_ = (function c3kit$wire$socket$close_BANG_(var_args){
var G__11462 = arguments.length;
switch (G__11462) {
case 1:
return c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (ws){
return cljs.core.js_invoke.call(null,ws,"close");
}));

(c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ws,code){
return cljs.core.js_invoke.call(null,ws,"close",code);
}));

(c3kit.wire.socket.close_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ws,code,reason){
return cljs.core.js_invoke.call(null,ws,"close",code,reason);
}));

(c3kit.wire.socket.close_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.socket.connecting_QMARK_ = (function c3kit$wire$socket$connecting_QMARK_(ws){
return cljs.core._EQ_.call(null,(0),c3kit.wire.socket.ready_state.call(null,ws));
});
c3kit.wire.socket.open_QMARK_ = (function c3kit$wire$socket$open_QMARK_(ws){
return cljs.core._EQ_.call(null,(1),c3kit.wire.socket.ready_state.call(null,ws));
});
c3kit.wire.socket.closing_QMARK_ = (function c3kit$wire$socket$closing_QMARK_(ws){
return cljs.core._EQ_.call(null,(2),c3kit.wire.socket.ready_state.call(null,ws));
});
c3kit.wire.socket.closed_QMARK_ = (function c3kit$wire$socket$closed_QMARK_(ws){
return cljs.core._EQ_.call(null,(3),c3kit.wire.socket.ready_state.call(null,ws));
});

//# sourceMappingURL=socket.js.map
