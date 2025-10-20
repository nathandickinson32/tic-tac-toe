// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.stub');
goog.require('cljs.core');
speclj.stub.check_recording = (function speclj$stub$check_recording(){
if(cljs.core.truth_(speclj.stub._STAR_stubbed_invocations_STAR_)){
return null;
} else {
throw (new Error("Stub recoding not bound.  Please add (with-stubs) to the decribe/context."));
}
});
/**
 * Removes all previous stub invocations to continue with a blank slate.
 */
speclj.stub.clear_BANG_ = (function speclj$stub$clear_BANG_(){
speclj.stub.check_recording.call(null);

return cljs.core.reset_BANG_.call(null,speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.PersistentVector.EMPTY);
});
speclj.stub._record_invocation = (function speclj$stub$_record_invocation(name,args){
speclj.stub.check_recording.call(null);

var args__$1 = ((cljs.core._EQ_.call(null,null,args))?cljs.core.PersistentVector.EMPTY:cljs.core.vec.call(null,args));
return cljs.core.swap_BANG_.call(null,speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,args__$1], null));
});
speclj.stub.arity_mismatch_message = "Stub %s was invoked with %s arguments, but the :invoke fn has a different arity";
speclj.stub.invoke_delegate = (function speclj$stub$invoke_delegate(name,delegate,args){
return cljs.core.apply.call(null,delegate,args);
});
speclj.stub.stub = (function speclj$stub$stub(var_args){
var G__25261 = arguments.length;
switch (G__25261) {
case 1:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$1 = (function (name){
return speclj.stub.stub.call(null,name,cljs.core.PersistentArrayMap.EMPTY);
}));

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
var delegate = new cljs.core.Keyword(null,"invoke","invoke",1145927159).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_((function (){var and__5023__auto__ = delegate;
if(cljs.core.truth_(and__5023__auto__)){
return (!(cljs.core.ifn_QMARK_.call(null,delegate)));
} else {
return and__5023__auto__;
}
})())){
throw (new Error("stub's :invoke argument must be an ifn"));
} else {
}

return (function() { 
var G__25295__delegate = function (args){
speclj.stub._record_invocation.call(null,name,args);

var result = (cljs.core.truth_(delegate)?speclj.stub.invoke_delegate.call(null,name,delegate,args):null);
var temp__5825__auto___25300 = new cljs.core.Keyword(null,"throw","throw",-1044625833).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5825__auto___25300)){
var throwable_25303 = temp__5825__auto___25300;
throw throwable_25303;
} else {
}

if(cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"return","return",-1891502105))){
return new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options);
} else {
return result;
}
};
var G__25295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25311__i = 0, G__25311__a = new Array(arguments.length -  0);
while (G__25311__i < G__25311__a.length) {G__25311__a[G__25311__i] = arguments[G__25311__i + 0]; ++G__25311__i;}
  args = new cljs.core.IndexedSeq(G__25311__a,0,null);
} 
return G__25295__delegate.call(this,args);};
G__25295.cljs$lang$maxFixedArity = 0;
G__25295.cljs$lang$applyTo = (function (arglist__25313){
var args = cljs.core.seq(arglist__25313);
return G__25295__delegate(args);
});
G__25295.cljs$core$IFn$_invoke$arity$variadic = G__25295__delegate;
return G__25295;
})()
;
}));

(speclj.stub.stub.cljs$lang$maxFixedArity = 2);

/**
 * Returns a list of argument lists representing each invocation of the specified stub.
 */
speclj.stub.invocations_of = (function speclj$stub$invocations_of(name){
return cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p1__25275_SHARP_){
return cljs.core._EQ_.call(null,name,cljs.core.first.call(null,p1__25275_SHARP_));
}),cljs.core.deref.call(null,speclj.stub._STAR_stubbed_invocations_STAR_)));
});
/**
 * Returns the list of arguments passed into the first invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.first_invocation_of = (function speclj$stub$first_invocation_of(name){
return cljs.core.first.call(null,speclj.stub.invocations_of.call(null,name));
});
/**
 * Returns the list of arguments passed into the last invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.last_invocation_of = (function speclj$stub$last_invocation_of(name){
return cljs.core.last.call(null,speclj.stub.invocations_of.call(null,name));
});
speclj.stub.params_match_QMARK_ = (function speclj$stub$params_match_QMARK_(expected,actual){
return ((cljs.core.sequential_QMARK_.call(null,expected)) && (((cljs.core.sequential_QMARK_.call(null,actual)) && (((cljs.core._EQ_.call(null,cljs.core.count.call(null,expected),cljs.core.count.call(null,actual))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (e,a){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),e)){
return true;
} else {
if(cljs.core.fn_QMARK_.call(null,e)){
var or__5025__auto__ = cljs.core._EQ_.call(null,e,a);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return e.call(null,a);
}
} else {
return cljs.core._EQ_.call(null,e,a);

}
}
}),expected,actual))))))));
});

//# sourceMappingURL=stub.js.map
