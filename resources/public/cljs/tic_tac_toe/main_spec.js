// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.boardc');
var description__10057__auto___10682 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10614_10683 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10615_10684 = description__10057__auto___10682;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10615_10684);

try{var seq__10618_10685 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
tic_tac_toe.main.reset_game_BANG_.call(null);

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
),speclj.components.new_characteristic.call(null,"renders title",((function (_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var value__10561__auto___10689 = ".container";
var node__10562__auto___10690 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10689);
if(cljs.core.truth_(node__10562__auto___10690)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10689;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "Tic Tac Toe";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"initializes app-state",((function (_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10691 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10200__auto___10692 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10691,actual__10200__auto___10692)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10691;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10692;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10693 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___10694 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10693,actual__10200__auto___10694)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10693;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10694;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10695 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___10696 = new cljs.core.Keyword(null,"X","X",1705996313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10695,actual__10200__auto___10696)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10695;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10696;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10697 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___10698 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10697,actual__10200__auto___10698)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10697;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10698;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10699 = (0);
var actual__10200__auto___10700 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10699,actual__10200__auto___10700)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10699;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10700;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"renders a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = (9);
var actual__10200__auto__ = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"handle move",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10652_10701 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10653_10702 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10653_10702);

try{var seq__10654_10703 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks token and does not allow moves on occupied squares",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10707 = "X";
var actual__10251__auto___10708 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___10708 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10707;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10707 === 'string') && (typeof actual__10251__auto___10708 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10708,expected__10250__auto___10707) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10707;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10708;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10707)) && (typeof actual__10251__auto___10708 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10707,actual__10251__auto___10708))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10708;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10707;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10708)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10708,expected__10250__auto___10707)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10707;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10708;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10708)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10707,p1__10249__10252__auto__);
}),actual__10251__auto___10708))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10707;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10708;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10707;
var b__10179__auto__ = actual__10251__auto___10708;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10709 = "X";
var actual__10251__auto___10710 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___10710 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10709;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10709 === 'string') && (typeof actual__10251__auto___10710 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10710,expected__10250__auto___10709) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10709;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10710;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10709)) && (typeof actual__10251__auto___10710 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10709,actual__10251__auto___10710))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10710;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10709;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10710)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10710,expected__10250__auto___10709)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10709;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10710;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10710)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10709,p1__10249__10252__auto__);
}),actual__10251__auto___10710))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10709;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10710;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10709;
var b__10179__auto__ = actual__10251__auto___10710;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = new cljs.core.Keyword(null,"O","O",795252742);
var actual__10200__auto__ = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"handles multiple turns",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(2)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10711 = "X";
var actual__10251__auto___10712 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___10712 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10711;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10711 === 'string') && (typeof actual__10251__auto___10712 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10712,expected__10250__auto___10711) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10711;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10712;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10711)) && (typeof actual__10251__auto___10712 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10711,actual__10251__auto___10712))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10712;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10711;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10712)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10712,expected__10250__auto___10711)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10711;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10712;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10712)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10711,p1__10249__10252__auto__);
}),actual__10251__auto___10712))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10711;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10712;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10711;
var b__10179__auto__ = actual__10251__auto___10712;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10713 = "O";
var actual__10251__auto___10714 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(2)");
if((actual__10251__auto___10714 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10713;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10713 === 'string') && (typeof actual__10251__auto___10714 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10714,expected__10250__auto___10713) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10713;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10714;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10713)) && (typeof actual__10251__auto___10714 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10713,actual__10251__auto___10714))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10714;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10713;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10714)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10714,expected__10250__auto___10713)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10713;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10714;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10714)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10713,p1__10249__10252__auto__);
}),actual__10251__auto___10714))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10713;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10714;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10713;
var b__10179__auto__ = actual__10251__auto___10714;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "X";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(3)");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"sets winner flag",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto__ = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"sets draw flag",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(9)");

speclj.components.inc_assertions_BANG_.call(null);

