// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.easy_aic');
goog.require('cljs.core');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.boardc');
tic_tac_toe.easy_aic.choose_random_move = (function tic_tac_toe$easy_aic$choose_random_move(board,board_size){
return cljs.core.rand_nth.call(null,tic_tac_toe.boardc.available_moves.call(null,board,board_size));
});
cljs.core._add_method.call(null,tic_tac_toe.player_typesc.__GT_player_move,new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720),(function (p__9505){
var map__9506 = p__9505;
var map__9506__$1 = cljs.core.__destructure_map.call(null,map__9506);
var board = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var board_size = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
return tic_tac_toe.easy_aic.choose_random_move.call(null,board,board_size);
}));

//# sourceMappingURL=easy_aic.js.map
