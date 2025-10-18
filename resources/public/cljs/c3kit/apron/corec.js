// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.corec');
goog.require('cljs.core');
goog.require('c3kit.apron.test_fabric');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.object');
goog.scope(function(){
c3kit.apron.corec.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like for-all, but with map
 */
c3kit.apron.corec.map_all = (function c3kit$apron$corec$map_all(var_args){
var G__7504 = arguments.length;
switch (G__7504) {
case 2:
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7509 = arguments.length;
var i__5750__auto___7510 = (0);
while(true){
if((i__5750__auto___7510 < len__5749__auto___7509)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7510]));

var G__7513 = (i__5750__auto___7510 + (1));
i__5750__auto___7510 = G__7513;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.doall.call(null,cljs.core.map.call(null,f,coll));
}));

(c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.doall.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
}));

/** @this {Function} */
(c3kit.apron.corec.map_all.cljs$lang$applyTo = (function (seq7501){
var G__7502 = cljs.core.first.call(null,seq7501);
var seq7501__$1 = cljs.core.next.call(null,seq7501);
var G__7503 = cljs.core.first.call(null,seq7501__$1);
var seq7501__$2 = cljs.core.next.call(null,seq7501__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7502,G__7503,seq7501__$2);
}));

(c3kit.apron.corec.map_all.cljs$lang$maxFixedArity = (2));

/**
 * Creates a collection where each element is put into component syntax: [component-fn item]
 *    Each component is given a React key using (key-fn item).
 */
c3kit.apron.corec.map_component = (function c3kit$apron$corec$map_component(key_fn,component_fn,coll){
return c3kit.apron.corec.map_all.call(null,(function (x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_fn,x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key_fn.call(null,x)], null));
}),coll);
});
/**
 * Like for-all, but with map-indexed
 */
c3kit.apron.corec.map_all_indexed = (function c3kit$apron$corec$map_all_indexed(f,coll){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,f,coll));
});
/**
 * assoc for js objects
 */
c3kit.apron.corec.oset = (function c3kit$apron$corec$oset(o,k,v){
if((o == null)){
var G__7514 = cljs.core.name.call(null,k);
var obj7516 = ({});
(obj7516[G__7514] = v);

return obj7516;
} else {
c3kit.apron.corec.goog$module$goog$object.set.call(null,o,cljs.core.name.call(null,k),v);

return o;
}
});
c3kit.apron.corec.k_name = (function c3kit$apron$corec$k_name(k){
if(typeof k === 'number'){
return k;
} else {
return cljs.core.name.call(null,k);
}
});
c3kit.apron.corec.o_name = (function c3kit$apron$corec$o_name(obj){
if(cljs.core.vector_QMARK_.call(null,obj)){
return "vector";
} else {
if(cljs.core.list_QMARK_.call(null,obj)){
return "list";
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return "set";
} else {
if((obj instanceof cljs.core.Keyword)){
return "keyword";
} else {
return clojure.string.lower_case.call(null,c3kit.apron.corec.goog$module$goog$object.get.call(null,cljs.core.type.call(null,obj),"name"));

}
}
}
}
});
c3kit.apron.corec.maybe_type_error = (function c3kit$apron$corec$maybe_type_error(k,obj){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7517_SHARP_){
return p1__7517_SHARP_.call(null,obj);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,cljs.core.number_QMARK_,cljs.core.keyword_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_], null)))){
var type_name = c3kit.apron.corec.o_name.call(null,obj);
var k__$1 = c3kit.apron.corec.k_name.call(null,k);
throw (new TypeError(["Cannot create property '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"' on ",type_name," '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj),"'"].join('')));
} else {
return null;
}
});
/**
 * assoc-in for js objects
 */
