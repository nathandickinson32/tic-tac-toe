// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('c3kit.wire.js');
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.main !== 'undefined') && (typeof tic_tac_toe.main.game_state !== 'undefined')){
} else {
tic_tac_toe.main.game_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board-size","board-size",140730505),(3),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec.call(null,cljs.core.repeat.call(null,(9),null)),new cljs.core.Keyword(null,"current-player","current-player",-970625153),"X",new cljs.core.Keyword(null,"winner","winner",714604679),null], null));
}
tic_tac_toe.main.winner_QMARK_ = (function tic_tac_toe$main$winner_QMARK_(board,board_size){
var indices = cljs.core.range.call(null,board_size);
var rows = (function (){var iter__5503__auto__ = (function tic_tac_toe$main$winner_QMARK__$_iter__11055(s__11056){
return (new cljs.core.LazySeq(null,(function (){
var s__11056__$1 = s__11056;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__11056__$1);
if(temp__5825__auto__){
var s__11056__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11056__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__11056__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__11058 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__11057 = (0);
while(true){
if((i__11057 < size__5502__auto__)){
var r = cljs.core._nth.call(null,c__5501__auto__,i__11057);
cljs.core.chunk_append.call(null,b__11058,cljs.core.map.call(null,((function (i__11057,r,c__5501__auto__,size__5502__auto__,b__11058,s__11056__$2,temp__5825__auto__,indices){
return (function (p1__11050_SHARP_){
return (r + (p1__11050_SHARP_ * board_size));
});})(i__11057,r,c__5501__auto__,size__5502__auto__,b__11058,s__11056__$2,temp__5825__auto__,indices))
,indices));

var G__11069 = (i__11057 + (1));
i__11057 = G__11069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11058),tic_tac_toe$main$winner_QMARK__$_iter__11055.call(null,cljs.core.chunk_rest.call(null,s__11056__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11058),null);
}
} else {
var r = cljs.core.first.call(null,s__11056__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (r,s__11056__$2,temp__5825__auto__,indices){
return (function (p1__11050_SHARP_){
return (r + (p1__11050_SHARP_ * board_size));
});})(r,s__11056__$2,temp__5825__auto__,indices))
,indices),tic_tac_toe$main$winner_QMARK__$_iter__11055.call(null,cljs.core.rest.call(null,s__11056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,indices);
})();
var cols = (function (){var iter__5503__auto__ = (function tic_tac_toe$main$winner_QMARK__$_iter__11059(s__11060){
return (new cljs.core.LazySeq(null,(function (){
var s__11060__$1 = s__11060;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__11060__$1);
if(temp__5825__auto__){
var s__11060__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11060__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__11060__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__11062 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__11061 = (0);
while(true){
if((i__11061 < size__5502__auto__)){
var c = cljs.core._nth.call(null,c__5501__auto__,i__11061);
cljs.core.chunk_append.call(null,b__11062,cljs.core.map.call(null,((function (i__11061,c,c__5501__auto__,size__5502__auto__,b__11062,s__11060__$2,temp__5825__auto__,indices,rows){
return (function (p1__11051_SHARP_){
return (c + (p1__11051_SHARP_ * board_size));
});})(i__11061,c,c__5501__auto__,size__5502__auto__,b__11062,s__11060__$2,temp__5825__auto__,indices,rows))
,indices));

var G__11075 = (i__11061 + (1));
i__11061 = G__11075;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11062),tic_tac_toe$main$winner_QMARK__$_iter__11059.call(null,cljs.core.chunk_rest.call(null,s__11060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11062),null);
}
} else {
var c = cljs.core.first.call(null,s__11060__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (c,s__11060__$2,temp__5825__auto__,indices,rows){
return (function (p1__11051_SHARP_){
return (c + (p1__11051_SHARP_ * board_size));
});})(c,s__11060__$2,temp__5825__auto__,indices,rows))
,indices),tic_tac_toe$main$winner_QMARK__$_iter__11059.call(null,cljs.core.rest.call(null,s__11060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,indices);
})();
var diag1 = cljs.core.map.call(null,(function (p1__11052_SHARP_){
return (((1) + p1__11052_SHARP_) * board_size);
}),indices);
var diag2 = cljs.core.map.call(null,(function (p1__11053_SHARP_){
return ((p1__11053_SHARP_ * (board_size - (1))) + (board_size - (1)));
}),indices);
var lines = cljs.core.concat.call(null,rows,cols,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diag1,diag2], null));
return cljs.core.some.call(null,(function (line){
var vec__11063 = line;
var seq__11064 = cljs.core.seq.call(null,vec__11063);
var first__11065 = cljs.core.first.call(null,seq__11064);
var seq__11064__$1 = cljs.core.next.call(null,seq__11064);
var a = first__11065;
var first__11065__$1 = cljs.core.first.call(null,seq__11064__$1);
var seq__11064__$2 = cljs.core.next.call(null,seq__11064__$1);
var b = first__11065__$1;
var rest = seq__11064__$2;
if(cljs.core.truth_((function (){var and__5023__auto__ = board.call(null,a);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.every_QMARK_.call(null,(function (p1__11054_SHARP_){
return cljs.core._EQ_.call(null,board.call(null,a),board.call(null,p1__11054_SHARP_));
}),line);
} else {
return and__5023__auto__;
}
})())){
return board.call(null,a);
} else {
return null;
}
}),lines);
});
tic_tac_toe.main.reset_game = (function tic_tac_toe$main$reset_game(){
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
return cljs.core.reset_BANG_.call(null,tic_tac_toe.main.game_state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec.call(null,cljs.core.repeat.call(null,(size * size),null)),new cljs.core.Keyword(null,"current-player","current-player",-970625153),"X",new cljs.core.Keyword(null,"winner","winner",714604679),null], null));
});
tic_tac_toe.main.square = (function tic_tac_toe$main$square(i){
var map__11066 = cljs.core.deref.call(null,tic_tac_toe.main.game_state);
var map__11066__$1 = cljs.core.__destructure_map.call(null,map__11066);
var board = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_player = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"current-player","current-player",-970625153));
var winner = cljs.core.get.call(null,map__11066__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((((board.call(null,i) == null)) && ((winner == null)))){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,(function (p__11067){
var map__11068 = p__11067;
var map__11068__$1 = cljs.core.__destructure_map.call(null,map__11068);
var s = map__11068__$1;
var board__$1 = cljs.core.get.call(null,map__11068__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var current_player__$1 = cljs.core.get.call(null,map__11068__$1,new cljs.core.Keyword(null,"current-player","current-player",-970625153));
var board_size = cljs.core.get.call(null,map__11068__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var new_board = cljs.core.assoc.call(null,board__$1,i,current_player__$1);
var next_player = ((cljs.core._EQ_.call(null,current_player__$1,"X"))?"O":"X");
var maybe_winner = tic_tac_toe.main.winner_QMARK_.call(null,new_board,board_size);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"board","board",-1907017633),new_board),new cljs.core.Keyword(null,"current-player","current-player",-970625153),next_player),new cljs.core.Keyword(null,"winner","winner",714604679),maybe_winner);
}));
} else {
return null;
}
})], null),board.call(null,i)], null);
});
tic_tac_toe.main.board = (function tic_tac_toe$main$board(){
var map__11070 = cljs.core.deref.call(null,tic_tac_toe.main.game_state);
var map__11070__$1 = cljs.core.__destructure_map.call(null,map__11070);
var board_size = cljs.core.get.call(null,map__11070__$1,new cljs.core.Keyword(null,"board-size","board-size",140730505));
var board = cljs.core.get.call(null,map__11070__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["grid-template-columns",["repeat(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(board_size),", 100px)"].join('')], null)], null),(function (){var iter__5503__auto__ = (function tic_tac_toe$main$board_$_iter__11071(s__11072){
return (new cljs.core.LazySeq(null,(function (){
var s__11072__$1 = s__11072;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__11072__$1);
if(temp__5825__auto__){
var s__11072__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11072__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__11072__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__11074 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__11073 = (0);
while(true){
if((i__11073 < size__5502__auto__)){
var i = cljs.core._nth.call(null,c__5501__auto__,i__11073);
cljs.core.chunk_append.call(null,b__11074,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.square,i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__11082 = (i__11073 + (1));
i__11073 = G__11082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11074),tic_tac_toe$main$board_$_iter__11071.call(null,cljs.core.chunk_rest.call(null,s__11072__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11074),null);
}
} else {
var i = cljs.core.first.call(null,s__11072__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.square,i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),tic_tac_toe$main$board_$_iter__11071.call(null,cljs.core.rest.call(null,s__11072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board)));
})()], null);
});
tic_tac_toe.main.status = (function tic_tac_toe$main$status(){
var map__11076 = cljs.core.deref.call(null,tic_tac_toe.main.game_state);
var map__11076__$1 = cljs.core.__destructure_map.call(null,map__11076);
var current_player = cljs.core.get.call(null,map__11076__$1,new cljs.core.Keyword(null,"current-player","current-player",-970625153));
var winner = cljs.core.get.call(null,map__11076__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status","div.status",246710893),(cljs.core.truth_(winner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Winner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Turn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_player)].join('')], null)
)], null);
});
tic_tac_toe.main.reset_button = (function tic_tac_toe$main$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reset","button.reset",378892869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tic_tac_toe.main.reset_game], null),"Play Again"], null);
});
tic_tac_toe.main.board_size_selector = (function tic_tac_toe$main$board_size_selector(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Board size: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11077_SHARP_){
var size = parseInt(p1__11077_SHARP_.target.value);
return cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.vec.call(null,cljs.core.repeat.call(null,(size * size),null)),new cljs.core.Keyword(null,"current-player","current-player",-970625153),"X",new cljs.core.Keyword(null,"winner","winner",714604679),null);
})], null),(function (){var iter__5503__auto__ = (function tic_tac_toe$main$board_size_selector_$_iter__11078(s__11079){
return (new cljs.core.LazySeq(null,(function (){
var s__11079__$1 = s__11079;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__11079__$1);
if(temp__5825__auto__){
var s__11079__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11079__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__11079__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__11081 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__11080 = (0);
while(true){
if((i__11080 < size__5502__auto__)){
var size = cljs.core._nth.call(null,c__5501__auto__,i__11080);
cljs.core.chunk_append.call(null,b__11081,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),size], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),size], null)));

var G__11083 = (i__11080 + (1));
i__11080 = G__11083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11081),tic_tac_toe$main$board_size_selector_$_iter__11078.call(null,cljs.core.chunk_rest.call(null,s__11079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11081),null);
}
} else {
var size = cljs.core.first.call(null,s__11079__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),size], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),size], null)),tic_tac_toe$main$board_size_selector_$_iter__11078.call(null,cljs.core.rest.call(null,s__11079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3),(6)));
})()], null)], null);
});
tic_tac_toe.main.app = (function tic_tac_toe$main$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic Tac Toe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.board_size_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.reset_button], null)], null);
});
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null),c3kit.wire.js.element_by_id.call(null,"root"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
