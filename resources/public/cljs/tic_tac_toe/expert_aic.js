// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.expert_aic');
goog.require('cljs.core');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.boardc');
tic_tac_toe.expert_aic.game_over_QMARK_ = (function tic_tac_toe$expert_aic$game_over_QMARK_(board,board_size,depth){
if(cljs.core._EQ_.call(null,board_size,new cljs.core.Keyword(null,"3x3","3x3",570362544))){
return tic_tac_toe.boardc.end_game_QMARK_.call(null,board,board_size);
} else {
if(cljs.core._EQ_.call(null,board_size,new cljs.core.Keyword(null,"4x4","4x4",121507723))){
var or__5025__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,board,board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (depth >= (6));
}
} else {
if(cljs.core._EQ_.call(null,board_size,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540))){
var or__5025__auto__ = tic_tac_toe.boardc.end_game_QMARK_.call(null,board,board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (depth >= (3));
}
} else {
return null;
}
}
}
});
tic_tac_toe.expert_aic.score = (function tic_tac_toe$expert_aic$score(board,token,board_size){
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,board,token,board_size))){
return (5);
} else {
if(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,board,tic_tac_toe.boardc.switch_player.call(null,token),board_size))){
return (-5);
} else {
return (0);

}
}
});
tic_tac_toe.expert_aic.score_end_game = (function tic_tac_toe$expert_aic$score_end_game(board,max_token,depth,board_size){
return (tic_tac_toe.expert_aic.score.call(null,board,max_token,board_size) - depth);
});
tic_tac_toe.expert_aic.__GT_score_one_move = (function tic_tac_toe$expert_aic$__GT_score_one_move(next_board,token,max_token,depth,board_size){
return tic_tac_toe.expert_aic.memoized_minimax.call(null,next_board,tic_tac_toe.boardc.switch_player.call(null,token),max_token,(depth + (1)),board_size);
});
tic_tac_toe.expert_aic.__GT_score_moves = (function tic_tac_toe$expert_aic$__GT_score_moves(board,token,max_token,depth,moves,board_size){
return cljs.core.map.call(null,(function (p1__21558_SHARP_){
var next_board = tic_tac_toe.boardc.make_move.call(null,board,p1__21558_SHARP_,token);
return tic_tac_toe.expert_aic.__GT_score_one_move.call(null,next_board,token,max_token,depth,board_size);
}),moves);
});
tic_tac_toe.expert_aic.max_value = (function tic_tac_toe$expert_aic$max_value(scores){
return cljs.core.apply.call(null,cljs.core.max,scores);
});
tic_tac_toe.expert_aic.min_value = (function tic_tac_toe$expert_aic$min_value(scores){
return cljs.core.apply.call(null,cljs.core.min,scores);
});
tic_tac_toe.expert_aic.best_score_by_depth = (function tic_tac_toe$expert_aic$best_score_by_depth(scores){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.pos_QMARK_,scores))){
return tic_tac_toe.expert_aic.min_value.call(null,scores);
} else {
return cljs.core.apply.call(null,cljs.core._PLUS_,scores);
}
});
tic_tac_toe.expert_aic.__GT_best_score = (function tic_tac_toe$expert_aic$__GT_best_score(scores,maximizing_QMARK_,depth){
if(cljs.core.truth_(maximizing_QMARK_)){
return (tic_tac_toe.expert_aic.max_value.call(null,scores) / depth);
} else {
return (tic_tac_toe.expert_aic.best_score_by_depth.call(null,scores) / depth);
}
});
tic_tac_toe.expert_aic.evaluate_branch = (function tic_tac_toe$expert_aic$evaluate_branch(board,token,max_token,depth,board_size){
var moves = tic_tac_toe.boardc.available_moves.call(null,board,board_size);
var scores = tic_tac_toe.expert_aic.__GT_score_moves.call(null,board,token,max_token,depth,moves,board_size);
var maximizing_QMARK_ = cljs.core._EQ_.call(null,token,max_token);
return tic_tac_toe.expert_aic.__GT_best_score.call(null,scores,maximizing_QMARK_,depth);
});
tic_tac_toe.expert_aic.minimax = (function tic_tac_toe$expert_aic$minimax(board,token,max_token,depth,board_size){
if(cljs.core.truth_(tic_tac_toe.expert_aic.game_over_QMARK_.call(null,board,board_size,depth))){
return tic_tac_toe.expert_aic.score_end_game.call(null,board,max_token,depth,board_size);
} else {
return tic_tac_toe.expert_aic.evaluate_branch.call(null,board,token,max_token,depth,board_size);
}
});
tic_tac_toe.expert_aic.memoized_minimax = cljs.core.memoize.call(null,tic_tac_toe.expert_aic.minimax);
tic_tac_toe.expert_aic.evaluate_move = (function tic_tac_toe$expert_aic$evaluate_move(board,token,move,depth,board_size){
var next_board = tic_tac_toe.boardc.make_move.call(null,board,move,token);
var score = tic_tac_toe.expert_aic.__GT_score_one_move.call(null,next_board,token,token,depth,board_size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"move","move",-2110884309),move,new cljs.core.Keyword(null,"score","score",-1963588780),score], null);
});
tic_tac_toe.expert_aic.choose_best_move = (function tic_tac_toe$expert_aic$choose_best_move(board,token,board_size){
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.map.call(null,(function (p1__21566_SHARP_){
return tic_tac_toe.expert_aic.evaluate_move.call(null,board,token,p1__21566_SHARP_,(0),board_size);
}),tic_tac_toe.boardc.available_moves.call(null,board,board_size))));
});
cljs.core._add_method.call(null,tic_tac_toe.player_typesc.__GT_player_move,new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886),(function (p__21568){
var map__21569 = p__21568;
var map__21569__$1 = cljs.core.__destructure_map.call(null,map__21569);
var board = cljs.core.get.call(null,map__21569__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_token = cljs.core.get.call(null,map__21569__$1,new cljs.core.Keyword(null,"current-token","current-token",428531321));
var board_size = cljs.core.get.call(null,map__21569__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
return tic_tac_toe.expert_aic.choose_best_move.call(null,board,current_token,board_size);
}));

//# sourceMappingURL=expert_aic.js.map