c3kit.apron.corec.oset_in = (function c3kit$apron$corec$oset_in(o,ks,v){
if(cljs.core.not.call(null,cljs.core.seq.call(null,ks))){
return o;
} else {
var o__$1 = (((o == null))?({}):o);
var o_7626__$2 = o__$1;
var G__7525_7627 = ks;
var vec__7526_7628 = G__7525_7627;
var seq__7527_7629 = cljs.core.seq.call(null,vec__7526_7628);
var first__7528_7630 = cljs.core.first.call(null,seq__7527_7629);
var seq__7527_7631__$1 = cljs.core.next.call(null,seq__7527_7629);
var k_7632 = first__7528_7630;
var ks_7633__$1 = seq__7527_7631__$1;
var o_7634__$3 = o_7626__$2;
var G__7525_7635__$1 = G__7525_7627;
while(true){
var o_7636__$4 = o_7634__$3;
var vec__7589_7637 = G__7525_7635__$1;
var seq__7590_7638 = cljs.core.seq.call(null,vec__7589_7637);
var first__7591_7639 = cljs.core.first.call(null,seq__7590_7638);
var seq__7590_7640__$1 = cljs.core.next.call(null,seq__7590_7638);
var k_7641__$1 = first__7591_7639;
var ks_7642__$2 = seq__7590_7640__$1;
var k_7644__$2 = c3kit.apron.corec.k_name.call(null,k_7641__$1);
if(cljs.core.seq.call(null,ks_7642__$2)){
var temp__5823__auto___7647 = c3kit.apron.corec.goog$module$goog$object.get.call(null,o_7636__$4,k_7644__$2);
if(cljs.core.truth_(temp__5823__auto___7647)){
var o_next_7648 = temp__5823__auto___7647;
var or__5025__auto___7649 = c3kit.apron.corec.maybe_type_error.call(null,cljs.core.first.call(null,ks_7642__$2),o_next_7648);
if(cljs.core.truth_(or__5025__auto___7649)){
} else {
var G__7650 = o_next_7648;
var G__7651 = ks_7642__$2;
o_7634__$3 = G__7650;
G__7525_7635__$1 = G__7651;
continue;
}
} else {
var o_next_7652 = ({});
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_7636__$4,k_7644__$2,o_next_7652);

var G__7653 = o_next_7652;
var G__7654 = ks_7642__$2;
o_7634__$3 = G__7653;
G__7525_7635__$1 = G__7654;
continue;
}
} else {
c3kit.apron.corec.goog$module$goog$object.set.call(null,o_7636__$4,k_7644__$2,v);
}
break;
}

return o__$1;
}
});
/**
 * get for js objects
 */
c3kit.apron.corec.oget = (function c3kit$apron$corec$oget(var_args){
var G__7625 = arguments.length;
switch (G__7625) {
case 2:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return c3kit.apron.corec.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),null);
}));

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return c3kit.apron.corec.goog$module$goog$object.get.call(null,o,cljs.core.name.call(null,k),not_found);
}));

(c3kit.apron.corec.oget.cljs$lang$maxFixedArity = 3);

/**
 * get-in for js objects
 */
c3kit.apron.corec.oget_in = (function c3kit$apron$corec$oget_in(var_args){
var G__7646 = arguments.length;
switch (G__7646) {
case 2:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return c3kit.apron.corec.oget_in.call(null,o,ks,null);
}));

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var or__5025__auto__ = cljs.core.apply.call(null,c3kit.apron.corec.goog$module$goog$object.getValueByKeys,o,cljs.core.map.call(null,(function (p1__7643_SHARP_){
if(typeof p1__7643_SHARP_ === 'number'){
return p1__7643_SHARP_;
} else {
return cljs.core.name.call(null,p1__7643_SHARP_);
}
}),ks));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(c3kit.apron.corec.oget_in.cljs$lang$maxFixedArity = 3);

c3kit.apron.corec.new_uuid = (function c3kit$apron$corec$new_uuid(){
return cljs.core.random_uuid.call(null);
});
/**
 * ensures the seq is a vector before conj-ing
 */
c3kit.apron.corec.conjv = (function c3kit$apron$corec$conjv(col,item){
return cljs.core.conj.call(null,cljs.core.vec.call(null,col),item);
});
/**
 * ensures the seq is a vector after concat-ing
 */
c3kit.apron.corec.concatv = (function c3kit$apron$corec$concatv(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7661 = arguments.length;
var i__5750__auto___7662 = (0);
while(true){
if((i__5750__auto___7662 < len__5749__auto___7661)){
args__5755__auto__.push((arguments[i__5750__auto___7662]));

var G__7663 = (i__5750__auto___7662 + (1));
i__5750__auto___7662 = G__7663;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cols));
}));

(c3kit.apron.corec.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.concatv.cljs$lang$applyTo = (function (seq7656){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7656));
}));

