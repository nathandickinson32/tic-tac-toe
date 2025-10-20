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
var G__17101 = arguments.length;
switch (G__17101) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17104 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17104 = (function (f,blockable,meta17105){
this.f = f;
this.blockable = blockable;
this.meta17105 = meta17105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17106,meta17105__$1){
var self__ = this;
var _17106__$1 = this;
return (new cljs.core.async.t_cljs$core$async17104(self__.f,self__.blockable,meta17105__$1));
}));

(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17106){
var self__ = this;
var _17106__$1 = this;
return self__.meta17105;
}));

(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17105","meta17105",-1641773701,null)], null);
}));

(cljs.core.async.t_cljs$core$async17104.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17104");

(cljs.core.async.t_cljs$core$async17104.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17104");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17104.
 */
cljs.core.async.__GT_t_cljs$core$async17104 = (function cljs$core$async$__GT_t_cljs$core$async17104(f__$1,blockable__$1,meta17105){
return (new cljs.core.async.t_cljs$core$async17104(f__$1,blockable__$1,meta17105));
});

}

return (new cljs.core.async.t_cljs$core$async17104(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17120 = arguments.length;
switch (G__17120) {
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
var G__17123 = arguments.length;
switch (G__17123) {
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
var G__17128 = arguments.length;
switch (G__17128) {
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
var val_17140 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17140);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17140);
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
var G__17130 = arguments.length;
switch (G__17130) {
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
var n__5616__auto___17142 = n;
var x_17143 = (0);
while(true){
if((x_17143 < n__5616__auto___17142)){
(a[x_17143] = x_17143);

var G__17144 = (x_17143 + (1));
x_17143 = G__17144;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17132 = (function (flag,meta17133){
this.flag = flag;
this.meta17133 = meta17133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17134,meta17133__$1){
var self__ = this;
var _17134__$1 = this;
return (new cljs.core.async.t_cljs$core$async17132(self__.flag,meta17133__$1));
}));

(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17134){
var self__ = this;
var _17134__$1 = this;
return self__.meta17133;
}));

(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17133","meta17133",1775067839,null)], null);
}));

(cljs.core.async.t_cljs$core$async17132.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17132");

(cljs.core.async.t_cljs$core$async17132.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17132");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17132.
 */
cljs.core.async.__GT_t_cljs$core$async17132 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17132(flag__$1,meta17133){
return (new cljs.core.async.t_cljs$core$async17132(flag__$1,meta17133));
});

}

return (new cljs.core.async.t_cljs$core$async17132(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17136 = (function (flag,cb,meta17137){
this.flag = flag;
this.cb = cb;
this.meta17137 = meta17137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17138,meta17137__$1){
var self__ = this;
var _17138__$1 = this;
return (new cljs.core.async.t_cljs$core$async17136(self__.flag,self__.cb,meta17137__$1));
}));

(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17138){
var self__ = this;
var _17138__$1 = this;
return self__.meta17137;
}));

(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17137","meta17137",-568810848,null)], null);
}));

(cljs.core.async.t_cljs$core$async17136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17136");

(cljs.core.async.t_cljs$core$async17136.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17136.
 */
cljs.core.async.__GT_t_cljs$core$async17136 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17136(flag__$1,cb__$1,meta17137){
return (new cljs.core.async.t_cljs$core$async17136(flag__$1,cb__$1,meta17137));
});

}

