// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.gamec');
goog.require('cljs.core');
goog.require('tic_tac_toe.boardc');
tic_tac_toe.gamec.__GT_new_state = (function tic_tac_toe$gamec$__GT_new_state(p__12671,grid_move){
var map__12673 = p__12671;
var map__12673__$1 = cljs.core.__destructure_map.call(null,map__12673);
var state = map__12673__$1;
var board = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_token = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"current-token","current-token",428531321));
var turn_count = cljs.core.get.call(null,map__12673__$1,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756));
var new_board = tic_tac_toe.boardc.make_move.call(null,board,grid_move,current_token);
var next_player = tic_tac_toe.boardc.switch_player.call(null,current_token);
var turn_count__$1 = (turn_count + (1));
var new_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-token","current-token",428531321),next_player,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),turn_count__$1);
return new_state;
});

//# sourceMappingURL=gamec.js.map
