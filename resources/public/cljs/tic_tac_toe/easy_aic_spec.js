// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.easy_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.easy_aic');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
var description__10061__auto___36453 = speclj.components.new_description.call(null,"an Easy AI Player",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__36317_36454 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36318_36455 = description__10061__auto___36453;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36318_36455);

try{var seq__36319_36456 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"when getting a random AI move from a 3x3 board",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__36407_36460 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36408_36461 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36408_36461);

try{var seq__36410_36463 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
var rand_nth_orig_val__36428 = cljs.core.rand_nth;
var rand_nth_temp_val__36429 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36429);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36428);
}});})(_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
var rand_nth_orig_val__36431 = cljs.core.rand_nth;
var rand_nth_temp_val__36432 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36432);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36431);
}});})(_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var rand_nth_orig_val__36433 = cljs.core.rand_nth;
var rand_nth_temp_val__36434 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36434);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,tic_tac_toe.test_boards_3x3c_spec.O_should_block,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36433);
}});})(_STAR_parent_description_STAR__orig_val__36407_36460,_STAR_parent_description_STAR__temp_val__36408_36461,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false)],null)));
var chunk__36411_36464 = null;
var count__36412_36465 = (0);
var i__36413_36467 = (0);
while(true){
if((i__36413_36467 < count__36412_36465)){
var component__10062__auto___36485 = cljs.core._nth.call(null,chunk__36411_36464,i__36413_36467);
speclj.components.install.call(null,component__10062__auto___36485,description__10061__auto____$1);


var G__36486 = seq__36410_36463;
var G__36487 = chunk__36411_36464;
var G__36488 = count__36412_36465;
var G__36489 = (i__36413_36467 + (1));
seq__36410_36463 = G__36486;
chunk__36411_36464 = G__36487;
count__36412_36465 = G__36488;
i__36413_36467 = G__36489;
continue;
} else {
var temp__5825__auto___36490 = cljs.core.seq.call(null,seq__36410_36463);
if(temp__5825__auto___36490){
var seq__36410_36491__$1 = temp__5825__auto___36490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36410_36491__$1)){
var c__5548__auto___36492 = cljs.core.chunk_first.call(null,seq__36410_36491__$1);
var G__36493 = cljs.core.chunk_rest.call(null,seq__36410_36491__$1);
var G__36494 = c__5548__auto___36492;
var G__36495 = cljs.core.count.call(null,c__5548__auto___36492);
var G__36496 = (0);
seq__36410_36463 = G__36493;
chunk__36411_36464 = G__36494;
count__36412_36465 = G__36495;
i__36413_36467 = G__36496;
continue;
} else {
var component__10062__auto___36497 = cljs.core.first.call(null,seq__36410_36491__$1);
speclj.components.install.call(null,component__10062__auto___36497,description__10061__auto____$1);


var G__36498 = cljs.core.next.call(null,seq__36410_36491__$1);
var G__36499 = null;
var G__36500 = (0);
var G__36501 = (0);
seq__36410_36463 = G__36498;
chunk__36411_36464 = G__36499;
count__36412_36465 = G__36500;
i__36413_36467 = G__36501;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36407_36460);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"when getting a random AI move from a 4x4 board",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__36435_36502 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36436_36503 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36436_36503);

