// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.medium_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.medium_aic');
var description__10061__auto___36606 = speclj.components.new_description.call(null,"medium level AI",false,"tic-tac-toe.medium-aic-spec");
var _STAR_parent_description_STAR__orig_val__36468_36607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36469_36608 = description__10061__auto___36606;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36469_36608);

try{var seq__36471_36609 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"chooses rand move between easy and expert AI",false,"tic-tac-toe.medium-aic-spec");
var _STAR_parent_description_STAR__orig_val__36578_36613 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__36579_36614 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__36579_36614);

try{var seq__36580_36615 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606){
return (function (it__10435__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__36599 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__36601 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__36601);

try{return it__10435__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__36599);
}});})(_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606))
),speclj.components.new_characteristic.call(null,"returns a list of medium AI moves",((function (_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886)], null);
var actual__10204__auto__ = tic_tac_toe.medium_aic.medium_ai_moves;
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606))
,false),speclj.components.new_characteristic.call(null,"moves with expert ai",((function (_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606){
return (function (){
var medium_ai_moves_orig_val__36602 = tic_tac_toe.medium_aic.medium_ai_moves;
var medium_ai_moves_temp_val__36603 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886)], null);
(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_temp_val__36603);

try{var board = tic_tac_toe.test_boards_3x3c_spec.move_1_for_tie;
var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"medium-ai","medium-ai",-1340450475),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__10204__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_orig_val__36602);
}});})(_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606))
,false),speclj.components.new_characteristic.call(null,"moves with easy ai",((function (_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606){
return (function (){
var medium_ai_moves_orig_val__36604 = tic_tac_toe.medium_aic.medium_ai_moves;
var medium_ai_moves_temp_val__36605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720)], null);
(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_temp_val__36605);

try{var board = tic_tac_toe.test_boards_3x3c_spec.move_1_for_tie;
var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"medium-ai","medium-ai",-1340450475),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__10204__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
}finally {(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_orig_val__36604);
}});})(_STAR_parent_description_STAR__orig_val__36578_36613,_STAR_parent_description_STAR__temp_val__36579_36614,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__36468_36607,_STAR_parent_description_STAR__temp_val__36469_36608,description__10061__auto___36606))
,false)],null)));
var chunk__36581_36616 = null;
var count__36582_36617 = (0);
var i__36583_36618 = (0);
while(true){
if((i__36583_36618 < count__36582_36617)){
var component__10062__auto___36625 = cljs.core._nth.call(null,chunk__36581_36616,i__36583_36618);
speclj.components.install.call(null,component__10062__auto___36625,description__10061__auto____$1);


var G__36626 = seq__36580_36615;
var G__36627 = chunk__36581_36616;
var G__36628 = count__36582_36617;
var G__36629 = (i__36583_36618 + (1));
seq__36580_36615 = G__36626;
chunk__36581_36616 = G__36627;
count__36582_36617 = G__36628;
i__36583_36618 = G__36629;
continue;
} else {
var temp__5825__auto___36630 = cljs.core.seq.call(null,seq__36580_36615);
if(temp__5825__auto___36630){
var seq__36580_36631__$1 = temp__5825__auto___36630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36580_36631__$1)){
var c__5548__auto___36632 = cljs.core.chunk_first.call(null,seq__36580_36631__$1);
var G__36633 = cljs.core.chunk_rest.call(null,seq__36580_36631__$1);
var G__36634 = c__5548__auto___36632;
var G__36635 = cljs.core.count.call(null,c__5548__auto___36632);
var G__36636 = (0);
seq__36580_36615 = G__36633;
chunk__36581_36616 = G__36634;
count__36582_36617 = G__36635;
i__36583_36618 = G__36636;
continue;
} else {
var component__10062__auto___36637 = cljs.core.first.call(null,seq__36580_36631__$1);
speclj.components.install.call(null,component__10062__auto___36637,description__10061__auto____$1);


var G__36638 = cljs.core.next.call(null,seq__36580_36631__$1);
var G__36639 = null;
var G__36640 = (0);
var G__36641 = (0);
seq__36580_36615 = G__36638;
chunk__36581_36616 = G__36639;
count__36582_36617 = G__36640;
i__36583_36618 = G__36641;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36578_36613);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__36472_36610 = null;
var count__36473_36611 = (0);
var i__36474_36612 = (0);
while(true){
if((i__36474_36612 < count__36473_36611)){
var component__10062__auto___36642 = cljs.core._nth.call(null,chunk__36472_36610,i__36474_36612);
speclj.components.install.call(null,component__10062__auto___36642,description__10061__auto___36606);


var G__36643 = seq__36471_36609;
var G__36644 = chunk__36472_36610;
var G__36645 = count__36473_36611;
var G__36646 = (i__36474_36612 + (1));
seq__36471_36609 = G__36643;
chunk__36472_36610 = G__36644;
count__36473_36611 = G__36645;
i__36474_36612 = G__36646;
continue;
} else {
var temp__5825__auto___36647 = cljs.core.seq.call(null,seq__36471_36609);
if(temp__5825__auto___36647){
var seq__36471_36648__$1 = temp__5825__auto___36647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36471_36648__$1)){
var c__5548__auto___36649 = cljs.core.chunk_first.call(null,seq__36471_36648__$1);
var G__36650 = cljs.core.chunk_rest.call(null,seq__36471_36648__$1);
var G__36651 = c__5548__auto___36649;
var G__36652 = cljs.core.count.call(null,c__5548__auto___36649);
var G__36653 = (0);
seq__36471_36609 = G__36650;
chunk__36472_36610 = G__36651;
count__36473_36611 = G__36652;
i__36474_36612 = G__36653;
continue;
} else {
var component__10062__auto___36654 = cljs.core.first.call(null,seq__36471_36648__$1);
speclj.components.install.call(null,component__10062__auto___36654,description__10061__auto___36606);


var G__36655 = cljs.core.next.call(null,seq__36471_36648__$1);
var G__36656 = null;
var G__36657 = (0);
var G__36658 = (0);
seq__36471_36609 = G__36655;
chunk__36472_36610 = G__36656;
count__36473_36611 = G__36657;
i__36474_36612 = G__36658;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__36468_36607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___36606);
}


//# sourceMappingURL=medium_aic_spec.js.map
