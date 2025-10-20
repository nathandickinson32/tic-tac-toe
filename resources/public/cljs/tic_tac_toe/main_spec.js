// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.main');
var description__10061__auto___12210 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12156_12211 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12157_12212 = description__10061__auto___12210;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12157_12212);

try{var seq__12158_12213 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
tic_tac_toe.main.reset_game.call(null);

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
),speclj.components.new_characteristic.call(null,"renders title",((function (_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
var value__10565__auto___12217 = ".container";
var node__10566__auto___12218 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___12217);
if(cljs.core.truth_(node__10566__auto___12218)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___12217;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Tic Tac Toe";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"empty board sizes",((function (_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12219 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null);
var actual__10204__auto___12220 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
if(cljs.core._EQ_.call(null,expected__10203__auto___12219,actual__10204__auto___12220)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12219;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12220;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),null))));
var actual__10204__auto__ = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
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
});})(_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"initializes app-state",((function (_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12221 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto___12222 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12221,actual__10204__auto___12222)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12221;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12222;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12223 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___12224 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12223,actual__10204__auto___12224)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12223;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12224;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12225 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10204__auto___12226 = new cljs.core.Keyword(null,"X","X",1705996313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12225,actual__10204__auto___12226)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12225;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12226;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12227 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10204__auto___12228 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12227,actual__10204__auto___12228)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12227;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12228;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12229 = (0);
var actual__10204__auto___12230 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12229,actual__10204__auto___12230)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12229;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12230;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"renders a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (9);
var actual__10204__auto__ = cljs.core.count.call(null,buttons);
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
});})(_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"handle move",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12186_12231 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12187_12232 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12187_12232);

try{var seq__12188_12233 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks token and does not allow moves on occupied squares",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12237 = "X";
var actual__10255__auto___12238 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___12238 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12237 === 'string') && (typeof actual__10255__auto___12238 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12238,expected__10254__auto___12237) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12238;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12237)) && (typeof actual__10255__auto___12238 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12237,actual__10255__auto___12238))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12238;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12238)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12238,expected__10254__auto___12237)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12238;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12238)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12237,p1__10253__10256__auto__);
}),actual__10255__auto___12238))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12237;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12238;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12237;
var b__10183__auto__ = actual__10255__auto___12238;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12239 = "X";
var actual__10255__auto___12240 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___12240 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12239 === 'string') && (typeof actual__10255__auto___12240 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12240,expected__10254__auto___12239) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12239)) && (typeof actual__10255__auto___12240 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12239,actual__10255__auto___12240))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12240)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12240,expected__10254__auto___12239)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12240)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12239,p1__10253__10256__auto__);
}),actual__10255__auto___12240))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12239;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12240;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12239;
var b__10183__auto__ = actual__10255__auto___12240;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"O","O",795252742);
var actual__10204__auto__ = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"handles multiple turns",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(2)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12241 = "X";
var actual__10255__auto___12242 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___12242 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12241 === 'string') && (typeof actual__10255__auto___12242 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12242,expected__10254__auto___12241) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12241)) && (typeof actual__10255__auto___12242 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12241,actual__10255__auto___12242))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12242)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12242,expected__10254__auto___12241)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12242)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12241,p1__10253__10256__auto__);
}),actual__10255__auto___12242))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12241;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12242;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12241;
var b__10183__auto__ = actual__10255__auto___12242;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12243 = "O";
var actual__10255__auto___12244 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(2)");
if((actual__10255__auto___12244 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12243 === 'string') && (typeof actual__10255__auto___12244 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12244,expected__10254__auto___12243) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12243)) && (typeof actual__10255__auto___12244 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12243,actual__10255__auto___12244))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12244)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12244,expected__10254__auto___12243)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12244)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12243,p1__10253__10256__auto__);
}),actual__10255__auto___12244))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12243;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12244;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12243;
var b__10183__auto__ = actual__10255__auto___12244;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "X";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(3)");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"sets winner flag",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto__ = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"sets draw flag",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(9)");

speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a win",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));

var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12245 = current_token;
var actual__10204__auto___12246 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12245,actual__10204__auto___12246)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12245;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12246;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = null;
var actual__10204__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
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
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a draw",((function (_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12247 = current_token;
var actual__10204__auto___12248 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12247,actual__10204__auto___12248)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12247;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12248;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = null;
var actual__10204__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
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
});})(_STAR_parent_description_STAR__orig_val__12186_12231,_STAR_parent_description_STAR__temp_val__12187_12232,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false)],null)));
var chunk__12189_12234 = null;
var count__12190_12235 = (0);
var i__12191_12236 = (0);
while(true){
if((i__12191_12236 < count__12190_12235)){
var component__10062__auto___12249 = cljs.core._nth.call(null,chunk__12189_12234,i__12191_12236);
speclj.components.install.call(null,component__10062__auto___12249,description__10061__auto____$1);


var G__12250 = seq__12188_12233;
var G__12251 = chunk__12189_12234;
var G__12252 = count__12190_12235;
var G__12253 = (i__12191_12236 + (1));
seq__12188_12233 = G__12250;
chunk__12189_12234 = G__12251;
count__12190_12235 = G__12252;
i__12191_12236 = G__12253;
continue;
} else {
var temp__5825__auto___12254 = cljs.core.seq.call(null,seq__12188_12233);
if(temp__5825__auto___12254){
var seq__12188_12255__$1 = temp__5825__auto___12254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12188_12255__$1)){
var c__5548__auto___12256 = cljs.core.chunk_first.call(null,seq__12188_12255__$1);
var G__12257 = cljs.core.chunk_rest.call(null,seq__12188_12255__$1);
var G__12258 = c__5548__auto___12256;
var G__12259 = cljs.core.count.call(null,c__5548__auto___12256);
var G__12260 = (0);
seq__12188_12233 = G__12257;
chunk__12189_12234 = G__12258;
count__12190_12235 = G__12259;
i__12191_12236 = G__12260;
continue;
} else {
var component__10062__auto___12261 = cljs.core.first.call(null,seq__12188_12255__$1);
speclj.components.install.call(null,component__10062__auto___12261,description__10061__auto____$1);


var G__12262 = cljs.core.next.call(null,seq__12188_12255__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12188_12233 = G__12262;
chunk__12189_12234 = G__12263;
count__12190_12235 = G__12264;
i__12191_12236 = G__12265;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12186_12231);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"status message",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12192_12266 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12193_12267 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12193_12267);

try{var seq__12194_12268 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"status message for current turn",((function (_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12272 = "Turn: :X";
var actual__10255__auto___12273 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto___12273 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12272;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12272 === 'string') && (typeof actual__10255__auto___12273 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12273,expected__10254__auto___12272) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12272;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12273;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12272)) && (typeof actual__10255__auto___12273 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12272,actual__10255__auto___12273))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12273;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12272;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12273)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12273,expected__10254__auto___12272)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12272;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12273;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12273)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12272,p1__10253__10256__auto__);
}),actual__10255__auto___12273))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12272;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12273;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12272;
var b__10183__auto__ = actual__10255__auto___12273;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"O","O",795252742));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Turn: :O";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"displays winner message",((function (_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Winner: :X";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"displays draw message",((function (_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Draw!";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12192_12266,_STAR_parent_description_STAR__temp_val__12193_12267,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false)],null)));
var chunk__12195_12269 = null;
var count__12196_12270 = (0);
var i__12197_12271 = (0);
while(true){
if((i__12197_12271 < count__12196_12270)){
var component__10062__auto___12274 = cljs.core._nth.call(null,chunk__12195_12269,i__12197_12271);
speclj.components.install.call(null,component__10062__auto___12274,description__10061__auto____$1);


var G__12275 = seq__12194_12268;
var G__12276 = chunk__12195_12269;
var G__12277 = count__12196_12270;
var G__12278 = (i__12197_12271 + (1));
seq__12194_12268 = G__12275;
chunk__12195_12269 = G__12276;
count__12196_12270 = G__12277;
i__12197_12271 = G__12278;
continue;
} else {
var temp__5825__auto___12279 = cljs.core.seq.call(null,seq__12194_12268);
if(temp__5825__auto___12279){
var seq__12194_12280__$1 = temp__5825__auto___12279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12194_12280__$1)){
var c__5548__auto___12281 = cljs.core.chunk_first.call(null,seq__12194_12280__$1);
var G__12282 = cljs.core.chunk_rest.call(null,seq__12194_12280__$1);
var G__12283 = c__5548__auto___12281;
var G__12284 = cljs.core.count.call(null,c__5548__auto___12281);
var G__12285 = (0);
seq__12194_12268 = G__12282;
chunk__12195_12269 = G__12283;
count__12196_12270 = G__12284;
i__12197_12271 = G__12285;
continue;
} else {
var component__10062__auto___12286 = cljs.core.first.call(null,seq__12194_12280__$1);
speclj.components.install.call(null,component__10062__auto___12286,description__10061__auto____$1);


var G__12287 = cljs.core.next.call(null,seq__12194_12280__$1);
var G__12288 = null;
var G__12289 = (0);
var G__12290 = (0);
seq__12194_12268 = G__12287;
chunk__12195_12269 = G__12288;
count__12196_12270 = G__12289;
i__12197_12271 = G__12290;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12192_12266);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"reset",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12198_12291 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12199_12292 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12199_12292);

try{var seq__12200_12293 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"reset button",((function (_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
var value__10565__auto___12297 = ".reset";
var node__10566__auto___12298 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___12297);
if(cljs.core.truth_(node__10566__auto___12298)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___12297;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = "Reset";
var actual__10204__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".reset");
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
});})(_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"resets game",((function (_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.click_BANG_.call(null,".reset");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12299 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___12300 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12299,actual__10204__auto___12300)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12299;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12300;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12301 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___12302 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12301,actual__10204__auto___12302)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12301;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12302;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12303 = (0);
var actual__10204__auto___12304 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12303,actual__10204__auto___12304)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12303;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12304;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12305 = null;
var actual__10204__auto___12306 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12305,actual__10204__auto___12306)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12305;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12306;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10197__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"resets to 4x4 board",((function (_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));

tic_tac_toe.main.handle_move.call(null,(0),(0));

tic_tac_toe.main.reset_game.call(null);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12307 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10204__auto___12308 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12307,actual__10204__auto___12308)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12307;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12308;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12309 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___12310 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12309,actual__10204__auto___12310)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12309;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12310;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10204__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"resets to 3x3 board",((function (_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12311 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___12312 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12311,actual__10204__auto___12312)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12311;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12312;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12313 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___12314 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12313,actual__10204__auto___12314)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12313;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12314;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12198_12291,_STAR_parent_description_STAR__temp_val__12199_12292,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false)],null)));
var chunk__12201_12294 = null;
var count__12202_12295 = (0);
var i__12203_12296 = (0);
while(true){
if((i__12203_12296 < count__12202_12295)){
var component__10062__auto___12315 = cljs.core._nth.call(null,chunk__12201_12294,i__12203_12296);
speclj.components.install.call(null,component__10062__auto___12315,description__10061__auto____$1);


var G__12316 = seq__12200_12293;
var G__12317 = chunk__12201_12294;
var G__12318 = count__12202_12295;
var G__12319 = (i__12203_12296 + (1));
seq__12200_12293 = G__12316;
chunk__12201_12294 = G__12317;
count__12202_12295 = G__12318;
i__12203_12296 = G__12319;
continue;
} else {
var temp__5825__auto___12320 = cljs.core.seq.call(null,seq__12200_12293);
if(temp__5825__auto___12320){
var seq__12200_12321__$1 = temp__5825__auto___12320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12200_12321__$1)){
var c__5548__auto___12322 = cljs.core.chunk_first.call(null,seq__12200_12321__$1);
var G__12323 = cljs.core.chunk_rest.call(null,seq__12200_12321__$1);
var G__12324 = c__5548__auto___12322;
var G__12325 = cljs.core.count.call(null,c__5548__auto___12322);
var G__12326 = (0);
seq__12200_12293 = G__12323;
chunk__12201_12294 = G__12324;
count__12202_12295 = G__12325;
i__12203_12296 = G__12326;
continue;
} else {
var component__10062__auto___12327 = cljs.core.first.call(null,seq__12200_12321__$1);
speclj.components.install.call(null,component__10062__auto___12327,description__10061__auto____$1);


var G__12328 = cljs.core.next.call(null,seq__12200_12321__$1);
var G__12329 = null;
var G__12330 = (0);
var G__12331 = (0);
seq__12200_12293 = G__12328;
chunk__12201_12294 = G__12329;
count__12202_12295 = G__12330;
i__12203_12296 = G__12331;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12198_12291);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"board size selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12204_12332 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12205_12333 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12205_12333);

try{var seq__12206_12334 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
),speclj.components.new_characteristic.call(null,"renders 3x3 and 4x4 buttons",((function (_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
var value__10565__auto___12338 = ".container";
var node__10566__auto___12339 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___12338);
if(cljs.core.truth_(node__10566__auto___12339)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___12338;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12340 = "Board Size: ";
var actual__10255__auto___12341 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto___12341 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12340 === 'string') && (typeof actual__10255__auto___12341 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12341,expected__10254__auto___12340) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12340)) && (typeof actual__10255__auto___12341 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12340,actual__10255__auto___12341))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12341)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12341,expected__10254__auto___12340)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12341)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12340,p1__10253__10256__auto__);
}),actual__10255__auto___12341))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12340;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12341;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12340;
var b__10183__auto__ = actual__10255__auto___12341;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___12342 = "3x3";
var actual__10255__auto___12343 = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(1)");
if((actual__10255__auto___12343 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___12342 === 'string') && (typeof actual__10255__auto___12343 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___12343,expected__10254__auto___12342) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12343;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___12342)) && (typeof actual__10255__auto___12343 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___12342,actual__10255__auto___12343))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___12343;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___12342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___12343)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___12343,expected__10254__auto___12342)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12343;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___12343)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___12342,p1__10253__10256__auto__);
}),actual__10255__auto___12343))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___12342;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___12343;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___12342;
var b__10183__auto__ = actual__10255__auto___12343;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "4x4";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(2)");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"clicking 4x4 button changes board size",((function (_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(2)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12344 = (16);
var actual__10204__auto___12345 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10203__auto___12344,actual__10204__auto___12345)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12344;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12345;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12346 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10204__auto___12347 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12346,actual__10204__auto___12347)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12346;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12347;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12348 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10204__auto___12349 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12348,actual__10204__auto___12349)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12348;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12349;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));