var value__10187__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core.truth_(value__10187__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10187__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a win",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var state = cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));
var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10715 = current_token;
var actual__10200__auto___10716 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,expected__10199__auto___10715,actual__10200__auto___10716)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10715;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10716;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = null;
var actual__10200__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a draw",((function (_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10717 = current_token;
var actual__10200__auto___10718 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10717,actual__10200__auto___10718)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10717;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10718;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = null;
var actual__10200__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10652_10701,_STAR_parent_description_STAR__temp_val__10653_10702,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false)],null)));
var chunk__10655_10704 = null;
var count__10656_10705 = (0);
var i__10657_10706 = (0);
while(true){
if((i__10657_10706 < count__10656_10705)){
var component__10058__auto___10719 = cljs.core._nth.call(null,chunk__10655_10704,i__10657_10706);
speclj.components.install.call(null,component__10058__auto___10719,description__10057__auto____$1);


var G__10720 = seq__10654_10703;
var G__10721 = chunk__10655_10704;
var G__10722 = count__10656_10705;
var G__10723 = (i__10657_10706 + (1));
seq__10654_10703 = G__10720;
chunk__10655_10704 = G__10721;
count__10656_10705 = G__10722;
i__10657_10706 = G__10723;
continue;
} else {
var temp__5825__auto___10724 = cljs.core.seq.call(null,seq__10654_10703);
if(temp__5825__auto___10724){
var seq__10654_10725__$1 = temp__5825__auto___10724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10654_10725__$1)){
var c__5548__auto___10726 = cljs.core.chunk_first.call(null,seq__10654_10725__$1);
var G__10727 = cljs.core.chunk_rest.call(null,seq__10654_10725__$1);
var G__10728 = c__5548__auto___10726;
var G__10729 = cljs.core.count.call(null,c__5548__auto___10726);
var G__10730 = (0);
seq__10654_10703 = G__10727;
chunk__10655_10704 = G__10728;
count__10656_10705 = G__10729;
i__10657_10706 = G__10730;
continue;
} else {
var component__10058__auto___10731 = cljs.core.first.call(null,seq__10654_10725__$1);
speclj.components.install.call(null,component__10058__auto___10731,description__10057__auto____$1);


var G__10732 = cljs.core.next.call(null,seq__10654_10725__$1);
var G__10733 = null;
var G__10734 = (0);
var G__10735 = (0);
seq__10654_10703 = G__10732;
chunk__10655_10704 = G__10733;
count__10656_10705 = G__10734;
i__10657_10706 = G__10735;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10652_10701);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"status message",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10658_10736 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10659_10737 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10659_10737);