/**
 * insert elem into vector at index 
 */
c3kit.apron.corec.assocv = (function c3kit$apron$corec$assocv(coll,i,elem){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.subvec.call(null,coll,i)));
});
/**
 * removes the item at index i from the vector
 */
c3kit.apron.corec.dissocv = (function c3kit$apron$corec$dissocv(coll,i){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),i),cljs.core.subvec.call(null,coll,(i + (1)))));
});
/**
 * assocv with coll as last param
 */
c3kit.apron.corec.assocv_GT__GT_ = (function c3kit$apron$corec$assocv_GT__GT_(i,elem,coll){
return c3kit.apron.corec.assocv.call(null,coll,i,elem);
});
/**
 * dissocv with coll as last param
 */
c3kit.apron.corec.dissocv_GT__GT_ = (function c3kit$apron$corec$dissocv_GT__GT_(i,coll){
return c3kit.apron.corec.dissocv.call(null,coll,i);
});
c3kit.apron.corec.removev = (function c3kit$apron$corec$removev(pred,col){

return cljs.core.vec.call(null,cljs.core.remove.call(null,pred,col));
});
c3kit.apron.corec.removev_EQ_ = (function c3kit$apron$corec$removev_EQ_(col,item){

return c3kit.apron.corec.removev.call(null,(function (p1__7665_SHARP_){
return cljs.core._EQ_.call(null,p1__7665_SHARP_,item);
}),col);
});
/**
 * Same as (first (filter ...)), but faster!
 */
c3kit.apron.corec.ffilter = (function c3kit$apron$corec$ffilter(pred,coll){
return cljs.core.reduce.call(null,(function (_,b){
if(cljs.core.truth_(pred.call(null,b))){
return cljs.core.reduced.call(null,b);
} else {
return null;
}
}),null,coll);
});
/**
 * Sums the results of a function applied to the elements of a collection
 */
c3kit.apron.corec.sum_by = (function c3kit$apron$corec$sum_by(f,coll){
return cljs.core.transduce.call(null,cljs.core.map.call(null,f),cljs.core._PLUS_,coll);
});
/**
 * DEPRECATED: Use `keep` instead.
 * Like (filter some? (map f coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.map_some = (function c3kit$apron$corec$map_some(var_args){
var G__7676 = arguments.length;
switch (G__7676) {
case 1:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7684 = arguments.length;
var i__5750__auto___7685 = (0);
while(true){
if((i__5750__auto___7685 < len__5749__auto___7684)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7685]));

var G__7686 = (i__5750__auto___7685 + (1));
i__5750__auto___7685 = G__7686;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.filter.call(null,cljs.core.some_QMARK_));
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.map_some.call(null,f),coll);
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.apply.call(null,cljs.core.sequence,c3kit.apron.corec.map_some.call(null,f),coll,colls);
}));

/** @this {Function} */
(c3kit.apron.corec.map_some.cljs$lang$applyTo = (function (seq7670){
var G__7671 = cljs.core.first.call(null,seq7670);
var seq7670__$1 = cljs.core.next.call(null,seq7670);
var G__7672 = cljs.core.first.call(null,seq7670__$1);
var seq7670__$2 = cljs.core.next.call(null,seq7670__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7671,G__7672,seq7670__$2);
}));

(c3kit.apron.corec.map_some.cljs$lang$maxFixedArity = (2));

/**
 * Like (map f (filter some? coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.some_map = (function c3kit$apron$corec$some_map(var_args){
var G__7682 = arguments.length;
switch (G__7682) {
case 1:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.filter.call(null,cljs.core.some_QMARK_),cljs.core.map.call(null,f));
}));

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.some_map.call(null,f),coll);
}));

(c3kit.apron.corec.some_map.cljs$lang$maxFixedArity = 2);

/**
 * Like (set (map f coll))
 */
c3kit.apron.corec.map_set = (function c3kit$apron$corec$map_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f),coll);
});
/**
 * Like (set (mapcat f coll))
 */
c3kit.apron.corec.mapcat_set = (function c3kit$apron$corec$mapcat_set(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,f),coll);
});
/**
 * Like (distinct (map f coll))
 */
