// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.medium_aic_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.player_typesc');
goog.require('tic_tac_toe.test_boards_3x3c_spec');
goog.require('tic_tac_toe.medium_aic');
var description__7979__auto___30259 = speclj.components.new_description.call(null,"medium level AI",false,"tic-tac-toe.medium-aic-spec");
var _STAR_parent_description_STAR__orig_val__30217_30260 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30218_30261 = description__7979__auto___30259;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30218_30261);

try{var seq__30219_30262 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var description__7979__auto____$1 = speclj.components.new_description.call(null,"chooses rand move between easy and expert AI",false,"tic-tac-toe.medium-aic-spec");
var _STAR_parent_description_STAR__orig_val__30241_30266 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30242_30267 = description__7979__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30242_30267);

try{var seq__30243_30268 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_around.call(null,((function (_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259){
return (function (it__8353__auto__){
var _STAR_stubbed_invocations_STAR__orig_val__30253 = speclj.stub._STAR_stubbed_invocations_STAR_;
var _STAR_stubbed_invocations_STAR__temp_val__30254 = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__temp_val__30254);

try{return it__8353__auto__.call(null);
}finally {(speclj.stub._STAR_stubbed_invocations_STAR_ = _STAR_stubbed_invocations_STAR__orig_val__30253);
}});})(_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259))
),speclj.components.new_characteristic.call(null,"returns a list of medium AI moves",((function (_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886)], null);
var actual__8122__auto__ = tic_tac_toe.medium_aic.medium_ai_moves;
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
});})(_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259))
,false),speclj.components.new_characteristic.call(null,"moves with expert ai",((function (_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259){
return (function (){
var medium_ai_moves_orig_val__30255 = tic_tac_toe.medium_aic.medium_ai_moves;
var medium_ai_moves_temp_val__30256 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886)], null);
(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_temp_val__30256);

try{var board = tic_tac_toe.test_boards_3x3c_spec.move_1_for_tie;
var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"medium-ai","medium-ai",-1340450475),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8122__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
}finally {(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_orig_val__30255);
}});})(_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259))
,false),speclj.components.new_characteristic.call(null,"moves with easy ai",((function (_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259){
return (function (){
var medium_ai_moves_orig_val__30257 = tic_tac_toe.medium_aic.medium_ai_moves;
var medium_ai_moves_temp_val__30258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"easy-ai","easy-ai",-1474864720)], null);
(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_temp_val__30258);

try{var board = tic_tac_toe.test_boards_3x3c_spec.move_1_for_tie;
var state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"medium-ai","medium-ai",-1340450475),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"human","human",-772334390),new cljs.core.Keyword(null,"board","board",-1907017633),board,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"3x3","3x3",570362544)], null);
speclj.components.inc_assertions_BANG_.call(null);

var expected__8121__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var actual__8122__auto__ = tic_tac_toe.player_typesc.__GT_player_move.call(null,state);
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
}finally {(tic_tac_toe.medium_aic.medium_ai_moves = medium_ai_moves_orig_val__30257);
}});})(_STAR_parent_description_STAR__orig_val__30241_30266,_STAR_parent_description_STAR__temp_val__30242_30267,description__7979__auto____$1,_STAR_parent_description_STAR__orig_val__30217_30260,_STAR_parent_description_STAR__temp_val__30218_30261,description__7979__auto___30259))
,false)],null)));
var chunk__30244_30269 = null;
var count__30245_30270 = (0);
var i__30246_30271 = (0);
while(true){
if((i__30246_30271 < count__30245_30270)){
var component__7980__auto___30272 = cljs.core._nth.call(null,chunk__30244_30269,i__30246_30271);
speclj.components.install.call(null,component__7980__auto___30272,description__7979__auto____$1);


var G__30273 = seq__30243_30268;
var G__30274 = chunk__30244_30269;
var G__30275 = count__30245_30270;
var G__30276 = (i__30246_30271 + (1));
seq__30243_30268 = G__30273;
chunk__30244_30269 = G__30274;
count__30245_30270 = G__30275;
i__30246_30271 = G__30276;
continue;
} else {
var temp__5825__auto___30277 = cljs.core.seq.call(null,seq__30243_30268);
if(temp__5825__auto___30277){
var seq__30243_30278__$1 = temp__5825__auto___30277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243_30278__$1)){
var c__5548__auto___30279 = cljs.core.chunk_first.call(null,seq__30243_30278__$1);
var G__30280 = cljs.core.chunk_rest.call(null,seq__30243_30278__$1);
var G__30281 = c__5548__auto___30279;
var G__30282 = cljs.core.count.call(null,c__5548__auto___30279);
var G__30283 = (0);
seq__30243_30268 = G__30280;
chunk__30244_30269 = G__30281;
count__30245_30270 = G__30282;
i__30246_30271 = G__30283;
continue;
} else {
var component__7980__auto___30284 = cljs.core.first.call(null,seq__30243_30278__$1);
speclj.components.install.call(null,component__7980__auto___30284,description__7979__auto____$1);


var G__30285 = cljs.core.next.call(null,seq__30243_30278__$1);
var G__30286 = null;
var G__30287 = (0);
var G__30288 = (0);
seq__30243_30268 = G__30285;
chunk__30244_30269 = G__30286;
count__30245_30270 = G__30287;
i__30246_30271 = G__30288;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30241_30266);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto____$1);
}

return description__7979__auto____$1;
})()],null)));
var chunk__30220_30263 = null;
var count__30221_30264 = (0);
var i__30222_30265 = (0);
while(true){
if((i__30222_30265 < count__30221_30264)){
var component__7980__auto___30289 = cljs.core._nth.call(null,chunk__30220_30263,i__30222_30265);
speclj.components.install.call(null,component__7980__auto___30289,description__7979__auto___30259);


var G__30290 = seq__30219_30262;
var G__30291 = chunk__30220_30263;
var G__30292 = count__30221_30264;
var G__30293 = (i__30222_30265 + (1));
seq__30219_30262 = G__30290;
chunk__30220_30263 = G__30291;
count__30221_30264 = G__30292;
i__30222_30265 = G__30293;
continue;
} else {
var temp__5825__auto___30294 = cljs.core.seq.call(null,seq__30219_30262);
if(temp__5825__auto___30294){
var seq__30219_30295__$1 = temp__5825__auto___30294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30219_30295__$1)){
var c__5548__auto___30296 = cljs.core.chunk_first.call(null,seq__30219_30295__$1);
var G__30297 = cljs.core.chunk_rest.call(null,seq__30219_30295__$1);
var G__30298 = c__5548__auto___30296;
var G__30299 = cljs.core.count.call(null,c__5548__auto___30296);
var G__30300 = (0);
seq__30219_30262 = G__30297;
chunk__30220_30263 = G__30298;
count__30221_30264 = G__30299;
i__30222_30265 = G__30300;
continue;
} else {
var component__7980__auto___30301 = cljs.core.first.call(null,seq__30219_30295__$1);
speclj.components.install.call(null,component__7980__auto___30301,description__7979__auto___30259);


var G__30302 = cljs.core.next.call(null,seq__30219_30295__$1);
var G__30303 = null;
var G__30304 = (0);
var G__30305 = (0);
seq__30219_30262 = G__30302;
chunk__30220_30263 = G__30303;
count__30221_30264 = G__30304;
i__30222_30265 = G__30305;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30217_30260);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__7979__auto___30259);
}


//# sourceMappingURL=medium_aic_spec.js.map
