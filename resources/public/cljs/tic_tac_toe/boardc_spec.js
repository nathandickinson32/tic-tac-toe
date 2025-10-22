// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.boardc_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.test_boards_3x3x3c_spec');
goog.require('tic_tac_toe.test_boards_4x4c_spec');
var description__7959__auto___11175 = speclj.components.new_description.call(null,"board conditions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__10809_11176 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10810_11177 = description__7959__auto___11175;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10810_11177);

try{var seq__10811_11178 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,18,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"getting all positions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__10995_11182 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10996_11183 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10996_11183);

try{var seq__10997_11184 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all 9 board positions for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_3x3);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets all 16 board positions for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_4x4);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets all 27 board positions for 3x3x3 board",((function (_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.all_positions_3x3x3);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"empty nil boards",((function (_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11188 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null);
var actual__8102__auto___11189 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11188,actual__8102__auto___11189)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11188;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11189;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),null))));
var actual__8102__auto__ = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10995_11182,_STAR_parent_description_STAR__temp_val__10996_11183,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__10998_11185 = null;
var count__10999_11186 = (0);
var i__11000_11187 = (0);
while(true){
if((i__11000_11187 < count__10999_11186)){
var component__7960__auto___11190 = cljs.core._nth.call(null,chunk__10998_11185,i__11000_11187);
speclj.components.install.call(null,component__7960__auto___11190,description__7959__auto____$1);


var G__11191 = seq__10997_11184;
var G__11192 = chunk__10998_11185;
var G__11193 = count__10999_11186;
var G__11194 = (i__11000_11187 + (1));
seq__10997_11184 = G__11191;
chunk__10998_11185 = G__11192;
count__10999_11186 = G__11193;
i__11000_11187 = G__11194;
continue;
} else {
var temp__5825__auto___11195 = cljs.core.seq.call(null,seq__10997_11184);
if(temp__5825__auto___11195){
var seq__10997_11196__$1 = temp__5825__auto___11195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10997_11196__$1)){
var c__5548__auto___11197 = cljs.core.chunk_first.call(null,seq__10997_11196__$1);
var G__11198 = cljs.core.chunk_rest.call(null,seq__10997_11196__$1);
var G__11199 = c__5548__auto___11197;
var G__11200 = cljs.core.count.call(null,c__5548__auto___11197);
var G__11201 = (0);
seq__10997_11184 = G__11198;
chunk__10998_11185 = G__11199;
count__10999_11186 = G__11200;
i__11000_11187 = G__11201;
continue;
} else {
var component__7960__auto___11202 = cljs.core.first.call(null,seq__10997_11196__$1);
speclj.components.install.call(null,component__7960__auto___11202,description__7959__auto____$1);


var G__11203 = cljs.core.next.call(null,seq__10997_11196__$1);
var G__11204 = null;
var G__11205 = (0);
var G__11206 = (0);
seq__10997_11184 = G__11203;
chunk__10998_11185 = G__11204;
count__10999_11186 = G__11205;
i__11000_11187 = G__11206;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10995_11182);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"when determining what grid positions to get",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11001_11207 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11002_11208 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11002_11208);

try{var seq__11003_11209 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns 3x3 positions for 3x3 board size",((function (_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.str_positions_3x3;
var actual__8102__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns 4x4 positions for 4x4 board size",((function (_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.str_positions_4x4;
var actual__8102__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns 3x3x3 positions for 3x3x3 board size",((function (_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.str_positions_3x3x3;
var actual__8102__auto__ = tic_tac_toe.boardc.determine_positions.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11001_11207,_STAR_parent_description_STAR__temp_val__11002_11208,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11004_11210 = null;
var count__11005_11211 = (0);
var i__11006_11212 = (0);
while(true){
if((i__11006_11212 < count__11005_11211)){
var component__7960__auto___11213 = cljs.core._nth.call(null,chunk__11004_11210,i__11006_11212);
speclj.components.install.call(null,component__7960__auto___11213,description__7959__auto____$1);


var G__11214 = seq__11003_11209;
var G__11215 = chunk__11004_11210;
var G__11216 = count__11005_11211;
var G__11217 = (i__11006_11212 + (1));
seq__11003_11209 = G__11214;
chunk__11004_11210 = G__11215;
count__11005_11211 = G__11216;
i__11006_11212 = G__11217;
continue;
} else {
var temp__5825__auto___11218 = cljs.core.seq.call(null,seq__11003_11209);
if(temp__5825__auto___11218){
var seq__11003_11219__$1 = temp__5825__auto___11218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11003_11219__$1)){
var c__5548__auto___11220 = cljs.core.chunk_first.call(null,seq__11003_11219__$1);
var G__11221 = cljs.core.chunk_rest.call(null,seq__11003_11219__$1);
var G__11222 = c__5548__auto___11220;
var G__11223 = cljs.core.count.call(null,c__5548__auto___11220);
var G__11224 = (0);
seq__11003_11209 = G__11221;
chunk__11004_11210 = G__11222;
count__11005_11211 = G__11223;
i__11006_11212 = G__11224;
continue;
} else {
var component__7960__auto___11225 = cljs.core.first.call(null,seq__11003_11219__$1);
speclj.components.install.call(null,component__7960__auto___11225,description__7959__auto____$1);


var G__11226 = cljs.core.next.call(null,seq__11003_11219__$1);
var G__11227 = null;
var G__11228 = (0);
var G__11229 = (0);
seq__11003_11209 = G__11226;
chunk__11004_11210 = G__11227;
count__11005_11211 = G__11228;
i__11006_11212 = G__11229;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11001_11207);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 3x3 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11007_11230 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11008_11231 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11008_11231);

try{var seq__11009_11232 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 9",((function (_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11236 = null;
var actual__8102__auto___11237 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"10",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11236,actual__8102__auto___11237)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11236;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11238 = null;
var actual__8102__auto___11239 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"11",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11238,actual__8102__auto___11239)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11238;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"201",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for strings",((function (_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11240 = null;
var actual__8102__auto___11241 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11240,actual__8102__auto___11241)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11242 = null;
var actual__8102__auto___11243 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"asd",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11242,actual__8102__auto___11243)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11244 = null;
var actual__8102__auto___11245 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11244,actual__8102__auto___11245)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11245;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for empty input",((function (_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-9 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8102__auto___11247 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11246,actual__8102__auto___11247)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11246;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8102__auto___11249 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"2",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11248,actual__8102__auto___11249)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11249;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8102__auto___11251 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"3",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11250,actual__8102__auto___11251)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11250;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11251;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8102__auto___11253 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"4",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11252,actual__8102__auto___11253)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11252;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11253;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8102__auto___11255 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11254,actual__8102__auto___11255)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11254;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11255;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8102__auto___11257 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"6",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11256,actual__8102__auto___11257)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11256;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11257;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__8102__auto___11259 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"7",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11258,actual__8102__auto___11259)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11258;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11259;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
var actual__8102__auto___11261 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"8",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto___11260,actual__8102__auto___11261)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11260;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11261;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"9",new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11007_11230,_STAR_parent_description_STAR__temp_val__11008_11231,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11010_11233 = null;
var count__11011_11234 = (0);
var i__11012_11235 = (0);
while(true){
if((i__11012_11235 < count__11011_11234)){
var component__7960__auto___11262 = cljs.core._nth.call(null,chunk__11010_11233,i__11012_11235);
speclj.components.install.call(null,component__7960__auto___11262,description__7959__auto____$1);


var G__11263 = seq__11009_11232;
var G__11264 = chunk__11010_11233;
var G__11265 = count__11011_11234;
var G__11266 = (i__11012_11235 + (1));
seq__11009_11232 = G__11263;
chunk__11010_11233 = G__11264;
count__11011_11234 = G__11265;
i__11012_11235 = G__11266;
continue;
} else {
var temp__5825__auto___11267 = cljs.core.seq.call(null,seq__11009_11232);
if(temp__5825__auto___11267){
var seq__11009_11268__$1 = temp__5825__auto___11267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11009_11268__$1)){
var c__5548__auto___11269 = cljs.core.chunk_first.call(null,seq__11009_11268__$1);
var G__11270 = cljs.core.chunk_rest.call(null,seq__11009_11268__$1);
var G__11271 = c__5548__auto___11269;
var G__11272 = cljs.core.count.call(null,c__5548__auto___11269);
var G__11273 = (0);
seq__11009_11232 = G__11270;
chunk__11010_11233 = G__11271;
count__11011_11234 = G__11272;
i__11012_11235 = G__11273;
continue;
} else {
var component__7960__auto___11274 = cljs.core.first.call(null,seq__11009_11268__$1);
speclj.components.install.call(null,component__7960__auto___11274,description__7959__auto____$1);


var G__11275 = cljs.core.next.call(null,seq__11009_11268__$1);
var G__11276 = null;
var G__11277 = (0);
var G__11278 = (0);
seq__11009_11232 = G__11275;
chunk__11010_11233 = G__11276;
count__11011_11234 = G__11277;
i__11012_11235 = G__11278;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11007_11230);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 4x4 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11013_11279 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11014_11280 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11014_11280);

