// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.manual_worker');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
c3kit.wire.mock.manual_worker.id_pool = cljs.core.atom.call(null,(0));
c3kit.wire.mock.manual_worker.workers = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
c3kit.wire.mock.manual_worker.workers_for_kind = (function c3kit$wire$mock$manual_worker$workers_for_kind(kind){
return c3kit.apron.corec.find_by.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,c3kit.wire.mock.manual_worker.workers)),new cljs.core.Keyword(null,"kind","kind",-717265803),kind);
});
c3kit.wire.mock.manual_worker.clear_worker_BANG_ = (function c3kit$wire$mock$manual_worker$clear_worker_BANG_(id){
cljs.core.swap_BANG_.call(null,c3kit.wire.mock.manual_worker.workers,cljs.core.dissoc,id);

return null;
});
c3kit.wire.mock.manual_worker.find_worker = (function c3kit$wire$mock$manual_worker$find_worker(worker_or_id){
if(cljs.core.map_QMARK_.call(null,worker_or_id)){
return worker_or_id;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,c3kit.wire.mock.manual_worker.workers),worker_or_id);
}
});
c3kit.wire.mock.manual_worker.intervals = (function c3kit$wire$mock$manual_worker$intervals(){
return c3kit.wire.mock.manual_worker.workers_for_kind.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417));
});
c3kit.wire.mock.manual_worker.timeouts = (function c3kit$wire$mock$manual_worker$timeouts(){
return c3kit.wire.mock.manual_worker.workers_for_kind.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
});
c3kit.wire.mock.manual_worker.clear_BANG_ = (function c3kit$wire$mock$manual_worker$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,c3kit.wire.mock.manual_worker.workers,cljs.core.PersistentArrayMap.EMPTY);
});
c3kit.wire.mock.manual_worker.tick_BANG_ = (function c3kit$wire$mock$manual_worker$tick_BANG_(worker_or_id){
var map__15614 = c3kit.wire.mock.manual_worker.find_worker.call(null,worker_or_id);
var map__15614__$1 = cljs.core.__destructure_map.call(null,map__15614);
var id = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var kind = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var code = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var handler = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var args = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),kind)){
c3kit.wire.mock.manual_worker.clear_worker_BANG_.call(null,id);
} else {
}

if(cljs.core.truth_(code)){
return eval(code);
} else {
return cljs.core.apply.call(null,handler,args);
}
});
c3kit.wire.mock.manual_worker.__GT_worker = (function c3kit$wire$mock$manual_worker$__GT_worker(kind,id,executable,timeout,args){
var interval = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"delay","delay",-574225219),timeout], null);
if(typeof executable === 'string'){
return cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"code","code",1586293142),executable);
} else {
var G__15616 = cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"handler","handler",-195596612),executable);
if(cljs.core.seq.call(null,args)){
return cljs.core.assoc.call(null,G__15616,new cljs.core.Keyword(null,"args","args",1315556576),args);
} else {
return G__15616;
}
}
});
c3kit.wire.mock.manual_worker.create_kind_BANG_ = (function c3kit$wire$mock$manual_worker$create_kind_BANG_(kind,executable,timeout,args){
var id = cljs.core.swap_BANG_.call(null,c3kit.wire.mock.manual_worker.id_pool,cljs.core.inc);
var kind_name = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),kind))?"Timeout":"Interval");
if((timeout > (0))){
} else {
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.mock.manual-worker",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[kind_name," created with a delay of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timeout),". This will execute on every 'tick'."].join('')], null);
}),null)),null,(71),null);
}

if(typeof executable === 'string'){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"c3kit.wire.mock.manual-worker",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[kind_name," created with a string instead of a function. eval will be executed."].join('')], null);
}),null)),null,(72),null);
} else {
}

cljs.core.swap_BANG_.call(null,c3kit.wire.mock.manual_worker.workers,cljs.core.assoc,id,c3kit.wire.mock.manual_worker.__GT_worker.call(null,kind,id,executable,timeout,args));

return id;
});
c3kit.wire.mock.manual_worker.create_interval_BANG_ = (function c3kit$wire$mock$manual_worker$create_interval_BANG_(var_args){
var G__15619 = arguments.length;
switch (G__15619) {
case 2:
return c3kit.wire.mock.manual_worker.create_interval_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.mock.manual_worker.create_interval_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.mock.manual_worker.create_interval_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executable,timeout){
return c3kit.wire.mock.manual_worker.create_interval_BANG_.call(null,executable,timeout,null);
}));

(c3kit.wire.mock.manual_worker.create_interval_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (executable,timeout,args){
return c3kit.wire.mock.manual_worker.create_kind_BANG_.call(null,new cljs.core.Keyword(null,"interval","interval",1708495417),executable,timeout,args);
}));

