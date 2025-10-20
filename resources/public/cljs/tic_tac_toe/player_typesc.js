// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.player_typesc');
goog.require('cljs.core');
tic_tac_toe.player_typesc.current_token_type = (function tic_tac_toe$player_typesc$current_token_type(state){
return cljs.core.get.call(null,state,new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.player_typesc !== 'undefined') && (typeof tic_tac_toe.player_typesc.__GT_player_move !== 'undefined')){
} else {
tic_tac_toe.player_typesc.__GT_player_move = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tic-tac-toe.player-typesc","->player-move"),tic_tac_toe.player_typesc.current_token_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}

//# sourceMappingURL=player_typesc.js.map