try{var seq__10660_10738 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"status message for current turn",((function (_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10742 = "Turn: :X";
var actual__10251__auto___10743 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___10743 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10742 === 'string') && (typeof actual__10251__auto___10743 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10743,expected__10250__auto___10742) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10743;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10742)) && (typeof actual__10251__auto___10743 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10742,actual__10251__auto___10743))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10743;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10743)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10743,expected__10250__auto___10742)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10743;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10743)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10742,p1__10249__10252__auto__);
}),actual__10251__auto___10743))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10742;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10743;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10742;
var b__10179__auto__ = actual__10251__auto___10743;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"O","O",795252742));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "Turn: :O";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"displays winner message",((function (_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "Winner: :X";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"displays draw message",((function (_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "Draw!";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10658_10736,_STAR_parent_description_STAR__temp_val__10659_10737,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false)],null)));
var chunk__10661_10739 = null;
var count__10662_10740 = (0);
var i__10663_10741 = (0);
while(true){
if((i__10663_10741 < count__10662_10740)){
var component__10058__auto___10744 = cljs.core._nth.call(null,chunk__10661_10739,i__10663_10741);
speclj.components.install.call(null,component__10058__auto___10744,description__10057__auto____$1);


var G__10745 = seq__10660_10738;
var G__10746 = chunk__10661_10739;
var G__10747 = count__10662_10740;
var G__10748 = (i__10663_10741 + (1));
seq__10660_10738 = G__10745;
chunk__10661_10739 = G__10746;
count__10662_10740 = G__10747;
i__10663_10741 = G__10748;
continue;
} else {
var temp__5825__auto___10749 = cljs.core.seq.call(null,seq__10660_10738);
if(temp__5825__auto___10749){
var seq__10660_10750__$1 = temp__5825__auto___10749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10660_10750__$1)){
var c__5548__auto___10751 = cljs.core.chunk_first.call(null,seq__10660_10750__$1);
var G__10752 = cljs.core.chunk_rest.call(null,seq__10660_10750__$1);
var G__10753 = c__5548__auto___10751;
var G__10754 = cljs.core.count.call(null,c__5548__auto___10751);
var G__10755 = (0);
seq__10660_10738 = G__10752;
chunk__10661_10739 = G__10753;
count__10662_10740 = G__10754;
i__10663_10741 = G__10755;
continue;
} else {
var component__10058__auto___10756 = cljs.core.first.call(null,seq__10660_10750__$1);
speclj.components.install.call(null,component__10058__auto___10756,description__10057__auto____$1);


var G__10757 = cljs.core.next.call(null,seq__10660_10750__$1);
var G__10758 = null;
var G__10759 = (0);
var G__10760 = (0);
seq__10660_10738 = G__10757;
chunk__10661_10739 = G__10758;
count__10662_10740 = G__10759;
i__10663_10741 = G__10760;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10658_10736);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"reset",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10664_10761 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10665_10762 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10665_10762);

try{var seq__10666_10763 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"reset button",((function (_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var value__10561__auto___10767 = ".reset";
var node__10562__auto___10768 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10767);
if(cljs.core.truth_(node__10562__auto___10768)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10767;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = "Reset";
var actual__10200__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".reset");
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"resets game",((function (_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.click_BANG_.call(null,".reset");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10769 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___10770 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10769,actual__10200__auto___10770)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10769;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10770;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10771 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___10772 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10771,actual__10200__auto___10772)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10771;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10772;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10773 = (0);
var actual__10200__auto___10774 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10773,actual__10200__auto___10774)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10773;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10774;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10775 = null;
var actual__10200__auto___10776 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10775,actual__10200__auto___10776)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10775;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10776;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10193__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10193__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"resets to 4x4 board",((function (_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));

tic_tac_toe.main.handle_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

tic_tac_toe.main.reset_game_BANG_.call(null);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10777 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10200__auto___10778 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10777,actual__10200__auto___10778)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10777;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10778;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10779 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___10780 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10779,actual__10200__auto___10780)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10779;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10780;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10200__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"resets to 3x3 board",((function (_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10781 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___10782 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10781,actual__10200__auto___10782)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10781;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10782;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10783 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___10784 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10783,actual__10200__auto___10784)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10783;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10200__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10664_10761,_STAR_parent_description_STAR__temp_val__10665_10762,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false)],null)));
var chunk__10667_10764 = null;
var count__10668_10765 = (0);
var i__10669_10766 = (0);
while(true){
if((i__10669_10766 < count__10668_10765)){
var component__10058__auto___10785 = cljs.core._nth.call(null,chunk__10667_10764,i__10669_10766);
speclj.components.install.call(null,component__10058__auto___10785,description__10057__auto____$1);


var G__10786 = seq__10666_10763;
var G__10787 = chunk__10667_10764;
var G__10788 = count__10668_10765;
var G__10789 = (i__10669_10766 + (1));
seq__10666_10763 = G__10786;
chunk__10667_10764 = G__10787;
count__10668_10765 = G__10788;
i__10669_10766 = G__10789;
continue;
} else {
var temp__5825__auto___10790 = cljs.core.seq.call(null,seq__10666_10763);
if(temp__5825__auto___10790){
var seq__10666_10791__$1 = temp__5825__auto___10790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10666_10791__$1)){
var c__5548__auto___10792 = cljs.core.chunk_first.call(null,seq__10666_10791__$1);
var G__10793 = cljs.core.chunk_rest.call(null,seq__10666_10791__$1);
var G__10794 = c__5548__auto___10792;
var G__10795 = cljs.core.count.call(null,c__5548__auto___10792);
var G__10796 = (0);
seq__10666_10763 = G__10793;
chunk__10667_10764 = G__10794;
count__10668_10765 = G__10795;
i__10669_10766 = G__10796;
continue;
} else {
var component__10058__auto___10797 = cljs.core.first.call(null,seq__10666_10791__$1);
speclj.components.install.call(null,component__10058__auto___10797,description__10057__auto____$1);


var G__10798 = cljs.core.next.call(null,seq__10666_10791__$1);
var G__10799 = null;
var G__10800 = (0);
var G__10801 = (0);
seq__10666_10763 = G__10798;
chunk__10667_10764 = G__10799;
count__10668_10765 = G__10800;
i__10669_10766 = G__10801;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10664_10761);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"board size selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10670_10802 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10671_10803 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10671_10803);

try{var seq__10672_10804 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
),speclj.components.new_characteristic.call(null,"renders 3x3 and 4x4 buttons",((function (_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var value__10561__auto___10808 = ".container";
var node__10562__auto___10809 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10808);
if(cljs.core.truth_(node__10562__auto___10809)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10808;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10810 = "Board Size: ";
var actual__10251__auto___10811 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___10811 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10810 === 'string') && (typeof actual__10251__auto___10811 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10811,expected__10250__auto___10810) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10810)) && (typeof actual__10251__auto___10811 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10810,actual__10251__auto___10811))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10811)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10811,expected__10250__auto___10810)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10811)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10810,p1__10249__10252__auto__);
}),actual__10251__auto___10811))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10810;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10811;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10810;
var b__10179__auto__ = actual__10251__auto___10811;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10812 = "3x3";
var actual__10251__auto___10813 = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(1)");
if((actual__10251__auto___10813 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10812 === 'string') && (typeof actual__10251__auto___10813 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10813,expected__10250__auto___10812) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10812)) && (typeof actual__10251__auto___10813 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10812,actual__10251__auto___10813))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10813)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10813,expected__10250__auto___10812)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10813)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10812,p1__10249__10252__auto__);
}),actual__10251__auto___10813))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10812;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10813;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10812;
var b__10179__auto__ = actual__10251__auto___10813;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "4x4";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(2)");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"clicking 4x4 button changes board size",((function (_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(2)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10814 = (16);
var actual__10200__auto___10815 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10199__auto___10814,actual__10200__auto___10815)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10814;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10815;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10816 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10200__auto___10817 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10816,actual__10200__auto___10817)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10816;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10817;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10818 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10200__auto___10819 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10818,actual__10200__auto___10819)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10818;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = (0);
var actual__10200__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));