c3kit.apron.corec.map_distinct = (function c3kit$apron$corec$map_distinct(var_args){
var G__7698 = arguments.length;
switch (G__7698) {
case 1:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.distinct.call(null));
}));

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,c3kit.apron.corec.map_distinct.call(null,f),coll);
}));

(c3kit.apron.corec.map_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort, but reversed
 */
c3kit.apron.corec.rsort = (function c3kit$apron$corec$rsort(var_args){
var G__7723 = arguments.length;
switch (G__7723) {
case 1:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return c3kit.apron.corec.rsort.call(null,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2 = (function (comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return comp.call(null,y,x);
}),coll);
}));

(c3kit.apron.corec.rsort.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort-by, but reversed
 */
c3kit.apron.corec.rsort_by = (function c3kit$apron$corec$rsort_by(var_args){
var G__7729 = arguments.length;
switch (G__7729) {
case 2:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return c3kit.apron.corec.rsort_by.call(null,keyfn,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,comp,coll){
return cljs.core.sort_by.call(null,keyfn,(function (x,y){
return comp.call(null,y,x);
}),coll);
}));

(c3kit.apron.corec.rsort_by.cljs$lang$maxFixedArity = 3);

/**
 * Returns a lazy sequence of the items in coll starting from the
 * first item for which (pred item) returns logical true.  Returns a
 * stateful transducer when no collection is provided.
 */
c3kit.apron.corec.drop_until = (function c3kit$apron$corec$drop_until(var_args){
var G__7732 = arguments.length;
switch (G__7732) {
case 1:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred));
}));

(c3kit.apron.corec.drop_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll);
}));

(c3kit.apron.corec.drop_until.cljs$lang$maxFixedArity = 2);

/**
 * Returns a lazy sequence of successive items from coll while
 * (pred item) returns logical false. pred must be free of side effects.
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.take_until = (function c3kit$apron$corec$take_until(var_args){
var G__7735 = arguments.length;
switch (G__7735) {
case 1:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return cljs.core.take_while.call(null,cljs.core.complement.call(null,pred));
}));

(c3kit.apron.corec.take_until.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.take_while.call(null,cljs.core.complement.call(null,pred),coll);
}));

(c3kit.apron.corec.take_until.cljs$lang$maxFixedArity = 2);

c3kit.apron.corec.greatest_v = (function c3kit$apron$corec$greatest_v(var_args){
var G__7794 = arguments.length;
switch (G__7794) {
case 1:
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___7812 = arguments.length;
var i__5750__auto___7813 = (0);
while(true){
if((i__5750__auto___7813 < len__5749__auto___7812)){
args_arr__5774__auto__.push((arguments[i__5750__auto___7813]));

var G__7819 = (i__5750__auto___7813 + (1));
i__5750__auto___7813 = G__7819;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic = (function (greater_QMARK_,init,vals){
return cljs.core.reduce.call(null,(function (p1__7788_SHARP_,p2__7789_SHARP_){
if(cljs.core.truth_(greater_QMARK_.call(null,cljs.core.compare.call(null,p1__7788_SHARP_,p2__7789_SHARP_)))){
return p1__7788_SHARP_;
} else {
return p2__7789_SHARP_;
}
}),init,vals);
}));

/** @this {Function} */
(c3kit.apron.corec.greatest_v.cljs$lang$applyTo = (function (seq7791){
var G__7792 = cljs.core.first.call(null,seq7791);
var seq7791__$1 = cljs.core.next.call(null,seq7791);
var G__7793 = cljs.core.first.call(null,seq7791__$1);
var seq7791__$2 = cljs.core.next.call(null,seq7791__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7792,G__7793,seq7791__$2);
}));

(c3kit.apron.corec.greatest_v.cljs$lang$maxFixedArity = (2));

/**
 * Like max, but works with non-numeric values
 */
c3kit.apron.corec.max_v = cljs.core.partial.call(null,c3kit.apron.corec.greatest_v,cljs.core.pos_QMARK_);
/**
 * Like min, but works with non-numeric values
 */
