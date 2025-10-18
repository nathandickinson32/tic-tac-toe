// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__11131 = arguments.length;
switch (G__11131) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11136 = (function (f,blockable,meta11137){
this.f = f;
this.blockable = blockable;
this.meta11137 = meta11137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11138,meta11137__$1){
var self__ = this;
var _11138__$1 = this;
return (new cljs.core.async.t_cljs$core$async11136(self__.f,self__.blockable,meta11137__$1));
}));

(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11138){
var self__ = this;
var _11138__$1 = this;
return self__.meta11137;
}));

(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async11136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async11136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta11137","meta11137",312089994,null)], null);
}));

(cljs.core.async.t_cljs$core$async11136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11136");

(cljs.core.async.t_cljs$core$async11136.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11136.
 */
cljs.core.async.__GT_t_cljs$core$async11136 = (function cljs$core$async$__GT_t_cljs$core$async11136(f__$1,blockable__$1,meta11137){
return (new cljs.core.async.t_cljs$core$async11136(f__$1,blockable__$1,meta11137));
});

}

return (new cljs.core.async.t_cljs$core$async11136(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__11142 = arguments.length;
switch (G__11142) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__11150 = arguments.length;
switch (G__11150) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__11156 = arguments.length;
switch (G__11156) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11191 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11191);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_11191);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__11161 = arguments.length;
switch (G__11161) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___11200 = n;
var x_11201 = (0);
while(true){
if((x_11201 < n__5616__auto___11200)){
(a[x_11201] = x_11201);

var G__11202 = (x_11201 + (1));
x_11201 = G__11202;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11164 = (function (flag,meta11165){
this.flag = flag;
this.meta11165 = meta11165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11166,meta11165__$1){
var self__ = this;
var _11166__$1 = this;
return (new cljs.core.async.t_cljs$core$async11164(self__.flag,meta11165__$1));
}));

(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11166){
var self__ = this;
var _11166__$1 = this;
return self__.meta11165;
}));

(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async11164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11165","meta11165",-1403417076,null)], null);
}));

(cljs.core.async.t_cljs$core$async11164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11164");

(cljs.core.async.t_cljs$core$async11164.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11164.
 */
cljs.core.async.__GT_t_cljs$core$async11164 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11164(flag__$1,meta11165){
return (new cljs.core.async.t_cljs$core$async11164(flag__$1,meta11165));
});

}

return (new cljs.core.async.t_cljs$core$async11164(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11168 = (function (flag,cb,meta11169){
this.flag = flag;
this.cb = cb;
this.meta11169 = meta11169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11170,meta11169__$1){
var self__ = this;
var _11170__$1 = this;
return (new cljs.core.async.t_cljs$core$async11168(self__.flag,self__.cb,meta11169__$1));
}));

(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11170){
var self__ = this;
var _11170__$1 = this;
return self__.meta11169;
}));

(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async11168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async11168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11169","meta11169",2023308434,null)], null);
}));

(cljs.core.async.t_cljs$core$async11168.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11168");

(cljs.core.async.t_cljs$core$async11168.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11168");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11168.
 */
cljs.core.async.__GT_t_cljs$core$async11168 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11168(flag__$1,cb__$1,meta11169){
return (new cljs.core.async.t_cljs$core$async11168(flag__$1,cb__$1,meta11169));
});

}

