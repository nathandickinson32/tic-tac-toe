// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.apron.test_fabric');
goog.require('cljs.core');
goog.require('clojure.string');
c3kit.apron.test_fabric.__GT_pattern = (function c3kit$apron$test_fabric$__GT_pattern(s){
return cljs.core.re_pattern.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,"%",".*"),"_","."));
});
c3kit.apron.test_fabric.multi_QMARK_ = (function c3kit$apron$test_fabric$multi_QMARK_(v){
return ((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)));
});
c3kit.apron.test_fabric.make_tester = (function c3kit$apron$test_fabric$make_tester(pred){
return (function (v){
if(c3kit.apron.test_fabric.multi_QMARK_.call(null,v)){
return cljs.core.some.call(null,pred,v);
} else {
return pred.call(null,v);
}
});
});
c3kit.apron.test_fabric.pattern_matches_QMARK_ = (function c3kit$apron$test_fabric$pattern_matches_QMARK_(pattern,v,case_sensitive_QMARK_){
if(cljs.core.truth_(v)){
var v__$1 = (function (){var G__7474 = v;
if(cljs.core.not.call(null,case_sensitive_QMARK_)){
return clojure.string.upper_case.call(null,G__7474);
} else {
return G__7474;
}
})();
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,pattern,v__$1));
} else {
return null;
}
});
c3kit.apron.test_fabric.pattern_comparator = (function c3kit$apron$test_fabric$pattern_comparator(v,case_sensitive_QMARK_){
var pattern = c3kit.apron.test_fabric.__GT_pattern.call(null,v);
return c3kit.apron.test_fabric.make_tester.call(null,(function (p1__7475_SHARP_){
return c3kit.apron.test_fabric.pattern_matches_QMARK_.call(null,pattern,p1__7475_SHARP_,case_sensitive_QMARK_);
}));
});
c3kit.apron.test_fabric._normal_tester = (function c3kit$apron$test_fabric$_normal_tester(f,v){
return c3kit.apron.test_fabric.make_tester.call(null,(function (p1__7476_SHARP_){
var G__7477 = p1__7476_SHARP_;
if((G__7477 == null)){
return null;
} else {
return f.call(null,G__7477,v);
}
}));
});
c3kit.apron.test_fabric._or_tester = (function c3kit$apron$test_fabric$_or_tester(values){
var values__$1 = cljs.core.set.call(null,values);
return c3kit.apron.test_fabric.make_tester.call(null,(function (p1__7478_SHARP_){
return cljs.core.contains_QMARK_.call(null,values__$1,p1__7478_SHARP_);
}));
});
c3kit.apron.test_fabric._tester = (function c3kit$apron$test_fabric$_tester(p__7479){
var vec__7480 = p__7479;
var operation = cljs.core.nth.call(null,vec__7480,(0),null);
var v = cljs.core.nth.call(null,vec__7480,(1),null);
var form = vec__7480;
var pred__7483 = cljs.core._EQ_;
var expr__7484 = operation;
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,">",">",1085014381,null),expr__7484))){
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core._GT_,v);
} else {
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"<","<",993667236,null),expr__7484))){
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core._LT_,v);
} else {
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core.comp.call(null,cljs.core.neg_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,">=",">=",1016916022,null),expr__7484))){
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core._GT__EQ_,v);
} else {
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.neg_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),expr__7484))){
if(typeof v === 'number'){
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core._LT__EQ_,v);
} else {
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.pos_QMARK_,cljs.core.compare),v);
}
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"like","like",726481451,null),expr__7484))){
return c3kit.apron.test_fabric.pattern_comparator.call(null,v,true);
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"ilike","ilike",1487249058,null),expr__7484))){
return c3kit.apron.test_fabric.pattern_comparator.call(null,clojure.string.upper_case.call(null,v),false);
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"not=","not=",1466536204,null),expr__7484))){
return cljs.core.complement.call(null,c3kit.apron.test_fabric._or_tester.call(null,cljs.core.rest.call(null,form)));
} else {
if(cljs.core.truth_(pred__7483.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),expr__7484))){
return c3kit.apron.test_fabric._or_tester.call(null,cljs.core.rest.call(null,form));
} else {
return c3kit.apron.test_fabric._or_tester.call(null,form);
}
}
}
}
}
}
}
}
});
c3kit.apron.test_fabric.ensure_key = (function c3kit$apron$test_fabric$ensure_key(k){
if(cljs.core.set_QMARK_.call(null,k)){
return cljs.core.map.call(null,c3kit.apron.test_fabric.ensure_key,k);
} else {
return cljs.core.mapv.call(null,cljs.core.keyword,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.namespace.call(null,k),cljs.core.name.call(null,k)], null)));
}
});
c3kit.apron.test_fabric.get_tester_by_type = (function c3kit$apron$test_fabric$get_tester_by_type(v){
if(cljs.core.set_QMARK_.call(null,v)){
return c3kit.apron.test_fabric._or_tester.call(null,v);
} else {
if(cljs.core.sequential_QMARK_.call(null,v)){
return c3kit.apron.test_fabric._tester.call(null,v);
} else {
if((v == null)){
return cljs.core.nil_QMARK_;
} else {
return c3kit.apron.test_fabric._normal_tester.call(null,cljs.core._EQ_,v);

}
}
}
});
c3kit.apron.test_fabric.kv__GT_tester = (function c3kit$apron$test_fabric$kv__GT_tester(p__7486){
var vec__7487 = p__7486;
var k = cljs.core.nth.call(null,vec__7487,(0),null);
var v = cljs.core.nth.call(null,vec__7487,(1),null);
var tester = c3kit.apron.test_fabric.get_tester_by_type.call(null,v);
var key_path = c3kit.apron.test_fabric.ensure_key.call(null,k);
return (function (e){
return tester.call(null,cljs.core.get_in.call(null,e,key_path));
});
});
/**
 * Creates a predicate based on the key-value pairs in spec.
 */
c3kit.apron.test_fabric.spec__GT_tester = (function c3kit$apron$test_fabric$spec__GT_tester(spec){
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,c3kit.apron.test_fabric.kv__GT_tester,spec));
});

//# sourceMappingURL=test_fabric.js.map