c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(1)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12350 = (9);
var actual__10204__auto___12351 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10203__auto___12350,actual__10204__auto___12351)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12350;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12351;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12352 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto___12353 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12352,actual__10204__auto___12353)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12352;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12353;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___12354 = tic_tac_toe.main.empty_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___12355 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___12354,actual__10204__auto___12355)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___12354;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___12355;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.app_state));
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
});})(_STAR_parent_description_STAR__orig_val__12204_12332,_STAR_parent_description_STAR__temp_val__12205_12333,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__12156_12211,_STAR_parent_description_STAR__temp_val__12157_12212,description__10061__auto___12210))
,false)],null)));
var chunk__12207_12335 = null;
var count__12208_12336 = (0);
var i__12209_12337 = (0);
while(true){
if((i__12209_12337 < count__12208_12336)){
var component__10062__auto___12356 = cljs.core._nth.call(null,chunk__12207_12335,i__12209_12337);
speclj.components.install.call(null,component__10062__auto___12356,description__10061__auto____$1);


var G__12357 = seq__12206_12334;
var G__12358 = chunk__12207_12335;
var G__12359 = count__12208_12336;
var G__12360 = (i__12209_12337 + (1));
seq__12206_12334 = G__12357;
chunk__12207_12335 = G__12358;
count__12208_12336 = G__12359;
i__12209_12337 = G__12360;
continue;
} else {
var temp__5825__auto___12361 = cljs.core.seq.call(null,seq__12206_12334);
if(temp__5825__auto___12361){
var seq__12206_12362__$1 = temp__5825__auto___12361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12206_12362__$1)){
var c__5548__auto___12363 = cljs.core.chunk_first.call(null,seq__12206_12362__$1);
var G__12364 = cljs.core.chunk_rest.call(null,seq__12206_12362__$1);
var G__12365 = c__5548__auto___12363;
var G__12366 = cljs.core.count.call(null,c__5548__auto___12363);
var G__12367 = (0);
seq__12206_12334 = G__12364;
chunk__12207_12335 = G__12365;
count__12208_12336 = G__12366;
i__12209_12337 = G__12367;
continue;
} else {
var component__10062__auto___12368 = cljs.core.first.call(null,seq__12206_12362__$1);
speclj.components.install.call(null,component__10062__auto___12368,description__10061__auto____$1);


var G__12369 = cljs.core.next.call(null,seq__12206_12362__$1);
var G__12370 = null;
var G__12371 = (0);
var G__12372 = (0);
seq__12206_12334 = G__12369;
chunk__12207_12335 = G__12370;
count__12208_12336 = G__12371;
i__12209_12337 = G__12372;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12204_12332);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__12159_12214 = null;
var count__12160_12215 = (0);
var i__12161_12216 = (0);
while(true){
if((i__12161_12216 < count__12160_12215)){
var component__10062__auto___12373 = cljs.core._nth.call(null,chunk__12159_12214,i__12161_12216);
speclj.components.install.call(null,component__10062__auto___12373,description__10061__auto___12210);


var G__12374 = seq__12158_12213;
var G__12375 = chunk__12159_12214;
var G__12376 = count__12160_12215;
var G__12377 = (i__12161_12216 + (1));
seq__12158_12213 = G__12374;
chunk__12159_12214 = G__12375;
count__12160_12215 = G__12376;
i__12161_12216 = G__12377;
continue;
} else {
var temp__5825__auto___12378 = cljs.core.seq.call(null,seq__12158_12213);
if(temp__5825__auto___12378){
var seq__12158_12379__$1 = temp__5825__auto___12378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12158_12379__$1)){
var c__5548__auto___12380 = cljs.core.chunk_first.call(null,seq__12158_12379__$1);
var G__12381 = cljs.core.chunk_rest.call(null,seq__12158_12379__$1);
var G__12382 = c__5548__auto___12380;
var G__12383 = cljs.core.count.call(null,c__5548__auto___12380);
var G__12384 = (0);
seq__12158_12213 = G__12381;
chunk__12159_12214 = G__12382;
count__12160_12215 = G__12383;
i__12161_12216 = G__12384;
continue;
} else {
var component__10062__auto___12385 = cljs.core.first.call(null,seq__12158_12379__$1);
speclj.components.install.call(null,component__10062__auto___12385,description__10061__auto___12210);


var G__12386 = cljs.core.next.call(null,seq__12158_12379__$1);
var G__12387 = null;
var G__12388 = (0);
var G__12389 = (0);
seq__12158_12213 = G__12386;
chunk__12159_12214 = G__12387;
count__12160_12215 = G__12388;
i__12161_12216 = G__12389;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12156_12211);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___12210);
}


//# sourceMappingURL=main_spec.js.map
