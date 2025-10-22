// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.expert_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.expert_aic');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.test_boards_4x4c_spec');
tic_tac_toe.expert_aic_spec.opponent_moves = (function tic_tac_toe$expert_aic_spec$opponent_moves(p__36387,token,board_size){
var vec__36388 = p__36387;
var board = cljs.core.nth.call(null,vec__36388,(0),null);
var depth = cljs.core.nth.call(null,vec__36388,(1),null);
var available_moves = tic_tac_toe.boardc.available_moves.call(null,board,board_size);
return cljs.core.map.call(null,(function (p1__36386_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[tic_tac_toe.boardc.make_move.call(null,board,p1__36386_SHARP_,token),(depth + (1))],null));
}),available_moves);
});
tic_tac_toe.expert_aic_spec.simulate_opponent_moves = (function tic_tac_toe$expert_aic_spec$simulate_opponent_moves(unfinished_games,opponent_token,board_size){
return cljs.core.mapcat.call(null,(function (p1__36395_SHARP_){
return tic_tac_toe.expert_aic_spec.opponent_moves.call(null,p1__36395_SHARP_,opponent_token,board_size);
}),unfinished_games);
});
tic_tac_toe.expert_aic_spec.ai_make_move = (function tic_tac_toe$expert_aic_spec$ai_make_move(p__36396,ai_token,board_size){
var vec__36397 = p__36396;
var board = cljs.core.nth.call(null,vec__36397,(0),null);
var depth = cljs.core.nth.call(null,vec__36397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.boardc.make_move.call(null,board,tic_tac_toe.expert_aic.choose_best_move.call(null,board,ai_token,board_size),ai_token),(depth + (1))], null);
});
tic_tac_toe.expert_aic_spec.simulate_ai_moves = (function tic_tac_toe$expert_aic_spec$simulate_ai_moves(opponent_boards,ai_token,board_size){
return cljs.core.map.call(null,(function (p1__36402_SHARP_){
return tic_tac_toe.expert_aic_spec.ai_make_move.call(null,p1__36402_SHARP_,ai_token,board_size);
}),opponent_boards);
});
tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map = (function tic_tac_toe$expert_aic_spec$__GT_finished_unfinished_map(board_depth_pairs,board_size){
return cljs.core.group_by.call(null,(function (p1__36403_SHARP_){
return tic_tac_toe.boardc.end_game_QMARK_.call(null,cljs.core.first.call(null,p1__36403_SHARP_),board_size);
}),board_depth_pairs);
});
tic_tac_toe.expert_aic_spec.simulate_next_boards = (function tic_tac_toe$expert_aic_spec$simulate_next_boards(unfinished_games,finished_games,ai_token,opponent_token,board_size){
var opponent_boards = tic_tac_toe.expert_aic_spec.simulate_opponent_moves.call(null,unfinished_games,opponent_token,board_size);
var map__36404 = tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map.call(null,opponent_boards,board_size);
var map__36404__$1 = cljs.core.__destructure_map.call(null,map__36404);
var opponent_finished = cljs.core.get.call(null,map__36404__$1,true);
var unfinished = cljs.core.get.call(null,map__36404__$1,false);
var next_ai_boards = tic_tac_toe.expert_aic_spec.simulate_ai_moves.call(null,unfinished,ai_token,board_size);
var map__36405 = tic_tac_toe.expert_aic_spec.__GT_finished_unfinished_map.call(null,next_ai_boards,board_size);
var map__36405__$1 = cljs.core.__destructure_map.call(null,map__36405);
var ai_finished = cljs.core.get.call(null,map__36405__$1,true);
var unfinished__$1 = cljs.core.get.call(null,map__36405__$1,false);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unfinished","unfinished",-1852599383),unfinished__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.concat.call(null,finished_games,ai_finished,opponent_finished)], null);
});
tic_tac_toe.expert_aic_spec.all_finished_games = (function tic_tac_toe$expert_aic_spec$all_finished_games(var_args){
var G__36430 = arguments.length;
switch (G__36430) {
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
var map__36470 = tic_tac_toe.expert_aic_spec.simulate_next_boards.call(null,unfinished_games,finished_games,ai_token,opponent_token,board_size);
var map__36470__$1 = cljs.core.__destructure_map.call(null,map__36470);
var unfinished = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"unfinished","unfinished",-1852599383));
var finished = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"finished","finished",-1018867731));
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
return cljs.core.every_QMARK_.call(null,(function (p1__36484_SHARP_){
var or__5025__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,cljs.core.first.call(null,p1__36484_SHARP_),token,board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return tic_tac_toe.boardc.full_board_QMARK_.call(null,cljs.core.first.call(null,p1__36484_SHARP_),board_size);
}
}),all_finished_games);
});
var description__10061__auto___36791 = speclj.components.new_description.call(null,"Expert AI",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36508_36792 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36509_36793 = description__10061__auto___36791;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36509_36793);