try{var seq__36437_36504 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__36447 = cljs.core.rand_nth;
var rand_nth_temp_val__36448 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36448);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36447);
}});})(_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__36449 = cljs.core.rand_nth;
var rand_nth_temp_val__36450 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36450);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36449);
}});})(_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__36451 = cljs.core.rand_nth;
var rand_nth_temp_val__36452 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__36452);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__10204__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__36451);
}});})(_STAR_parent_description_STAR__orig_val__36435_36502,_STAR_parent_description_STAR__temp_val__36436_36503,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36317_36454,_STAR_parent_description_STAR__temp_val__36318_36455,description__10061__auto___36453))
,false)],null)));
var chunk__36438_36505 = null;
var count__36439_36506 = (0);
var i__36440_36507 = (0);
while(true){
if((i__36440_36507 < count__36439_36506)){
var component__10062__auto___36520 = cljs.core._nth.call(null,chunk__36438_36505,i__36440_36507);
speclj.components.install.call(null,component__10062__auto___36520,description__10061__auto____$1);


var G__36521 = seq__36437_36504;
var G__36522 = chunk__36438_36505;
var G__36523 = count__36439_36506;
var G__36524 = (i__36440_36507 + (1));
seq__36437_36504 = G__36521;
chunk__36438_36505 = G__36522;
count__36439_36506 = G__36523;
i__36440_36507 = G__36524;
continue;
} else {
var temp__5825__auto___36525 = cljs.core.seq.call(null,seq__36437_36504);
if(temp__5825__auto___36525){
var seq__36437_36526__$1 = temp__5825__auto___36525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36437_36526__$1)){
var c__5548__auto___36527 = cljs.core.chunk_first.call(null,seq__36437_36526__$1);
var G__36528 = cljs.core.chunk_rest.call(null,seq__36437_36526__$1);
var G__36529 = c__5548__auto___36527;
var G__36530 = cljs.core.count.call(null,c__5548__auto___36527);
var G__36531 = (0);
seq__36437_36504 = G__36528;
chunk__36438_36505 = G__36529;
count__36439_36506 = G__36530;
i__36440_36507 = G__36531;
continue;
} else {
var component__10062__auto___36532 = cljs.core.first.call(null,seq__36437_36526__$1);
speclj.components.install.call(null,component__10062__auto___36532,description__10061__auto____$1);


var G__36533 = cljs.core.next.call(null,seq__36437_36526__$1);
var G__36534 = null;
var G__36535 = (0);
var G__36536 = (0);
seq__36437_36504 = G__36533;
chunk__36438_36505 = G__36534;
count__36439_36506 = G__36535;
i__36440_36507 = G__36536;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36435_36502);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__36320_36457 = null;
var count__36321_36458 = (0);
var i__36322_36459 = (0);
while(true){
if((i__36322_36459 < count__36321_36458)){
var component__10062__auto___36537 = cljs.core._nth.call(null,chunk__36320_36457,i__36322_36459);
speclj.components.install.call(null,component__10062__auto___36537,description__10061__auto___36453);


var G__36538 = seq__36319_36456;
var G__36539 = chunk__36320_36457;
var G__36540 = count__36321_36458;
var G__36541 = (i__36322_36459 + (1));
seq__36319_36456 = G__36538;
chunk__36320_36457 = G__36539;
count__36321_36458 = G__36540;
i__36322_36459 = G__36541;
continue;
} else {
var temp__5825__auto___36542 = cljs.core.seq.call(null,seq__36319_36456);
if(temp__5825__auto___36542){
var seq__36319_36543__$1 = temp__5825__auto___36542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36319_36543__$1)){
var c__5548__auto___36544 = cljs.core.chunk_first.call(null,seq__36319_36543__$1);
var G__36545 = cljs.core.chunk_rest.call(null,seq__36319_36543__$1);
var G__36546 = c__5548__auto___36544;
var G__36547 = cljs.core.count.call(null,c__5548__auto___36544);
var G__36548 = (0);
seq__36319_36456 = G__36545;
chunk__36320_36457 = G__36546;
count__36321_36458 = G__36547;
i__36322_36459 = G__36548;
continue;
} else {
var component__10062__auto___36549 = cljs.core.first.call(null,seq__36319_36543__$1);
speclj.components.install.call(null,component__10062__auto___36549,description__10061__auto___36453);


var G__36550 = cljs.core.next.call(null,seq__36319_36543__$1);
var G__36551 = null;
var G__36552 = (0);
var G__36553 = (0);
seq__36319_36456 = G__36550;
chunk__36320_36457 = G__36551;
count__36321_36458 = G__36552;
i__36322_36459 = G__36553;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36317_36454);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___36453);
}


//# sourceMappingURL=easy_aic_spec.js.map
