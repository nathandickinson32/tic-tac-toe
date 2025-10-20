// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.expert_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.expert_aic');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.test_boards_4x4c_spec');
tic_tac_toe.expert_aic_spec.opponent_moves = (function tic_tac_toe$expert_aic_spec$opponent_moves(p__30829,token,board_size){
var vec__30830 = p__30829;
var board = cljs.core.nth.call(null,vec__30830,(0),null);
var depth = cljs.core.nth.call(null,vec__30830,(1),null);
var available_moves = tic_tac_toe.boardc.available_moves.call(null,board,board_size);
return cljs.core.map.call(null,(function (p1__30826_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.boardc.make_move.call(null,board,p1__30826_SHARP_,token),(depth + (1))],null));
}),available_moves);
});
tic_tac_toe.expert_aic_spec.simulate_opponent_moves = (function tic_tac_toe$expert_aic_spec$simulate_opponent_moves(unfinished_games,opponent_token,board_size){
return cljs.core.mapcat.call(null,(function (p1__30833_SHARP_){
return tic_tac_toe.expert_aic_spec.opponent_moves.call(null,p1__30833_SHARP_,opponent_token,board_size);
}),unfinished_games);
});
tic_tac_toe.expert_aic_spec.ai_make_move = (function tic_tac_toe$expert_aic_spec$ai_make_move(p__30834,ai_token,board_size){
var vec__30835 = p__30834;
var board = cljs.core.nth.call(null,vec__30835,(0),null);
var depth = cljs.core.nth.call(null,vec__30835,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.boardc.make_move.call(null,board,tic_tac_toe.expert_aic.choose_best_move.call(null,board,ai_token,board_size),ai_token),(depth + (1))], null);
});
tic_tac_toe.expert_aic_spec.simulate_ai_moves = (function tic_tac_toe$expert_aic_spec$simulate_ai_moves(opponent_boards,ai_token,board_size){
return cljs.core.map.call(null,(function (p1__30838_SHARP_){
return tic_tac_toe.expert_aic_spec.ai_make_move.call(null,p1__30838_SHARP_,ai_token,board_size);
}),opponent_boards);
});
tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map = (function tic_tac_toe$expert_aic_spec$__GT_finished_unfinished_map(board_depth_pairs,board_size){
return cljs.core.group_by.call(null,(function (p1__30839_SHARP_){
return tic_tac_toe.boardc.end_game_QMARK_.call(null,cljs.core.first.call(null,p1__30839_SHARP_),board_size);
}),board_depth_pairs);
});
tic_tac_toe.expert_aic_spec.simulate_next_boards = (function tic_tac_toe$expert_aic_spec$simulate_next_boards(unfinished_games,finished_games,ai_token,opponent_token,board_size){
var opponent_boards = tic_tac_toe.expert_aic_spec.simulate_opponent_moves.call(null,unfinished_games,opponent_token,board_size);
var map__30840 = tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map.call(null,opponent_boards,board_size);
var map__30840__$1 = cljs.core.__destructure_map.call(null,map__30840);
var opponent_finished = cljs.core.get.call(null,map__30840__$1,true);
var unfinished = cljs.core.get.call(null,map__30840__$1,false);
var next_ai_boards = tic_tac_toe.expert_aic_spec.simulate_ai_moves.call(null,unfinished,ai_token,board_size);
var map__30841 = tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map.call(null,next_ai_boards,board_size);
var map__30841__$1 = cljs.core.__destructure_map.call(null,map__30841);
var ai_finished = cljs.core.get.call(null,map__30841__$1,true);
var unfinished__$1 = cljs.core.get.call(null,map__30841__$1,false);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unfinished","unfinished",-1852599383),unfinished__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.concat.call(null,finished_games,ai_finished,opponent_finished)], null);
});
tic_tac_toe.expert_aic_spec.all_finished_games = (function tic_tac_toe$expert_aic_spec$all_finished_games(var_args){
var G__30843 = arguments.length;
switch (G__30843) {
case 4:
return tic_tac_toe.expert_aic_spec.all_finished_games.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return tic_tac_toe.expert_aic_spec.all_finished_games.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tic_tac_toe.expert_aic_spec.all_finished_games.cljs$core$IFn$_invoke$arity$4 = (function (starting_boards,ai_token,opponent_token,board_size){
return tic_tac_toe.expert_aic_spec.all_finished_games.call(null,starting_boards,cljs.core.PersistentVector.EMPTY,ai_token,opponent_token,board_size);
}));

(tic_tac_toe.expert_aic_spec.all_finished_games.cljs$core$IFn$_invoke$arity$5 = (function (unfinished_games,finished_games,ai_token,opponent_token,board_size){
if(cljs.core.empty_QMARK_.call(null,unfinished_games)){
return finished_games;
} else {
var map__30844 = tic_tac_toe.expert_aic_spec.simulate_next_boards.call(null,unfinished_games,finished_games,ai_token,opponent_token,board_size);
var map__30844__$1 = cljs.core.__destructure_map.call(null,map__30844);
var unfinished = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"unfinished","unfinished",-1852599383));
var finished = cljs.core.get.call(null,map__30844__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731));
return tic_tac_toe.expert_aic_spec.all_finished_games.call(null,unfinished,finished,ai_token,opponent_token,board_size);
}
}));

