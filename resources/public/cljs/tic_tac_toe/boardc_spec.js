// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.boardc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.test_boards_3x3x3c_spec');
goog.require('tic_tac_toe.test_boards_4x4c_spec');
var description__7979__auto___29391 = speclj.components.new_description.call(null,"board conditions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__27971_29392 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__27972_29393 = description__7979__auto___29391;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__27972_29393);

try{var seq__27973_29394 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,18,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"getting all positions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29211_29398 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29212_29399 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29212_29399);

try{var seq__29213_29400 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all 9 board positions for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_3x3);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets all 16 board positions for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_4x4);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets all 27 board positions for 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_3x3x3);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29211_29398,_STAR_parent_description_STAR__temp_val__29212_29399,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29214_29401 = null;
var count__29215_29402 = (0);
var i__29216_29403 = (0);
while(true){
if((i__29216_29403 < count__29215_29402)){
var component__7980__auto___29404 = cljs.core._nth.call(null,chunk__29214_29401,i__29216_29403);
speclj.components.install.call(null,component__7980__auto___29404,description__7979__auto____$1);


var G__29405 = seq__29213_29400;
var G__29406 = chunk__29214_29401;
var G__29407 = count__29215_29402;
var G__29408 = (i__29216_29403 + (1));
seq__29213_29400 = G__29405;
chunk__29214_29401 = G__29406;
count__29215_29402 = G__29407;
i__29216_29403 = G__29408;
continue;
} else {
var temp__5825__auto___29409 = cljs.core.seq.call(null,seq__29213_29400);
if(temp__5825__auto___29409){
var seq__29213_29410__$1 = temp__5825__auto___29409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29213_29410__$1)){
var c__5548__auto___29411 = cljs.core.chunk_first.call(null,seq__29213_29410__$1);
var G__29412 = cljs.core.chunk_rest.call(null,seq__29213_29410__$1);
var G__29413 = c__5548__auto___29411;
var G__29414 = cljs.core.count.call(null,c__5548__auto___29411);
var G__29415 = (0);
seq__29213_29400 = G__29412;
chunk__29214_29401 = G__29413;
count__29215_29402 = G__29414;
i__29216_29403 = G__29415;
continue;
} else {
var component__7980__auto___29416 = cljs.core.first.call(null,seq__29213_29410__$1);
speclj.components.install.call(null,component__7980__auto___29416,description__7979__auto____$1);


var G__29417 = cljs.core.next.call(null,seq__29213_29410__$1);
var G__29418 = null;
var G__29419 = (0);
var G__29420 = (0);
seq__29213_29400 = G__29417;
chunk__29214_29401 = G__29418;
count__29215_29402 = G__29419;
i__29216_29403 = G__29420;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29211_29398);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when determining what grid positions to get",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29217_29421 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29218_29422 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29218_29422);

try{var seq__29219_29423 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 3x3 positions for 3x3 board size",((function (_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.str_positions_3x3;
var actual__8122__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns 4x4 positions for 4x4 board size",((function (_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.str_positions_4x4;
var actual__8122__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns 3x3x3 positions for 3x3x3 board size",((function (_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.str_positions_3x3x3;
var actual__8122__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29217_29421,_STAR_parent_description_STAR__temp_val__29218_29422,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29220_29424 = null;
var count__29221_29425 = (0);
var i__29222_29426 = (0);
while(true){
if((i__29222_29426 < count__29221_29425)){
var component__7980__auto___29427 = cljs.core._nth.call(null,chunk__29220_29424,i__29222_29426);
speclj.components.install.call(null,component__7980__auto___29427,description__7979__auto____$1);


var G__29428 = seq__29219_29423;
var G__29429 = chunk__29220_29424;
var G__29430 = count__29221_29425;
var G__29431 = (i__29222_29426 + (1));
seq__29219_29423 = G__29428;
chunk__29220_29424 = G__29429;
count__29221_29425 = G__29430;
i__29222_29426 = G__29431;
continue;
} else {
var temp__5825__auto___29432 = cljs.core.seq.call(null,seq__29219_29423);
if(temp__5825__auto___29432){
var seq__29219_29433__$1 = temp__5825__auto___29432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29219_29433__$1)){
var c__5548__auto___29434 = cljs.core.chunk_first.call(null,seq__29219_29433__$1);
var G__29435 = cljs.core.chunk_rest.call(null,seq__29219_29433__$1);
var G__29436 = c__5548__auto___29434;
var G__29437 = cljs.core.count.call(null,c__5548__auto___29434);
var G__29438 = (0);
seq__29219_29423 = G__29435;
chunk__29220_29424 = G__29436;
count__29221_29425 = G__29437;
i__29222_29426 = G__29438;
continue;
} else {
var component__7980__auto___29439 = cljs.core.first.call(null,seq__29219_29433__$1);
speclj.components.install.call(null,component__7980__auto___29439,description__7979__auto____$1);


var G__29440 = cljs.core.next.call(null,seq__29219_29433__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29219_29423 = G__29440;
chunk__29220_29424 = G__29441;
count__29221_29425 = G__29442;
i__29222_29426 = G__29443;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29217_29421);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 3x3 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29223_29444 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29224_29445 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29224_29445);

try{var seq__29225_29446 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 9",((function (_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29450 = null;
var actual__8122__auto___29451 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"10",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29450,actual__8122__auto___29451)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29451;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29452 = null;
var actual__8122__auto___29453 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"11",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29452,actual__8122__auto___29453)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29452;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29453;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"201",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for strings",((function (_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29454 = null;
var actual__8122__auto___29455 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29454,actual__8122__auto___29455)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29454;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29455;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29456 = null;
var actual__8122__auto___29457 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"asd",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29456,actual__8122__auto___29457)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29456;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29457;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29458 = null;
var actual__8122__auto___29459 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29458,actual__8122__auto___29459)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29458;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29459;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for empty input",((function (_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-9 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8122__auto___29461 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29460,actual__8122__auto___29461)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29460;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29461;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8122__auto___29463 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"2",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29462,actual__8122__auto___29463)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29462;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29463;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8122__auto___29465 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"3",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29464,actual__8122__auto___29465)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29464;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29465;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8122__auto___29467 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"4",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29466,actual__8122__auto___29467)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29466;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29467;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8122__auto___29469 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29468,actual__8122__auto___29469)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29468;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29469;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8122__auto___29471 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"6",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29470,actual__8122__auto___29471)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29470;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29471;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__8122__auto___29473 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"7",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29472,actual__8122__auto___29473)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29472;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29473;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
var actual__8122__auto___29475 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"8",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto___29474,actual__8122__auto___29475)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29474;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29475;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"9",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29223_29444,_STAR_parent_description_STAR__temp_val__29224_29445,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29226_29447 = null;
var count__29227_29448 = (0);
var i__29228_29449 = (0);
while(true){
if((i__29228_29449 < count__29227_29448)){
var component__7980__auto___29476 = cljs.core._nth.call(null,chunk__29226_29447,i__29228_29449);
speclj.components.install.call(null,component__7980__auto___29476,description__7979__auto____$1);


var G__29477 = seq__29225_29446;
var G__29478 = chunk__29226_29447;
var G__29479 = count__29227_29448;
var G__29480 = (i__29228_29449 + (1));
seq__29225_29446 = G__29477;
chunk__29226_29447 = G__29478;
count__29227_29448 = G__29479;
i__29228_29449 = G__29480;
continue;
} else {
var temp__5825__auto___29481 = cljs.core.seq.call(null,seq__29225_29446);
if(temp__5825__auto___29481){
var seq__29225_29482__$1 = temp__5825__auto___29481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29225_29482__$1)){
var c__5548__auto___29483 = cljs.core.chunk_first.call(null,seq__29225_29482__$1);
var G__29484 = cljs.core.chunk_rest.call(null,seq__29225_29482__$1);
var G__29485 = c__5548__auto___29483;
var G__29486 = cljs.core.count.call(null,c__5548__auto___29483);
var G__29487 = (0);
seq__29225_29446 = G__29484;
chunk__29226_29447 = G__29485;
count__29227_29448 = G__29486;
i__29228_29449 = G__29487;
continue;
} else {
var component__7980__auto___29488 = cljs.core.first.call(null,seq__29225_29482__$1);
speclj.components.install.call(null,component__7980__auto___29488,description__7979__auto____$1);


var G__29489 = cljs.core.next.call(null,seq__29225_29482__$1);
var G__29490 = null;
var G__29491 = (0);
var G__29492 = (0);
seq__29225_29446 = G__29489;
chunk__29226_29447 = G__29490;
count__29227_29448 = G__29491;
i__29228_29449 = G__29492;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29223_29444);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 4x4 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29229_29493 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29230_29494 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29230_29494);