c3kit.apron.corec.min_v = cljs.core.partial.call(null,c3kit.apron.corec.greatest_v,cljs.core.neg_QMARK_);
c3kit.apron.corec.greatest_m = (function c3kit$apron$corec$greatest_m(greater_QMARK_,k,comp,x,y){
if(cljs.core.truth_(greater_QMARK_.call(null,comp.call(null,cljs.core.get.call(null,x,k),cljs.core.get.call(null,y,k))))){
return x;
} else {
return y;
}
});
c3kit.apron.corec.greatest_by = (function c3kit$apron$corec$greatest_by(var_args){
var G__7868 = arguments.length;
switch (G__7868) {
case 3:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3 = (function (pos_neg_QMARK_,k,coll){
return c3kit.apron.corec.greatest_by.call(null,pos_neg_QMARK_,k,cljs.core.compare,coll);
}));

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4 = (function (pos_neg_QMARK_,k,comp,p__7872){
var vec__7873 = p__7872;
var seq__7874 = cljs.core.seq.call(null,vec__7873);
var first__7875 = cljs.core.first.call(null,seq__7874);
var seq__7874__$1 = cljs.core.next.call(null,seq__7874);
var first = first__7875;
var rest = seq__7874__$1;
return cljs.core.reduce.call(null,(function (p1__7864_SHARP_,p2__7865_SHARP_){
return c3kit.apron.corec.greatest_m.call(null,pos_neg_QMARK_,k,comp,p1__7864_SHARP_,p2__7865_SHARP_);
}),first,rest);
}));

(c3kit.apron.corec.greatest_by.cljs$lang$maxFixedArity = 4);

/**
 * Like max-key, but works with non-numeric values.
 */
c3kit.apron.corec.max_by = cljs.core.partial.call(null,c3kit.apron.corec.greatest_by,cljs.core.pos_QMARK_);
/**
 * Like min-key, but works with non-numeric values.
 */
c3kit.apron.corec.min_by = cljs.core.partial.call(null,c3kit.apron.corec.greatest_by,cljs.core.neg_QMARK_);
/**
 * Insert in threading macro to print the value.
 */
c3kit.apron.corec.__GT_inspect = (function c3kit$apron$corec$__GT_inspect(v){
cljs.core.prn.call(null,"->inspect: ",v);

return v;
});
/**
 * Returns the index of e (using =) in the seq. nil if missing.
 */
c3kit.apron.corec.index_of = (function c3kit$apron$corec$index_of(e,coll){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__7889_SHARP_,p2__7888_SHARP_){
if(cljs.core._EQ_.call(null,e,p2__7888_SHARP_)){
return p1__7889_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Takes keyword argument and converts them to a map.  If the args are prefixed with a map, the rest of the
 *   args are merged in.
 */
c3kit.apron.corec.__GT_options = (function c3kit$apron$corec$__GT_options(options){
if((options == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),options)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options))){
return cljs.core.merge.call(null,cljs.core.first.call(null,options),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.rest.call(null,options)));
} else {
return cljs.core.apply.call(null,cljs.core.hash_map,options);

}
}
}
});
/**
 * Platform agnostic string format fm
 */
c3kit.apron.corec.formats = (function c3kit$apron$corec$formats(var_args){
var args__5755__auto__ = [];
var len__5749__auto___7930 = arguments.length;
var i__5750__auto___7931 = (0);
while(true){
if((i__5750__auto___7931 < len__5749__auto___7930)){
args__5755__auto__.push((arguments[i__5750__auto___7931]));

var G__7932 = (i__5750__auto___7931 + (1));
i__5750__auto___7931 = G__7932;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic = (function (format,args){
return cljs.core.apply.call(null,goog.string.format,format,args);
}));

(c3kit.apron.corec.formats.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.formats.cljs$lang$applyTo = (function (seq7918){
var G__7919 = cljs.core.first.call(null,seq7918);
var seq7918__$1 = cljs.core.next.call(null,seq7918);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7919,seq7918__$1);
}));

/**
 * Creates a string of a given length by repeating the provided value.
 */
c3kit.apron.corec.__GT_string = (function c3kit$apron$corec$__GT_string(v,length){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,length,v));
});
/**
 * Pads the left side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_left = (function c3kit$apron$corec$pad_left(var_args){
var G__7948 = arguments.length;
switch (G__7948) {
case 2:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
var G__7974 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7974)].join('');
} else {
return G__7974;
}
}));

(c3kit.apron.corec.pad_left.cljs$lang$maxFixedArity = 3);

/**
 * Pads the right side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_right = (function c3kit$apron$corec$pad_right(var_args){
var G__7984 = arguments.length;
switch (G__7984) {
case 2:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
var G__7995 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7995),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size)))].join('');
} else {
return G__7995;
}
}));

(c3kit.apron.corec.pad_right.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-left, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_left_BANG_ = (function c3kit$apron$corec$pad_left_BANG_(var_args){
var G__8001 = arguments.length;
switch (G__8001) {
case 2:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left_BANG_.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
if(cljs.core._EQ_.call(null,length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.call(null,s,(size - length));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');

}
}
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-right, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_right_BANG_ = (function c3kit$apron$corec$pad_right_BANG_(var_args){
var G__8013 = arguments.length;
switch (G__8013) {
case 2:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right_BANG_.call(null,s,length," ");
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count.call(null,s);
if(cljs.core._EQ_.call(null,length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.call(null,s,(0),length);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string.call(null,v,(length - size)))].join('');

}
}
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Char code at the given index of a string
 */
