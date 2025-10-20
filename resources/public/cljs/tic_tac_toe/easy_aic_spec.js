// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.easy_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.easy_aic');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
var description__7979__auto___28300 = speclj.components.new_description.call(null,"an Easy AI Player",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__27986_28302 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__27987_28303 = description__7979__auto___28300;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__27987_28303);

try{var seq__27989_28304 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when getting a random AI move from a 3x3 board",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__28164_28310 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28165_28311 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28165_28311);

try{var seq__28166_28313 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
var rand_nth_orig_val__28191 = cljs.core.rand_nth;
var rand_nth_temp_val__28192 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28192);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28191);
}});})(_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4",new cljs.core.Keyword(null,"X","X",1705996313),"6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),"9"], null)], null);
var rand_nth_orig_val__28209 = cljs.core.rand_nth;
var rand_nth_temp_val__28210 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28210);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28209);
}});})(_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves",((function (_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var rand_nth_orig_val__28225 = cljs.core.rand_nth;
var rand_nth_temp_val__28226 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28226);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,tic_tac_toe.test_boards_3x3c_spec.O_should_block,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28225);
}});})(_STAR_parent_description_STAR__orig_val__28164_28310,_STAR_parent_description_STAR__temp_val__28165_28311,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false)],null)));
var chunk__28167_28314 = null;
var count__28168_28315 = (0);
var i__28169_28316 = (0);
while(true){
if((i__28169_28316 < count__28168_28315)){
var component__7980__auto___28320 = cljs.core._nth.call(null,chunk__28167_28314,i__28169_28316);
speclj.components.install.call(null,component__7980__auto___28320,description__7979__auto____$1);


var G__28321 = seq__28166_28313;
var G__28322 = chunk__28167_28314;
var G__28323 = count__28168_28315;
var G__28324 = (i__28169_28316 + (1));
seq__28166_28313 = G__28321;
chunk__28167_28314 = G__28322;
count__28168_28315 = G__28323;
i__28169_28316 = G__28324;
continue;
} else {
var temp__5825__auto___28325 = cljs.core.seq.call(null,seq__28166_28313);
if(temp__5825__auto___28325){
var seq__28166_28326__$1 = temp__5825__auto___28325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28166_28326__$1)){
var c__5548__auto___28327 = cljs.core.chunk_first.call(null,seq__28166_28326__$1);
var G__28328 = cljs.core.chunk_rest.call(null,seq__28166_28326__$1);
var G__28329 = c__5548__auto___28327;
var G__28330 = cljs.core.count.call(null,c__5548__auto___28327);
var G__28331 = (0);
seq__28166_28313 = G__28328;
chunk__28167_28314 = G__28329;
count__28168_28315 = G__28330;
i__28169_28316 = G__28331;
continue;
} else {
var component__7980__auto___28332 = cljs.core.first.call(null,seq__28166_28326__$1);
speclj.components.install.call(null,component__7980__auto___28332,description__7979__auto____$1);


var G__28333 = cljs.core.next.call(null,seq__28166_28326__$1);
var G__28334 = null;
var G__28335 = (0);
var G__28336 = (0);
seq__28166_28313 = G__28333;
chunk__28167_28314 = G__28334;
count__28168_28315 = G__28335;
i__28169_28316 = G__28336;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28164_28310);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})(),(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"when getting a random AI move from a 4x4 board",false,"tic-tac-toe.easy-aic-spec");
var _STAR_parent_description_STAR__orig_val__28236_28337 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__28237_28338 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__28237_28338);