c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(1)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10820 = (9);
var actual__10200__auto___10821 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10199__auto___10820,actual__10200__auto___10821)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10821;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10822 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10200__auto___10823 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10822,actual__10200__auto___10823)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10822;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10823;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10824 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___10825 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10824,actual__10200__auto___10825)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10824;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10825;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = (0);
var actual__10200__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10670_10802,_STAR_parent_description_STAR__temp_val__10671_10803,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false)],null)));
var chunk__10673_10805 = null;
var count__10674_10806 = (0);
var i__10675_10807 = (0);
while(true){
if((i__10675_10807 < count__10674_10806)){
var component__10058__auto___10826 = cljs.core._nth.call(null,chunk__10673_10805,i__10675_10807);
speclj.components.install.call(null,component__10058__auto___10826,description__10057__auto____$1);


var G__10827 = seq__10672_10804;
var G__10828 = chunk__10673_10805;
var G__10829 = count__10674_10806;
var G__10830 = (i__10675_10807 + (1));
seq__10672_10804 = G__10827;
chunk__10673_10805 = G__10828;
count__10674_10806 = G__10829;
i__10675_10807 = G__10830;
continue;
} else {
var temp__5825__auto___10831 = cljs.core.seq.call(null,seq__10672_10804);
if(temp__5825__auto___10831){
var seq__10672_10832__$1 = temp__5825__auto___10831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10672_10832__$1)){
var c__5548__auto___10833 = cljs.core.chunk_first.call(null,seq__10672_10832__$1);
var G__10834 = cljs.core.chunk_rest.call(null,seq__10672_10832__$1);
var G__10835 = c__5548__auto___10833;
var G__10836 = cljs.core.count.call(null,c__5548__auto___10833);
var G__10837 = (0);
seq__10672_10804 = G__10834;
chunk__10673_10805 = G__10835;
count__10674_10806 = G__10836;
i__10675_10807 = G__10837;
continue;
} else {
var component__10058__auto___10838 = cljs.core.first.call(null,seq__10672_10832__$1);
speclj.components.install.call(null,component__10058__auto___10838,description__10057__auto____$1);


var G__10839 = cljs.core.next.call(null,seq__10672_10832__$1);
var G__10840 = null;
var G__10841 = (0);
var G__10842 = (0);
seq__10672_10804 = G__10839;
chunk__10673_10805 = G__10840;
count__10674_10806 = G__10841;
i__10675_10807 = G__10842;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10670_10802);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"Player selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__10676_10843 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__10677_10844 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__10677_10844);

try{var seq__10678_10845 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
),speclj.components.new_characteristic.call(null,"renders human and Expert AI buttons",((function (_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
var value__10561__auto___10849 = ".container";
var node__10562__auto___10850 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___10849);
if(cljs.core.truth_(node__10562__auto___10850)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___10849;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10851 = "Player O: ";
var actual__10251__auto___10852 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___10852 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10851 === 'string') && (typeof actual__10251__auto___10852 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10852,expected__10250__auto___10851) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10851)) && (typeof actual__10251__auto___10852 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10851,actual__10251__auto___10852))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10852)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10852,expected__10250__auto___10851)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10852)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10851,p1__10249__10252__auto__);
}),actual__10251__auto___10852))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10851;
var b__10179__auto__ = actual__10251__auto___10852;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10853 = "Human";
var actual__10251__auto___10854 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.human");
if((actual__10251__auto___10854 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10853 === 'string') && (typeof actual__10251__auto___10854 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10854,expected__10250__auto___10853) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10853)) && (typeof actual__10251__auto___10854 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10853,actual__10251__auto___10854))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10854)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10854,expected__10250__auto___10853)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10854)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10853,p1__10249__10252__auto__);
}),actual__10251__auto___10854))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10853;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10853;
var b__10179__auto__ = actual__10251__auto___10854;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "Expert AI";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.ai");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"clicking expert AI button changes player O",((function (_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10855 = new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886);
var actual__10200__auto___10856 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10855,actual__10200__auto___10856)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10855;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10856;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = (0);
var actual__10200__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___10857 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___10858 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___10857,actual__10200__auto___10858)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___10857;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___10858;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto__ = (0);
var actual__10200__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto__,actual__10200__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false),speclj.components.new_characteristic.call(null,"Expert AI move after human move",((function (_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___10859 = "X";
var actual__10251__auto___10860 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___10860 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___10859 === 'string') && (typeof actual__10251__auto___10860 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___10860,expected__10250__auto___10859) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___10859)) && (typeof actual__10251__auto___10860 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___10859,actual__10251__auto___10860))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___10860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___10860)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___10860,expected__10250__auto___10859)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___10860)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___10859,p1__10249__10252__auto__);
}),actual__10251__auto___10860))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___10859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___10860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___10859;
var b__10179__auto__ = actual__10251__auto___10860;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto__ = "O";
var actual__10251__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(5)");
if((actual__10251__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto__ === 'string') && (typeof actual__10251__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto__,expected__10250__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto__)) && (typeof actual__10251__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto__,actual__10251__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto__,expected__10250__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto__,p1__10249__10252__auto__);
}),actual__10251__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto__;
var b__10179__auto__ = actual__10251__auto__;
var type_a__10180__auto__ = (((a__10178__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10178__auto__)));
var type_b__10181__auto__ = (((b__10179__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10179__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10180__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10181__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__10676_10843,_STAR_parent_description_STAR__temp_val__10677_10844,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__10614_10683,_STAR_parent_description_STAR__temp_val__10615_10684,description__10057__auto___10682))
,false)],null)));
var chunk__10679_10846 = null;
var count__10680_10847 = (0);
var i__10681_10848 = (0);
while(true){
if((i__10681_10848 < count__10680_10847)){
var component__10058__auto___10861 = cljs.core._nth.call(null,chunk__10679_10846,i__10681_10848);
speclj.components.install.call(null,component__10058__auto___10861,description__10057__auto____$1);


var G__10862 = seq__10678_10845;
var G__10863 = chunk__10679_10846;
var G__10864 = count__10680_10847;
var G__10865 = (i__10681_10848 + (1));
seq__10678_10845 = G__10862;
chunk__10679_10846 = G__10863;
count__10680_10847 = G__10864;
i__10681_10848 = G__10865;
continue;
} else {
var temp__5825__auto___10866 = cljs.core.seq.call(null,seq__10678_10845);
if(temp__5825__auto___10866){
var seq__10678_10867__$1 = temp__5825__auto___10866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10678_10867__$1)){
var c__5548__auto___10868 = cljs.core.chunk_first.call(null,seq__10678_10867__$1);
var G__10869 = cljs.core.chunk_rest.call(null,seq__10678_10867__$1);
var G__10870 = c__5548__auto___10868;
var G__10871 = cljs.core.count.call(null,c__5548__auto___10868);
var G__10872 = (0);
seq__10678_10845 = G__10869;
chunk__10679_10846 = G__10870;
count__10680_10847 = G__10871;
i__10681_10848 = G__10872;
continue;
} else {
var component__10058__auto___10873 = cljs.core.first.call(null,seq__10678_10867__$1);
speclj.components.install.call(null,component__10058__auto___10873,description__10057__auto____$1);


var G__10874 = cljs.core.next.call(null,seq__10678_10867__$1);
var G__10875 = null;
var G__10876 = (0);
var G__10877 = (0);
seq__10678_10845 = G__10874;
chunk__10679_10846 = G__10875;
count__10680_10847 = G__10876;
i__10681_10848 = G__10877;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10676_10843);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})()],null)));
var chunk__10619_10686 = null;
var count__10620_10687 = (0);
var i__10621_10688 = (0);
while(true){
if((i__10621_10688 < count__10620_10687)){
var component__10058__auto___10878 = cljs.core._nth.call(null,chunk__10619_10686,i__10621_10688);
speclj.components.install.call(null,component__10058__auto___10878,description__10057__auto___10682);


var G__10879 = seq__10618_10685;
var G__10880 = chunk__10619_10686;
var G__10881 = count__10620_10687;
var G__10882 = (i__10621_10688 + (1));
seq__10618_10685 = G__10879;
chunk__10619_10686 = G__10880;
count__10620_10687 = G__10881;
i__10621_10688 = G__10882;
continue;
} else {
var temp__5825__auto___10883 = cljs.core.seq.call(null,seq__10618_10685);
if(temp__5825__auto___10883){
var seq__10618_10884__$1 = temp__5825__auto___10883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10618_10884__$1)){
var c__5548__auto___10885 = cljs.core.chunk_first.call(null,seq__10618_10884__$1);
var G__10886 = cljs.core.chunk_rest.call(null,seq__10618_10884__$1);
var G__10887 = c__5548__auto___10885;
var G__10888 = cljs.core.count.call(null,c__5548__auto___10885);
var G__10889 = (0);
seq__10618_10685 = G__10886;
chunk__10619_10686 = G__10887;
count__10620_10687 = G__10888;
i__10621_10688 = G__10889;
continue;
} else {
var component__10058__auto___10890 = cljs.core.first.call(null,seq__10618_10884__$1);
speclj.components.install.call(null,component__10058__auto___10890,description__10057__auto___10682);


var G__10891 = cljs.core.next.call(null,seq__10618_10884__$1);
var G__10892 = null;
var G__10893 = (0);
var G__10894 = (0);
seq__10618_10685 = G__10891;
chunk__10619_10686 = G__10892;
count__10620_10687 = G__10893;
i__10621_10688 = G__10894;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__10614_10683);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto___10682);
}


//# sourceMappingURL=main_spec.js.map