c3kit.apron.corec.char_code_at = (function c3kit$apron$corec$char_code_at(s,i){
return s.charCodeAt(i);
});
/**
 * Char code at index 0 of a string
 */
c3kit.apron.corec.first_char_code = (function c3kit$apron$corec$first_char_code(s){
return c3kit.apron.corec.char_code_at.call(null,s,(0));
});
c3kit.apron.corec.not_blank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
/**
 * Return a map where all the keys with blank values are removed
 */
c3kit.apron.corec.remove_blanks = (function c3kit$apron$corec$remove_blanks(e){
return cljs.core.reduce.call(null,(function (r,p__8015){
var vec__8016 = p__8015;
var k = cljs.core.nth.call(null,vec__8016,(0),null);
var v = cljs.core.nth.call(null,vec__8016,(1),null);
if(clojure.string.blank_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))){
return r;
} else {
return cljs.core.assoc.call(null,r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Return a map where all the keys with nil values are removed
 */
c3kit.apron.corec.remove_nils = (function c3kit$apron$corec$remove_nils(e){
return cljs.core.reduce.call(null,(function (r,p__8019){
var vec__8020 = p__8019;
var k = cljs.core.nth.call(null,vec__8020,(0),null);
var v = cljs.core.nth.call(null,vec__8020,(1),null);
if(cljs.core._EQ_.call(null,null,v)){
return r;
} else {
return cljs.core.assoc.call(null,r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Returns true is e is an exception/error for the running platform
 */
c3kit.apron.corec.ex_QMARK_ = (function c3kit$apron$corec$ex_QMARK_(e){
return (e instanceof Error);
});
/**
 * Does nothing
 */
c3kit.apron.corec.noop = (function c3kit$apron$corec$noop(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8029 = arguments.length;
var i__5750__auto___8030 = (0);
while(true){
if((i__5750__auto___8030 < len__5749__auto___8029)){
args__5755__auto__.push((arguments[i__5750__auto___8030]));

var G__8031 = (i__5750__auto___8030 + (1));
i__5750__auto___8030 = G__8031;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(c3kit.apron.corec.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.noop.cljs$lang$applyTo = (function (seq8024){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8024));
}));

/**
 * Insert in threading macro to invoke a function with a given set of arguments.
 */
c3kit.apron.corec.invoke = (function c3kit$apron$corec$invoke(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8043 = arguments.length;
var i__5750__auto___8044 = (0);
while(true){
if((i__5750__auto___8044 < len__5749__auto___8043)){
args__5755__auto__.push((arguments[i__5750__auto___8044]));

var G__8045 = (i__5750__auto___8044 + (1));
i__5750__auto___8044 = G__8045;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,args);
}));

(c3kit.apron.corec.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.invoke.cljs$lang$applyTo = (function (seq8027){
var G__8028 = cljs.core.first.call(null,seq8027);
var seq8027__$1 = cljs.core.next.call(null,seq8027);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8028,seq8027__$1);
}));

/**
 * Create an n-arity function from a 0-arity function
 */
c3kit.apron.corec.narity = (function c3kit$apron$corec$narity(f){
return (function() { 
var G__8051__delegate = function (_){
return f.call(null);
};
var G__8051 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8052__i = 0, G__8052__a = new Array(arguments.length -  0);
while (G__8052__i < G__8052__a.length) {G__8052__a[G__8052__i] = arguments[G__8052__i + 0]; ++G__8052__i;}
  _ = new cljs.core.IndexedSeq(G__8052__a,0,null);
} 
return G__8051__delegate.call(this,_);};
G__8051.cljs$lang$maxFixedArity = 0;
G__8051.cljs$lang$applyTo = (function (arglist__8053){
var _ = cljs.core.seq(arglist__8053);
return G__8051__delegate(_);
});
G__8051.cljs$core$IFn$_invoke$arity$variadic = G__8051__delegate;
return G__8051;
})()
;
});
/**
 * Filters coll by items matching kvs.
 */
c3kit.apron.corec.find_by = (function c3kit$apron$corec$find_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8059 = arguments.length;
var i__5750__auto___8060 = (0);
while(true){
if((i__5750__auto___8060 < len__5749__auto___8059)){
args__5755__auto__.push((arguments[i__5750__auto___8060]));

var G__8063 = (i__5750__auto___8060 + (1));
i__5750__auto___8060 = G__8063;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.find_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8054){
var map__8055 = p__8054;
var map__8055__$1 = cljs.core.__destructure_map.call(null,map__8055);
var kvs = map__8055__$1;
var G__8056 = coll;
if(cljs.core.seq.call(null,kvs)){
return cljs.core.filter.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),G__8056);
} else {
return G__8056;
}
}));

(c3kit.apron.corec.find_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.find_by.cljs$lang$applyTo = (function (seq8046){
var G__8047 = cljs.core.first.call(null,seq8046);
var seq8046__$1 = cljs.core.next.call(null,seq8046);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8047,seq8046__$1);
}));

/**
 * Finds the first item in coll matching kvs.
 */
c3kit.apron.corec.ffind_by = (function c3kit$apron$corec$ffind_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8084 = arguments.length;
var i__5750__auto___8085 = (0);
while(true){
if((i__5750__auto___8085 < len__5749__auto___8084)){
args__5755__auto__.push((arguments[i__5750__auto___8085]));

var G__8086 = (i__5750__auto___8085 + (1));
i__5750__auto___8085 = G__8086;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.ffind_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8080){
var map__8081 = p__8080;
var map__8081__$1 = cljs.core.__destructure_map.call(null,map__8081);
var kvs = map__8081__$1;
return c3kit.apron.corec.ffilter.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),coll);
}));

(c3kit.apron.corec.ffind_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.ffind_by.cljs$lang$applyTo = (function (seq8057){
var G__8058 = cljs.core.first.call(null,seq8057);
var seq8057__$1 = cljs.core.next.call(null,seq8057);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8058,seq8057__$1);
}));

/**
 * Counts the number of items in coll that satisfy a predicate
 */
c3kit.apron.corec.count_where = (function c3kit$apron$corec$count_where(pred,coll){
return cljs.core.reduce.call(null,(function (p1__8083_SHARP_,p2__8082_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__8082_SHARP_))){
return (p1__8083_SHARP_ + (1));
} else {
return p1__8083_SHARP_;
}
}),(0),coll);
});
/**
 * Counts the number of items in coll that
 * exactly match some given key-value pairs
 */
c3kit.apron.corec.count_by = (function c3kit$apron$corec$count_by(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8092 = arguments.length;
var i__5750__auto___8093 = (0);
while(true){
if((i__5750__auto___8093 < len__5749__auto___8092)){
args__5755__auto__.push((arguments[i__5750__auto___8093]));

var G__8094 = (i__5750__auto___8093 + (1));
i__5750__auto___8093 = G__8094;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__8090){
var map__8091 = p__8090;
var map__8091__$1 = cljs.core.__destructure_map.call(null,map__8091);
var kvs = map__8091__$1;
if(cljs.core.seq.call(null,kvs)){
return c3kit.apron.corec.count_where.call(null,c3kit.apron.test_fabric.spec__GT_tester.call(null,kvs),coll);
} else {
return cljs.core.count.call(null,coll);
}
}));

(c3kit.apron.corec.count_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.count_by.cljs$lang$applyTo = (function (seq8088){
var G__8089 = cljs.core.first.call(null,seq8088);
var seq8088__$1 = cljs.core.next.call(null,seq8088);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8089,seq8088__$1);
}));


//# sourceMappingURL=corec.js.map