try{var seq__28239_28339 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__28271 = cljs.core.rand_nth;
var rand_nth_temp_val__28272 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28272);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28271);
}});})(_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__28280 = cljs.core.rand_nth;
var rand_nth_temp_val__28281 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28281);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28280);
}});})(_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false),speclj.components.new_characteristic.call(null,"chooses move from available moves 4x4 board",((function (_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300){
return (function (){
var test_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9",new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),"14",new cljs.core.Keyword(null,"O","O",795252742),"16"], null)], null);
var rand_nth_orig_val__28290 = cljs.core.rand_nth;
var rand_nth_temp_val__28291 = cljs.core.constantly.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
(cljs.core.rand_nth = rand_nth_temp_val__28291);

try{speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null);
var actual__8122__auto__ = tic_tac_toe.easy_aic.choose_random_move.call(null,test_board,new cljs.core.Keyword(null,"4x4","4x4",121507723));
if(cljs.core._EQ_.call(null,expected__8121__auto__,actual__8122__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__8121__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__8122__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__8089__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__8089__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(cljs.core.rand_nth = rand_nth_orig_val__28290);
}});})(_STAR_parent_description_STAR__orig_val__28236_28337,_STAR_parent_description_STAR__temp_val__28237_28338,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__27986_28302,_STAR_parent_description_STAR__temp_val__27987_28303,description__7979__auto___28300))
,false)],null)));
var chunk__28240_28340 = null;
var count__28241_28341 = (0);
var i__28242_28342 = (0);
while(true){
if((i__28242_28342 < count__28241_28341)){
var component__7980__auto___28346 = cljs.core._nth.call(null,chunk__28240_28340,i__28242_28342);
speclj.components.install.call(null,component__7980__auto___28346,description__7979__auto____$1);


var G__28347 = seq__28239_28339;
var G__28348 = chunk__28240_28340;
var G__28349 = count__28241_28341;
var G__28350 = (i__28242_28342 + (1));
seq__28239_28339 = G__28347;
chunk__28240_28340 = G__28348;
count__28241_28341 = G__28349;
i__28242_28342 = G__28350;
continue;
} else {
var temp__5825__auto___28352 = cljs.core.seq.call(null,seq__28239_28339);
if(temp__5825__auto___28352){
var seq__28239_28353__$1 = temp__5825__auto___28352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28239_28353__$1)){
var c__5548__auto___28354 = cljs.core.chunk_first.call(null,seq__28239_28353__$1);
var G__28355 = cljs.core.chunk_rest.call(null,seq__28239_28353__$1);
var G__28356 = c__5548__auto___28354;
var G__28357 = cljs.core.count.call(null,c__5548__auto___28354);
var G__28358 = (0);
seq__28239_28339 = G__28355;
chunk__28240_28340 = G__28356;
count__28241_28341 = G__28357;
i__28242_28342 = G__28358;
continue;
} else {
var component__7980__auto___28360 = cljs.core.first.call(null,seq__28239_28353__$1);
speclj.components.install.call(null,component__7980__auto___28360,description__7979__auto____$1);


var G__28363 = cljs.core.next.call(null,seq__28239_28353__$1);
var G__28364 = null;
var G__28365 = (0);
var G__28366 = (0);
seq__28239_28339 = G__28363;
chunk__28240_28340 = G__28364;
count__28241_28341 = G__28365;
i__28242_28342 = G__28366;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__28236_28337);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})()],null)));
var chunk__27990_28305 = null;
var count__27991_28306 = (0);
var i__27992_28307 = (0);
while(true){
if((i__27992_28307 < count__27991_28306)){
var component__7980__auto___28372 = cljs.core._nth.call(null,chunk__27990_28305,i__27992_28307);
speclj.components.install.call(null,component__7980__auto___28372,description__7979__auto___28300);


var G__28373 = seq__27989_28304;
var G__28374 = chunk__27990_28305;
var G__28375 = count__27991_28306;
var G__28376 = (i__27992_28307 + (1));
seq__27989_28304 = G__28373;
chunk__27990_28305 = G__28374;
count__27991_28306 = G__28375;
i__27992_28307 = G__28376;
continue;
} else {
var temp__5825__auto___28377 = cljs.core.seq.call(null,seq__27989_28304);
if(temp__5825__auto___28377){
var seq__27989_28378__$1 = temp__5825__auto___28377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27989_28378__$1)){
var c__5548__auto___28379 = cljs.core.chunk_first.call(null,seq__27989_28378__$1);
var G__28380 = cljs.core.chunk_rest.call(null,seq__27989_28378__$1);
var G__28381 = c__5548__auto___28379;
var G__28382 = cljs.core.count.call(null,c__5548__auto___28379);
var G__28383 = (0);
seq__27989_28304 = G__28380;
chunk__27990_28305 = G__28381;
count__27991_28306 = G__28382;
i__27992_28307 = G__28383;
continue;
} else {
var component__7980__auto___28384 = cljs.core.first.call(null,seq__27989_28378__$1);
speclj.components.install.call(null,component__7980__auto___28384,description__7979__auto___28300);


var G__28385 = cljs.core.next.call(null,seq__27989_28378__$1);
var G__28386 = null;
var G__28387 = (0);
var G__28388 = (0);
seq__27989_28304 = G__28385;
chunk__27990_28305 = G__28386;
count__27991_28306 = G__28387;
i__27992_28307 = G__28388;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__27986_28302);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto___28300);
}


//# sourceMappingURL=easy_aic_spec.js.map
