// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.game_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
c3kit.wire.spec_helper.with_root_dom.call(null);
speclj.components.new_before.call(null,(function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
}));
speclj.components.new_characteristic.call(null,"renders to the page",(function (){
var value__10561__auto___10616 = "#hello-world";
var node__10562__auto___10617 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10616);
if(cljs.core.truth_(node__10562__auto___10617)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10616;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = "hello-world";
var actual__10200__auto__ = c3kit.wire.spec_helper.text.call(null,"#hello-world h1");
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}),false);

//# sourceMappingURL=game_spec.js.map