return (new cljs.core.async.t_cljs$core$async17136(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_17151 = cljs.core.nth.call(null,ports__$1,i);
if(cljs.core.vector_QMARK_.call(null,port_17151)){
if((!((port_17151.call(null,(1)) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__17152 = (i + (1));
i = G__17152;
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
return (function (p1__17145_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17145_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__17146_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17146_SHARP_,port], null));
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
var G__17185 = (i + (1));
i = G__17185;
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
var len__5749__auto___17237 = arguments.length;
var i__5750__auto___17239 = (0);
while(true){
if((i__5750__auto___17239 < len__5749__auto___17237)){
args__5755__auto__.push((arguments[i__5750__auto___17239]));

var G__17241 = (i__5750__auto___17239 + (1));
i__5750__auto___17239 = G__17241;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17149){
var map__17150 = p__17149;
var map__17150__$1 = cljs.core.__destructure_map.call(null,map__17150);
var opts = map__17150__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17147){
var G__17148 = cljs.core.first.call(null,seq17147);
var seq17147__$1 = cljs.core.next.call(null,seq17147);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17148,seq17147__$1);
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
var G__17154 = arguments.length;
switch (G__17154) {
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
var c__14531__auto___17252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17178){
var state_val_17179 = (state_17178[(1)]);
if((state_val_17179 === (7))){
var inst_17174 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17180_17253 = state_17178__$1;
(statearr_17180_17253[(2)] = inst_17174);

(statearr_17180_17253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (1))){
var state_17178__$1 = state_17178;
var statearr_17181_17254 = state_17178__$1;
(statearr_17181_17254[(2)] = null);

(statearr_17181_17254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (4))){
var inst_17157 = (state_17178[(7)]);
var inst_17157__$1 = (state_17178[(2)]);
var inst_17158 = (inst_17157__$1 == null);
var state_17178__$1 = (function (){var statearr_17182 = state_17178;
(statearr_17182[(7)] = inst_17157__$1);

return statearr_17182;
})();
if(cljs.core.truth_(inst_17158)){
var statearr_17183_17255 = state_17178__$1;
(statearr_17183_17255[(1)] = (5));

} else {
var statearr_17184_17256 = state_17178__$1;
(statearr_17184_17256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (13))){
var state_17178__$1 = state_17178;
var statearr_17186_17257 = state_17178__$1;
(statearr_17186_17257[(2)] = null);

(statearr_17186_17257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (6))){
var inst_17157 = (state_17178[(7)]);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17178__$1,(11),to,inst_17157);
} else {
if((state_val_17179 === (3))){
var inst_17176 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17178__$1,inst_17176);
} else {
if((state_val_17179 === (12))){
var state_17178__$1 = state_17178;
var statearr_17187_17259 = state_17178__$1;
(statearr_17187_17259[(2)] = null);

(statearr_17187_17259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (2))){
var state_17178__$1 = state_17178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17178__$1,(4),from);
} else {
if((state_val_17179 === (11))){
var inst_17167 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
if(cljs.core.truth_(inst_17167)){
var statearr_17188_17260 = state_17178__$1;
(statearr_17188_17260[(1)] = (12));

} else {
var statearr_17189_17261 = state_17178__$1;
(statearr_17189_17261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (9))){
var state_17178__$1 = state_17178;
var statearr_17190_17262 = state_17178__$1;
(statearr_17190_17262[(2)] = null);

(statearr_17190_17262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (5))){
var state_17178__$1 = state_17178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17191_17263 = state_17178__$1;
(statearr_17191_17263[(1)] = (8));

} else {
var statearr_17192_17264 = state_17178__$1;
(statearr_17192_17264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (14))){
var inst_17172 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17193_17265 = state_17178__$1;
(statearr_17193_17265[(2)] = inst_17172);

(statearr_17193_17265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (10))){
var inst_17164 = (state_17178[(2)]);
var state_17178__$1 = state_17178;
var statearr_17194_17266 = state_17178__$1;
(statearr_17194_17266[(2)] = inst_17164);

(statearr_17194_17266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17179 === (8))){
var inst_17161 = cljs.core.async.close_BANG_.call(null,to);
var state_17178__$1 = state_17178;
var statearr_17195_17268 = state_17178__$1;
(statearr_17195_17268[(2)] = inst_17161);

(statearr_17195_17268[(1)] = (10));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_17196 = [null,null,null,null,null,null,null,null];
(statearr_17196[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_17196[(1)] = (1));

return statearr_17196;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_17178){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17197){var ex__14410__auto__ = e17197;
var statearr_17198_17273 = state_17178;
(statearr_17198_17273[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17178[(4)]))){
var statearr_17199_17274 = state_17178;
(statearr_17199_17274[(1)] = cljs.core.first.call(null,(state_17178[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17275 = state_17178;
state_17178 = G__17275;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_17178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_17178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17200 = f__14532__auto__.call(null);
(statearr_17200[(6)] = c__14531__auto___17252);

return statearr_17200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var process__$1 = (function (p__17201){
var vec__17202 = p__17201;
var v = cljs.core.nth.call(null,vec__17202,(0),null);
var p = cljs.core.nth.call(null,vec__17202,(1),null);
var job = vec__17202;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14531__auto___17517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17209){
var state_val_17210 = (state_17209[(1)]);
if((state_val_17210 === (1))){
var state_17209__$1 = state_17209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17209__$1,(2),res,v);
} else {
if((state_val_17210 === (2))){
var inst_17206 = (state_17209[(2)]);
var inst_17207 = cljs.core.async.close_BANG_.call(null,res);
var state_17209__$1 = (function (){var statearr_17211 = state_17209;
(statearr_17211[(7)] = inst_17206);

return statearr_17211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17209__$1,inst_17207);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_17212 = [null,null,null,null,null,null,null,null];
(statearr_17212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__);

(statearr_17212[(1)] = (1));

return statearr_17212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1 = (function (state_17209){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17213){var ex__14410__auto__ = e17213;
var statearr_17214_17538 = state_17209;
(statearr_17214_17538[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17209[(4)]))){
var statearr_17215_17540 = state_17209;
(statearr_17215_17540[(1)] = cljs.core.first.call(null,(state_17209[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17541 = state_17209;
state_17209 = G__17541;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = function(state_17209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1.call(this,state_17209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17216 = f__14532__auto__.call(null);
(statearr_17216[(6)] = c__14531__auto___17517);

return statearr_17216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__17217){
var vec__17218 = p__17217;
var v = cljs.core.nth.call(null,vec__17218,(0),null);
var p = cljs.core.nth.call(null,vec__17218,(1),null);
var job = vec__17218;
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
var n__5616__auto___17542 = n;
var __17543 = (0);
while(true){
if((__17543 < n__5616__auto___17542)){
var G__17221_17545 = type;
var G__17221_17546__$1 = (((G__17221_17545 instanceof cljs.core.Keyword))?G__17221_17545.fqn:null);
switch (G__17221_17546__$1) {
case "compute":
var c__14531__auto___17548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17543,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = ((function (__17543,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function (state_17234){
var state_val_17235 = (state_17234[(1)]);
if((state_val_17235 === (1))){
var state_17234__$1 = state_17234;
var statearr_17236_17549 = state_17234__$1;
(statearr_17236_17549[(2)] = null);

(statearr_17236_17549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (2))){
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17234__$1,(4),jobs);
} else {
if((state_val_17235 === (3))){
var inst_17232 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17234__$1,inst_17232);
} else {
if((state_val_17235 === (4))){
var inst_17224 = (state_17234[(2)]);
var inst_17225 = process__$1.call(null,inst_17224);
var state_17234__$1 = state_17234;
if(cljs.core.truth_(inst_17225)){
var statearr_17238_17550 = state_17234__$1;
(statearr_17238_17550[(1)] = (5));

} else {
var statearr_17240_17551 = state_17234__$1;
(statearr_17240_17551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (5))){
var state_17234__$1 = state_17234;
var statearr_17242_17552 = state_17234__$1;
(statearr_17242_17552[(2)] = null);

(statearr_17242_17552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (6))){
var state_17234__$1 = state_17234;
var statearr_17243_17553 = state_17234__$1;
(statearr_17243_17553[(2)] = null);

(statearr_17243_17553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17235 === (7))){
var inst_17230 = (state_17234[(2)]);
var state_17234__$1 = state_17234;
var statearr_17244_17554 = state_17234__$1;
(statearr_17244_17554[(2)] = inst_17230);

(statearr_17244_17554[(1)] = (3));


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
});})(__17543,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
;
return ((function (__17543,switch__14406__auto__,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_17245 = [null,null,null,null,null,null,null];
(statearr_17245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__);

(statearr_17245[(1)] = (1));

return statearr_17245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1 = (function (state_17234){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17246){var ex__14410__auto__ = e17246;
var statearr_17247_17555 = state_17234;
(statearr_17247_17555[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17234[(4)]))){
var statearr_17248_17556 = state_17234;
(statearr_17248_17556[(1)] = cljs.core.first.call(null,(state_17234[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17557 = state_17234;
state_17234 = G__17557;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = function(state_17234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1.call(this,state_17234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__;
})()
;})(__17543,switch__14406__auto__,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
})();
var state__14533__auto__ = (function (){var statearr_17316 = f__14532__auto__.call(null);
(statearr_17316[(6)] = c__14531__auto___17548);

return statearr_17316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
});})(__17543,c__14531__auto___17548,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
);


break;
case "async":
var c__14531__auto___17558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17543,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = ((function (__17543,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function (state_17330){
var state_val_17331 = (state_17330[(1)]);
if((state_val_17331 === (1))){
var state_17330__$1 = state_17330;
var statearr_17332_17559 = state_17330__$1;
(statearr_17332_17559[(2)] = null);

(statearr_17332_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (2))){
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17330__$1,(4),jobs);
} else {
if((state_val_17331 === (3))){
var inst_17328 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17330__$1,inst_17328);
} else {
if((state_val_17331 === (4))){
var inst_17319 = (state_17330[(2)]);
var inst_17320 = async.call(null,inst_17319);
var state_17330__$1 = state_17330;
if(cljs.core.truth_(inst_17320)){
var statearr_17334_17560 = state_17330__$1;
(statearr_17334_17560[(1)] = (5));

} else {
var statearr_17335_17561 = state_17330__$1;
(statearr_17335_17561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (5))){
var state_17330__$1 = state_17330;
var statearr_17336_17562 = state_17330__$1;
(statearr_17336_17562[(2)] = null);

(statearr_17336_17562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (6))){
var state_17330__$1 = state_17330;
var statearr_17338_17563 = state_17330__$1;
(statearr_17338_17563[(2)] = null);

(statearr_17338_17563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17331 === (7))){
var inst_17326 = (state_17330[(2)]);
var state_17330__$1 = state_17330;
var statearr_17340_17564 = state_17330__$1;
(statearr_17340_17564[(2)] = inst_17326);

(statearr_17340_17564[(1)] = (3));


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
});})(__17543,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
;
return ((function (__17543,switch__14406__auto__,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_17341 = [null,null,null,null,null,null,null];
(statearr_17341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__);

(statearr_17341[(1)] = (1));

return statearr_17341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1 = (function (state_17330){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17342){var ex__14410__auto__ = e17342;
var statearr_17343_17565 = state_17330;
(statearr_17343_17565[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17330[(4)]))){
var statearr_17344_17566 = state_17330;
(statearr_17344_17566[(1)] = cljs.core.first.call(null,(state_17330[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17567 = state_17330;
state_17330 = G__17567;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = function(state_17330){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1.call(this,state_17330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__;
})()
;})(__17543,switch__14406__auto__,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
})();
var state__14533__auto__ = (function (){var statearr_17345 = f__14532__auto__.call(null);
(statearr_17345[(6)] = c__14531__auto___17558);

return statearr_17345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
});})(__17543,c__14531__auto___17558,G__17221_17545,G__17221_17546__$1,n__5616__auto___17542,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17221_17546__$1)].join('')));

}

var G__17568 = (__17543 + (1));
__17543 = G__17568;
continue;
} else {
}
break;
}

var c__14531__auto___17569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17367){
var state_val_17368 = (state_17367[(1)]);
if((state_val_17368 === (7))){
var inst_17363 = (state_17367[(2)]);
var state_17367__$1 = state_17367;
var statearr_17369_17570 = state_17367__$1;
(statearr_17369_17570[(2)] = inst_17363);

(statearr_17369_17570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17368 === (1))){
var state_17367__$1 = state_17367;
var statearr_17370_17571 = state_17367__$1;
(statearr_17370_17571[(2)] = null);

(statearr_17370_17571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17368 === (4))){
var inst_17348 = (state_17367[(7)]);
var inst_17348__$1 = (state_17367[(2)]);
var inst_17349 = (inst_17348__$1 == null);
var state_17367__$1 = (function (){var statearr_17371 = state_17367;
(statearr_17371[(7)] = inst_17348__$1);

return statearr_17371;
})();
if(cljs.core.truth_(inst_17349)){
var statearr_17372_17572 = state_17367__$1;
(statearr_17372_17572[(1)] = (5));

} else {
var statearr_17373_17573 = state_17367__$1;
(statearr_17373_17573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17368 === (6))){
var inst_17348 = (state_17367[(7)]);
var inst_17353 = (state_17367[(8)]);
var inst_17353__$1 = cljs.core.async.chan.call(null,(1));
var inst_17354 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17355 = [inst_17348,inst_17353__$1];
var inst_17356 = (new cljs.core.PersistentVector(null,2,(5),inst_17354,inst_17355,null));
var state_17367__$1 = (function (){var statearr_17374 = state_17367;
(statearr_17374[(8)] = inst_17353__$1);

return statearr_17374;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17367__$1,(8),jobs,inst_17356);
} else {
if((state_val_17368 === (3))){
var inst_17365 = (state_17367[(2)]);
var state_17367__$1 = state_17367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17367__$1,inst_17365);
} else {
if((state_val_17368 === (2))){
var state_17367__$1 = state_17367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17367__$1,(4),from);
} else {
if((state_val_17368 === (9))){
var inst_17360 = (state_17367[(2)]);
var state_17367__$1 = (function (){var statearr_17377 = state_17367;
(statearr_17377[(9)] = inst_17360);

return statearr_17377;
})();
var statearr_17378_17575 = state_17367__$1;
(statearr_17378_17575[(2)] = null);

(statearr_17378_17575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17368 === (5))){
var inst_17351 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17367__$1 = state_17367;
var statearr_17379_17578 = state_17367__$1;
(statearr_17379_17578[(2)] = inst_17351);

(statearr_17379_17578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17368 === (8))){
var inst_17353 = (state_17367[(8)]);
var inst_17358 = (state_17367[(2)]);
var state_17367__$1 = (function (){var statearr_17384 = state_17367;
(statearr_17384[(10)] = inst_17358);

return statearr_17384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17367__$1,(9),results,inst_17353);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_17385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__);

(statearr_17385[(1)] = (1));

return statearr_17385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1 = (function (state_17367){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17386){var ex__14410__auto__ = e17386;
var statearr_17387_17583 = state_17367;
(statearr_17387_17583[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17367[(4)]))){
var statearr_17388_17584 = state_17367;
(statearr_17388_17584[(1)] = cljs.core.first.call(null,(state_17367[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17585 = state_17367;
state_17367 = G__17585;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = function(state_17367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1.call(this,state_17367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17389 = f__14532__auto__.call(null);
(statearr_17389[(6)] = c__14531__auto___17569);

return statearr_17389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17428){
var state_val_17429 = (state_17428[(1)]);
if((state_val_17429 === (7))){
var inst_17424 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17431_17587 = state_17428__$1;
(statearr_17431_17587[(2)] = inst_17424);

(statearr_17431_17587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (20))){
var state_17428__$1 = state_17428;
var statearr_17432_17588 = state_17428__$1;
(statearr_17432_17588[(2)] = null);

(statearr_17432_17588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (1))){
var state_17428__$1 = state_17428;
var statearr_17433_17590 = state_17428__$1;
(statearr_17433_17590[(2)] = null);

(statearr_17433_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (4))){
var inst_17393 = (state_17428[(7)]);
var inst_17393__$1 = (state_17428[(2)]);
var inst_17394 = (inst_17393__$1 == null);
var state_17428__$1 = (function (){var statearr_17434 = state_17428;
(statearr_17434[(7)] = inst_17393__$1);

return statearr_17434;
})();
if(cljs.core.truth_(inst_17394)){
var statearr_17435_17594 = state_17428__$1;
(statearr_17435_17594[(1)] = (5));

} else {
var statearr_17436_17596 = state_17428__$1;
(statearr_17436_17596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (15))){
var inst_17406 = (state_17428[(8)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17428__$1,(18),to,inst_17406);
} else {
if((state_val_17429 === (21))){
var inst_17419 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17439_17600 = state_17428__$1;
(statearr_17439_17600[(2)] = inst_17419);

(statearr_17439_17600[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (13))){
var inst_17421 = (state_17428[(2)]);
var state_17428__$1 = (function (){var statearr_17440 = state_17428;
(statearr_17440[(9)] = inst_17421);

return statearr_17440;
})();
var statearr_17441_17602 = state_17428__$1;
(statearr_17441_17602[(2)] = null);

(statearr_17441_17602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (6))){
var inst_17393 = (state_17428[(7)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17428__$1,(11),inst_17393);
} else {
if((state_val_17429 === (17))){
var inst_17414 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
if(cljs.core.truth_(inst_17414)){
var statearr_17442_17604 = state_17428__$1;
(statearr_17442_17604[(1)] = (19));

} else {
var statearr_17443_17606 = state_17428__$1;
(statearr_17443_17606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (3))){
var inst_17426 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17428__$1,inst_17426);
} else {
if((state_val_17429 === (12))){
var inst_17403 = (state_17428[(10)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17428__$1,(14),inst_17403);
} else {
if((state_val_17429 === (2))){
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17428__$1,(4),results);
} else {
if((state_val_17429 === (19))){
var state_17428__$1 = state_17428;
var statearr_17446_17612 = state_17428__$1;
(statearr_17446_17612[(2)] = null);

(statearr_17446_17612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (11))){
var inst_17403 = (state_17428[(2)]);
var state_17428__$1 = (function (){var statearr_17447 = state_17428;
(statearr_17447[(10)] = inst_17403);

return statearr_17447;
})();
var statearr_17448_17615 = state_17428__$1;
(statearr_17448_17615[(2)] = null);

(statearr_17448_17615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (9))){
var state_17428__$1 = state_17428;
var statearr_17449_17617 = state_17428__$1;
(statearr_17449_17617[(2)] = null);

(statearr_17449_17617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (5))){
var state_17428__$1 = state_17428;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17450_17619 = state_17428__$1;
(statearr_17450_17619[(1)] = (8));

} else {
var statearr_17451_17621 = state_17428__$1;
(statearr_17451_17621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (14))){
var inst_17406 = (state_17428[(8)]);
var inst_17408 = (state_17428[(11)]);
var inst_17406__$1 = (state_17428[(2)]);
var inst_17407 = (inst_17406__$1 == null);
var inst_17408__$1 = cljs.core.not.call(null,inst_17407);
var state_17428__$1 = (function (){var statearr_17452 = state_17428;
(statearr_17452[(8)] = inst_17406__$1);

(statearr_17452[(11)] = inst_17408__$1);

return statearr_17452;
})();
if(inst_17408__$1){
var statearr_17453_17626 = state_17428__$1;
(statearr_17453_17626[(1)] = (15));

} else {
var statearr_17454_17627 = state_17428__$1;
(statearr_17454_17627[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (16))){
var inst_17408 = (state_17428[(11)]);
var state_17428__$1 = state_17428;
var statearr_17455_17628 = state_17428__$1;
(statearr_17455_17628[(2)] = inst_17408);

(statearr_17455_17628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (10))){
var inst_17400 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17456_17629 = state_17428__$1;
(statearr_17456_17629[(2)] = inst_17400);

(statearr_17456_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (18))){
var inst_17411 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17457_17630 = state_17428__$1;
(statearr_17457_17630[(2)] = inst_17411);

(statearr_17457_17630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (8))){
var inst_17397 = cljs.core.async.close_BANG_.call(null,to);
var state_17428__$1 = state_17428;
var statearr_17458_17632 = state_17428__$1;
(statearr_17458_17632[(2)] = inst_17397);

(statearr_17458_17632[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_17459 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__);

(statearr_17459[(1)] = (1));

return statearr_17459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1 = (function (state_17428){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17460){var ex__14410__auto__ = e17460;
var statearr_17461_17634 = state_17428;
(statearr_17461_17634[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17428[(4)]))){
var statearr_17462_17635 = state_17428;
(statearr_17462_17635[(1)] = cljs.core.first.call(null,(state_17428[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17636 = state_17428;
state_17428 = G__17636;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17463 = f__14532__auto__.call(null);
(statearr_17463[(6)] = c__14531__auto__);

return statearr_17463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
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
var G__17465 = arguments.length;
switch (G__17465) {
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
var G__17468 = arguments.length;
switch (G__17468) {
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
var G__17480 = arguments.length;
switch (G__17480) {
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
var c__14531__auto___17683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17512){
var state_val_17513 = (state_17512[(1)]);
if((state_val_17513 === (7))){
var inst_17508 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
var statearr_17515_17689 = state_17512__$1;
(statearr_17515_17689[(2)] = inst_17508);

(statearr_17515_17689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (1))){
var state_17512__$1 = state_17512;
var statearr_17516_17696 = state_17512__$1;
(statearr_17516_17696[(2)] = null);

(statearr_17516_17696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (4))){
var inst_17489 = (state_17512[(7)]);
var inst_17489__$1 = (state_17512[(2)]);
var inst_17490 = (inst_17489__$1 == null);
var state_17512__$1 = (function (){var statearr_17518 = state_17512;
(statearr_17518[(7)] = inst_17489__$1);

return statearr_17518;
})();
if(cljs.core.truth_(inst_17490)){
var statearr_17519_17700 = state_17512__$1;
(statearr_17519_17700[(1)] = (5));

} else {
var statearr_17520_17701 = state_17512__$1;
(statearr_17520_17701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (13))){
var state_17512__$1 = state_17512;
var statearr_17521_17702 = state_17512__$1;
(statearr_17521_17702[(2)] = null);

(statearr_17521_17702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (6))){
var inst_17489 = (state_17512[(7)]);
var inst_17495 = p.call(null,inst_17489);
var state_17512__$1 = state_17512;
if(cljs.core.truth_(inst_17495)){
var statearr_17523_17705 = state_17512__$1;
(statearr_17523_17705[(1)] = (9));

} else {
var statearr_17524_17708 = state_17512__$1;
(statearr_17524_17708[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (3))){
var inst_17510 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17512__$1,inst_17510);
} else {
if((state_val_17513 === (12))){
var state_17512__$1 = state_17512;
var statearr_17525_17710 = state_17512__$1;
(statearr_17525_17710[(2)] = null);

(statearr_17525_17710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (2))){
var state_17512__$1 = state_17512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17512__$1,(4),ch);
} else {
if((state_val_17513 === (11))){
var inst_17489 = (state_17512[(7)]);
var inst_17499 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17512__$1,(8),inst_17499,inst_17489);
} else {
if((state_val_17513 === (9))){
var state_17512__$1 = state_17512;
var statearr_17526_17715 = state_17512__$1;
(statearr_17526_17715[(2)] = tc);

(statearr_17526_17715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (5))){
var inst_17492 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17493 = cljs.core.async.close_BANG_.call(null,fc);
var state_17512__$1 = (function (){var statearr_17527 = state_17512;
(statearr_17527[(8)] = inst_17492);

return statearr_17527;
})();
var statearr_17529_17718 = state_17512__$1;
(statearr_17529_17718[(2)] = inst_17493);

(statearr_17529_17718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (14))){
var inst_17506 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
var statearr_17531_17720 = state_17512__$1;
(statearr_17531_17720[(2)] = inst_17506);

(statearr_17531_17720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (10))){
var state_17512__$1 = state_17512;
var statearr_17532_17721 = state_17512__$1;
(statearr_17532_17721[(2)] = fc);

(statearr_17532_17721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17513 === (8))){
var inst_17501 = (state_17512[(2)]);
var state_17512__$1 = state_17512;
if(cljs.core.truth_(inst_17501)){
var statearr_17533_17723 = state_17512__$1;
(statearr_17533_17723[(1)] = (12));

} else {
var statearr_17534_17724 = state_17512__$1;
(statearr_17534_17724[(1)] = (13));

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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_17535 = [null,null,null,null,null,null,null,null,null];
(statearr_17535[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_17535[(1)] = (1));

return statearr_17535;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_17512){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17536){var ex__14410__auto__ = e17536;
var statearr_17537_17727 = state_17512;
(statearr_17537_17727[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17512[(4)]))){
var statearr_17624_17728 = state_17512;
(statearr_17624_17728[(1)] = cljs.core.first.call(null,(state_17512[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17735 = state_17512;
state_17512 = G__17735;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_17512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_17512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17631 = f__14532__auto__.call(null);
(statearr_17631[(6)] = c__14531__auto___17683);

return statearr_17631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17661){
var state_val_17666 = (state_17661[(1)]);
if((state_val_17666 === (7))){
var inst_17657 = (state_17661[(2)]);
var state_17661__$1 = state_17661;
var statearr_17678_17741 = state_17661__$1;
(statearr_17678_17741[(2)] = inst_17657);

(statearr_17678_17741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (1))){
var inst_17638 = init;
var inst_17639 = inst_17638;
var state_17661__$1 = (function (){var statearr_17687 = state_17661;
(statearr_17687[(7)] = inst_17639);

return statearr_17687;
})();
var statearr_17688_17746 = state_17661__$1;
(statearr_17688_17746[(2)] = null);

(statearr_17688_17746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (4))){
var inst_17644 = (state_17661[(8)]);
var inst_17644__$1 = (state_17661[(2)]);
var inst_17645 = (inst_17644__$1 == null);
var state_17661__$1 = (function (){var statearr_17697 = state_17661;
(statearr_17697[(8)] = inst_17644__$1);

return statearr_17697;
})();
if(cljs.core.truth_(inst_17645)){
var statearr_17698_17747 = state_17661__$1;
(statearr_17698_17747[(1)] = (5));

} else {
var statearr_17699_17748 = state_17661__$1;
(statearr_17699_17748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (6))){
var inst_17639 = (state_17661[(7)]);
var inst_17644 = (state_17661[(8)]);
var inst_17648 = (state_17661[(9)]);
var inst_17648__$1 = f.call(null,inst_17639,inst_17644);
var inst_17649 = cljs.core.reduced_QMARK_.call(null,inst_17648__$1);
var state_17661__$1 = (function (){var statearr_17703 = state_17661;
(statearr_17703[(9)] = inst_17648__$1);

return statearr_17703;
})();
if(inst_17649){
var statearr_17706_17750 = state_17661__$1;
(statearr_17706_17750[(1)] = (8));

} else {
var statearr_17707_17751 = state_17661__$1;
(statearr_17707_17751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (3))){
var inst_17659 = (state_17661[(2)]);
var state_17661__$1 = state_17661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17661__$1,inst_17659);
} else {
if((state_val_17666 === (2))){
var state_17661__$1 = state_17661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17661__$1,(4),ch);
} else {
if((state_val_17666 === (9))){
var inst_17648 = (state_17661[(9)]);
var inst_17639 = inst_17648;
var state_17661__$1 = (function (){var statearr_17714 = state_17661;
(statearr_17714[(7)] = inst_17639);

return statearr_17714;
})();
var statearr_17716_17752 = state_17661__$1;
(statearr_17716_17752[(2)] = null);

(statearr_17716_17752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (5))){
var inst_17639 = (state_17661[(7)]);
var state_17661__$1 = state_17661;
var statearr_17717_17753 = state_17661__$1;
(statearr_17717_17753[(2)] = inst_17639);

(statearr_17717_17753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (10))){
var inst_17655 = (state_17661[(2)]);
var state_17661__$1 = state_17661;
var statearr_17719_17754 = state_17661__$1;
(statearr_17719_17754[(2)] = inst_17655);

(statearr_17719_17754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17666 === (8))){
var inst_17648 = (state_17661[(9)]);
var inst_17651 = cljs.core.deref.call(null,inst_17648);
var state_17661__$1 = state_17661;
var statearr_17722_17757 = state_17661__$1;
(statearr_17722_17757[(2)] = inst_17651);

(statearr_17722_17757[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14407__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14407__auto____0 = (function (){
var statearr_17726 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17726[(0)] = cljs$core$async$reduce_$_state_machine__14407__auto__);

(statearr_17726[(1)] = (1));

return statearr_17726;
});
var cljs$core$async$reduce_$_state_machine__14407__auto____1 = (function (state_17661){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17729){var ex__14410__auto__ = e17729;
var statearr_17730_17758 = state_17661;
(statearr_17730_17758[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17661[(4)]))){
var statearr_17736_17759 = state_17661;
(statearr_17736_17759[(1)] = cljs.core.first.call(null,(state_17661[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17762 = state_17661;
state_17661 = G__17762;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14407__auto__ = function(state_17661){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14407__auto____1.call(this,state_17661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14407__auto____0;
cljs$core$async$reduce_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14407__auto____1;
return cljs$core$async$reduce_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17737 = f__14532__auto__.call(null);
(statearr_17737[(6)] = c__14531__auto__);

return statearr_17737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17776){
var state_val_17777 = (state_17776[(1)]);
if((state_val_17777 === (1))){
var inst_17771 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_17776__$1 = state_17776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17776__$1,(2),inst_17771);
} else {
if((state_val_17777 === (2))){
var inst_17773 = (state_17776[(2)]);
var inst_17774 = f__$1.call(null,inst_17773);
var state_17776__$1 = state_17776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17776__$1,inst_17774);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14407__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14407__auto____0 = (function (){
var statearr_17781 = [null,null,null,null,null,null,null];
(statearr_17781[(0)] = cljs$core$async$transduce_$_state_machine__14407__auto__);

(statearr_17781[(1)] = (1));

return statearr_17781;
});
var cljs$core$async$transduce_$_state_machine__14407__auto____1 = (function (state_17776){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17785){var ex__14410__auto__ = e17785;
var statearr_17786_17841 = state_17776;
(statearr_17786_17841[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17776[(4)]))){
var statearr_17787_17845 = state_17776;
(statearr_17787_17845[(1)] = cljs.core.first.call(null,(state_17776[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17848 = state_17776;
state_17776 = G__17848;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14407__auto__ = function(state_17776){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14407__auto____1.call(this,state_17776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14407__auto____0;
cljs$core$async$transduce_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14407__auto____1;
return cljs$core$async$transduce_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17788 = f__14532__auto__.call(null);
(statearr_17788[(6)] = c__14531__auto__);

return statearr_17788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
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
var G__17793 = arguments.length;
switch (G__17793) {
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
var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_17825){
var state_val_17826 = (state_17825[(1)]);
if((state_val_17826 === (7))){
var inst_17803 = (state_17825[(2)]);
var state_17825__$1 = state_17825;
var statearr_17827_17857 = state_17825__$1;
(statearr_17827_17857[(2)] = inst_17803);

(statearr_17827_17857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (1))){
var inst_17797 = cljs.core.seq.call(null,coll);
var inst_17798 = inst_17797;
var state_17825__$1 = (function (){var statearr_17828 = state_17825;
(statearr_17828[(7)] = inst_17798);

return statearr_17828;
})();
var statearr_17829_17858 = state_17825__$1;
(statearr_17829_17858[(2)] = null);

(statearr_17829_17858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (4))){
var inst_17798 = (state_17825[(7)]);
var inst_17801 = cljs.core.first.call(null,inst_17798);
var state_17825__$1 = state_17825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17825__$1,(7),ch,inst_17801);
} else {
if((state_val_17826 === (13))){
var inst_17818 = (state_17825[(2)]);
var state_17825__$1 = state_17825;
var statearr_17830_17859 = state_17825__$1;
(statearr_17830_17859[(2)] = inst_17818);

(statearr_17830_17859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (6))){
var inst_17806 = (state_17825[(2)]);
var state_17825__$1 = state_17825;
if(cljs.core.truth_(inst_17806)){
var statearr_17831_17860 = state_17825__$1;
(statearr_17831_17860[(1)] = (8));

} else {
var statearr_17832_17861 = state_17825__$1;
(statearr_17832_17861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (3))){
var inst_17822 = (state_17825[(2)]);
var state_17825__$1 = state_17825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17825__$1,inst_17822);
} else {
if((state_val_17826 === (12))){
var state_17825__$1 = state_17825;
var statearr_17833_17862 = state_17825__$1;
(statearr_17833_17862[(2)] = null);

(statearr_17833_17862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (2))){
var inst_17798 = (state_17825[(7)]);
var state_17825__$1 = state_17825;
if(cljs.core.truth_(inst_17798)){
var statearr_17834_17863 = state_17825__$1;
(statearr_17834_17863[(1)] = (4));

} else {
var statearr_17836_17864 = state_17825__$1;
(statearr_17836_17864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (11))){
var inst_17815 = cljs.core.async.close_BANG_.call(null,ch);
var state_17825__$1 = state_17825;
var statearr_17837_17865 = state_17825__$1;
(statearr_17837_17865[(2)] = inst_17815);

(statearr_17837_17865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (9))){
var state_17825__$1 = state_17825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17838_17866 = state_17825__$1;
(statearr_17838_17866[(1)] = (11));

} else {
var statearr_17839_17867 = state_17825__$1;
(statearr_17839_17867[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (5))){
var inst_17798 = (state_17825[(7)]);
var state_17825__$1 = state_17825;
var statearr_17843_17871 = state_17825__$1;
(statearr_17843_17871[(2)] = inst_17798);

(statearr_17843_17871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (10))){
var inst_17820 = (state_17825[(2)]);
var state_17825__$1 = state_17825;
var statearr_17844_17872 = state_17825__$1;
(statearr_17844_17872[(2)] = inst_17820);

(statearr_17844_17872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17826 === (8))){
var inst_17798 = (state_17825[(7)]);
var inst_17809 = cljs.core.next.call(null,inst_17798);
var inst_17798__$1 = inst_17809;
var state_17825__$1 = (function (){var statearr_17846 = state_17825;
(statearr_17846[(7)] = inst_17798__$1);

return statearr_17846;
})();
var statearr_17847_17873 = state_17825__$1;
(statearr_17847_17873[(2)] = null);

(statearr_17847_17873[(1)] = (2));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_17849 = [null,null,null,null,null,null,null,null];
(statearr_17849[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_17849[(1)] = (1));

return statearr_17849;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_17825){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_17825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e17850){var ex__14410__auto__ = e17850;
var statearr_17851_17907 = state_17825;
(statearr_17851_17907[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_17825[(4)]))){
var statearr_17852_17910 = state_17825;
(statearr_17852_17910[(1)] = cljs.core.first.call(null,(state_17825[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17921 = state_17825;
state_17825 = G__17921;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_17825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_17825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_17853 = f__14532__auto__.call(null);
(statearr_17853[(6)] = c__14531__auto__);

return statearr_17853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
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
var G__17855 = arguments.length;
switch (G__17855) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17997 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_17997.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18013 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18013.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18014 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18014.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18016 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18016.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17868 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17868 = (function (ch,cs,meta17869){
this.ch = ch;
this.cs = cs;
this.meta17869 = meta17869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17870,meta17869__$1){
var self__ = this;
var _17870__$1 = this;
return (new cljs.core.async.t_cljs$core$async17868(self__.ch,self__.cs,meta17869__$1));
}));

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17870){
var self__ = this;
var _17870__$1 = this;
return self__.meta17869;
}));

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17868.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17869","meta17869",-2045731802,null)], null);
}));

(cljs.core.async.t_cljs$core$async17868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17868");

(cljs.core.async.t_cljs$core$async17868.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async17868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17868.
 */
cljs.core.async.__GT_t_cljs$core$async17868 = (function cljs$core$async$mult_$___GT_t_cljs$core$async17868(ch__$1,cs__$1,meta17869){
return (new cljs.core.async.t_cljs$core$async17868(ch__$1,cs__$1,meta17869));
});

}

return (new cljs.core.async.t_cljs$core$async17868(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14531__auto___18119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18011){
var state_val_18012 = (state_18011[(1)]);
if((state_val_18012 === (7))){
var inst_18007 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18015_18120 = state_18011__$1;
(statearr_18015_18120[(2)] = inst_18007);

(statearr_18015_18120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (20))){
var inst_17908 = (state_18011[(7)]);
var inst_17922 = cljs.core.first.call(null,inst_17908);
var inst_17923 = cljs.core.nth.call(null,inst_17922,(0),null);
var inst_17924 = cljs.core.nth.call(null,inst_17922,(1),null);
var state_18011__$1 = (function (){var statearr_18017 = state_18011;
(statearr_18017[(8)] = inst_17923);

return statearr_18017;
})();
if(cljs.core.truth_(inst_17924)){
var statearr_18018_18124 = state_18011__$1;
(statearr_18018_18124[(1)] = (22));

} else {
var statearr_18019_18128 = state_18011__$1;
(statearr_18019_18128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (27))){
var inst_17952 = (state_18011[(9)]);
var inst_17954 = (state_18011[(10)]);
var inst_17959 = (state_18011[(11)]);
var inst_17876 = (state_18011[(12)]);
var inst_17959__$1 = cljs.core._nth.call(null,inst_17952,inst_17954);
var inst_17961 = cljs.core.async.put_BANG_.call(null,inst_17959__$1,inst_17876,done);
var state_18011__$1 = (function (){var statearr_18020 = state_18011;
(statearr_18020[(11)] = inst_17959__$1);

return statearr_18020;
})();
if(cljs.core.truth_(inst_17961)){
var statearr_18021_18134 = state_18011__$1;
(statearr_18021_18134[(1)] = (30));

} else {
var statearr_18022_18135 = state_18011__$1;
(statearr_18022_18135[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (1))){
var state_18011__$1 = state_18011;
var statearr_18023_18136 = state_18011__$1;
(statearr_18023_18136[(2)] = null);

(statearr_18023_18136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (24))){
var inst_17908 = (state_18011[(7)]);
var inst_17929 = (state_18011[(2)]);
var inst_17930 = cljs.core.next.call(null,inst_17908);
var inst_17885 = inst_17930;
var inst_17886 = null;
var inst_17887 = (0);
var inst_17888 = (0);
var state_18011__$1 = (function (){var statearr_18024 = state_18011;
(statearr_18024[(13)] = inst_17929);

(statearr_18024[(14)] = inst_17885);

(statearr_18024[(15)] = inst_17886);

(statearr_18024[(16)] = inst_17887);

(statearr_18024[(17)] = inst_17888);

return statearr_18024;
})();
var statearr_18025_18140 = state_18011__$1;
(statearr_18025_18140[(2)] = null);

(statearr_18025_18140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (39))){
var state_18011__$1 = state_18011;
var statearr_18029_18141 = state_18011__$1;
(statearr_18029_18141[(2)] = null);

(statearr_18029_18141[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (4))){
var inst_17876 = (state_18011[(12)]);
var inst_17876__$1 = (state_18011[(2)]);
var inst_17877 = (inst_17876__$1 == null);
var state_18011__$1 = (function (){var statearr_18030 = state_18011;
(statearr_18030[(12)] = inst_17876__$1);

return statearr_18030;
})();
if(cljs.core.truth_(inst_17877)){
var statearr_18031_18142 = state_18011__$1;
(statearr_18031_18142[(1)] = (5));

} else {
var statearr_18032_18143 = state_18011__$1;
(statearr_18032_18143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (15))){
var inst_17888 = (state_18011[(17)]);
var inst_17885 = (state_18011[(14)]);
var inst_17886 = (state_18011[(15)]);
var inst_17887 = (state_18011[(16)]);
var inst_17903 = (state_18011[(2)]);
var inst_17904 = (inst_17888 + (1));
var tmp18026 = inst_17886;
var tmp18027 = inst_17885;
var tmp18028 = inst_17887;
var inst_17885__$1 = tmp18027;
var inst_17886__$1 = tmp18026;
var inst_17887__$1 = tmp18028;
var inst_17888__$1 = inst_17904;
var state_18011__$1 = (function (){var statearr_18033 = state_18011;
(statearr_18033[(18)] = inst_17903);

(statearr_18033[(14)] = inst_17885__$1);

(statearr_18033[(15)] = inst_17886__$1);

(statearr_18033[(16)] = inst_17887__$1);

(statearr_18033[(17)] = inst_17888__$1);

return statearr_18033;
})();
var statearr_18034_18144 = state_18011__$1;
(statearr_18034_18144[(2)] = null);

(statearr_18034_18144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (21))){
var inst_17933 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18038_18145 = state_18011__$1;
(statearr_18038_18145[(2)] = inst_17933);

(statearr_18038_18145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (31))){
var inst_17959 = (state_18011[(11)]);
var inst_17964 = cljs.core.async.untap_STAR_.call(null,m,inst_17959);
var state_18011__$1 = state_18011;
var statearr_18040_18146 = state_18011__$1;
(statearr_18040_18146[(2)] = inst_17964);

(statearr_18040_18146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (32))){
var inst_17954 = (state_18011[(10)]);
var inst_17951 = (state_18011[(19)]);
var inst_17952 = (state_18011[(9)]);
var inst_17953 = (state_18011[(20)]);
var inst_17966 = (state_18011[(2)]);
var inst_17967 = (inst_17954 + (1));
var tmp18035 = inst_17953;
var tmp18036 = inst_17951;
var tmp18037 = inst_17952;
var inst_17951__$1 = tmp18036;
var inst_17952__$1 = tmp18037;
var inst_17953__$1 = tmp18035;
var inst_17954__$1 = inst_17967;
var state_18011__$1 = (function (){var statearr_18048 = state_18011;
(statearr_18048[(21)] = inst_17966);

(statearr_18048[(19)] = inst_17951__$1);

(statearr_18048[(9)] = inst_17952__$1);

(statearr_18048[(20)] = inst_17953__$1);

(statearr_18048[(10)] = inst_17954__$1);

return statearr_18048;
})();
var statearr_18049_18150 = state_18011__$1;
(statearr_18049_18150[(2)] = null);

(statearr_18049_18150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (40))){
var inst_17979 = (state_18011[(22)]);
var inst_17983 = cljs.core.async.untap_STAR_.call(null,m,inst_17979);
var state_18011__$1 = state_18011;
var statearr_18050_18152 = state_18011__$1;
(statearr_18050_18152[(2)] = inst_17983);

(statearr_18050_18152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (33))){
var inst_17970 = (state_18011[(23)]);
var inst_17972 = cljs.core.chunked_seq_QMARK_.call(null,inst_17970);
var state_18011__$1 = state_18011;
if(inst_17972){
var statearr_18051_18160 = state_18011__$1;
(statearr_18051_18160[(1)] = (36));

} else {
var statearr_18052_18162 = state_18011__$1;
(statearr_18052_18162[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (13))){
var inst_17897 = (state_18011[(24)]);
var inst_17900 = cljs.core.async.close_BANG_.call(null,inst_17897);
var state_18011__$1 = state_18011;
var statearr_18053_18172 = state_18011__$1;
(statearr_18053_18172[(2)] = inst_17900);

(statearr_18053_18172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (22))){
var inst_17923 = (state_18011[(8)]);
var inst_17926 = cljs.core.async.close_BANG_.call(null,inst_17923);
var state_18011__$1 = state_18011;
var statearr_18054_18180 = state_18011__$1;
(statearr_18054_18180[(2)] = inst_17926);

(statearr_18054_18180[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (36))){
var inst_17970 = (state_18011[(23)]);
var inst_17974 = cljs.core.chunk_first.call(null,inst_17970);
var inst_17975 = cljs.core.chunk_rest.call(null,inst_17970);
var inst_17976 = cljs.core.count.call(null,inst_17974);
var inst_17951 = inst_17975;
var inst_17952 = inst_17974;
var inst_17953 = inst_17976;
var inst_17954 = (0);
var state_18011__$1 = (function (){var statearr_18055 = state_18011;
(statearr_18055[(19)] = inst_17951);

(statearr_18055[(9)] = inst_17952);

(statearr_18055[(20)] = inst_17953);

(statearr_18055[(10)] = inst_17954);

return statearr_18055;
})();
var statearr_18056_18213 = state_18011__$1;
(statearr_18056_18213[(2)] = null);

(statearr_18056_18213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (41))){
var inst_17970 = (state_18011[(23)]);
var inst_17985 = (state_18011[(2)]);
var inst_17986 = cljs.core.next.call(null,inst_17970);
var inst_17951 = inst_17986;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18011__$1 = (function (){var statearr_18057 = state_18011;
(statearr_18057[(25)] = inst_17985);

(statearr_18057[(19)] = inst_17951);

(statearr_18057[(9)] = inst_17952);

(statearr_18057[(20)] = inst_17953);

(statearr_18057[(10)] = inst_17954);

return statearr_18057;
})();
var statearr_18058_18223 = state_18011__$1;
(statearr_18058_18223[(2)] = null);

(statearr_18058_18223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (43))){
var state_18011__$1 = state_18011;
var statearr_18059_18224 = state_18011__$1;
(statearr_18059_18224[(2)] = null);

(statearr_18059_18224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (29))){
var inst_17994 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18060_18226 = state_18011__$1;
(statearr_18060_18226[(2)] = inst_17994);

(statearr_18060_18226[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (44))){
var inst_18004 = (state_18011[(2)]);
var state_18011__$1 = (function (){var statearr_18061 = state_18011;
(statearr_18061[(26)] = inst_18004);

return statearr_18061;
})();
var statearr_18062_18228 = state_18011__$1;
(statearr_18062_18228[(2)] = null);

(statearr_18062_18228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (6))){
var inst_17943 = (state_18011[(27)]);
var inst_17942 = cljs.core.deref.call(null,cs);
var inst_17943__$1 = cljs.core.keys.call(null,inst_17942);
var inst_17944 = cljs.core.count.call(null,inst_17943__$1);
var inst_17945 = cljs.core.reset_BANG_.call(null,dctr,inst_17944);
var inst_17950 = cljs.core.seq.call(null,inst_17943__$1);
var inst_17951 = inst_17950;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18011__$1 = (function (){var statearr_18063 = state_18011;
(statearr_18063[(27)] = inst_17943__$1);

(statearr_18063[(28)] = inst_17945);

(statearr_18063[(19)] = inst_17951);

(statearr_18063[(9)] = inst_17952);

(statearr_18063[(20)] = inst_17953);

(statearr_18063[(10)] = inst_17954);

return statearr_18063;
})();
var statearr_18064_18231 = state_18011__$1;
(statearr_18064_18231[(2)] = null);

(statearr_18064_18231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (28))){
var inst_17951 = (state_18011[(19)]);
var inst_17970 = (state_18011[(23)]);
var inst_17970__$1 = cljs.core.seq.call(null,inst_17951);
var state_18011__$1 = (function (){var statearr_18065 = state_18011;
(statearr_18065[(23)] = inst_17970__$1);

return statearr_18065;
})();
if(inst_17970__$1){
var statearr_18066_18234 = state_18011__$1;
(statearr_18066_18234[(1)] = (33));

} else {
var statearr_18067_18235 = state_18011__$1;
(statearr_18067_18235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (25))){
var inst_17954 = (state_18011[(10)]);
var inst_17953 = (state_18011[(20)]);
var inst_17956 = (inst_17954 < inst_17953);
var inst_17957 = inst_17956;
var state_18011__$1 = state_18011;
if(cljs.core.truth_(inst_17957)){
var statearr_18068_18239 = state_18011__$1;
(statearr_18068_18239[(1)] = (27));

} else {
var statearr_18069_18240 = state_18011__$1;
(statearr_18069_18240[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (34))){
var state_18011__$1 = state_18011;
var statearr_18070_18241 = state_18011__$1;
(statearr_18070_18241[(2)] = null);

(statearr_18070_18241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (17))){
var state_18011__$1 = state_18011;
var statearr_18071_18243 = state_18011__$1;
(statearr_18071_18243[(2)] = null);

(statearr_18071_18243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (3))){
var inst_18009 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18011__$1,inst_18009);
} else {
if((state_val_18012 === (12))){
var inst_17938 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18072_18248 = state_18011__$1;
(statearr_18072_18248[(2)] = inst_17938);

(statearr_18072_18248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (2))){
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18011__$1,(4),ch);
} else {
if((state_val_18012 === (23))){
var state_18011__$1 = state_18011;
var statearr_18084_18250 = state_18011__$1;
(statearr_18084_18250[(2)] = null);

(statearr_18084_18250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (35))){
var inst_17992 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18085_18252 = state_18011__$1;
(statearr_18085_18252[(2)] = inst_17992);

(statearr_18085_18252[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (19))){
var inst_17908 = (state_18011[(7)]);
var inst_17913 = cljs.core.chunk_first.call(null,inst_17908);
var inst_17914 = cljs.core.chunk_rest.call(null,inst_17908);
var inst_17915 = cljs.core.count.call(null,inst_17913);
var inst_17885 = inst_17914;
var inst_17886 = inst_17913;
var inst_17887 = inst_17915;
var inst_17888 = (0);
var state_18011__$1 = (function (){var statearr_18086 = state_18011;
(statearr_18086[(14)] = inst_17885);

(statearr_18086[(15)] = inst_17886);

(statearr_18086[(16)] = inst_17887);

(statearr_18086[(17)] = inst_17888);

return statearr_18086;
})();
var statearr_18087_18255 = state_18011__$1;
(statearr_18087_18255[(2)] = null);

(statearr_18087_18255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (11))){
var inst_17885 = (state_18011[(14)]);
var inst_17908 = (state_18011[(7)]);
var inst_17908__$1 = cljs.core.seq.call(null,inst_17885);
var state_18011__$1 = (function (){var statearr_18088 = state_18011;
(statearr_18088[(7)] = inst_17908__$1);

return statearr_18088;
})();
if(inst_17908__$1){
var statearr_18089_18257 = state_18011__$1;
(statearr_18089_18257[(1)] = (16));

} else {
var statearr_18090_18258 = state_18011__$1;
(statearr_18090_18258[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (9))){
var inst_17940 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18091_18260 = state_18011__$1;
(statearr_18091_18260[(2)] = inst_17940);

(statearr_18091_18260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (5))){
var inst_17883 = cljs.core.deref.call(null,cs);
var inst_17884 = cljs.core.seq.call(null,inst_17883);
var inst_17885 = inst_17884;
var inst_17886 = null;
var inst_17887 = (0);
var inst_17888 = (0);
var state_18011__$1 = (function (){var statearr_18092 = state_18011;
(statearr_18092[(14)] = inst_17885);

(statearr_18092[(15)] = inst_17886);

(statearr_18092[(16)] = inst_17887);

(statearr_18092[(17)] = inst_17888);

return statearr_18092;
})();
var statearr_18093_18262 = state_18011__$1;
(statearr_18093_18262[(2)] = null);

(statearr_18093_18262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (14))){
var state_18011__$1 = state_18011;
var statearr_18094_18263 = state_18011__$1;
(statearr_18094_18263[(2)] = null);

(statearr_18094_18263[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (45))){
var inst_18001 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18095_18265 = state_18011__$1;
(statearr_18095_18265[(2)] = inst_18001);

(statearr_18095_18265[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (26))){
var inst_17943 = (state_18011[(27)]);
var inst_17996 = (state_18011[(2)]);
var inst_17998 = cljs.core.seq.call(null,inst_17943);
var state_18011__$1 = (function (){var statearr_18096 = state_18011;
(statearr_18096[(29)] = inst_17996);

return statearr_18096;
})();
if(inst_17998){
var statearr_18097_18268 = state_18011__$1;
(statearr_18097_18268[(1)] = (42));

} else {
var statearr_18098_18269 = state_18011__$1;
(statearr_18098_18269[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (16))){
var inst_17908 = (state_18011[(7)]);
var inst_17911 = cljs.core.chunked_seq_QMARK_.call(null,inst_17908);
var state_18011__$1 = state_18011;
if(inst_17911){
var statearr_18099_18271 = state_18011__$1;
(statearr_18099_18271[(1)] = (19));

} else {
var statearr_18100_18272 = state_18011__$1;
(statearr_18100_18272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (38))){
var inst_17989 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18101_18274 = state_18011__$1;
(statearr_18101_18274[(2)] = inst_17989);

(statearr_18101_18274[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (30))){
var state_18011__$1 = state_18011;
var statearr_18102_18276 = state_18011__$1;
(statearr_18102_18276[(2)] = null);

(statearr_18102_18276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (10))){
var inst_17886 = (state_18011[(15)]);
var inst_17888 = (state_18011[(17)]);
var inst_17896 = cljs.core._nth.call(null,inst_17886,inst_17888);
var inst_17897 = cljs.core.nth.call(null,inst_17896,(0),null);
var inst_17898 = cljs.core.nth.call(null,inst_17896,(1),null);
var state_18011__$1 = (function (){var statearr_18103 = state_18011;
(statearr_18103[(24)] = inst_17897);

return statearr_18103;
})();
if(cljs.core.truth_(inst_17898)){
var statearr_18104_18280 = state_18011__$1;
(statearr_18104_18280[(1)] = (13));

} else {
var statearr_18105_18281 = state_18011__$1;
(statearr_18105_18281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (18))){
var inst_17936 = (state_18011[(2)]);
var state_18011__$1 = state_18011;
var statearr_18106_18283 = state_18011__$1;
(statearr_18106_18283[(2)] = inst_17936);

(statearr_18106_18283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (42))){
var state_18011__$1 = state_18011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18011__$1,(45),dchan);
} else {
if((state_val_18012 === (37))){
var inst_17970 = (state_18011[(23)]);
var inst_17979 = (state_18011[(22)]);
var inst_17876 = (state_18011[(12)]);
var inst_17979__$1 = cljs.core.first.call(null,inst_17970);
var inst_17980 = cljs.core.async.put_BANG_.call(null,inst_17979__$1,inst_17876,done);
var state_18011__$1 = (function (){var statearr_18107 = state_18011;
(statearr_18107[(22)] = inst_17979__$1);

return statearr_18107;
})();
if(cljs.core.truth_(inst_17980)){
var statearr_18108_18296 = state_18011__$1;
(statearr_18108_18296[(1)] = (39));

} else {
var statearr_18109_18297 = state_18011__$1;
(statearr_18109_18297[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18012 === (8))){
var inst_17888 = (state_18011[(17)]);
var inst_17887 = (state_18011[(16)]);
var inst_17890 = (inst_17888 < inst_17887);
var inst_17891 = inst_17890;
var state_18011__$1 = state_18011;
if(cljs.core.truth_(inst_17891)){
var statearr_18110_18300 = state_18011__$1;
(statearr_18110_18300[(1)] = (10));

} else {
var statearr_18111_18301 = state_18011__$1;
(statearr_18111_18301[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14407__auto__ = null;
var cljs$core$async$mult_$_state_machine__14407__auto____0 = (function (){
var statearr_18112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18112[(0)] = cljs$core$async$mult_$_state_machine__14407__auto__);

(statearr_18112[(1)] = (1));

return statearr_18112;
});
var cljs$core$async$mult_$_state_machine__14407__auto____1 = (function (state_18011){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18113){var ex__14410__auto__ = e18113;
var statearr_18114_18303 = state_18011;
(statearr_18114_18303[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18011[(4)]))){
var statearr_18115_18304 = state_18011;
(statearr_18115_18304[(1)] = cljs.core.first.call(null,(state_18011[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18307 = state_18011;
state_18011 = G__18307;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14407__auto__ = function(state_18011){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14407__auto____1.call(this,state_18011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14407__auto____0;
cljs$core$async$mult_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14407__auto____1;
return cljs$core$async$mult_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18116 = f__14532__auto__.call(null);
(statearr_18116[(6)] = c__14531__auto___18119);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var G__18118 = arguments.length;
switch (G__18118) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18315 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18315.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18321 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18321.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18326 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18326.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18338 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18338.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18357 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18357.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___18400 = arguments.length;
var i__5750__auto___18401 = (0);
while(true){
if((i__5750__auto___18401 < len__5749__auto___18400)){
args__5755__auto__.push((arguments[i__5750__auto___18401]));

var G__18402 = (i__5750__auto___18401 + (1));
i__5750__auto___18401 = G__18402;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18129){
var map__18130 = p__18129;
var map__18130__$1 = cljs.core.__destructure_map.call(null,map__18130);
var opts = map__18130__$1;
var statearr_18131_18405 = state;
(statearr_18131_18405[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18132_18406 = state;
(statearr_18132_18406[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_18133_18408 = state;
(statearr_18133_18408[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18123){
var G__18125 = cljs.core.first.call(null,seq18123);
var seq18123__$1 = cljs.core.next.call(null,seq18123);
var G__18126 = cljs.core.first.call(null,seq18123__$1);
var seq18123__$2 = cljs.core.next.call(null,seq18123__$1);
var G__18127 = cljs.core.first.call(null,seq18123__$2);
var seq18123__$3 = cljs.core.next.call(null,seq18123__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18125,G__18126,G__18127,seq18123__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18137 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18138){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18138 = meta18138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18139,meta18138__$1){
var self__ = this;
var _18139__$1 = this;
return (new cljs.core.async.t_cljs$core$async18137(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18138__$1));
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18139){
var self__ = this;
var _18139__$1 = this;
return self__.meta18138;
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18137.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18138","meta18138",1172686051,null)], null);
}));

(cljs.core.async.t_cljs$core$async18137.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18137");

(cljs.core.async.t_cljs$core$async18137.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18137");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18137.
 */
cljs.core.async.__GT_t_cljs$core$async18137 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18138){
return (new cljs.core.async.t_cljs$core$async18137(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18138));
});

}

return (new cljs.core.async.t_cljs$core$async18137(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14531__auto___18433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18221){
var state_val_18222 = (state_18221[(1)]);
if((state_val_18222 === (7))){
var inst_18179 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18179)){
var statearr_18225_18437 = state_18221__$1;
(statearr_18225_18437[(1)] = (8));

} else {
var statearr_18227_18438 = state_18221__$1;
(statearr_18227_18438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (20))){
var inst_18171 = (state_18221[(7)]);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18221__$1,(23),out,inst_18171);
} else {
if((state_val_18222 === (1))){
var inst_18151 = calc_state.call(null);
var inst_18153 = cljs.core.__destructure_map.call(null,inst_18151);
var inst_18154 = cljs.core.get.call(null,inst_18153,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18155 = cljs.core.get.call(null,inst_18153,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18156 = cljs.core.get.call(null,inst_18153,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18157 = inst_18151;
var state_18221__$1 = (function (){var statearr_18229 = state_18221;
(statearr_18229[(8)] = inst_18154);

(statearr_18229[(9)] = inst_18155);

(statearr_18229[(10)] = inst_18156);

(statearr_18229[(11)] = inst_18157);

return statearr_18229;
})();
var statearr_18230_18445 = state_18221__$1;
(statearr_18230_18445[(2)] = null);

(statearr_18230_18445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (24))){
var inst_18161 = (state_18221[(12)]);
var inst_18157 = inst_18161;
var state_18221__$1 = (function (){var statearr_18232 = state_18221;
(statearr_18232[(11)] = inst_18157);

return statearr_18232;
})();
var statearr_18233_18448 = state_18221__$1;
(statearr_18233_18448[(2)] = null);

(statearr_18233_18448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (4))){
var inst_18171 = (state_18221[(7)]);
var inst_18174 = (state_18221[(13)]);
var inst_18170 = (state_18221[(2)]);
var inst_18171__$1 = cljs.core.nth.call(null,inst_18170,(0),null);
var inst_18173 = cljs.core.nth.call(null,inst_18170,(1),null);
var inst_18174__$1 = (inst_18171__$1 == null);
var state_18221__$1 = (function (){var statearr_18236 = state_18221;
(statearr_18236[(7)] = inst_18171__$1);

(statearr_18236[(14)] = inst_18173);

(statearr_18236[(13)] = inst_18174__$1);

return statearr_18236;
})();
if(cljs.core.truth_(inst_18174__$1)){
var statearr_18237_18451 = state_18221__$1;
(statearr_18237_18451[(1)] = (5));

} else {
var statearr_18238_18452 = state_18221__$1;
(statearr_18238_18452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (15))){
var inst_18163 = (state_18221[(15)]);
var inst_18194 = (state_18221[(16)]);
var inst_18194__$1 = cljs.core.empty_QMARK_.call(null,inst_18163);
var state_18221__$1 = (function (){var statearr_18242 = state_18221;
(statearr_18242[(16)] = inst_18194__$1);

return statearr_18242;
})();
if(inst_18194__$1){
var statearr_18244_18455 = state_18221__$1;
(statearr_18244_18455[(1)] = (17));

} else {
var statearr_18245_18457 = state_18221__$1;
(statearr_18245_18457[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (21))){
var inst_18161 = (state_18221[(12)]);
var inst_18157 = inst_18161;
var state_18221__$1 = (function (){var statearr_18246 = state_18221;
(statearr_18246[(11)] = inst_18157);

return statearr_18246;
})();
var statearr_18247_18460 = state_18221__$1;
(statearr_18247_18460[(2)] = null);

(statearr_18247_18460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (13))){
var inst_18187 = (state_18221[(2)]);
var inst_18188 = calc_state.call(null);
var inst_18157 = inst_18188;
var state_18221__$1 = (function (){var statearr_18249 = state_18221;
(statearr_18249[(17)] = inst_18187);

(statearr_18249[(11)] = inst_18157);

return statearr_18249;
})();
var statearr_18251_18461 = state_18221__$1;
(statearr_18251_18461[(2)] = null);

(statearr_18251_18461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (22))){
var inst_18215 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18253_18463 = state_18221__$1;
(statearr_18253_18463[(2)] = inst_18215);

(statearr_18253_18463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (6))){
var inst_18173 = (state_18221[(14)]);
var inst_18177 = cljs.core._EQ_.call(null,inst_18173,change);
var state_18221__$1 = state_18221;
var statearr_18254_18466 = state_18221__$1;
(statearr_18254_18466[(2)] = inst_18177);

(statearr_18254_18466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (25))){
var state_18221__$1 = state_18221;
var statearr_18256_18468 = state_18221__$1;
(statearr_18256_18468[(2)] = null);

(statearr_18256_18468[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (17))){
var inst_18164 = (state_18221[(18)]);
var inst_18173 = (state_18221[(14)]);
var inst_18196 = inst_18164.call(null,inst_18173);
var inst_18197 = cljs.core.not.call(null,inst_18196);
var state_18221__$1 = state_18221;
var statearr_18259_18469 = state_18221__$1;
(statearr_18259_18469[(2)] = inst_18197);

(statearr_18259_18469[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (3))){
var inst_18219 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18221__$1,inst_18219);
} else {
if((state_val_18222 === (12))){
var state_18221__$1 = state_18221;
var statearr_18261_18471 = state_18221__$1;
(statearr_18261_18471[(2)] = null);

(statearr_18261_18471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (2))){
var inst_18157 = (state_18221[(11)]);
var inst_18161 = (state_18221[(12)]);
var inst_18161__$1 = cljs.core.__destructure_map.call(null,inst_18157);
var inst_18163 = cljs.core.get.call(null,inst_18161__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18164 = cljs.core.get.call(null,inst_18161__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18165 = cljs.core.get.call(null,inst_18161__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18221__$1 = (function (){var statearr_18264 = state_18221;
(statearr_18264[(12)] = inst_18161__$1);

(statearr_18264[(15)] = inst_18163);

(statearr_18264[(18)] = inst_18164);

return statearr_18264;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18221__$1,(4),inst_18165);
} else {
if((state_val_18222 === (23))){
var inst_18205 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18205)){
var statearr_18266_18473 = state_18221__$1;
(statearr_18266_18473[(1)] = (24));

} else {
var statearr_18267_18475 = state_18221__$1;
(statearr_18267_18475[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (19))){
var inst_18200 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18270_18476 = state_18221__$1;
(statearr_18270_18476[(2)] = inst_18200);

(statearr_18270_18476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (11))){
var inst_18173 = (state_18221[(14)]);
var inst_18184 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18173);
var state_18221__$1 = state_18221;
var statearr_18273_18477 = state_18221__$1;
(statearr_18273_18477[(2)] = inst_18184);

(statearr_18273_18477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (9))){
var inst_18163 = (state_18221[(15)]);
var inst_18173 = (state_18221[(14)]);
var inst_18191 = (state_18221[(19)]);
var inst_18191__$1 = inst_18163.call(null,inst_18173);
var state_18221__$1 = (function (){var statearr_18275 = state_18221;
(statearr_18275[(19)] = inst_18191__$1);

return statearr_18275;
})();
if(cljs.core.truth_(inst_18191__$1)){
var statearr_18277_18478 = state_18221__$1;
(statearr_18277_18478[(1)] = (14));

} else {
var statearr_18278_18479 = state_18221__$1;
(statearr_18278_18479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (5))){
var inst_18174 = (state_18221[(13)]);
var state_18221__$1 = state_18221;
var statearr_18279_18480 = state_18221__$1;
(statearr_18279_18480[(2)] = inst_18174);

(statearr_18279_18480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (14))){
var inst_18191 = (state_18221[(19)]);
var state_18221__$1 = state_18221;
var statearr_18282_18481 = state_18221__$1;
(statearr_18282_18481[(2)] = inst_18191);

(statearr_18282_18481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (26))){
var inst_18210 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18284_18483 = state_18221__$1;
(statearr_18284_18483[(2)] = inst_18210);

(statearr_18284_18483[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (16))){
var inst_18202 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18202)){
var statearr_18285_18485 = state_18221__$1;
(statearr_18285_18485[(1)] = (20));

} else {
var statearr_18286_18486 = state_18221__$1;
(statearr_18286_18486[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (10))){
var inst_18217 = (state_18221[(2)]);
var state_18221__$1 = state_18221;
var statearr_18287_18487 = state_18221__$1;
(statearr_18287_18487[(2)] = inst_18217);

(statearr_18287_18487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (18))){
var inst_18194 = (state_18221[(16)]);
var state_18221__$1 = state_18221;
var statearr_18288_18488 = state_18221__$1;
(statearr_18288_18488[(2)] = inst_18194);

(statearr_18288_18488[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18222 === (8))){
var inst_18171 = (state_18221[(7)]);
var inst_18182 = (inst_18171 == null);
var state_18221__$1 = state_18221;
if(cljs.core.truth_(inst_18182)){
var statearr_18289_18489 = state_18221__$1;
(statearr_18289_18489[(1)] = (11));

} else {
var statearr_18290_18490 = state_18221__$1;
(statearr_18290_18490[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14407__auto__ = null;
var cljs$core$async$mix_$_state_machine__14407__auto____0 = (function (){
var statearr_18291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18291[(0)] = cljs$core$async$mix_$_state_machine__14407__auto__);

(statearr_18291[(1)] = (1));

return statearr_18291;
});
var cljs$core$async$mix_$_state_machine__14407__auto____1 = (function (state_18221){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18292){var ex__14410__auto__ = e18292;
var statearr_18293_18493 = state_18221;
(statearr_18293_18493[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18221[(4)]))){
var statearr_18294_18494 = state_18221;
(statearr_18294_18494[(1)] = cljs.core.first.call(null,(state_18221[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18495 = state_18221;
state_18221 = G__18495;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14407__auto__ = function(state_18221){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14407__auto____1.call(this,state_18221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14407__auto____0;
cljs$core$async$mix_$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14407__auto____1;
return cljs$core$async$mix_$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18295 = f__14532__auto__.call(null);
(statearr_18295[(6)] = c__14531__auto___18433);

return statearr_18295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18503 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18503.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18541 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18541.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18545 = (function() {
var G__18546 = null;
var G__18546__1 = (function (p){
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
var G__18546__2 = (function (p,v){
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
G__18546 = function(p,v){
switch(arguments.length){
case 1:
return G__18546__1.call(this,p);
case 2:
return G__18546__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18546.cljs$core$IFn$_invoke$arity$1 = G__18546__1;
G__18546.cljs$core$IFn$_invoke$arity$2 = G__18546__2;
return G__18546;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18309 = arguments.length;
switch (G__18309) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18545.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18545.call(null,p,v);
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
var G__18314 = arguments.length;
switch (G__18314) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18312_SHARP_){
if(cljs.core.truth_(p1__18312_SHARP_.call(null,topic))){
return p1__18312_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18317 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18318){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18318 = meta18318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18319,meta18318__$1){
var self__ = this;
var _18319__$1 = this;
return (new cljs.core.async.t_cljs$core$async18317(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18318__$1));
}));

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18319){
var self__ = this;
var _18319__$1 = this;
return self__.meta18318;
}));

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18317.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18318","meta18318",-989191319,null)], null);
}));

(cljs.core.async.t_cljs$core$async18317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18317");

(cljs.core.async.t_cljs$core$async18317.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18317.
 */
cljs.core.async.__GT_t_cljs$core$async18317 = (function cljs$core$async$__GT_t_cljs$core$async18317(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18318){
return (new cljs.core.async.t_cljs$core$async18317(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18318));
});

}

return (new cljs.core.async.t_cljs$core$async18317(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14531__auto___18581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18403){
var state_val_18404 = (state_18403[(1)]);
if((state_val_18404 === (7))){
var inst_18396 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18407_18583 = state_18403__$1;
(statearr_18407_18583[(2)] = inst_18396);

(statearr_18407_18583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (20))){
var state_18403__$1 = state_18403;
var statearr_18409_18586 = state_18403__$1;
(statearr_18409_18586[(2)] = null);

(statearr_18409_18586[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (1))){
var state_18403__$1 = state_18403;
var statearr_18410_18589 = state_18403__$1;
(statearr_18410_18589[(2)] = null);

(statearr_18410_18589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (24))){
var inst_18379 = (state_18403[(7)]);
var inst_18388 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18379);
var state_18403__$1 = state_18403;
var statearr_18411_18591 = state_18403__$1;
(statearr_18411_18591[(2)] = inst_18388);

(statearr_18411_18591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (4))){
var inst_18329 = (state_18403[(8)]);
var inst_18329__$1 = (state_18403[(2)]);
var inst_18330 = (inst_18329__$1 == null);
var state_18403__$1 = (function (){var statearr_18412 = state_18403;
(statearr_18412[(8)] = inst_18329__$1);

return statearr_18412;
})();
if(cljs.core.truth_(inst_18330)){
var statearr_18413_18593 = state_18403__$1;
(statearr_18413_18593[(1)] = (5));

} else {
var statearr_18414_18595 = state_18403__$1;
(statearr_18414_18595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (15))){
var inst_18373 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18415_18600 = state_18403__$1;
(statearr_18415_18600[(2)] = inst_18373);

(statearr_18415_18600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (21))){
var inst_18393 = (state_18403[(2)]);
var state_18403__$1 = (function (){var statearr_18416 = state_18403;
(statearr_18416[(9)] = inst_18393);

return statearr_18416;
})();
var statearr_18417_18605 = state_18403__$1;
(statearr_18417_18605[(2)] = null);

(statearr_18417_18605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (13))){
var inst_18354 = (state_18403[(10)]);
var inst_18356 = cljs.core.chunked_seq_QMARK_.call(null,inst_18354);
var state_18403__$1 = state_18403;
if(inst_18356){
var statearr_18418_18610 = state_18403__$1;
(statearr_18418_18610[(1)] = (16));

} else {
var statearr_18420_18612 = state_18403__$1;
(statearr_18420_18612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (22))){
var inst_18385 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
if(cljs.core.truth_(inst_18385)){
var statearr_18421_18624 = state_18403__$1;
(statearr_18421_18624[(1)] = (23));

} else {
var statearr_18422_18629 = state_18403__$1;
(statearr_18422_18629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (6))){
var inst_18329 = (state_18403[(8)]);
var inst_18379 = (state_18403[(7)]);
var inst_18381 = (state_18403[(11)]);
var inst_18379__$1 = topic_fn.call(null,inst_18329);
var inst_18380 = cljs.core.deref.call(null,mults);
var inst_18381__$1 = cljs.core.get.call(null,inst_18380,inst_18379__$1);
var state_18403__$1 = (function (){var statearr_18424 = state_18403;
(statearr_18424[(7)] = inst_18379__$1);

(statearr_18424[(11)] = inst_18381__$1);

return statearr_18424;
})();
if(cljs.core.truth_(inst_18381__$1)){
var statearr_18425_18648 = state_18403__$1;
(statearr_18425_18648[(1)] = (19));

} else {
var statearr_18426_18650 = state_18403__$1;
(statearr_18426_18650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (25))){
var inst_18390 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18427_18653 = state_18403__$1;
(statearr_18427_18653[(2)] = inst_18390);

(statearr_18427_18653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (17))){
var inst_18354 = (state_18403[(10)]);
var inst_18364 = cljs.core.first.call(null,inst_18354);
var inst_18365 = cljs.core.async.muxch_STAR_.call(null,inst_18364);
var inst_18366 = cljs.core.async.close_BANG_.call(null,inst_18365);
var inst_18367 = cljs.core.next.call(null,inst_18354);
var inst_18340 = inst_18367;
var inst_18341 = null;
var inst_18342 = (0);
var inst_18343 = (0);
var state_18403__$1 = (function (){var statearr_18428 = state_18403;
(statearr_18428[(12)] = inst_18366);

(statearr_18428[(13)] = inst_18340);

(statearr_18428[(14)] = inst_18341);

(statearr_18428[(15)] = inst_18342);

(statearr_18428[(16)] = inst_18343);

return statearr_18428;
})();
var statearr_18429_18663 = state_18403__$1;
(statearr_18429_18663[(2)] = null);

(statearr_18429_18663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (3))){
var inst_18398 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18403__$1,inst_18398);
} else {
if((state_val_18404 === (12))){
var inst_18375 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18430_18669 = state_18403__$1;
(statearr_18430_18669[(2)] = inst_18375);

(statearr_18430_18669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (2))){
var state_18403__$1 = state_18403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18403__$1,(4),ch);
} else {
if((state_val_18404 === (23))){
var state_18403__$1 = state_18403;
var statearr_18431_18672 = state_18403__$1;
(statearr_18431_18672[(2)] = null);

(statearr_18431_18672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (19))){
var inst_18381 = (state_18403[(11)]);
var inst_18329 = (state_18403[(8)]);
var inst_18383 = cljs.core.async.muxch_STAR_.call(null,inst_18381);
var state_18403__$1 = state_18403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18403__$1,(22),inst_18383,inst_18329);
} else {
if((state_val_18404 === (11))){
var inst_18340 = (state_18403[(13)]);
var inst_18354 = (state_18403[(10)]);
var inst_18354__$1 = cljs.core.seq.call(null,inst_18340);
var state_18403__$1 = (function (){var statearr_18432 = state_18403;
(statearr_18432[(10)] = inst_18354__$1);

return statearr_18432;
})();
if(inst_18354__$1){
var statearr_18434_18707 = state_18403__$1;
(statearr_18434_18707[(1)] = (13));

} else {
var statearr_18435_18709 = state_18403__$1;
(statearr_18435_18709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (9))){
var inst_18377 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18436_18712 = state_18403__$1;
(statearr_18436_18712[(2)] = inst_18377);

(statearr_18436_18712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (5))){
var inst_18336 = cljs.core.deref.call(null,mults);
var inst_18337 = cljs.core.vals.call(null,inst_18336);
var inst_18339 = cljs.core.seq.call(null,inst_18337);
var inst_18340 = inst_18339;
var inst_18341 = null;
var inst_18342 = (0);
var inst_18343 = (0);
var state_18403__$1 = (function (){var statearr_18439 = state_18403;
(statearr_18439[(13)] = inst_18340);

(statearr_18439[(14)] = inst_18341);

(statearr_18439[(15)] = inst_18342);

(statearr_18439[(16)] = inst_18343);

return statearr_18439;
})();
var statearr_18440_18715 = state_18403__$1;
(statearr_18440_18715[(2)] = null);

(statearr_18440_18715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (14))){
var state_18403__$1 = state_18403;
var statearr_18444_18716 = state_18403__$1;
(statearr_18444_18716[(2)] = null);

(statearr_18444_18716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (16))){
var inst_18354 = (state_18403[(10)]);
var inst_18359 = cljs.core.chunk_first.call(null,inst_18354);
var inst_18360 = cljs.core.chunk_rest.call(null,inst_18354);
var inst_18361 = cljs.core.count.call(null,inst_18359);
var inst_18340 = inst_18360;
var inst_18341 = inst_18359;
var inst_18342 = inst_18361;
var inst_18343 = (0);
var state_18403__$1 = (function (){var statearr_18446 = state_18403;
(statearr_18446[(13)] = inst_18340);

(statearr_18446[(14)] = inst_18341);

(statearr_18446[(15)] = inst_18342);

(statearr_18446[(16)] = inst_18343);

return statearr_18446;
})();
var statearr_18447_18721 = state_18403__$1;
(statearr_18447_18721[(2)] = null);

(statearr_18447_18721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (10))){
var inst_18341 = (state_18403[(14)]);
var inst_18343 = (state_18403[(16)]);
var inst_18340 = (state_18403[(13)]);
var inst_18342 = (state_18403[(15)]);
var inst_18348 = cljs.core._nth.call(null,inst_18341,inst_18343);
var inst_18349 = cljs.core.async.muxch_STAR_.call(null,inst_18348);
var inst_18350 = cljs.core.async.close_BANG_.call(null,inst_18349);
var inst_18351 = (inst_18343 + (1));
var tmp18441 = inst_18340;
var tmp18442 = inst_18342;
var tmp18443 = inst_18341;
var inst_18340__$1 = tmp18441;
var inst_18341__$1 = tmp18443;
var inst_18342__$1 = tmp18442;
var inst_18343__$1 = inst_18351;
var state_18403__$1 = (function (){var statearr_18450 = state_18403;
(statearr_18450[(17)] = inst_18350);

(statearr_18450[(13)] = inst_18340__$1);

(statearr_18450[(14)] = inst_18341__$1);

(statearr_18450[(15)] = inst_18342__$1);

(statearr_18450[(16)] = inst_18343__$1);

return statearr_18450;
})();
var statearr_18453_18723 = state_18403__$1;
(statearr_18453_18723[(2)] = null);

(statearr_18453_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (18))){
var inst_18370 = (state_18403[(2)]);
var state_18403__$1 = state_18403;
var statearr_18454_18724 = state_18403__$1;
(statearr_18454_18724[(2)] = inst_18370);

(statearr_18454_18724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18404 === (8))){
var inst_18343 = (state_18403[(16)]);
var inst_18342 = (state_18403[(15)]);
var inst_18345 = (inst_18343 < inst_18342);
var inst_18346 = inst_18345;
var state_18403__$1 = state_18403;
if(cljs.core.truth_(inst_18346)){
var statearr_18456_18729 = state_18403__$1;
(statearr_18456_18729[(1)] = (10));

} else {
var statearr_18458_18730 = state_18403__$1;
(statearr_18458_18730[(1)] = (11));

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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_18462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18462[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_18462[(1)] = (1));

return statearr_18462;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_18403){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18464){var ex__14410__auto__ = e18464;
var statearr_18465_18731 = state_18403;
(statearr_18465_18731[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18403[(4)]))){
var statearr_18467_18732 = state_18403;
(statearr_18467_18732[(1)] = cljs.core.first.call(null,(state_18403[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18737 = state_18403;
state_18403 = G__18737;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_18403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_18403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18470 = f__14532__auto__.call(null);
(statearr_18470[(6)] = c__14531__auto___18581);

return statearr_18470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var G__18474 = arguments.length;
switch (G__18474) {
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
var G__18484 = arguments.length;
switch (G__18484) {
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
var G__18492 = arguments.length;
switch (G__18492) {
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
var c__14531__auto___18746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18542){
var state_val_18543 = (state_18542[(1)]);
if((state_val_18543 === (7))){
var state_18542__$1 = state_18542;
var statearr_18544_18749 = state_18542__$1;
(statearr_18544_18749[(2)] = null);

(statearr_18544_18749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (1))){
var state_18542__$1 = state_18542;
var statearr_18548_18750 = state_18542__$1;
(statearr_18548_18750[(2)] = null);

(statearr_18548_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (4))){
var inst_18499 = (state_18542[(7)]);
var inst_18498 = (state_18542[(8)]);
var inst_18501 = (inst_18499 < inst_18498);
var state_18542__$1 = state_18542;
if(cljs.core.truth_(inst_18501)){
var statearr_18550_18751 = state_18542__$1;
(statearr_18550_18751[(1)] = (6));

} else {
var statearr_18551_18752 = state_18542__$1;
(statearr_18551_18752[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (15))){
var inst_18527 = (state_18542[(9)]);
var inst_18532 = cljs.core.apply.call(null,f,inst_18527);
var state_18542__$1 = state_18542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18542__$1,(17),out,inst_18532);
} else {
if((state_val_18543 === (13))){
var inst_18527 = (state_18542[(9)]);
var inst_18527__$1 = (state_18542[(2)]);
var inst_18528 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18527__$1);
var state_18542__$1 = (function (){var statearr_18553 = state_18542;
(statearr_18553[(9)] = inst_18527__$1);

return statearr_18553;
})();
if(cljs.core.truth_(inst_18528)){
var statearr_18554_18753 = state_18542__$1;
(statearr_18554_18753[(1)] = (14));

} else {
var statearr_18555_18754 = state_18542__$1;
(statearr_18555_18754[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (6))){
var state_18542__$1 = state_18542;
var statearr_18557_18757 = state_18542__$1;
(statearr_18557_18757[(2)] = null);

(statearr_18557_18757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (17))){
var inst_18534 = (state_18542[(2)]);
var state_18542__$1 = (function (){var statearr_18560 = state_18542;
(statearr_18560[(10)] = inst_18534);

return statearr_18560;
})();
var statearr_18562_18758 = state_18542__$1;
(statearr_18562_18758[(2)] = null);

(statearr_18562_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (3))){
var inst_18539 = (state_18542[(2)]);
var state_18542__$1 = state_18542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18542__$1,inst_18539);
} else {
if((state_val_18543 === (12))){
var _ = (function (){var statearr_18563 = state_18542;
(statearr_18563[(4)] = cljs.core.rest.call(null,(state_18542[(4)])));

return statearr_18563;
})();
var state_18542__$1 = state_18542;
var ex18559 = (state_18542__$1[(2)]);
var statearr_18564_18759 = state_18542__$1;
(statearr_18564_18759[(5)] = ex18559);


if((ex18559 instanceof Object)){
var statearr_18565_18760 = state_18542__$1;
(statearr_18565_18760[(1)] = (11));

(statearr_18565_18760[(5)] = null);

} else {
throw ex18559;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (2))){
var inst_18497 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18498 = cnt;
var inst_18499 = (0);
var state_18542__$1 = (function (){var statearr_18566 = state_18542;
(statearr_18566[(11)] = inst_18497);

(statearr_18566[(8)] = inst_18498);

(statearr_18566[(7)] = inst_18499);

return statearr_18566;
})();
var statearr_18567_18764 = state_18542__$1;
(statearr_18567_18764[(2)] = null);

(statearr_18567_18764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (11))){
var inst_18504 = (state_18542[(2)]);
var inst_18506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18542__$1 = (function (){var statearr_18568 = state_18542;
(statearr_18568[(12)] = inst_18504);

return statearr_18568;
})();
var statearr_18569_18767 = state_18542__$1;
(statearr_18569_18767[(2)] = inst_18506);

(statearr_18569_18767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (9))){
var inst_18499 = (state_18542[(7)]);
var _ = (function (){var statearr_18572 = state_18542;
(statearr_18572[(4)] = cljs.core.cons.call(null,(12),(state_18542[(4)])));

return statearr_18572;
})();
var inst_18512 = chs__$1.call(null,inst_18499);
var inst_18513 = done.call(null,inst_18499);
var inst_18514 = cljs.core.async.take_BANG_.call(null,inst_18512,inst_18513);
var ___$1 = (function (){var statearr_18573 = state_18542;
(statearr_18573[(4)] = cljs.core.rest.call(null,(state_18542[(4)])));

return statearr_18573;
})();
var state_18542__$1 = state_18542;
var statearr_18574_18768 = state_18542__$1;
(statearr_18574_18768[(2)] = inst_18514);

(statearr_18574_18768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (5))){
var inst_18525 = (state_18542[(2)]);
var state_18542__$1 = (function (){var statearr_18575 = state_18542;
(statearr_18575[(13)] = inst_18525);

return statearr_18575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18542__$1,(13),dchan);
} else {
if((state_val_18543 === (14))){
var inst_18530 = cljs.core.async.close_BANG_.call(null,out);
var state_18542__$1 = state_18542;
var statearr_18580_18769 = state_18542__$1;
(statearr_18580_18769[(2)] = inst_18530);

(statearr_18580_18769[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (16))){
var inst_18537 = (state_18542[(2)]);
var state_18542__$1 = state_18542;
var statearr_18582_18770 = state_18542__$1;
(statearr_18582_18770[(2)] = inst_18537);

(statearr_18582_18770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (10))){
var inst_18499 = (state_18542[(7)]);
var inst_18517 = (state_18542[(2)]);
var inst_18519 = (inst_18499 + (1));
var inst_18499__$1 = inst_18519;
var state_18542__$1 = (function (){var statearr_18584 = state_18542;
(statearr_18584[(14)] = inst_18517);

(statearr_18584[(7)] = inst_18499__$1);

return statearr_18584;
})();
var statearr_18585_18773 = state_18542__$1;
(statearr_18585_18773[(2)] = null);

(statearr_18585_18773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18543 === (8))){
var inst_18523 = (state_18542[(2)]);
var state_18542__$1 = state_18542;
var statearr_18588_18774 = state_18542__$1;
(statearr_18588_18774[(2)] = inst_18523);

(statearr_18588_18774[(1)] = (5));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_18592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18592[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_18592[(1)] = (1));

return statearr_18592;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_18542){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18594){var ex__14410__auto__ = e18594;
var statearr_18596_18775 = state_18542;
(statearr_18596_18775[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18542[(4)]))){
var statearr_18598_18778 = state_18542;
(statearr_18598_18778[(1)] = cljs.core.first.call(null,(state_18542[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18782 = state_18542;
state_18542 = G__18782;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_18542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_18542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18601 = f__14532__auto__.call(null);
(statearr_18601[(6)] = c__14531__auto___18746);

return statearr_18601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var G__18604 = arguments.length;
switch (G__18604) {
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
var c__14531__auto___18784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18643){
var state_val_18644 = (state_18643[(1)]);
if((state_val_18644 === (7))){
var inst_18620 = (state_18643[(7)]);
var inst_18621 = (state_18643[(8)]);
var inst_18620__$1 = (state_18643[(2)]);
var inst_18621__$1 = cljs.core.nth.call(null,inst_18620__$1,(0),null);
var inst_18622 = cljs.core.nth.call(null,inst_18620__$1,(1),null);
var inst_18623 = (inst_18621__$1 == null);
var state_18643__$1 = (function (){var statearr_18645 = state_18643;
(statearr_18645[(7)] = inst_18620__$1);

(statearr_18645[(8)] = inst_18621__$1);

(statearr_18645[(9)] = inst_18622);

return statearr_18645;
})();
if(cljs.core.truth_(inst_18623)){
var statearr_18646_18787 = state_18643__$1;
(statearr_18646_18787[(1)] = (8));

} else {
var statearr_18647_18788 = state_18643__$1;
(statearr_18647_18788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (1))){
var inst_18608 = cljs.core.vec.call(null,chs);
var inst_18609 = inst_18608;
var state_18643__$1 = (function (){var statearr_18649 = state_18643;
(statearr_18649[(10)] = inst_18609);

return statearr_18649;
})();
var statearr_18651_18789 = state_18643__$1;
(statearr_18651_18789[(2)] = null);

(statearr_18651_18789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (4))){
var inst_18609 = (state_18643[(10)]);
var state_18643__$1 = state_18643;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18643__$1,(7),inst_18609);
} else {
if((state_val_18644 === (6))){
var inst_18639 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18652_18790 = state_18643__$1;
(statearr_18652_18790[(2)] = inst_18639);

(statearr_18652_18790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (3))){
var inst_18641 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18643__$1,inst_18641);
} else {
if((state_val_18644 === (2))){
var inst_18609 = (state_18643[(10)]);
var inst_18613 = cljs.core.count.call(null,inst_18609);
var inst_18614 = (inst_18613 > (0));
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18614)){
var statearr_18655_18793 = state_18643__$1;
(statearr_18655_18793[(1)] = (4));

} else {
var statearr_18656_18794 = state_18643__$1;
(statearr_18656_18794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (11))){
var inst_18609 = (state_18643[(10)]);
var inst_18632 = (state_18643[(2)]);
var tmp18654 = inst_18609;
var inst_18609__$1 = tmp18654;
var state_18643__$1 = (function (){var statearr_18657 = state_18643;
(statearr_18657[(11)] = inst_18632);

(statearr_18657[(10)] = inst_18609__$1);

return statearr_18657;
})();
var statearr_18658_18795 = state_18643__$1;
(statearr_18658_18795[(2)] = null);

(statearr_18658_18795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (9))){
var inst_18621 = (state_18643[(8)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18643__$1,(11),out,inst_18621);
} else {
if((state_val_18644 === (5))){
var inst_18637 = cljs.core.async.close_BANG_.call(null,out);
var state_18643__$1 = state_18643;
var statearr_18659_18800 = state_18643__$1;
(statearr_18659_18800[(2)] = inst_18637);

(statearr_18659_18800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (10))){
var inst_18635 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18660_18802 = state_18643__$1;
(statearr_18660_18802[(2)] = inst_18635);

(statearr_18660_18802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (8))){
var inst_18609 = (state_18643[(10)]);
var inst_18620 = (state_18643[(7)]);
var inst_18621 = (state_18643[(8)]);
var inst_18622 = (state_18643[(9)]);
var inst_18626 = (function (){var cs = inst_18609;
var vec__18616 = inst_18620;
var v = inst_18621;
var c = inst_18622;
return (function (p1__18602_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18602_SHARP_);
});
})();
var inst_18627 = cljs.core.filterv.call(null,inst_18626,inst_18609);
var inst_18609__$1 = inst_18627;
var state_18643__$1 = (function (){var statearr_18661 = state_18643;
(statearr_18661[(10)] = inst_18609__$1);

return statearr_18661;
})();
var statearr_18662_18806 = state_18643__$1;
(statearr_18662_18806[(2)] = null);

(statearr_18662_18806[(1)] = (2));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_18664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18664[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_18664[(1)] = (1));

return statearr_18664;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_18643){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18665){var ex__14410__auto__ = e18665;
var statearr_18666_18812 = state_18643;
(statearr_18666_18812[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18643[(4)]))){
var statearr_18667_18819 = state_18643;
(statearr_18667_18819[(1)] = cljs.core.first.call(null,(state_18643[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18833 = state_18643;
state_18643 = G__18833;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_18643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_18643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18668 = f__14532__auto__.call(null);
(statearr_18668[(6)] = c__14531__auto___18784);

return statearr_18668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
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
var G__18671 = arguments.length;
switch (G__18671) {
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
var c__14531__auto___18839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18696){
var state_val_18697 = (state_18696[(1)]);
if((state_val_18697 === (7))){
var inst_18678 = (state_18696[(7)]);
var inst_18678__$1 = (state_18696[(2)]);
var inst_18679 = (inst_18678__$1 == null);
var inst_18680 = cljs.core.not.call(null,inst_18679);
var state_18696__$1 = (function (){var statearr_18698 = state_18696;
(statearr_18698[(7)] = inst_18678__$1);

return statearr_18698;
})();
if(inst_18680){
var statearr_18699_18847 = state_18696__$1;
(statearr_18699_18847[(1)] = (8));

} else {
var statearr_18700_18849 = state_18696__$1;
(statearr_18700_18849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (1))){
var inst_18673 = (0);
var state_18696__$1 = (function (){var statearr_18701 = state_18696;
(statearr_18701[(8)] = inst_18673);

return statearr_18701;
})();
var statearr_18702_18851 = state_18696__$1;
(statearr_18702_18851[(2)] = null);

(statearr_18702_18851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (4))){
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18696__$1,(7),ch);
} else {
if((state_val_18697 === (6))){
var inst_18691 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18703_18852 = state_18696__$1;
(statearr_18703_18852[(2)] = inst_18691);

(statearr_18703_18852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (3))){
var inst_18693 = (state_18696[(2)]);
var inst_18694 = cljs.core.async.close_BANG_.call(null,out);
var state_18696__$1 = (function (){var statearr_18704 = state_18696;
(statearr_18704[(9)] = inst_18693);

return statearr_18704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18696__$1,inst_18694);
} else {
if((state_val_18697 === (2))){
var inst_18673 = (state_18696[(8)]);
var inst_18675 = (inst_18673 < n);
var state_18696__$1 = state_18696;
if(cljs.core.truth_(inst_18675)){
var statearr_18705_18857 = state_18696__$1;
(statearr_18705_18857[(1)] = (4));

} else {
var statearr_18706_18859 = state_18696__$1;
(statearr_18706_18859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (11))){
var inst_18673 = (state_18696[(8)]);
var inst_18683 = (state_18696[(2)]);
var inst_18684 = (inst_18673 + (1));
var inst_18673__$1 = inst_18684;
var state_18696__$1 = (function (){var statearr_18708 = state_18696;
(statearr_18708[(10)] = inst_18683);

(statearr_18708[(8)] = inst_18673__$1);

return statearr_18708;
})();
var statearr_18710_18862 = state_18696__$1;
(statearr_18710_18862[(2)] = null);

(statearr_18710_18862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (9))){
var state_18696__$1 = state_18696;
var statearr_18711_18867 = state_18696__$1;
(statearr_18711_18867[(2)] = null);

(statearr_18711_18867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (5))){
var state_18696__$1 = state_18696;
var statearr_18713_18868 = state_18696__$1;
(statearr_18713_18868[(2)] = null);

(statearr_18713_18868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (10))){
var inst_18688 = (state_18696[(2)]);
var state_18696__$1 = state_18696;
var statearr_18714_18870 = state_18696__$1;
(statearr_18714_18870[(2)] = inst_18688);

(statearr_18714_18870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18697 === (8))){
var inst_18678 = (state_18696[(7)]);
var state_18696__$1 = state_18696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18696__$1,(11),out,inst_18678);
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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_18717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18717[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_18717[(1)] = (1));

return statearr_18717;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_18696){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18718){var ex__14410__auto__ = e18718;
var statearr_18719_18874 = state_18696;
(statearr_18719_18874[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18696[(4)]))){
var statearr_18720_18876 = state_18696;
(statearr_18720_18876[(1)] = cljs.core.first.call(null,(state_18696[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18877 = state_18696;
state_18696 = G__18877;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_18696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_18696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18722 = f__14532__auto__.call(null);
(statearr_18722[(6)] = c__14531__auto___18839);

return statearr_18722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18726 = (function (f,ch,meta18727){
this.f = f;
this.ch = ch;
this.meta18727 = meta18727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18728,meta18727__$1){
var self__ = this;
var _18728__$1 = this;
return (new cljs.core.async.t_cljs$core$async18726(self__.f,self__.ch,meta18727__$1));
}));

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18728){
var self__ = this;
var _18728__$1 = this;
return self__.meta18727;
}));

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18739 = (function (f,ch,meta18727,_,fn1,meta18740){
this.f = f;
this.ch = ch;
this.meta18727 = meta18727;
this._ = _;
this.fn1 = fn1;
this.meta18740 = meta18740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18741,meta18740__$1){
var self__ = this;
var _18741__$1 = this;
return (new cljs.core.async.t_cljs$core$async18739(self__.f,self__.ch,self__.meta18727,self__._,self__.fn1,meta18740__$1));
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18741){
var self__ = this;
var _18741__$1 = this;
return self__.meta18740;
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__18725_SHARP_){
return f1.call(null,(((p1__18725_SHARP_ == null))?null:self__.f.call(null,p1__18725_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async18739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18727","meta18727",541609538,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18726","cljs.core.async/t_cljs$core$async18726",-196287612,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18740","meta18740",660539765,null)], null);
}));

(cljs.core.async.t_cljs$core$async18739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18739");

(cljs.core.async.t_cljs$core$async18739.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18739.
 */
cljs.core.async.__GT_t_cljs$core$async18739 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18739(f__$1,ch__$1,meta18727__$1,___$2,fn1__$1,meta18740){
return (new cljs.core.async.t_cljs$core$async18739(f__$1,ch__$1,meta18727__$1,___$2,fn1__$1,meta18740));
});

}

return (new cljs.core.async.t_cljs$core$async18739(self__.f,self__.ch,self__.meta18727,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18727","meta18727",541609538,null)], null);
}));

(cljs.core.async.t_cljs$core$async18726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18726");

(cljs.core.async.t_cljs$core$async18726.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18726.
 */
cljs.core.async.__GT_t_cljs$core$async18726 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18726(f__$1,ch__$1,meta18727){
return (new cljs.core.async.t_cljs$core$async18726(f__$1,ch__$1,meta18727));
});

}

return (new cljs.core.async.t_cljs$core$async18726(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18761 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18761 = (function (f,ch,meta18762){
this.f = f;
this.ch = ch;
this.meta18762 = meta18762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18763,meta18762__$1){
var self__ = this;
var _18763__$1 = this;
return (new cljs.core.async.t_cljs$core$async18761(self__.f,self__.ch,meta18762__$1));
}));

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18763){
var self__ = this;
var _18763__$1 = this;
return self__.meta18762;
}));

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async18761.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18762","meta18762",1934463582,null)], null);
}));

(cljs.core.async.t_cljs$core$async18761.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18761");

(cljs.core.async.t_cljs$core$async18761.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18761");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18761.
 */
cljs.core.async.__GT_t_cljs$core$async18761 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18761(f__$1,ch__$1,meta18762){
return (new cljs.core.async.t_cljs$core$async18761(f__$1,ch__$1,meta18762));
});

}

return (new cljs.core.async.t_cljs$core$async18761(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18779 = (function (p,ch,meta18780){
this.p = p;
this.ch = ch;
this.meta18780 = meta18780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18781,meta18780__$1){
var self__ = this;
var _18781__$1 = this;
return (new cljs.core.async.t_cljs$core$async18779(self__.p,self__.ch,meta18780__$1));
}));

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18781){
var self__ = this;
var _18781__$1 = this;
return self__.meta18780;
}));

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18780","meta18780",1170351093,null)], null);
}));

(cljs.core.async.t_cljs$core$async18779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18779");

(cljs.core.async.t_cljs$core$async18779.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"cljs.core.async/t_cljs$core$async18779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18779.
 */
cljs.core.async.__GT_t_cljs$core$async18779 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18779(p__$1,ch__$1,meta18780){
return (new cljs.core.async.t_cljs$core$async18779(p__$1,ch__$1,meta18780));
});

}

return (new cljs.core.async.t_cljs$core$async18779(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18803 = arguments.length;
switch (G__18803) {
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
var c__14531__auto___18977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18834){
var state_val_18835 = (state_18834[(1)]);
if((state_val_18835 === (7))){
var inst_18826 = (state_18834[(2)]);
var state_18834__$1 = state_18834;
var statearr_18837_18982 = state_18834__$1;
(statearr_18837_18982[(2)] = inst_18826);

(statearr_18837_18982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (1))){
var state_18834__$1 = state_18834;
var statearr_18838_18984 = state_18834__$1;
(statearr_18838_18984[(2)] = null);

(statearr_18838_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (4))){
var inst_18809 = (state_18834[(7)]);
var inst_18809__$1 = (state_18834[(2)]);
var inst_18810 = (inst_18809__$1 == null);
var state_18834__$1 = (function (){var statearr_18840 = state_18834;
(statearr_18840[(7)] = inst_18809__$1);

return statearr_18840;
})();
if(cljs.core.truth_(inst_18810)){
var statearr_18842_18986 = state_18834__$1;
(statearr_18842_18986[(1)] = (5));

} else {
var statearr_18846_18987 = state_18834__$1;
(statearr_18846_18987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (6))){
var inst_18809 = (state_18834[(7)]);
var inst_18815 = p.call(null,inst_18809);
var state_18834__$1 = state_18834;
if(cljs.core.truth_(inst_18815)){
var statearr_18848_18991 = state_18834__$1;
(statearr_18848_18991[(1)] = (8));

} else {
var statearr_18850_18996 = state_18834__$1;
(statearr_18850_18996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (3))){
var inst_18831 = (state_18834[(2)]);
var state_18834__$1 = state_18834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18834__$1,inst_18831);
} else {
if((state_val_18835 === (2))){
var state_18834__$1 = state_18834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18834__$1,(4),ch);
} else {
if((state_val_18835 === (11))){
var inst_18818 = (state_18834[(2)]);
var state_18834__$1 = state_18834;
var statearr_18854_19000 = state_18834__$1;
(statearr_18854_19000[(2)] = inst_18818);

(statearr_18854_19000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (9))){
var state_18834__$1 = state_18834;
var statearr_18856_19001 = state_18834__$1;
(statearr_18856_19001[(2)] = null);

(statearr_18856_19001[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (5))){
var inst_18813 = cljs.core.async.close_BANG_.call(null,out);
var state_18834__$1 = state_18834;
var statearr_18858_19002 = state_18834__$1;
(statearr_18858_19002[(2)] = inst_18813);

(statearr_18858_19002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (10))){
var inst_18822 = (state_18834[(2)]);
var state_18834__$1 = (function (){var statearr_18860 = state_18834;
(statearr_18860[(8)] = inst_18822);

return statearr_18860;
})();
var statearr_18861_19006 = state_18834__$1;
(statearr_18861_19006[(2)] = null);

(statearr_18861_19006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18835 === (8))){
var inst_18809 = (state_18834[(7)]);
var state_18834__$1 = state_18834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18834__$1,(11),out,inst_18809);
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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_18869 = [null,null,null,null,null,null,null,null,null];
(statearr_18869[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_18869[(1)] = (1));

return statearr_18869;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_18834){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e18871){var ex__14410__auto__ = e18871;
var statearr_18872_19011 = state_18834;
(statearr_18872_19011[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18834[(4)]))){
var statearr_18873_19015 = state_18834;
(statearr_18873_19015[(1)] = cljs.core.first.call(null,(state_18834[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19016 = state_18834;
state_18834 = G__19016;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_18834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_18834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_18875 = f__14532__auto__.call(null);
(statearr_18875[(6)] = c__14531__auto___18977);

return statearr_18875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18881 = arguments.length;
switch (G__18881) {
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
var c__14531__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_18947){
var state_val_18948 = (state_18947[(1)]);
if((state_val_18948 === (7))){
var inst_18943 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18952_19140 = state_18947__$1;
(statearr_18952_19140[(2)] = inst_18943);

(statearr_18952_19140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (20))){
var inst_18913 = (state_18947[(7)]);
var inst_18924 = (state_18947[(2)]);
var inst_18925 = cljs.core.next.call(null,inst_18913);
var inst_18899 = inst_18925;
var inst_18900 = null;
var inst_18901 = (0);
var inst_18902 = (0);
var state_18947__$1 = (function (){var statearr_18953 = state_18947;
(statearr_18953[(8)] = inst_18924);

(statearr_18953[(9)] = inst_18899);

(statearr_18953[(10)] = inst_18900);

(statearr_18953[(11)] = inst_18901);

(statearr_18953[(12)] = inst_18902);

return statearr_18953;
})();
var statearr_18954_19145 = state_18947__$1;
(statearr_18954_19145[(2)] = null);

(statearr_18954_19145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (1))){
var state_18947__$1 = state_18947;
var statearr_18955_19148 = state_18947__$1;
(statearr_18955_19148[(2)] = null);

(statearr_18955_19148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (4))){
var inst_18888 = (state_18947[(13)]);
var inst_18888__$1 = (state_18947[(2)]);
var inst_18889 = (inst_18888__$1 == null);
var state_18947__$1 = (function (){var statearr_18956 = state_18947;
(statearr_18956[(13)] = inst_18888__$1);

return statearr_18956;
})();
if(cljs.core.truth_(inst_18889)){
var statearr_18957_19151 = state_18947__$1;
(statearr_18957_19151[(1)] = (5));

} else {
var statearr_18958_19152 = state_18947__$1;
(statearr_18958_19152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (15))){
var state_18947__$1 = state_18947;
var statearr_18962_19155 = state_18947__$1;
(statearr_18962_19155[(2)] = null);

(statearr_18962_19155[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (21))){
var state_18947__$1 = state_18947;
var statearr_18963_19157 = state_18947__$1;
(statearr_18963_19157[(2)] = null);

(statearr_18963_19157[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (13))){
var inst_18902 = (state_18947[(12)]);
var inst_18899 = (state_18947[(9)]);
var inst_18900 = (state_18947[(10)]);
var inst_18901 = (state_18947[(11)]);
var inst_18909 = (state_18947[(2)]);
var inst_18910 = (inst_18902 + (1));
var tmp18959 = inst_18900;
var tmp18960 = inst_18899;
var tmp18961 = inst_18901;
var inst_18899__$1 = tmp18960;
var inst_18900__$1 = tmp18959;
var inst_18901__$1 = tmp18961;
var inst_18902__$1 = inst_18910;
var state_18947__$1 = (function (){var statearr_18967 = state_18947;
(statearr_18967[(14)] = inst_18909);

(statearr_18967[(9)] = inst_18899__$1);

(statearr_18967[(10)] = inst_18900__$1);

(statearr_18967[(11)] = inst_18901__$1);

(statearr_18967[(12)] = inst_18902__$1);

return statearr_18967;
})();
var statearr_18968_19162 = state_18947__$1;
(statearr_18968_19162[(2)] = null);

(statearr_18968_19162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (22))){
var state_18947__$1 = state_18947;
var statearr_18969_19163 = state_18947__$1;
(statearr_18969_19163[(2)] = null);

(statearr_18969_19163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (6))){
var inst_18888 = (state_18947[(13)]);
var inst_18897 = f.call(null,inst_18888);
var inst_18898 = cljs.core.seq.call(null,inst_18897);
var inst_18899 = inst_18898;
var inst_18900 = null;
var inst_18901 = (0);
var inst_18902 = (0);
var state_18947__$1 = (function (){var statearr_18972 = state_18947;
(statearr_18972[(9)] = inst_18899);

(statearr_18972[(10)] = inst_18900);

(statearr_18972[(11)] = inst_18901);

(statearr_18972[(12)] = inst_18902);

return statearr_18972;
})();
var statearr_18973_19167 = state_18947__$1;
(statearr_18973_19167[(2)] = null);

(statearr_18973_19167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (17))){
var inst_18913 = (state_18947[(7)]);
var inst_18917 = cljs.core.chunk_first.call(null,inst_18913);
var inst_18918 = cljs.core.chunk_rest.call(null,inst_18913);
var inst_18919 = cljs.core.count.call(null,inst_18917);
var inst_18899 = inst_18918;
var inst_18900 = inst_18917;
var inst_18901 = inst_18919;
var inst_18902 = (0);
var state_18947__$1 = (function (){var statearr_18974 = state_18947;
(statearr_18974[(9)] = inst_18899);

(statearr_18974[(10)] = inst_18900);

(statearr_18974[(11)] = inst_18901);

(statearr_18974[(12)] = inst_18902);

return statearr_18974;
})();
var statearr_18976_19170 = state_18947__$1;
(statearr_18976_19170[(2)] = null);

(statearr_18976_19170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (3))){
var inst_18945 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18947__$1,inst_18945);
} else {
if((state_val_18948 === (12))){
var inst_18933 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18978_19175 = state_18947__$1;
(statearr_18978_19175[(2)] = inst_18933);

(statearr_18978_19175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (2))){
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18947__$1,(4),in$);
} else {
if((state_val_18948 === (23))){
var inst_18941 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18983_19181 = state_18947__$1;
(statearr_18983_19181[(2)] = inst_18941);

(statearr_18983_19181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (19))){
var inst_18928 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_18985_19184 = state_18947__$1;
(statearr_18985_19184[(2)] = inst_18928);

(statearr_18985_19184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (11))){
var inst_18899 = (state_18947[(9)]);
var inst_18913 = (state_18947[(7)]);
var inst_18913__$1 = cljs.core.seq.call(null,inst_18899);
var state_18947__$1 = (function (){var statearr_18988 = state_18947;
(statearr_18988[(7)] = inst_18913__$1);

return statearr_18988;
})();
if(inst_18913__$1){
var statearr_18989_19187 = state_18947__$1;
(statearr_18989_19187[(1)] = (14));

} else {
var statearr_18995_19188 = state_18947__$1;
(statearr_18995_19188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (9))){
var inst_18935 = (state_18947[(2)]);
var inst_18936 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18947__$1 = (function (){var statearr_19020 = state_18947;
(statearr_19020[(15)] = inst_18935);

return statearr_19020;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_19024_19192 = state_18947__$1;
(statearr_19024_19192[(1)] = (21));

} else {
var statearr_19025_19193 = state_18947__$1;
(statearr_19025_19193[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (5))){
var inst_18891 = cljs.core.async.close_BANG_.call(null,out);
var state_18947__$1 = state_18947;
var statearr_19026_19195 = state_18947__$1;
(statearr_19026_19195[(2)] = inst_18891);

(statearr_19026_19195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (14))){
var inst_18913 = (state_18947[(7)]);
var inst_18915 = cljs.core.chunked_seq_QMARK_.call(null,inst_18913);
var state_18947__$1 = state_18947;
if(inst_18915){
var statearr_19027_19199 = state_18947__$1;
(statearr_19027_19199[(1)] = (17));

} else {
var statearr_19028_19201 = state_18947__$1;
(statearr_19028_19201[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (16))){
var inst_18931 = (state_18947[(2)]);
var state_18947__$1 = state_18947;
var statearr_19029_19202 = state_18947__$1;
(statearr_19029_19202[(2)] = inst_18931);

(statearr_19029_19202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18948 === (10))){
var inst_18900 = (state_18947[(10)]);
var inst_18902 = (state_18947[(12)]);
var inst_18907 = cljs.core._nth.call(null,inst_18900,inst_18902);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18947__$1,(13),out,inst_18907);
} else {
if((state_val_18948 === (18))){
var inst_18913 = (state_18947[(7)]);
var inst_18922 = cljs.core.first.call(null,inst_18913);
var state_18947__$1 = state_18947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18947__$1,(20),out,inst_18922);
} else {
if((state_val_18948 === (8))){
var inst_18902 = (state_18947[(12)]);
var inst_18901 = (state_18947[(11)]);
var inst_18904 = (inst_18902 < inst_18901);
var inst_18905 = inst_18904;
var state_18947__$1 = state_18947;
if(cljs.core.truth_(inst_18905)){
var statearr_19030_19205 = state_18947__$1;
(statearr_19030_19205[(1)] = (10));

} else {
var statearr_19031_19206 = state_18947__$1;
(statearr_19031_19206[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____0 = (function (){
var statearr_19032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19032[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__);

(statearr_19032[(1)] = (1));

return statearr_19032;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____1 = (function (state_18947){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_18947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19035){var ex__14410__auto__ = e19035;
var statearr_19036_19210 = state_18947;
(statearr_19036_19210[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_18947[(4)]))){
var statearr_19037_19211 = state_18947;
(statearr_19037_19211[(1)] = cljs.core.first.call(null,(state_18947[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19218 = state_18947;
state_18947 = G__19218;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__ = function(state_18947){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____1.call(this,state_18947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14407__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19038 = f__14532__auto__.call(null);
(statearr_19038[(6)] = c__14531__auto__);

return statearr_19038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));

return c__14531__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19043 = arguments.length;
switch (G__19043) {
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
var G__19047 = arguments.length;
switch (G__19047) {
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
var G__19051 = arguments.length;
switch (G__19051) {
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
var c__14531__auto___19298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_19077){
var state_val_19078 = (state_19077[(1)]);
if((state_val_19078 === (7))){
var inst_19072 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19079_19300 = state_19077__$1;
(statearr_19079_19300[(2)] = inst_19072);

(statearr_19079_19300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (1))){
var inst_19052 = null;
var state_19077__$1 = (function (){var statearr_19080 = state_19077;
(statearr_19080[(7)] = inst_19052);

return statearr_19080;
})();
var statearr_19081_19306 = state_19077__$1;
(statearr_19081_19306[(2)] = null);

(statearr_19081_19306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (4))){
var inst_19055 = (state_19077[(8)]);
var inst_19055__$1 = (state_19077[(2)]);
var inst_19057 = (inst_19055__$1 == null);
var inst_19058 = cljs.core.not.call(null,inst_19057);
var state_19077__$1 = (function (){var statearr_19082 = state_19077;
(statearr_19082[(8)] = inst_19055__$1);

return statearr_19082;
})();
if(inst_19058){
var statearr_19083_19310 = state_19077__$1;
(statearr_19083_19310[(1)] = (5));

} else {
var statearr_19084_19311 = state_19077__$1;
(statearr_19084_19311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (6))){
var state_19077__$1 = state_19077;
var statearr_19085_19313 = state_19077__$1;
(statearr_19085_19313[(2)] = null);

(statearr_19085_19313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (3))){
var inst_19074 = (state_19077[(2)]);
var inst_19075 = cljs.core.async.close_BANG_.call(null,out);
var state_19077__$1 = (function (){var statearr_19086 = state_19077;
(statearr_19086[(9)] = inst_19074);

return statearr_19086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19077__$1,inst_19075);
} else {
if((state_val_19078 === (2))){
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19077__$1,(4),ch);
} else {
if((state_val_19078 === (11))){
var inst_19055 = (state_19077[(8)]);
var inst_19066 = (state_19077[(2)]);
var inst_19052 = inst_19055;
var state_19077__$1 = (function (){var statearr_19087 = state_19077;
(statearr_19087[(10)] = inst_19066);

(statearr_19087[(7)] = inst_19052);

return statearr_19087;
})();
var statearr_19088_19315 = state_19077__$1;
(statearr_19088_19315[(2)] = null);

(statearr_19088_19315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (9))){
var inst_19055 = (state_19077[(8)]);
var state_19077__$1 = state_19077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19077__$1,(11),out,inst_19055);
} else {
if((state_val_19078 === (5))){
var inst_19055 = (state_19077[(8)]);
var inst_19052 = (state_19077[(7)]);
var inst_19061 = cljs.core._EQ_.call(null,inst_19055,inst_19052);
var state_19077__$1 = state_19077;
if(inst_19061){
var statearr_19090_19319 = state_19077__$1;
(statearr_19090_19319[(1)] = (8));

} else {
var statearr_19091_19320 = state_19077__$1;
(statearr_19091_19320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (10))){
var inst_19069 = (state_19077[(2)]);
var state_19077__$1 = state_19077;
var statearr_19092_19321 = state_19077__$1;
(statearr_19092_19321[(2)] = inst_19069);

(statearr_19092_19321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19078 === (8))){
var inst_19052 = (state_19077[(7)]);
var tmp19089 = inst_19052;
var inst_19052__$1 = tmp19089;
var state_19077__$1 = (function (){var statearr_19093 = state_19077;
(statearr_19093[(7)] = inst_19052__$1);

return statearr_19093;
})();
var statearr_19094_19323 = state_19077__$1;
(statearr_19094_19323[(2)] = null);

(statearr_19094_19323[(1)] = (2));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_19095 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19095[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_19095[(1)] = (1));

return statearr_19095;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_19077){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_19077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19096){var ex__14410__auto__ = e19096;
var statearr_19097_19324 = state_19077;
(statearr_19097_19324[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_19077[(4)]))){
var statearr_19098_19325 = state_19077;
(statearr_19098_19325[(1)] = cljs.core.first.call(null,(state_19077[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19326 = state_19077;
state_19077 = G__19326;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_19077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_19077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19099 = f__14532__auto__.call(null);
(statearr_19099[(6)] = c__14531__auto___19298);

return statearr_19099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19101 = arguments.length;
switch (G__19101) {
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
var c__14531__auto___19331 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_19142){
var state_val_19143 = (state_19142[(1)]);
if((state_val_19143 === (7))){
var inst_19137 = (state_19142[(2)]);
var state_19142__$1 = state_19142;
var statearr_19146_19332 = state_19142__$1;
(statearr_19146_19332[(2)] = inst_19137);

(statearr_19146_19332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (1))){
var inst_19103 = (new Array(n));
var inst_19104 = inst_19103;
var inst_19105 = (0);
var state_19142__$1 = (function (){var statearr_19149 = state_19142;
(statearr_19149[(7)] = inst_19104);

(statearr_19149[(8)] = inst_19105);

return statearr_19149;
})();
var statearr_19150_19333 = state_19142__$1;
(statearr_19150_19333[(2)] = null);

(statearr_19150_19333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (4))){
var inst_19108 = (state_19142[(9)]);
var inst_19108__$1 = (state_19142[(2)]);
var inst_19109 = (inst_19108__$1 == null);
var inst_19110 = cljs.core.not.call(null,inst_19109);
var state_19142__$1 = (function (){var statearr_19153 = state_19142;
(statearr_19153[(9)] = inst_19108__$1);

return statearr_19153;
})();
if(inst_19110){
var statearr_19154_19334 = state_19142__$1;
(statearr_19154_19334[(1)] = (5));

} else {
var statearr_19156_19335 = state_19142__$1;
(statearr_19156_19335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (15))){
var inst_19131 = (state_19142[(2)]);
var state_19142__$1 = state_19142;
var statearr_19158_19336 = state_19142__$1;
(statearr_19158_19336[(2)] = inst_19131);

(statearr_19158_19336[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (13))){
var state_19142__$1 = state_19142;
var statearr_19159_19337 = state_19142__$1;
(statearr_19159_19337[(2)] = null);

(statearr_19159_19337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (6))){
var inst_19105 = (state_19142[(8)]);
var inst_19127 = (inst_19105 > (0));
var state_19142__$1 = state_19142;
if(cljs.core.truth_(inst_19127)){
var statearr_19160_19338 = state_19142__$1;
(statearr_19160_19338[(1)] = (12));

} else {
var statearr_19161_19339 = state_19142__$1;
(statearr_19161_19339[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (3))){
var inst_19139 = (state_19142[(2)]);
var state_19142__$1 = state_19142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19142__$1,inst_19139);
} else {
if((state_val_19143 === (12))){
var inst_19104 = (state_19142[(7)]);
var inst_19129 = cljs.core.vec.call(null,inst_19104);
var state_19142__$1 = state_19142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19142__$1,(15),out,inst_19129);
} else {
if((state_val_19143 === (2))){
var state_19142__$1 = state_19142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19142__$1,(4),ch);
} else {
if((state_val_19143 === (11))){
var inst_19120 = (state_19142[(2)]);
var inst_19121 = (new Array(n));
var inst_19104 = inst_19121;
var inst_19105 = (0);
var state_19142__$1 = (function (){var statearr_19168 = state_19142;
(statearr_19168[(10)] = inst_19120);

(statearr_19168[(7)] = inst_19104);

(statearr_19168[(8)] = inst_19105);

return statearr_19168;
})();
var statearr_19169_19340 = state_19142__$1;
(statearr_19169_19340[(2)] = null);

(statearr_19169_19340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (9))){
var inst_19104 = (state_19142[(7)]);
var inst_19118 = cljs.core.vec.call(null,inst_19104);
var state_19142__$1 = state_19142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19142__$1,(11),out,inst_19118);
} else {
if((state_val_19143 === (5))){
var inst_19104 = (state_19142[(7)]);
var inst_19105 = (state_19142[(8)]);
var inst_19108 = (state_19142[(9)]);
var inst_19113 = (state_19142[(11)]);
var inst_19112 = (inst_19104[inst_19105] = inst_19108);
var inst_19113__$1 = (inst_19105 + (1));
var inst_19114 = (inst_19113__$1 < n);
var state_19142__$1 = (function (){var statearr_19172 = state_19142;
(statearr_19172[(12)] = inst_19112);

(statearr_19172[(11)] = inst_19113__$1);

return statearr_19172;
})();
if(cljs.core.truth_(inst_19114)){
var statearr_19173_19341 = state_19142__$1;
(statearr_19173_19341[(1)] = (8));

} else {
var statearr_19174_19342 = state_19142__$1;
(statearr_19174_19342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (14))){
var inst_19134 = (state_19142[(2)]);
var inst_19135 = cljs.core.async.close_BANG_.call(null,out);
var state_19142__$1 = (function (){var statearr_19177 = state_19142;
(statearr_19177[(13)] = inst_19134);

return statearr_19177;
})();
var statearr_19178_19343 = state_19142__$1;
(statearr_19178_19343[(2)] = inst_19135);

(statearr_19178_19343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (10))){
var inst_19124 = (state_19142[(2)]);
var state_19142__$1 = state_19142;
var statearr_19182_19344 = state_19142__$1;
(statearr_19182_19344[(2)] = inst_19124);

(statearr_19182_19344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19143 === (8))){
var inst_19104 = (state_19142[(7)]);
var inst_19113 = (state_19142[(11)]);
var tmp19176 = inst_19104;
var inst_19104__$1 = tmp19176;
var inst_19105 = inst_19113;
var state_19142__$1 = (function (){var statearr_19185 = state_19142;
(statearr_19185[(7)] = inst_19104__$1);

(statearr_19185[(8)] = inst_19105);

return statearr_19185;
})();
var statearr_19186_19345 = state_19142__$1;
(statearr_19186_19345[(2)] = null);

(statearr_19186_19345[(1)] = (2));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_19189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19189[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_19189[(1)] = (1));

return statearr_19189;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_19142){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_19142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19190){var ex__14410__auto__ = e19190;
var statearr_19191_19346 = state_19142;
(statearr_19191_19346[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_19142[(4)]))){
var statearr_19194_19347 = state_19142;
(statearr_19194_19347[(1)] = cljs.core.first.call(null,(state_19142[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19348 = state_19142;
state_19142 = G__19348;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_19142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_19142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19200 = f__14532__auto__.call(null);
(statearr_19200[(6)] = c__14531__auto___19331);

return statearr_19200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19204 = arguments.length;
switch (G__19204) {
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
var c__14531__auto___19352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__14532__auto__ = (function (){var switch__14406__auto__ = (function (state_19261){
var state_val_19264 = (state_19261[(1)]);
if((state_val_19264 === (7))){
var inst_19257 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
var statearr_19267_19353 = state_19261__$1;
(statearr_19267_19353[(2)] = inst_19257);

(statearr_19267_19353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (1))){
var inst_19212 = [];
var inst_19213 = inst_19212;
var inst_19214 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19261__$1 = (function (){var statearr_19268 = state_19261;
(statearr_19268[(7)] = inst_19213);

(statearr_19268[(8)] = inst_19214);

return statearr_19268;
})();
var statearr_19269_19354 = state_19261__$1;
(statearr_19269_19354[(2)] = null);

(statearr_19269_19354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (4))){
var inst_19217 = (state_19261[(9)]);
var inst_19217__$1 = (state_19261[(2)]);
var inst_19220 = (inst_19217__$1 == null);
var inst_19221 = cljs.core.not.call(null,inst_19220);
var state_19261__$1 = (function (){var statearr_19273 = state_19261;
(statearr_19273[(9)] = inst_19217__$1);

return statearr_19273;
})();
if(inst_19221){
var statearr_19274_19356 = state_19261__$1;
(statearr_19274_19356[(1)] = (5));

} else {
var statearr_19275_19357 = state_19261__$1;
(statearr_19275_19357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (15))){
var inst_19213 = (state_19261[(7)]);
var inst_19249 = cljs.core.vec.call(null,inst_19213);
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19261__$1,(18),out,inst_19249);
} else {
if((state_val_19264 === (13))){
var inst_19243 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
var statearr_19279_19358 = state_19261__$1;
(statearr_19279_19358[(2)] = inst_19243);

(statearr_19279_19358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (6))){
var inst_19213 = (state_19261[(7)]);
var inst_19246 = inst_19213.length;
var inst_19247 = (inst_19246 > (0));
var state_19261__$1 = state_19261;
if(cljs.core.truth_(inst_19247)){
var statearr_19281_19359 = state_19261__$1;
(statearr_19281_19359[(1)] = (15));

} else {
var statearr_19282_19360 = state_19261__$1;
(statearr_19282_19360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (17))){
var inst_19254 = (state_19261[(2)]);
var inst_19255 = cljs.core.async.close_BANG_.call(null,out);
var state_19261__$1 = (function (){var statearr_19283 = state_19261;
(statearr_19283[(10)] = inst_19254);

return statearr_19283;
})();
var statearr_19284_19361 = state_19261__$1;
(statearr_19284_19361[(2)] = inst_19255);

(statearr_19284_19361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (3))){
var inst_19259 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19261__$1,inst_19259);
} else {
if((state_val_19264 === (12))){
var inst_19213 = (state_19261[(7)]);
var inst_19236 = cljs.core.vec.call(null,inst_19213);
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19261__$1,(14),out,inst_19236);
} else {
if((state_val_19264 === (2))){
var state_19261__$1 = state_19261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19261__$1,(4),ch);
} else {
if((state_val_19264 === (11))){
var inst_19213 = (state_19261[(7)]);
var inst_19217 = (state_19261[(9)]);
var inst_19224 = (state_19261[(11)]);
var inst_19233 = inst_19213.push(inst_19217);
var tmp19288 = inst_19213;
var inst_19213__$1 = tmp19288;
var inst_19214 = inst_19224;
var state_19261__$1 = (function (){var statearr_19290 = state_19261;
(statearr_19290[(12)] = inst_19233);

(statearr_19290[(7)] = inst_19213__$1);

(statearr_19290[(8)] = inst_19214);

return statearr_19290;
})();
var statearr_19293_19362 = state_19261__$1;
(statearr_19293_19362[(2)] = null);

(statearr_19293_19362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (9))){
var inst_19214 = (state_19261[(8)]);
var inst_19229 = cljs.core.keyword_identical_QMARK_.call(null,inst_19214,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19261__$1 = state_19261;
var statearr_19294_19363 = state_19261__$1;
(statearr_19294_19363[(2)] = inst_19229);

(statearr_19294_19363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (5))){
var inst_19217 = (state_19261[(9)]);
var inst_19224 = (state_19261[(11)]);
var inst_19214 = (state_19261[(8)]);
var inst_19225 = (state_19261[(13)]);
var inst_19224__$1 = f.call(null,inst_19217);
var inst_19225__$1 = cljs.core._EQ_.call(null,inst_19224__$1,inst_19214);
var state_19261__$1 = (function (){var statearr_19295 = state_19261;
(statearr_19295[(11)] = inst_19224__$1);

(statearr_19295[(13)] = inst_19225__$1);

return statearr_19295;
})();
if(inst_19225__$1){
var statearr_19296_19364 = state_19261__$1;
(statearr_19296_19364[(1)] = (8));

} else {
var statearr_19297_19365 = state_19261__$1;
(statearr_19297_19365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (14))){
var inst_19217 = (state_19261[(9)]);
var inst_19224 = (state_19261[(11)]);
var inst_19238 = (state_19261[(2)]);
var inst_19239 = [];
var inst_19240 = inst_19239.push(inst_19217);
var inst_19213 = inst_19239;
var inst_19214 = inst_19224;
var state_19261__$1 = (function (){var statearr_19299 = state_19261;
(statearr_19299[(14)] = inst_19238);

(statearr_19299[(15)] = inst_19240);

(statearr_19299[(7)] = inst_19213);

(statearr_19299[(8)] = inst_19214);

return statearr_19299;
})();
var statearr_19302_19366 = state_19261__$1;
(statearr_19302_19366[(2)] = null);

(statearr_19302_19366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (16))){
var state_19261__$1 = state_19261;
var statearr_19305_19367 = state_19261__$1;
(statearr_19305_19367[(2)] = null);

(statearr_19305_19367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (10))){
var inst_19231 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
if(cljs.core.truth_(inst_19231)){
var statearr_19307_19368 = state_19261__$1;
(statearr_19307_19368[(1)] = (11));

} else {
var statearr_19308_19369 = state_19261__$1;
(statearr_19308_19369[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (18))){
var inst_19251 = (state_19261[(2)]);
var state_19261__$1 = state_19261;
var statearr_19309_19370 = state_19261__$1;
(statearr_19309_19370[(2)] = inst_19251);

(statearr_19309_19370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19264 === (8))){
var inst_19225 = (state_19261[(13)]);
var state_19261__$1 = state_19261;
var statearr_19312_19371 = state_19261__$1;
(statearr_19312_19371[(2)] = inst_19225);

(statearr_19312_19371[(1)] = (10));


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
var cljs$core$async$state_machine__14407__auto__ = null;
var cljs$core$async$state_machine__14407__auto____0 = (function (){
var statearr_19314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19314[(0)] = cljs$core$async$state_machine__14407__auto__);

(statearr_19314[(1)] = (1));

return statearr_19314;
});
var cljs$core$async$state_machine__14407__auto____1 = (function (state_19261){
while(true){
var ret_value__14408__auto__ = (function (){try{while(true){
var result__14409__auto__ = switch__14406__auto__.call(null,state_19261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14409__auto__;
}
break;
}
}catch (e19316){var ex__14410__auto__ = e19316;
var statearr_19317_19372 = state_19261;
(statearr_19317_19372[(2)] = ex__14410__auto__);


if(cljs.core.seq.call(null,(state_19261[(4)]))){
var statearr_19318_19373 = state_19261;
(statearr_19318_19373[(1)] = cljs.core.first.call(null,(state_19261[(4)])));

} else {
throw ex__14410__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19374 = state_19261;
state_19261 = G__19374;
continue;
} else {
return ret_value__14408__auto__;
}
break;
}
});
cljs$core$async$state_machine__14407__auto__ = function(state_19261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14407__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14407__auto____1.call(this,state_19261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14407__auto____0;
cljs$core$async$state_machine__14407__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14407__auto____1;
return cljs$core$async$state_machine__14407__auto__;
})()
})();
var state__14533__auto__ = (function (){var statearr_19322 = f__14532__auto__.call(null);
(statearr_19322[(6)] = c__14531__auto___19352);

return statearr_19322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14533__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