(c3kit.wire.mock.manual_worker.create_interval_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.mock.manual_worker.create_timeout_BANG_ = (function c3kit$wire$mock$manual_worker$create_timeout_BANG_(var_args){
var G__15621 = arguments.length;
switch (G__15621) {
case 2:
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.mock.manual_worker.create_timeout_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (executable,timeout){
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.call(null,executable,timeout,null);
}));

(c3kit.wire.mock.manual_worker.create_timeout_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (executable,timeout,args){
return c3kit.wire.mock.manual_worker.create_kind_BANG_.call(null,new cljs.core.Keyword(null,"timeout","timeout",-318625318),executable,timeout,args);
}));

(c3kit.wire.mock.manual_worker.create_timeout_BANG_.cljs$lang$maxFixedArity = 3);

c3kit.wire.mock.manual_worker.set_interval = (function c3kit$wire$mock$manual_worker$set_interval(var_args){
var G__15629 = arguments.length;
switch (G__15629) {
case 1:
return c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___15652 = arguments.length;
var i__5750__auto___15653 = (0);
while(true){
if((i__5750__auto___15653 < len__5749__auto___15652)){
args_arr__5774__auto__.push((arguments[i__5750__auto___15653]));

var G__15654 = (i__5750__auto___15653 + (1));
i__5750__auto___15653 = G__15654;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$1 = (function (code_or_fn){
return c3kit.wire.mock.manual_worker.create_interval_BANG_.call(null,code_or_fn,(0));
}));

(c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$2 = (function (code_or_fn,timeout){
return c3kit.wire.mock.manual_worker.create_interval_BANG_.call(null,code_or_fn,timeout);
}));

(c3kit.wire.mock.manual_worker.set_interval.cljs$core$IFn$_invoke$arity$variadic = (function (code_or_fn,timeout,args){
return c3kit.wire.mock.manual_worker.create_interval_BANG_.call(null,code_or_fn,timeout,args);
}));

/** @this {Function} */
(c3kit.wire.mock.manual_worker.set_interval.cljs$lang$applyTo = (function (seq15624){
var G__15625 = cljs.core.first.call(null,seq15624);
var seq15624__$1 = cljs.core.next.call(null,seq15624);
var G__15628 = cljs.core.first.call(null,seq15624__$1);
var seq15624__$2 = cljs.core.next.call(null,seq15624__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15625,G__15628,seq15624__$2);
}));

(c3kit.wire.mock.manual_worker.set_interval.cljs$lang$maxFixedArity = (2));

c3kit.wire.mock.manual_worker.clear_interval = (function c3kit$wire$mock$manual_worker$clear_interval(id){
return c3kit.wire.mock.manual_worker.clear_worker_BANG_.call(null,id);
});
c3kit.wire.mock.manual_worker.set_timeout = (function c3kit$wire$mock$manual_worker$set_timeout(var_args){
var G__15659 = arguments.length;
switch (G__15659) {
case 1:
return c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___15664 = arguments.length;
var i__5750__auto___15665 = (0);
while(true){
if((i__5750__auto___15665 < len__5749__auto___15664)){
args_arr__5774__auto__.push((arguments[i__5750__auto___15665]));

var G__15666 = (i__5750__auto___15665 + (1));
i__5750__auto___15665 = G__15666;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$1 = (function (code_or_fn){
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.call(null,code_or_fn,(0));
}));

(c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$2 = (function (code_or_fn,timeout){
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.call(null,code_or_fn,timeout);
}));

(c3kit.wire.mock.manual_worker.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (code_or_fn,timeout,args){
return c3kit.wire.mock.manual_worker.create_timeout_BANG_.call(null,code_or_fn,timeout,args);
}));

/** @this {Function} */
(c3kit.wire.mock.manual_worker.set_timeout.cljs$lang$applyTo = (function (seq15656){
var G__15657 = cljs.core.first.call(null,seq15656);
var seq15656__$1 = cljs.core.next.call(null,seq15656);
var G__15658 = cljs.core.first.call(null,seq15656__$1);
var seq15656__$2 = cljs.core.next.call(null,seq15656__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15657,G__15658,seq15656__$2);
}));

(c3kit.wire.mock.manual_worker.set_timeout.cljs$lang$maxFixedArity = (2));

c3kit.wire.mock.manual_worker.clear_timeout = (function c3kit$wire$mock$manual_worker$clear_timeout(id){
return c3kit.wire.mock.manual_worker.clear_worker_BANG_.call(null,id);
});

//# sourceMappingURL=manual_worker.js.map