try{var seq__11015_11281 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 16",((function (_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"17",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for strings",((function (_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11285 = null;
var actual__8102__auto___11286 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11285,actual__8102__auto___11286)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11285;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11286;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11287 = null;
var actual__8102__auto___11288 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"asd",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11287,actual__8102__auto___11288)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11287;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11288;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11289 = null;
var actual__8102__auto___11290 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11289,actual__8102__auto___11290)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11289;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11290;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for empty input",((function (_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-16 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11291 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8102__auto___11292 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11291,actual__8102__auto___11292)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11291;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11292;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8102__auto___11294 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"2",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11293,actual__8102__auto___11294)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11293;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11294;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8102__auto___11296 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"3",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11295,actual__8102__auto___11296)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11295;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11296;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11297 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__8102__auto___11298 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"4",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11297,actual__8102__auto___11298)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11297;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11298;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8102__auto___11300 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11299,actual__8102__auto___11300)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11299;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11300;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8102__auto___11302 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"6",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11301,actual__8102__auto___11302)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11301;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11302;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__8102__auto___11304 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"11",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto___11303,actual__8102__auto___11304)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11303;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"16",new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11013_11279,_STAR_parent_description_STAR__temp_val__11014_11280,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11016_11282 = null;
var count__11017_11283 = (0);
var i__11018_11284 = (0);
while(true){
if((i__11018_11284 < count__11017_11283)){
var component__7960__auto___11305 = cljs.core._nth.call(null,chunk__11016_11282,i__11018_11284);
speclj.components.install.call(null,component__7960__auto___11305,description__7959__auto____$1);


var G__11306 = seq__11015_11281;
var G__11307 = chunk__11016_11282;
var G__11308 = count__11017_11283;
var G__11309 = (i__11018_11284 + (1));
seq__11015_11281 = G__11306;
chunk__11016_11282 = G__11307;
count__11017_11283 = G__11308;
i__11018_11284 = G__11309;
continue;
} else {
var temp__5825__auto___11310 = cljs.core.seq.call(null,seq__11015_11281);
if(temp__5825__auto___11310){
var seq__11015_11311__$1 = temp__5825__auto___11310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11015_11311__$1)){
var c__5548__auto___11312 = cljs.core.chunk_first.call(null,seq__11015_11311__$1);
var G__11313 = cljs.core.chunk_rest.call(null,seq__11015_11311__$1);
var G__11314 = c__5548__auto___11312;
var G__11315 = cljs.core.count.call(null,c__5548__auto___11312);
var G__11316 = (0);
seq__11015_11281 = G__11313;
chunk__11016_11282 = G__11314;
count__11017_11283 = G__11315;
i__11018_11284 = G__11316;
continue;
} else {
var component__7960__auto___11317 = cljs.core.first.call(null,seq__11015_11311__$1);
speclj.components.install.call(null,component__7960__auto___11317,description__7959__auto____$1);


var G__11318 = cljs.core.next.call(null,seq__11015_11311__$1);
var G__11319 = null;
var G__11320 = (0);
var G__11321 = (0);
seq__11015_11281 = G__11318;
chunk__11016_11282 = G__11319;
count__11017_11283 = G__11320;
i__11018_11284 = G__11321;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11013_11279);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"parse-user-input 3x3x3 board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11019_11322 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11020_11323 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11020_11323);

try{var seq__11021_11324 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns nil for 0",((function (_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"0",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for numbers greater than 27",((function (_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11328 = null;
var actual__8102__auto___11329 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"28",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11328,actual__8102__auto___11329)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11328;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11329;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"100",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns nil for letters, symbols and empty",((function (_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11330 = null;
var actual__8102__auto___11331 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11330,actual__8102__auto___11331)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11330;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11331;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11332 = null;
var actual__8102__auto___11333 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11332,actual__8102__auto___11333)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11332;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11333;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11334 = null;
var actual__8102__auto___11335 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"a a",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11334,actual__8102__auto___11335)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11334;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11335;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11336 = null;
var actual__8102__auto___11337 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null," ",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11336,actual__8102__auto___11337)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11336;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11337;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = null;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"parses input string 1-9 into grid coordinates",((function (_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var actual__8102__auto___11339 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"1",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11338,actual__8102__auto___11339)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11338;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11339;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11340 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null);
var actual__8102__auto___11341 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"5",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11340,actual__8102__auto___11341)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11342 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null);
var actual__8102__auto___11343 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"9",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11342,actual__8102__auto___11343)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11343;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null);
var actual__8102__auto___11345 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"10",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11344,actual__8102__auto___11345)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11344;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11345;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11346 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null);
var actual__8102__auto___11347 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"14",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11346,actual__8102__auto___11347)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11346;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11347;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11348 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null);
var actual__8102__auto___11349 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"18",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11348,actual__8102__auto___11349)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11348;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11349;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11350 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null);
var actual__8102__auto___11351 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"19",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11350,actual__8102__auto___11351)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11350;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11351;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto___11352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null);
var actual__8102__auto___11353 = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"23",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto___11352,actual__8102__auto___11353)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto___11352;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto___11353;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,"27",new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11019_11322,_STAR_parent_description_STAR__temp_val__11020_11323,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11022_11325 = null;
var count__11023_11326 = (0);
var i__11024_11327 = (0);
while(true){
if((i__11024_11327 < count__11023_11326)){
var component__7960__auto___11354 = cljs.core._nth.call(null,chunk__11022_11325,i__11024_11327);
speclj.components.install.call(null,component__7960__auto___11354,description__7959__auto____$1);


var G__11355 = seq__11021_11324;
var G__11356 = chunk__11022_11325;
var G__11357 = count__11023_11326;
var G__11358 = (i__11024_11327 + (1));
seq__11021_11324 = G__11355;
chunk__11022_11325 = G__11356;
count__11023_11326 = G__11357;
i__11024_11327 = G__11358;
continue;
} else {
var temp__5825__auto___11359 = cljs.core.seq.call(null,seq__11021_11324);
if(temp__5825__auto___11359){
var seq__11021_11360__$1 = temp__5825__auto___11359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11021_11360__$1)){
var c__5548__auto___11361 = cljs.core.chunk_first.call(null,seq__11021_11360__$1);
var G__11362 = cljs.core.chunk_rest.call(null,seq__11021_11360__$1);
var G__11363 = c__5548__auto___11361;
var G__11364 = cljs.core.count.call(null,c__5548__auto___11361);
var G__11365 = (0);
seq__11021_11324 = G__11362;
chunk__11022_11325 = G__11363;
count__11023_11326 = G__11364;
i__11024_11327 = G__11365;
continue;
} else {
var component__7960__auto___11366 = cljs.core.first.call(null,seq__11021_11360__$1);
speclj.components.install.call(null,component__7960__auto___11366,description__7959__auto____$1);


var G__11367 = cljs.core.next.call(null,seq__11021_11360__$1);
var G__11368 = null;
var G__11369 = (0);
var G__11370 = (0);
seq__11021_11324 = G__11367;
chunk__11022_11325 = G__11368;
count__11023_11326 = G__11369;
i__11024_11327 = G__11370;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11019_11322);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"getting available 3x3 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11025_11371 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11026_11372 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11026_11372);

try{var seq__11027_11373 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 3x3",((function (_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.all_positions_3x3;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets one available move 3x3",((function (_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 3x3",((function (_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544)));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3",((function (_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8162__auto___11378 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto___11378 == null)){
} else {
if(((typeof expected__8161__auto___11377 === 'string') && (typeof actual__8162__auto___11378 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11378,expected__8161__auto___11377) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11377;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11378;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11377)) && (typeof actual__8162__auto___11378 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11377,actual__8162__auto___11378))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11378;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11377;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11378)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11378,expected__8161__auto___11377)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11377;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11378;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11378)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11377,p1__8160__8163__auto__);
}),actual__8162__auto___11378))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11377;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11378;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11377;
var b__8081__auto__ = actual__8162__auto___11378;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8162__auto___11380 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto___11380 == null)){
} else {
if(((typeof expected__8161__auto___11379 === 'string') && (typeof actual__8162__auto___11380 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11380,expected__8161__auto___11379) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11379;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11380;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11379)) && (typeof actual__8162__auto___11380 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11379,actual__8162__auto___11380))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11380;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11379;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11380)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11380,expected__8161__auto___11379)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11379;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11380;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11380)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11379,p1__8160__8163__auto__);
}),actual__8162__auto___11380))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11379;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11380;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11379;
var b__8081__auto__ = actual__8162__auto___11380;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11381 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null);
var actual__8162__auto___11382 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto___11382 == null)){
} else {
if(((typeof expected__8161__auto___11381 === 'string') && (typeof actual__8162__auto___11382 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11382,expected__8161__auto___11381) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11381;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11382;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11381)) && (typeof actual__8162__auto___11382 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11381,actual__8162__auto___11382))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11382;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11381;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11382)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11382,expected__8161__auto___11381)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11381;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11382;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11382)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11381,p1__8160__8163__auto__);
}),actual__8162__auto___11382))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11381;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11382;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11381;
var b__8081__auto__ = actual__8162__auto___11382;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11383 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var actual__8162__auto___11384 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto___11384 == null)){
} else {
if(((typeof expected__8161__auto___11383 === 'string') && (typeof actual__8162__auto___11384 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11384,expected__8161__auto___11383) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11383;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11384;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11383)) && (typeof actual__8162__auto___11384 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11383,actual__8162__auto___11384))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11384;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11383;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11384)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11384,expected__8161__auto___11383)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11383;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11384;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11384)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11383,p1__8160__8163__auto__);
}),actual__8162__auto___11384))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11383;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11384;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11383;
var b__8081__auto__ = actual__8162__auto___11384;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11385 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__8162__auto___11386 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto___11386 == null)){
} else {
if(((typeof expected__8161__auto___11385 === 'string') && (typeof actual__8162__auto___11386 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11386,expected__8161__auto___11385) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11385;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11386;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11385)) && (typeof actual__8162__auto___11386 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11385,actual__8162__auto___11386))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11386;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11385;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11386)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11386,expected__8161__auto___11385)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11385;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11386;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11386)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11385,p1__8160__8163__auto__);
}),actual__8162__auto___11386))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11385;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11386;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11385;
var b__8081__auto__ = actual__8162__auto___11386;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
var actual__8162__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if((actual__8162__auto__ == null)){
return null;
} else {
if(((typeof expected__8161__auto__ === 'string') && (typeof actual__8162__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto__,expected__8161__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto__)) && (typeof actual__8162__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto__,actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto__,expected__8161__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto__,p1__8160__8163__auto__);
}),actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto__;
var b__8081__auto__ = actual__8162__auto__;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__11025_11371,_STAR_parent_description_STAR__temp_val__11026_11372,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11028_11374 = null;
var count__11029_11375 = (0);
var i__11030_11376 = (0);
while(true){
if((i__11030_11376 < count__11029_11375)){
var component__7960__auto___11387 = cljs.core._nth.call(null,chunk__11028_11374,i__11030_11376);
speclj.components.install.call(null,component__7960__auto___11387,description__7959__auto____$1);


var G__11388 = seq__11027_11373;
var G__11389 = chunk__11028_11374;
var G__11390 = count__11029_11375;
var G__11391 = (i__11030_11376 + (1));
seq__11027_11373 = G__11388;
chunk__11028_11374 = G__11389;
count__11029_11375 = G__11390;
i__11030_11376 = G__11391;
continue;
} else {
var temp__5825__auto___11392 = cljs.core.seq.call(null,seq__11027_11373);
if(temp__5825__auto___11392){
var seq__11027_11393__$1 = temp__5825__auto___11392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11027_11393__$1)){
var c__5548__auto___11394 = cljs.core.chunk_first.call(null,seq__11027_11393__$1);
var G__11395 = cljs.core.chunk_rest.call(null,seq__11027_11393__$1);
var G__11396 = c__5548__auto___11394;
var G__11397 = cljs.core.count.call(null,c__5548__auto___11394);
var G__11398 = (0);
seq__11027_11373 = G__11395;
chunk__11028_11374 = G__11396;
count__11029_11375 = G__11397;
i__11030_11376 = G__11398;
continue;
} else {
var component__7960__auto___11399 = cljs.core.first.call(null,seq__11027_11393__$1);
speclj.components.install.call(null,component__7960__auto___11399,description__7959__auto____$1);


var G__11400 = cljs.core.next.call(null,seq__11027_11393__$1);
var G__11401 = null;
var G__11402 = (0);
var G__11403 = (0);
seq__11027_11373 = G__11400;
chunk__11028_11374 = G__11401;
count__11029_11375 = G__11402;
i__11030_11376 = G__11403;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11025_11371);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"getting available 4x4 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11031_11404 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11032_11405 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11032_11405);

try{var seq__11033_11406 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 4x4",((function (_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.all_positions_4x4;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets one available move 4x4",((function (_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 4x4",((function (_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5",new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"11",new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723)));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3",((function (_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14","15",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8162__auto___11411 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8162__auto___11411 == null)){
} else {
if(((typeof expected__8161__auto___11410 === 'string') && (typeof actual__8162__auto___11411 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11411,expected__8161__auto___11410) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11410;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11411;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11410)) && (typeof actual__8162__auto___11411 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11410,actual__8162__auto___11411))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11411;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11410;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11411)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11411,expected__8161__auto___11410)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11410;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11411;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11411)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11410,p1__8160__8163__auto__);
}),actual__8162__auto___11411))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11410;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11411;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11410;
var b__8081__auto__ = actual__8162__auto___11411;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__8162__auto___11413 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8162__auto___11413 == null)){
} else {
if(((typeof expected__8161__auto___11412 === 'string') && (typeof actual__8162__auto___11413 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11413,expected__8161__auto___11412) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11412;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11413;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11412)) && (typeof actual__8162__auto___11413 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11412,actual__8162__auto___11413))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11413;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11412;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11413)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11413,expected__8161__auto___11412)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11412;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11413;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11413)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11412,p1__8160__8163__auto__);
}),actual__8162__auto___11413))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11412;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11413;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11412;
var b__8081__auto__ = actual__8162__auto___11413;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
var actual__8162__auto___11415 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8162__auto___11415 == null)){
} else {
if(((typeof expected__8161__auto___11414 === 'string') && (typeof actual__8162__auto___11415 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11415,expected__8161__auto___11414) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11414;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11415;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11414)) && (typeof actual__8162__auto___11415 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11414,actual__8162__auto___11415))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11415;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11414;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11415)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11415,expected__8161__auto___11414)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11414;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11415;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11415)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11414,p1__8160__8163__auto__);
}),actual__8162__auto___11415))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11414;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11415;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11414;
var b__8081__auto__ = actual__8162__auto___11415;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__8162__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if((actual__8162__auto__ == null)){
return null;
} else {
if(((typeof expected__8161__auto__ === 'string') && (typeof actual__8162__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto__,expected__8161__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto__)) && (typeof actual__8162__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto__,actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto__,expected__8161__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto__,p1__8160__8163__auto__);
}),actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto__;
var b__8081__auto__ = actual__8162__auto__;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__11031_11404,_STAR_parent_description_STAR__temp_val__11032_11405,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11034_11407 = null;
var count__11035_11408 = (0);
var i__11036_11409 = (0);
while(true){
if((i__11036_11409 < count__11035_11408)){
var component__7960__auto___11416 = cljs.core._nth.call(null,chunk__11034_11407,i__11036_11409);
speclj.components.install.call(null,component__7960__auto___11416,description__7959__auto____$1);


var G__11417 = seq__11033_11406;
var G__11418 = chunk__11034_11407;
var G__11419 = count__11035_11408;
var G__11420 = (i__11036_11409 + (1));
seq__11033_11406 = G__11417;
chunk__11034_11407 = G__11418;
count__11035_11408 = G__11419;
i__11036_11409 = G__11420;
continue;
} else {
var temp__5825__auto___11421 = cljs.core.seq.call(null,seq__11033_11406);
if(temp__5825__auto___11421){
var seq__11033_11422__$1 = temp__5825__auto___11421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11033_11422__$1)){
var c__5548__auto___11423 = cljs.core.chunk_first.call(null,seq__11033_11422__$1);
var G__11424 = cljs.core.chunk_rest.call(null,seq__11033_11422__$1);
var G__11425 = c__5548__auto___11423;
var G__11426 = cljs.core.count.call(null,c__5548__auto___11423);
var G__11427 = (0);
seq__11033_11406 = G__11424;
chunk__11034_11407 = G__11425;
count__11035_11408 = G__11426;
i__11036_11409 = G__11427;
continue;
} else {
var component__7960__auto___11428 = cljs.core.first.call(null,seq__11033_11422__$1);
speclj.components.install.call(null,component__7960__auto___11428,description__7959__auto____$1);


var G__11429 = cljs.core.next.call(null,seq__11033_11422__$1);
var G__11430 = null;
var G__11431 = (0);
var G__11432 = (0);
seq__11033_11406 = G__11429;
chunk__11034_11407 = G__11430;
count__11035_11408 = G__11431;
i__11036_11409 = G__11432;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11031_11404);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"getting available 3x3x3 moves",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11037_11433 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11038_11434 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11038_11434);