try{var seq__36510_36794 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"when checking to end minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36725_36798 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36726_36799 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36726_36799);

try{var seq__36727_36800 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns true if X wins",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns true if O wins",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns true if board is full",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns false if board is full",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10197__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns false if depth is 3 with 4x4 board",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = tic_tac_toe.expert_aic.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"4x4","4x4",121507723),(3));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10197__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns true if depth is 7 with 4x4 board",((function (_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.expert_aic.game_over_QMARK_.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_with_1,new cljs.core.Keyword(null,"4x4","4x4",121507723),(7));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36725_36798,_STAR_parent_description_STAR__temp_val__36726_36799,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36728_36801 = null;
var count__36729_36802 = (0);
var i__36730_36803 = (0);
while(true){
if((i__36730_36803 < count__36729_36802)){
var component__10062__auto___36804 = cljs.core._nth.call(null,chunk__36728_36801,i__36730_36803);
speclj.components.install.call(null,component__10062__auto___36804,description__10061__auto____$1);


var G__36805 = seq__36727_36800;
var G__36806 = chunk__36728_36801;
var G__36807 = count__36729_36802;
var G__36808 = (i__36730_36803 + (1));
seq__36727_36800 = G__36805;
chunk__36728_36801 = G__36806;
count__36729_36802 = G__36807;
i__36730_36803 = G__36808;
continue;
} else {
var temp__5825__auto___36809 = cljs.core.seq.call(null,seq__36727_36800);
if(temp__5825__auto___36809){
var seq__36727_36810__$1 = temp__5825__auto___36809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36727_36810__$1)){
var c__5548__auto___36811 = cljs.core.chunk_first.call(null,seq__36727_36810__$1);
var G__36812 = cljs.core.chunk_rest.call(null,seq__36727_36810__$1);
var G__36813 = c__5548__auto___36811;
var G__36814 = cljs.core.count.call(null,c__5548__auto___36811);
var G__36815 = (0);
seq__36727_36800 = G__36812;
chunk__36728_36801 = G__36813;
count__36729_36802 = G__36814;
i__36730_36803 = G__36815;
continue;
} else {
var component__10062__auto___36816 = cljs.core.first.call(null,seq__36727_36810__$1);
speclj.components.install.call(null,component__10062__auto___36816,description__10061__auto____$1);


var G__36817 = cljs.core.next.call(null,seq__36727_36810__$1);
var G__36818 = null;
var G__36819 = (0);
var G__36820 = (0);
seq__36727_36800 = G__36817;
chunk__36728_36801 = G__36818;
count__36729_36802 = G__36819;
i__36730_36803 = G__36820;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36725_36798);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"when getting a score",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36731_36821 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36732_36822 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36732_36822);

try{var seq__36733_36823 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"return positive for winner negative for loser",((function (_STAR_parent_description_STAR__orig_val__36731_36821,_STAR_parent_description_STAR__temp_val__36732_36822,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var winning_score = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.top_winning_row_X,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var losing_score = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_row_O,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___36827 = winning_score;
var actual__10204__auto___36828 = cljs.core.abs.call(null,losing_score);
if(cljs.core._EQ_.call(null,expected__10203__auto___36827,actual__10204__auto___36828)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___36827;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___36828;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var f__10213__auto__ = cljs.core.neg_QMARK_;
var actual__10214__auto__ = losing_score;
if(cljs.core.truth_(f__10213__auto__.call(null,actual__10214__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected ",(function (){var temp__5827__auto__ = actual__10214__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," to satisfy: ","neg?"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36731_36821,_STAR_parent_description_STAR__temp_val__36732_36822,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns 0 if no winner",((function (_STAR_parent_description_STAR__orig_val__36731_36821,_STAR_parent_description_STAR__temp_val__36732_36822,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = tic_tac_toe.expert_aic.score.call(null,tic_tac_toe.test_boards_3x3c_spec.no_winners_board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36731_36821,_STAR_parent_description_STAR__temp_val__36732_36822,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36734_36824 = null;
var count__36735_36825 = (0);
var i__36736_36826 = (0);
while(true){
if((i__36736_36826 < count__36735_36825)){
var component__10062__auto___36835 = cljs.core._nth.call(null,chunk__36734_36824,i__36736_36826);
speclj.components.install.call(null,component__10062__auto___36835,description__10061__auto____$1);


var G__36836 = seq__36733_36823;
var G__36837 = chunk__36734_36824;
var G__36838 = count__36735_36825;
var G__36839 = (i__36736_36826 + (1));
seq__36733_36823 = G__36836;
chunk__36734_36824 = G__36837;
count__36735_36825 = G__36838;
i__36736_36826 = G__36839;
continue;
} else {
var temp__5825__auto___36840 = cljs.core.seq.call(null,seq__36733_36823);
if(temp__5825__auto___36840){
var seq__36733_36841__$1 = temp__5825__auto___36840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36733_36841__$1)){
var c__5548__auto___36842 = cljs.core.chunk_first.call(null,seq__36733_36841__$1);
var G__36843 = cljs.core.chunk_rest.call(null,seq__36733_36841__$1);
var G__36844 = c__5548__auto___36842;
var G__36845 = cljs.core.count.call(null,c__5548__auto___36842);
var G__36846 = (0);
seq__36733_36823 = G__36843;
chunk__36734_36824 = G__36844;
count__36735_36825 = G__36845;
i__36736_36826 = G__36846;
continue;
} else {
var component__10062__auto___36847 = cljs.core.first.call(null,seq__36733_36841__$1);
speclj.components.install.call(null,component__10062__auto___36847,description__10061__auto____$1);


var G__36848 = cljs.core.next.call(null,seq__36733_36841__$1);
var G__36849 = null;
var G__36850 = (0);
var G__36851 = (0);
seq__36733_36823 = G__36848;
chunk__36734_36824 = G__36849;
count__36735_36825 = G__36850;
i__36736_36826 = G__36851;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36731_36821);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36743_36852 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36744_36853 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36744_36853);

try{var seq__36745_36854 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"high scoring if next move is a win 3x3",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var best_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var tie_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var worst_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto___36858 = best_score;
var b__10518__auto___36859 = tie_score;
if(((typeof a__10517__auto___36858 === 'number') && (typeof b__10518__auto___36859 === 'number'))){
if((a__10517__auto___36858 > b__10518__auto___36859)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36858)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36859)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36858)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36859),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto___36858;
var b__10183__auto__ = b__10518__auto___36859;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto__ = tie_score;
var b__10518__auto__ = worst_score;
if(((typeof a__10517__auto__ === 'number') && (typeof b__10518__auto__ === 'number'))){
if((a__10517__auto__ > b__10518__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto__;
var b__10183__auto__ = b__10518__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"high scoring if next move is a win 4x4",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var best_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.x_wins_top_row,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
var tie_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
var worst_score = tic_tac_toe.expert_aic.minimax.call(null,tic_tac_toe.test_boards_4x4c_spec.diagonal_dleft_win_O_4x4,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"4x4","4x4",121507723));
speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto___36860 = best_score;
var b__10518__auto___36861 = tie_score;
if(((typeof a__10517__auto___36860 === 'number') && (typeof b__10518__auto___36861 === 'number'))){
if((a__10517__auto___36860 > b__10518__auto___36861)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36860)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36861)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36860)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36861),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto___36860;
var b__10183__auto__ = b__10518__auto___36861;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto__ = tie_score;
var b__10518__auto__ = worst_score;
if(((typeof a__10517__auto__ === 'number') && (typeof b__10518__auto__ === 'number'))){
if((a__10517__auto__ > b__10518__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto__;
var b__10183__auto__ = b__10518__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"gives higher scores to better moves",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
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

var a__10517__auto___36862 = best_move;
var b__10518__auto___36863 = next_best_move;
if(((typeof a__10517__auto___36862 === 'number') && (typeof b__10518__auto___36863 === 'number'))){
if((a__10517__auto___36862 > b__10518__auto___36863)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36862)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36863)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36862)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36863),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto___36862;
var b__10183__auto__ = b__10518__auto___36863;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto__ = next_best_move;
var b__10518__auto__ = worst_move;
if(((typeof a__10517__auto__ === 'number') && (typeof b__10518__auto__ === 'number'))){
if((a__10517__auto__ > b__10518__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto__;
var b__10183__auto__ = b__10518__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"maximizes score for maximizing player",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var maximizing_token = new cljs.core.Keyword(null,"X","X",1705996313);
var score = tic_tac_toe.expert_aic.minimax.call(null,board,maximizing_token,maximizing_token,(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = (score >= (0));
if(value__10191__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"minimizes score when maximizing player loses",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
var score = tic_tac_toe.expert_aic.minimax.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = (score < (0));
if(value__10191__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns 0 for a tie",((function (_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (-1);
var actual__10204__auto__ = tic_tac_toe.expert_aic.minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36743_36852,_STAR_parent_description_STAR__temp_val__36744_36853,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36746_36855 = null;
var count__36747_36856 = (0);
var i__36748_36857 = (0);
while(true){
if((i__36748_36857 < count__36747_36856)){
var component__10062__auto___36864 = cljs.core._nth.call(null,chunk__36746_36855,i__36748_36857);
speclj.components.install.call(null,component__10062__auto___36864,description__10061__auto____$1);


var G__36865 = seq__36745_36854;
var G__36866 = chunk__36746_36855;
var G__36867 = count__36747_36856;
var G__36868 = (i__36748_36857 + (1));
seq__36745_36854 = G__36865;
chunk__36746_36855 = G__36866;
count__36747_36856 = G__36867;
i__36748_36857 = G__36868;
continue;
} else {
var temp__5825__auto___36869 = cljs.core.seq.call(null,seq__36745_36854);
if(temp__5825__auto___36869){
var seq__36745_36870__$1 = temp__5825__auto___36869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36745_36870__$1)){
var c__5548__auto___36871 = cljs.core.chunk_first.call(null,seq__36745_36870__$1);
var G__36872 = cljs.core.chunk_rest.call(null,seq__36745_36870__$1);
var G__36873 = c__5548__auto___36871;
var G__36874 = cljs.core.count.call(null,c__5548__auto___36871);
var G__36875 = (0);
seq__36745_36854 = G__36872;
chunk__36746_36855 = G__36873;
count__36747_36856 = G__36874;
i__36748_36857 = G__36875;
continue;
} else {
var component__10062__auto___36876 = cljs.core.first.call(null,seq__36745_36870__$1);
speclj.components.install.call(null,component__10062__auto___36876,description__10061__auto____$1);


var G__36877 = cljs.core.next.call(null,seq__36745_36870__$1);
var G__36878 = null;
var G__36879 = (0);
var G__36880 = (0);
seq__36745_36854 = G__36877;
chunk__36746_36855 = G__36878;
count__36747_36856 = G__36879;
i__36748_36857 = G__36880;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36743_36852);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"when choosing the best move 3x3",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36749_36881 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36750_36882 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36750_36882);

try{var seq__36751_36883 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,8,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"returns the only available move",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"2");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses any corner on an empty board",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = tic_tac_toe.boardc.starting_board_3x3;
var corners = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]);
var move = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = move;
var actual__10255__auto__ = corners;
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses a winning move",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = tic_tac_toe.test_boards_3x3c_spec.choose_win_over_block;
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses a blocking move",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = tic_tac_toe.test_boards_3x3c_spec.O_should_block;
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses the best available move for O",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"O","O",795252742),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7",new cljs.core.Keyword(null,"X","X",1705996313),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null);
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses the best available move when values are even for x and o",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),"9"], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10255__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"AI never loses as X playing first",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var all_finished_games = tic_tac_toe.expert_aic_spec.finished_games_ai_plays_first.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.expert_aic_spec.ai_win_every_game.call(null,all_finished_games,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__10191__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"AI never loses as O playing second",((function (_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var all_finished_games = tic_tac_toe.expert_aic_spec.finished_games_ai_plays_second.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = tic_tac_toe.expert_aic_spec.ai_win_every_game.call(null,all_finished_games,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(value__10191__auto__){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36749_36881,_STAR_parent_description_STAR__temp_val__36750_36882,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36752_36884 = null;
var count__36753_36885 = (0);
var i__36754_36886 = (0);
while(true){
if((i__36754_36886 < count__36753_36885)){
var component__10062__auto___36899 = cljs.core._nth.call(null,chunk__36752_36884,i__36754_36886);
speclj.components.install.call(null,component__10062__auto___36899,description__10061__auto____$1);


var G__36900 = seq__36751_36883;
var G__36901 = chunk__36752_36884;
var G__36902 = count__36753_36885;
var G__36903 = (i__36754_36886 + (1));
seq__36751_36883 = G__36900;
chunk__36752_36884 = G__36901;
count__36753_36885 = G__36902;
i__36754_36886 = G__36903;
continue;
} else {
var temp__5825__auto___36904 = cljs.core.seq.call(null,seq__36751_36883);
if(temp__5825__auto___36904){
var seq__36751_36905__$1 = temp__5825__auto___36904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36751_36905__$1)){
var c__5548__auto___36906 = cljs.core.chunk_first.call(null,seq__36751_36905__$1);
var G__36907 = cljs.core.chunk_rest.call(null,seq__36751_36905__$1);
var G__36908 = c__5548__auto___36906;
var G__36909 = cljs.core.count.call(null,c__5548__auto___36906);
var G__36910 = (0);
seq__36751_36883 = G__36907;
chunk__36752_36884 = G__36908;
count__36753_36885 = G__36909;
i__36754_36886 = G__36910;
continue;
} else {
var component__10062__auto___36911 = cljs.core.first.call(null,seq__36751_36905__$1);
speclj.components.install.call(null,component__10062__auto___36911,description__10061__auto____$1);


var G__36912 = cljs.core.next.call(null,seq__36751_36905__$1);
var G__36913 = null;
var G__36914 = (0);
var G__36915 = (0);
seq__36751_36883 = G__36912;
chunk__36752_36884 = G__36913;
count__36753_36885 = G__36914;
i__36754_36886 = G__36915;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36749_36881);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"4x4 expert-ai",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36767_36916 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36768_36917 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36768_36917);

try{var seq__36769_36918 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses a blocking move 4x4",((function (_STAR_parent_description_STAR__orig_val__36767_36916,_STAR_parent_description_STAR__temp_val__36768_36917,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__36767_36916,_STAR_parent_description_STAR__temp_val__36768_36917,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses a winning over blocking 4x4",((function (_STAR_parent_description_STAR__orig_val__36767_36916,_STAR_parent_description_STAR__temp_val__36768_36917,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__36767_36916,_STAR_parent_description_STAR__temp_val__36768_36917,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36770_36919 = null;
var count__36771_36920 = (0);
var i__36772_36921 = (0);
while(true){
if((i__36772_36921 < count__36771_36920)){
var component__10062__auto___36922 = cljs.core._nth.call(null,chunk__36770_36919,i__36772_36921);
speclj.components.install.call(null,component__10062__auto___36922,description__10061__auto____$1);


var G__36923 = seq__36769_36918;
var G__36924 = chunk__36770_36919;
var G__36925 = count__36771_36920;
var G__36926 = (i__36772_36921 + (1));
seq__36769_36918 = G__36923;
chunk__36770_36919 = G__36924;
count__36771_36920 = G__36925;
i__36772_36921 = G__36926;
continue;
} else {
var temp__5825__auto___36927 = cljs.core.seq.call(null,seq__36769_36918);
if(temp__5825__auto___36927){
var seq__36769_36928__$1 = temp__5825__auto___36927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36769_36928__$1)){
var c__5548__auto___36929 = cljs.core.chunk_first.call(null,seq__36769_36928__$1);
var G__36930 = cljs.core.chunk_rest.call(null,seq__36769_36928__$1);
var G__36931 = c__5548__auto___36929;
var G__36932 = cljs.core.count.call(null,c__5548__auto___36929);
var G__36933 = (0);
seq__36769_36918 = G__36930;
chunk__36770_36919 = G__36931;
count__36771_36920 = G__36932;
i__36772_36921 = G__36933;
continue;
} else {
var component__10062__auto___36934 = cljs.core.first.call(null,seq__36769_36928__$1);
speclj.components.install.call(null,component__10062__auto___36934,description__10061__auto____$1);


var G__36935 = cljs.core.next.call(null,seq__36769_36928__$1);
var G__36936 = null;
var G__36937 = (0);
var G__36938 = (0);
seq__36769_36918 = G__36935;
chunk__36770_36919 = G__36936;
count__36771_36920 = G__36937;
i__36772_36921 = G__36938;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36767_36916);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"3x3x3 expert-ai",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36773_36939 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36774_36940 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36774_36940);

try{var seq__36775_36941 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses a blocking move 3x3x3",((function (_STAR_parent_description_STAR__orig_val__36773_36939,_STAR_parent_description_STAR__temp_val__36774_36940,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
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
});})(_STAR_parent_description_STAR__orig_val__36773_36939,_STAR_parent_description_STAR__temp_val__36774_36940,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses winning over blocking 3x3x3",((function (_STAR_parent_description_STAR__orig_val__36773_36939,_STAR_parent_description_STAR__temp_val__36774_36940,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26",new cljs.core.Keyword(null,"O","O",795252742)], null)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null);
var actual__10204__auto__ = tic_tac_toe.expert_aic.choose_best_move.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540));
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
});})(_STAR_parent_description_STAR__orig_val__36773_36939,_STAR_parent_description_STAR__temp_val__36774_36940,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36776_36942 = null;
var count__36777_36943 = (0);
var i__36778_36944 = (0);
while(true){
if((i__36778_36944 < count__36777_36943)){
var component__10062__auto___36945 = cljs.core._nth.call(null,chunk__36776_36942,i__36778_36944);
speclj.components.install.call(null,component__10062__auto___36945,description__10061__auto____$1);


var G__36946 = seq__36775_36941;
var G__36947 = chunk__36776_36942;
var G__36948 = count__36777_36943;
var G__36949 = (i__36778_36944 + (1));
seq__36775_36941 = G__36946;
chunk__36776_36942 = G__36947;
count__36777_36943 = G__36948;
i__36778_36944 = G__36949;
continue;
} else {
var temp__5825__auto___36950 = cljs.core.seq.call(null,seq__36775_36941);
if(temp__5825__auto___36950){
var seq__36775_36951__$1 = temp__5825__auto___36950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36775_36951__$1)){
var c__5548__auto___36952 = cljs.core.chunk_first.call(null,seq__36775_36951__$1);
var G__36953 = cljs.core.chunk_rest.call(null,seq__36775_36951__$1);
var G__36954 = c__5548__auto___36952;
var G__36955 = cljs.core.count.call(null,c__5548__auto___36952);
var G__36956 = (0);
seq__36775_36941 = G__36953;
chunk__36776_36942 = G__36954;
count__36777_36943 = G__36955;
i__36778_36944 = G__36956;
continue;
} else {
var component__10062__auto___36957 = cljs.core.first.call(null,seq__36775_36951__$1);
speclj.components.install.call(null,component__10062__auto___36957,description__10061__auto____$1);


var G__36958 = cljs.core.next.call(null,seq__36775_36951__$1);
var G__36959 = null;
var G__36960 = (0);
var G__36961 = (0);
seq__36775_36941 = G__36958;
chunk__36776_36942 = G__36959;
count__36777_36943 = G__36960;
i__36778_36944 = G__36961;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36773_36939);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"expert AI ->player-move",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36779_36962 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36780_36963 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36780_36963);

try{var seq__36781_36964 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"one move available",((function (_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = tic_tac_toe.boardc.make_move.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"2");
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(8),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
var actual__10204__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
});})(_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses any corner on an empty board",((function (_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.starting_board_3x3,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
var corners = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)]);
var move = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = move;
var actual__10255__auto__ = corners;
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses a winning move",((function (_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.test_boards_3x3c_spec.choose_win_over_block,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(4),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
var move = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__10204__auto__ = move;
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
});})(_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"chooses a blocking move",((function (_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.test_boards_3x3c_spec.O_should_block,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"depth","depth",1768663640),(3),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__10204__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
});})(_STAR_parent_description_STAR__orig_val__36779_36962,_STAR_parent_description_STAR__temp_val__36780_36963,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36782_36965 = null;
var count__36783_36966 = (0);
var i__36784_36967 = (0);
while(true){
if((i__36784_36967 < count__36783_36966)){
var component__10062__auto___36974 = cljs.core._nth.call(null,chunk__36782_36965,i__36784_36967);
speclj.components.install.call(null,component__10062__auto___36974,description__10061__auto____$1);


var G__36975 = seq__36781_36964;
var G__36976 = chunk__36782_36965;
var G__36977 = count__36783_36966;
var G__36978 = (i__36784_36967 + (1));
seq__36781_36964 = G__36975;
chunk__36782_36965 = G__36976;
count__36783_36966 = G__36977;
i__36784_36967 = G__36978;
continue;
} else {
var temp__5825__auto___36979 = cljs.core.seq.call(null,seq__36781_36964);
if(temp__5825__auto___36979){
var seq__36781_36980__$1 = temp__5825__auto___36979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36781_36980__$1)){
var c__5548__auto___36981 = cljs.core.chunk_first.call(null,seq__36781_36980__$1);
var G__36982 = cljs.core.chunk_rest.call(null,seq__36781_36980__$1);
var G__36983 = c__5548__auto___36981;
var G__36984 = cljs.core.count.call(null,c__5548__auto___36981);
var G__36985 = (0);
seq__36781_36964 = G__36982;
chunk__36782_36965 = G__36983;
count__36783_36966 = G__36984;
i__36784_36967 = G__36985;
continue;
} else {
var component__10062__auto___36986 = cljs.core.first.call(null,seq__36781_36980__$1);
speclj.components.install.call(null,component__10062__auto___36986,description__10061__auto____$1);


var G__36987 = cljs.core.next.call(null,seq__36781_36980__$1);
var G__36988 = null;
var G__36989 = (0);
var G__36990 = (0);
seq__36781_36964 = G__36987;
chunk__36782_36965 = G__36988;
count__36783_36966 = G__36989;
i__36784_36967 = G__36990;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36779_36962);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"memoized-minimax",false,"tic-tac-toe.expert-aic-spec");
var _STAR_parent_description_STAR__orig_val__36785_36991 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36786_36992 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36786_36992);

try{var seq__36787_36993 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"high scoring if next move is a win",((function (_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var best_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.left_winning_col_X,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var tie_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.full_board,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
var worst_score = tic_tac_toe.expert_aic.memoized_minimax.call(null,tic_tac_toe.test_boards_3x3c_spec.middle_winning_col_O,null,new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto___36997 = best_score;
var b__10518__auto___36998 = tie_score;
if(((typeof a__10517__auto___36997 === 'number') && (typeof b__10518__auto___36998 === 'number'))){
if((a__10517__auto___36997 > b__10518__auto___36998)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36997)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36998)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36997)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___36998),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto___36997;
var b__10183__auto__ = b__10518__auto___36998;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto__ = tie_score;
var b__10518__auto__ = worst_score;
if(((typeof a__10517__auto__ === 'number') && (typeof b__10518__auto__ === 'number'))){
if((a__10517__auto__ > b__10518__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto__;
var b__10183__auto__ = b__10518__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"gives higher scores to better moves",((function (_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
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

var a__10517__auto___36999 = best_move;
var b__10518__auto___37000 = next_best_move;
if(((typeof a__10517__auto___36999 === 'number') && (typeof b__10518__auto___37000 === 'number'))){
if((a__10517__auto___36999 > b__10518__auto___37000)){
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36999)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___37000)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto___36999)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto___37000),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto___36999;
var b__10183__auto__ = b__10518__auto___37000;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}

speclj.components.inc_assertions_BANG_.call(null);

var a__10517__auto__ = next_best_move;
var b__10518__auto__ = worst_move;
if(((typeof a__10517__auto__ === 'number') && (typeof b__10518__auto__ === 'number'))){
if((a__10517__auto__ > b__10518__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," to be greater than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__)," but got: (> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a__10517__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b__10518__auto__),")"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = a__10517__auto__;
var b__10183__auto__ = b__10518__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should>"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));
}
});})(_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false),speclj.components.new_characteristic.call(null,"returns 0 for a tie",((function (_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791){
return (function (){
var board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (-1);
var actual__10204__auto__ = tic_tac_toe.expert_aic.memoized_minimax.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),(1),new cljs.core.Keyword(null,"3x3","3x3",570362544));
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
});})(_STAR_parent_description_STAR__orig_val__36785_36991,_STAR_parent_description_STAR__temp_val__36786_36992,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36508_36792,_STAR_parent_description_STAR__temp_val__36509_36793,description__10061__auto___36791))
,false)],null)));
var chunk__36788_36994 = null;
var count__36789_36995 = (0);
var i__36790_36996 = (0);
while(true){
if((i__36790_36996 < count__36789_36995)){
var component__10062__auto___37001 = cljs.core._nth.call(null,chunk__36788_36994,i__36790_36996);
speclj.components.install.call(null,component__10062__auto___37001,description__10061__auto____$1);


var G__37002 = seq__36787_36993;
var G__37003 = chunk__36788_36994;
var G__37004 = count__36789_36995;
var G__37005 = (i__36790_36996 + (1));
seq__36787_36993 = G__37002;
chunk__36788_36994 = G__37003;
count__36789_36995 = G__37004;
i__36790_36996 = G__37005;
continue;
} else {
var temp__5825__auto___37006 = cljs.core.seq.call(null,seq__36787_36993);
if(temp__5825__auto___37006){
var seq__36787_37007__$1 = temp__5825__auto___37006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36787_37007__$1)){
var c__5548__auto___37008 = cljs.core.chunk_first.call(null,seq__36787_37007__$1);
var G__37009 = cljs.core.chunk_rest.call(null,seq__36787_37007__$1);
var G__37010 = c__5548__auto___37008;
var G__37011 = cljs.core.count.call(null,c__5548__auto___37008);
var G__37012 = (0);
seq__36787_36993 = G__37009;
chunk__36788_36994 = G__37010;
count__36789_36995 = G__37011;
i__36790_36996 = G__37012;
continue;
} else {
var component__10062__auto___37013 = cljs.core.first.call(null,seq__36787_37007__$1);
speclj.components.install.call(null,component__10062__auto___37013,description__10061__auto____$1);


var G__37014 = cljs.core.next.call(null,seq__36787_37007__$1);
var G__37015 = null;
var G__37016 = (0);
var G__37017 = (0);
seq__36787_36993 = G__37014;
chunk__36788_36994 = G__37015;
count__36789_36995 = G__37016;
i__36790_36996 = G__37017;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36785_36991);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__36511_36795 = null;
var count__36512_36796 = (0);
var i__36513_36797 = (0);
while(true){
if((i__36513_36797 < count__36512_36796)){
var component__10062__auto___37018 = cljs.core._nth.call(null,chunk__36511_36795,i__36513_36797);
speclj.components.install.call(null,component__10062__auto___37018,description__10061__auto___36791);


var G__37019 = seq__36510_36794;
var G__37020 = chunk__36511_36795;
var G__37021 = count__36512_36796;
var G__37022 = (i__36513_36797 + (1));
seq__36510_36794 = G__37019;
chunk__36511_36795 = G__37020;
count__36512_36796 = G__37021;
i__36513_36797 = G__37022;
continue;
} else {
var temp__5825__auto___37023 = cljs.core.seq.call(null,seq__36510_36794);
if(temp__5825__auto___37023){
var seq__36510_37024__$1 = temp__5825__auto___37023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36510_37024__$1)){
var c__5548__auto___37025 = cljs.core.chunk_first.call(null,seq__36510_37024__$1);
var G__37026 = cljs.core.chunk_rest.call(null,seq__36510_37024__$1);
var G__37027 = c__5548__auto___37025;
var G__37028 = cljs.core.count.call(null,c__5548__auto___37025);
var G__37029 = (0);
seq__36510_36794 = G__37026;
chunk__36511_36795 = G__37027;
count__36512_36796 = G__37028;
i__36513_36797 = G__37029;
continue;
} else {
var component__10062__auto___37030 = cljs.core.first.call(null,seq__36510_37024__$1);
speclj.components.install.call(null,component__10062__auto___37030,description__10061__auto___36791);


var G__37031 = cljs.core.next.call(null,seq__36510_37024__$1);
var G__37032 = null;
var G__37033 = (0);
var G__37034 = (0);
seq__36510_36794 = G__37031;
chunk__36511_36795 = G__37032;
count__36512_36796 = G__37033;
i__36513_36797 = G__37034;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36508_36792);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___36791);
}


//# sourceMappingURL=expert_aic_spec.js.map