return (new cljs.core.async.t_cljs$core$async11168(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var ports__$1 = cljs.core.vec.call(null,ports);
var n = cljs.core.count.call(null,ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_11221 = cljs.core.nth.call(null,ports__$1,i);
if(cljs.core.vector_QMARK_.call(null,port_11221)){
if((!((port_11221.call(null,(1)) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__11222 = (i + (1));
i = G__11222;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__11197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11197_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__11198_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11198_SHARP_,port], null));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11231 = (i + (1));
i = G__11231;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___11248 = arguments.length;
var i__5750__auto___11250 = (0);
while(true){
if((i__5750__auto___11250 < len__5749__auto___11248)){
args__5755__auto__.push((arguments[i__5750__auto___11250]));

var G__11255 = (i__5750__auto___11250 + (1));
i__5750__auto___11250 = G__11255;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11218){
var map__11219 = p__11218;
var map__11219__$1 = cljs.core.__destructure_map.call(null,map__11219);
var opts = map__11219__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11204){
var G__11206 = cljs.core.first.call(null,seq11204);
var seq11204__$1 = cljs.core.next.call(null,seq11204);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11206,seq11204__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__11228 = arguments.length;
switch (G__11228) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__11038__auto___11335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11297){
var state_val_11298 = (state_11297[(1)]);
if((state_val_11298 === (7))){
var inst_11288 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
var statearr_11299_11336 = state_11297__$1;
(statearr_11299_11336[(2)] = inst_11288);

(statearr_11299_11336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (1))){
var state_11297__$1 = state_11297;
var statearr_11300_11337 = state_11297__$1;
(statearr_11300_11337[(2)] = null);

(statearr_11300_11337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (4))){
var inst_11269 = (state_11297[(7)]);
var inst_11269__$1 = (state_11297[(2)]);
var inst_11270 = (inst_11269__$1 == null);
var state_11297__$1 = (function (){var statearr_11305 = state_11297;
(statearr_11305[(7)] = inst_11269__$1);

return statearr_11305;
})();
if(cljs.core.truth_(inst_11270)){
var statearr_11309_11340 = state_11297__$1;
(statearr_11309_11340[(1)] = (5));

} else {
var statearr_11310_11343 = state_11297__$1;
(statearr_11310_11343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (13))){
var state_11297__$1 = state_11297;
var statearr_11312_11344 = state_11297__$1;
(statearr_11312_11344[(2)] = null);

(statearr_11312_11344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (6))){
var inst_11269 = (state_11297[(7)]);
var state_11297__$1 = state_11297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11297__$1,(11),to,inst_11269);
} else {
if((state_val_11298 === (3))){
var inst_11290 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11297__$1,inst_11290);
} else {
if((state_val_11298 === (12))){
var state_11297__$1 = state_11297;
var statearr_11317_11350 = state_11297__$1;
(statearr_11317_11350[(2)] = null);

(statearr_11317_11350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (2))){
var state_11297__$1 = state_11297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11297__$1,(4),from);
} else {
if((state_val_11298 === (11))){
var inst_11281 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
if(cljs.core.truth_(inst_11281)){
var statearr_11318_11355 = state_11297__$1;
(statearr_11318_11355[(1)] = (12));

} else {
var statearr_11319_11356 = state_11297__$1;
(statearr_11319_11356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (9))){
var state_11297__$1 = state_11297;
var statearr_11320_11357 = state_11297__$1;
(statearr_11320_11357[(2)] = null);

(statearr_11320_11357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (5))){
var state_11297__$1 = state_11297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11321_11358 = state_11297__$1;
(statearr_11321_11358[(1)] = (8));

} else {
var statearr_11322_11359 = state_11297__$1;
(statearr_11322_11359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (14))){
var inst_11286 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
var statearr_11323_11360 = state_11297__$1;
(statearr_11323_11360[(2)] = inst_11286);

(statearr_11323_11360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (10))){
var inst_11276 = (state_11297[(2)]);
var state_11297__$1 = state_11297;
var statearr_11324_11363 = state_11297__$1;
(statearr_11324_11363[(2)] = inst_11276);

(statearr_11324_11363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11298 === (8))){
var inst_11273 = cljs.core.async.close_BANG_.call(null,to);
var state_11297__$1 = state_11297;
var statearr_11325_11364 = state_11297__$1;
(statearr_11325_11364[(2)] = inst_11273);

(statearr_11325_11364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_11326 = [null,null,null,null,null,null,null,null];
(statearr_11326[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_11326[(1)] = (1));

return statearr_11326;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_11297){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11328){var ex__10859__auto__ = e11328;
var statearr_11330_11365 = state_11297;
(statearr_11330_11365[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11297[(4)]))){
var statearr_11332_11366 = state_11297;
(statearr_11332_11366[(1)] = cljs.core.first.call(null,(state_11297[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11367 = state_11297;
state_11297 = G__11367;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_11297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_11297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11333 = f__11039__auto__.call(null);
(statearr_11333[(6)] = c__11038__auto___11335);

return statearr_11333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__11338){
var vec__11339 = p__11338;
var v = cljs.core.nth.call(null,vec__11339,(0),null);
var p = cljs.core.nth.call(null,vec__11339,(1),null);
var job = vec__11339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__11038__auto___11581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11353){
var state_val_11354 = (state_11353[(1)]);
if((state_val_11354 === (1))){
var state_11353__$1 = state_11353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11353__$1,(2),res,v);
} else {
if((state_val_11354 === (2))){
var inst_11349 = (state_11353[(2)]);
var inst_11351 = cljs.core.async.close_BANG_.call(null,res);
var state_11353__$1 = (function (){var statearr_11368 = state_11353;
(statearr_11368[(7)] = inst_11349);

return statearr_11368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11353__$1,inst_11351);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_11369 = [null,null,null,null,null,null,null,null];
(statearr_11369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__);

(statearr_11369[(1)] = (1));

return statearr_11369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1 = (function (state_11353){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11370){var ex__10859__auto__ = e11370;
var statearr_11371_11582 = state_11353;
(statearr_11371_11582[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11353[(4)]))){
var statearr_11373_11583 = state_11353;
(statearr_11373_11583[(1)] = cljs.core.first.call(null,(state_11353[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11584 = state_11353;
state_11353 = G__11584;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = function(state_11353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1.call(this,state_11353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11377 = f__11039__auto__.call(null);
(statearr_11377[(6)] = c__11038__auto___11581);

return statearr_11377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__11381){
var vec__11382 = p__11381;
var v = cljs.core.nth.call(null,vec__11382,(0),null);
var p = cljs.core.nth.call(null,vec__11382,(1),null);
var job = vec__11382;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5616__auto___11587 = n;
var __11588 = (0);
while(true){
if((__11588 < n__5616__auto___11587)){
var G__11385_11589 = type;
var G__11385_11590__$1 = (((G__11385_11589 instanceof cljs.core.Keyword))?G__11385_11589.fqn:null);
switch (G__11385_11590__$1) {
case "compute":
var c__11038__auto___11592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11588,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = ((function (__11588,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function (state_11398){
var state_val_11399 = (state_11398[(1)]);
if((state_val_11399 === (1))){
var state_11398__$1 = state_11398;
var statearr_11402_11594 = state_11398__$1;
(statearr_11402_11594[(2)] = null);

(statearr_11402_11594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11399 === (2))){
var state_11398__$1 = state_11398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11398__$1,(4),jobs);
} else {
if((state_val_11399 === (3))){
var inst_11396 = (state_11398[(2)]);
var state_11398__$1 = state_11398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11398__$1,inst_11396);
} else {
if((state_val_11399 === (4))){
var inst_11388 = (state_11398[(2)]);
var inst_11389 = process__$1.call(null,inst_11388);
var state_11398__$1 = state_11398;
if(cljs.core.truth_(inst_11389)){
var statearr_11403_11597 = state_11398__$1;
(statearr_11403_11597[(1)] = (5));

} else {
var statearr_11407_11598 = state_11398__$1;
(statearr_11407_11598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11399 === (5))){
var state_11398__$1 = state_11398;
var statearr_11408_11599 = state_11398__$1;
(statearr_11408_11599[(2)] = null);

(statearr_11408_11599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11399 === (6))){
var state_11398__$1 = state_11398;
var statearr_11409_11600 = state_11398__$1;
(statearr_11409_11600[(2)] = null);

(statearr_11409_11600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11399 === (7))){
var inst_11394 = (state_11398[(2)]);
var state_11398__$1 = state_11398;
var statearr_11410_11601 = state_11398__$1;
(statearr_11410_11601[(2)] = inst_11394);

(statearr_11410_11601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11588,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
;
return ((function (__11588,switch__10855__auto__,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_11411 = [null,null,null,null,null,null,null];
(statearr_11411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__);

(statearr_11411[(1)] = (1));

return statearr_11411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1 = (function (state_11398){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11412){var ex__10859__auto__ = e11412;
var statearr_11413_11630 = state_11398;
(statearr_11413_11630[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11398[(4)]))){
var statearr_11414_11631 = state_11398;
(statearr_11414_11631[(1)] = cljs.core.first.call(null,(state_11398[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11632 = state_11398;
state_11398 = G__11632;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = function(state_11398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1.call(this,state_11398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__;
})()
;})(__11588,switch__10855__auto__,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
})();
var state__11040__auto__ = (function (){var statearr_11416 = f__11039__auto__.call(null);
(statearr_11416[(6)] = c__11038__auto___11592);

return statearr_11416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(__11588,c__11038__auto___11592,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
);


break;
case "async":
var c__11038__auto___11635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11588,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = ((function (__11588,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function (state_11432){
var state_val_11433 = (state_11432[(1)]);
if((state_val_11433 === (1))){
var state_11432__$1 = state_11432;
var statearr_11434_11638 = state_11432__$1;
(statearr_11434_11638[(2)] = null);

(statearr_11434_11638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11433 === (2))){
var state_11432__$1 = state_11432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11432__$1,(4),jobs);
} else {
if((state_val_11433 === (3))){
var inst_11430 = (state_11432[(2)]);
var state_11432__$1 = state_11432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11432__$1,inst_11430);
} else {
if((state_val_11433 === (4))){
var inst_11422 = (state_11432[(2)]);
var inst_11423 = async.call(null,inst_11422);
var state_11432__$1 = state_11432;
if(cljs.core.truth_(inst_11423)){
var statearr_11436_11640 = state_11432__$1;
(statearr_11436_11640[(1)] = (5));

} else {
var statearr_11438_11641 = state_11432__$1;
(statearr_11438_11641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11433 === (5))){
var state_11432__$1 = state_11432;
var statearr_11440_11642 = state_11432__$1;
(statearr_11440_11642[(2)] = null);

(statearr_11440_11642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11433 === (6))){
var state_11432__$1 = state_11432;
var statearr_11441_11645 = state_11432__$1;
(statearr_11441_11645[(2)] = null);

(statearr_11441_11645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11433 === (7))){
var inst_11428 = (state_11432[(2)]);
var state_11432__$1 = state_11432;
var statearr_11442_11647 = state_11432__$1;
(statearr_11442_11647[(2)] = inst_11428);

(statearr_11442_11647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11588,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
;
return ((function (__11588,switch__10855__auto__,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_11443 = [null,null,null,null,null,null,null];
(statearr_11443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__);

(statearr_11443[(1)] = (1));

return statearr_11443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1 = (function (state_11432){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11445){var ex__10859__auto__ = e11445;
var statearr_11446_11654 = state_11432;
(statearr_11446_11654[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11432[(4)]))){
var statearr_11447_11655 = state_11432;
(statearr_11447_11655[(1)] = cljs.core.first.call(null,(state_11432[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11657 = state_11432;
state_11432 = G__11657;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = function(state_11432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1.call(this,state_11432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__;
})()
;})(__11588,switch__10855__auto__,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
})();
var state__11040__auto__ = (function (){var statearr_11448 = f__11039__auto__.call(null);
(statearr_11448[(6)] = c__11038__auto___11635);

return statearr_11448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
});})(__11588,c__11038__auto___11635,G__11385_11589,G__11385_11590__$1,n__5616__auto___11587,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11385_11590__$1)].join('')));

}

var G__11666 = (__11588 + (1));
__11588 = G__11666;
continue;
} else {
}
break;
}

var c__11038__auto___11667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11472){
var state_val_11473 = (state_11472[(1)]);
if((state_val_11473 === (7))){
var inst_11468 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
var statearr_11476_11671 = state_11472__$1;
(statearr_11476_11671[(2)] = inst_11468);

(statearr_11476_11671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (1))){
var state_11472__$1 = state_11472;
var statearr_11477_11672 = state_11472__$1;
(statearr_11477_11672[(2)] = null);

(statearr_11477_11672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (4))){
var inst_11451 = (state_11472[(7)]);
var inst_11451__$1 = (state_11472[(2)]);
var inst_11452 = (inst_11451__$1 == null);
var state_11472__$1 = (function (){var statearr_11478 = state_11472;
(statearr_11478[(7)] = inst_11451__$1);

return statearr_11478;
})();
if(cljs.core.truth_(inst_11452)){
var statearr_11479_11674 = state_11472__$1;
(statearr_11479_11674[(1)] = (5));

} else {
var statearr_11480_11675 = state_11472__$1;
(statearr_11480_11675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (6))){
var inst_11451 = (state_11472[(7)]);
var inst_11456 = (state_11472[(8)]);
var inst_11456__$1 = cljs.core.async.chan.call(null,(1));
var inst_11458 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11459 = [inst_11451,inst_11456__$1];
var inst_11460 = (new cljs.core.PersistentVector(null,2,(5),inst_11458,inst_11459,null));
var state_11472__$1 = (function (){var statearr_11481 = state_11472;
(statearr_11481[(8)] = inst_11456__$1);

return statearr_11481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11472__$1,(8),jobs,inst_11460);
} else {
if((state_val_11473 === (3))){
var inst_11470 = (state_11472[(2)]);
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11472__$1,inst_11470);
} else {
if((state_val_11473 === (2))){
var state_11472__$1 = state_11472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11472__$1,(4),from);
} else {
if((state_val_11473 === (9))){
var inst_11465 = (state_11472[(2)]);
var state_11472__$1 = (function (){var statearr_11489 = state_11472;
(statearr_11489[(9)] = inst_11465);

return statearr_11489;
})();
var statearr_11490_11710 = state_11472__$1;
(statearr_11490_11710[(2)] = null);

(statearr_11490_11710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (5))){
var inst_11454 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11472__$1 = state_11472;
var statearr_11491_11711 = state_11472__$1;
(statearr_11491_11711[(2)] = inst_11454);

(statearr_11491_11711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11473 === (8))){
var inst_11456 = (state_11472[(8)]);
var inst_11462 = (state_11472[(2)]);
var state_11472__$1 = (function (){var statearr_11492 = state_11472;
(statearr_11492[(10)] = inst_11462);

return statearr_11492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11472__$1,(9),results,inst_11456);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_11493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__);

(statearr_11493[(1)] = (1));

return statearr_11493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1 = (function (state_11472){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11494){var ex__10859__auto__ = e11494;
var statearr_11495_11717 = state_11472;
(statearr_11495_11717[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11472[(4)]))){
var statearr_11496_11720 = state_11472;
(statearr_11496_11720[(1)] = cljs.core.first.call(null,(state_11472[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11724 = state_11472;
state_11472 = G__11724;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = function(state_11472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1.call(this,state_11472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11497 = f__11039__auto__.call(null);
(statearr_11497[(6)] = c__11038__auto___11667);

return statearr_11497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


var c__11038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11535){
var state_val_11536 = (state_11535[(1)]);
if((state_val_11536 === (7))){
var inst_11531 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11544_11727 = state_11535__$1;
(statearr_11544_11727[(2)] = inst_11531);

(statearr_11544_11727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (20))){
var state_11535__$1 = state_11535;
var statearr_11545_11728 = state_11535__$1;
(statearr_11545_11728[(2)] = null);

(statearr_11545_11728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (1))){
var state_11535__$1 = state_11535;
var statearr_11546_11731 = state_11535__$1;
(statearr_11546_11731[(2)] = null);

(statearr_11546_11731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (4))){
var inst_11500 = (state_11535[(7)]);
var inst_11500__$1 = (state_11535[(2)]);
var inst_11501 = (inst_11500__$1 == null);
var state_11535__$1 = (function (){var statearr_11547 = state_11535;
(statearr_11547[(7)] = inst_11500__$1);

return statearr_11547;
})();
if(cljs.core.truth_(inst_11501)){
var statearr_11548_11737 = state_11535__$1;
(statearr_11548_11737[(1)] = (5));

} else {
var statearr_11549_11738 = state_11535__$1;
(statearr_11549_11738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (15))){
var inst_11513 = (state_11535[(8)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11535__$1,(18),to,inst_11513);
} else {
if((state_val_11536 === (21))){
var inst_11526 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11550_11739 = state_11535__$1;
(statearr_11550_11739[(2)] = inst_11526);

(statearr_11550_11739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (13))){
var inst_11528 = (state_11535[(2)]);
var state_11535__$1 = (function (){var statearr_11551 = state_11535;
(statearr_11551[(9)] = inst_11528);

return statearr_11551;
})();
var statearr_11552_11743 = state_11535__$1;
(statearr_11552_11743[(2)] = null);

(statearr_11552_11743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (6))){
var inst_11500 = (state_11535[(7)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11535__$1,(11),inst_11500);
} else {
if((state_val_11536 === (17))){
var inst_11521 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
if(cljs.core.truth_(inst_11521)){
var statearr_11553_11747 = state_11535__$1;
(statearr_11553_11747[(1)] = (19));

} else {
var statearr_11554_11750 = state_11535__$1;
(statearr_11554_11750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (3))){
var inst_11533 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11535__$1,inst_11533);
} else {
if((state_val_11536 === (12))){
var inst_11510 = (state_11535[(10)]);
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11535__$1,(14),inst_11510);
} else {
if((state_val_11536 === (2))){
var state_11535__$1 = state_11535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11535__$1,(4),results);
} else {
if((state_val_11536 === (19))){
var state_11535__$1 = state_11535;
var statearr_11555_11752 = state_11535__$1;
(statearr_11555_11752[(2)] = null);

(statearr_11555_11752[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (11))){
var inst_11510 = (state_11535[(2)]);
var state_11535__$1 = (function (){var statearr_11556 = state_11535;
(statearr_11556[(10)] = inst_11510);

return statearr_11556;
})();
var statearr_11557_11753 = state_11535__$1;
(statearr_11557_11753[(2)] = null);

(statearr_11557_11753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (9))){
var state_11535__$1 = state_11535;
var statearr_11560_11755 = state_11535__$1;
(statearr_11560_11755[(2)] = null);

(statearr_11560_11755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (5))){
var state_11535__$1 = state_11535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11563_11757 = state_11535__$1;
(statearr_11563_11757[(1)] = (8));

} else {
var statearr_11564_11758 = state_11535__$1;
(statearr_11564_11758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (14))){
var inst_11513 = (state_11535[(8)]);
var inst_11515 = (state_11535[(11)]);
var inst_11513__$1 = (state_11535[(2)]);
var inst_11514 = (inst_11513__$1 == null);
var inst_11515__$1 = cljs.core.not.call(null,inst_11514);
var state_11535__$1 = (function (){var statearr_11565 = state_11535;
(statearr_11565[(8)] = inst_11513__$1);

(statearr_11565[(11)] = inst_11515__$1);

return statearr_11565;
})();
if(inst_11515__$1){
var statearr_11566_11759 = state_11535__$1;
(statearr_11566_11759[(1)] = (15));

} else {
var statearr_11567_11760 = state_11535__$1;
(statearr_11567_11760[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (16))){
var inst_11515 = (state_11535[(11)]);
var state_11535__$1 = state_11535;
var statearr_11568_11761 = state_11535__$1;
(statearr_11568_11761[(2)] = inst_11515);

(statearr_11568_11761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (10))){
var inst_11507 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11569_11762 = state_11535__$1;
(statearr_11569_11762[(2)] = inst_11507);

(statearr_11569_11762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (18))){
var inst_11518 = (state_11535[(2)]);
var state_11535__$1 = state_11535;
var statearr_11570_11764 = state_11535__$1;
(statearr_11570_11764[(2)] = inst_11518);

(statearr_11570_11764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11536 === (8))){
var inst_11504 = cljs.core.async.close_BANG_.call(null,to);
var state_11535__$1 = state_11535;
var statearr_11571_11767 = state_11535__$1;
(statearr_11571_11767[(2)] = inst_11504);

(statearr_11571_11767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_11572 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__);

(statearr_11572[(1)] = (1));

return statearr_11572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1 = (function (state_11535){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11573){var ex__10859__auto__ = e11573;
var statearr_11574_11768 = state_11535;
(statearr_11574_11768[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11535[(4)]))){
var statearr_11575_11769 = state_11535;
(statearr_11575_11769[(1)] = cljs.core.first.call(null,(state_11535[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11776 = state_11535;
state_11535 = G__11776;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__ = function(state_11535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1.call(this,state_11535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11576 = f__11039__auto__.call(null);
(statearr_11576[(6)] = c__11038__auto__);

return statearr_11576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

return c__11038__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__11580 = arguments.length;
switch (G__11580) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__11586 = arguments.length;
switch (G__11586) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__11596 = arguments.length;
switch (G__11596) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__11038__auto___11801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11628){
var state_val_11629 = (state_11628[(1)]);
if((state_val_11629 === (7))){
var inst_11624 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11633_11803 = state_11628__$1;
(statearr_11633_11803[(2)] = inst_11624);

(statearr_11633_11803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (1))){
var state_11628__$1 = state_11628;
var statearr_11636_11805 = state_11628__$1;
(statearr_11636_11805[(2)] = null);

(statearr_11636_11805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (4))){
var inst_11604 = (state_11628[(7)]);
var inst_11604__$1 = (state_11628[(2)]);
var inst_11605 = (inst_11604__$1 == null);
var state_11628__$1 = (function (){var statearr_11646 = state_11628;
(statearr_11646[(7)] = inst_11604__$1);

return statearr_11646;
})();
if(cljs.core.truth_(inst_11605)){
var statearr_11648_11807 = state_11628__$1;
(statearr_11648_11807[(1)] = (5));

} else {
var statearr_11650_11808 = state_11628__$1;
(statearr_11650_11808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (13))){
var state_11628__$1 = state_11628;
var statearr_11651_11809 = state_11628__$1;
(statearr_11651_11809[(2)] = null);

(statearr_11651_11809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (6))){
var inst_11604 = (state_11628[(7)]);
var inst_11610 = p.call(null,inst_11604);
var state_11628__$1 = state_11628;
if(cljs.core.truth_(inst_11610)){
var statearr_11652_11812 = state_11628__$1;
(statearr_11652_11812[(1)] = (9));

} else {
var statearr_11653_11813 = state_11628__$1;
(statearr_11653_11813[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (3))){
var inst_11626 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11628__$1,inst_11626);
} else {
if((state_val_11629 === (12))){
var state_11628__$1 = state_11628;
var statearr_11656_11816 = state_11628__$1;
(statearr_11656_11816[(2)] = null);

(statearr_11656_11816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (2))){
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11628__$1,(4),ch);
} else {
if((state_val_11629 === (11))){
var inst_11604 = (state_11628[(7)]);
var inst_11615 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11628__$1,(8),inst_11615,inst_11604);
} else {
if((state_val_11629 === (9))){
var state_11628__$1 = state_11628;
var statearr_11658_11819 = state_11628__$1;
(statearr_11658_11819[(2)] = tc);

(statearr_11658_11819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (5))){
var inst_11607 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11608 = cljs.core.async.close_BANG_.call(null,fc);
var state_11628__$1 = (function (){var statearr_11659 = state_11628;
(statearr_11659[(8)] = inst_11607);

return statearr_11659;
})();
var statearr_11660_11821 = state_11628__$1;
(statearr_11660_11821[(2)] = inst_11608);

(statearr_11660_11821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (14))){
var inst_11622 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
var statearr_11661_11824 = state_11628__$1;
(statearr_11661_11824[(2)] = inst_11622);

(statearr_11661_11824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (10))){
var state_11628__$1 = state_11628;
var statearr_11662_11825 = state_11628__$1;
(statearr_11662_11825[(2)] = fc);

(statearr_11662_11825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11629 === (8))){
var inst_11617 = (state_11628[(2)]);
var state_11628__$1 = state_11628;
if(cljs.core.truth_(inst_11617)){
var statearr_11663_11826 = state_11628__$1;
(statearr_11663_11826[(1)] = (12));

} else {
var statearr_11664_11827 = state_11628__$1;
(statearr_11664_11827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_11665 = [null,null,null,null,null,null,null,null,null];
(statearr_11665[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_11665[(1)] = (1));

return statearr_11665;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_11628){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11668){var ex__10859__auto__ = e11668;
var statearr_11669_11832 = state_11628;
(statearr_11669_11832[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11628[(4)]))){
var statearr_11670_11833 = state_11628;
(statearr_11670_11833[(1)] = cljs.core.first.call(null,(state_11628[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11834 = state_11628;
state_11628 = G__11834;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_11628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_11628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11673 = f__11039__auto__.call(null);
(statearr_11673[(6)] = c__11038__auto___11801);

return statearr_11673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11697){
var state_val_11698 = (state_11697[(1)]);
if((state_val_11698 === (7))){
var inst_11693 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11700_11838 = state_11697__$1;
(statearr_11700_11838[(2)] = inst_11693);

(statearr_11700_11838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (1))){
var inst_11676 = init;
var inst_11677 = inst_11676;
var state_11697__$1 = (function (){var statearr_11701 = state_11697;
(statearr_11701[(7)] = inst_11677);

return statearr_11701;
})();
var statearr_11702_11839 = state_11697__$1;
(statearr_11702_11839[(2)] = null);

(statearr_11702_11839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (4))){
var inst_11680 = (state_11697[(8)]);
var inst_11680__$1 = (state_11697[(2)]);
var inst_11681 = (inst_11680__$1 == null);
var state_11697__$1 = (function (){var statearr_11703 = state_11697;
(statearr_11703[(8)] = inst_11680__$1);

return statearr_11703;
})();
if(cljs.core.truth_(inst_11681)){
var statearr_11704_11842 = state_11697__$1;
(statearr_11704_11842[(1)] = (5));

} else {
var statearr_11705_11843 = state_11697__$1;
(statearr_11705_11843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (6))){
var inst_11677 = (state_11697[(7)]);
var inst_11680 = (state_11697[(8)]);
var inst_11684 = (state_11697[(9)]);
var inst_11684__$1 = f.call(null,inst_11677,inst_11680);
var inst_11685 = cljs.core.reduced_QMARK_.call(null,inst_11684__$1);
var state_11697__$1 = (function (){var statearr_11706 = state_11697;
(statearr_11706[(9)] = inst_11684__$1);

return statearr_11706;
})();
if(inst_11685){
var statearr_11707_11845 = state_11697__$1;
(statearr_11707_11845[(1)] = (8));

} else {
var statearr_11709_11847 = state_11697__$1;
(statearr_11709_11847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (3))){
var inst_11695 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else {
if((state_val_11698 === (2))){
var state_11697__$1 = state_11697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11697__$1,(4),ch);
} else {
if((state_val_11698 === (9))){
var inst_11684 = (state_11697[(9)]);
var inst_11677 = inst_11684;
var state_11697__$1 = (function (){var statearr_11712 = state_11697;
(statearr_11712[(7)] = inst_11677);

return statearr_11712;
})();
var statearr_11713_11848 = state_11697__$1;
(statearr_11713_11848[(2)] = null);

(statearr_11713_11848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (5))){
var inst_11677 = (state_11697[(7)]);
var state_11697__$1 = state_11697;
var statearr_11714_11849 = state_11697__$1;
(statearr_11714_11849[(2)] = inst_11677);

(statearr_11714_11849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (10))){
var inst_11691 = (state_11697[(2)]);
var state_11697__$1 = state_11697;
var statearr_11715_11850 = state_11697__$1;
(statearr_11715_11850[(2)] = inst_11691);

(statearr_11715_11850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11698 === (8))){
var inst_11684 = (state_11697[(9)]);
var inst_11687 = cljs.core.deref.call(null,inst_11684);
var state_11697__$1 = state_11697;
var statearr_11716_11852 = state_11697__$1;
(statearr_11716_11852[(2)] = inst_11687);

(statearr_11716_11852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__10856__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10856__auto____0 = (function (){
var statearr_11718 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11718[(0)] = cljs$core$async$reduce_$_state_machine__10856__auto__);

(statearr_11718[(1)] = (1));

return statearr_11718;
});
var cljs$core$async$reduce_$_state_machine__10856__auto____1 = (function (state_11697){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11721){var ex__10859__auto__ = e11721;
var statearr_11722_11853 = state_11697;
(statearr_11722_11853[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11697[(4)]))){
var statearr_11723_11854 = state_11697;
(statearr_11723_11854[(1)] = cljs.core.first.call(null,(state_11697[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11855 = state_11697;
state_11697 = G__11855;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10856__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10856__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10856__auto____0;
cljs$core$async$reduce_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10856__auto____1;
return cljs$core$async$reduce_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11725 = f__11039__auto__.call(null);
(statearr_11725[(6)] = c__11038__auto__);

return statearr_11725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

return c__11038__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11735){
var state_val_11736 = (state_11735[(1)]);
if((state_val_11736 === (1))){
var inst_11729 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11735__$1,(2),inst_11729);
} else {
if((state_val_11736 === (2))){
var inst_11732 = (state_11735[(2)]);
var inst_11733 = f__$1.call(null,inst_11732);
var state_11735__$1 = state_11735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11735__$1,inst_11733);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__10856__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10856__auto____0 = (function (){
var statearr_11740 = [null,null,null,null,null,null,null];
(statearr_11740[(0)] = cljs$core$async$transduce_$_state_machine__10856__auto__);

(statearr_11740[(1)] = (1));

return statearr_11740;
});
var cljs$core$async$transduce_$_state_machine__10856__auto____1 = (function (state_11735){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11741){var ex__10859__auto__ = e11741;
var statearr_11742_11857 = state_11735;
(statearr_11742_11857[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11735[(4)]))){
var statearr_11744_11858 = state_11735;
(statearr_11744_11858[(1)] = cljs.core.first.call(null,(state_11735[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11859 = state_11735;
state_11735 = G__11859;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10856__auto__ = function(state_11735){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10856__auto____1.call(this,state_11735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10856__auto____0;
cljs$core$async$transduce_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10856__auto____1;
return cljs$core$async$transduce_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11751 = f__11039__auto__.call(null);
(statearr_11751[(6)] = c__11038__auto__);

return statearr_11751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

return c__11038__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__11756 = arguments.length;
switch (G__11756) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_11792){
var state_val_11793 = (state_11792[(1)]);
if((state_val_11793 === (7))){
var inst_11773 = (state_11792[(2)]);
var state_11792__$1 = state_11792;
var statearr_11795_11861 = state_11792__$1;
(statearr_11795_11861[(2)] = inst_11773);

(statearr_11795_11861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (1))){
var inst_11763 = cljs.core.seq.call(null,coll);
var inst_11765 = inst_11763;
var state_11792__$1 = (function (){var statearr_11796 = state_11792;
(statearr_11796[(7)] = inst_11765);

return statearr_11796;
})();
var statearr_11797_11864 = state_11792__$1;
(statearr_11797_11864[(2)] = null);

(statearr_11797_11864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (4))){
var inst_11765 = (state_11792[(7)]);
var inst_11771 = cljs.core.first.call(null,inst_11765);
var state_11792__$1 = state_11792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11792__$1,(7),ch,inst_11771);
} else {
if((state_val_11793 === (13))){
var inst_11786 = (state_11792[(2)]);
var state_11792__$1 = state_11792;
var statearr_11800_11865 = state_11792__$1;
(statearr_11800_11865[(2)] = inst_11786);

(statearr_11800_11865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (6))){
var inst_11777 = (state_11792[(2)]);
var state_11792__$1 = state_11792;
if(cljs.core.truth_(inst_11777)){
var statearr_11802_11866 = state_11792__$1;
(statearr_11802_11866[(1)] = (8));

} else {
var statearr_11804_11867 = state_11792__$1;
(statearr_11804_11867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (3))){
var inst_11790 = (state_11792[(2)]);
var state_11792__$1 = state_11792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11792__$1,inst_11790);
} else {
if((state_val_11793 === (12))){
var state_11792__$1 = state_11792;
var statearr_11806_11872 = state_11792__$1;
(statearr_11806_11872[(2)] = null);

(statearr_11806_11872[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (2))){
var inst_11765 = (state_11792[(7)]);
var state_11792__$1 = state_11792;
if(cljs.core.truth_(inst_11765)){
var statearr_11810_11873 = state_11792__$1;
(statearr_11810_11873[(1)] = (4));

} else {
var statearr_11811_11874 = state_11792__$1;
(statearr_11811_11874[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (11))){
var inst_11783 = cljs.core.async.close_BANG_.call(null,ch);
var state_11792__$1 = state_11792;
var statearr_11814_11876 = state_11792__$1;
(statearr_11814_11876[(2)] = inst_11783);

(statearr_11814_11876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (9))){
var state_11792__$1 = state_11792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11815_11878 = state_11792__$1;
(statearr_11815_11878[(1)] = (11));

} else {
var statearr_11817_11879 = state_11792__$1;
(statearr_11817_11879[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (5))){
var inst_11765 = (state_11792[(7)]);
var state_11792__$1 = state_11792;
var statearr_11818_11880 = state_11792__$1;
(statearr_11818_11880[(2)] = inst_11765);

(statearr_11818_11880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (10))){
var inst_11788 = (state_11792[(2)]);
var state_11792__$1 = state_11792;
var statearr_11820_11881 = state_11792__$1;
(statearr_11820_11881[(2)] = inst_11788);

(statearr_11820_11881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11793 === (8))){
var inst_11765 = (state_11792[(7)]);
var inst_11779 = cljs.core.next.call(null,inst_11765);
var inst_11765__$1 = inst_11779;
var state_11792__$1 = (function (){var statearr_11822 = state_11792;
(statearr_11822[(7)] = inst_11765__$1);

return statearr_11822;
})();
var statearr_11823_11884 = state_11792__$1;
(statearr_11823_11884[(2)] = null);

(statearr_11823_11884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_11828 = [null,null,null,null,null,null,null,null];
(statearr_11828[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_11828[(1)] = (1));

return statearr_11828;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_11792){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_11792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e11829){var ex__10859__auto__ = e11829;
var statearr_11830_11885 = state_11792;
(statearr_11830_11885[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_11792[(4)]))){
var statearr_11831_11886 = state_11792;
(statearr_11831_11886[(1)] = cljs.core.first.call(null,(state_11792[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11887 = state_11792;
state_11792 = G__11887;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_11792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_11792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_11835 = f__11039__auto__.call(null);
(statearr_11835[(6)] = c__11038__auto__);

return statearr_11835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

return c__11038__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__11841 = arguments.length;
switch (G__11841) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_11895 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,_);
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_11895.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_11898 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_11898.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_11904 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_11904.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_11905 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_11905.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async11899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11899 = (function (ch,cs,meta11900){
this.ch = ch;
this.cs = cs;
this.meta11900 = meta11900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11901,meta11900__$1){
var self__ = this;
var _11901__$1 = this;
return (new cljs.core.async.t_cljs$core$async11899(self__.ch,self__.cs,meta11900__$1));
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11901){
var self__ = this;
var _11901__$1 = this;
return self__.meta11900;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async11899.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async11899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11900","meta11900",916547616,null)], null);
}));

(cljs.core.async.t_cljs$core$async11899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async11899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11899");

(cljs.core.async.t_cljs$core$async11899.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async11899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async11899.
 */
cljs.core.async.__GT_t_cljs$core$async11899 = (function cljs$core$async$mult_$___GT_t_cljs$core$async11899(ch__$1,cs__$1,meta11900){
return (new cljs.core.async.t_cljs$core$async11899(ch__$1,cs__$1,meta11900));
});

}

return (new cljs.core.async.t_cljs$core$async11899(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__11038__auto___12202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12046){
var state_val_12049 = (state_12046[(1)]);
if((state_val_12049 === (7))){
var inst_12040 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12050_12203 = state_12046__$1;
(statearr_12050_12203[(2)] = inst_12040);

(statearr_12050_12203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (20))){
var inst_11941 = (state_12046[(7)]);
var inst_11955 = cljs.core.first.call(null,inst_11941);
var inst_11956 = cljs.core.nth.call(null,inst_11955,(0),null);
var inst_11957 = cljs.core.nth.call(null,inst_11955,(1),null);
var state_12046__$1 = (function (){var statearr_12051 = state_12046;
(statearr_12051[(8)] = inst_11956);

return statearr_12051;
})();
if(cljs.core.truth_(inst_11957)){
var statearr_12052_12206 = state_12046__$1;
(statearr_12052_12206[(1)] = (22));

} else {
var statearr_12053_12207 = state_12046__$1;
(statearr_12053_12207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (27))){
var inst_11985 = (state_12046[(9)]);
var inst_11987 = (state_12046[(10)]);
var inst_11992 = (state_12046[(11)]);
var inst_11910 = (state_12046[(12)]);
var inst_11992__$1 = cljs.core._nth.call(null,inst_11985,inst_11987);
var inst_11993 = cljs.core.async.put_BANG_.call(null,inst_11992__$1,inst_11910,done);
var state_12046__$1 = (function (){var statearr_12056 = state_12046;
(statearr_12056[(11)] = inst_11992__$1);

return statearr_12056;
})();
if(cljs.core.truth_(inst_11993)){
var statearr_12057_12208 = state_12046__$1;
(statearr_12057_12208[(1)] = (30));

} else {
var statearr_12058_12209 = state_12046__$1;
(statearr_12058_12209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (1))){
var state_12046__$1 = state_12046;
var statearr_12059_12210 = state_12046__$1;
(statearr_12059_12210[(2)] = null);

(statearr_12059_12210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (24))){
var inst_11941 = (state_12046[(7)]);
var inst_11962 = (state_12046[(2)]);
var inst_11963 = cljs.core.next.call(null,inst_11941);
var inst_11919 = inst_11963;
var inst_11920 = null;
var inst_11921 = (0);
var inst_11922 = (0);
var state_12046__$1 = (function (){var statearr_12060 = state_12046;
(statearr_12060[(13)] = inst_11962);

(statearr_12060[(14)] = inst_11919);

(statearr_12060[(15)] = inst_11920);

(statearr_12060[(16)] = inst_11921);

(statearr_12060[(17)] = inst_11922);

return statearr_12060;
})();
var statearr_12061_12211 = state_12046__$1;
(statearr_12061_12211[(2)] = null);

(statearr_12061_12211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (39))){
var state_12046__$1 = state_12046;
var statearr_12071_12212 = state_12046__$1;
(statearr_12071_12212[(2)] = null);

(statearr_12071_12212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (4))){
var inst_11910 = (state_12046[(12)]);
var inst_11910__$1 = (state_12046[(2)]);
var inst_11911 = (inst_11910__$1 == null);
var state_12046__$1 = (function (){var statearr_12076 = state_12046;
(statearr_12076[(12)] = inst_11910__$1);

return statearr_12076;
})();
if(cljs.core.truth_(inst_11911)){
var statearr_12077_12213 = state_12046__$1;
(statearr_12077_12213[(1)] = (5));

} else {
var statearr_12078_12214 = state_12046__$1;
(statearr_12078_12214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (15))){
var inst_11922 = (state_12046[(17)]);
var inst_11919 = (state_12046[(14)]);
var inst_11920 = (state_12046[(15)]);
var inst_11921 = (state_12046[(16)]);
var inst_11937 = (state_12046[(2)]);
var inst_11938 = (inst_11922 + (1));
var tmp12066 = inst_11919;
var tmp12067 = inst_11920;
var tmp12068 = inst_11921;
var inst_11919__$1 = tmp12066;
var inst_11920__$1 = tmp12067;
var inst_11921__$1 = tmp12068;
var inst_11922__$1 = inst_11938;
var state_12046__$1 = (function (){var statearr_12083 = state_12046;
(statearr_12083[(18)] = inst_11937);

(statearr_12083[(14)] = inst_11919__$1);

(statearr_12083[(15)] = inst_11920__$1);

(statearr_12083[(16)] = inst_11921__$1);

(statearr_12083[(17)] = inst_11922__$1);

return statearr_12083;
})();
var statearr_12090_12217 = state_12046__$1;
(statearr_12090_12217[(2)] = null);

(statearr_12090_12217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (21))){
var inst_11966 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12094_12218 = state_12046__$1;
(statearr_12094_12218[(2)] = inst_11966);

(statearr_12094_12218[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (31))){
var inst_11992 = (state_12046[(11)]);
var inst_11998 = cljs.core.async.untap_STAR_.call(null,m,inst_11992);
var state_12046__$1 = state_12046;
var statearr_12095_12219 = state_12046__$1;
(statearr_12095_12219[(2)] = inst_11998);

(statearr_12095_12219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (32))){
var inst_11987 = (state_12046[(10)]);
var inst_11984 = (state_12046[(19)]);
var inst_11985 = (state_12046[(9)]);
var inst_11986 = (state_12046[(20)]);
var inst_12000 = (state_12046[(2)]);
var inst_12001 = (inst_11987 + (1));
var tmp12091 = inst_11985;
var tmp12092 = inst_11986;
var tmp12093 = inst_11984;
var inst_11984__$1 = tmp12093;
var inst_11985__$1 = tmp12091;
var inst_11986__$1 = tmp12092;
var inst_11987__$1 = inst_12001;
var state_12046__$1 = (function (){var statearr_12098 = state_12046;
(statearr_12098[(21)] = inst_12000);

(statearr_12098[(19)] = inst_11984__$1);

(statearr_12098[(9)] = inst_11985__$1);

(statearr_12098[(20)] = inst_11986__$1);

(statearr_12098[(10)] = inst_11987__$1);

return statearr_12098;
})();
var statearr_12099_12220 = state_12046__$1;
(statearr_12099_12220[(2)] = null);

(statearr_12099_12220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (40))){
var inst_12013 = (state_12046[(22)]);
var inst_12017 = cljs.core.async.untap_STAR_.call(null,m,inst_12013);
var state_12046__$1 = state_12046;
var statearr_12104_12221 = state_12046__$1;
(statearr_12104_12221[(2)] = inst_12017);

(statearr_12104_12221[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (33))){
var inst_12004 = (state_12046[(23)]);
var inst_12006 = cljs.core.chunked_seq_QMARK_.call(null,inst_12004);
var state_12046__$1 = state_12046;
if(inst_12006){
var statearr_12105_12222 = state_12046__$1;
(statearr_12105_12222[(1)] = (36));

} else {
var statearr_12106_12223 = state_12046__$1;
(statearr_12106_12223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (13))){
var inst_11931 = (state_12046[(24)]);
var inst_11934 = cljs.core.async.close_BANG_.call(null,inst_11931);
var state_12046__$1 = state_12046;
var statearr_12107_12228 = state_12046__$1;
(statearr_12107_12228[(2)] = inst_11934);

(statearr_12107_12228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (22))){
var inst_11956 = (state_12046[(8)]);
var inst_11959 = cljs.core.async.close_BANG_.call(null,inst_11956);
var state_12046__$1 = state_12046;
var statearr_12108_12229 = state_12046__$1;
(statearr_12108_12229[(2)] = inst_11959);

(statearr_12108_12229[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (36))){
var inst_12004 = (state_12046[(23)]);
var inst_12008 = cljs.core.chunk_first.call(null,inst_12004);
var inst_12009 = cljs.core.chunk_rest.call(null,inst_12004);
var inst_12010 = cljs.core.count.call(null,inst_12008);
var inst_11984 = inst_12009;
var inst_11985 = inst_12008;
var inst_11986 = inst_12010;
var inst_11987 = (0);
var state_12046__$1 = (function (){var statearr_12109 = state_12046;
(statearr_12109[(19)] = inst_11984);

(statearr_12109[(9)] = inst_11985);

(statearr_12109[(20)] = inst_11986);

(statearr_12109[(10)] = inst_11987);

return statearr_12109;
})();
var statearr_12110_12230 = state_12046__$1;
(statearr_12110_12230[(2)] = null);

(statearr_12110_12230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (41))){
var inst_12004 = (state_12046[(23)]);
var inst_12019 = (state_12046[(2)]);
var inst_12020 = cljs.core.next.call(null,inst_12004);
var inst_11984 = inst_12020;
var inst_11985 = null;
var inst_11986 = (0);
var inst_11987 = (0);
var state_12046__$1 = (function (){var statearr_12111 = state_12046;
(statearr_12111[(25)] = inst_12019);

(statearr_12111[(19)] = inst_11984);

(statearr_12111[(9)] = inst_11985);

(statearr_12111[(20)] = inst_11986);

(statearr_12111[(10)] = inst_11987);

return statearr_12111;
})();
var statearr_12112_12234 = state_12046__$1;
(statearr_12112_12234[(2)] = null);

(statearr_12112_12234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (43))){
var state_12046__$1 = state_12046;
var statearr_12116_12236 = state_12046__$1;
(statearr_12116_12236[(2)] = null);

(statearr_12116_12236[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (29))){
var inst_12028 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12117_12238 = state_12046__$1;
(statearr_12117_12238[(2)] = inst_12028);

(statearr_12117_12238[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (44))){
var inst_12037 = (state_12046[(2)]);
var state_12046__$1 = (function (){var statearr_12118 = state_12046;
(statearr_12118[(26)] = inst_12037);

return statearr_12118;
})();
var statearr_12119_12239 = state_12046__$1;
(statearr_12119_12239[(2)] = null);

(statearr_12119_12239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (6))){
var inst_11976 = (state_12046[(27)]);
var inst_11975 = cljs.core.deref.call(null,cs);
var inst_11976__$1 = cljs.core.keys.call(null,inst_11975);
var inst_11977 = cljs.core.count.call(null,inst_11976__$1);
var inst_11978 = cljs.core.reset_BANG_.call(null,dctr,inst_11977);
var inst_11983 = cljs.core.seq.call(null,inst_11976__$1);
var inst_11984 = inst_11983;
var inst_11985 = null;
var inst_11986 = (0);
var inst_11987 = (0);
var state_12046__$1 = (function (){var statearr_12120 = state_12046;
(statearr_12120[(27)] = inst_11976__$1);

(statearr_12120[(28)] = inst_11978);

(statearr_12120[(19)] = inst_11984);

(statearr_12120[(9)] = inst_11985);

(statearr_12120[(20)] = inst_11986);

(statearr_12120[(10)] = inst_11987);

return statearr_12120;
})();
var statearr_12121_12240 = state_12046__$1;
(statearr_12121_12240[(2)] = null);

(statearr_12121_12240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (28))){
var inst_11984 = (state_12046[(19)]);
var inst_12004 = (state_12046[(23)]);
var inst_12004__$1 = cljs.core.seq.call(null,inst_11984);
var state_12046__$1 = (function (){var statearr_12122 = state_12046;
(statearr_12122[(23)] = inst_12004__$1);

return statearr_12122;
})();
if(inst_12004__$1){
var statearr_12123_12241 = state_12046__$1;
(statearr_12123_12241[(1)] = (33));

} else {
var statearr_12124_12242 = state_12046__$1;
(statearr_12124_12242[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (25))){
var inst_11987 = (state_12046[(10)]);
var inst_11986 = (state_12046[(20)]);
var inst_11989 = (inst_11987 < inst_11986);
var inst_11990 = inst_11989;
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11990)){
var statearr_12128_12247 = state_12046__$1;
(statearr_12128_12247[(1)] = (27));

} else {
var statearr_12129_12248 = state_12046__$1;
(statearr_12129_12248[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (34))){
var state_12046__$1 = state_12046;
var statearr_12130_12249 = state_12046__$1;
(statearr_12130_12249[(2)] = null);

(statearr_12130_12249[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (17))){
var state_12046__$1 = state_12046;
var statearr_12131_12250 = state_12046__$1;
(statearr_12131_12250[(2)] = null);

(statearr_12131_12250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (3))){
var inst_12042 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12046__$1,inst_12042);
} else {
if((state_val_12049 === (12))){
var inst_11971 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12134_12251 = state_12046__$1;
(statearr_12134_12251[(2)] = inst_11971);

(statearr_12134_12251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (2))){
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(4),ch);
} else {
if((state_val_12049 === (23))){
var state_12046__$1 = state_12046;
var statearr_12135_12253 = state_12046__$1;
(statearr_12135_12253[(2)] = null);

(statearr_12135_12253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (35))){
var inst_12026 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12136_12254 = state_12046__$1;
(statearr_12136_12254[(2)] = inst_12026);

(statearr_12136_12254[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (19))){
var inst_11941 = (state_12046[(7)]);
var inst_11947 = cljs.core.chunk_first.call(null,inst_11941);
var inst_11948 = cljs.core.chunk_rest.call(null,inst_11941);
var inst_11949 = cljs.core.count.call(null,inst_11947);
var inst_11919 = inst_11948;
var inst_11920 = inst_11947;
var inst_11921 = inst_11949;
var inst_11922 = (0);
var state_12046__$1 = (function (){var statearr_12137 = state_12046;
(statearr_12137[(14)] = inst_11919);

(statearr_12137[(15)] = inst_11920);

(statearr_12137[(16)] = inst_11921);

(statearr_12137[(17)] = inst_11922);

return statearr_12137;
})();
var statearr_12138_12255 = state_12046__$1;
(statearr_12138_12255[(2)] = null);

(statearr_12138_12255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (11))){
var inst_11919 = (state_12046[(14)]);
var inst_11941 = (state_12046[(7)]);
var inst_11941__$1 = cljs.core.seq.call(null,inst_11919);
var state_12046__$1 = (function (){var statearr_12142 = state_12046;
(statearr_12142[(7)] = inst_11941__$1);

return statearr_12142;
})();
if(inst_11941__$1){
var statearr_12143_12256 = state_12046__$1;
(statearr_12143_12256[(1)] = (16));

} else {
var statearr_12144_12257 = state_12046__$1;
(statearr_12144_12257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (9))){
var inst_11973 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12145_12258 = state_12046__$1;
(statearr_12145_12258[(2)] = inst_11973);

(statearr_12145_12258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (5))){
var inst_11917 = cljs.core.deref.call(null,cs);
var inst_11918 = cljs.core.seq.call(null,inst_11917);
var inst_11919 = inst_11918;
var inst_11920 = null;
var inst_11921 = (0);
var inst_11922 = (0);
var state_12046__$1 = (function (){var statearr_12153 = state_12046;
(statearr_12153[(14)] = inst_11919);

(statearr_12153[(15)] = inst_11920);

(statearr_12153[(16)] = inst_11921);

(statearr_12153[(17)] = inst_11922);

return statearr_12153;
})();
var statearr_12154_12260 = state_12046__$1;
(statearr_12154_12260[(2)] = null);

(statearr_12154_12260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (14))){
var state_12046__$1 = state_12046;
var statearr_12155_12261 = state_12046__$1;
(statearr_12155_12261[(2)] = null);

(statearr_12155_12261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (45))){
var inst_12034 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12159_12262 = state_12046__$1;
(statearr_12159_12262[(2)] = inst_12034);

(statearr_12159_12262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (26))){
var inst_11976 = (state_12046[(27)]);
var inst_12030 = (state_12046[(2)]);
var inst_12031 = cljs.core.seq.call(null,inst_11976);
var state_12046__$1 = (function (){var statearr_12160 = state_12046;
(statearr_12160[(29)] = inst_12030);

return statearr_12160;
})();
if(inst_12031){
var statearr_12161_12265 = state_12046__$1;
(statearr_12161_12265[(1)] = (42));

} else {
var statearr_12162_12266 = state_12046__$1;
(statearr_12162_12266[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (16))){
var inst_11941 = (state_12046[(7)]);
var inst_11945 = cljs.core.chunked_seq_QMARK_.call(null,inst_11941);
var state_12046__$1 = state_12046;
if(inst_11945){
var statearr_12163_12307 = state_12046__$1;
(statearr_12163_12307[(1)] = (19));

} else {
var statearr_12165_12325 = state_12046__$1;
(statearr_12165_12325[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (38))){
var inst_12023 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12172_12335 = state_12046__$1;
(statearr_12172_12335[(2)] = inst_12023);

(statearr_12172_12335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (30))){
var state_12046__$1 = state_12046;
var statearr_12173_12338 = state_12046__$1;
(statearr_12173_12338[(2)] = null);

(statearr_12173_12338[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (10))){
var inst_11920 = (state_12046[(15)]);
var inst_11922 = (state_12046[(17)]);
var inst_11930 = cljs.core._nth.call(null,inst_11920,inst_11922);
var inst_11931 = cljs.core.nth.call(null,inst_11930,(0),null);
var inst_11932 = cljs.core.nth.call(null,inst_11930,(1),null);
var state_12046__$1 = (function (){var statearr_12176 = state_12046;
(statearr_12176[(24)] = inst_11931);

return statearr_12176;
})();
if(cljs.core.truth_(inst_11932)){
var statearr_12177_12339 = state_12046__$1;
(statearr_12177_12339[(1)] = (13));

} else {
var statearr_12178_12340 = state_12046__$1;
(statearr_12178_12340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (18))){
var inst_11969 = (state_12046[(2)]);
var state_12046__$1 = state_12046;
var statearr_12179_12344 = state_12046__$1;
(statearr_12179_12344[(2)] = inst_11969);

(statearr_12179_12344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (42))){
var state_12046__$1 = state_12046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12046__$1,(45),dchan);
} else {
if((state_val_12049 === (37))){
var inst_12004 = (state_12046[(23)]);
var inst_12013 = (state_12046[(22)]);
var inst_11910 = (state_12046[(12)]);
var inst_12013__$1 = cljs.core.first.call(null,inst_12004);
var inst_12014 = cljs.core.async.put_BANG_.call(null,inst_12013__$1,inst_11910,done);
var state_12046__$1 = (function (){var statearr_12180 = state_12046;
(statearr_12180[(22)] = inst_12013__$1);

return statearr_12180;
})();
if(cljs.core.truth_(inst_12014)){
var statearr_12181_12347 = state_12046__$1;
(statearr_12181_12347[(1)] = (39));

} else {
var statearr_12185_12348 = state_12046__$1;
(statearr_12185_12348[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12049 === (8))){
var inst_11922 = (state_12046[(17)]);
var inst_11921 = (state_12046[(16)]);
var inst_11924 = (inst_11922 < inst_11921);
var inst_11925 = inst_11924;
var state_12046__$1 = state_12046;
if(cljs.core.truth_(inst_11925)){
var statearr_12186_12350 = state_12046__$1;
(statearr_12186_12350[(1)] = (10));

} else {
var statearr_12187_12351 = state_12046__$1;
(statearr_12187_12351[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__10856__auto__ = null;
var cljs$core$async$mult_$_state_machine__10856__auto____0 = (function (){
var statearr_12188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12188[(0)] = cljs$core$async$mult_$_state_machine__10856__auto__);

(statearr_12188[(1)] = (1));

return statearr_12188;
});
var cljs$core$async$mult_$_state_machine__10856__auto____1 = (function (state_12046){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12189){var ex__10859__auto__ = e12189;
var statearr_12190_12358 = state_12046;
(statearr_12190_12358[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12046[(4)]))){
var statearr_12191_12360 = state_12046;
(statearr_12191_12360[(1)] = cljs.core.first.call(null,(state_12046[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12361 = state_12046;
state_12046 = G__12361;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10856__auto__ = function(state_12046){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10856__auto____1.call(this,state_12046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10856__auto____0;
cljs$core$async$mult_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10856__auto____1;
return cljs$core$async$mult_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12192 = f__11039__auto__.call(null);
(statearr_12192[(6)] = c__11038__auto___12202);

return statearr_12192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12196 = arguments.length;
switch (G__12196) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_12373 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_12373.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_12377 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_12377.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_12383 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m);
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_12383.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_12389 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,state_map);
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_12389.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_12395 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,m,mode);
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_12395.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12412 = arguments.length;
var i__5750__auto___12413 = (0);
while(true){
if((i__5750__auto___12413 < len__5749__auto___12412)){
args__5755__auto__.push((arguments[i__5750__auto___12413]));

var G__12415 = (i__5750__auto___12413 + (1));
i__5750__auto___12413 = G__12415;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12231){
var map__12232 = p__12231;
var map__12232__$1 = cljs.core.__destructure_map.call(null,map__12232);
var opts = map__12232__$1;
var statearr_12233_12423 = state;
(statearr_12233_12423[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_12235_12425 = state;
(statearr_12235_12425[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_12237_12426 = state;
(statearr_12237_12426[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12224){
var G__12225 = cljs.core.first.call(null,seq12224);
var seq12224__$1 = cljs.core.next.call(null,seq12224);
var G__12226 = cljs.core.first.call(null,seq12224__$1);
var seq12224__$2 = cljs.core.next.call(null,seq12224__$1);
var G__12227 = cljs.core.first.call(null,seq12224__$2);
var seq12224__$3 = cljs.core.next.call(null,seq12224__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12225,G__12226,G__12227,seq12224__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12244 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12245){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12245 = meta12245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12246,meta12245__$1){
var self__ = this;
var _12246__$1 = this;
return (new cljs.core.async.t_cljs$core$async12244(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12245__$1));
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12246){
var self__ = this;
var _12246__$1 = this;
return self__.meta12245;
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12244.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async12244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12245","meta12245",-801567801,null)], null);
}));

(cljs.core.async.t_cljs$core$async12244.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12244");

(cljs.core.async.t_cljs$core$async12244.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12244");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12244.
 */
cljs.core.async.__GT_t_cljs$core$async12244 = (function cljs$core$async$mix_$___GT_t_cljs$core$async12244(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12245){
return (new cljs.core.async.t_cljs$core$async12244(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12245));
});

}

return (new cljs.core.async.t_cljs$core$async12244(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11038__auto___12447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12336){
var state_val_12337 = (state_12336[(1)]);
if((state_val_12337 === (7))){
var inst_12292 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
if(cljs.core.truth_(inst_12292)){
var statearr_12345_12450 = state_12336__$1;
(statearr_12345_12450[(1)] = (8));

} else {
var statearr_12346_12451 = state_12336__$1;
(statearr_12346_12451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (20))){
var inst_12285 = (state_12336[(7)]);
var state_12336__$1 = state_12336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12336__$1,(23),out,inst_12285);
} else {
if((state_val_12337 === (1))){
var inst_12268 = calc_state.call(null);
var inst_12269 = cljs.core.__destructure_map.call(null,inst_12268);
var inst_12270 = cljs.core.get.call(null,inst_12269,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12271 = cljs.core.get.call(null,inst_12269,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12272 = cljs.core.get.call(null,inst_12269,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12273 = inst_12268;
var state_12336__$1 = (function (){var statearr_12352 = state_12336;
(statearr_12352[(8)] = inst_12270);

(statearr_12352[(9)] = inst_12271);

(statearr_12352[(10)] = inst_12272);

(statearr_12352[(11)] = inst_12273);

return statearr_12352;
})();
var statearr_12355_12452 = state_12336__$1;
(statearr_12355_12452[(2)] = null);

(statearr_12355_12452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (24))){
var inst_12276 = (state_12336[(12)]);
var inst_12273 = inst_12276;
var state_12336__$1 = (function (){var statearr_12357 = state_12336;
(statearr_12357[(11)] = inst_12273);

return statearr_12357;
})();
var statearr_12359_12453 = state_12336__$1;
(statearr_12359_12453[(2)] = null);

(statearr_12359_12453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (4))){
var inst_12285 = (state_12336[(7)]);
var inst_12287 = (state_12336[(13)]);
var inst_12284 = (state_12336[(2)]);
var inst_12285__$1 = cljs.core.nth.call(null,inst_12284,(0),null);
var inst_12286 = cljs.core.nth.call(null,inst_12284,(1),null);
var inst_12287__$1 = (inst_12285__$1 == null);
var state_12336__$1 = (function (){var statearr_12362 = state_12336;
(statearr_12362[(7)] = inst_12285__$1);

(statearr_12362[(14)] = inst_12286);

(statearr_12362[(13)] = inst_12287__$1);

return statearr_12362;
})();
if(cljs.core.truth_(inst_12287__$1)){
var statearr_12363_12457 = state_12336__$1;
(statearr_12363_12457[(1)] = (5));

} else {
var statearr_12365_12458 = state_12336__$1;
(statearr_12365_12458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (15))){
var inst_12277 = (state_12336[(15)]);
var inst_12306 = (state_12336[(16)]);
var inst_12306__$1 = cljs.core.empty_QMARK_.call(null,inst_12277);
var state_12336__$1 = (function (){var statearr_12369 = state_12336;
(statearr_12369[(16)] = inst_12306__$1);

return statearr_12369;
})();
if(inst_12306__$1){
var statearr_12370_12459 = state_12336__$1;
(statearr_12370_12459[(1)] = (17));

} else {
var statearr_12371_12461 = state_12336__$1;
(statearr_12371_12461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (21))){
var inst_12276 = (state_12336[(12)]);
var inst_12273 = inst_12276;
var state_12336__$1 = (function (){var statearr_12372 = state_12336;
(statearr_12372[(11)] = inst_12273);

return statearr_12372;
})();
var statearr_12374_12465 = state_12336__$1;
(statearr_12374_12465[(2)] = null);

(statearr_12374_12465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (13))){
var inst_12299 = (state_12336[(2)]);
var inst_12300 = calc_state.call(null);
var inst_12273 = inst_12300;
var state_12336__$1 = (function (){var statearr_12375 = state_12336;
(statearr_12375[(17)] = inst_12299);

(statearr_12375[(11)] = inst_12273);

return statearr_12375;
})();
var statearr_12376_12466 = state_12336__$1;
(statearr_12376_12466[(2)] = null);

(statearr_12376_12466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (22))){
var inst_12329 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
var statearr_12380_12469 = state_12336__$1;
(statearr_12380_12469[(2)] = inst_12329);

(statearr_12380_12469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (6))){
var inst_12286 = (state_12336[(14)]);
var inst_12290 = cljs.core._EQ_.call(null,inst_12286,change);
var state_12336__$1 = state_12336;
var statearr_12382_12473 = state_12336__$1;
(statearr_12382_12473[(2)] = inst_12290);

(statearr_12382_12473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (25))){
var state_12336__$1 = state_12336;
var statearr_12384_12474 = state_12336__$1;
(statearr_12384_12474[(2)] = null);

(statearr_12384_12474[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (17))){
var inst_12278 = (state_12336[(18)]);
var inst_12286 = (state_12336[(14)]);
var inst_12310 = inst_12278.call(null,inst_12286);
var inst_12311 = cljs.core.not.call(null,inst_12310);
var state_12336__$1 = state_12336;
var statearr_12388_12478 = state_12336__$1;
(statearr_12388_12478[(2)] = inst_12311);

(statearr_12388_12478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (3))){
var inst_12333 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12336__$1,inst_12333);
} else {
if((state_val_12337 === (12))){
var state_12336__$1 = state_12336;
var statearr_12390_12482 = state_12336__$1;
(statearr_12390_12482[(2)] = null);

(statearr_12390_12482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (2))){
var inst_12273 = (state_12336[(11)]);
var inst_12276 = (state_12336[(12)]);
var inst_12276__$1 = cljs.core.__destructure_map.call(null,inst_12273);
var inst_12277 = cljs.core.get.call(null,inst_12276__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12278 = cljs.core.get.call(null,inst_12276__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12279 = cljs.core.get.call(null,inst_12276__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12336__$1 = (function (){var statearr_12394 = state_12336;
(statearr_12394[(12)] = inst_12276__$1);

(statearr_12394[(15)] = inst_12277);

(statearr_12394[(18)] = inst_12278);

return statearr_12394;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12336__$1,(4),inst_12279);
} else {
if((state_val_12337 === (23))){
var inst_12319 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
if(cljs.core.truth_(inst_12319)){
var statearr_12396_12483 = state_12336__$1;
(statearr_12396_12483[(1)] = (24));

} else {
var statearr_12397_12484 = state_12336__$1;
(statearr_12397_12484[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (19))){
var inst_12314 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
var statearr_12398_12485 = state_12336__$1;
(statearr_12398_12485[(2)] = inst_12314);

(statearr_12398_12485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (11))){
var inst_12286 = (state_12336[(14)]);
var inst_12296 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12286);
var state_12336__$1 = state_12336;
var statearr_12401_12486 = state_12336__$1;
(statearr_12401_12486[(2)] = inst_12296);

(statearr_12401_12486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (9))){
var inst_12277 = (state_12336[(15)]);
var inst_12286 = (state_12336[(14)]);
var inst_12303 = (state_12336[(19)]);
var inst_12303__$1 = inst_12277.call(null,inst_12286);
var state_12336__$1 = (function (){var statearr_12403 = state_12336;
(statearr_12403[(19)] = inst_12303__$1);

return statearr_12403;
})();
if(cljs.core.truth_(inst_12303__$1)){
var statearr_12404_12487 = state_12336__$1;
(statearr_12404_12487[(1)] = (14));

} else {
var statearr_12405_12488 = state_12336__$1;
(statearr_12405_12488[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (5))){
var inst_12287 = (state_12336[(13)]);
var state_12336__$1 = state_12336;
var statearr_12406_12492 = state_12336__$1;
(statearr_12406_12492[(2)] = inst_12287);

(statearr_12406_12492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (14))){
var inst_12303 = (state_12336[(19)]);
var state_12336__$1 = state_12336;
var statearr_12409_12493 = state_12336__$1;
(statearr_12409_12493[(2)] = inst_12303);

(statearr_12409_12493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (26))){
var inst_12324 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
var statearr_12411_12494 = state_12336__$1;
(statearr_12411_12494[(2)] = inst_12324);

(statearr_12411_12494[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (16))){
var inst_12316 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
if(cljs.core.truth_(inst_12316)){
var statearr_12414_12495 = state_12336__$1;
(statearr_12414_12495[(1)] = (20));

} else {
var statearr_12416_12496 = state_12336__$1;
(statearr_12416_12496[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (10))){
var inst_12331 = (state_12336[(2)]);
var state_12336__$1 = state_12336;
var statearr_12417_12497 = state_12336__$1;
(statearr_12417_12497[(2)] = inst_12331);

(statearr_12417_12497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (18))){
var inst_12306 = (state_12336[(16)]);
var state_12336__$1 = state_12336;
var statearr_12419_12498 = state_12336__$1;
(statearr_12419_12498[(2)] = inst_12306);

(statearr_12419_12498[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12337 === (8))){
var inst_12285 = (state_12336[(7)]);
var inst_12294 = (inst_12285 == null);
var state_12336__$1 = state_12336;
if(cljs.core.truth_(inst_12294)){
var statearr_12422_12509 = state_12336__$1;
(statearr_12422_12509[(1)] = (11));

} else {
var statearr_12424_12511 = state_12336__$1;
(statearr_12424_12511[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__10856__auto__ = null;
var cljs$core$async$mix_$_state_machine__10856__auto____0 = (function (){
var statearr_12427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12427[(0)] = cljs$core$async$mix_$_state_machine__10856__auto__);

(statearr_12427[(1)] = (1));

return statearr_12427;
});
var cljs$core$async$mix_$_state_machine__10856__auto____1 = (function (state_12336){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12430){var ex__10859__auto__ = e12430;
var statearr_12431_12531 = state_12336;
(statearr_12431_12531[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12336[(4)]))){
var statearr_12433_12536 = state_12336;
(statearr_12433_12536[(1)] = cljs.core.first.call(null,(state_12336[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12548 = state_12336;
state_12336 = G__12548;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10856__auto__ = function(state_12336){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10856__auto____1.call(this,state_12336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10856__auto____0;
cljs$core$async$mix_$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10856__auto____1;
return cljs$core$async$mix_$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12434 = f__11039__auto__.call(null);
(statearr_12434[(6)] = c__11038__auto___12447);

return statearr_12434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_12580 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_12580.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_12584 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v,ch);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_12584.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_12589 = (function() {
var G__12590 = null;
var G__12590__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__12590__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,p,v);
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__12590 = function(p,v){
switch(arguments.length){
case 1:
return G__12590__1.call(this,p);
case 2:
return G__12590__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12590.cljs$core$IFn$_invoke$arity$1 = G__12590__1;
G__12590.cljs$core$IFn$_invoke$arity$2 = G__12590__2;
return G__12590;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__12445 = arguments.length;
switch (G__12445) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12589.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_12589.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__12468 = arguments.length;
switch (G__12468) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__12460_SHARP_){
if(cljs.core.truth_(p1__12460_SHARP_.call(null,topic))){
return p1__12460_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12460_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12475 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12476){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12476 = meta12476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12477,meta12476__$1){
var self__ = this;
var _12477__$1 = this;
return (new cljs.core.async.t_cljs$core$async12475(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12476__$1));
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12477){
var self__ = this;
var _12477__$1 = this;
return self__.meta12476;
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async12475.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async12475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12476","meta12476",1202178637,null)], null);
}));

(cljs.core.async.t_cljs$core$async12475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12475");

(cljs.core.async.t_cljs$core$async12475.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12475.
 */
cljs.core.async.__GT_t_cljs$core$async12475 = (function cljs$core$async$__GT_t_cljs$core$async12475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12476){
return (new cljs.core.async.t_cljs$core$async12475(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12476));
});

}

return (new cljs.core.async.t_cljs$core$async12475(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__11038__auto___12647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12578){
var state_val_12579 = (state_12578[(1)]);
if((state_val_12579 === (7))){
var inst_12574 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12583_12648 = state_12578__$1;
(statearr_12583_12648[(2)] = inst_12574);

(statearr_12583_12648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (20))){
var state_12578__$1 = state_12578;
var statearr_12585_12649 = state_12578__$1;
(statearr_12585_12649[(2)] = null);

(statearr_12585_12649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (1))){
var state_12578__$1 = state_12578;
var statearr_12586_12657 = state_12578__$1;
(statearr_12586_12657[(2)] = null);

(statearr_12586_12657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (24))){
var inst_12557 = (state_12578[(7)]);
var inst_12566 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12557);
var state_12578__$1 = state_12578;
var statearr_12588_12673 = state_12578__$1;
(statearr_12588_12673[(2)] = inst_12566);

(statearr_12588_12673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (4))){
var inst_12501 = (state_12578[(8)]);
var inst_12501__$1 = (state_12578[(2)]);
var inst_12502 = (inst_12501__$1 == null);
var state_12578__$1 = (function (){var statearr_12591 = state_12578;
(statearr_12591[(8)] = inst_12501__$1);

return statearr_12591;
})();
if(cljs.core.truth_(inst_12502)){
var statearr_12592_12688 = state_12578__$1;
(statearr_12592_12688[(1)] = (5));

} else {
var statearr_12593_12690 = state_12578__$1;
(statearr_12593_12690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (15))){
var inst_12551 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12594_12691 = state_12578__$1;
(statearr_12594_12691[(2)] = inst_12551);

(statearr_12594_12691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (21))){
var inst_12571 = (state_12578[(2)]);
var state_12578__$1 = (function (){var statearr_12595 = state_12578;
(statearr_12595[(9)] = inst_12571);

return statearr_12595;
})();
var statearr_12596_12692 = state_12578__$1;
(statearr_12596_12692[(2)] = null);

(statearr_12596_12692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (13))){
var inst_12530 = (state_12578[(10)]);
var inst_12533 = cljs.core.chunked_seq_QMARK_.call(null,inst_12530);
var state_12578__$1 = state_12578;
if(inst_12533){
var statearr_12599_12694 = state_12578__$1;
(statearr_12599_12694[(1)] = (16));

} else {
var statearr_12600_12695 = state_12578__$1;
(statearr_12600_12695[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (22))){
var inst_12563 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
if(cljs.core.truth_(inst_12563)){
var statearr_12601_12696 = state_12578__$1;
(statearr_12601_12696[(1)] = (23));

} else {
var statearr_12602_12697 = state_12578__$1;
(statearr_12602_12697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (6))){
var inst_12501 = (state_12578[(8)]);
var inst_12557 = (state_12578[(7)]);
var inst_12559 = (state_12578[(11)]);
var inst_12557__$1 = topic_fn.call(null,inst_12501);
var inst_12558 = cljs.core.deref.call(null,mults);
var inst_12559__$1 = cljs.core.get.call(null,inst_12558,inst_12557__$1);
var state_12578__$1 = (function (){var statearr_12603 = state_12578;
(statearr_12603[(7)] = inst_12557__$1);

(statearr_12603[(11)] = inst_12559__$1);

return statearr_12603;
})();
if(cljs.core.truth_(inst_12559__$1)){
var statearr_12604_12700 = state_12578__$1;
(statearr_12604_12700[(1)] = (19));

} else {
var statearr_12605_12702 = state_12578__$1;
(statearr_12605_12702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (25))){
var inst_12568 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12606_12703 = state_12578__$1;
(statearr_12606_12703[(2)] = inst_12568);

(statearr_12606_12703[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (17))){
var inst_12530 = (state_12578[(10)]);
var inst_12541 = cljs.core.first.call(null,inst_12530);
var inst_12542 = cljs.core.async.muxch_STAR_.call(null,inst_12541);
var inst_12543 = cljs.core.async.close_BANG_.call(null,inst_12542);
var inst_12544 = cljs.core.next.call(null,inst_12530);
var inst_12515 = inst_12544;
var inst_12516 = null;
var inst_12517 = (0);
var inst_12518 = (0);
var state_12578__$1 = (function (){var statearr_12607 = state_12578;
(statearr_12607[(12)] = inst_12543);

(statearr_12607[(13)] = inst_12515);

(statearr_12607[(14)] = inst_12516);

(statearr_12607[(15)] = inst_12517);

(statearr_12607[(16)] = inst_12518);

return statearr_12607;
})();
var statearr_12608_12707 = state_12578__$1;
(statearr_12608_12707[(2)] = null);

(statearr_12608_12707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (3))){
var inst_12576 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12578__$1,inst_12576);
} else {
if((state_val_12579 === (12))){
var inst_12553 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12609_12709 = state_12578__$1;
(statearr_12609_12709[(2)] = inst_12553);

(statearr_12609_12709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (2))){
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12578__$1,(4),ch);
} else {
if((state_val_12579 === (23))){
var state_12578__$1 = state_12578;
var statearr_12610_12710 = state_12578__$1;
(statearr_12610_12710[(2)] = null);

(statearr_12610_12710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (19))){
var inst_12559 = (state_12578[(11)]);
var inst_12501 = (state_12578[(8)]);
var inst_12561 = cljs.core.async.muxch_STAR_.call(null,inst_12559);
var state_12578__$1 = state_12578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12578__$1,(22),inst_12561,inst_12501);
} else {
if((state_val_12579 === (11))){
var inst_12515 = (state_12578[(13)]);
var inst_12530 = (state_12578[(10)]);
var inst_12530__$1 = cljs.core.seq.call(null,inst_12515);
var state_12578__$1 = (function (){var statearr_12611 = state_12578;
(statearr_12611[(10)] = inst_12530__$1);

return statearr_12611;
})();
if(inst_12530__$1){
var statearr_12612_12711 = state_12578__$1;
(statearr_12612_12711[(1)] = (13));

} else {
var statearr_12613_12712 = state_12578__$1;
(statearr_12613_12712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (9))){
var inst_12555 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12614_12714 = state_12578__$1;
(statearr_12614_12714[(2)] = inst_12555);

(statearr_12614_12714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (5))){
var inst_12512 = cljs.core.deref.call(null,mults);
var inst_12513 = cljs.core.vals.call(null,inst_12512);
var inst_12514 = cljs.core.seq.call(null,inst_12513);
var inst_12515 = inst_12514;
var inst_12516 = null;
var inst_12517 = (0);
var inst_12518 = (0);
var state_12578__$1 = (function (){var statearr_12615 = state_12578;
(statearr_12615[(13)] = inst_12515);

(statearr_12615[(14)] = inst_12516);

(statearr_12615[(15)] = inst_12517);

(statearr_12615[(16)] = inst_12518);

return statearr_12615;
})();
var statearr_12616_12719 = state_12578__$1;
(statearr_12616_12719[(2)] = null);

(statearr_12616_12719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (14))){
var state_12578__$1 = state_12578;
var statearr_12620_12721 = state_12578__$1;
(statearr_12620_12721[(2)] = null);

(statearr_12620_12721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (16))){
var inst_12530 = (state_12578[(10)]);
var inst_12535 = cljs.core.chunk_first.call(null,inst_12530);
var inst_12537 = cljs.core.chunk_rest.call(null,inst_12530);
var inst_12538 = cljs.core.count.call(null,inst_12535);
var inst_12515 = inst_12537;
var inst_12516 = inst_12535;
var inst_12517 = inst_12538;
var inst_12518 = (0);
var state_12578__$1 = (function (){var statearr_12621 = state_12578;
(statearr_12621[(13)] = inst_12515);

(statearr_12621[(14)] = inst_12516);

(statearr_12621[(15)] = inst_12517);

(statearr_12621[(16)] = inst_12518);

return statearr_12621;
})();
var statearr_12622_12722 = state_12578__$1;
(statearr_12622_12722[(2)] = null);

(statearr_12622_12722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (10))){
var inst_12516 = (state_12578[(14)]);
var inst_12518 = (state_12578[(16)]);
var inst_12515 = (state_12578[(13)]);
var inst_12517 = (state_12578[(15)]);
var inst_12524 = cljs.core._nth.call(null,inst_12516,inst_12518);
var inst_12525 = cljs.core.async.muxch_STAR_.call(null,inst_12524);
var inst_12526 = cljs.core.async.close_BANG_.call(null,inst_12525);
var inst_12527 = (inst_12518 + (1));
var tmp12617 = inst_12516;
var tmp12618 = inst_12515;
var tmp12619 = inst_12517;
var inst_12515__$1 = tmp12618;
var inst_12516__$1 = tmp12617;
var inst_12517__$1 = tmp12619;
var inst_12518__$1 = inst_12527;
var state_12578__$1 = (function (){var statearr_12623 = state_12578;
(statearr_12623[(17)] = inst_12526);

(statearr_12623[(13)] = inst_12515__$1);

(statearr_12623[(14)] = inst_12516__$1);

(statearr_12623[(15)] = inst_12517__$1);

(statearr_12623[(16)] = inst_12518__$1);

return statearr_12623;
})();
var statearr_12624_12727 = state_12578__$1;
(statearr_12624_12727[(2)] = null);

(statearr_12624_12727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (18))){
var inst_12547 = (state_12578[(2)]);
var state_12578__$1 = state_12578;
var statearr_12625_12729 = state_12578__$1;
(statearr_12625_12729[(2)] = inst_12547);

(statearr_12625_12729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12579 === (8))){
var inst_12518 = (state_12578[(16)]);
var inst_12517 = (state_12578[(15)]);
var inst_12521 = (inst_12518 < inst_12517);
var inst_12522 = inst_12521;
var state_12578__$1 = state_12578;
if(cljs.core.truth_(inst_12522)){
var statearr_12626_12731 = state_12578__$1;
(statearr_12626_12731[(1)] = (10));

} else {
var statearr_12627_12732 = state_12578__$1;
(statearr_12627_12732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_12628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12628[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_12628[(1)] = (1));

return statearr_12628;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_12578){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12629){var ex__10859__auto__ = e12629;
var statearr_12630_12735 = state_12578;
(statearr_12630_12735[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12578[(4)]))){
var statearr_12631_12736 = state_12578;
(statearr_12631_12736[(1)] = cljs.core.first.call(null,(state_12578[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12738 = state_12578;
state_12578 = G__12738;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_12578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_12578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12632 = f__11039__auto__.call(null);
(statearr_12632[(6)] = c__11038__auto___12647);

return statearr_12632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__12634 = arguments.length;
switch (G__12634) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__12637 = arguments.length;
switch (G__12637) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__12639 = arguments.length;
switch (G__12639) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_.call(null,out);
} else {
var c__11038__auto___12757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12687){
var state_val_12689 = (state_12687[(1)]);
if((state_val_12689 === (7))){
var state_12687__$1 = state_12687;
var statearr_12693_12770 = state_12687__$1;
(statearr_12693_12770[(2)] = null);

(statearr_12693_12770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (1))){
var state_12687__$1 = state_12687;
var statearr_12698_12775 = state_12687__$1;
(statearr_12698_12775[(2)] = null);

(statearr_12698_12775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (4))){
var inst_12643 = (state_12687[(7)]);
var inst_12642 = (state_12687[(8)]);
var inst_12645 = (inst_12643 < inst_12642);
var state_12687__$1 = state_12687;
if(cljs.core.truth_(inst_12645)){
var statearr_12699_12788 = state_12687__$1;
(statearr_12699_12788[(1)] = (6));

} else {
var statearr_12701_12791 = state_12687__$1;
(statearr_12701_12791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (15))){
var inst_12672 = (state_12687[(9)]);
var inst_12678 = cljs.core.apply.call(null,f,inst_12672);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12687__$1,(17),out,inst_12678);
} else {
if((state_val_12689 === (13))){
var inst_12672 = (state_12687[(9)]);
var inst_12672__$1 = (state_12687[(2)]);
var inst_12674 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12672__$1);
var state_12687__$1 = (function (){var statearr_12704 = state_12687;
(statearr_12704[(9)] = inst_12672__$1);

return statearr_12704;
})();
if(cljs.core.truth_(inst_12674)){
var statearr_12705_12793 = state_12687__$1;
(statearr_12705_12793[(1)] = (14));

} else {
var statearr_12706_12794 = state_12687__$1;
(statearr_12706_12794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (6))){
var state_12687__$1 = state_12687;
var statearr_12708_12797 = state_12687__$1;
(statearr_12708_12797[(2)] = null);

(statearr_12708_12797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (17))){
var inst_12680 = (state_12687[(2)]);
var state_12687__$1 = (function (){var statearr_12715 = state_12687;
(statearr_12715[(10)] = inst_12680);

return statearr_12715;
})();
var statearr_12716_12800 = state_12687__$1;
(statearr_12716_12800[(2)] = null);

(statearr_12716_12800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (3))){
var inst_12685 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12687__$1,inst_12685);
} else {
if((state_val_12689 === (12))){
var _ = (function (){var statearr_12717 = state_12687;
(statearr_12717[(4)] = cljs.core.rest.call(null,(state_12687[(4)])));

return statearr_12717;
})();
var state_12687__$1 = state_12687;
var ex12713 = (state_12687__$1[(2)]);
var statearr_12718_12805 = state_12687__$1;
(statearr_12718_12805[(5)] = ex12713);


if((ex12713 instanceof Object)){
var statearr_12720_12806 = state_12687__$1;
(statearr_12720_12806[(1)] = (11));

(statearr_12720_12806[(5)] = null);

} else {
throw ex12713;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (2))){
var inst_12641 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12642 = cnt;
var inst_12643 = (0);
var state_12687__$1 = (function (){var statearr_12723 = state_12687;
(statearr_12723[(11)] = inst_12641);

(statearr_12723[(8)] = inst_12642);

(statearr_12723[(7)] = inst_12643);

return statearr_12723;
})();
var statearr_12724_12809 = state_12687__$1;
(statearr_12724_12809[(2)] = null);

(statearr_12724_12809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (11))){
var inst_12650 = (state_12687[(2)]);
var inst_12651 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12687__$1 = (function (){var statearr_12725 = state_12687;
(statearr_12725[(12)] = inst_12650);

return statearr_12725;
})();
var statearr_12726_12810 = state_12687__$1;
(statearr_12726_12810[(2)] = inst_12651);

(statearr_12726_12810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (9))){
var inst_12643 = (state_12687[(7)]);
var _ = (function (){var statearr_12728 = state_12687;
(statearr_12728[(4)] = cljs.core.cons.call(null,(12),(state_12687[(4)])));

return statearr_12728;
})();
var inst_12658 = chs__$1.call(null,inst_12643);
var inst_12659 = done.call(null,inst_12643);
var inst_12660 = cljs.core.async.take_BANG_.call(null,inst_12658,inst_12659);
var ___$1 = (function (){var statearr_12730 = state_12687;
(statearr_12730[(4)] = cljs.core.rest.call(null,(state_12687[(4)])));

return statearr_12730;
})();
var state_12687__$1 = state_12687;
var statearr_12733_12815 = state_12687__$1;
(statearr_12733_12815[(2)] = inst_12660);

(statearr_12733_12815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (5))){
var inst_12670 = (state_12687[(2)]);
var state_12687__$1 = (function (){var statearr_12734 = state_12687;
(statearr_12734[(13)] = inst_12670);

return statearr_12734;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12687__$1,(13),dchan);
} else {
if((state_val_12689 === (14))){
var inst_12676 = cljs.core.async.close_BANG_.call(null,out);
var state_12687__$1 = state_12687;
var statearr_12737_12817 = state_12687__$1;
(statearr_12737_12817[(2)] = inst_12676);

(statearr_12737_12817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (16))){
var inst_12683 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12740_12818 = state_12687__$1;
(statearr_12740_12818[(2)] = inst_12683);

(statearr_12740_12818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (10))){
var inst_12643 = (state_12687[(7)]);
var inst_12663 = (state_12687[(2)]);
var inst_12664 = (inst_12643 + (1));
var inst_12643__$1 = inst_12664;
var state_12687__$1 = (function (){var statearr_12741 = state_12687;
(statearr_12741[(14)] = inst_12663);

(statearr_12741[(7)] = inst_12643__$1);

return statearr_12741;
})();
var statearr_12742_12822 = state_12687__$1;
(statearr_12742_12822[(2)] = null);

(statearr_12742_12822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12689 === (8))){
var inst_12668 = (state_12687[(2)]);
var state_12687__$1 = state_12687;
var statearr_12743_12824 = state_12687__$1;
(statearr_12743_12824[(2)] = inst_12668);

(statearr_12743_12824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_12744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12744[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_12744[(1)] = (1));

return statearr_12744;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_12687){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12746){var ex__10859__auto__ = e12746;
var statearr_12747_12825 = state_12687;
(statearr_12747_12825[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12687[(4)]))){
var statearr_12748_12826 = state_12687;
(statearr_12748_12826[(1)] = cljs.core.first.call(null,(state_12687[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12828 = state_12687;
state_12687 = G__12828;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_12687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_12687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12749 = f__11039__auto__.call(null);
(statearr_12749[(6)] = c__11038__auto___12757);

return statearr_12749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__12753 = arguments.length;
switch (G__12753) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___12831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12789){
var state_val_12790 = (state_12789[(1)]);
if((state_val_12790 === (7))){
var inst_12765 = (state_12789[(7)]);
var inst_12766 = (state_12789[(8)]);
var inst_12765__$1 = (state_12789[(2)]);
var inst_12766__$1 = cljs.core.nth.call(null,inst_12765__$1,(0),null);
var inst_12767 = cljs.core.nth.call(null,inst_12765__$1,(1),null);
var inst_12768 = (inst_12766__$1 == null);
var state_12789__$1 = (function (){var statearr_12792 = state_12789;
(statearr_12792[(7)] = inst_12765__$1);

(statearr_12792[(8)] = inst_12766__$1);

(statearr_12792[(9)] = inst_12767);

return statearr_12792;
})();
if(cljs.core.truth_(inst_12768)){
var statearr_12795_12838 = state_12789__$1;
(statearr_12795_12838[(1)] = (8));

} else {
var statearr_12796_12839 = state_12789__$1;
(statearr_12796_12839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (1))){
var inst_12754 = cljs.core.vec.call(null,chs);
var inst_12755 = inst_12754;
var state_12789__$1 = (function (){var statearr_12798 = state_12789;
(statearr_12798[(10)] = inst_12755);

return statearr_12798;
})();
var statearr_12799_12857 = state_12789__$1;
(statearr_12799_12857[(2)] = null);

(statearr_12799_12857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (4))){
var inst_12755 = (state_12789[(10)]);
var state_12789__$1 = state_12789;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12789__$1,(7),inst_12755);
} else {
if((state_val_12790 === (6))){
var inst_12784 = (state_12789[(2)]);
var state_12789__$1 = state_12789;
var statearr_12801_12860 = state_12789__$1;
(statearr_12801_12860[(2)] = inst_12784);

(statearr_12801_12860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (3))){
var inst_12786 = (state_12789[(2)]);
var state_12789__$1 = state_12789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12789__$1,inst_12786);
} else {
if((state_val_12790 === (2))){
var inst_12755 = (state_12789[(10)]);
var inst_12758 = cljs.core.count.call(null,inst_12755);
var inst_12759 = (inst_12758 > (0));
var state_12789__$1 = state_12789;
if(cljs.core.truth_(inst_12759)){
var statearr_12803_12862 = state_12789__$1;
(statearr_12803_12862[(1)] = (4));

} else {
var statearr_12804_12864 = state_12789__$1;
(statearr_12804_12864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (11))){
var inst_12755 = (state_12789[(10)]);
var inst_12777 = (state_12789[(2)]);
var tmp12802 = inst_12755;
var inst_12755__$1 = tmp12802;
var state_12789__$1 = (function (){var statearr_12807 = state_12789;
(statearr_12807[(11)] = inst_12777);

(statearr_12807[(10)] = inst_12755__$1);

return statearr_12807;
})();
var statearr_12808_12868 = state_12789__$1;
(statearr_12808_12868[(2)] = null);

(statearr_12808_12868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (9))){
var inst_12766 = (state_12789[(8)]);
var state_12789__$1 = state_12789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12789__$1,(11),out,inst_12766);
} else {
if((state_val_12790 === (5))){
var inst_12782 = cljs.core.async.close_BANG_.call(null,out);
var state_12789__$1 = state_12789;
var statearr_12811_12870 = state_12789__$1;
(statearr_12811_12870[(2)] = inst_12782);

(statearr_12811_12870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (10))){
var inst_12780 = (state_12789[(2)]);
var state_12789__$1 = state_12789;
var statearr_12812_12872 = state_12789__$1;
(statearr_12812_12872[(2)] = inst_12780);

(statearr_12812_12872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12790 === (8))){
var inst_12755 = (state_12789[(10)]);
var inst_12765 = (state_12789[(7)]);
var inst_12766 = (state_12789[(8)]);
var inst_12767 = (state_12789[(9)]);
var inst_12771 = (function (){var cs = inst_12755;
var vec__12761 = inst_12765;
var v = inst_12766;
var c = inst_12767;
return (function (p1__12750_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12750_SHARP_);
});
})();
var inst_12772 = cljs.core.filterv.call(null,inst_12771,inst_12755);
var inst_12755__$1 = inst_12772;
var state_12789__$1 = (function (){var statearr_12813 = state_12789;
(statearr_12813[(10)] = inst_12755__$1);

return statearr_12813;
})();
var statearr_12814_12877 = state_12789__$1;
(statearr_12814_12877[(2)] = null);

(statearr_12814_12877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_12816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12816[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_12816[(1)] = (1));

return statearr_12816;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_12789){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12819){var ex__10859__auto__ = e12819;
var statearr_12820_12880 = state_12789;
(statearr_12820_12880[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12789[(4)]))){
var statearr_12821_12881 = state_12789;
(statearr_12821_12881[(1)] = cljs.core.first.call(null,(state_12789[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12882 = state_12789;
state_12789 = G__12882;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_12789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_12789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12823 = f__11039__auto__.call(null);
(statearr_12823[(6)] = c__11038__auto___12831);

return statearr_12823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__12829 = arguments.length;
switch (G__12829) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___12894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12858){
var state_val_12859 = (state_12858[(1)]);
if((state_val_12859 === (7))){
var inst_12837 = (state_12858[(7)]);
var inst_12837__$1 = (state_12858[(2)]);
var inst_12840 = (inst_12837__$1 == null);
var inst_12841 = cljs.core.not.call(null,inst_12840);
var state_12858__$1 = (function (){var statearr_12861 = state_12858;
(statearr_12861[(7)] = inst_12837__$1);

return statearr_12861;
})();
if(inst_12841){
var statearr_12863_12895 = state_12858__$1;
(statearr_12863_12895[(1)] = (8));

} else {
var statearr_12865_12896 = state_12858__$1;
(statearr_12865_12896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (1))){
var inst_12832 = (0);
var state_12858__$1 = (function (){var statearr_12866 = state_12858;
(statearr_12866[(8)] = inst_12832);

return statearr_12866;
})();
var statearr_12867_12897 = state_12858__$1;
(statearr_12867_12897[(2)] = null);

(statearr_12867_12897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (4))){
var state_12858__$1 = state_12858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12858__$1,(7),ch);
} else {
if((state_val_12859 === (6))){
var inst_12852 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12869_12898 = state_12858__$1;
(statearr_12869_12898[(2)] = inst_12852);

(statearr_12869_12898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (3))){
var inst_12854 = (state_12858[(2)]);
var inst_12855 = cljs.core.async.close_BANG_.call(null,out);
var state_12858__$1 = (function (){var statearr_12871 = state_12858;
(statearr_12871[(9)] = inst_12854);

return statearr_12871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12858__$1,inst_12855);
} else {
if((state_val_12859 === (2))){
var inst_12832 = (state_12858[(8)]);
var inst_12834 = (inst_12832 < n);
var state_12858__$1 = state_12858;
if(cljs.core.truth_(inst_12834)){
var statearr_12873_12899 = state_12858__$1;
(statearr_12873_12899[(1)] = (4));

} else {
var statearr_12874_12900 = state_12858__$1;
(statearr_12874_12900[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (11))){
var inst_12832 = (state_12858[(8)]);
var inst_12844 = (state_12858[(2)]);
var inst_12845 = (inst_12832 + (1));
var inst_12832__$1 = inst_12845;
var state_12858__$1 = (function (){var statearr_12875 = state_12858;
(statearr_12875[(10)] = inst_12844);

(statearr_12875[(8)] = inst_12832__$1);

return statearr_12875;
})();
var statearr_12876_12904 = state_12858__$1;
(statearr_12876_12904[(2)] = null);

(statearr_12876_12904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (9))){
var state_12858__$1 = state_12858;
var statearr_12878_12905 = state_12858__$1;
(statearr_12878_12905[(2)] = null);

(statearr_12878_12905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (5))){
var state_12858__$1 = state_12858;
var statearr_12879_12906 = state_12858__$1;
(statearr_12879_12906[(2)] = null);

(statearr_12879_12906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (10))){
var inst_12849 = (state_12858[(2)]);
var state_12858__$1 = state_12858;
var statearr_12883_12907 = state_12858__$1;
(statearr_12883_12907[(2)] = inst_12849);

(statearr_12883_12907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12859 === (8))){
var inst_12837 = (state_12858[(7)]);
var state_12858__$1 = state_12858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12858__$1,(11),out,inst_12837);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_12884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12884[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_12884[(1)] = (1));

return statearr_12884;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_12858){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12885){var ex__10859__auto__ = e12885;
var statearr_12886_12908 = state_12858;
(statearr_12886_12908[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12858[(4)]))){
var statearr_12887_12909 = state_12858;
(statearr_12887_12909[(1)] = cljs.core.first.call(null,(state_12858[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12910 = state_12858;
state_12858 = G__12910;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_12858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_12858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12888 = f__11039__auto__.call(null);
(statearr_12888[(6)] = c__11038__auto___12894);

return statearr_12888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12891 = (function (f,ch,meta12892){
this.f = f;
this.ch = ch;
this.meta12892 = meta12892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12893,meta12892__$1){
var self__ = this;
var _12893__$1 = this;
return (new cljs.core.async.t_cljs$core$async12891(self__.f,self__.ch,meta12892__$1));
}));

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12893){
var self__ = this;
var _12893__$1 = this;
return self__.meta12892;
}));

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12901 = (function (f,ch,meta12892,_,fn1,meta12902){
this.f = f;
this.ch = ch;
this.meta12892 = meta12892;
this._ = _;
this.fn1 = fn1;
this.meta12902 = meta12902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12903,meta12902__$1){
var self__ = this;
var _12903__$1 = this;
return (new cljs.core.async.t_cljs$core$async12901(self__.f,self__.ch,self__.meta12892,self__._,self__.fn1,meta12902__$1));
}));

(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12903){
var self__ = this;
var _12903__$1 = this;
return self__.meta12902;
}));

(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__12890_SHARP_){
return f1.call(null,(((p1__12890_SHARP_ == null))?null:self__.f.call(null,p1__12890_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async12901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12892","meta12892",657522864,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12891","cljs.core.async/t_cljs$core$async12891",1913431960,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12902","meta12902",1372099254,null)], null);
}));

(cljs.core.async.t_cljs$core$async12901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12901");

(cljs.core.async.t_cljs$core$async12901.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12901.
 */
cljs.core.async.__GT_t_cljs$core$async12901 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12901(f__$1,ch__$1,meta12892__$1,___$2,fn1__$1,meta12902){
return (new cljs.core.async.t_cljs$core$async12901(f__$1,ch__$1,meta12892__$1,___$2,fn1__$1,meta12902));
});

}

return (new cljs.core.async.t_cljs$core$async12901(self__.f,self__.ch,self__.meta12892,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async12891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12892","meta12892",657522864,null)], null);
}));

(cljs.core.async.t_cljs$core$async12891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12891");

(cljs.core.async.t_cljs$core$async12891.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12891.
 */
cljs.core.async.__GT_t_cljs$core$async12891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12891(f__$1,ch__$1,meta12892){
return (new cljs.core.async.t_cljs$core$async12891(f__$1,ch__$1,meta12892));
});

}

return (new cljs.core.async.t_cljs$core$async12891(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12911 = (function (f,ch,meta12912){
this.f = f;
this.ch = ch;
this.meta12912 = meta12912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12913,meta12912__$1){
var self__ = this;
var _12913__$1 = this;
return (new cljs.core.async.t_cljs$core$async12911(self__.f,self__.ch,meta12912__$1));
}));

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12913){
var self__ = this;
var _12913__$1 = this;
return self__.meta12912;
}));

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async12911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12912","meta12912",525734563,null)], null);
}));

(cljs.core.async.t_cljs$core$async12911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12911");

(cljs.core.async.t_cljs$core$async12911.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12911.
 */
cljs.core.async.__GT_t_cljs$core$async12911 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12911(f__$1,ch__$1,meta12912){
return (new cljs.core.async.t_cljs$core$async12911(f__$1,ch__$1,meta12912));
});

}

return (new cljs.core.async.t_cljs$core$async12911(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12914 = (function (p,ch,meta12915){
this.p = p;
this.ch = ch;
this.meta12915 = meta12915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12916,meta12915__$1){
var self__ = this;
var _12916__$1 = this;
return (new cljs.core.async.t_cljs$core$async12914(self__.p,self__.ch,meta12915__$1));
}));

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12916){
var self__ = this;
var _12916__$1 = this;
return self__.meta12915;
}));

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12914.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async12914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12915","meta12915",1093278916,null)], null);
}));

(cljs.core.async.t_cljs$core$async12914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12914");

(cljs.core.async.t_cljs$core$async12914.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async12914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12914.
 */
cljs.core.async.__GT_t_cljs$core$async12914 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12914(p__$1,ch__$1,meta12915){
return (new cljs.core.async.t_cljs$core$async12914(p__$1,ch__$1,meta12915));
});

}

return (new cljs.core.async.t_cljs$core$async12914(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__12918 = arguments.length;
switch (G__12918) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___12961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_12939){
var state_val_12940 = (state_12939[(1)]);
if((state_val_12940 === (7))){
var inst_12935 = (state_12939[(2)]);
var state_12939__$1 = state_12939;
var statearr_12941_12962 = state_12939__$1;
(statearr_12941_12962[(2)] = inst_12935);

(statearr_12941_12962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (1))){
var state_12939__$1 = state_12939;
var statearr_12942_12963 = state_12939__$1;
(statearr_12942_12963[(2)] = null);

(statearr_12942_12963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (4))){
var inst_12921 = (state_12939[(7)]);
var inst_12921__$1 = (state_12939[(2)]);
var inst_12922 = (inst_12921__$1 == null);
var state_12939__$1 = (function (){var statearr_12943 = state_12939;
(statearr_12943[(7)] = inst_12921__$1);

return statearr_12943;
})();
if(cljs.core.truth_(inst_12922)){
var statearr_12944_12985 = state_12939__$1;
(statearr_12944_12985[(1)] = (5));

} else {
var statearr_12945_12989 = state_12939__$1;
(statearr_12945_12989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (6))){
var inst_12921 = (state_12939[(7)]);
var inst_12926 = p.call(null,inst_12921);
var state_12939__$1 = state_12939;
if(cljs.core.truth_(inst_12926)){
var statearr_12946_12998 = state_12939__$1;
(statearr_12946_12998[(1)] = (8));

} else {
var statearr_12947_13003 = state_12939__$1;
(statearr_12947_13003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (3))){
var inst_12937 = (state_12939[(2)]);
var state_12939__$1 = state_12939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12939__$1,inst_12937);
} else {
if((state_val_12940 === (2))){
var state_12939__$1 = state_12939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12939__$1,(4),ch);
} else {
if((state_val_12940 === (11))){
var inst_12929 = (state_12939[(2)]);
var state_12939__$1 = state_12939;
var statearr_12948_13031 = state_12939__$1;
(statearr_12948_13031[(2)] = inst_12929);

(statearr_12948_13031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (9))){
var state_12939__$1 = state_12939;
var statearr_12949_13032 = state_12939__$1;
(statearr_12949_13032[(2)] = null);

(statearr_12949_13032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (5))){
var inst_12924 = cljs.core.async.close_BANG_.call(null,out);
var state_12939__$1 = state_12939;
var statearr_12950_13035 = state_12939__$1;
(statearr_12950_13035[(2)] = inst_12924);

(statearr_12950_13035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (10))){
var inst_12932 = (state_12939[(2)]);
var state_12939__$1 = (function (){var statearr_12951 = state_12939;
(statearr_12951[(8)] = inst_12932);

return statearr_12951;
})();
var statearr_12952_13039 = state_12939__$1;
(statearr_12952_13039[(2)] = null);

(statearr_12952_13039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12940 === (8))){
var inst_12921 = (state_12939[(7)]);
var state_12939__$1 = state_12939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12939__$1,(11),out,inst_12921);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_12953 = [null,null,null,null,null,null,null,null,null];
(statearr_12953[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_12953[(1)] = (1));

return statearr_12953;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_12939){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_12939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e12954){var ex__10859__auto__ = e12954;
var statearr_12955_13047 = state_12939;
(statearr_12955_13047[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_12939[(4)]))){
var statearr_12956_13048 = state_12939;
(statearr_12956_13048[(1)] = cljs.core.first.call(null,(state_12939[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13050 = state_12939;
state_12939 = G__13050;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_12939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_12939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_12957 = f__11039__auto__.call(null);
(statearr_12957[(6)] = c__11038__auto___12961);

return statearr_12957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__12959 = arguments.length;
switch (G__12959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__11038__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13029){
var state_val_13030 = (state_13029[(1)]);
if((state_val_13030 === (7))){
var inst_13025 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13033_13080 = state_13029__$1;
(statearr_13033_13080[(2)] = inst_13025);

(statearr_13033_13080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (20))){
var inst_12993 = (state_13029[(7)]);
var inst_13006 = (state_13029[(2)]);
var inst_13007 = cljs.core.next.call(null,inst_12993);
var inst_12977 = inst_13007;
var inst_12978 = null;
var inst_12979 = (0);
var inst_12980 = (0);
var state_13029__$1 = (function (){var statearr_13034 = state_13029;
(statearr_13034[(8)] = inst_13006);

(statearr_13034[(9)] = inst_12977);

(statearr_13034[(10)] = inst_12978);

(statearr_13034[(11)] = inst_12979);

(statearr_13034[(12)] = inst_12980);

return statearr_13034;
})();
var statearr_13036_13083 = state_13029__$1;
(statearr_13036_13083[(2)] = null);

(statearr_13036_13083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (1))){
var state_13029__$1 = state_13029;
var statearr_13037_13084 = state_13029__$1;
(statearr_13037_13084[(2)] = null);

(statearr_13037_13084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (4))){
var inst_12966 = (state_13029[(13)]);
var inst_12966__$1 = (state_13029[(2)]);
var inst_12967 = (inst_12966__$1 == null);
var state_13029__$1 = (function (){var statearr_13038 = state_13029;
(statearr_13038[(13)] = inst_12966__$1);

return statearr_13038;
})();
if(cljs.core.truth_(inst_12967)){
var statearr_13040_13086 = state_13029__$1;
(statearr_13040_13086[(1)] = (5));

} else {
var statearr_13041_13088 = state_13029__$1;
(statearr_13041_13088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (15))){
var state_13029__$1 = state_13029;
var statearr_13045_13089 = state_13029__$1;
(statearr_13045_13089[(2)] = null);

(statearr_13045_13089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (21))){
var state_13029__$1 = state_13029;
var statearr_13046_13090 = state_13029__$1;
(statearr_13046_13090[(2)] = null);

(statearr_13046_13090[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (13))){
var inst_12980 = (state_13029[(12)]);
var inst_12977 = (state_13029[(9)]);
var inst_12978 = (state_13029[(10)]);
var inst_12979 = (state_13029[(11)]);
var inst_12988 = (state_13029[(2)]);
var inst_12990 = (inst_12980 + (1));
var tmp13042 = inst_12979;
var tmp13043 = inst_12977;
var tmp13044 = inst_12978;
var inst_12977__$1 = tmp13043;
var inst_12978__$1 = tmp13044;
var inst_12979__$1 = tmp13042;
var inst_12980__$1 = inst_12990;
var state_13029__$1 = (function (){var statearr_13049 = state_13029;
(statearr_13049[(14)] = inst_12988);

(statearr_13049[(9)] = inst_12977__$1);

(statearr_13049[(10)] = inst_12978__$1);

(statearr_13049[(11)] = inst_12979__$1);

(statearr_13049[(12)] = inst_12980__$1);

return statearr_13049;
})();
var statearr_13051_13112 = state_13029__$1;
(statearr_13051_13112[(2)] = null);

(statearr_13051_13112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (22))){
var state_13029__$1 = state_13029;
var statearr_13052_13117 = state_13029__$1;
(statearr_13052_13117[(2)] = null);

(statearr_13052_13117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (6))){
var inst_12966 = (state_13029[(13)]);
var inst_12975 = f.call(null,inst_12966);
var inst_12976 = cljs.core.seq.call(null,inst_12975);
var inst_12977 = inst_12976;
var inst_12978 = null;
var inst_12979 = (0);
var inst_12980 = (0);
var state_13029__$1 = (function (){var statearr_13054 = state_13029;
(statearr_13054[(9)] = inst_12977);

(statearr_13054[(10)] = inst_12978);

(statearr_13054[(11)] = inst_12979);

(statearr_13054[(12)] = inst_12980);

return statearr_13054;
})();
var statearr_13055_13119 = state_13029__$1;
(statearr_13055_13119[(2)] = null);

(statearr_13055_13119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (17))){
var inst_12993 = (state_13029[(7)]);
var inst_12997 = cljs.core.chunk_first.call(null,inst_12993);
var inst_12999 = cljs.core.chunk_rest.call(null,inst_12993);
var inst_13000 = cljs.core.count.call(null,inst_12997);
var inst_12977 = inst_12999;
var inst_12978 = inst_12997;
var inst_12979 = inst_13000;
var inst_12980 = (0);
var state_13029__$1 = (function (){var statearr_13056 = state_13029;
(statearr_13056[(9)] = inst_12977);

(statearr_13056[(10)] = inst_12978);

(statearr_13056[(11)] = inst_12979);

(statearr_13056[(12)] = inst_12980);

return statearr_13056;
})();
var statearr_13057_13126 = state_13029__$1;
(statearr_13057_13126[(2)] = null);

(statearr_13057_13126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (3))){
var inst_13027 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13029__$1,inst_13027);
} else {
if((state_val_13030 === (12))){
var inst_13015 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13058_13128 = state_13029__$1;
(statearr_13058_13128[(2)] = inst_13015);

(statearr_13058_13128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (2))){
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13029__$1,(4),in$);
} else {
if((state_val_13030 === (23))){
var inst_13023 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13059_13131 = state_13029__$1;
(statearr_13059_13131[(2)] = inst_13023);

(statearr_13059_13131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (19))){
var inst_13010 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13060_13134 = state_13029__$1;
(statearr_13060_13134[(2)] = inst_13010);

(statearr_13060_13134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (11))){
var inst_12977 = (state_13029[(9)]);
var inst_12993 = (state_13029[(7)]);
var inst_12993__$1 = cljs.core.seq.call(null,inst_12977);
var state_13029__$1 = (function (){var statearr_13061 = state_13029;
(statearr_13061[(7)] = inst_12993__$1);

return statearr_13061;
})();
if(inst_12993__$1){
var statearr_13062_13139 = state_13029__$1;
(statearr_13062_13139[(1)] = (14));

} else {
var statearr_13063_13140 = state_13029__$1;
(statearr_13063_13140[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (9))){
var inst_13017 = (state_13029[(2)]);
var inst_13018 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13029__$1 = (function (){var statearr_13064 = state_13029;
(statearr_13064[(15)] = inst_13017);

return statearr_13064;
})();
if(cljs.core.truth_(inst_13018)){
var statearr_13065_13142 = state_13029__$1;
(statearr_13065_13142[(1)] = (21));

} else {
var statearr_13066_13143 = state_13029__$1;
(statearr_13066_13143[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (5))){
var inst_12969 = cljs.core.async.close_BANG_.call(null,out);
var state_13029__$1 = state_13029;
var statearr_13067_13146 = state_13029__$1;
(statearr_13067_13146[(2)] = inst_12969);

(statearr_13067_13146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (14))){
var inst_12993 = (state_13029[(7)]);
var inst_12995 = cljs.core.chunked_seq_QMARK_.call(null,inst_12993);
var state_13029__$1 = state_13029;
if(inst_12995){
var statearr_13068_13148 = state_13029__$1;
(statearr_13068_13148[(1)] = (17));

} else {
var statearr_13069_13149 = state_13029__$1;
(statearr_13069_13149[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (16))){
var inst_13013 = (state_13029[(2)]);
var state_13029__$1 = state_13029;
var statearr_13070_13150 = state_13029__$1;
(statearr_13070_13150[(2)] = inst_13013);

(statearr_13070_13150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13030 === (10))){
var inst_12978 = (state_13029[(10)]);
var inst_12980 = (state_13029[(12)]);
var inst_12986 = cljs.core._nth.call(null,inst_12978,inst_12980);
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13029__$1,(13),out,inst_12986);
} else {
if((state_val_13030 === (18))){
var inst_12993 = (state_13029[(7)]);
var inst_13004 = cljs.core.first.call(null,inst_12993);
var state_13029__$1 = state_13029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13029__$1,(20),out,inst_13004);
} else {
if((state_val_13030 === (8))){
var inst_12980 = (state_13029[(12)]);
var inst_12979 = (state_13029[(11)]);
var inst_12982 = (inst_12980 < inst_12979);
var inst_12983 = inst_12982;
var state_13029__$1 = state_13029;
if(cljs.core.truth_(inst_12983)){
var statearr_13071_13152 = state_13029__$1;
(statearr_13071_13152[(1)] = (10));

} else {
var statearr_13072_13153 = state_13029__$1;
(statearr_13072_13153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____0 = (function (){
var statearr_13073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__);

(statearr_13073[(1)] = (1));

return statearr_13073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____1 = (function (state_13029){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13074){var ex__10859__auto__ = e13074;
var statearr_13075_13156 = state_13029;
(statearr_13075_13156[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13029[(4)]))){
var statearr_13076_13157 = state_13029;
(statearr_13076_13157[(1)] = cljs.core.first.call(null,(state_13029[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13158 = state_13029;
state_13029 = G__13158;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__ = function(state_13029){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____1.call(this,state_13029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10856__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13077 = f__11039__auto__.call(null);
(statearr_13077[(6)] = c__11038__auto__);

return statearr_13077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));

return c__11038__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13079 = arguments.length;
switch (G__13079) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13082 = arguments.length;
switch (G__13082) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13087 = arguments.length;
switch (G__13087) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___13202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13115){
var state_val_13116 = (state_13115[(1)]);
if((state_val_13116 === (7))){
var inst_13109 = (state_13115[(2)]);
var state_13115__$1 = state_13115;
var statearr_13118_13203 = state_13115__$1;
(statearr_13118_13203[(2)] = inst_13109);

(statearr_13118_13203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (1))){
var inst_13091 = null;
var state_13115__$1 = (function (){var statearr_13120 = state_13115;
(statearr_13120[(7)] = inst_13091);

return statearr_13120;
})();
var statearr_13121_13206 = state_13115__$1;
(statearr_13121_13206[(2)] = null);

(statearr_13121_13206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (4))){
var inst_13094 = (state_13115[(8)]);
var inst_13094__$1 = (state_13115[(2)]);
var inst_13095 = (inst_13094__$1 == null);
var inst_13096 = cljs.core.not.call(null,inst_13095);
var state_13115__$1 = (function (){var statearr_13122 = state_13115;
(statearr_13122[(8)] = inst_13094__$1);

return statearr_13122;
})();
if(inst_13096){
var statearr_13123_13208 = state_13115__$1;
(statearr_13123_13208[(1)] = (5));

} else {
var statearr_13124_13210 = state_13115__$1;
(statearr_13124_13210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (6))){
var state_13115__$1 = state_13115;
var statearr_13125_13212 = state_13115__$1;
(statearr_13125_13212[(2)] = null);

(statearr_13125_13212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (3))){
var inst_13111 = (state_13115[(2)]);
var inst_13113 = cljs.core.async.close_BANG_.call(null,out);
var state_13115__$1 = (function (){var statearr_13127 = state_13115;
(statearr_13127[(9)] = inst_13111);

return statearr_13127;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13115__$1,inst_13113);
} else {
if((state_val_13116 === (2))){
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13115__$1,(4),ch);
} else {
if((state_val_13116 === (11))){
var inst_13094 = (state_13115[(8)]);
var inst_13103 = (state_13115[(2)]);
var inst_13091 = inst_13094;
var state_13115__$1 = (function (){var statearr_13129 = state_13115;
(statearr_13129[(10)] = inst_13103);

(statearr_13129[(7)] = inst_13091);

return statearr_13129;
})();
var statearr_13130_13215 = state_13115__$1;
(statearr_13130_13215[(2)] = null);

(statearr_13130_13215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (9))){
var inst_13094 = (state_13115[(8)]);
var state_13115__$1 = state_13115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13115__$1,(11),out,inst_13094);
} else {
if((state_val_13116 === (5))){
var inst_13094 = (state_13115[(8)]);
var inst_13091 = (state_13115[(7)]);
var inst_13098 = cljs.core._EQ_.call(null,inst_13094,inst_13091);
var state_13115__$1 = state_13115;
if(inst_13098){
var statearr_13133_13218 = state_13115__$1;
(statearr_13133_13218[(1)] = (8));

} else {
var statearr_13135_13219 = state_13115__$1;
(statearr_13135_13219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (10))){
var inst_13106 = (state_13115[(2)]);
var state_13115__$1 = state_13115;
var statearr_13136_13220 = state_13115__$1;
(statearr_13136_13220[(2)] = inst_13106);

(statearr_13136_13220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13116 === (8))){
var inst_13091 = (state_13115[(7)]);
var tmp13132 = inst_13091;
var inst_13091__$1 = tmp13132;
var state_13115__$1 = (function (){var statearr_13137 = state_13115;
(statearr_13137[(7)] = inst_13091__$1);

return statearr_13137;
})();
var statearr_13138_13221 = state_13115__$1;
(statearr_13138_13221[(2)] = null);

(statearr_13138_13221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_13141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13141[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_13141[(1)] = (1));

return statearr_13141;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_13115){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13144){var ex__10859__auto__ = e13144;
var statearr_13145_13224 = state_13115;
(statearr_13145_13224[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13115[(4)]))){
var statearr_13147_13225 = state_13115;
(statearr_13147_13225[(1)] = cljs.core.first.call(null,(state_13115[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13226 = state_13115;
state_13115 = G__13226;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_13115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_13115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13151 = f__11039__auto__.call(null);
(statearr_13151[(6)] = c__11038__auto___13202);

return statearr_13151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13155 = arguments.length;
switch (G__13155) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___13244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13198){
var state_val_13199 = (state_13198[(1)]);
if((state_val_13199 === (7))){
var inst_13193 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
var statearr_13201_13245 = state_13198__$1;
(statearr_13201_13245[(2)] = inst_13193);

(statearr_13201_13245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (1))){
var inst_13159 = (new Array(n));
var inst_13160 = inst_13159;
var inst_13161 = (0);
var state_13198__$1 = (function (){var statearr_13204 = state_13198;
(statearr_13204[(7)] = inst_13160);

(statearr_13204[(8)] = inst_13161);

return statearr_13204;
})();
var statearr_13205_13246 = state_13198__$1;
(statearr_13205_13246[(2)] = null);

(statearr_13205_13246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (4))){
var inst_13164 = (state_13198[(9)]);
var inst_13164__$1 = (state_13198[(2)]);
var inst_13166 = (inst_13164__$1 == null);
var inst_13167 = cljs.core.not.call(null,inst_13166);
var state_13198__$1 = (function (){var statearr_13207 = state_13198;
(statearr_13207[(9)] = inst_13164__$1);

return statearr_13207;
})();
if(inst_13167){
var statearr_13209_13257 = state_13198__$1;
(statearr_13209_13257[(1)] = (5));

} else {
var statearr_13211_13260 = state_13198__$1;
(statearr_13211_13260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (15))){
var inst_13187 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
var statearr_13213_13270 = state_13198__$1;
(statearr_13213_13270[(2)] = inst_13187);

(statearr_13213_13270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (13))){
var state_13198__$1 = state_13198;
var statearr_13214_13279 = state_13198__$1;
(statearr_13214_13279[(2)] = null);

(statearr_13214_13279[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (6))){
var inst_13161 = (state_13198[(8)]);
var inst_13183 = (inst_13161 > (0));
var state_13198__$1 = state_13198;
if(cljs.core.truth_(inst_13183)){
var statearr_13216_13295 = state_13198__$1;
(statearr_13216_13295[(1)] = (12));

} else {
var statearr_13217_13296 = state_13198__$1;
(statearr_13217_13296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (3))){
var inst_13195 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13198__$1,inst_13195);
} else {
if((state_val_13199 === (12))){
var inst_13160 = (state_13198[(7)]);
var inst_13185 = cljs.core.vec.call(null,inst_13160);
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13198__$1,(15),out,inst_13185);
} else {
if((state_val_13199 === (2))){
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13198__$1,(4),ch);
} else {
if((state_val_13199 === (11))){
var inst_13177 = (state_13198[(2)]);
var inst_13178 = (new Array(n));
var inst_13160 = inst_13178;
var inst_13161 = (0);
var state_13198__$1 = (function (){var statearr_13222 = state_13198;
(statearr_13222[(10)] = inst_13177);

(statearr_13222[(7)] = inst_13160);

(statearr_13222[(8)] = inst_13161);

return statearr_13222;
})();
var statearr_13223_13301 = state_13198__$1;
(statearr_13223_13301[(2)] = null);

(statearr_13223_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (9))){
var inst_13160 = (state_13198[(7)]);
var inst_13175 = cljs.core.vec.call(null,inst_13160);
var state_13198__$1 = state_13198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13198__$1,(11),out,inst_13175);
} else {
if((state_val_13199 === (5))){
var inst_13160 = (state_13198[(7)]);
var inst_13161 = (state_13198[(8)]);
var inst_13164 = (state_13198[(9)]);
var inst_13170 = (state_13198[(11)]);
var inst_13169 = (inst_13160[inst_13161] = inst_13164);
var inst_13170__$1 = (inst_13161 + (1));
var inst_13171 = (inst_13170__$1 < n);
var state_13198__$1 = (function (){var statearr_13227 = state_13198;
(statearr_13227[(12)] = inst_13169);

(statearr_13227[(11)] = inst_13170__$1);

return statearr_13227;
})();
if(cljs.core.truth_(inst_13171)){
var statearr_13228_13306 = state_13198__$1;
(statearr_13228_13306[(1)] = (8));

} else {
var statearr_13229_13307 = state_13198__$1;
(statearr_13229_13307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (14))){
var inst_13190 = (state_13198[(2)]);
var inst_13191 = cljs.core.async.close_BANG_.call(null,out);
var state_13198__$1 = (function (){var statearr_13231 = state_13198;
(statearr_13231[(13)] = inst_13190);

return statearr_13231;
})();
var statearr_13232_13309 = state_13198__$1;
(statearr_13232_13309[(2)] = inst_13191);

(statearr_13232_13309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (10))){
var inst_13181 = (state_13198[(2)]);
var state_13198__$1 = state_13198;
var statearr_13233_13312 = state_13198__$1;
(statearr_13233_13312[(2)] = inst_13181);

(statearr_13233_13312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13199 === (8))){
var inst_13160 = (state_13198[(7)]);
var inst_13170 = (state_13198[(11)]);
var tmp13230 = inst_13160;
var inst_13160__$1 = tmp13230;
var inst_13161 = inst_13170;
var state_13198__$1 = (function (){var statearr_13234 = state_13198;
(statearr_13234[(7)] = inst_13160__$1);

(statearr_13234[(8)] = inst_13161);

return statearr_13234;
})();
var statearr_13235_13315 = state_13198__$1;
(statearr_13235_13315[(2)] = null);

(statearr_13235_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_13236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13236[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_13236[(1)] = (1));

return statearr_13236;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_13198){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13237){var ex__10859__auto__ = e13237;
var statearr_13238_13317 = state_13198;
(statearr_13238_13317[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13198[(4)]))){
var statearr_13239_13318 = state_13198;
(statearr_13239_13318[(1)] = cljs.core.first.call(null,(state_13198[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13319 = state_13198;
state_13198 = G__13319;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_13198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_13198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13240 = f__11039__auto__.call(null);
(statearr_13240[(6)] = c__11038__auto___13244);

return statearr_13240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13243 = arguments.length;
switch (G__13243) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__11038__auto___13339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__11039__auto__ = (function (){var switch__10855__auto__ = (function (state_13297){
var state_val_13298 = (state_13297[(1)]);
if((state_val_13298 === (7))){
var inst_13291 = (state_13297[(2)]);
var state_13297__$1 = state_13297;
var statearr_13299_13340 = state_13297__$1;
(statearr_13299_13340[(2)] = inst_13291);

(statearr_13299_13340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (1))){
var inst_13247 = [];
var inst_13248 = inst_13247;
var inst_13249 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13297__$1 = (function (){var statearr_13300 = state_13297;
(statearr_13300[(7)] = inst_13248);

(statearr_13300[(8)] = inst_13249);

return statearr_13300;
})();
var statearr_13302_13341 = state_13297__$1;
(statearr_13302_13341[(2)] = null);

(statearr_13302_13341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (4))){
var inst_13252 = (state_13297[(9)]);
var inst_13252__$1 = (state_13297[(2)]);
var inst_13253 = (inst_13252__$1 == null);
var inst_13254 = cljs.core.not.call(null,inst_13253);
var state_13297__$1 = (function (){var statearr_13303 = state_13297;
(statearr_13303[(9)] = inst_13252__$1);

return statearr_13303;
})();
if(inst_13254){
var statearr_13304_13342 = state_13297__$1;
(statearr_13304_13342[(1)] = (5));

} else {
var statearr_13305_13343 = state_13297__$1;
(statearr_13305_13343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (15))){
var inst_13248 = (state_13297[(7)]);
var inst_13283 = cljs.core.vec.call(null,inst_13248);
var state_13297__$1 = state_13297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13297__$1,(18),out,inst_13283);
} else {
if((state_val_13298 === (13))){
var inst_13277 = (state_13297[(2)]);
var state_13297__$1 = state_13297;
var statearr_13308_13344 = state_13297__$1;
(statearr_13308_13344[(2)] = inst_13277);

(statearr_13308_13344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (6))){
var inst_13248 = (state_13297[(7)]);
var inst_13280 = inst_13248.length;
var inst_13281 = (inst_13280 > (0));
var state_13297__$1 = state_13297;
if(cljs.core.truth_(inst_13281)){
var statearr_13310_13345 = state_13297__$1;
(statearr_13310_13345[(1)] = (15));

} else {
var statearr_13311_13346 = state_13297__$1;
(statearr_13311_13346[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (17))){
var inst_13288 = (state_13297[(2)]);
var inst_13289 = cljs.core.async.close_BANG_.call(null,out);
var state_13297__$1 = (function (){var statearr_13313 = state_13297;
(statearr_13313[(10)] = inst_13288);

return statearr_13313;
})();
var statearr_13314_13347 = state_13297__$1;
(statearr_13314_13347[(2)] = inst_13289);

(statearr_13314_13347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (3))){
var inst_13293 = (state_13297[(2)]);
var state_13297__$1 = state_13297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13297__$1,inst_13293);
} else {
if((state_val_13298 === (12))){
var inst_13248 = (state_13297[(7)]);
var inst_13269 = cljs.core.vec.call(null,inst_13248);
var state_13297__$1 = state_13297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13297__$1,(14),out,inst_13269);
} else {
if((state_val_13298 === (2))){
var state_13297__$1 = state_13297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13297__$1,(4),ch);
} else {
if((state_val_13298 === (11))){
var inst_13248 = (state_13297[(7)]);
var inst_13252 = (state_13297[(9)]);
var inst_13256 = (state_13297[(11)]);
var inst_13266 = inst_13248.push(inst_13252);
var tmp13316 = inst_13248;
var inst_13248__$1 = tmp13316;
var inst_13249 = inst_13256;
var state_13297__$1 = (function (){var statearr_13320 = state_13297;
(statearr_13320[(12)] = inst_13266);

(statearr_13320[(7)] = inst_13248__$1);

(statearr_13320[(8)] = inst_13249);

return statearr_13320;
})();
var statearr_13321_13348 = state_13297__$1;
(statearr_13321_13348[(2)] = null);

(statearr_13321_13348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (9))){
var inst_13249 = (state_13297[(8)]);
var inst_13262 = cljs.core.keyword_identical_QMARK_.call(null,inst_13249,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_13297__$1 = state_13297;
var statearr_13322_13349 = state_13297__$1;
(statearr_13322_13349[(2)] = inst_13262);

(statearr_13322_13349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (5))){
var inst_13252 = (state_13297[(9)]);
var inst_13256 = (state_13297[(11)]);
var inst_13249 = (state_13297[(8)]);
var inst_13258 = (state_13297[(13)]);
var inst_13256__$1 = f.call(null,inst_13252);
var inst_13258__$1 = cljs.core._EQ_.call(null,inst_13256__$1,inst_13249);
var state_13297__$1 = (function (){var statearr_13323 = state_13297;
(statearr_13323[(11)] = inst_13256__$1);

(statearr_13323[(13)] = inst_13258__$1);

return statearr_13323;
})();
if(inst_13258__$1){
var statearr_13324_13350 = state_13297__$1;
(statearr_13324_13350[(1)] = (8));

} else {
var statearr_13325_13351 = state_13297__$1;
(statearr_13325_13351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (14))){
var inst_13252 = (state_13297[(9)]);
var inst_13256 = (state_13297[(11)]);
var inst_13272 = (state_13297[(2)]);
var inst_13273 = [];
var inst_13274 = inst_13273.push(inst_13252);
var inst_13248 = inst_13273;
var inst_13249 = inst_13256;
var state_13297__$1 = (function (){var statearr_13326 = state_13297;
(statearr_13326[(14)] = inst_13272);

(statearr_13326[(15)] = inst_13274);

(statearr_13326[(7)] = inst_13248);

(statearr_13326[(8)] = inst_13249);

return statearr_13326;
})();
var statearr_13327_13352 = state_13297__$1;
(statearr_13327_13352[(2)] = null);

(statearr_13327_13352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (16))){
var state_13297__$1 = state_13297;
var statearr_13328_13353 = state_13297__$1;
(statearr_13328_13353[(2)] = null);

(statearr_13328_13353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (10))){
var inst_13264 = (state_13297[(2)]);
var state_13297__$1 = state_13297;
if(cljs.core.truth_(inst_13264)){
var statearr_13329_13354 = state_13297__$1;
(statearr_13329_13354[(1)] = (11));

} else {
var statearr_13330_13355 = state_13297__$1;
(statearr_13330_13355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (18))){
var inst_13285 = (state_13297[(2)]);
var state_13297__$1 = state_13297;
var statearr_13331_13356 = state_13297__$1;
(statearr_13331_13356[(2)] = inst_13285);

(statearr_13331_13356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13298 === (8))){
var inst_13258 = (state_13297[(13)]);
var state_13297__$1 = state_13297;
var statearr_13332_13357 = state_13297__$1;
(statearr_13332_13357[(2)] = inst_13258);

(statearr_13332_13357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__10856__auto__ = null;
var cljs$core$async$state_machine__10856__auto____0 = (function (){
var statearr_13333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13333[(0)] = cljs$core$async$state_machine__10856__auto__);

(statearr_13333[(1)] = (1));

return statearr_13333;
});
var cljs$core$async$state_machine__10856__auto____1 = (function (state_13297){
while(true){
var ret_value__10857__auto__ = (function (){try{while(true){
var result__10858__auto__ = switch__10855__auto__.call(null,state_13297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10858__auto__;
}
break;
}
}catch (e13334){var ex__10859__auto__ = e13334;
var statearr_13335_13358 = state_13297;
(statearr_13335_13358[(2)] = ex__10859__auto__);


if(cljs.core.seq.call(null,(state_13297[(4)]))){
var statearr_13336_13359 = state_13297;
(statearr_13336_13359[(1)] = cljs.core.first.call(null,(state_13297[(4)])));

} else {
throw ex__10859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13360 = state_13297;
state_13297 = G__13360;
continue;
} else {
return ret_value__10857__auto__;
}
break;
}
});
cljs$core$async$state_machine__10856__auto__ = function(state_13297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10856__auto____1.call(this,state_13297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10856__auto____0;
cljs$core$async$state_machine__10856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10856__auto____1;
return cljs$core$async$state_machine__10856__auto__;
})()
})();
var state__11040__auto__ = (function (){var statearr_13337 = f__11039__auto__.call(null);
(statearr_13337[(6)] = c__11038__auto___13339);

return statearr_13337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11040__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
