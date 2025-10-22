// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.medium_aic');
goog.require('cljs.core');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.expert_aic');
goog.require('tic_tac_toe.easy_aic');
tic_tac_toe.medium_aic.medium_ai_moves = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886)], null);
tic_tac_toe.medium_aic.best_or_rand_move = (function tic_tac_toe$medium_aic$best_or_rand_move(board,current_token,board_size){
var move = cljs.core.rand_nth.call(null,tic_tac_toe.medium_aic.medium_ai_moves);
if(cljs.core._EQ_.call(null,move,new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720))){
return tic_tac_toe.easy_aic.choose_random_move.call(null,board,board_size);
} else {
return tic_tac_toe.expert_aic.choose_best_move.call(null,board,current_token,board_size);
}
});
cljs.core._add_method.call(null,tic_tac_toe.player_typesc.__GT_player_move,new cljs.core.Keyword(null,"medium-ai","medium-ai",-1340450475),(function (p__36307){
var map__36308 = p__36307;
var map__36308__$1 = cljs.core.__destructure_map.call(null,map__36308);
var board = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_token = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"current-token","current-token",428531321));
var board_size = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
return tic_tac_toe.medium_aic.best_or_rand_move.call(null,board,current_token,board_size);
}));

//# sourceMappingURL=medium_aic.js.map