(tic_tac_toe.expert_aic_spec.all_finished_games.cljs$lang$maxFixedArity = 5);

tic_tac_toe.expert_aic_spec.finished_games_ai_plays_first = (function tic_tac_toe$expert_aic_spec$finished_games_ai_plays_first(board_size){
var ai_first_move = tic_tac_toe.expert_aic_spec.ai_make_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.boardc.starting_board_3x3,(0)], null),new cljs.core.Keyword(null,"X","X",1705996313),board_size);
return tic_tac_toe.expert_aic_spec.all_finished_games.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ai_first_move], null),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),board_size);
});
tic_tac_toe.expert_aic_spec.finished_games_ai_plays_second = (function tic_tac_toe$expert_aic_spec$finished_games_ai_plays_second(board_size){
var x_starting_boards = tic_tac_toe.expert_aic_spec.simulate_opponent_moves.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.boardc.starting_board_3x3,(0)], null)], null),new cljs.core.Keyword(null,"X","X",1705996313),board_size);
var o_response_boards = tic_tac_toe.expert_aic_spec.simulate_ai_moves.call(null,x_starting_boards,new cljs.core.Keyword(null,"O","O",795252742),board_size);
return tic_tac_toe.expert_aic_spec.all_finished_games.call(null,o_response_boards,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),board_size);
});
tic_tac_toe.expert_aic_spec.ai_win_every_game = (function tic_tac_toe$expert_aic_spec$ai_win_every_game(all_finished_games,token,board_size){
return cljs.core.every_QMARK_.call(null,(function (p1__30846_SHARP_){
var or__5025__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,cljs.core.first.call(null,p1__30846_SHARP_),token,board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return tic_tac_toe.boardc.full_board_QMARK_.call(null,cljs.core.first.call(null,p1__30846_SHARP_),board_size);
}
}),all_finished_games);
});
var description__7979__auto___30949 = speclj.components.new_description.call(null,"Expert AI",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30847_30950 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30848_30951 = description__7979__auto___30949;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30848_30951);

try{var seq__30849_30952 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when checking to end minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30901_30956 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30902_30957 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30902_30957);

