// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10047__auto___11092 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__11086_11093 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11087_11094 = description__10047__auto___11092;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11087_11094);

try{var seq__11088_11095 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__11086_11093,_STAR_parent_description_STAR__temp_val__11087_11094,description__10047__auto___11092){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__11086_11093,_STAR_parent_description_STAR__temp_val__11087_11094,description__10047__auto___11092))
),speclj.components.new_characteristic.call(null,"renders to the page",((function (_STAR_parent_description_STAR__orig_val__11086_11093,_STAR_parent_description_STAR__temp_val__11087_11094,description__10047__auto___11092){
return (function (){
var value__10551__auto___11099 = "#hello-world";
var node__10552__auto___11100 = c3kit.wire.spec_helper.select.call(null,value__10551__auto___11099);
if(cljs.core.truth_(node__10552__auto___11100)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10551__auto___11099;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10157__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10157__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10189__auto__ = "hello-world";
var actual__10190__auto__ = c3kit.wire.spec_helper.text.call(null,"#hello-world h1");
if(cljs.core._EQ_.call(null,expected__10189__auto__,actual__10190__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10189__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10157__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10157__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10190__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10157__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10157__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11086_11093,_STAR_parent_description_STAR__temp_val__11087_11094,description__10047__auto___11092))
,false)],null)));
var chunk__11089_11096 = null;
var count__11090_11097 = (0);
var i__11091_11098 = (0);
while(true){
if((i__11091_11098 < count__11090_11097)){
var component__10048__auto___11101 = cljs.core._nth.call(null,chunk__11089_11096,i__11091_11098);
speclj.components.install.call(null,component__10048__auto___11101,description__10047__auto___11092);


var G__11102 = seq__11088_11095;
var G__11103 = chunk__11089_11096;
var G__11104 = count__11090_11097;
var G__11105 = (i__11091_11098 + (1));
seq__11088_11095 = G__11102;
chunk__11089_11096 = G__11103;
count__11090_11097 = G__11104;
i__11091_11098 = G__11105;
continue;
} else {
var temp__5825__auto___11106 = cljs.core.seq.call(null,seq__11088_11095);
if(temp__5825__auto___11106){
var seq__11088_11107__$1 = temp__5825__auto___11106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11088_11107__$1)){
var c__5548__auto___11108 = cljs.core.chunk_first.call(null,seq__11088_11107__$1);
var G__11109 = cljs.core.chunk_rest.call(null,seq__11088_11107__$1);
var G__11110 = c__5548__auto___11108;
var G__11111 = cljs.core.count.call(null,c__5548__auto___11108);
var G__11112 = (0);
seq__11088_11095 = G__11109;
chunk__11089_11096 = G__11110;
count__11090_11097 = G__11111;
i__11091_11098 = G__11112;
continue;
} else {
var component__10048__auto___11113 = cljs.core.first.call(null,seq__11088_11107__$1);
speclj.components.install.call(null,component__10048__auto___11113,description__10047__auto___11092);


var G__11114 = cljs.core.next.call(null,seq__11088_11107__$1);
var G__11115 = null;
var G__11116 = (0);
var G__11117 = (0);
seq__11088_11095 = G__11114;
chunk__11089_11096 = G__11115;
count__11090_11097 = G__11116;
i__11091_11098 = G__11117;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11086_11093);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10047__auto___11092);
}


//# sourceMappingURL=main_spec.js.map
