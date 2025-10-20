// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.mock.memory_storage');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
c3kit.wire.mock.memory_storage.set_item = (function c3kit$wire$mock$memory_storage$set_item(s,k,v){
return cljs.core.js_invoke.call(null,s,"setItem",k,v);
});
c3kit.wire.mock.memory_storage.get_item = (function c3kit$wire$mock$memory_storage$get_item(s,k){
return cljs.core.js_invoke.call(null,s,"getItem",k);
});
c3kit.wire.mock.memory_storage.remove_item = (function c3kit$wire$mock$memory_storage$remove_item(s,k){
return cljs.core.js_invoke.call(null,s,"removeItem",k);
});
c3kit.wire.mock.memory_storage.clear = (function c3kit$wire$mock$memory_storage$clear(s){
return cljs.core.js_invoke.call(null,s,"clear");
});
c3kit.wire.mock.memory_storage.o_keys = (function c3kit$wire$mock$memory_storage$o_keys(obj){
return cljs.core.js_invoke.call(null,Object,"keys",obj);
});
c3kit.wire.mock.memory_storage.o_entries = (function c3kit$wire$mock$memory_storage$o_entries(obj){
return cljs.core.js_invoke.call(null,Object,"entries",obj);
});
c3kit.wire.mock.memory_storage.create_object = (function c3kit$wire$mock$memory_storage$create_object(){
return cljs.core.js_invoke.call(null,Object,"create",({}));
});
c3kit.wire.mock.memory_storage.default_quota = (((5) * (1024)) * (1024));
c3kit.wire.mock.memory_storage.normalize = (function c3kit$wire$mock$memory_storage$normalize(v){
if((undefined === v)){
return "undefined";
} else {
if((v == null)){
return "null";
} else {
return cljs.core.js_invoke.call(null,v,"toString");

}
}
});
c3kit.wire.mock.memory_storage.with_kv_size = (function c3kit$wire$mock$memory_storage$with_kv_size(size,p__23518){
var vec__23519 = p__23518;
var k = cljs.core.nth.call(null,vec__23519,(0),null);
var v = cljs.core.nth.call(null,vec__23519,(1),null);
return ((size + cljs.core.count.call(null,k)) + cljs.core.count.call(null,v));
});
c3kit.wire.mock.memory_storage.utf16_size = (function c3kit$wire$mock$memory_storage$utf16_size(obj,k,v){
var init = (cljs.core.count.call(null,k) + cljs.core.count.call(null,v));
return ((2) * cljs.core.reduce.call(null,c3kit.wire.mock.memory_storage.with_kv_size,init,c3kit.wire.mock.memory_storage.o_entries.call(null,obj)));
});
c3kit.wire.mock.memory_storage.assert_under_quota_BANG_ = (function c3kit$wire$mock$memory_storage$assert_under_quota_BANG_(obj,quota,k,v){
var size = c3kit.wire.mock.memory_storage.utf16_size.call(null,obj,k,v);
if((size > quota)){
throw (new DOMException(["MemStorage quota has been exceeded. Quota: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quota),", Size: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''),"QuotaExceededError"));
} else {
return null;
}
});
c3kit.wire.mock.memory_storage.define_property = (function c3kit$wire$mock$memory_storage$define_property(obj,name,prop){
return cljs.core.js_invoke.call(null,Object,"defineProperty",obj,name,prop);
});
c3kit.wire.mock.memory_storage.as_mutable = (function c3kit$wire$mock$memory_storage$as_mutable(v){
var obj23523 = ({"value":v,"enumerable":true,"writable":true,"configurable":true});
return obj23523;
});
c3kit.wire.mock.memory_storage.as_immutable = (function c3kit$wire$mock$memory_storage$as_immutable(v){
var obj23525 = ({"value":v});
return obj23525;
});
c3kit.wire.mock.memory_storage._set_item = (function c3kit$wire$mock$memory_storage$_set_item(obj,quota,k,v){
var k__$1 = c3kit.wire.mock.memory_storage.normalize.call(null,k);
var v__$1 = c3kit.wire.mock.memory_storage.normalize.call(null,v);
c3kit.wire.mock.memory_storage.assert_under_quota_BANG_.call(null,obj,quota,k__$1,v__$1);

return c3kit.wire.mock.memory_storage.define_property.call(null,obj,k__$1,c3kit.wire.mock.memory_storage.as_mutable.call(null,v__$1));
});
c3kit.wire.mock.memory_storage._get_item = (function c3kit$wire$mock$memory_storage$_get_item(s,k){
return c3kit.apron.corec.oget.call(null,s,c3kit.wire.mock.memory_storage.normalize.call(null,k));
});
c3kit.wire.mock.memory_storage._remove_item = (function c3kit$wire$mock$memory_storage$_remove_item(obj,k){
return delete obj[c3kit.wire.mock.memory_storage.normalize.call(null,k)];
});
c3kit.wire.mock.memory_storage._clear = (function c3kit$wire$mock$memory_storage$_clear(obj){
return cljs.core.run_BANG_.call(null,(function (p1__23527_SHARP_){
return c3kit.wire.mock.memory_storage.remove_item.call(null,obj,p1__23527_SHARP_);
}),c3kit.wire.mock.memory_storage.o_keys.call(null,obj));
});
c3kit.wire.mock.memory_storage.define_immutable = (function c3kit$wire$mock$memory_storage$define_immutable(obj,name,v){
return c3kit.wire.mock.memory_storage.define_property.call(null,obj,name,c3kit.wire.mock.memory_storage.as_immutable.call(null,v));
});
c3kit.wire.mock.memory_storage.__GT_MemStorage = (function c3kit$wire$mock$memory_storage$__GT_MemStorage(var_args){
var G__23529 = arguments.length;
switch (G__23529) {
case 0:
return c3kit.wire.mock.memory_storage.__GT_MemStorage.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.mock.memory_storage.__GT_MemStorage.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.mock.memory_storage.__GT_MemStorage.cljs$core$IFn$_invoke$arity$0 = (function (){
return c3kit.wire.mock.memory_storage.__GT_MemStorage.call(null,c3kit.wire.mock.memory_storage.default_quota);
}));

(c3kit.wire.mock.memory_storage.__GT_MemStorage.cljs$core$IFn$_invoke$arity$1 = (function (quota){
var obj = c3kit.wire.mock.memory_storage.create_object.call(null);
var G__23530 = obj;
c3kit.wire.mock.memory_storage.define_immutable.call(null,G__23530,"clear",(function (){
return c3kit.wire.mock.memory_storage._clear.call(null,obj);
}));

c3kit.wire.mock.memory_storage.define_immutable.call(null,G__23530,"setItem",cljs.core.partial.call(null,c3kit.wire.mock.memory_storage._set_item,obj,quota));

c3kit.wire.mock.memory_storage.define_immutable.call(null,G__23530,"getItem",cljs.core.partial.call(null,c3kit.wire.mock.memory_storage._get_item,obj));

c3kit.wire.mock.memory_storage.define_immutable.call(null,G__23530,"removeItem",cljs.core.partial.call(null,c3kit.wire.mock.memory_storage._remove_item,obj));

return G__23530;
}));

(c3kit.wire.mock.memory_storage.__GT_MemStorage.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=memory_storage.js.map