try{var seq__30903_30958 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true if X wins",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns true if O wins",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns true if board is full",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns false if board is full",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns false if depth is 3 with 4x4 board",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.expert_aic.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"4x4","4x4",121507723),(3));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is 7 with 4x4 board",((function (_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.expert_aic.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"4x4","4x4",121507723),(7));
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
});})(_STAR_parent_description_STAR__orig_val__30901_30956,_STAR_parent_description_STAR__temp_val__30902_30957,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30904_30959 = null;
var count__30905_30960 = (0);
var i__30906_30961 = (0);
while(true){
if((i__30906_30961 < count__30905_30960)){
var component__7980__auto___30962 = cljs.core._nth.call(null,chunk__30904_30959,i__30906_30961);
speclj.components.install.call(null,component__7980__auto___30962,description__7979__auto____$1);


var G__30963 = seq__30903_30958;
var G__30964 = chunk__30904_30959;
var G__30965 = count__30905_30960;
var G__30966 = (i__30906_30961 + (1));
seq__30903_30958 = G__30963;
chunk__30904_30959 = G__30964;
count__30905_30960 = G__30965;
i__30906_30961 = G__30966;
continue;
} else {
var temp__5825__auto___30967 = cljs.core.seq.call(null,seq__30903_30958);
if(temp__5825__auto___30967){
var seq__30903_30968__$1 = temp__5825__auto___30967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30903_30968__$1)){
var c__5548__auto___30969 = cljs.core.chunk_first.call(null,seq__30903_30968__$1);
var G__30970 = cljs.core.chunk_rest.call(null,seq__30903_30968__$1);
var G__30971 = c__5548__auto___30969;
var G__30972 = cljs.core.count.call(null,c__5548__auto___30969);
var G__30973 = (0);
seq__30903_30958 = G__30970;
chunk__30904_30959 = G__30971;
count__30905_30960 = G__30972;
i__30906_30961 = G__30973;
continue;
} else {
var component__7980__auto___30974 = cljs.core.first.call(null,seq__30903_30968__$1);
speclj.components.install.call(null,component__7980__auto___30974,description__7979__auto____$1);


var G__30975 = cljs.core.next.call(null,seq__30903_30968__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__30903_30958 = G__30975;
chunk__30904_30959 = G__30976;
count__30905_30960 = G__30977;
i__30906_30961 = G__30978;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30901_30956);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when getting a score",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30907_30979 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30908_30980 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30908_30980);

try{var seq__30909_30981 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"return positive for winner negative for loser",((function (_STAR_parent_description_STAR__orig_val__30907_30979,_STAR_parent_description_STAR__temp_val__30908_30980,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var winning_score = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var losing_score = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto___30985 = winning_score;
var actual__8122__auto___30986 = cljs.core.abs.call(null,losing_score);
if(cljs.core._EQ_.call(null,expected__8121__auto___30985,actual__8122__auto___30986)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto___30985;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto___30986;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var f__8131__auto__ = cljs.core.neg_QMARK_;
var actual__8132__auto__ = losing_score;
if(cljs.core.truth_(f__8131__auto__.call(null,actual__8132__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected ",(function (){var temp__5827__auto__ = actual__8132__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," to satisfy: ","neg?"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__30907_30979,_STAR_parent_description_STAR__temp_val__30908_30980,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns 0 if no winner",((function (_STAR_parent_description_STAR__orig_val__30907_30979,_STAR_parent_description_STAR__temp_val__30908_30980,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = (0);
var actual__8122__auto__ = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30907_30979,_STAR_parent_description_STAR__temp_val__30908_30980,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30910_30982 = null;
var count__30911_30983 = (0);
var i__30912_30984 = (0);
while(true){
if((i__30912_30984 < count__30911_30983)){
var component__7980__auto___30987 = cljs.core._nth.call(null,chunk__30910_30982,i__30912_30984);
speclj.components.install.call(null,component__7980__auto___30987,description__7979__auto____$1);


var G__30988 = seq__30909_30981;
var G__30989 = chunk__30910_30982;
var G__30990 = count__30911_30983;
var G__30991 = (i__30912_30984 + (1));
seq__30909_30981 = G__30988;
chunk__30910_30982 = G__30989;
count__30911_30983 = G__30990;
i__30912_30984 = G__30991;
continue;
} else {
var temp__5825__auto___30992 = cljs.core.seq.call(null,seq__30909_30981);
if(temp__5825__auto___30992){
var seq__30909_30993__$1 = temp__5825__auto___30992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30909_30993__$1)){
var c__5548__auto___30994 = cljs.core.chunk_first.call(null,seq__30909_30993__$1);
var G__30995 = cljs.core.chunk_rest.call(null,seq__30909_30993__$1);
var G__30996 = c__5548__auto___30994;
var G__30997 = cljs.core.count.call(null,c__5548__auto___30994);
var G__30998 = (0);
seq__30909_30981 = G__30995;
chunk__30910_30982 = G__30996;
count__30911_30983 = G__30997;
i__30912_30984 = G__30998;
continue;
} else {
var component__7980__auto___30999 = cljs.core.first.call(null,seq__30909_30993__$1);
speclj.components.install.call(null,component__7980__auto___30999,description__7979__auto____$1);


var G__31000 = cljs.core.next.call(null,seq__30909_30993__$1);
var G__31001 = null;
var G__31002 = (0);
var G__31003 = (0);
seq__30909_30981 = G__31000;
chunk__30910_30982 = G__31001;
count__30911_30983 = G__31002;
i__30912_30984 = G__31003;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30907_30979);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30913_31004 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30914_31005 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30914_31005);

try{var seq__30915_31006 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"high scoring if next move is a win 3x3",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var best_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var tie_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var worst_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto___31010 = best_score;
var b__8436__auto___31011 = tie_score;
if(((typeof a__8435__auto___31010 === 'number') && (typeof b__8436__auto___31011 === 'number'))){
if((a__8435__auto___31010 > b__8436__auto___31011)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31010)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31011)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31010)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31011),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto___31010;
var b__8101__auto__ = b__8436__auto___31011;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto__ = tie_score;
var b__8436__auto__ = worst_score;
if(((typeof a__8435__auto__ === 'number') && (typeof b__8436__auto__ === 'number'))){
if((a__8435__auto__ > b__8436__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto__;
var b__8101__auto__ = b__8436__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"high scoring if next move is a win 4x4",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var best_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
var tie_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
var worst_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto___31012 = best_score;
var b__8436__auto___31013 = tie_score;
if(((typeof a__8435__auto___31012 === 'number') && (typeof b__8436__auto___31013 === 'number'))){
if((a__8435__auto___31012 > b__8436__auto___31013)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31012)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31013)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31012)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31013),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto___31012;
var b__8101__auto__ = b__8436__auto___31013;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto__ = tie_score;
var b__8436__auto__ = worst_score;
if(((typeof a__8435__auto__ === 'number') && (typeof b__8436__auto__ === 'number'))){
if((a__8435__auto__ > b__8436__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto__;
var b__8101__auto__ = b__8436__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"gives higher scores to better moves",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var example_minimax = (function tic_tac_toe$expert_aic_spec$example_minimax(board,maximizing_token,move){
var next_board = tic_tac_toe.boardc.make_move.call(null,board,move,maximizing_token);
return tic_tac_toe.expert_aic.minimax.call(null,next_board,tic_tac_toe.boardc.switch_player.call(null,maximizing_token),maximizing_token,(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
});
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var best_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
var next_best_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
var worst_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto___31014 = best_move;
var b__8436__auto___31015 = next_best_move;
if(((typeof a__8435__auto___31014 === 'number') && (typeof b__8436__auto___31015 === 'number'))){
if((a__8435__auto___31014 > b__8436__auto___31015)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31014)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31015)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31014)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31015),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto___31014;
var b__8101__auto__ = b__8436__auto___31015;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto__ = next_best_move;
var b__8436__auto__ = worst_move;
if(((typeof a__8435__auto__ === 'number') && (typeof b__8436__auto__ === 'number'))){
if((a__8435__auto__ > b__8436__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto__;
var b__8101__auto__ = b__8436__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"maximizes score for maximizing player",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var maximizing_token = new cljs.core.Keyword(null,"X","X",1705996313);
var score = tic_tac_toe.expert_aic.minimax.call(null,board,maximizing_token,maximizing_token,(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = (score >= (0));
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
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"minimizes score when maximizing player loses",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var score = tic_tac_toe.expert_aic.minimax.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = (score < (0));
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
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns 0 for a tie",((function (_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = (-1);
var actual__8122__auto__ = tic_tac_toe.expert_aic.minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30913_31004,_STAR_parent_description_STAR__temp_val__30914_31005,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30916_31007 = null;
var count__30917_31008 = (0);
var i__30918_31009 = (0);
while(true){
if((i__30918_31009 < count__30917_31008)){
var component__7980__auto___31016 = cljs.core._nth.call(null,chunk__30916_31007,i__30918_31009);
speclj.components.install.call(null,component__7980__auto___31016,description__7979__auto____$1);


var G__31017 = seq__30915_31006;
var G__31018 = chunk__30916_31007;
var G__31019 = count__30917_31008;
var G__31020 = (i__30918_31009 + (1));
seq__30915_31006 = G__31017;
chunk__30916_31007 = G__31018;
count__30917_31008 = G__31019;
i__30918_31009 = G__31020;
continue;
} else {
var temp__5825__auto___31021 = cljs.core.seq.call(null,seq__30915_31006);
if(temp__5825__auto___31021){
var seq__30915_31022__$1 = temp__5825__auto___31021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30915_31022__$1)){
var c__5548__auto___31023 = cljs.core.chunk_first.call(null,seq__30915_31022__$1);
var G__31024 = cljs.core.chunk_rest.call(null,seq__30915_31022__$1);
var G__31025 = c__5548__auto___31023;
var G__31026 = cljs.core.count.call(null,c__5548__auto___31023);
var G__31027 = (0);
seq__30915_31006 = G__31024;
chunk__30916_31007 = G__31025;
count__30917_31008 = G__31026;
i__30918_31009 = G__31027;
continue;
} else {
var component__7980__auto___31028 = cljs.core.first.call(null,seq__30915_31022__$1);
speclj.components.install.call(null,component__7980__auto___31028,description__7979__auto____$1);


var G__31029 = cljs.core.next.call(null,seq__30915_31022__$1);
var G__31030 = null;
var G__31031 = (0);
var G__31032 = (0);
seq__30915_31006 = G__31029;
chunk__30916_31007 = G__31030;
count__30917_31008 = G__31031;
i__30918_31009 = G__31032;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30913_31004);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when choosing the best move 3x3",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30919_31033 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30920_31034 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30920_31034);

try{var seq__30921_31035 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the only available move",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"2");
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses any corner on an empty board",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = tic_tac_toe.boardc.starting_board_3x3;
var corners = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]);
var move = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__8172__auto__ = move;
var actual__8173__auto__ = corners;
if((actual__8173__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8172__auto__ === 'string') && (typeof actual__8173__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8173__auto__,expected__8172__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8172__auto__)) && (typeof actual__8173__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8172__auto__,actual__8173__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
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
if(cljs.core.map_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8173__auto__,expected__8172__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8171__8174__auto__){
return cljs.core._EQ_.call(null,expected__8172__auto__,p1__8171__8174__auto__);
}),actual__8173__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8172__auto__;
var b__8101__auto__ = actual__8173__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses a winning move",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = tic_tac_toe.test_boards_3x3c_spec.choose_win_over_block;
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses a blocking move",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = tic_tac_toe.test_boards_3x3c_spec.O_should_block;
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses the best available move for O",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7",new cljs.core.Keyword(null,"X","X",1705996313),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8172__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__8173__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null);
if((actual__8173__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8172__auto__ === 'string') && (typeof actual__8173__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8173__auto__,expected__8172__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8172__auto__)) && (typeof actual__8173__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8172__auto__,actual__8173__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
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
if(cljs.core.map_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8173__auto__,expected__8172__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8171__8174__auto__){
return cljs.core._EQ_.call(null,expected__8172__auto__,p1__8171__8174__auto__);
}),actual__8173__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8172__auto__;
var b__8101__auto__ = actual__8173__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses the best available move when values are even for x and o",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8172__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__8173__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
if((actual__8173__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8172__auto__ === 'string') && (typeof actual__8173__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8173__auto__,expected__8172__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8172__auto__)) && (typeof actual__8173__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8172__auto__,actual__8173__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
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
if(cljs.core.map_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8173__auto__,expected__8172__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8171__8174__auto__){
return cljs.core._EQ_.call(null,expected__8172__auto__,p1__8171__8174__auto__);
}),actual__8173__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8172__auto__;
var b__8101__auto__ = actual__8173__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"AI never loses as X playing first",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var all_finished_games = tic_tac_toe.expert_aic_spec.finished_games_ai_plays_first.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.expert_aic_spec.ai_win_every_game.call(null,all_finished_games,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"AI never loses as O playing second",((function (_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var all_finished_games = tic_tac_toe.expert_aic_spec.finished_games_ai_plays_second.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__8109__auto__ = tic_tac_toe.expert_aic_spec.ai_win_every_game.call(null,all_finished_games,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30919_31033,_STAR_parent_description_STAR__temp_val__30920_31034,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30922_31036 = null;
var count__30923_31037 = (0);
var i__30924_31038 = (0);
while(true){
if((i__30924_31038 < count__30923_31037)){
var component__7980__auto___31039 = cljs.core._nth.call(null,chunk__30922_31036,i__30924_31038);
speclj.components.install.call(null,component__7980__auto___31039,description__7979__auto____$1);


var G__31040 = seq__30921_31035;
var G__31041 = chunk__30922_31036;
var G__31042 = count__30923_31037;
var G__31043 = (i__30924_31038 + (1));
seq__30921_31035 = G__31040;
chunk__30922_31036 = G__31041;
count__30923_31037 = G__31042;
i__30924_31038 = G__31043;
continue;
} else {
var temp__5825__auto___31044 = cljs.core.seq.call(null,seq__30921_31035);
if(temp__5825__auto___31044){
var seq__30921_31045__$1 = temp__5825__auto___31044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30921_31045__$1)){
var c__5548__auto___31046 = cljs.core.chunk_first.call(null,seq__30921_31045__$1);
var G__31047 = cljs.core.chunk_rest.call(null,seq__30921_31045__$1);
var G__31048 = c__5548__auto___31046;
var G__31049 = cljs.core.count.call(null,c__5548__auto___31046);
var G__31050 = (0);
seq__30921_31035 = G__31047;
chunk__30922_31036 = G__31048;
count__30923_31037 = G__31049;
i__30924_31038 = G__31050;
continue;
} else {
var component__7980__auto___31051 = cljs.core.first.call(null,seq__30921_31045__$1);
speclj.components.install.call(null,component__7980__auto___31051,description__7979__auto____$1);


var G__31052 = cljs.core.next.call(null,seq__30921_31045__$1);
var G__31053 = null;
var G__31054 = (0);
var G__31055 = (0);
seq__30921_31035 = G__31052;
chunk__30922_31036 = G__31053;
count__30923_31037 = G__31054;
i__30924_31038 = G__31055;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30919_31033);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"4x4 expert-ai",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30925_31056 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30926_31057 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30926_31057);

try{var seq__30927_31058 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses a blocking move 4x4",((function (_STAR_parent_description_STAR__orig_val__30925_31056,_STAR_parent_description_STAR__temp_val__30926_31057,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__30925_31056,_STAR_parent_description_STAR__temp_val__30926_31057,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses a winning over blocking 4x4",((function (_STAR_parent_description_STAR__orig_val__30925_31056,_STAR_parent_description_STAR__temp_val__30926_31057,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__30925_31056,_STAR_parent_description_STAR__temp_val__30926_31057,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30928_31059 = null;
var count__30929_31060 = (0);
var i__30930_31061 = (0);
while(true){
if((i__30930_31061 < count__30929_31060)){
var component__7980__auto___31062 = cljs.core._nth.call(null,chunk__30928_31059,i__30930_31061);
speclj.components.install.call(null,component__7980__auto___31062,description__7979__auto____$1);


var G__31063 = seq__30927_31058;
var G__31064 = chunk__30928_31059;
var G__31065 = count__30929_31060;
var G__31066 = (i__30930_31061 + (1));
seq__30927_31058 = G__31063;
chunk__30928_31059 = G__31064;
count__30929_31060 = G__31065;
i__30930_31061 = G__31066;
continue;
} else {
var temp__5825__auto___31067 = cljs.core.seq.call(null,seq__30927_31058);
if(temp__5825__auto___31067){
var seq__30927_31068__$1 = temp__5825__auto___31067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30927_31068__$1)){
var c__5548__auto___31069 = cljs.core.chunk_first.call(null,seq__30927_31068__$1);
var G__31070 = cljs.core.chunk_rest.call(null,seq__30927_31068__$1);
var G__31071 = c__5548__auto___31069;
var G__31072 = cljs.core.count.call(null,c__5548__auto___31069);
var G__31073 = (0);
seq__30927_31058 = G__31070;
chunk__30928_31059 = G__31071;
count__30929_31060 = G__31072;
i__30930_31061 = G__31073;
continue;
} else {
var component__7980__auto___31074 = cljs.core.first.call(null,seq__30927_31068__$1);
speclj.components.install.call(null,component__7980__auto___31074,description__7979__auto____$1);


var G__31075 = cljs.core.next.call(null,seq__30927_31068__$1);
var G__31076 = null;
var G__31077 = (0);
var G__31078 = (0);
seq__30927_31058 = G__31075;
chunk__30928_31059 = G__31076;
count__30929_31060 = G__31077;
i__30930_31061 = G__31078;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30925_31056);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"3x3x3 expert-ai",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30931_31079 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30932_31080 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30932_31080);

try{var seq__30933_31081 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses a blocking move 3x3x3",((function (_STAR_parent_description_STAR__orig_val__30931_31079,_STAR_parent_description_STAR__temp_val__30932_31080,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
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
});})(_STAR_parent_description_STAR__orig_val__30931_31079,_STAR_parent_description_STAR__temp_val__30932_31080,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses winning over blocking 3x3x3",((function (_STAR_parent_description_STAR__orig_val__30931_31079,_STAR_parent_description_STAR__temp_val__30932_31080,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26",new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null);
var actual__8122__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
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
});})(_STAR_parent_description_STAR__orig_val__30931_31079,_STAR_parent_description_STAR__temp_val__30932_31080,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30934_31082 = null;
var count__30935_31083 = (0);
var i__30936_31084 = (0);
while(true){
if((i__30936_31084 < count__30935_31083)){
var component__7980__auto___31085 = cljs.core._nth.call(null,chunk__30934_31082,i__30936_31084);
speclj.components.install.call(null,component__7980__auto___31085,description__7979__auto____$1);


var G__31086 = seq__30933_31081;
var G__31087 = chunk__30934_31082;
var G__31088 = count__30935_31083;
var G__31089 = (i__30936_31084 + (1));
seq__30933_31081 = G__31086;
chunk__30934_31082 = G__31087;
count__30935_31083 = G__31088;
i__30936_31084 = G__31089;
continue;
} else {
var temp__5825__auto___31090 = cljs.core.seq.call(null,seq__30933_31081);
if(temp__5825__auto___31090){
var seq__30933_31091__$1 = temp__5825__auto___31090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30933_31091__$1)){
var c__5548__auto___31092 = cljs.core.chunk_first.call(null,seq__30933_31091__$1);
var G__31093 = cljs.core.chunk_rest.call(null,seq__30933_31091__$1);
var G__31094 = c__5548__auto___31092;
var G__31095 = cljs.core.count.call(null,c__5548__auto___31092);
var G__31096 = (0);
seq__30933_31081 = G__31093;
chunk__30934_31082 = G__31094;
count__30935_31083 = G__31095;
i__30936_31084 = G__31096;
continue;
} else {
var component__7980__auto___31097 = cljs.core.first.call(null,seq__30933_31091__$1);
speclj.components.install.call(null,component__7980__auto___31097,description__7979__auto____$1);


var G__31098 = cljs.core.next.call(null,seq__30933_31091__$1);
var G__31099 = null;
var G__31100 = (0);
var G__31101 = (0);
seq__30933_31081 = G__31098;
chunk__30934_31082 = G__31099;
count__30935_31083 = G__31100;
i__30936_31084 = G__31101;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30931_31079);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"expert AI ->player-move",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30937_31102 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30938_31103 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30938_31103);

try{var seq__30939_31104 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"one move available",((function (_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"2");
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(8),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__8122__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
});})(_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses any corner on an empty board",((function (_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.starting_board_3x3,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
var corners = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]);
var move = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8172__auto__ = move;
var actual__8173__auto__ = corners;
if((actual__8173__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__8172__auto__ === 'string') && (typeof actual__8173__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__8173__auto__,expected__8172__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
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
if(((speclj.platform.re_QMARK_.call(null,expected__8172__auto__)) && (typeof actual__8173__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8172__auto__,actual__8173__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
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
if(cljs.core.map_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__8173__auto__,expected__8172__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8173__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8171__8174__auto__){
return cljs.core._EQ_.call(null,expected__8172__auto__,p1__8171__8174__auto__);
}),actual__8173__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8172__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__8173__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = expected__8172__auto__;
var b__8101__auto__ = actual__8173__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses a winning move",((function (_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.test_boards_3x3c_spec.choose_win_over_block,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(4),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
var move = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8122__auto__ = move;
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
});})(_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"chooses a blocking move",((function (_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.test_boards_3x3c_spec.O_should_block,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(3),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8122__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
});})(_STAR_parent_description_STAR__orig_val__30937_31102,_STAR_parent_description_STAR__temp_val__30938_31103,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30940_31105 = null;
var count__30941_31106 = (0);
var i__30942_31107 = (0);
while(true){
if((i__30942_31107 < count__30941_31106)){
var component__7980__auto___31108 = cljs.core._nth.call(null,chunk__30940_31105,i__30942_31107);
speclj.components.install.call(null,component__7980__auto___31108,description__7979__auto____$1);


var G__31109 = seq__30939_31104;
var G__31110 = chunk__30940_31105;
var G__31111 = count__30941_31106;
var G__31112 = (i__30942_31107 + (1));
seq__30939_31104 = G__31109;
chunk__30940_31105 = G__31110;
count__30941_31106 = G__31111;
i__30942_31107 = G__31112;
continue;
} else {
var temp__5825__auto___31113 = cljs.core.seq.call(null,seq__30939_31104);
if(temp__5825__auto___31113){
var seq__30939_31114__$1 = temp__5825__auto___31113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30939_31114__$1)){
var c__5548__auto___31115 = cljs.core.chunk_first.call(null,seq__30939_31114__$1);
var G__31116 = cljs.core.chunk_rest.call(null,seq__30939_31114__$1);
var G__31117 = c__5548__auto___31115;
var G__31118 = cljs.core.count.call(null,c__5548__auto___31115);
var G__31119 = (0);
seq__30939_31104 = G__31116;
chunk__30940_31105 = G__31117;
count__30941_31106 = G__31118;
i__30942_31107 = G__31119;
continue;
} else {
var component__7980__auto___31120 = cljs.core.first.call(null,seq__30939_31114__$1);
speclj.components.install.call(null,component__7980__auto___31120,description__7979__auto____$1);


var G__31121 = cljs.core.next.call(null,seq__30939_31114__$1);
var G__31122 = null;
var G__31123 = (0);
var G__31124 = (0);
seq__30939_31104 = G__31121;
chunk__30940_31105 = G__31122;
count__30941_31106 = G__31123;
i__30942_31107 = G__31124;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30937_31102);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"memoized-minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__30943_31125 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30944_31126 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30944_31126);

try{var seq__30945_31127 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"high scoring if next move is a win",((function (_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var best_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var tie_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var worst_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto___31131 = best_score;
var b__8436__auto___31132 = tie_score;
if(((typeof a__8435__auto___31131 === 'number') && (typeof b__8436__auto___31132 === 'number'))){
if((a__8435__auto___31131 > b__8436__auto___31132)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31131)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31132)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31131)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31132),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto___31131;
var b__8101__auto__ = b__8436__auto___31132;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto__ = tie_score;
var b__8436__auto__ = worst_score;
if(((typeof a__8435__auto__ === 'number') && (typeof b__8436__auto__ === 'number'))){
if((a__8435__auto__ > b__8436__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto__;
var b__8101__auto__ = b__8436__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"gives higher scores to better moves",((function (_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var example_minimax = (function tic_tac_toe$expert_aic_spec$example_minimax(board,maximizing_token,move,board_size){
var next_board = tic_tac_toe.boardc.make_move.call(null,board,move,maximizing_token);
return tic_tac_toe.expert_aic.memoized_minimax.call(null,next_board,tic_tac_toe.boardc.switch_player.call(null,maximizing_token),maximizing_token,(1),board_size);
});
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var best_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var next_best_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var worst_move = example_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto___31133 = best_move;
var b__8436__auto___31134 = next_best_move;
if(((typeof a__8435__auto___31133 === 'number') && (typeof b__8436__auto___31134 === 'number'))){
if((a__8435__auto___31133 > b__8436__auto___31134)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31133)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31134)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto___31133)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto___31134),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto___31133;
var b__8101__auto__ = b__8436__auto___31134;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__8435__auto__ = next_best_move;
var b__8436__auto__ = worst_move;
if(((typeof a__8435__auto__ === 'number') && (typeof b__8436__auto__ === 'number'))){
if((a__8435__auto__ > b__8436__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__8435__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__8436__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__8100__auto__ = a__8435__auto__;
var b__8101__auto__ = b__8436__auto__;
var type_a__8102__auto__ = (((a__8100__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__8100__auto__)));
var type_b__8103__auto__ = (((b__8101__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__8101__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__8102__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__8103__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false),speclj.components.new_characteristic.call(null,"returns 0 for a tie",((function (_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = (-1);
var actual__8122__auto__ = tic_tac_toe.expert_aic.memoized_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__30943_31125,_STAR_parent_description_STAR__temp_val__30944_31126,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30847_30950,_STAR_parent_description_STAR__temp_val__30848_30951,description__7979__auto___30949))
,false)],null)));
var chunk__30946_31128 = null;
var count__30947_31129 = (0);
var i__30948_31130 = (0);
while(true){
if((i__30948_31130 < count__30947_31129)){
var component__7980__auto___31135 = cljs.core._nth.call(null,chunk__30946_31128,i__30948_31130);
speclj.components.install.call(null,component__7980__auto___31135,description__7979__auto____$1);


var G__31136 = seq__30945_31127;
var G__31137 = chunk__30946_31128;
var G__31138 = count__30947_31129;
var G__31139 = (i__30948_31130 + (1));
seq__30945_31127 = G__31136;
chunk__30946_31128 = G__31137;
count__30947_31129 = G__31138;
i__30948_31130 = G__31139;
continue;
} else {
var temp__5825__auto___31140 = cljs.core.seq.call(null,seq__30945_31127);
if(temp__5825__auto___31140){
var seq__30945_31141__$1 = temp__5825__auto___31140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30945_31141__$1)){
var c__5548__auto___31142 = cljs.core.chunk_first.call(null,seq__30945_31141__$1);
var G__31143 = cljs.core.chunk_rest.call(null,seq__30945_31141__$1);
var G__31144 = c__5548__auto___31142;
var G__31145 = cljs.core.count.call(null,c__5548__auto___31142);
var G__31146 = (0);
seq__30945_31127 = G__31143;
chunk__30946_31128 = G__31144;
count__30947_31129 = G__31145;
i__30948_31130 = G__31146;
continue;
} else {
var component__7980__auto___31147 = cljs.core.first.call(null,seq__30945_31141__$1);
speclj.components.install.call(null,component__7980__auto___31147,description__7979__auto____$1);


var G__31148 = cljs.core.next.call(null,seq__30945_31141__$1);
var G__31149 = null;
var G__31150 = (0);
var G__31151 = (0);
seq__30945_31127 = G__31148;
chunk__30946_31128 = G__31149;
count__30947_31129 = G__31150;
i__30948_31130 = G__31151;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30943_31125);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})()],null)));
var chunk__30850_30953 = null;
var count__30851_30954 = (0);
var i__30852_30955 = (0);
while(true){
if((i__30852_30955 < count__30851_30954)){
var component__7980__auto___31152 = cljs.core._nth.call(null,chunk__30850_30953,i__30852_30955);
speclj.components.install.call(null,component__7980__auto___31152,description__7979__auto___30949);


var G__31153 = seq__30849_30952;
var G__31154 = chunk__30850_30953;
var G__31155 = count__30851_30954;
var G__31156 = (i__30852_30955 + (1));
seq__30849_30952 = G__31153;
chunk__30850_30953 = G__31154;
count__30851_30954 = G__31155;
i__30852_30955 = G__31156;
continue;
} else {
var temp__5825__auto___31157 = cljs.core.seq.call(null,seq__30849_30952);
if(temp__5825__auto___31157){
var seq__30849_31158__$1 = temp__5825__auto___31157;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30849_31158__$1)){
var c__5548__auto___31159 = cljs.core.chunk_first.call(null,seq__30849_31158__$1);
var G__31160 = cljs.core.chunk_rest.call(null,seq__30849_31158__$1);
var G__31161 = c__5548__auto___31159;
var G__31162 = cljs.core.count.call(null,c__5548__auto___31159);
var G__31163 = (0);
seq__30849_30952 = G__31160;
chunk__30850_30953 = G__31161;
count__30851_30954 = G__31162;
i__30852_30955 = G__31163;
continue;
} else {
var component__7980__auto___31164 = cljs.core.first.call(null,seq__30849_31158__$1);
speclj.components.install.call(null,component__7980__auto___31164,description__7979__auto___30949);


var G__31165 = cljs.core.next.call(null,seq__30849_31158__$1);
var G__31166 = null;
var G__31167 = (0);
var G__31168 = (0);
seq__30849_30952 = G__31165;
chunk__30850_30953 = G__31166;
count__30851_30954 = G__31167;
i__30852_30955 = G__31168;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30847_30950);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto___30949);
}


//# sourceMappingURL=expert_aic_spec.js.map
