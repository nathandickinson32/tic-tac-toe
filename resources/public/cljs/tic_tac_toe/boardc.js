// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.boardc');
goog.require('cljs.core');
tic_tac_toe.boardc.starting_board_3x3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
tic_tac_toe.boardc.starting_board_4x4 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15","16"], null)], null);
tic_tac_toe.boardc.starting_board_3x3x3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
tic_tac_toe.boardc.str_positions_3x3 = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","7","5","6","1","2"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]);
tic_tac_toe.boardc.str_positions_4x4 = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","14","15","7","5","12","13","6","1","11","2","16","10"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)]);
tic_tac_toe.boardc.str_positions_3x3x3 = cljs.core.PersistentHashMap.fromArrays(["9","3","22","26","4","8","14","21","20","19","17","25","15","7","5","18","12","13","27","24","6","1","11","2","16","10","23"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)]);
tic_tac_toe.boardc.determine_positions = (function tic_tac_toe$boardc$determine_positions(board_size){
var pred__9295 = cljs.core._EQ_;
var expr__9296 = board_size;
if(cljs.core.truth_(pred__9295.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),expr__9296))){
return tic_tac_toe.boardc.str_positions_3x3;
} else {
if(cljs.core.truth_(pred__9295.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723),expr__9296))){
return tic_tac_toe.boardc.str_positions_4x4;
} else {
if(cljs.core.truth_(pred__9295.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),expr__9296))){
return tic_tac_toe.boardc.str_positions_3x3x3;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9296)].join('')));
}
}
}
});
tic_tac_toe.boardc.__GT_grid_coordinates = (function tic_tac_toe$boardc$__GT_grid_coordinates(input,board_size){
var str_positions = tic_tac_toe.boardc.determine_positions.call(null,board_size);
return cljs.core.get.call(null,str_positions,input);
});
tic_tac_toe.boardc.all_positions_3x3 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__9312(s__9313){
return (new cljs.core.LazySeq(null,(function (){
var s__9313__$1 = s__9313;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9313__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__9313__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__9312_$_iter__9316(s__9317){
return (new cljs.core.LazySeq(null,((function (s__9313__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9317__$1 = s__9317;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__9317__$1);
if(temp__5825__auto____$1){
var s__9317__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9317__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9317__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9319 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9318 = (0);
while(true){
if((i__9318 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__9318);
cljs.core.chunk_append.call(null,b__9319,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__9386 = (i__9318 + (1));
i__9318 = G__9386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9319),tic_tac_toe$boardc$iter__9312_$_iter__9316.call(null,cljs.core.chunk_rest.call(null,s__9317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9319),null);
}
} else {
var col = cljs.core.first.call(null,s__9317__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),tic_tac_toe$boardc$iter__9312_$_iter__9316.call(null,cljs.core.rest.call(null,s__9317__$2)));
}
} else {
return null;
}
break;
}
});})(s__9313__$1,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9313__$1,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__9312.call(null,cljs.core.rest.call(null,s__9313__$1)));
} else {
var G__9391 = cljs.core.rest.call(null,s__9313__$1);
s__9313__$1 = G__9391;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3)));
})();
tic_tac_toe.boardc.all_positions_4x4 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__9369(s__9370){
return (new cljs.core.LazySeq(null,(function (){
var s__9370__$1 = s__9370;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9370__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__9370__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__9369_$_iter__9371(s__9372){
return (new cljs.core.LazySeq(null,((function (s__9370__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9372__$1 = s__9372;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__9372__$1);
if(temp__5825__auto____$1){
var s__9372__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9372__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9372__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9374 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9373 = (0);
while(true){
if((i__9373 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__9373);
cljs.core.chunk_append.call(null,b__9374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__9398 = (i__9373 + (1));
i__9373 = G__9398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9374),tic_tac_toe$boardc$iter__9369_$_iter__9371.call(null,cljs.core.chunk_rest.call(null,s__9372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9374),null);
}
} else {
var col = cljs.core.first.call(null,s__9372__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),tic_tac_toe$boardc$iter__9369_$_iter__9371.call(null,cljs.core.rest.call(null,s__9372__$2)));
}
} else {
return null;
}
break;
}
});})(s__9370__$1,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9370__$1,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(4))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__9369.call(null,cljs.core.rest.call(null,s__9370__$1)));
} else {
var G__9400 = cljs.core.rest.call(null,s__9370__$1);
s__9370__$1 = G__9400;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(4)));
})();
tic_tac_toe.boardc.all_positions_3x3x3 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__9378(s__9379){
return (new cljs.core.LazySeq(null,(function (){
var s__9379__$1 = s__9379;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9379__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var layer = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__9379__$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__9378_$_iter__9380(s__9381){
return (new cljs.core.LazySeq(null,((function (s__9379__$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9381__$1 = s__9381;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__9381__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var row = cljs.core.first.call(null,xs__6385__auto____$1);
var iterys__5499__auto__ = ((function (s__9381__$1,s__9379__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__9378_$_iter__9380_$_iter__9382(s__9383){
return (new cljs.core.LazySeq(null,((function (s__9381__$1,s__9379__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9383__$1 = s__9383;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__9383__$1);
if(temp__5825__auto____$2){
var s__9383__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9383__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9383__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9385 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9384 = (0);
while(true){
if((i__9384 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__9384);
cljs.core.chunk_append.call(null,b__9385,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer,row,col], null));

var G__9410 = (i__9384 + (1));
i__9384 = G__9410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9385),tic_tac_toe$boardc$iter__9378_$_iter__9380_$_iter__9382.call(null,cljs.core.chunk_rest.call(null,s__9383__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9385),null);
}
} else {
var col = cljs.core.first.call(null,s__9383__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer,row,col], null),tic_tac_toe$boardc$iter__9378_$_iter__9380_$_iter__9382.call(null,cljs.core.rest.call(null,s__9383__$2)));
}
} else {
return null;
}
break;
}
});})(s__9381__$1,s__9379__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9381__$1,s__9379__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__9378_$_iter__9380.call(null,cljs.core.rest.call(null,s__9381__$1)));
} else {
var G__9413 = cljs.core.rest.call(null,s__9381__$1);
s__9381__$1 = G__9413;
continue;
}
} else {
return null;
}
break;
}
});})(s__9379__$1,layer,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9379__$1,layer,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__9378.call(null,cljs.core.rest.call(null,s__9379__$1)));
} else {
var G__9414 = cljs.core.rest.call(null,s__9379__$1);
s__9379__$1 = G__9414;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3)));
})();
tic_tac_toe.boardc.__GT_positions_by_board_size = (function tic_tac_toe$boardc$__GT_positions_by_board_size(board_size){
var pred__9405 = cljs.core._EQ_;
var expr__9406 = board_size;
if(cljs.core.truth_(pred__9405.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),expr__9406))){
return tic_tac_toe.boardc.all_positions_3x3;
} else {
if(cljs.core.truth_(pred__9405.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723),expr__9406))){
return tic_tac_toe.boardc.all_positions_4x4;
} else {
if(cljs.core.truth_(pred__9405.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),expr__9406))){
return tic_tac_toe.boardc.all_positions_3x3x3;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9406)].join('')));
}
}
}
});
tic_tac_toe.boardc.determine_starting_board = (function tic_tac_toe$boardc$determine_starting_board(board_size){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),board_size)){
return tic_tac_toe.boardc.starting_board_3x3;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723),board_size)){
return tic_tac_toe.boardc.starting_board_4x4;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),board_size)){
return tic_tac_toe.boardc.starting_board_3x3x3;
} else {
return null;
}
}
}
});
tic_tac_toe.boardc.switch_player = (function tic_tac_toe$boardc$switch_player(current_player){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),current_player)){
return new cljs.core.Keyword(null,"O","O",795252742);
} else {
return new cljs.core.Keyword(null,"X","X",1705996313);
}
});
tic_tac_toe.boardc.space_available_QMARK_ = (function tic_tac_toe$boardc$space_available_QMARK_(board,move){
var symbol = cljs.core.get_in.call(null,board,move);
return (!(((cljs.core._EQ_.call(null,symbol,new cljs.core.Keyword(null,"X","X",1705996313))) || (cljs.core._EQ_.call(null,symbol,new cljs.core.Keyword(null,"O","O",795252742))))));
});
tic_tac_toe.boardc.available_moves = (function tic_tac_toe$boardc$available_moves(board,board_size){
var all_positions = tic_tac_toe.boardc.__GT_positions_by_board_size.call(null,board_size);
return cljs.core.filter.call(null,cljs.core.partial.call(null,tic_tac_toe.boardc.space_available_QMARK_,board),all_positions);
});
tic_tac_toe.boardc.maybe_valid_move = (function tic_tac_toe$boardc$maybe_valid_move(board,input,board_size){
var temp__5825__auto__ = tic_tac_toe.boardc.__GT_grid_coordinates.call(null,input,board_size);
if(cljs.core.truth_(temp__5825__auto__)){
var move = temp__5825__auto__;
if(tic_tac_toe.boardc.space_available_QMARK_.call(null,board,move)){
return move;
} else {
return null;
}
} else {
return null;
}
});
tic_tac_toe.boardc.make_move = (function tic_tac_toe$boardc$make_move(board,move,token){
return cljs.core.assoc_in.call(null,board,move,token);
});
tic_tac_toe.boardc.full_board_QMARK_ = (function tic_tac_toe$boardc$full_board_QMARK_(board,board_size){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),board_size)){
return cljs.core.every_QMARK_.call(null,(function (p1__9411_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),p1__9411_SHARP_);
}),cljs.core.flatten.call(null,cljs.core.mapcat.call(null,cljs.core.flatten,board)));
} else {
return cljs.core.every_QMARK_.call(null,(function (p1__9412_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),p1__9412_SHARP_);
}),cljs.core.flatten.call(null,board));
}
});
tic_tac_toe.boardc.all_matching_tokens_QMARK_ = (function tic_tac_toe$boardc$all_matching_tokens_QMARK_(row,token){
return cljs.core.every_QMARK_.call(null,(function (p1__9416_SHARP_){
return cljs.core._EQ_.call(null,p1__9416_SHARP_,token);
}),row);
});
tic_tac_toe.boardc.diagonal_right_3x3 = (function tic_tac_toe$boardc$diagonal_right_3x3(board){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], null);
});
tic_tac_toe.boardc.diagonal_left_3x3 = (function tic_tac_toe$boardc$diagonal_left_3x3(board){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], null);
});
tic_tac_toe.boardc.diagonal_right_4x4 = (function tic_tac_toe$boardc$diagonal_right_4x4(board){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null))], null);
});
tic_tac_toe.boardc.diagonal_left_4x4 = (function tic_tac_toe$boardc$diagonal_left_4x4(board){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null))], null);
});
tic_tac_toe.boardc.center_line_diagonals = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null)], null)], null);
tic_tac_toe.boardc.__GT_diagonals_from_x = (function tic_tac_toe$boardc$__GT_diagonals_from_x(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x,(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),x,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),x,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),x,(2)], null)], null)], null);
});
tic_tac_toe.boardc.__GT_diagonals_from_y = (function tic_tac_toe$boardc$__GT_diagonals_from_y(y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),y], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),y], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),y], null)], null)], null);
});
tic_tac_toe.boardc.__GT_x_plane_diags = (function tic_tac_toe$boardc$__GT_x_plane_diags(){
var iter__5503__auto__ = (function tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__9434(s__9435){
return (new cljs.core.LazySeq(null,(function (){
var s__9435__$1 = s__9435;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9435__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__9435__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__9434_$_iter__9436(s__9437){
return (new cljs.core.LazySeq(null,((function (s__9435__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9437__$1 = s__9437;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__9437__$1);
if(temp__5825__auto____$1){
var s__9437__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9437__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9437__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9439 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9438 = (0);
while(true){
if((i__9438 < size__5502__auto__)){
var diagonals = cljs.core._nth.call(null,c__5501__auto__,i__9438);
cljs.core.chunk_append.call(null,b__9439,diagonals);

var G__9449 = (i__9438 + (1));
i__9438 = G__9449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9439),tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__9434_$_iter__9436.call(null,cljs.core.chunk_rest.call(null,s__9437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9439),null);
}
} else {
var diagonals = cljs.core.first.call(null,s__9437__$2);
return cljs.core.cons.call(null,diagonals,tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__9434_$_iter__9436.call(null,cljs.core.rest.call(null,s__9437__$2)));
}
} else {
return null;
}
break;
}
});})(s__9435__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9435__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,tic_tac_toe.boardc.__GT_diagonals_from_x.call(null,x)));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__9434.call(null,cljs.core.rest.call(null,s__9435__$1)));
} else {
var G__9450 = cljs.core.rest.call(null,s__9435__$1);
s__9435__$1 = G__9450;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3)));
});
tic_tac_toe.boardc.__GT_y_plane_diags = (function tic_tac_toe$boardc$__GT_y_plane_diags(){
var iter__5503__auto__ = (function tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__9443(s__9444){
return (new cljs.core.LazySeq(null,(function (){
var s__9444__$1 = s__9444;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9444__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var y = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__9444__$1,y,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__9443_$_iter__9445(s__9446){
return (new cljs.core.LazySeq(null,((function (s__9444__$1,y,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__9446__$1 = s__9446;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__9446__$1);
if(temp__5825__auto____$1){
var s__9446__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9446__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9446__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9448 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9447 = (0);
while(true){
if((i__9447 < size__5502__auto__)){
var diagonals = cljs.core._nth.call(null,c__5501__auto__,i__9447);
cljs.core.chunk_append.call(null,b__9448,diagonals);

var G__9455 = (i__9447 + (1));
i__9447 = G__9455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9448),tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__9443_$_iter__9445.call(null,cljs.core.chunk_rest.call(null,s__9446__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9448),null);
}
} else {
var diagonals = cljs.core.first.call(null,s__9446__$2);
return cljs.core.cons.call(null,diagonals,tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__9443_$_iter__9445.call(null,cljs.core.rest.call(null,s__9446__$2)));
}
} else {
return null;
}
break;
}
});})(s__9444__$1,y,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__9444__$1,y,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,tic_tac_toe.boardc.__GT_diagonals_from_y.call(null,y)));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__9443.call(null,cljs.core.rest.call(null,s__9444__$1)));
} else {
var G__9457 = cljs.core.rest.call(null,s__9444__$1);
s__9444__$1 = G__9457;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3)));
});
tic_tac_toe.boardc.__GT_all_diagonals = (function tic_tac_toe$boardc$__GT_all_diagonals(){
return cljs.core.concat.call(null,tic_tac_toe.boardc.__GT_x_plane_diags.call(null),tic_tac_toe.boardc.__GT_y_plane_diags.call(null),tic_tac_toe.boardc.center_line_diagonals);
});
tic_tac_toe.boardc.winning_row_2d_QMARK_ = (function tic_tac_toe$boardc$winning_row_2d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__9452_SHARP_){
return tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,p1__9452_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_col_2d_QMARK_ = (function tic_tac_toe$boardc$winning_col_2d_QMARK_(board,token){
var columns_as_rows = cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,board);
return tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,columns_as_rows,token);
});
tic_tac_toe.boardc.winning_row_3d_QMARK_ = (function tic_tac_toe$boardc$winning_row_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__9453_SHARP_){
return tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,p1__9453_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_col_3d_QMARK_ = (function tic_tac_toe$boardc$winning_col_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__9454_SHARP_){
return tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,p1__9454_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_diagonal_3x3_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_3x3_QMARK_(board,token){
return ((tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_right_3x3.call(null,board),token)) || (tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_left_3x3.call(null,board),token)));
});
tic_tac_toe.boardc.winning_diagonal_3d_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__9456_SHARP_){
return tic_tac_toe.boardc.winning_diagonal_3x3_QMARK_.call(null,p1__9456_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_diagonal_4x4_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_4x4_QMARK_(board,token){
return ((tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_right_4x4.call(null,board),token)) || (tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_left_4x4.call(null,board),token)));
});
tic_tac_toe.boardc.winning_diagonal_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_QMARK_(board,token,board_size){
if(cljs.core._EQ_.call(null,board_size,new cljs.core.Keyword(null,"3x3","3x3",570362544))){
return tic_tac_toe.boardc.winning_diagonal_3x3_QMARK_.call(null,board,token);
} else {
return tic_tac_toe.boardc.winning_diagonal_4x4_QMARK_.call(null,board,token);
}
});
tic_tac_toe.boardc.__GT_board_values = (function tic_tac_toe$boardc$__GT_board_values(board,line){
return cljs.core.map.call(null,(function (p1__9458_SHARP_){
return cljs.core.get_in.call(null,board,p1__9458_SHARP_);
}),line);
});
tic_tac_toe.boardc.winning_3d_line = (function tic_tac_toe$boardc$winning_3d_line(board,token,p__9459){
var vec__9460 = p__9459;
var x = cljs.core.nth.call(null,vec__9460,(0),null);
var y = cljs.core.nth.call(null,vec__9460,(1),null);
var line = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$winning_3d_line_$_iter__9463(s__9464){
return (new cljs.core.LazySeq(null,(function (){
var s__9464__$1 = s__9464;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__9464__$1);
if(temp__5825__auto__){
var s__9464__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9464__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__9464__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__9466 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__9465 = (0);
while(true){
if((i__9465 < size__5502__auto__)){
var z = cljs.core._nth.call(null,c__5501__auto__,i__9465);
cljs.core.chunk_append.call(null,b__9466,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null));

var G__9471 = (i__9465 + (1));
i__9465 = G__9471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9466),tic_tac_toe$boardc$winning_3d_line_$_iter__9463.call(null,cljs.core.chunk_rest.call(null,s__9464__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9466),null);
}
} else {
var z = cljs.core.first.call(null,s__9464__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),tic_tac_toe$boardc$winning_3d_line_$_iter__9463.call(null,cljs.core.rest.call(null,s__9464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var values = tic_tac_toe.boardc.__GT_board_values.call(null,board,line);
return tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,values,token);
});
tic_tac_toe.boardc.winning_line_3d_QMARK_ = (function tic_tac_toe$boardc$winning_line_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p__9467){
var vec__9468 = p__9467;
var x = cljs.core.nth.call(null,vec__9468,(0),null);
var y = cljs.core.nth.call(null,vec__9468,(1),null);
return tic_tac_toe.boardc.winning_3d_line.call(null,board,token,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),tic_tac_toe.boardc.all_positions_3x3);
});
tic_tac_toe.boardc.winning_diag_line = (function tic_tac_toe$boardc$winning_diag_line(board,token,line){
var values = tic_tac_toe.boardc.__GT_board_values.call(null,board,line);
return tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,values,token);
});
tic_tac_toe.boardc.winning_diag_line_3d_QMARK_ = (function tic_tac_toe$boardc$winning_diag_line_3d_QMARK_(board,token){
var all_diagonals = tic_tac_toe.boardc.__GT_all_diagonals.call(null);
return cljs.core.some.call(null,(function (line){
return tic_tac_toe.boardc.winning_diag_line.call(null,board,token,line);
}),all_diagonals);
});
tic_tac_toe.boardc.winning_3d_options = (function tic_tac_toe$boardc$winning_3d_options(board,token){
var or__5025__auto__ = tic_tac_toe.boardc.winning_row_3d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = tic_tac_toe.boardc.winning_col_3d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = tic_tac_toe.boardc.winning_line_3d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = tic_tac_toe.boardc.winning_diagonal_3d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return tic_tac_toe.boardc.winning_diag_line_3d_QMARK_.call(null,board,token);
}
}
}
}
});
tic_tac_toe.boardc.winning_2d_options = (function tic_tac_toe$boardc$winning_2d_options(board,token,board_size){
var or__5025__auto__ = tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,board,token);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return tic_tac_toe.boardc.winning_diagonal_QMARK_.call(null,board,token,board_size);
}
}
});
tic_tac_toe.boardc.win_QMARK_ = (function tic_tac_toe$boardc$win_QMARK_(board,token,board_size){
if(cljs.core._EQ_.call(null,board_size,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540))){
return tic_tac_toe.boardc.winning_3d_options.call(null,board,token);
} else {
return tic_tac_toe.boardc.winning_2d_options.call(null,board,token,board_size);
}
});
tic_tac_toe.boardc.game_over_QMARK_ = (function tic_tac_toe$boardc$game_over_QMARK_(board,token,board_size){
var or__5025__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,board,token,board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return tic_tac_toe.boardc.full_board_QMARK_.call(null,board,board_size);
}
});
tic_tac_toe.boardc.end_game_QMARK_ = (function tic_tac_toe$boardc$end_game_QMARK_(board,board_size){
var or__5025__auto__ = tic_tac_toe.boardc.win_QMARK_.call(null,board,new cljs.core.Keyword(null,"X","X",1705996313),board_size);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = tic_tac_toe.boardc.win_QMARK_.call(null,board,new cljs.core.Keyword(null,"O","O",795252742),board_size);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return tic_tac_toe.boardc.full_board_QMARK_.call(null,board,board_size);
}
}
});

//# sourceMappingURL=boardc.js.map