try{var seq__11039_11435 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets all positions when board-size is 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = tic_tac_toe.boardc.all_positions_3x3x3;
var actual__8102__auto__ = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets one available move 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets all available moves for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null);
var actual__8102__auto__ = cljs.core.sort.call(null,tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540)));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"does not contain moves that are taken for 3x3x3",((function (_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"8",new cljs.core.Keyword(null,"O","O",795252742)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"17",new cljs.core.Keyword(null,"O","O",795252742)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"26",new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11439 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var actual__8162__auto___11440 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11440 == null)){
} else {
if(((typeof expected__8161__auto___11439 === 'string') && (typeof actual__8162__auto___11440 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11440,expected__8161__auto___11439) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11439)) && (typeof actual__8162__auto___11440 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11439,actual__8162__auto___11440))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11440)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11440,expected__8161__auto___11439)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11440)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11439,p1__8160__8163__auto__);
}),actual__8162__auto___11440))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11439;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11440;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11439;
var b__8081__auto__ = actual__8162__auto___11440;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null);
var actual__8162__auto___11442 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11442 == null)){
} else {
if(((typeof expected__8161__auto___11441 === 'string') && (typeof actual__8162__auto___11442 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11442,expected__8161__auto___11441) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11441;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11441)) && (typeof actual__8162__auto___11442 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11441,actual__8162__auto___11442))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11441;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11442)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11442,expected__8161__auto___11441)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11441;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11442)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11441,p1__8160__8163__auto__);
}),actual__8162__auto___11442))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11441;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11442;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11441;
var b__8081__auto__ = actual__8162__auto___11442;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11443 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null);
var actual__8162__auto___11444 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11444 == null)){
} else {
if(((typeof expected__8161__auto___11443 === 'string') && (typeof actual__8162__auto___11444 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11444,expected__8161__auto___11443) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11444;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11443)) && (typeof actual__8162__auto___11444 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11443,actual__8162__auto___11444))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11444;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11444)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11444,expected__8161__auto___11443)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11444;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11444)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11443,p1__8160__8163__auto__);
}),actual__8162__auto___11444))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11443;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11444;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11443;
var b__8081__auto__ = actual__8162__auto___11444;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11445 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null);
var actual__8162__auto___11446 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11446 == null)){
} else {
if(((typeof expected__8161__auto___11445 === 'string') && (typeof actual__8162__auto___11446 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11446,expected__8161__auto___11445) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11445;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11446;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11445)) && (typeof actual__8162__auto___11446 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11445,actual__8162__auto___11446))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11446;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11445;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11446)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11446,expected__8161__auto___11445)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11445;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11446;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11446)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11445,p1__8160__8163__auto__);
}),actual__8162__auto___11446))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11445;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11446;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11445;
var b__8081__auto__ = actual__8162__auto___11446;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11447 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null);
var actual__8162__auto___11448 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11448 == null)){
} else {
if(((typeof expected__8161__auto___11447 === 'string') && (typeof actual__8162__auto___11448 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11448,expected__8161__auto___11447) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11447;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11447)) && (typeof actual__8162__auto___11448 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11447,actual__8162__auto___11448))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11447;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11448)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11448,expected__8161__auto___11447)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11447;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11448)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11447,p1__8160__8163__auto__);
}),actual__8162__auto___11448))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11447;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11448;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11447;
var b__8081__auto__ = actual__8162__auto___11448;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto___11449 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null);
var actual__8162__auto___11450 = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto___11450 == null)){
} else {
if(((typeof expected__8161__auto___11449 === 'string') && (typeof actual__8162__auto___11450 === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto___11450,expected__8161__auto___11449) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11449;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto___11449)) && (typeof actual__8162__auto___11450 === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto___11449,actual__8162__auto___11450))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto___11450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto___11449;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto___11450)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto___11450,expected__8161__auto___11449)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11449;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto___11450)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto___11449,p1__8160__8163__auto__);
}),actual__8162__auto___11450))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto___11449;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto___11450;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto___11449;
var b__8081__auto__ = actual__8162__auto___11450;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__8161__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null);
var actual__8162__auto__ = tic_tac_toe.boardc.available_moves.call(null,test_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if((actual__8162__auto__ == null)){
return null;
} else {
if(((typeof expected__8161__auto__ === 'string') && (typeof actual__8162__auto__ === 'string'))){
if((!((clojure.string.index_of.call(null,actual__8162__auto__,expected__8161__auto__) == null)))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8161__auto__)) && (typeof actual__8162__auto__ === 'string'))){
if(cljs.core.seq.call(null,cljs.core.re_seq.call(null,expected__8161__auto__,actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to match: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8162__auto__,expected__8161__auto__)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be a key in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8162__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8160__8163__auto__){
return cljs.core._EQ_.call(null,expected__8161__auto__,p1__8160__8163__auto__);
}),actual__8162__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8161__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"not to be in: ",(function (){var temp__5827__auto__ = actual__8162__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
throw (new Error((function (){var a__8080__auto__ = expected__8161__auto__;
var b__8081__auto__ = actual__8162__auto__;
var type_a__8082__auto__ = (((a__8080__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8080__auto__)));
var type_b__8083__auto__ = (((b__8081__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8081__auto__)));
return ["should-not-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8082__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8083__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__11037_11433,_STAR_parent_description_STAR__temp_val__11038_11434,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11040_11436 = null;
var count__11041_11437 = (0);
var i__11042_11438 = (0);
while(true){
if((i__11042_11438 < count__11041_11437)){
var component__7960__auto___11451 = cljs.core._nth.call(null,chunk__11040_11436,i__11042_11438);
speclj.components.install.call(null,component__7960__auto___11451,description__7959__auto____$1);


var G__11452 = seq__11039_11435;
var G__11453 = chunk__11040_11436;
var G__11454 = count__11041_11437;
var G__11455 = (i__11042_11438 + (1));
seq__11039_11435 = G__11452;
chunk__11040_11436 = G__11453;
count__11041_11437 = G__11454;
i__11042_11438 = G__11455;
continue;
} else {
var temp__5825__auto___11456 = cljs.core.seq.call(null,seq__11039_11435);
if(temp__5825__auto___11456){
var seq__11039_11457__$1 = temp__5825__auto___11456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11039_11457__$1)){
var c__5548__auto___11458 = cljs.core.chunk_first.call(null,seq__11039_11457__$1);
var G__11459 = cljs.core.chunk_rest.call(null,seq__11039_11457__$1);
var G__11460 = c__5548__auto___11458;
var G__11461 = cljs.core.count.call(null,c__5548__auto___11458);
var G__11462 = (0);
seq__11039_11435 = G__11459;
chunk__11040_11436 = G__11460;
count__11041_11437 = G__11461;
i__11042_11438 = G__11462;
continue;
} else {
var component__7960__auto___11463 = cljs.core.first.call(null,seq__11039_11457__$1);
speclj.components.install.call(null,component__7960__auto___11463,description__7959__auto____$1);


var G__11464 = cljs.core.next.call(null,seq__11039_11457__$1);
var G__11465 = null;
var G__11466 = (0);
var G__11467 = (0);
seq__11039_11435 = G__11464;
chunk__11040_11436 = G__11465;
count__11041_11437 = G__11466;
i__11042_11438 = G__11467;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11037_11433);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"make-move",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11043_11468 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11044_11469 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11044_11469);

try{var seq__11045_11470 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks 3x3 grid with X",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"marks 3x3 grid with O",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"marks 4x4 grid with X",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_4x4,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"marks 4x4 grid with O",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15","16"], null)], null);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_4x4,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"marks 3x3x3 grid with X",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
var move = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3x3,move,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"marks 3x3x3 grid with O",((function (_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
var move = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = test_board;
var actual__8102__auto__ = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.boardc.starting_board_3x3x3,move,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11043_11468,_STAR_parent_description_STAR__temp_val__11044_11469,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11046_11471 = null;
var count__11047_11472 = (0);
var i__11048_11473 = (0);
while(true){
if((i__11048_11473 < count__11047_11472)){
var component__7960__auto___11474 = cljs.core._nth.call(null,chunk__11046_11471,i__11048_11473);
speclj.components.install.call(null,component__7960__auto___11474,description__7959__auto____$1);


var G__11475 = seq__11045_11470;
var G__11476 = chunk__11046_11471;
var G__11477 = count__11047_11472;
var G__11478 = (i__11048_11473 + (1));
seq__11045_11470 = G__11475;
chunk__11046_11471 = G__11476;
count__11047_11472 = G__11477;
i__11048_11473 = G__11478;
continue;
} else {
var temp__5825__auto___11479 = cljs.core.seq.call(null,seq__11045_11470);
if(temp__5825__auto___11479){
var seq__11045_11480__$1 = temp__5825__auto___11479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11045_11480__$1)){
var c__5548__auto___11481 = cljs.core.chunk_first.call(null,seq__11045_11480__$1);
var G__11482 = cljs.core.chunk_rest.call(null,seq__11045_11480__$1);
var G__11483 = c__5548__auto___11481;
var G__11484 = cljs.core.count.call(null,c__5548__auto___11481);
var G__11485 = (0);
seq__11045_11470 = G__11482;
chunk__11046_11471 = G__11483;
count__11047_11472 = G__11484;
i__11048_11473 = G__11485;
continue;
} else {
var component__7960__auto___11486 = cljs.core.first.call(null,seq__11045_11480__$1);
speclj.components.install.call(null,component__7960__auto___11486,description__7959__auto____$1);


var G__11487 = cljs.core.next.call(null,seq__11045_11480__$1);
var G__11488 = null;
var G__11489 = (0);
var G__11490 = (0);
seq__11045_11470 = G__11487;
chunk__11046_11471 = G__11488;
count__11047_11472 = G__11489;
i__11048_11473 = G__11490;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11043_11468);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"draw/tie game",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11049_11491 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11050_11492 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11050_11492);

try{var seq__11051_11493 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when the 3x3 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11497 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11497){
var value__8095__auto___11498 = temp__5825__auto___11497;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11498;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11499 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11499){
var value__8095__auto___11500 = temp__5825__auto___11499;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11500;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto__){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true when the 3x3 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11501 = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto___11501){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11501;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board2,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns false when the 4x4 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.test_starting_board_4x4,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(temp__5825__auto__){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true when the 4x4 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.full_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns false when the 3x3x3 board has available spaces",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.test_starting_board_3x3x3,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(temp__5825__auto__){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true when the 3x3x3 board is full with no winner",((function (_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.full_board_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11049_11491,_STAR_parent_description_STAR__temp_val__11050_11492,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11052_11494 = null;
var count__11053_11495 = (0);
var i__11054_11496 = (0);
while(true){
if((i__11054_11496 < count__11053_11495)){
var component__7960__auto___11502 = cljs.core._nth.call(null,chunk__11052_11494,i__11054_11496);
speclj.components.install.call(null,component__7960__auto___11502,description__7959__auto____$1);


var G__11503 = seq__11051_11493;
var G__11504 = chunk__11052_11494;
var G__11505 = count__11053_11495;
var G__11506 = (i__11054_11496 + (1));
seq__11051_11493 = G__11503;
chunk__11052_11494 = G__11504;
count__11053_11495 = G__11505;
i__11054_11496 = G__11506;
continue;
} else {
var temp__5825__auto___11507 = cljs.core.seq.call(null,seq__11051_11493);
if(temp__5825__auto___11507){
var seq__11051_11508__$1 = temp__5825__auto___11507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11051_11508__$1)){
var c__5548__auto___11509 = cljs.core.chunk_first.call(null,seq__11051_11508__$1);
var G__11510 = cljs.core.chunk_rest.call(null,seq__11051_11508__$1);
var G__11511 = c__5548__auto___11509;
var G__11512 = cljs.core.count.call(null,c__5548__auto___11509);
var G__11513 = (0);
seq__11051_11493 = G__11510;
chunk__11052_11494 = G__11511;
count__11053_11495 = G__11512;
i__11054_11496 = G__11513;
continue;
} else {
var component__7960__auto___11514 = cljs.core.first.call(null,seq__11051_11508__$1);
speclj.components.install.call(null,component__7960__auto___11514,description__7959__auto____$1);


var G__11515 = cljs.core.next.call(null,seq__11051_11508__$1);
var G__11516 = null;
var G__11517 = (0);
var G__11518 = (0);
seq__11051_11493 = G__11515;
chunk__11052_11494 = G__11516;
count__11053_11495 = G__11517;
i__11054_11496 = G__11518;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11049_11491);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"2d rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11055_11519 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11056_11520 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11056_11520);

try{var seq__11057_11521 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no rows have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11525 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___11525){
var value__8095__auto___11526 = temp__5825__auto___11525;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11526;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11527 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,(2)),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___11527){
var value__8095__auto___11528 = temp__5825__auto___11527;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11528;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11529 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.second.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X),new cljs.core.Keyword(null,"O","O",795252742));
if(temp__5825__auto___11529){
var value__8095__auto___11530 = temp__5825__auto___11529;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11530;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11531 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,(1)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto___11531){
var value__8095__auto___11532 = temp__5825__auto___11531;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11532;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11533 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto___11533){
var value__8095__auto___11534 = temp__5825__auto___11533;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11534;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(temp__5825__auto__){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols",((function (_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11535 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8089__auto___11535){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11535;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11536 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.nth.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,(2)),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8089__auto___11536){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11536;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11537 = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.second.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O),new cljs.core.Keyword(null,"O","O",795252742));
if(value__8089__auto___11537){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11537;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,cljs.core.first.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row),new cljs.core.Keyword(null,"X","X",1705996313));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"is a winning row",((function (_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11538 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto___11538)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11538;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11539 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto___11539)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11539;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11540 = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto___11540)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11540;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11055_11519,_STAR_parent_description_STAR__temp_val__11056_11520,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11058_11522 = null;
var count__11059_11523 = (0);
var i__11060_11524 = (0);
while(true){
if((i__11060_11524 < count__11059_11523)){
var component__7960__auto___11541 = cljs.core._nth.call(null,chunk__11058_11522,i__11060_11524);
speclj.components.install.call(null,component__7960__auto___11541,description__7959__auto____$1);


var G__11542 = seq__11057_11521;
var G__11543 = chunk__11058_11522;
var G__11544 = count__11059_11523;
var G__11545 = (i__11060_11524 + (1));
seq__11057_11521 = G__11542;
chunk__11058_11522 = G__11543;
count__11059_11523 = G__11544;
i__11060_11524 = G__11545;
continue;
} else {
var temp__5825__auto___11546 = cljs.core.seq.call(null,seq__11057_11521);
if(temp__5825__auto___11546){
var seq__11057_11547__$1 = temp__5825__auto___11546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11057_11547__$1)){
var c__5548__auto___11548 = cljs.core.chunk_first.call(null,seq__11057_11547__$1);
var G__11549 = cljs.core.chunk_rest.call(null,seq__11057_11547__$1);
var G__11550 = c__5548__auto___11548;
var G__11551 = cljs.core.count.call(null,c__5548__auto___11548);
var G__11552 = (0);
seq__11057_11521 = G__11549;
chunk__11058_11522 = G__11550;
count__11059_11523 = G__11551;
i__11060_11524 = G__11552;
continue;
} else {
var component__7960__auto___11553 = cljs.core.first.call(null,seq__11057_11547__$1);
speclj.components.install.call(null,component__7960__auto___11553,description__7959__auto____$1);


var G__11554 = cljs.core.next.call(null,seq__11057_11547__$1);
var G__11555 = null;
var G__11556 = (0);
var G__11557 = (0);
seq__11057_11521 = G__11554;
chunk__11058_11522 = G__11555;
count__11059_11523 = G__11556;
i__11060_11524 = G__11557;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11055_11519);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"2d columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11061_11558 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11062_11559 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11062_11559);

try{var seq__11063_11560 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no cols have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__11061_11558,_STAR_parent_description_STAR__temp_val__11062_11559,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11564 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___11564)){
var value__8095__auto___11565 = temp__5825__auto___11564;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11565;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11566 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___11566)){
var value__8095__auto___11567 = temp__5825__auto___11566;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11567;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11568 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto___11568)){
var value__8095__auto___11569 = temp__5825__auto___11568;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11569;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11061_11558,_STAR_parent_description_STAR__temp_val__11062_11559,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"is a winning column",((function (_STAR_parent_description_STAR__orig_val__11061_11558,_STAR_parent_description_STAR__temp_val__11062_11559,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11570 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto___11570)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11570;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11571 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto___11571)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11571;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11572 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto___11572)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11572;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11061_11558,_STAR_parent_description_STAR__temp_val__11062_11559,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11064_11561 = null;
var count__11065_11562 = (0);
var i__11066_11563 = (0);
while(true){
if((i__11066_11563 < count__11065_11562)){
var component__7960__auto___11573 = cljs.core._nth.call(null,chunk__11064_11561,i__11066_11563);
speclj.components.install.call(null,component__7960__auto___11573,description__7959__auto____$1);


var G__11574 = seq__11063_11560;
var G__11575 = chunk__11064_11561;
var G__11576 = count__11065_11562;
var G__11577 = (i__11066_11563 + (1));
seq__11063_11560 = G__11574;
chunk__11064_11561 = G__11575;
count__11065_11562 = G__11576;
i__11066_11563 = G__11577;
continue;
} else {
var temp__5825__auto___11578 = cljs.core.seq.call(null,seq__11063_11560);
if(temp__5825__auto___11578){
var seq__11063_11579__$1 = temp__5825__auto___11578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11063_11579__$1)){
var c__5548__auto___11580 = cljs.core.chunk_first.call(null,seq__11063_11579__$1);
var G__11581 = cljs.core.chunk_rest.call(null,seq__11063_11579__$1);
var G__11582 = c__5548__auto___11580;
var G__11583 = cljs.core.count.call(null,c__5548__auto___11580);
var G__11584 = (0);
seq__11063_11560 = G__11581;
chunk__11064_11561 = G__11582;
count__11065_11562 = G__11583;
i__11066_11563 = G__11584;
continue;
} else {
var component__7960__auto___11585 = cljs.core.first.call(null,seq__11063_11579__$1);
speclj.components.install.call(null,component__7960__auto___11585,description__7959__auto____$1);


var G__11586 = cljs.core.next.call(null,seq__11063_11579__$1);
var G__11587 = null;
var G__11588 = (0);
var G__11589 = (0);
seq__11063_11560 = G__11586;
chunk__11064_11561 = G__11587;
count__11065_11562 = G__11588;
i__11066_11563 = G__11589;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11061_11558);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"2d diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11067_11590 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11068_11591 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11068_11591);

try{var seq__11069_11592 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"gets diagonal left for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.diagonal_right_3x3.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 3x3 board",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.diagonal_left_3x3.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.diagonal_right_4x4.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"gets diagonal left for 4x4 board",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null);
var actual__8102__auto__ = tic_tac_toe.boardc.diagonal_left_4x4.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4);
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"false for not same symbol diagonal 3x3",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11596 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11596){
var value__8095__auto___11597 = temp__5825__auto___11596;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11597;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11598 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11598){
var value__8095__auto___11599 = temp__5825__auto___11598;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11599;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11600 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.next_move_wins_X_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11600){
var value__8095__auto___11601 = temp__5825__auto___11600;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11601;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11602 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11602){
var value__8095__auto___11603 = temp__5825__auto___11602;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11603;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11604 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto___11604){
var value__8095__auto___11605 = temp__5825__auto___11604;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11605;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(temp__5825__auto__){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"true for same symbol diagonal 3x3",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11606 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto___11606){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11606;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11607 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto___11607){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11607;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11608 = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto___11608){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11608;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"determines winning diagonal by board size",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"true for same symbol diagonal 4x4",((function (_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(value__8089__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11067_11590,_STAR_parent_description_STAR__temp_val__11068_11591,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11070_11593 = null;
var count__11071_11594 = (0);
var i__11072_11595 = (0);
while(true){
if((i__11072_11595 < count__11071_11594)){
var component__7960__auto___11609 = cljs.core._nth.call(null,chunk__11070_11593,i__11072_11595);
speclj.components.install.call(null,component__7960__auto___11609,description__7959__auto____$1);


var G__11610 = seq__11069_11592;
var G__11611 = chunk__11070_11593;
var G__11612 = count__11071_11594;
var G__11613 = (i__11072_11595 + (1));
seq__11069_11592 = G__11610;
chunk__11070_11593 = G__11611;
count__11071_11594 = G__11612;
i__11072_11595 = G__11613;
continue;
} else {
var temp__5825__auto___11614 = cljs.core.seq.call(null,seq__11069_11592);
if(temp__5825__auto___11614){
var seq__11069_11615__$1 = temp__5825__auto___11614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11069_11615__$1)){
var c__5548__auto___11616 = cljs.core.chunk_first.call(null,seq__11069_11615__$1);
var G__11617 = cljs.core.chunk_rest.call(null,seq__11069_11615__$1);
var G__11618 = c__5548__auto___11616;
var G__11619 = cljs.core.count.call(null,c__5548__auto___11616);
var G__11620 = (0);
seq__11069_11592 = G__11617;
chunk__11070_11593 = G__11618;
count__11071_11594 = G__11619;
i__11072_11595 = G__11620;
continue;
} else {
var component__7960__auto___11621 = cljs.core.first.call(null,seq__11069_11615__$1);
speclj.components.install.call(null,component__7960__auto___11621,description__7959__auto____$1);


var G__11622 = cljs.core.next.call(null,seq__11069_11615__$1);
var G__11623 = null;
var G__11624 = (0);
var G__11625 = (0);
seq__11069_11592 = G__11622;
chunk__11070_11593 = G__11623;
count__11071_11594 = G__11624;
i__11072_11595 = G__11625;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11067_11590);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"2D win conditions for 3D board",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11073_11626 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11074_11627 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11074_11627);

try{var seq__11075_11628 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"3d rows",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11097_11632 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11098_11633 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11098_11633);

try{var seq__11099_11634 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no rows have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11097_11632,_STAR_parent_description_STAR__temp_val__11098_11633,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11100_11635 = null;
var count__11101_11636 = (0);
var i__11102_11637 = (0);
while(true){
if((i__11102_11637 < count__11101_11636)){
var component__7960__auto___11638 = cljs.core._nth.call(null,chunk__11100_11635,i__11102_11637);
speclj.components.install.call(null,component__7960__auto___11638,description__7959__auto____$2);


var G__11639 = seq__11099_11634;
var G__11640 = chunk__11100_11635;
var G__11641 = count__11101_11636;
var G__11642 = (i__11102_11637 + (1));
seq__11099_11634 = G__11639;
chunk__11100_11635 = G__11640;
count__11101_11636 = G__11641;
i__11102_11637 = G__11642;
continue;
} else {
var temp__5825__auto___11643 = cljs.core.seq.call(null,seq__11099_11634);
if(temp__5825__auto___11643){
var seq__11099_11644__$1 = temp__5825__auto___11643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11099_11644__$1)){
var c__5548__auto___11645 = cljs.core.chunk_first.call(null,seq__11099_11644__$1);
var G__11646 = cljs.core.chunk_rest.call(null,seq__11099_11644__$1);
var G__11647 = c__5548__auto___11645;
var G__11648 = cljs.core.count.call(null,c__5548__auto___11645);
var G__11649 = (0);
seq__11099_11634 = G__11646;
chunk__11100_11635 = G__11647;
count__11101_11636 = G__11648;
i__11102_11637 = G__11649;
continue;
} else {
var component__7960__auto___11650 = cljs.core.first.call(null,seq__11099_11644__$1);
speclj.components.install.call(null,component__7960__auto___11650,description__7959__auto____$2);


var G__11651 = cljs.core.next.call(null,seq__11099_11644__$1);
var G__11652 = null;
var G__11653 = (0);
var G__11654 = (0);
seq__11099_11634 = G__11651;
chunk__11100_11635 = G__11652;
count__11101_11636 = G__11653;
i__11102_11637 = G__11654;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11097_11632);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})(),(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"3d columns",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11103_11655 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11104_11656 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11104_11656);

try{var seq__11105_11657 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false when no columns have all matching symbols",((function (_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for a single row of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11103_11655,_STAR_parent_description_STAR__temp_val__11104_11656,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11106_11658 = null;
var count__11107_11659 = (0);
var i__11108_11660 = (0);
while(true){
if((i__11108_11660 < count__11107_11659)){
var component__7960__auto___11661 = cljs.core._nth.call(null,chunk__11106_11658,i__11108_11660);
speclj.components.install.call(null,component__7960__auto___11661,description__7959__auto____$2);


var G__11662 = seq__11105_11657;
var G__11663 = chunk__11106_11658;
var G__11664 = count__11107_11659;
var G__11665 = (i__11108_11660 + (1));
seq__11105_11657 = G__11662;
chunk__11106_11658 = G__11663;
count__11107_11659 = G__11664;
i__11108_11660 = G__11665;
continue;
} else {
var temp__5825__auto___11666 = cljs.core.seq.call(null,seq__11105_11657);
if(temp__5825__auto___11666){
var seq__11105_11667__$1 = temp__5825__auto___11666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11105_11667__$1)){
var c__5548__auto___11668 = cljs.core.chunk_first.call(null,seq__11105_11667__$1);
var G__11669 = cljs.core.chunk_rest.call(null,seq__11105_11667__$1);
var G__11670 = c__5548__auto___11668;
var G__11671 = cljs.core.count.call(null,c__5548__auto___11668);
var G__11672 = (0);
seq__11105_11657 = G__11669;
chunk__11106_11658 = G__11670;
count__11107_11659 = G__11671;
i__11108_11660 = G__11672;
continue;
} else {
var component__7960__auto___11673 = cljs.core.first.call(null,seq__11105_11667__$1);
speclj.components.install.call(null,component__7960__auto___11673,description__7959__auto____$2);


var G__11674 = cljs.core.next.call(null,seq__11105_11667__$1);
var G__11675 = null;
var G__11676 = (0);
var G__11677 = (0);
seq__11105_11657 = G__11674;
chunk__11106_11658 = G__11675;
count__11107_11659 = G__11676;
i__11108_11660 = G__11677;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11103_11655);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})(),(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"3d diagonals",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11109_11678 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11110_11679 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11110_11679);

try{var seq__11111_11680 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"false for not same symbol diagonal",((function (_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 1st layer",((function (_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.Keyword(null,"X","X",1705996313));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 2nd layer",((function (_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true for diagonal down right of matching symbols in 3rd layer",((function (_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = cljs.core.assoc_in.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_with_27,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.Keyword(null,"O","O",795252742));
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11109_11678,_STAR_parent_description_STAR__temp_val__11110_11679,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11073_11626,_STAR_parent_description_STAR__temp_val__11074_11627,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11112_11681 = null;
var count__11113_11682 = (0);
var i__11114_11683 = (0);
while(true){
if((i__11114_11683 < count__11113_11682)){
var component__7960__auto___11684 = cljs.core._nth.call(null,chunk__11112_11681,i__11114_11683);
speclj.components.install.call(null,component__7960__auto___11684,description__7959__auto____$2);


var G__11685 = seq__11111_11680;
var G__11686 = chunk__11112_11681;
var G__11687 = count__11113_11682;
var G__11688 = (i__11114_11683 + (1));
seq__11111_11680 = G__11685;
chunk__11112_11681 = G__11686;
count__11113_11682 = G__11687;
i__11114_11683 = G__11688;
continue;
} else {
var temp__5825__auto___11689 = cljs.core.seq.call(null,seq__11111_11680);
if(temp__5825__auto___11689){
var seq__11111_11690__$1 = temp__5825__auto___11689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11111_11690__$1)){
var c__5548__auto___11691 = cljs.core.chunk_first.call(null,seq__11111_11690__$1);
var G__11692 = cljs.core.chunk_rest.call(null,seq__11111_11690__$1);
var G__11693 = c__5548__auto___11691;
var G__11694 = cljs.core.count.call(null,c__5548__auto___11691);
var G__11695 = (0);
seq__11111_11680 = G__11692;
chunk__11112_11681 = G__11693;
count__11113_11682 = G__11694;
i__11114_11683 = G__11695;
continue;
} else {
var component__7960__auto___11696 = cljs.core.first.call(null,seq__11111_11690__$1);
speclj.components.install.call(null,component__7960__auto___11696,description__7959__auto____$2);


var G__11697 = cljs.core.next.call(null,seq__11111_11690__$1);
var G__11698 = null;
var G__11699 = (0);
var G__11700 = (0);
seq__11111_11680 = G__11697;
chunk__11112_11681 = G__11698;
count__11113_11682 = G__11699;
i__11114_11683 = G__11700;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11109_11678);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})()],null)));
var chunk__11076_11629 = null;
var count__11077_11630 = (0);
var i__11078_11631 = (0);
while(true){
if((i__11078_11631 < count__11077_11630)){
var component__7960__auto___11701 = cljs.core._nth.call(null,chunk__11076_11629,i__11078_11631);
speclj.components.install.call(null,component__7960__auto___11701,description__7959__auto____$1);


var G__11702 = seq__11075_11628;
var G__11703 = chunk__11076_11629;
var G__11704 = count__11077_11630;
var G__11705 = (i__11078_11631 + (1));
seq__11075_11628 = G__11702;
chunk__11076_11629 = G__11703;
count__11077_11630 = G__11704;
i__11078_11631 = G__11705;
continue;
} else {
var temp__5825__auto___11706 = cljs.core.seq.call(null,seq__11075_11628);
if(temp__5825__auto___11706){
var seq__11075_11707__$1 = temp__5825__auto___11706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11075_11707__$1)){
var c__5548__auto___11708 = cljs.core.chunk_first.call(null,seq__11075_11707__$1);
var G__11709 = cljs.core.chunk_rest.call(null,seq__11075_11707__$1);
var G__11710 = c__5548__auto___11708;
var G__11711 = cljs.core.count.call(null,c__5548__auto___11708);
var G__11712 = (0);
seq__11075_11628 = G__11709;
chunk__11076_11629 = G__11710;
count__11077_11630 = G__11711;
i__11078_11631 = G__11712;
continue;
} else {
var component__7960__auto___11713 = cljs.core.first.call(null,seq__11075_11707__$1);
speclj.components.install.call(null,component__7960__auto___11713,description__7959__auto____$1);


var G__11714 = cljs.core.next.call(null,seq__11075_11707__$1);
var G__11715 = null;
var G__11716 = (0);
var G__11717 = (0);
seq__11075_11628 = G__11714;
chunk__11076_11629 = G__11715;
count__11077_11630 = G__11716;
i__11078_11631 = G__11717;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11073_11626);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"wins across 3 dimensions",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11115_11718 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11116_11719 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11116_11719);

try{var seq__11117_11720 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"pillar wins",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11139_11724 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11140_11725 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11140_11725);

try{var seq__11141_11726 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"false for no winner",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.test_starting_board_3x3x3;
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"X wins top left pillar",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_pillar_1;
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"O wins top middle pillar",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"O","O",795252742),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19",new cljs.core.Keyword(null,"O","O",795252742),"21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"X wins top right pillar",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"X wins middle left pillar",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"X wins bottom right pillar",((function (_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11139_11724,_STAR_parent_description_STAR__temp_val__11140_11725,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11142_11727 = null;
var count__11143_11728 = (0);
var i__11144_11729 = (0);
while(true){
if((i__11144_11729 < count__11143_11728)){
var component__7960__auto___11730 = cljs.core._nth.call(null,chunk__11142_11727,i__11144_11729);
speclj.components.install.call(null,component__7960__auto___11730,description__7959__auto____$2);


var G__11731 = seq__11141_11726;
var G__11732 = chunk__11142_11727;
var G__11733 = count__11143_11728;
var G__11734 = (i__11144_11729 + (1));
seq__11141_11726 = G__11731;
chunk__11142_11727 = G__11732;
count__11143_11728 = G__11733;
i__11144_11729 = G__11734;
continue;
} else {
var temp__5825__auto___11735 = cljs.core.seq.call(null,seq__11141_11726);
if(temp__5825__auto___11735){
var seq__11141_11736__$1 = temp__5825__auto___11735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11141_11736__$1)){
var c__5548__auto___11737 = cljs.core.chunk_first.call(null,seq__11141_11736__$1);
var G__11738 = cljs.core.chunk_rest.call(null,seq__11141_11736__$1);
var G__11739 = c__5548__auto___11737;
var G__11740 = cljs.core.count.call(null,c__5548__auto___11737);
var G__11741 = (0);
seq__11141_11726 = G__11738;
chunk__11142_11727 = G__11739;
count__11143_11728 = G__11740;
i__11144_11729 = G__11741;
continue;
} else {
var component__7960__auto___11742 = cljs.core.first.call(null,seq__11141_11736__$1);
speclj.components.install.call(null,component__7960__auto___11742,description__7959__auto____$2);


var G__11743 = cljs.core.next.call(null,seq__11141_11736__$1);
var G__11744 = null;
var G__11745 = (0);
var G__11746 = (0);
seq__11141_11726 = G__11743;
chunk__11142_11727 = G__11744;
count__11143_11728 = G__11745;
i__11144_11729 = G__11746;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11139_11724);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})(),(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"diagonal wins through middle",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11145_11747 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11146_11748 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11146_11748);

try{var seq__11147_11749 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"x wins from [0 0 0]",((function (_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_center_diagR_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 0 2]",((function (_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 2 0]",((function (_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 2 2]",((function (_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8",new cljs.core.Keyword(null,"X","X",1705996313)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"X","X",1705996313),"15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11145_11747,_STAR_parent_description_STAR__temp_val__11146_11748,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11148_11750 = null;
var count__11149_11751 = (0);
var i__11150_11752 = (0);
while(true){
if((i__11150_11752 < count__11149_11751)){
var component__7960__auto___11753 = cljs.core._nth.call(null,chunk__11148_11750,i__11150_11752);
speclj.components.install.call(null,component__7960__auto___11753,description__7959__auto____$2);


var G__11754 = seq__11147_11749;
var G__11755 = chunk__11148_11750;
var G__11756 = count__11149_11751;
var G__11757 = (i__11150_11752 + (1));
seq__11147_11749 = G__11754;
chunk__11148_11750 = G__11755;
count__11149_11751 = G__11756;
i__11150_11752 = G__11757;
continue;
} else {
var temp__5825__auto___11758 = cljs.core.seq.call(null,seq__11147_11749);
if(temp__5825__auto___11758){
var seq__11147_11759__$1 = temp__5825__auto___11758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11147_11759__$1)){
var c__5548__auto___11760 = cljs.core.chunk_first.call(null,seq__11147_11759__$1);
var G__11761 = cljs.core.chunk_rest.call(null,seq__11147_11759__$1);
var G__11762 = c__5548__auto___11760;
var G__11763 = cljs.core.count.call(null,c__5548__auto___11760);
var G__11764 = (0);
seq__11147_11749 = G__11761;
chunk__11148_11750 = G__11762;
count__11149_11751 = G__11763;
i__11150_11752 = G__11764;
continue;
} else {
var component__7960__auto___11765 = cljs.core.first.call(null,seq__11147_11759__$1);
speclj.components.install.call(null,component__7960__auto___11765,description__7959__auto____$2);


var G__11766 = cljs.core.next.call(null,seq__11147_11759__$1);
var G__11767 = null;
var G__11768 = (0);
var G__11769 = (0);
seq__11147_11749 = G__11766;
chunk__11148_11750 = G__11767;
count__11149_11751 = G__11768;
i__11150_11752 = G__11769;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11145_11747);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})(),(function (){var description__7959__auto____$2 = speclj.components.new_description.call(null,"diagonal wins not through center",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11151_11770 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11152_11771 = description__7959__auto____$2;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11152_11771);

try{var seq__11153_11772 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"x wins from [0 0 0]",((function (_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"X","X",1705996313),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from [0 0 2]",((function (_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10",new cljs.core.Keyword(null,"X","X",1705996313),"12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),"20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from x plane diagonal",((function (_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_x_plane_diag_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"x wins from y plane diagonal",((function (_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
var board = tic_tac_toe.test_boards_3x3x3c_spec.x_wins_y_plane_diag_3d;
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11151_11770,_STAR_parent_description_STAR__temp_val__11152_11771,description__7959__auto____$2,_STAR_parent_description_STAR__orig_val__11115_11718,_STAR_parent_description_STAR__temp_val__11116_11719,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11154_11773 = null;
var count__11155_11774 = (0);
var i__11156_11775 = (0);
while(true){
if((i__11156_11775 < count__11155_11774)){
var component__7960__auto___11776 = cljs.core._nth.call(null,chunk__11154_11773,i__11156_11775);
speclj.components.install.call(null,component__7960__auto___11776,description__7959__auto____$2);


var G__11777 = seq__11153_11772;
var G__11778 = chunk__11154_11773;
var G__11779 = count__11155_11774;
var G__11780 = (i__11156_11775 + (1));
seq__11153_11772 = G__11777;
chunk__11154_11773 = G__11778;
count__11155_11774 = G__11779;
i__11156_11775 = G__11780;
continue;
} else {
var temp__5825__auto___11781 = cljs.core.seq.call(null,seq__11153_11772);
if(temp__5825__auto___11781){
var seq__11153_11782__$1 = temp__5825__auto___11781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11153_11782__$1)){
var c__5548__auto___11783 = cljs.core.chunk_first.call(null,seq__11153_11782__$1);
var G__11784 = cljs.core.chunk_rest.call(null,seq__11153_11782__$1);
var G__11785 = c__5548__auto___11783;
var G__11786 = cljs.core.count.call(null,c__5548__auto___11783);
var G__11787 = (0);
seq__11153_11772 = G__11784;
chunk__11154_11773 = G__11785;
count__11155_11774 = G__11786;
i__11156_11775 = G__11787;
continue;
} else {
var component__7960__auto___11788 = cljs.core.first.call(null,seq__11153_11782__$1);
speclj.components.install.call(null,component__7960__auto___11788,description__7959__auto____$2);


var G__11789 = cljs.core.next.call(null,seq__11153_11782__$1);
var G__11790 = null;
var G__11791 = (0);
var G__11792 = (0);
seq__11153_11772 = G__11789;
chunk__11154_11773 = G__11790;
count__11155_11774 = G__11791;
i__11156_11775 = G__11792;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11151_11770);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$2);
}

return description__7959__auto____$2;
})()],null)));
var chunk__11118_11721 = null;
var count__11119_11722 = (0);
var i__11120_11723 = (0);
while(true){
if((i__11120_11723 < count__11119_11722)){
var component__7960__auto___11793 = cljs.core._nth.call(null,chunk__11118_11721,i__11120_11723);
speclj.components.install.call(null,component__7960__auto___11793,description__7959__auto____$1);


var G__11794 = seq__11117_11720;
var G__11795 = chunk__11118_11721;
var G__11796 = count__11119_11722;
var G__11797 = (i__11120_11723 + (1));
seq__11117_11720 = G__11794;
chunk__11118_11721 = G__11795;
count__11119_11722 = G__11796;
i__11120_11723 = G__11797;
continue;
} else {
var temp__5825__auto___11798 = cljs.core.seq.call(null,seq__11117_11720);
if(temp__5825__auto___11798){
var seq__11117_11799__$1 = temp__5825__auto___11798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11117_11799__$1)){
var c__5548__auto___11800 = cljs.core.chunk_first.call(null,seq__11117_11799__$1);
var G__11801 = cljs.core.chunk_rest.call(null,seq__11117_11799__$1);
var G__11802 = c__5548__auto___11800;
var G__11803 = cljs.core.count.call(null,c__5548__auto___11800);
var G__11804 = (0);
seq__11117_11720 = G__11801;
chunk__11118_11721 = G__11802;
count__11119_11722 = G__11803;
i__11120_11723 = G__11804;
continue;
} else {
var component__7960__auto___11805 = cljs.core.first.call(null,seq__11117_11799__$1);
speclj.components.install.call(null,component__7960__auto___11805,description__7959__auto____$1);


var G__11806 = cljs.core.next.call(null,seq__11117_11799__$1);
var G__11807 = null;
var G__11808 = (0);
var G__11809 = (0);
seq__11117_11720 = G__11806;
chunk__11118_11721 = G__11807;
count__11119_11722 = G__11808;
i__11120_11723 = G__11809;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11115_11718);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"win?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11157_11810 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11158_11811 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11158_11811);

try{var seq__11159_11812 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"no row, column or diagonal is filled by X",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11816 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___11816)){
var value__8095__auto___11817 = temp__5825__auto___11816;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11817;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11818 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto___11818)){
var value__8095__auto___11819 = temp__5825__auto___11818;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_with_14,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"no row, column or diagonal is filled by O",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11820 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___11820)){
var value__8095__auto___11821 = temp__5825__auto___11820;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11821;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11822 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto___11822)){
var value__8095__auto___11823 = temp__5825__auto___11822;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11823;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"a row is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11824 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11824)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11824;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11825 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11825)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11825;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11826 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11826)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11826;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11827 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto___11827)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11827;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_top_row_top_layer,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"a column is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11828 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11828)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11828;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11829 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11829)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11829;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11830 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11830)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11830;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11831 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto___11831)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11831;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.O_wins_left_column_middle_layer,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"a diagonal is filled by same player symbol",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11832 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11832)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11832;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11833 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11833)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11833;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11834 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11834)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11834;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11835 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11835)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11835;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dright_win_X_4x4,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"checks for 3D wins",((function (_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11836 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_pillar_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto___11836)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11836;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11837 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_center_diagR_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto___11837)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11837;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11838 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_y_plane_diag_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto___11838)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11838;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11839 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.o_wins_y_plane_diag_3d,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto___11839)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11839;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11840 = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.x_wins_x_plane_diag_3d,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto___11840)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11840;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,tic_tac_toe.test_boards_3x3x3c_spec.o_wins_x_plane_diag_3d,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11157_11810,_STAR_parent_description_STAR__temp_val__11158_11811,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11160_11813 = null;
var count__11161_11814 = (0);
var i__11162_11815 = (0);
while(true){
if((i__11162_11815 < count__11161_11814)){
var component__7960__auto___11841 = cljs.core._nth.call(null,chunk__11160_11813,i__11162_11815);
speclj.components.install.call(null,component__7960__auto___11841,description__7959__auto____$1);


var G__11842 = seq__11159_11812;
var G__11843 = chunk__11160_11813;
var G__11844 = count__11161_11814;
var G__11845 = (i__11162_11815 + (1));
seq__11159_11812 = G__11842;
chunk__11160_11813 = G__11843;
count__11161_11814 = G__11844;
i__11162_11815 = G__11845;
continue;
} else {
var temp__5825__auto___11846 = cljs.core.seq.call(null,seq__11159_11812);
if(temp__5825__auto___11846){
var seq__11159_11847__$1 = temp__5825__auto___11846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11159_11847__$1)){
var c__5548__auto___11848 = cljs.core.chunk_first.call(null,seq__11159_11847__$1);
var G__11849 = cljs.core.chunk_rest.call(null,seq__11159_11847__$1);
var G__11850 = c__5548__auto___11848;
var G__11851 = cljs.core.count.call(null,c__5548__auto___11848);
var G__11852 = (0);
seq__11159_11812 = G__11849;
chunk__11160_11813 = G__11850;
count__11161_11814 = G__11851;
i__11162_11815 = G__11852;
continue;
} else {
var component__7960__auto___11853 = cljs.core.first.call(null,seq__11159_11847__$1);
speclj.components.install.call(null,component__7960__auto___11853,description__7959__auto____$1);


var G__11854 = cljs.core.next.call(null,seq__11159_11847__$1);
var G__11855 = null;
var G__11856 = (0);
var G__11857 = (0);
seq__11159_11812 = G__11854;
chunk__11160_11813 = G__11855;
count__11161_11814 = G__11856;
i__11162_11815 = G__11857;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11157_11810);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"switching player",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11163_11858 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11164_11859 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11164_11859);

try{var seq__11165_11860 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"switches from player X to player O",((function (_STAR_parent_description_STAR__orig_val__11163_11858,_STAR_parent_description_STAR__temp_val__11164_11859,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.Keyword(null,"O","O",795252742);
var actual__8102__auto__ = tic_tac_toe.boardc.switch_player.call(null,new cljs.core.Keyword(null,"X","X",1705996313));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11163_11858,_STAR_parent_description_STAR__temp_val__11164_11859,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"switches from player O to player X",((function (_STAR_parent_description_STAR__orig_val__11163_11858,_STAR_parent_description_STAR__temp_val__11164_11859,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8101__auto__ = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__8102__auto__ = tic_tac_toe.boardc.switch_player.call(null,new cljs.core.Keyword(null,"O","O",795252742));
if(cljs.core._EQ_.call(null,expected__8101__auto__,actual__8102__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8101__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8102__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11163_11858,_STAR_parent_description_STAR__temp_val__11164_11859,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11166_11861 = null;
var count__11167_11862 = (0);
var i__11168_11863 = (0);
while(true){
if((i__11168_11863 < count__11167_11862)){
var component__7960__auto___11864 = cljs.core._nth.call(null,chunk__11166_11861,i__11168_11863);
speclj.components.install.call(null,component__7960__auto___11864,description__7959__auto____$1);


var G__11865 = seq__11165_11860;
var G__11866 = chunk__11166_11861;
var G__11867 = count__11167_11862;
var G__11868 = (i__11168_11863 + (1));
seq__11165_11860 = G__11865;
chunk__11166_11861 = G__11866;
count__11167_11862 = G__11867;
i__11168_11863 = G__11868;
continue;
} else {
var temp__5825__auto___11869 = cljs.core.seq.call(null,seq__11165_11860);
if(temp__5825__auto___11869){
var seq__11165_11870__$1 = temp__5825__auto___11869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11165_11870__$1)){
var c__5548__auto___11871 = cljs.core.chunk_first.call(null,seq__11165_11870__$1);
var G__11872 = cljs.core.chunk_rest.call(null,seq__11165_11870__$1);
var G__11873 = c__5548__auto___11871;
var G__11874 = cljs.core.count.call(null,c__5548__auto___11871);
var G__11875 = (0);
seq__11165_11860 = G__11872;
chunk__11166_11861 = G__11873;
count__11167_11862 = G__11874;
i__11168_11863 = G__11875;
continue;
} else {
var component__7960__auto___11876 = cljs.core.first.call(null,seq__11165_11870__$1);
speclj.components.install.call(null,component__7960__auto___11876,description__7959__auto____$1);


var G__11877 = cljs.core.next.call(null,seq__11165_11870__$1);
var G__11878 = null;
var G__11879 = (0);
var G__11880 = (0);
seq__11165_11860 = G__11877;
chunk__11166_11861 = G__11878;
count__11167_11862 = G__11879;
i__11168_11863 = G__11880;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11163_11858);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})(),(function (){var description__7959__auto____$1 = speclj.components.new_description.call(null,"game-over?",false,"tic-tac-toe.boardc-spec");
var _STAR_parent_description_STAR__orig_val__11169_11881 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__11170_11882 = description__7959__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__11170_11882);

try{var seq__11171_11883 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns false if there is no winners for X",((function (_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11887 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___11887)){
var value__8095__auto___11888 = temp__5825__auto___11887;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11888;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns false if there is no winners for O",((function (_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto___11889 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto___11889)){
var value__8095__auto___11890 = temp__5825__auto___11889;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto___11890;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(temp__5825__auto__)){
var value__8095__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__8095__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning row",((function (_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11891 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11891)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11891;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11892 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.bottom_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11892)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11893 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11893)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning column",((function (_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11894 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11894)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11894;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11895 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.right_winning_col_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11895)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11895;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11896 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11896)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11896;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_left_col,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false),speclj.components.new_characteristic.call(null,"returns true if there is a winning diagonal",((function (_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11897 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11897)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11897;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11898 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11898)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11898;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11899 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dleft_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11899)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11899;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto___11900 = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.diagonal_dright_win_O,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__8089__auto___11900)){
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto___11900;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var value__8089__auto__ = tic_tac_toe.boardc.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core.truth_(value__8089__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__8089__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8069__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8069__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__11169_11881,_STAR_parent_description_STAR__temp_val__11170_11882,description__7959__auto____$1,_STAR_parent_description_STAR__orig_val__10809_11176,_STAR_parent_description_STAR__temp_val__10810_11177,description__7959__auto___11175))
,false)],null)));
var chunk__11172_11884 = null;
var count__11173_11885 = (0);
var i__11174_11886 = (0);
while(true){
if((i__11174_11886 < count__11173_11885)){
var component__7960__auto___11901 = cljs.core._nth.call(null,chunk__11172_11884,i__11174_11886);
speclj.components.install.call(null,component__7960__auto___11901,description__7959__auto____$1);


var G__11902 = seq__11171_11883;
var G__11903 = chunk__11172_11884;
var G__11904 = count__11173_11885;
var G__11905 = (i__11174_11886 + (1));
seq__11171_11883 = G__11902;
chunk__11172_11884 = G__11903;
count__11173_11885 = G__11904;
i__11174_11886 = G__11905;
continue;
} else {
var temp__5825__auto___11906 = cljs.core.seq.call(null,seq__11171_11883);
if(temp__5825__auto___11906){
var seq__11171_11907__$1 = temp__5825__auto___11906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11171_11907__$1)){
var c__5548__auto___11908 = cljs.core.chunk_first.call(null,seq__11171_11907__$1);
var G__11909 = cljs.core.chunk_rest.call(null,seq__11171_11907__$1);
var G__11910 = c__5548__auto___11908;
var G__11911 = cljs.core.count.call(null,c__5548__auto___11908);
var G__11912 = (0);
seq__11171_11883 = G__11909;
chunk__11172_11884 = G__11910;
count__11173_11885 = G__11911;
i__11174_11886 = G__11912;
continue;
} else {
var component__7960__auto___11913 = cljs.core.first.call(null,seq__11171_11907__$1);
speclj.components.install.call(null,component__7960__auto___11913,description__7959__auto____$1);


var G__11914 = cljs.core.next.call(null,seq__11171_11907__$1);
var G__11915 = null;
var G__11916 = (0);
var G__11917 = (0);
seq__11171_11883 = G__11914;
chunk__11172_11884 = G__11915;
count__11173_11885 = G__11916;
i__11174_11886 = G__11917;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__11169_11881);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto____$1);
}

return description__7959__auto____$1;
})()],null)));
var chunk__10812_11179 = null;
var count__10813_11180 = (0);
var i__10814_11181 = (0);
while(true){
if((i__10814_11181 < count__10813_11180)){
var component__7960__auto___11918 = cljs.core._nth.call(null,chunk__10812_11179,i__10814_11181);
speclj.components.install.call(null,component__7960__auto___11918,description__7959__auto___11175);


var G__11919 = seq__10811_11178;
var G__11920 = chunk__10812_11179;
var G__11921 = count__10813_11180;
var G__11922 = (i__10814_11181 + (1));
seq__10811_11178 = G__11919;
chunk__10812_11179 = G__11920;
count__10813_11180 = G__11921;
i__10814_11181 = G__11922;
continue;
} else {
var temp__5825__auto___11923 = cljs.core.seq.call(null,seq__10811_11178);
if(temp__5825__auto___11923){
var seq__10811_11924__$1 = temp__5825__auto___11923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10811_11924__$1)){
var c__5548__auto___11925 = cljs.core.chunk_first.call(null,seq__10811_11924__$1);
var G__11926 = cljs.core.chunk_rest.call(null,seq__10811_11924__$1);
var G__11927 = c__5548__auto___11925;
var G__11928 = cljs.core.count.call(null,c__5548__auto___11925);
var G__11929 = (0);
seq__10811_11178 = G__11926;
chunk__10812_11179 = G__11927;
count__10813_11180 = G__11928;
i__10814_11181 = G__11929;
continue;
} else {
var component__7960__auto___11930 = cljs.core.first.call(null,seq__10811_11924__$1);
speclj.components.install.call(null,component__7960__auto___11930,description__7959__auto___11175);


var G__11931 = cljs.core.next.call(null,seq__10811_11924__$1);
var G__11932 = null;
var G__11933 = (0);
var G__11934 = (0);
seq__10811_11178 = G__11931;
chunk__10812_11179 = G__11932;
count__10813_11180 = G__11933;
i__10814_11181 = G__11934;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10809_11176);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7959__auto___11175);
}


//# sourceMappingURL=boardc_spec.js.map
