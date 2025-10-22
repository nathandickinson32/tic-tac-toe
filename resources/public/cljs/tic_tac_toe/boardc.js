// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.boardc');
goog.require('cljs.core');
tic_tac_toe.boardc.starting_board_3x3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null);
tic_tac_toe.boardc.starting_board_4x4 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3","4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","6","7","8"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","10","11","12"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15","16"], null)], null);
tic_tac_toe.boardc.starting_board_3x3x3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2","3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","5","6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","8","9"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","11","12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","14","15"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["16","17","18"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["19","20","21"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["22","23","24"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["25","26","27"], null)], null)], null);
tic_tac_toe.boardc.str_positions_3x3 = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","7","5","6","1","2"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)]);
tic_tac_toe.boardc.str_positions_4x4 = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","14","15","7","5","12","13","6","1","11","2","16","10"],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)]);
tic_tac_toe.boardc.str_positions_3x3x3 = cljs.core.PersistentHashMap.fromArrays(["9","3","22","26","4","8","14","21","20","19","17","25","15","7","5","18","12","13","27","24","6","1","11","2","16","10","23"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null)]);
tic_tac_toe.boardc.starting_nil_board = (function tic_tac_toe$boardc$starting_nil_board(board_size){
var size = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),board_size))?(3):(4));
return cljs.core.vec.call(null,cljs.core.repeat.call(null,size,cljs.core.vec.call(null,cljs.core.repeat.call(null,size,null))));
});
tic_tac_toe.boardc.determine_positions = (function tic_tac_toe$boardc$determine_positions(board_size){
var pred__36225 = cljs.core._EQ_;
var expr__36226 = board_size;
if(cljs.core.truth_(pred__36225.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),expr__36226))){
return tic_tac_toe.boardc.str_positions_3x3;
} else {
if(cljs.core.truth_(pred__36225.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723),expr__36226))){
return tic_tac_toe.boardc.str_positions_4x4;
} else {
if(cljs.core.truth_(pred__36225.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),expr__36226))){
return tic_tac_toe.boardc.str_positions_3x3x3;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36226)].join('')));
}
}
}
});
tic_tac_toe.boardc.__GT_grid_coordinates = (function tic_tac_toe$boardc$__GT_grid_coordinates(input,board_size){
var str_positions = tic_tac_toe.boardc.determine_positions.call(null,board_size);
return cljs.core.get.call(null,str_positions,input);
});
tic_tac_toe.boardc.all_positions_3x3 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__36228(s__36229){
return (new cljs.core.LazySeq(null,(function (){
var s__36229__$1 = s__36229;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36229__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__36229__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__36228_$_iter__36230(s__36231){
return (new cljs.core.LazySeq(null,((function (s__36229__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36231__$1 = s__36231;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__36231__$1);
if(temp__5825__auto____$1){
var s__36231__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36231__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36231__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36233 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36232 = (0);
while(true){
if((i__36232 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__36232);
cljs.core.chunk_append.call(null,b__36233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__36240 = (i__36232 + (1));
i__36232 = G__36240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),tic_tac_toe$boardc$iter__36228_$_iter__36230.call(null,cljs.core.chunk_rest.call(null,s__36231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36233),null);
}
} else {
var col = cljs.core.first.call(null,s__36231__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),tic_tac_toe$boardc$iter__36228_$_iter__36230.call(null,cljs.core.rest.call(null,s__36231__$2)));
}
} else {
return null;
}
break;
}
});})(s__36229__$1,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36229__$1,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__36228.call(null,cljs.core.rest.call(null,s__36229__$1)));
} else {
var G__36241 = cljs.core.rest.call(null,s__36229__$1);
s__36229__$1 = G__36241;
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
tic_tac_toe.boardc.all_positions_4x4 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__36234(s__36235){
return (new cljs.core.LazySeq(null,(function (){
var s__36235__$1 = s__36235;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36235__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var row = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__36235__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__36234_$_iter__36236(s__36237){
return (new cljs.core.LazySeq(null,((function (s__36235__$1,row,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36237__$1 = s__36237;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__36237__$1);
if(temp__5825__auto____$1){
var s__36237__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36237__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36237__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36239 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36238 = (0);
while(true){
if((i__36238 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__36238);
cljs.core.chunk_append.call(null,b__36239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));

var G__36250 = (i__36238 + (1));
i__36238 = G__36250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36239),tic_tac_toe$boardc$iter__36234_$_iter__36236.call(null,cljs.core.chunk_rest.call(null,s__36237__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36239),null);
}
} else {
var col = cljs.core.first.call(null,s__36237__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),tic_tac_toe$boardc$iter__36234_$_iter__36236.call(null,cljs.core.rest.call(null,s__36237__$2)));
}
} else {
return null;
}
break;
}
});})(s__36235__$1,row,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36235__$1,row,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(4))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__36234.call(null,cljs.core.rest.call(null,s__36235__$1)));
} else {
var G__36251 = cljs.core.rest.call(null,s__36235__$1);
s__36235__$1 = G__36251;
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
tic_tac_toe.boardc.all_positions_3x3x3 = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$iter__36242(s__36243){
return (new cljs.core.LazySeq(null,(function (){
var s__36243__$1 = s__36243;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36243__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var layer = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__36243__$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__36242_$_iter__36244(s__36245){
return (new cljs.core.LazySeq(null,((function (s__36243__$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36245__$1 = s__36245;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__36245__$1);
if(temp__5825__auto____$1){
var xs__6385__auto____$1 = temp__5825__auto____$1;
var row = cljs.core.first.call(null,xs__6385__auto____$1);
var iterys__5499__auto__ = ((function (s__36245__$1,s__36243__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$iter__36242_$_iter__36244_$_iter__36246(s__36247){
return (new cljs.core.LazySeq(null,((function (s__36245__$1,s__36243__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36247__$1 = s__36247;
while(true){
var temp__5825__auto____$2 = cljs.core.seq.call(null,s__36247__$1);
if(temp__5825__auto____$2){
var s__36247__$2 = temp__5825__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36247__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36247__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36249 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36248 = (0);
while(true){
if((i__36248 < size__5502__auto__)){
var col = cljs.core._nth.call(null,c__5501__auto__,i__36248);
cljs.core.chunk_append.call(null,b__36249,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer,row,col], null));

var G__36255 = (i__36248 + (1));
i__36248 = G__36255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36249),tic_tac_toe$boardc$iter__36242_$_iter__36244_$_iter__36246.call(null,cljs.core.chunk_rest.call(null,s__36247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36249),null);
}
} else {
var col = cljs.core.first.call(null,s__36247__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [layer,row,col], null),tic_tac_toe$boardc$iter__36242_$_iter__36244_$_iter__36246.call(null,cljs.core.rest.call(null,s__36247__$2)));
}
} else {
return null;
}
break;
}
});})(s__36245__$1,s__36243__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36245__$1,s__36243__$1,row,xs__6385__auto____$1,temp__5825__auto____$1,layer,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__36242_$_iter__36244.call(null,cljs.core.rest.call(null,s__36245__$1)));
} else {
var G__36256 = cljs.core.rest.call(null,s__36245__$1);
s__36245__$1 = G__36256;
continue;
}
} else {
return null;
}
break;
}
});})(s__36243__$1,layer,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36243__$1,layer,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$iter__36242.call(null,cljs.core.rest.call(null,s__36243__$1)));
} else {
var G__36257 = cljs.core.rest.call(null,s__36243__$1);
s__36243__$1 = G__36257;
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
var pred__36252 = cljs.core._EQ_;
var expr__36253 = board_size;
if(cljs.core.truth_(pred__36252.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544),expr__36253))){
return tic_tac_toe.boardc.all_positions_3x3;
} else {
if(cljs.core.truth_(pred__36252.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723),expr__36253))){
return tic_tac_toe.boardc.all_positions_4x4;
} else {
if(cljs.core.truth_(pred__36252.call(null,new cljs.core.Keyword(null,"3x3x3","3x3x3",1381331540),expr__36253))){
return tic_tac_toe.boardc.all_positions_3x3x3;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__36253)].join('')));
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
return cljs.core.every_QMARK_.call(null,(function (p1__36258_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),p1__36258_SHARP_);
}),cljs.core.flatten.call(null,cljs.core.mapcat.call(null,cljs.core.flatten,board)));
} else {
return cljs.core.every_QMARK_.call(null,(function (p1__36259_SHARP_){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"O","O",795252742),null,new cljs.core.Keyword(null,"X","X",1705996313),null], null), null),p1__36259_SHARP_);
}),cljs.core.flatten.call(null,board));
}
});
tic_tac_toe.boardc.all_matching_tokens_QMARK_ = (function tic_tac_toe$boardc$all_matching_tokens_QMARK_(row,token){
return cljs.core.every_QMARK_.call(null,(function (p1__36260_SHARP_){
return cljs.core._EQ_.call(null,p1__36260_SHARP_,token);
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
var iter__5503__auto__ = (function tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__36261(s__36262){
return (new cljs.core.LazySeq(null,(function (){
var s__36262__$1 = s__36262;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36262__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var x = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__36262__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__36261_$_iter__36263(s__36264){
return (new cljs.core.LazySeq(null,((function (s__36262__$1,x,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36264__$1 = s__36264;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__36264__$1);
if(temp__5825__auto____$1){
var s__36264__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36264__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36264__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36266 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36265 = (0);
while(true){
if((i__36265 < size__5502__auto__)){
var diagonals = cljs.core._nth.call(null,c__5501__auto__,i__36265);
cljs.core.chunk_append.call(null,b__36266,diagonals);

var G__36273 = (i__36265 + (1));
i__36265 = G__36273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36266),tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__36261_$_iter__36263.call(null,cljs.core.chunk_rest.call(null,s__36264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36266),null);
}
} else {
var diagonals = cljs.core.first.call(null,s__36264__$2);
return cljs.core.cons.call(null,diagonals,tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__36261_$_iter__36263.call(null,cljs.core.rest.call(null,s__36264__$2)));
}
} else {
return null;
}
break;
}
});})(s__36262__$1,x,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36262__$1,x,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,tic_tac_toe.boardc.__GT_diagonals_from_x.call(null,x)));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$__GT_x_plane_diags_$_iter__36261.call(null,cljs.core.rest.call(null,s__36262__$1)));
} else {
var G__36274 = cljs.core.rest.call(null,s__36262__$1);
s__36262__$1 = G__36274;
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
var iter__5503__auto__ = (function tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__36267(s__36268){
return (new cljs.core.LazySeq(null,(function (){
var s__36268__$1 = s__36268;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36268__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var y = cljs.core.first.call(null,xs__6385__auto__);
var iterys__5499__auto__ = ((function (s__36268__$1,y,xs__6385__auto__,temp__5825__auto__){
return (function tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__36267_$_iter__36269(s__36270){
return (new cljs.core.LazySeq(null,((function (s__36268__$1,y,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__36270__$1 = s__36270;
while(true){
var temp__5825__auto____$1 = cljs.core.seq.call(null,s__36270__$1);
if(temp__5825__auto____$1){
var s__36270__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36270__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36270__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36272 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36271 = (0);
while(true){
if((i__36271 < size__5502__auto__)){
var diagonals = cljs.core._nth.call(null,c__5501__auto__,i__36271);
cljs.core.chunk_append.call(null,b__36272,diagonals);

var G__36277 = (i__36271 + (1));
i__36271 = G__36277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36272),tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__36267_$_iter__36269.call(null,cljs.core.chunk_rest.call(null,s__36270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36272),null);
}
} else {
var diagonals = cljs.core.first.call(null,s__36270__$2);
return cljs.core.cons.call(null,diagonals,tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__36267_$_iter__36269.call(null,cljs.core.rest.call(null,s__36270__$2)));
}
} else {
return null;
}
break;
}
});})(s__36268__$1,y,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__36268__$1,y,xs__6385__auto__,temp__5825__auto__))
;
var fs__5500__auto__ = cljs.core.seq.call(null,iterys__5499__auto__.call(null,tic_tac_toe.boardc.__GT_diagonals_from_y.call(null,y)));
if(fs__5500__auto__){
return cljs.core.concat.call(null,fs__5500__auto__,tic_tac_toe$boardc$__GT_y_plane_diags_$_iter__36267.call(null,cljs.core.rest.call(null,s__36268__$1)));
} else {
var G__36279 = cljs.core.rest.call(null,s__36268__$1);
s__36268__$1 = G__36279;
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
return cljs.core.some.call(null,(function (p1__36275_SHARP_){
return tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,p1__36275_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_col_2d_QMARK_ = (function tic_tac_toe$boardc$winning_col_2d_QMARK_(board,token){
var columns_as_rows = cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,board);
return tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,columns_as_rows,token);
});
tic_tac_toe.boardc.winning_row_3d_QMARK_ = (function tic_tac_toe$boardc$winning_row_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__36276_SHARP_){
return tic_tac_toe.boardc.winning_row_2d_QMARK_.call(null,p1__36276_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_col_3d_QMARK_ = (function tic_tac_toe$boardc$winning_col_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__36278_SHARP_){
return tic_tac_toe.boardc.winning_col_2d_QMARK_.call(null,p1__36278_SHARP_,token);
}),board);
});
tic_tac_toe.boardc.winning_diagonal_3x3_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_3x3_QMARK_(board,token){
return ((tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_right_3x3.call(null,board),token)) || (tic_tac_toe.boardc.all_matching_tokens_QMARK_.call(null,tic_tac_toe.boardc.diagonal_left_3x3.call(null,board),token)));
});
tic_tac_toe.boardc.winning_diagonal_3d_QMARK_ = (function tic_tac_toe$boardc$winning_diagonal_3d_QMARK_(board,token){
return cljs.core.some.call(null,(function (p1__36280_SHARP_){
return tic_tac_toe.boardc.winning_diagonal_3x3_QMARK_.call(null,p1__36280_SHARP_,token);
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
return cljs.core.map.call(null,(function (p1__36281_SHARP_){
return cljs.core.get_in.call(null,board,p1__36281_SHARP_);
}),line);
});
tic_tac_toe.boardc.winning_3d_line = (function tic_tac_toe$boardc$winning_3d_line(board,token,p__36282){
var vec__36283 = p__36282;
var x = cljs.core.nth.call(null,vec__36283,(0),null);
var y = cljs.core.nth.call(null,vec__36283,(1),null);
var line = (function (){var iter__5503__auto__ = (function tic_tac_toe$boardc$winning_3d_line_$_iter__36286(s__36287){
return (new cljs.core.LazySeq(null,(function (){
var s__36287__$1 = s__36287;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__36287__$1);
if(temp__5825__auto__){
var s__36287__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36287__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__36287__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__36289 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__36288 = (0);
while(true){
if((i__36288 < size__5502__auto__)){
var z = cljs.core._nth.call(null,c__5501__auto__,i__36288);
cljs.core.chunk_append.call(null,b__36289,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null));

var G__36294 = (i__36288 + (1));
i__36288 = G__36294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36289),tic_tac_toe$boardc$winning_3d_line_$_iter__36286.call(null,cljs.core.chunk_rest.call(null,s__36287__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36289),null);
}
} else {
var z = cljs.core.first.call(null,s__36287__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,x,y], null),tic_tac_toe$boardc$winning_3d_line_$_iter__36286.call(null,cljs.core.rest.call(null,s__36287__$2)));
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
return cljs.core.some.call(null,(function (p__36290){
var vec__36291 = p__36290;
var x = cljs.core.nth.call(null,vec__36291,(0),null);
var y = cljs.core.nth.call(null,vec__36291,(1),null);
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