try{var seq__29231_29495 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 16",((function (_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"17",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for strings",((function (_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29499 = null;
var actual__8122__auto___29500 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29499,actual__8122__auto___29500)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29499;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29500;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29501 = null;
var actual__8122__auto___29502 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"asd",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29501,actual__8122__auto___29502)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29501;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29502;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29503 = null;
var actual__8122__auto___29504 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29503,actual__8122__auto___29504)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29503;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29504;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for empty input",((function (_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-16 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8122__auto___29506 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29505,actual__8122__auto___29506)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29505;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29506;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29507 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8122__auto___29508 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"2",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29507,actual__8122__auto___29508)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29507;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29508;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8122__auto___29510 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"3",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29509,actual__8122__auto___29510)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29509;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29510;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__8122__auto___29512 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"4",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29511,actual__8122__auto___29512)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29511;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29512;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8122__auto___29514 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29513,actual__8122__auto___29514)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29513;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29514;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8122__auto___29516 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"6",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29515,actual__8122__auto___29516)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29515;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29516;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29517 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__8122__auto___29518 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"11",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto___29517,actual__8122__auto___29518)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29517;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29518;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"16",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29229_29493,_STAR_parent_description_STAR__temp_val__29230_29494,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29232_29496 = null;
var count__29233_29497 = (0);
var i__29234_29498 = (0);
while(true){
if((i__29234_29498 < count__29233_29497)){
var component__7980__auto___29519 = cljs.core._nth.call(null,chunk__29232_29496,i__29234_29498);
speclj.components.install.call(null,component__7980__auto___29519,description__7979__auto____$1);


var G__29520 = seq__29231_29495;
var G__29521 = chunk__29232_29496;
var G__29522 = count__29233_29497;
var G__29523 = (i__29234_29498 + (1));
seq__29231_29495 = G__29520;
chunk__29232_29496 = G__29521;
count__29233_29497 = G__29522;
i__29234_29498 = G__29523;
continue;
} else {
var temp__5825__auto___29524 = cljs.core.seq.call(null,seq__29231_29495);
if(temp__5825__auto___29524){
var seq__29231_29525__$1 = temp__5825__auto___29524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29231_29525__$1)){
var c__5548__auto___29526 = cljs.core.chunk_first.call(null,seq__29231_29525__$1);
var G__29527 = cljs.core.chunk_rest.call(null,seq__29231_29525__$1);
var G__29528 = c__5548__auto___29526;
var G__29529 = cljs.core.count.call(null,c__5548__auto___29526);
var G__29530 = (0);
seq__29231_29495 = G__29527;
chunk__29232_29496 = G__29528;
count__29233_29497 = G__29529;
i__29234_29498 = G__29530;
continue;
} else {
var component__7980__auto___29531 = cljs.core.first.call(null,seq__29231_29525__$1);
speclj.components.install.call(null,component__7980__auto___29531,description__7979__auto____$1);


var G__29532 = cljs.core.next.call(null,seq__29231_29525__$1);
var G__29533 = null;
var G__29534 = (0);
var G__29535 = (0);
seq__29231_29495 = G__29532;
chunk__29232_29496 = G__29533;
count__29233_29497 = G__29534;
i__29234_29498 = G__29535;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29229_29493);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 3x3x3 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29235_29536 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29236_29537 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29236_29537);

try{var seq__29237_29538 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 27",((function (_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29542 = null;
var actual__8122__auto___29543 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"28",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29542,actual__8122__auto___29543)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29542;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29543;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"100",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns nil for letters, symbols and empty",((function (_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29544 = null;
var actual__8122__auto___29545 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29544,actual__8122__auto___29545)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29544;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29545;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29546 = null;
var actual__8122__auto___29547 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29546,actual__8122__auto___29547)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29546;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29547;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29548 = null;
var actual__8122__auto___29549 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29548,actual__8122__auto___29549)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29548;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29549;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29550 = null;
var actual__8122__auto___29551 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29550,actual__8122__auto___29551)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29550;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29551;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = null;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-9 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29552 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var actual__8122__auto___29553 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29552,actual__8122__auto___29553)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29552;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29553;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null);
var actual__8122__auto___29555 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29554,actual__8122__auto___29555)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29554;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29555;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29556 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null);
var actual__8122__auto___29557 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"9",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29556,actual__8122__auto___29557)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29556;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29557;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29558 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null);
var actual__8122__auto___29559 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"10",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29558,actual__8122__auto___29559)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29558;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29559;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29560 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);
var actual__8122__auto___29561 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"14",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29560,actual__8122__auto___29561)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29560;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29561;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29562 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null);
var actual__8122__auto___29563 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"18",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29562,actual__8122__auto___29563)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29562;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29563;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29564 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null);
var actual__8122__auto___29565 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"19",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29564,actual__8122__auto___29565)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29564;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29565;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___29566 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null);
var actual__8122__auto___29567 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"23",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto___29566,actual__8122__auto___29567)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___29566;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___29567;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"27",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29235_29536,_STAR_parent_description_STAR__temp_val__29236_29537,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29238_29539 = null;
var count__29239_29540 = (0);
var i__29240_29541 = (0);
while(true){
if((i__29240_29541 < count__29239_29540)){
var component__7980__auto___29568 = cljs.core._nth.call(null,chunk__29238_29539,i__29240_29541);
speclj.components.install.call(null,component__7980__auto___29568,description__7979__auto____$1);


var G__29569 = seq__29237_29538;
var G__29570 = chunk__29238_29539;
var G__29571 = count__29239_29540;
var G__29572 = (i__29240_29541 + (1));
seq__29237_29538 = G__29569;
chunk__29238_29539 = G__29570;
count__29239_29540 = G__29571;
i__29240_29541 = G__29572;
continue;
} else {
var temp__5825__auto___29573 = cljs.core.seq.call(null,seq__29237_29538);
if(temp__5825__auto___29573){
var seq__29237_29574__$1 = temp__5825__auto___29573;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29237_29574__$1)){
var c__5548__auto___29575 = cljs.core.chunk_first.call(null,seq__29237_29574__$1);
var G__29576 = cljs.core.chunk_rest.call(null,seq__29237_29574__$1);
var G__29577 = c__5548__auto___29575;
var G__29578 = cljs.core.count.call(null,c__5548__auto___29575);
var G__29579 = (0);
seq__29237_29538 = G__29576;
chunk__29238_29539 = G__29577;
count__29239_29540 = G__29578;
i__29240_29541 = G__29579;
continue;
} else {
var component__7980__auto___29580 = cljs.core.first.call(null,seq__29237_29574__$1);
speclj.components.install.call(null,component__7980__auto___29580,description__7979__auto____$1);


var G__29581 = cljs.core.next.call(null,seq__29237_29574__$1);
var G__29582 = null;
var G__29583 = (0);
var G__29584 = (0);
seq__29237_29538 = G__29581;
chunk__29238_29539 = G__29582;
count__29239_29540 = G__29583;
i__29240_29541 = G__29584;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29235_29536);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"getting available 3x3 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29241_29585 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29242_29586 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29242_29586);

try{var seq__29243_29587 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 3x3",((function (_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.all_positions_3x3;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets one available move 3x3",((function (_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 3x3",((function (_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544)));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3",((function (_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8182__auto___29592 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto___29592 == null)){
} else {
if(((typeof expected__8181__auto___29591 === 'string') && (typeof actual__8182__auto___29592 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29592,expected__8181__auto___29591) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29591)) && (typeof actual__8182__auto___29592 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29591,actual__8182__auto___29592))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29592)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29592,expected__8181__auto___29591)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29592)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29591,p1__8180__8183__auto__);
}),actual__8182__auto___29592))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29591;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29592;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29591;
var b__8101__auto__ = actual__8182__auto___29592;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8182__auto___29594 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto___29594 == null)){
} else {
if(((typeof expected__8181__auto___29593 === 'string') && (typeof actual__8182__auto___29594 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29594,expected__8181__auto___29593) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29593)) && (typeof actual__8182__auto___29594 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29593,actual__8182__auto___29594))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29594)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29594,expected__8181__auto___29593)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29594)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29593,p1__8180__8183__auto__);
}),actual__8182__auto___29594))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29593;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29594;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29593;
var b__8101__auto__ = actual__8182__auto___29594;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8182__auto___29596 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto___29596 == null)){
} else {
if(((typeof expected__8181__auto___29595 === 'string') && (typeof actual__8182__auto___29596 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29596,expected__8181__auto___29595) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29595)) && (typeof actual__8182__auto___29596 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29595,actual__8182__auto___29596))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29596)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29596,expected__8181__auto___29595)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29596)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29595,p1__8180__8183__auto__);
}),actual__8182__auto___29596))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29595;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29596;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29595;
var b__8101__auto__ = actual__8182__auto___29596;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8182__auto___29598 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto___29598 == null)){
} else {
if(((typeof expected__8181__auto___29597 === 'string') && (typeof actual__8182__auto___29598 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29598,expected__8181__auto___29597) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29598;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29597)) && (typeof actual__8182__auto___29598 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29597,actual__8182__auto___29598))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29598;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29598)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29598,expected__8181__auto___29597)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29598;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29598)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29597,p1__8180__8183__auto__);
}),actual__8182__auto___29598))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29598;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29597;
var b__8101__auto__ = actual__8182__auto___29598;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__8182__auto___29600 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto___29600 == null)){
} else {
if(((typeof expected__8181__auto___29599 === 'string') && (typeof actual__8182__auto___29600 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29600,expected__8181__auto___29599) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29600;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29599)) && (typeof actual__8182__auto___29600 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29599,actual__8182__auto___29600))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29600;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29600)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29600,expected__8181__auto___29599)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29600;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29600)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29599,p1__8180__8183__auto__);
}),actual__8182__auto___29600))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29600;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29599;
var b__8101__auto__ = actual__8182__auto___29600;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
var actual__8182__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8182__auto__ == null)){
return null;
} else {
if(((typeof expected__8181__auto__ === 'string') && (typeof actual__8182__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto__,expected__8181__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto__)) && (typeof actual__8182__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto__,actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto__,expected__8181__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto__,p1__8180__8183__auto__);
}),actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto__;
var b__8101__auto__ = actual__8182__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__29241_29585,_STAR_parent_description_STAR__temp_val__29242_29586,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29244_29588 = null;
var count__29245_29589 = (0);
var i__29246_29590 = (0);
while(true){
if((i__29246_29590 < count__29245_29589)){
var component__7980__auto___29601 = cljs.core._nth.call(null,chunk__29244_29588,i__29246_29590);
speclj.components.install.call(null,component__7980__auto___29601,description__7979__auto____$1);


var G__29602 = seq__29243_29587;
var G__29603 = chunk__29244_29588;
var G__29604 = count__29245_29589;
var G__29605 = (i__29246_29590 + (1));
seq__29243_29587 = G__29602;
chunk__29244_29588 = G__29603;
count__29245_29589 = G__29604;
i__29246_29590 = G__29605;
continue;
} else {
var temp__5825__auto___29606 = cljs.core.seq.call(null,seq__29243_29587);
if(temp__5825__auto___29606){
var seq__29243_29607__$1 = temp__5825__auto___29606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29243_29607__$1)){
var c__5548__auto___29608 = cljs.core.chunk_first.call(null,seq__29243_29607__$1);
var G__29609 = cljs.core.chunk_rest.call(null,seq__29243_29607__$1);
var G__29610 = c__5548__auto___29608;
var G__29611 = cljs.core.count.call(null,c__5548__auto___29608);
var G__29612 = (0);
seq__29243_29587 = G__29609;
chunk__29244_29588 = G__29610;
count__29245_29589 = G__29611;
i__29246_29590 = G__29612;
continue;
} else {
var component__7980__auto___29613 = cljs.core.first.call(null,seq__29243_29607__$1);
speclj.components.install.call(null,component__7980__auto___29613,description__7979__auto____$1);


var G__29614 = cljs.core.next.call(null,seq__29243_29607__$1);
var G__29615 = null;
var G__29616 = (0);
var G__29617 = (0);
seq__29243_29587 = G__29614;
chunk__29244_29588 = G__29615;
count__29245_29589 = G__29616;
i__29246_29590 = G__29617;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29241_29585);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"getting available 4x4 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29247_29618 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29248_29619 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29248_29619);

try{var seq__29249_29620 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 4x4",((function (_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.all_positions_4x4;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets one available move 4x4",((function (_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 4x4",((function (_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5",new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"11",new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723)));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3",((function (_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14","15",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8182__auto___29625 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8182__auto___29625 == null)){
} else {
if(((typeof expected__8181__auto___29624 === 'string') && (typeof actual__8182__auto___29625 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29625,expected__8181__auto___29624) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29624;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29625;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29624)) && (typeof actual__8182__auto___29625 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29624,actual__8182__auto___29625))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29625;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29624;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29625)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29625,expected__8181__auto___29624)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29624;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29625;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29625)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29624,p1__8180__8183__auto__);
}),actual__8182__auto___29625))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29624;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29625;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29624;
var b__8101__auto__ = actual__8182__auto___29625;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__8182__auto___29627 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8182__auto___29627 == null)){
} else {
if(((typeof expected__8181__auto___29626 === 'string') && (typeof actual__8182__auto___29627 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29627,expected__8181__auto___29626) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29626;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29627;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29626)) && (typeof actual__8182__auto___29627 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29626,actual__8182__auto___29627))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29627;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29626;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29627)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29627,expected__8181__auto___29626)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29626;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29627;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29627)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29626,p1__8180__8183__auto__);
}),actual__8182__auto___29627))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29626;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29627;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29626;
var b__8101__auto__ = actual__8182__auto___29627;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
var actual__8182__auto___29629 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8182__auto___29629 == null)){
} else {
if(((typeof expected__8181__auto___29628 === 'string') && (typeof actual__8182__auto___29629 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29629,expected__8181__auto___29628) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29628;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29629;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29628)) && (typeof actual__8182__auto___29629 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29628,actual__8182__auto___29629))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29629;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29628;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29629)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29629,expected__8181__auto___29628)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29628;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29629;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29629)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29628,p1__8180__8183__auto__);
}),actual__8182__auto___29629))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29628;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29629;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29628;
var b__8101__auto__ = actual__8182__auto___29629;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__8182__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8182__auto__ == null)){
return null;
} else {
if(((typeof expected__8181__auto__ === 'string') && (typeof actual__8182__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto__,expected__8181__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto__)) && (typeof actual__8182__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto__,actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto__,expected__8181__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto__,p1__8180__8183__auto__);
}),actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto__;
var b__8101__auto__ = actual__8182__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__29247_29618,_STAR_parent_description_STAR__temp_val__29248_29619,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29250_29621 = null;
var count__29251_29622 = (0);
var i__29252_29623 = (0);
while(true){
if((i__29252_29623 < count__29251_29622)){
var component__7980__auto___29630 = cljs.core._nth.call(null,chunk__29250_29621,i__29252_29623);
speclj.components.install.call(null,component__7980__auto___29630,description__7979__auto____$1);


var G__29631 = seq__29249_29620;
var G__29632 = chunk__29250_29621;
var G__29633 = count__29251_29622;
var G__29634 = (i__29252_29623 + (1));
seq__29249_29620 = G__29631;
chunk__29250_29621 = G__29632;
count__29251_29622 = G__29633;
i__29252_29623 = G__29634;
continue;
} else {
var temp__5825__auto___29635 = cljs.core.seq.call(null,seq__29249_29620);
if(temp__5825__auto___29635){
var seq__29249_29636__$1 = temp__5825__auto___29635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29249_29636__$1)){
var c__5548__auto___29637 = cljs.core.chunk_first.call(null,seq__29249_29636__$1);
var G__29638 = cljs.core.chunk_rest.call(null,seq__29249_29636__$1);
var G__29639 = c__5548__auto___29637;
var G__29640 = cljs.core.count.call(null,c__5548__auto___29637);
var G__29641 = (0);
seq__29249_29620 = G__29638;
chunk__29250_29621 = G__29639;
count__29251_29622 = G__29640;
i__29252_29623 = G__29641;
continue;
} else {
var component__7980__auto___29642 = cljs.core.first.call(null,seq__29249_29636__$1);
speclj.components.install.call(null,component__7980__auto___29642,description__7979__auto____$1);


var G__29643 = cljs.core.next.call(null,seq__29249_29636__$1);
var G__29644 = null;
var G__29645 = (0);
var G__29646 = (0);
seq__29249_29620 = G__29643;
chunk__29250_29621 = G__29644;
count__29251_29622 = G__29645;
i__29252_29623 = G__29646;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29247_29618);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"getting available 3x3x3 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29253_29647 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29254_29648 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29254_29648);

try{var seq__29255_29649 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 3x3x3",((function (_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = tic_tac_toe.boardc.all_positions_3x3x3;
var actual__8122__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets one available move 3x3x3",((function (_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null);
var actual__8122__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"8",new cljs.core.Keyword(null,"O","O",795252742)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"17",new cljs.core.Keyword(null,"O","O",795252742)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"26",new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29653 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var actual__8182__auto___29654 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29654 == null)){
} else {
if(((typeof expected__8181__auto___29653 === 'string') && (typeof actual__8182__auto___29654 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29654,expected__8181__auto___29653) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29653;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29654;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29653)) && (typeof actual__8182__auto___29654 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29653,actual__8182__auto___29654))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29654;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29653;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29654)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29654,expected__8181__auto___29653)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29653;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29654;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29654)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29653,p1__8180__8183__auto__);
}),actual__8182__auto___29654))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29653;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29654;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29653;
var b__8101__auto__ = actual__8182__auto___29654;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29655 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null);
var actual__8182__auto___29656 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29656 == null)){
} else {
if(((typeof expected__8181__auto___29655 === 'string') && (typeof actual__8182__auto___29656 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29656,expected__8181__auto___29655) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29655;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29656;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29655)) && (typeof actual__8182__auto___29656 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29655,actual__8182__auto___29656))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29656;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29655;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29656)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29656,expected__8181__auto___29655)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29655;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29656;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29656)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29655,p1__8180__8183__auto__);
}),actual__8182__auto___29656))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29655;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29656;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29655;
var b__8101__auto__ = actual__8182__auto___29656;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null);
var actual__8182__auto___29658 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29658 == null)){
} else {
if(((typeof expected__8181__auto___29657 === 'string') && (typeof actual__8182__auto___29658 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29658,expected__8181__auto___29657) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29657;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29658;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29657)) && (typeof actual__8182__auto___29658 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29657,actual__8182__auto___29658))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29658;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29657;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29658)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29658,expected__8181__auto___29657)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29657;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29658;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29658)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29657,p1__8180__8183__auto__);
}),actual__8182__auto___29658))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29657;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29658;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29657;
var b__8101__auto__ = actual__8182__auto___29658;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null);
var actual__8182__auto___29660 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29660 == null)){
} else {
if(((typeof expected__8181__auto___29659 === 'string') && (typeof actual__8182__auto___29660 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29660,expected__8181__auto___29659) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29659;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29660;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29659)) && (typeof actual__8182__auto___29660 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29659,actual__8182__auto___29660))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29660;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29659;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29660)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29660,expected__8181__auto___29659)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29659;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29660;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29660)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29659,p1__8180__8183__auto__);
}),actual__8182__auto___29660))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29659;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29660;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29659;
var b__8101__auto__ = actual__8182__auto___29660;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29661 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null);
var actual__8182__auto___29662 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29662 == null)){
} else {
if(((typeof expected__8181__auto___29661 === 'string') && (typeof actual__8182__auto___29662 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29662,expected__8181__auto___29661) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29661;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29662;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29661)) && (typeof actual__8182__auto___29662 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29661,actual__8182__auto___29662))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29662;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29661;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29662)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29662,expected__8181__auto___29661)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29661;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29662;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29662)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29661,p1__8180__8183__auto__);
}),actual__8182__auto___29662))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29661;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29662;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29661;
var b__8101__auto__ = actual__8182__auto___29662;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto___29663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null);
var actual__8182__auto___29664 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto___29664 == null)){
} else {
if(((typeof expected__8181__auto___29663 === 'string') && (typeof actual__8182__auto___29664 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto___29664,expected__8181__auto___29663) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29663;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29664;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto___29663)) && (typeof actual__8182__auto___29664 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto___29663,actual__8182__auto___29664))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto___29664;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto___29663;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto___29664)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto___29664,expected__8181__auto___29663)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29663;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29664;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto___29664)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto___29663,p1__8180__8183__auto__);
}),actual__8182__auto___29664))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto___29663;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto___29664;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto___29663;
var b__8101__auto__ = actual__8182__auto___29664;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8181__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null);
var actual__8182__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8182__auto__ == null)){
return null;
} else {
if(((typeof expected__8181__auto__ === 'string') && (typeof actual__8182__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8182__auto__,expected__8181__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8181__auto__)) && (typeof actual__8182__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8181__auto__,actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8182__auto__,expected__8181__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8182__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8180__8183__auto__){
return cljs.core._EQ_.call(null,expected__8181__auto__,p1__8180__8183__auto__);
}),actual__8182__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8181__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8182__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8181__auto__;
var b__8101__auto__ = actual__8182__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__29253_29647,_STAR_parent_description_STAR__temp_val__29254_29648,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29256_29650 = null;
var count__29257_29651 = (0);
var i__29258_29652 = (0);
while(true){
if((i__29258_29652 < count__29257_29651)){
var component__7980__auto___29665 = cljs.core._nth.call(null,chunk__29256_29650,i__29258_29652);
speclj.components.install.call(null,component__7980__auto___29665,description__7979__auto____$1);


var G__29666 = seq__29255_29649;
var G__29667 = chunk__29256_29650;
var G__29668 = count__29257_29651;
var G__29669 = (i__29258_29652 + (1));
seq__29255_29649 = G__29666;
chunk__29256_29650 = G__29667;
count__29257_29651 = G__29668;
i__29258_29652 = G__29669;
continue;
} else {
var temp__5825__auto___29670 = cljs.core.seq.call(null,seq__29255_29649);
if(temp__5825__auto___29670){
var seq__29255_29671__$1 = temp__5825__auto___29670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29255_29671__$1)){
var c__5548__auto___29672 = cljs.core.chunk_first.call(null,seq__29255_29671__$1);
var G__29673 = cljs.core.chunk_rest.call(null,seq__29255_29671__$1);
var G__29674 = c__5548__auto___29672;
var G__29675 = cljs.core.count.call(null,c__5548__auto___29672);
var G__29676 = (0);
seq__29255_29649 = G__29673;
chunk__29256_29650 = G__29674;
count__29257_29651 = G__29675;
i__29258_29652 = G__29676;
continue;
} else {
var component__7980__auto___29677 = cljs.core.first.call(null,seq__29255_29671__$1);
speclj.components.install.call(null,component__7980__auto___29677,description__7979__auto____$1);


var G__29678 = cljs.core.next.call(null,seq__29255_29671__$1);
var G__29679 = null;
var G__29680 = (0);
var G__29681 = (0);
seq__29255_29649 = G__29678;
chunk__29256_29650 = G__29679;
count__29257_29651 = G__29680;
i__29258_29652 = G__29681;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29253_29647);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"make-move",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29259_29682 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29260_29683 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29260_29683);

try{var seq__29261_29684 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks 3x3 grid with X",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"marks 3x3 grid with O",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"marks 4x4 grid with X",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_4x4,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"marks 4x4 grid with O",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15","16"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_4x4,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"marks 3x3x3 grid with X",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
var move = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3x3,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"marks 3x3x3 grid with O",((function (_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
var move = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = test_board;
var actual__8122__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3x3,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29259_29682,_STAR_parent_description_STAR__temp_val__29260_29683,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29262_29685 = null;
var count__29263_29686 = (0);
var i__29264_29687 = (0);
while(true){
if((i__29264_29687 < count__29263_29686)){
var component__7980__auto___29688 = cljs.core._nth.call(null,chunk__29262_29685,i__29264_29687);
speclj.components.install.call(null,component__7980__auto___29688,description__7979__auto____$1);


var G__29689 = seq__29261_29684;
var G__29690 = chunk__29262_29685;
var G__29691 = count__29263_29686;
var G__29692 = (i__29264_29687 + (1));
seq__29261_29684 = G__29689;
chunk__29262_29685 = G__29690;
count__29263_29686 = G__29691;
i__29264_29687 = G__29692;
continue;
} else {
var temp__5825__auto___29693 = cljs.core.seq.call(null,seq__29261_29684);
if(temp__5825__auto___29693){
var seq__29261_29694__$1 = temp__5825__auto___29693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29261_29694__$1)){
var c__5548__auto___29695 = cljs.core.chunk_first.call(null,seq__29261_29694__$1);
var G__29696 = cljs.core.chunk_rest.call(null,seq__29261_29694__$1);
var G__29697 = c__5548__auto___29695;
var G__29698 = cljs.core.count.call(null,c__5548__auto___29695);
var G__29699 = (0);
seq__29261_29684 = G__29696;
chunk__29262_29685 = G__29697;
count__29263_29686 = G__29698;
i__29264_29687 = G__29699;
continue;
} else {
var component__7980__auto___29700 = cljs.core.first.call(null,seq__29261_29694__$1);
speclj.components.install.call(null,component__7980__auto___29700,description__7979__auto____$1);


var G__29701 = cljs.core.next.call(null,seq__29261_29694__$1);
var G__29702 = null;
var G__29703 = (0);
var G__29704 = (0);
seq__29261_29684 = G__29701;
chunk__29262_29685 = G__29702;
count__29263_29686 = G__29703;
i__29264_29687 = G__29704;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29259_29682);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"draw/tie game",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29265_29705 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29266_29706 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29266_29706);

try{var seq__29267_29707 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when the 3x3 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29711 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29711){
var value__8115__auto___29712 = temp__5825__auto___29711;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29712;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29713 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29713){
var value__8115__auto___29714 = temp__5825__auto___29713;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29714;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto__){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true when the 3x3 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29715 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto___29715){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29715;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board2,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns false when the 4x4 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.test_starting_board_4x4,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(temp__5825__auto__){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true when the 4x4 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.full_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns false when the 3x3x3 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.test_starting_board_3x3x3,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(temp__5825__auto__){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true when the 3x3x3 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29265_29705,_STAR_parent_description_STAR__temp_val__29266_29706,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29268_29708 = null;
var count__29269_29709 = (0);
var i__29270_29710 = (0);
while(true){
if((i__29270_29710 < count__29269_29709)){
var component__7980__auto___29716 = cljs.core._nth.call(null,chunk__29268_29708,i__29270_29710);
speclj.components.install.call(null,component__7980__auto___29716,description__7979__auto____$1);


var G__29717 = seq__29267_29707;
var G__29718 = chunk__29268_29708;
var G__29719 = count__29269_29709;
var G__29720 = (i__29270_29710 + (1));
seq__29267_29707 = G__29717;
chunk__29268_29708 = G__29718;
count__29269_29709 = G__29719;
i__29270_29710 = G__29720;
continue;
} else {
var temp__5825__auto___29721 = cljs.core.seq.call(null,seq__29267_29707);
if(temp__5825__auto___29721){
var seq__29267_29722__$1 = temp__5825__auto___29721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29267_29722__$1)){
var c__5548__auto___29723 = cljs.core.chunk_first.call(null,seq__29267_29722__$1);
var G__29724 = cljs.core.chunk_rest.call(null,seq__29267_29722__$1);
var G__29725 = c__5548__auto___29723;
var G__29726 = cljs.core.count.call(null,c__5548__auto___29723);
var G__29727 = (0);
seq__29267_29707 = G__29724;
chunk__29268_29708 = G__29725;
count__29269_29709 = G__29726;
i__29270_29710 = G__29727;
continue;
} else {
var component__7980__auto___29728 = cljs.core.first.call(null,seq__29267_29722__$1);
speclj.components.install.call(null,component__7980__auto___29728,description__7979__auto____$1);


var G__29729 = cljs.core.next.call(null,seq__29267_29722__$1);
var G__29730 = null;
var G__29731 = (0);
var G__29732 = (0);
seq__29267_29707 = G__29729;
chunk__29268_29708 = G__29730;
count__29269_29709 = G__29731;
i__29270_29710 = G__29732;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29265_29705);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"2d rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29271_29733 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29272_29734 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29272_29734);

try{var seq__29273_29735 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no rows have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29739 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___29739){
var value__8115__auto___29740 = temp__5825__auto___29739;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29740;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29741 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,(2)),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___29741){
var value__8115__auto___29742 = temp__5825__auto___29741;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29743 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.second.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___29743){
var value__8115__auto___29744 = temp__5825__auto___29743;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29744;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29745 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,(1)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto___29745){
var value__8115__auto___29746 = temp__5825__auto___29745;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29746;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29747 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto___29747){
var value__8115__auto___29748 = temp__5825__auto___29747;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29748;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto__){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols",((function (_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29749 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8109__auto___29749){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29749;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29750 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8109__auto___29750){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29750;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29751 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.second.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O),new cljs.core.Keyword(null,"O","O",795252742));
if(value__8109__auto___29751){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29751;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"is a winning row",((function (_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29752 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto___29752)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29752;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29753 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto___29753)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29753;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29754 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto___29754)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29754;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29271_29733,_STAR_parent_description_STAR__temp_val__29272_29734,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29274_29736 = null;
var count__29275_29737 = (0);
var i__29276_29738 = (0);
while(true){
if((i__29276_29738 < count__29275_29737)){
var component__7980__auto___29755 = cljs.core._nth.call(null,chunk__29274_29736,i__29276_29738);
speclj.components.install.call(null,component__7980__auto___29755,description__7979__auto____$1);


var G__29756 = seq__29273_29735;
var G__29757 = chunk__29274_29736;
var G__29758 = count__29275_29737;
var G__29759 = (i__29276_29738 + (1));
seq__29273_29735 = G__29756;
chunk__29274_29736 = G__29757;
count__29275_29737 = G__29758;
i__29276_29738 = G__29759;
continue;
} else {
var temp__5825__auto___29760 = cljs.core.seq.call(null,seq__29273_29735);
if(temp__5825__auto___29760){
var seq__29273_29761__$1 = temp__5825__auto___29760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29273_29761__$1)){
var c__5548__auto___29762 = cljs.core.chunk_first.call(null,seq__29273_29761__$1);
var G__29763 = cljs.core.chunk_rest.call(null,seq__29273_29761__$1);
var G__29764 = c__5548__auto___29762;
var G__29765 = cljs.core.count.call(null,c__5548__auto___29762);
var G__29766 = (0);
seq__29273_29735 = G__29763;
chunk__29274_29736 = G__29764;
count__29275_29737 = G__29765;
i__29276_29738 = G__29766;
continue;
} else {
var component__7980__auto___29767 = cljs.core.first.call(null,seq__29273_29761__$1);
speclj.components.install.call(null,component__7980__auto___29767,description__7979__auto____$1);


var G__29768 = cljs.core.next.call(null,seq__29273_29761__$1);
var G__29769 = null;
var G__29770 = (0);
var G__29771 = (0);
seq__29273_29735 = G__29768;
chunk__29274_29736 = G__29769;
count__29275_29737 = G__29770;
i__29276_29738 = G__29771;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29271_29733);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"2d columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29277_29772 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29278_29773 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29278_29773);

try{var seq__29279_29774 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no cols have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__29277_29772,_STAR_parent_description_STAR__temp_val__29278_29773,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29778 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___29778)){
var value__8115__auto___29779 = temp__5825__auto___29778;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29779;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29780 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___29780)){
var value__8115__auto___29781 = temp__5825__auto___29780;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29781;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29782 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___29782)){
var value__8115__auto___29783 = temp__5825__auto___29782;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29783;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29277_29772,_STAR_parent_description_STAR__temp_val__29278_29773,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"is a winning column",((function (_STAR_parent_description_STAR__orig_val__29277_29772,_STAR_parent_description_STAR__temp_val__29278_29773,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29784 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto___29784)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29785 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto___29785)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29785;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29786 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto___29786)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29786;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29277_29772,_STAR_parent_description_STAR__temp_val__29278_29773,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29280_29775 = null;
var count__29281_29776 = (0);
var i__29282_29777 = (0);
while(true){
if((i__29282_29777 < count__29281_29776)){
var component__7980__auto___29787 = cljs.core._nth.call(null,chunk__29280_29775,i__29282_29777);
speclj.components.install.call(null,component__7980__auto___29787,description__7979__auto____$1);


var G__29788 = seq__29279_29774;
var G__29789 = chunk__29280_29775;
var G__29790 = count__29281_29776;
var G__29791 = (i__29282_29777 + (1));
seq__29279_29774 = G__29788;
chunk__29280_29775 = G__29789;
count__29281_29776 = G__29790;
i__29282_29777 = G__29791;
continue;
} else {
var temp__5825__auto___29792 = cljs.core.seq.call(null,seq__29279_29774);
if(temp__5825__auto___29792){
var seq__29279_29793__$1 = temp__5825__auto___29792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29279_29793__$1)){
var c__5548__auto___29794 = cljs.core.chunk_first.call(null,seq__29279_29793__$1);
var G__29795 = cljs.core.chunk_rest.call(null,seq__29279_29793__$1);
var G__29796 = c__5548__auto___29794;
var G__29797 = cljs.core.count.call(null,c__5548__auto___29794);
var G__29798 = (0);
seq__29279_29774 = G__29795;
chunk__29280_29775 = G__29796;
count__29281_29776 = G__29797;
i__29282_29777 = G__29798;
continue;
} else {
var component__7980__auto___29799 = cljs.core.first.call(null,seq__29279_29793__$1);
speclj.components.install.call(null,component__7980__auto___29799,description__7979__auto____$1);


var G__29800 = cljs.core.next.call(null,seq__29279_29793__$1);
var G__29801 = null;
var G__29802 = (0);
var G__29803 = (0);
seq__29279_29774 = G__29800;
chunk__29280_29775 = G__29801;
count__29281_29776 = G__29802;
i__29282_29777 = G__29803;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29277_29772);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"2d diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29283_29804 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29284_29805 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29284_29805);

try{var seq__29285_29806 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets diagonal left for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.diagonal_right_3x3.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.diagonal_left_3x3.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.diagonal_right_4x4.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null);
var actual__8122__auto__ = tic_tac_toe.boardc.diagonal_left_4x4.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4);
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"false for not same symbol diagonal 3x3",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29810 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29810){
var value__8115__auto___29811 = temp__5825__auto___29810;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29812 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29812){
var value__8115__auto___29813 = temp__5825__auto___29812;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29814 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29814){
var value__8115__auto___29815 = temp__5825__auto___29814;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29815;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29816 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29816){
var value__8115__auto___29817 = temp__5825__auto___29816;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29817;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___29818 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___29818){
var value__8115__auto___29819 = temp__5825__auto___29818;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___29819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto__){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"true for same symbol diagonal 3x3",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29820 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto___29820){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29821 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto___29821){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29821;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___29822 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto___29822){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___29822;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"determines winning diagonal by board size",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"true for same symbol diagonal 4x4",((function (_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8109__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29283_29804,_STAR_parent_description_STAR__temp_val__29284_29805,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29286_29807 = null;
var count__29287_29808 = (0);
var i__29288_29809 = (0);
while(true){
if((i__29288_29809 < count__29287_29808)){
var component__7980__auto___29823 = cljs.core._nth.call(null,chunk__29286_29807,i__29288_29809);
speclj.components.install.call(null,component__7980__auto___29823,description__7979__auto____$1);


var G__29824 = seq__29285_29806;
var G__29825 = chunk__29286_29807;
var G__29826 = count__29287_29808;
var G__29827 = (i__29288_29809 + (1));
seq__29285_29806 = G__29824;
chunk__29286_29807 = G__29825;
count__29287_29808 = G__29826;
i__29288_29809 = G__29827;
continue;
} else {
var temp__5825__auto___29828 = cljs.core.seq.call(null,seq__29285_29806);
if(temp__5825__auto___29828){
var seq__29285_29829__$1 = temp__5825__auto___29828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29285_29829__$1)){
var c__5548__auto___29830 = cljs.core.chunk_first.call(null,seq__29285_29829__$1);
var G__29831 = cljs.core.chunk_rest.call(null,seq__29285_29829__$1);
var G__29832 = c__5548__auto___29830;
var G__29833 = cljs.core.count.call(null,c__5548__auto___29830);
var G__29834 = (0);
seq__29285_29806 = G__29831;
chunk__29286_29807 = G__29832;
count__29287_29808 = G__29833;
i__29288_29809 = G__29834;
continue;
} else {
var component__7980__auto___29835 = cljs.core.first.call(null,seq__29285_29829__$1);
speclj.components.install.call(null,component__7980__auto___29835,description__7979__auto____$1);


var G__29836 = cljs.core.next.call(null,seq__29285_29829__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__29285_29806 = G__29836;
chunk__29286_29807 = G__29837;
count__29287_29808 = G__29838;
i__29288_29809 = G__29839;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29283_29804);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"2D win conditions for 3D board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29289_29840 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29290_29841 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29290_29841);

try{var seq__29291_29842 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"3d rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29313_29846 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29314_29847 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29314_29847);

try{var seq__29315_29848 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no rows have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29313_29846,_STAR_parent_description_STAR__temp_val__29314_29847,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29316_29849 = null;
var count__29317_29850 = (0);
var i__29318_29851 = (0);
while(true){
if((i__29318_29851 < count__29317_29850)){
var component__7980__auto___29852 = cljs.core._nth.call(null,chunk__29316_29849,i__29318_29851);
speclj.components.install.call(null,component__7980__auto___29852,description__7979__auto____$2);


var G__29853 = seq__29315_29848;
var G__29854 = chunk__29316_29849;
var G__29855 = count__29317_29850;
var G__29856 = (i__29318_29851 + (1));
seq__29315_29848 = G__29853;
chunk__29316_29849 = G__29854;
count__29317_29850 = G__29855;
i__29318_29851 = G__29856;
continue;
} else {
var temp__5825__auto___29857 = cljs.core.seq.call(null,seq__29315_29848);
if(temp__5825__auto___29857){
var seq__29315_29858__$1 = temp__5825__auto___29857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29315_29858__$1)){
var c__5548__auto___29859 = cljs.core.chunk_first.call(null,seq__29315_29858__$1);
var G__29860 = cljs.core.chunk_rest.call(null,seq__29315_29858__$1);
var G__29861 = c__5548__auto___29859;
var G__29862 = cljs.core.count.call(null,c__5548__auto___29859);
var G__29863 = (0);
seq__29315_29848 = G__29860;
chunk__29316_29849 = G__29861;
count__29317_29850 = G__29862;
i__29318_29851 = G__29863;
continue;
} else {
var component__7980__auto___29864 = cljs.core.first.call(null,seq__29315_29858__$1);
speclj.components.install.call(null,component__7980__auto___29864,description__7979__auto____$2);


var G__29865 = cljs.core.next.call(null,seq__29315_29858__$1);
var G__29866 = null;
var G__29867 = (0);
var G__29868 = (0);
seq__29315_29848 = G__29865;
chunk__29316_29849 = G__29866;
count__29317_29850 = G__29867;
i__29318_29851 = G__29868;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29313_29846);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})(),(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"3d columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29319_29869 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29320_29870 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29320_29870);

try{var seq__29321_29871 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no columns have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29319_29869,_STAR_parent_description_STAR__temp_val__29320_29870,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29322_29872 = null;
var count__29323_29873 = (0);
var i__29324_29874 = (0);
while(true){
if((i__29324_29874 < count__29323_29873)){
var component__7980__auto___29875 = cljs.core._nth.call(null,chunk__29322_29872,i__29324_29874);
speclj.components.install.call(null,component__7980__auto___29875,description__7979__auto____$2);


var G__29876 = seq__29321_29871;
var G__29877 = chunk__29322_29872;
var G__29878 = count__29323_29873;
var G__29879 = (i__29324_29874 + (1));
seq__29321_29871 = G__29876;
chunk__29322_29872 = G__29877;
count__29323_29873 = G__29878;
i__29324_29874 = G__29879;
continue;
} else {
var temp__5825__auto___29880 = cljs.core.seq.call(null,seq__29321_29871);
if(temp__5825__auto___29880){
var seq__29321_29881__$1 = temp__5825__auto___29880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29321_29881__$1)){
var c__5548__auto___29882 = cljs.core.chunk_first.call(null,seq__29321_29881__$1);
var G__29883 = cljs.core.chunk_rest.call(null,seq__29321_29881__$1);
var G__29884 = c__5548__auto___29882;
var G__29885 = cljs.core.count.call(null,c__5548__auto___29882);
var G__29886 = (0);
seq__29321_29871 = G__29883;
chunk__29322_29872 = G__29884;
count__29323_29873 = G__29885;
i__29324_29874 = G__29886;
continue;
} else {
var component__7980__auto___29887 = cljs.core.first.call(null,seq__29321_29881__$1);
speclj.components.install.call(null,component__7980__auto___29887,description__7979__auto____$2);


var G__29888 = cljs.core.next.call(null,seq__29321_29881__$1);
var G__29889 = null;
var G__29890 = (0);
var G__29891 = (0);
seq__29321_29871 = G__29888;
chunk__29322_29872 = G__29889;
count__29323_29873 = G__29890;
i__29324_29874 = G__29891;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29319_29869);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})(),(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"3d diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29325_29892 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29326_29893 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29326_29893);

try{var seq__29327_29894 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"false for not same symbol diagonal",((function (_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29325_29892,_STAR_parent_description_STAR__temp_val__29326_29893,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29289_29840,_STAR_parent_description_STAR__temp_val__29290_29841,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29328_29895 = null;
var count__29329_29896 = (0);
var i__29330_29897 = (0);
while(true){
if((i__29330_29897 < count__29329_29896)){
var component__7980__auto___29898 = cljs.core._nth.call(null,chunk__29328_29895,i__29330_29897);
speclj.components.install.call(null,component__7980__auto___29898,description__7979__auto____$2);


var G__29899 = seq__29327_29894;
var G__29900 = chunk__29328_29895;
var G__29901 = count__29329_29896;
var G__29902 = (i__29330_29897 + (1));
seq__29327_29894 = G__29899;
chunk__29328_29895 = G__29900;
count__29329_29896 = G__29901;
i__29330_29897 = G__29902;
continue;
} else {
var temp__5825__auto___29903 = cljs.core.seq.call(null,seq__29327_29894);
if(temp__5825__auto___29903){
var seq__29327_29904__$1 = temp__5825__auto___29903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29327_29904__$1)){
var c__5548__auto___29905 = cljs.core.chunk_first.call(null,seq__29327_29904__$1);
var G__29906 = cljs.core.chunk_rest.call(null,seq__29327_29904__$1);
var G__29907 = c__5548__auto___29905;
var G__29908 = cljs.core.count.call(null,c__5548__auto___29905);
var G__29909 = (0);
seq__29327_29894 = G__29906;
chunk__29328_29895 = G__29907;
count__29329_29896 = G__29908;
i__29330_29897 = G__29909;
continue;
} else {
var component__7980__auto___29910 = cljs.core.first.call(null,seq__29327_29904__$1);
speclj.components.install.call(null,component__7980__auto___29910,description__7979__auto____$2);


var G__29911 = cljs.core.next.call(null,seq__29327_29904__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29327_29894 = G__29911;
chunk__29328_29895 = G__29912;
count__29329_29896 = G__29913;
i__29330_29897 = G__29914;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29325_29892);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})()],null)));
var chunk__29292_29843 = null;
var count__29293_29844 = (0);
var i__29294_29845 = (0);
while(true){
if((i__29294_29845 < count__29293_29844)){
var component__7980__auto___29915 = cljs.core._nth.call(null,chunk__29292_29843,i__29294_29845);
speclj.components.install.call(null,component__7980__auto___29915,description__7979__auto____$1);


var G__29916 = seq__29291_29842;
var G__29917 = chunk__29292_29843;
var G__29918 = count__29293_29844;
var G__29919 = (i__29294_29845 + (1));
seq__29291_29842 = G__29916;
chunk__29292_29843 = G__29917;
count__29293_29844 = G__29918;
i__29294_29845 = G__29919;
continue;
} else {
var temp__5825__auto___29920 = cljs.core.seq.call(null,seq__29291_29842);
if(temp__5825__auto___29920){
var seq__29291_29921__$1 = temp__5825__auto___29920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29291_29921__$1)){
var c__5548__auto___29922 = cljs.core.chunk_first.call(null,seq__29291_29921__$1);
var G__29923 = cljs.core.chunk_rest.call(null,seq__29291_29921__$1);
var G__29924 = c__5548__auto___29922;
var G__29925 = cljs.core.count.call(null,c__5548__auto___29922);
var G__29926 = (0);
seq__29291_29842 = G__29923;
chunk__29292_29843 = G__29924;
count__29293_29844 = G__29925;
i__29294_29845 = G__29926;
continue;
} else {
var component__7980__auto___29927 = cljs.core.first.call(null,seq__29291_29921__$1);
speclj.components.install.call(null,component__7980__auto___29927,description__7979__auto____$1);


var G__29928 = cljs.core.next.call(null,seq__29291_29921__$1);
var G__29929 = null;
var G__29930 = (0);
var G__29931 = (0);
seq__29291_29842 = G__29928;
chunk__29292_29843 = G__29929;
count__29293_29844 = G__29930;
i__29294_29845 = G__29931;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29289_29840);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"wins across 3 dimensions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29331_29932 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29332_29933 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29332_29933);

try{var seq__29333_29934 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"pillar wins",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29355_29938 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29356_29939 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29356_29939);

try{var seq__29357_29940 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"false for no winner",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.test_starting_board_3x3x3;
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"X wins top left pillar",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_pillar_1;
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"O wins top middle pillar",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"O","O",795252742),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19",new cljs.core.Keyword(null,"O","O",795252742),"21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"X wins top right pillar",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"X wins middle left pillar",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"X wins bottom right pillar",((function (_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29355_29938,_STAR_parent_description_STAR__temp_val__29356_29939,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29358_29941 = null;
var count__29359_29942 = (0);
var i__29360_29943 = (0);
while(true){
if((i__29360_29943 < count__29359_29942)){
var component__7980__auto___29944 = cljs.core._nth.call(null,chunk__29358_29941,i__29360_29943);
speclj.components.install.call(null,component__7980__auto___29944,description__7979__auto____$2);


var G__29945 = seq__29357_29940;
var G__29946 = chunk__29358_29941;
var G__29947 = count__29359_29942;
var G__29948 = (i__29360_29943 + (1));
seq__29357_29940 = G__29945;
chunk__29358_29941 = G__29946;
count__29359_29942 = G__29947;
i__29360_29943 = G__29948;
continue;
} else {
var temp__5825__auto___29949 = cljs.core.seq.call(null,seq__29357_29940);
if(temp__5825__auto___29949){
var seq__29357_29950__$1 = temp__5825__auto___29949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29357_29950__$1)){
var c__5548__auto___29951 = cljs.core.chunk_first.call(null,seq__29357_29950__$1);
var G__29952 = cljs.core.chunk_rest.call(null,seq__29357_29950__$1);
var G__29953 = c__5548__auto___29951;
var G__29954 = cljs.core.count.call(null,c__5548__auto___29951);
var G__29955 = (0);
seq__29357_29940 = G__29952;
chunk__29358_29941 = G__29953;
count__29359_29942 = G__29954;
i__29360_29943 = G__29955;
continue;
} else {
var component__7980__auto___29956 = cljs.core.first.call(null,seq__29357_29950__$1);
speclj.components.install.call(null,component__7980__auto___29956,description__7979__auto____$2);


var G__29957 = cljs.core.next.call(null,seq__29357_29950__$1);
var G__29958 = null;
var G__29959 = (0);
var G__29960 = (0);
seq__29357_29940 = G__29957;
chunk__29358_29941 = G__29958;
count__29359_29942 = G__29959;
i__29360_29943 = G__29960;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29355_29938);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})(),(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"diagonal wins through middle",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29361_29961 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29362_29962 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29362_29962);

try{var seq__29363_29963 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"x wins from [0 0 0]",((function (_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_center_diagR_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 0 2]",((function (_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 2 0]",((function (_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 2 2]",((function (_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29361_29961,_STAR_parent_description_STAR__temp_val__29362_29962,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29364_29964 = null;
var count__29365_29965 = (0);
var i__29366_29966 = (0);
while(true){
if((i__29366_29966 < count__29365_29965)){
var component__7980__auto___29967 = cljs.core._nth.call(null,chunk__29364_29964,i__29366_29966);
speclj.components.install.call(null,component__7980__auto___29967,description__7979__auto____$2);


var G__29968 = seq__29363_29963;
var G__29969 = chunk__29364_29964;
var G__29970 = count__29365_29965;
var G__29971 = (i__29366_29966 + (1));
seq__29363_29963 = G__29968;
chunk__29364_29964 = G__29969;
count__29365_29965 = G__29970;
i__29366_29966 = G__29971;
continue;
} else {
var temp__5825__auto___29972 = cljs.core.seq.call(null,seq__29363_29963);
if(temp__5825__auto___29972){
var seq__29363_29973__$1 = temp__5825__auto___29972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29363_29973__$1)){
var c__5548__auto___29974 = cljs.core.chunk_first.call(null,seq__29363_29973__$1);
var G__29975 = cljs.core.chunk_rest.call(null,seq__29363_29973__$1);
var G__29976 = c__5548__auto___29974;
var G__29977 = cljs.core.count.call(null,c__5548__auto___29974);
var G__29978 = (0);
seq__29363_29963 = G__29975;
chunk__29364_29964 = G__29976;
count__29365_29965 = G__29977;
i__29366_29966 = G__29978;
continue;
} else {
var component__7980__auto___29979 = cljs.core.first.call(null,seq__29363_29973__$1);
speclj.components.install.call(null,component__7980__auto___29979,description__7979__auto____$2);


var G__29980 = cljs.core.next.call(null,seq__29363_29973__$1);
var G__29981 = null;
var G__29982 = (0);
var G__29983 = (0);
seq__29363_29963 = G__29980;
chunk__29364_29964 = G__29981;
count__29365_29965 = G__29982;
i__29366_29966 = G__29983;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29361_29961);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})(),(function (){var description__7979__auto____$2 = speclj.components.new_description.call(null,"diagonal wins not through center",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29367_29984 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29368_29985 = description__7979__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29368_29985);

try{var seq__29369_29986 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"x wins from [0 0 0]",((function (_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"X","X",1705996313),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 0 2]",((function (_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"X","X",1705996313),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from x plane diagonal",((function (_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_x_plane_diag_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"x wins from y plane diagonal",((function (_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_y_plane_diag_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29367_29984,_STAR_parent_description_STAR__temp_val__29368_29985,description__7979__auto____$2,_STAR_parent_description_STAR__orig_val__29331_29932,_STAR_parent_description_STAR__temp_val__29332_29933,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29370_29987 = null;
var count__29371_29988 = (0);
var i__29372_29989 = (0);
while(true){
if((i__29372_29989 < count__29371_29988)){
var component__7980__auto___29990 = cljs.core._nth.call(null,chunk__29370_29987,i__29372_29989);
speclj.components.install.call(null,component__7980__auto___29990,description__7979__auto____$2);


var G__29991 = seq__29369_29986;
var G__29992 = chunk__29370_29987;
var G__29993 = count__29371_29988;
var G__29994 = (i__29372_29989 + (1));
seq__29369_29986 = G__29991;
chunk__29370_29987 = G__29992;
count__29371_29988 = G__29993;
i__29372_29989 = G__29994;
continue;
} else {
var temp__5825__auto___29995 = cljs.core.seq.call(null,seq__29369_29986);
if(temp__5825__auto___29995){
var seq__29369_29996__$1 = temp__5825__auto___29995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29369_29996__$1)){
var c__5548__auto___29997 = cljs.core.chunk_first.call(null,seq__29369_29996__$1);
var G__29998 = cljs.core.chunk_rest.call(null,seq__29369_29996__$1);
var G__29999 = c__5548__auto___29997;
var G__30000 = cljs.core.count.call(null,c__5548__auto___29997);
var G__30001 = (0);
seq__29369_29986 = G__29998;
chunk__29370_29987 = G__29999;
count__29371_29988 = G__30000;
i__29372_29989 = G__30001;
continue;
} else {
var component__7980__auto___30002 = cljs.core.first.call(null,seq__29369_29996__$1);
speclj.components.install.call(null,component__7980__auto___30002,description__7979__auto____$2);


var G__30003 = cljs.core.next.call(null,seq__29369_29996__$1);
var G__30004 = null;
var G__30005 = (0);
var G__30006 = (0);
seq__29369_29986 = G__30003;
chunk__29370_29987 = G__30004;
count__29371_29988 = G__30005;
i__29372_29989 = G__30006;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29367_29984);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$2);
}

return description__7979__auto____$2;
})()],null)));
var chunk__29334_29935 = null;
var count__29335_29936 = (0);
var i__29336_29937 = (0);
while(true){
if((i__29336_29937 < count__29335_29936)){
var component__7980__auto___30007 = cljs.core._nth.call(null,chunk__29334_29935,i__29336_29937);
speclj.components.install.call(null,component__7980__auto___30007,description__7979__auto____$1);


var G__30008 = seq__29333_29934;
var G__30009 = chunk__29334_29935;
var G__30010 = count__29335_29936;
var G__30011 = (i__29336_29937 + (1));
seq__29333_29934 = G__30008;
chunk__29334_29935 = G__30009;
count__29335_29936 = G__30010;
i__29336_29937 = G__30011;
continue;
} else {
var temp__5825__auto___30012 = cljs.core.seq.call(null,seq__29333_29934);
if(temp__5825__auto___30012){
var seq__29333_30013__$1 = temp__5825__auto___30012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29333_30013__$1)){
var c__5548__auto___30014 = cljs.core.chunk_first.call(null,seq__29333_30013__$1);
var G__30015 = cljs.core.chunk_rest.call(null,seq__29333_30013__$1);
var G__30016 = c__5548__auto___30014;
var G__30017 = cljs.core.count.call(null,c__5548__auto___30014);
var G__30018 = (0);
seq__29333_29934 = G__30015;
chunk__29334_29935 = G__30016;
count__29335_29936 = G__30017;
i__29336_29937 = G__30018;
continue;
} else {
var component__7980__auto___30019 = cljs.core.first.call(null,seq__29333_30013__$1);
speclj.components.install.call(null,component__7980__auto___30019,description__7979__auto____$1);


var G__30020 = cljs.core.next.call(null,seq__29333_30013__$1);
var G__30021 = null;
var G__30022 = (0);
var G__30023 = (0);
seq__29333_29934 = G__30020;
chunk__29334_29935 = G__30021;
count__29335_29936 = G__30022;
i__29336_29937 = G__30023;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29331_29932);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"win?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29373_30024 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29374_30025 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29374_30025);

try{var seq__29375_30026 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"no row, column or diagonal is filled by X",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30030 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___30030)){
var value__8115__auto___30031 = temp__5825__auto___30030;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30031;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30032 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto___30032)){
var value__8115__auto___30033 = temp__5825__auto___30032;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30033;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"no row, column or diagonal is filled by O",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30034 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___30034)){
var value__8115__auto___30035 = temp__5825__auto___30034;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30035;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30036 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto___30036)){
var value__8115__auto___30037 = temp__5825__auto___30036;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30037;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"a row is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30038 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30038)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30038;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30039 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30039)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30039;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30040 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30040)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30040;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30041 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto___30041)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30041;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"a column is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30042 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30042)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30042;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30043 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30043)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30043;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30044 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30044)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30044;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30045 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto___30045)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30045;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_left_column_middle_layer,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"a diagonal is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30046 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30046)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30046;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30047 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30047)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30047;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30048 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30048)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30048;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30049 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30049)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30049;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"checks for 3D wins",((function (_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30050 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_pillar_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto___30050)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30050;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30051 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_center_diagR_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto___30051)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30051;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30052 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_y_plane_diag_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto___30052)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30052;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30053 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.o_wins_y_plane_diag_3d,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto___30053)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30053;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30054 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_x_plane_diag_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto___30054)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30054;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.o_wins_x_plane_diag_3d,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29373_30024,_STAR_parent_description_STAR__temp_val__29374_30025,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29376_30027 = null;
var count__29377_30028 = (0);
var i__29378_30029 = (0);
while(true){
if((i__29378_30029 < count__29377_30028)){
var component__7980__auto___30055 = cljs.core._nth.call(null,chunk__29376_30027,i__29378_30029);
speclj.components.install.call(null,component__7980__auto___30055,description__7979__auto____$1);


var G__30056 = seq__29375_30026;
var G__30057 = chunk__29376_30027;
var G__30058 = count__29377_30028;
var G__30059 = (i__29378_30029 + (1));
seq__29375_30026 = G__30056;
chunk__29376_30027 = G__30057;
count__29377_30028 = G__30058;
i__29378_30029 = G__30059;
continue;
} else {
var temp__5825__auto___30060 = cljs.core.seq.call(null,seq__29375_30026);
if(temp__5825__auto___30060){
var seq__29375_30061__$1 = temp__5825__auto___30060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29375_30061__$1)){
var c__5548__auto___30062 = cljs.core.chunk_first.call(null,seq__29375_30061__$1);
var G__30063 = cljs.core.chunk_rest.call(null,seq__29375_30061__$1);
var G__30064 = c__5548__auto___30062;
var G__30065 = cljs.core.count.call(null,c__5548__auto___30062);
var G__30066 = (0);
seq__29375_30026 = G__30063;
chunk__29376_30027 = G__30064;
count__29377_30028 = G__30065;
i__29378_30029 = G__30066;
continue;
} else {
var component__7980__auto___30067 = cljs.core.first.call(null,seq__29375_30061__$1);
speclj.components.install.call(null,component__7980__auto___30067,description__7979__auto____$1);


var G__30068 = cljs.core.next.call(null,seq__29375_30061__$1);
var G__30069 = null;
var G__30070 = (0);
var G__30071 = (0);
seq__29375_30026 = G__30068;
chunk__29376_30027 = G__30069;
count__29377_30028 = G__30070;
i__29378_30029 = G__30071;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29373_30024);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"switching player",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29379_30072 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29380_30073 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29380_30073);

try{var seq__29381_30074 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"switches from player X to player O",((function (_STAR_parent_description_STAR__orig_val__29379_30072,_STAR_parent_description_STAR__temp_val__29380_30073,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.Keyword(null,"O","O",795252742);
var actual__8122__auto__ = tic_tac_toe.boardc.switch_player.call(null,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29379_30072,_STAR_parent_description_STAR__temp_val__29380_30073,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"switches from player O to player X",((function (_STAR_parent_description_STAR__orig_val__29379_30072,_STAR_parent_description_STAR__temp_val__29380_30073,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__8122__auto__ = tic_tac_toe.boardc.switch_player.call(null,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29379_30072,_STAR_parent_description_STAR__temp_val__29380_30073,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29382_30075 = null;
var count__29383_30076 = (0);
var i__29384_30077 = (0);
while(true){
if((i__29384_30077 < count__29383_30076)){
var component__7980__auto___30078 = cljs.core._nth.call(null,chunk__29382_30075,i__29384_30077);
speclj.components.install.call(null,component__7980__auto___30078,description__7979__auto____$1);


var G__30079 = seq__29381_30074;
var G__30080 = chunk__29382_30075;
var G__30081 = count__29383_30076;
var G__30082 = (i__29384_30077 + (1));
seq__29381_30074 = G__30079;
chunk__29382_30075 = G__30080;
count__29383_30076 = G__30081;
i__29384_30077 = G__30082;
continue;
} else {
var temp__5825__auto___30083 = cljs.core.seq.call(null,seq__29381_30074);
if(temp__5825__auto___30083){
var seq__29381_30084__$1 = temp__5825__auto___30083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29381_30084__$1)){
var c__5548__auto___30085 = cljs.core.chunk_first.call(null,seq__29381_30084__$1);
var G__30086 = cljs.core.chunk_rest.call(null,seq__29381_30084__$1);
var G__30087 = c__5548__auto___30085;
var G__30088 = cljs.core.count.call(null,c__5548__auto___30085);
var G__30089 = (0);
seq__29381_30074 = G__30086;
chunk__29382_30075 = G__30087;
count__29383_30076 = G__30088;
i__29384_30077 = G__30089;
continue;
} else {
var component__7980__auto___30090 = cljs.core.first.call(null,seq__29381_30084__$1);
speclj.components.install.call(null,component__7980__auto___30090,description__7979__auto____$1);


var G__30091 = cljs.core.next.call(null,seq__29381_30084__$1);
var G__30092 = null;
var G__30093 = (0);
var G__30094 = (0);
seq__29381_30074 = G__30091;
chunk__29382_30075 = G__30092;
count__29383_30076 = G__30093;
i__29384_30077 = G__30094;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29379_30072);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__29385_30095 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__29386_30096 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__29386_30096);

try{var seq__29387_30097 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if there is no winners for X",((function (_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30101 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___30101)){
var value__8115__auto___30102 = temp__5825__auto___30101;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30102;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns false if there is no winners for O",((function (_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___30103 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___30103)){
var value__8115__auto___30104 = temp__5825__auto___30103;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto___30104;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8115__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8115__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning row",((function (_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30105 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30105)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30105;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30106 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30106)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30106;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30107 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30107)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30107;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning column",((function (_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30108 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30108)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30108;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30109 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30109)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30109;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30110 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30110)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30110;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning diagonal",((function (_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30111 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30111)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30111;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30112 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30112)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30112;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30113 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30113)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30113;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto___30114 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8109__auto___30114)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto___30114;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8109__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8109__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__29385_30095,_STAR_parent_description_STAR__temp_val__29386_30096,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27971_29392,_STAR_parent_description_STAR__temp_val__27972_29393,description__7979__auto___29391))
,false)],null)));
var chunk__29388_30098 = null;
var count__29389_30099 = (0);
var i__29390_30100 = (0);
while(true){
if((i__29390_30100 < count__29389_30099)){
var component__7980__auto___30115 = cljs.core._nth.call(null,chunk__29388_30098,i__29390_30100);
speclj.components.install.call(null,component__7980__auto___30115,description__7979__auto____$1);


var G__30116 = seq__29387_30097;
var G__30117 = chunk__29388_30098;
var G__30118 = count__29389_30099;
var G__30119 = (i__29390_30100 + (1));
seq__29387_30097 = G__30116;
chunk__29388_30098 = G__30117;
count__29389_30099 = G__30118;
i__29390_30100 = G__30119;
continue;
} else {
var temp__5825__auto___30120 = cljs.core.seq.call(null,seq__29387_30097);
if(temp__5825__auto___30120){
var seq__29387_30121__$1 = temp__5825__auto___30120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29387_30121__$1)){
var c__5548__auto___30122 = cljs.core.chunk_first.call(null,seq__29387_30121__$1);
var G__30123 = cljs.core.chunk_rest.call(null,seq__29387_30121__$1);
var G__30124 = c__5548__auto___30122;
var G__30125 = cljs.core.count.call(null,c__5548__auto___30122);
var G__30126 = (0);
seq__29387_30097 = G__30123;
chunk__29388_30098 = G__30124;
count__29389_30099 = G__30125;
i__29390_30100 = G__30126;
continue;
} else {
var component__7980__auto___30127 = cljs.core.first.call(null,seq__29387_30121__$1);
speclj.components.install.call(null,component__7980__auto___30127,description__7979__auto____$1);


var G__30128 = cljs.core.next.call(null,seq__29387_30121__$1);
var G__30129 = null;
var G__30130 = (0);
var G__30131 = (0);
seq__29387_30097 = G__30128;
chunk__29388_30098 = G__30129;
count__29389_30099 = G__30130;
i__29390_30100 = G__30131;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__29385_30095);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})()],null)));
var chunk__27974_29395 = null;
var count__27975_29396 = (0);
var i__27976_29397 = (0);
while(true){
if((i__27976_29397 < count__27975_29396)){
var component__7980__auto___30132 = cljs.core._nth.call(null,chunk__27974_29395,i__27976_29397);
speclj.components.install.call(null,component__7980__auto___30132,description__7979__auto___29391);


var G__30133 = seq__27973_29394;
var G__30134 = chunk__27974_29395;
var G__30135 = count__27975_29396;
var G__30136 = (i__27976_29397 + (1));
seq__27973_29394 = G__30133;
chunk__27974_29395 = G__30134;
count__27975_29396 = G__30135;
i__27976_29397 = G__30136;
continue;
} else {
var temp__5825__auto___30137 = cljs.core.seq.call(null,seq__27973_29394);
if(temp__5825__auto___30137){
var seq__27973_30138__$1 = temp__5825__auto___30137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27973_30138__$1)){
var c__5548__auto___30139 = cljs.core.chunk_first.call(null,seq__27973_30138__$1);
var G__30140 = cljs.core.chunk_rest.call(null,seq__27973_30138__$1);
var G__30141 = c__5548__auto___30139;
var G__30142 = cljs.core.count.call(null,c__5548__auto___30139);
var G__30143 = (0);
seq__27973_29394 = G__30140;
chunk__27974_29395 = G__30141;
count__27975_29396 = G__30142;
i__27976_29397 = G__30143;
continue;
} else {
var component__7980__auto___30144 = cljs.core.first.call(null,seq__27973_30138__$1);
speclj.components.install.call(null,component__7980__auto___30144,description__7979__auto___29391);


var G__30145 = cljs.core.next.call(null,seq__27973_30138__$1);
var G__30146 = null;
var G__30147 = (0);
var G__30148 = (0);
seq__27973_29394 = G__30145;
chunk__27974_29395 = G__30146;
count__27975_29396 = G__30147;
i__27976_29397 = G__30148;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__27971_29392);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto___29391);
}


//# sourceMappingURL=boardc_spec.js.map
