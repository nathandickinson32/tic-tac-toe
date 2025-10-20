// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('tic_tac_toe.boardc');
goog.require('tic_tac_toe.gamec');
tic_tac_toe.main.empty_board = (function tic_tac_toe$main$empty_board(board_size){
var size = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),board_size))?(3):(4));
return cljs.core.vec.call(null,cljs.core.repeat.call(null,size,cljs.core.vec.call(null,cljs.core.repeat.call(null,size,null))));
});
tic_tac_toe.main.valid_move_QMARK_ = (function tic_tac_toe$main$valid_move_QMARK_(state,p__12136){
var vec__12137 = p__12136;
var row = cljs.core.nth.call(null,vec__12137,(0),null);
var col = cljs.core.nth.call(null,vec__12137,(1),null);
return ((tic_tac_toe.boardc.space_available_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(state))))));
});
if((typeof tic_tac_toe !== 'undefined') && (typeof tic_tac_toe.main !== 'undefined') && (typeof tic_tac_toe.main.app_state !== 'undefined')){
} else {
tic_tac_toe.main.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544)),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),(0)], null));
}
tic_tac_toe.main.handle_move = (function tic_tac_toe$main$handle_move(row,col){
var state = cljs.core.deref.call(null,tic_tac_toe.main.app_state);
var move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
if(tic_tac_toe.main.valid_move_QMARK_.call(null,state,move)){
var new_state = tic_tac_toe.gamec.__GT_new_state.call(null,state,move);
var new_board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(new_state);
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(new_state);
var winner = (cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,new_board,new cljs.core.Keyword(null,"X","X",1705996313),size))?new cljs.core.Keyword(null,"X","X",1705996313):(cljs.core.truth_(tic_tac_toe.boardc.win_QMARK_.call(null,new_board,new cljs.core.Keyword(null,"O","O",795252742),size))?new cljs.core.Keyword(null,"O","O",795252742):null));
var draw = tic_tac_toe.boardc.full_board_QMARK_.call(null,new_board,size);
return cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.merge,new_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"winner","winner",714604679),winner,new cljs.core.Keyword(null,"draw","draw",1358331674),draw], null));
} else {
return null;
}
});
tic_tac_toe.main.reset_game = (function tic_tac_toe$main$reset_game(){
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
return cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,(function (_){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.main.empty_board.call(null,size),new cljs.core.Keyword(null,"board-size","board-size",140730505),size,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),(0)], null);
}));
});
tic_tac_toe.main.set_board_size = (function tic_tac_toe$main$set_board_size(size_keyword){
return cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,(function (_){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.main.empty_board.call(null,size_keyword),new cljs.core.Keyword(null,"board-size","board-size",140730505),size_keyword,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),(0)], null);
}));
});
tic_tac_toe.main.button_square = (function tic_tac_toe$main$button_square(row,col){
var map__12140 = cljs.core.deref.call(null,tic_tac_toe.main.app_state);
var map__12140__$1 = cljs.core.__destructure_map.call(null,map__12140);
var board = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var winner = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var draw = cljs.core.get.call(null,map__12140__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var value = cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.handle_move.call(null,row,col);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = winner;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return draw;
}
}
})()], null),(cljs.core.truth_(value)?cljs.core.name.call(null,value):null)], null);
});
tic_tac_toe.main.board_grid = (function tic_tac_toe$main$board_grid(){
var size = cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-size","data-size",-1468859869),size], null),(function (){var iter__5503__auto__ = (function tic_tac_toe$main$board_grid_$_iter__12141(s__12142){
return (new cljs.core.LazySeq(null,(function (){
var s__12142__$1 = s__12142;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__12142__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__12142__$1,row,xs__6385__auto__,temp__5825__auto__,size){
return (function tic_tac_toe$main$board_grid_$_iter__12141_$_iter__12143(s__12144){
return (new cljs.core.LazySeq(null,((function (s__12142__$1,row,xs__6385__auto__,temp__5825__auto__,size){
return (function (){
var s__12144__$1 = s__12144;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__12144__$1);
if(temp__5825__auto____$1){
var s__12144__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12144__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__12144__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__12146 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__12145 = (0);
while(true){
if((i__12145 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__12145);
cljs.core.chunk_append.call(null,b__12146,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.button_square,row,col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)));

var G__12148 = (i__12145 + (1));
i__12145 = G__12148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12146),tic_tac_toe$main$board_grid_$_iter__12141_$_iter__12143.call(null,cljs.core.chunk_rest.call(null,s__12144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12146),null);
}
} else {
var col = cljs.core.first.call(null,s__12144__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.button_square,row,col], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')], null)),tic_tac_toe$main$board_grid_$_iter__12141_$_iter__12143.call(null,cljs.core.rest.call(null,s__12144__$2)));
}
} else {
return null;
}
break;
}
});})(s__12142__$1,row,xs__6385__auto__,temp__5825__auto__,size))
,null,null));
});})(s__12142__$1,row,xs__6385__auto__,temp__5825__auto__,size))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,size)));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$main$board_grid_$_iter__12141.call(null,cljs.core.rest.call(null,s__12142__$1)));
} else {
var G__12149 = cljs.core.rest.call(null,s__12142__$1);
s__12142__$1 = G__12149;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,size));
})()], null);
});
tic_tac_toe.main.status_message = (function tic_tac_toe$main$status_message(){
var map__12147 = cljs.core.deref.call(null,tic_tac_toe.main.app_state);
var map__12147__$1 = cljs.core.__destructure_map.call(null,map__12147);
var current_token = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"current-token","current-token",428531321));
var winner = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var draw = cljs.core.get.call(null,map__12147__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
if(cljs.core.truth_(winner)){
return ["Winner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)].join('');
} else {
if(cljs.core.truth_(draw)){
return "Draw!";
} else {
return ["Turn: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_token)].join('');

}
}
});
tic_tac_toe.main.size_selector = (function tic_tac_toe$main$size_selector(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"15px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Board Size: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.selection-button","button.selection-button",-415071750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
})], null),"3x3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.selection-button","button.selection-button",-415071750),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),"4x4"], null)], null);
});
tic_tac_toe.main.app = (function tic_tac_toe$main$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic Tac Toe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.size_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.board_grid], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.status_message], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reset","button.reset",378892869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),tic_tac_toe.main.reset_game], null),"Reset"], null)], null);
});
tic_tac_toe.main.main = (function tic_tac_toe$main$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null),document.getElementById("root"));
});
goog.exportSymbol('tic_tac_toe.main.main', tic_tac_toe.main.main);

//# sourceMappingURL=main.js.map
