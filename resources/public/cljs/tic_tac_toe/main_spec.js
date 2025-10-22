// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.boardc');
var description__10057__auto___12759 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12689_12760 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12690_12761 = description__10057__auto___12759;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12690_12761);

try{var seq__12691_12762 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
tic_tac_toe.main.reset_game_BANG_.call(null);

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
),speclj.components.new_characteristic.call(null,"renders title",((function (_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
var value__10561__auto___12766 = ".container";
var node__10562__auto___12767 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___12766);
if(cljs.core.truth_(node__10562__auto___12767)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___12766;
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
});})(_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"initializes app-state",((function (_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12768 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10200__auto___12769 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12768,actual__10200__auto___12769)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12768;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12769;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12770 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___12771 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12770,actual__10200__auto___12771)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12770;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12771;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12772 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___12773 = new cljs.core.Keyword(null,"X","X",1705996313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12772,actual__10200__auto___12773)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12772;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12773;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12774 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___12775 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12774,actual__10200__auto___12775)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12774;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12775;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12776 = (0);
var actual__10200__auto___12777 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12776,actual__10200__auto___12777)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12776;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12777;
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
});})(_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"renders a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
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
});})(_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"handle move",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12729_12778 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12730_12779 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12730_12779);

try{var seq__12731_12780 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks token and does not allow moves on occupied squares",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12784 = "X";
var actual__10251__auto___12785 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___12785 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12784 === 'string') && (typeof actual__10251__auto___12785 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12785,expected__10250__auto___12784) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12785;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12784)) && (typeof actual__10251__auto___12785 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12784,actual__10251__auto___12785))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12785;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12784;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12785)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12785,expected__10250__auto___12784)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12785;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12785)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12784,p1__10249__10252__auto__);
}),actual__10251__auto___12785))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12784;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12785;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12784;
var b__10179__auto__ = actual__10251__auto___12785;
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

var expected__10250__auto___12786 = "X";
var actual__10251__auto___12787 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___12787 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12786;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12786 === 'string') && (typeof actual__10251__auto___12787 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12787,expected__10250__auto___12786) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12786;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12787;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12786)) && (typeof actual__10251__auto___12787 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12786,actual__10251__auto___12787))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12787;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12786;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12787)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12787,expected__10250__auto___12786)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12786;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12787;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12787)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12786,p1__10249__10252__auto__);
}),actual__10251__auto___12787))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12786;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12787;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12786;
var b__10179__auto__ = actual__10251__auto___12787;
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"handles multiple turns",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(2)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12788 = "X";
var actual__10251__auto___12789 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___12789 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12788;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12788 === 'string') && (typeof actual__10251__auto___12789 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12789,expected__10250__auto___12788) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12788;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12789;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12788)) && (typeof actual__10251__auto___12789 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12788,actual__10251__auto___12789))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12789;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12788;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12789)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12789,expected__10250__auto___12788)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12788;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12789;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12789)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12788,p1__10249__10252__auto__);
}),actual__10251__auto___12789))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12788;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12789;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12788;
var b__10179__auto__ = actual__10251__auto___12789;
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

var expected__10250__auto___12790 = "O";
var actual__10251__auto___12791 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(2)");
if((actual__10251__auto___12791 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12790;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12790 === 'string') && (typeof actual__10251__auto___12791 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12791,expected__10250__auto___12790) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12790;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12791;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12790)) && (typeof actual__10251__auto___12791 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12790,actual__10251__auto___12791))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12791;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12790;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12791)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12791,expected__10250__auto___12790)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12790;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12791;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12791)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12790,p1__10249__10252__auto__);
}),actual__10251__auto___12791))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12790;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12791;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12790;
var b__10179__auto__ = actual__10251__auto___12791;
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"sets winner flag",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"sets draw flag",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a win",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
var state = cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));
var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12792 = current_token;
var actual__10200__auto___12793 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,expected__10199__auto___12792,actual__10200__auto___12793)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12792;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12793;
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a draw",((function (_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12794 = current_token;
var actual__10200__auto___12795 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12794,actual__10200__auto___12795)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12794;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12795;
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
});})(_STAR_parent_description_STAR__orig_val__12729_12778,_STAR_parent_description_STAR__temp_val__12730_12779,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false)],null)));
var chunk__12732_12781 = null;
var count__12733_12782 = (0);
var i__12734_12783 = (0);
while(true){
if((i__12734_12783 < count__12733_12782)){
var component__10058__auto___12796 = cljs.core._nth.call(null,chunk__12732_12781,i__12734_12783);
speclj.components.install.call(null,component__10058__auto___12796,description__10057__auto____$1);


var G__12797 = seq__12731_12780;
var G__12798 = chunk__12732_12781;
var G__12799 = count__12733_12782;
var G__12800 = (i__12734_12783 + (1));
seq__12731_12780 = G__12797;
chunk__12732_12781 = G__12798;
count__12733_12782 = G__12799;
i__12734_12783 = G__12800;
continue;
} else {
var temp__5825__auto___12801 = cljs.core.seq.call(null,seq__12731_12780);
if(temp__5825__auto___12801){
var seq__12731_12802__$1 = temp__5825__auto___12801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12731_12802__$1)){
var c__5548__auto___12803 = cljs.core.chunk_first.call(null,seq__12731_12802__$1);
var G__12804 = cljs.core.chunk_rest.call(null,seq__12731_12802__$1);
var G__12805 = c__5548__auto___12803;
var G__12806 = cljs.core.count.call(null,c__5548__auto___12803);
var G__12807 = (0);
seq__12731_12780 = G__12804;
chunk__12732_12781 = G__12805;
count__12733_12782 = G__12806;
i__12734_12783 = G__12807;
continue;
} else {
var component__10058__auto___12808 = cljs.core.first.call(null,seq__12731_12802__$1);
speclj.components.install.call(null,component__10058__auto___12808,description__10057__auto____$1);


var G__12809 = cljs.core.next.call(null,seq__12731_12802__$1);
var G__12810 = null;
var G__12811 = (0);
var G__12812 = (0);
seq__12731_12780 = G__12809;
chunk__12732_12781 = G__12810;
count__12733_12782 = G__12811;
i__12734_12783 = G__12812;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12729_12778);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"status message",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12735_12813 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12736_12814 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12736_12814);

try{var seq__12737_12815 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"status message for current turn",((function (_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12819 = "Turn: :X";
var actual__10251__auto___12820 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___12820 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12819 === 'string') && (typeof actual__10251__auto___12820 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12820,expected__10250__auto___12819) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12820;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12819)) && (typeof actual__10251__auto___12820 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12819,actual__10251__auto___12820))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12819;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12820)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12820,expected__10250__auto___12819)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12820)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12819,p1__10249__10252__auto__);
}),actual__10251__auto___12820))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12819;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12820;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12819;
var b__10179__auto__ = actual__10251__auto___12820;
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
});})(_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"displays winner message",((function (_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
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
});})(_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"displays draw message",((function (_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
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
});})(_STAR_parent_description_STAR__orig_val__12735_12813,_STAR_parent_description_STAR__temp_val__12736_12814,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false)],null)));
var chunk__12738_12816 = null;
var count__12739_12817 = (0);
var i__12740_12818 = (0);
while(true){
if((i__12740_12818 < count__12739_12817)){
var component__10058__auto___12821 = cljs.core._nth.call(null,chunk__12738_12816,i__12740_12818);
speclj.components.install.call(null,component__10058__auto___12821,description__10057__auto____$1);


var G__12822 = seq__12737_12815;
var G__12823 = chunk__12738_12816;
var G__12824 = count__12739_12817;
var G__12825 = (i__12740_12818 + (1));
seq__12737_12815 = G__12822;
chunk__12738_12816 = G__12823;
count__12739_12817 = G__12824;
i__12740_12818 = G__12825;
continue;
} else {
var temp__5825__auto___12826 = cljs.core.seq.call(null,seq__12737_12815);
if(temp__5825__auto___12826){
var seq__12737_12827__$1 = temp__5825__auto___12826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12737_12827__$1)){
var c__5548__auto___12828 = cljs.core.chunk_first.call(null,seq__12737_12827__$1);
var G__12829 = cljs.core.chunk_rest.call(null,seq__12737_12827__$1);
var G__12830 = c__5548__auto___12828;
var G__12831 = cljs.core.count.call(null,c__5548__auto___12828);
var G__12832 = (0);
seq__12737_12815 = G__12829;
chunk__12738_12816 = G__12830;
count__12739_12817 = G__12831;
i__12740_12818 = G__12832;
continue;
} else {
var component__10058__auto___12833 = cljs.core.first.call(null,seq__12737_12827__$1);
speclj.components.install.call(null,component__10058__auto___12833,description__10057__auto____$1);


var G__12834 = cljs.core.next.call(null,seq__12737_12827__$1);
var G__12835 = null;
var G__12836 = (0);
var G__12837 = (0);
seq__12737_12815 = G__12834;
chunk__12738_12816 = G__12835;
count__12739_12817 = G__12836;
i__12740_12818 = G__12837;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12735_12813);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"reset",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12741_12838 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12742_12839 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12742_12839);

try{var seq__12743_12840 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"reset button",((function (_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
var value__10561__auto___12844 = ".reset";
var node__10562__auto___12845 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___12844);
if(cljs.core.truth_(node__10562__auto___12845)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___12844;
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
});})(_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"resets game",((function (_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.click_BANG_.call(null,".reset");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12846 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___12847 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12846,actual__10200__auto___12847)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12846;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12847;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12848 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___12849 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12848,actual__10200__auto___12849)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12848;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12849;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12850 = (0);
var actual__10200__auto___12851 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12850,actual__10200__auto___12851)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12850;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12851;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12852 = null;
var actual__10200__auto___12853 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12852,actual__10200__auto___12853)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12852;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12853;
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
});})(_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"resets to 4x4 board",((function (_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));

tic_tac_toe.main.handle_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

tic_tac_toe.main.reset_game_BANG_.call(null);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12854 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10200__auto___12855 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12854,actual__10200__auto___12855)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12854;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12855;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12856 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___12857 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12856,actual__10200__auto___12857)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12856;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12857;
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
});})(_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"resets to 3x3 board",((function (_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12858 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___12859 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12858,actual__10200__auto___12859)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12858;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12859;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12860 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10200__auto___12861 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12860,actual__10200__auto___12861)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12860;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12861;
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
});})(_STAR_parent_description_STAR__orig_val__12741_12838,_STAR_parent_description_STAR__temp_val__12742_12839,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false)],null)));
var chunk__12744_12841 = null;
var count__12745_12842 = (0);
var i__12746_12843 = (0);
while(true){
if((i__12746_12843 < count__12745_12842)){
var component__10058__auto___12862 = cljs.core._nth.call(null,chunk__12744_12841,i__12746_12843);
speclj.components.install.call(null,component__10058__auto___12862,description__10057__auto____$1);


var G__12863 = seq__12743_12840;
var G__12864 = chunk__12744_12841;
var G__12865 = count__12745_12842;
var G__12866 = (i__12746_12843 + (1));
seq__12743_12840 = G__12863;
chunk__12744_12841 = G__12864;
count__12745_12842 = G__12865;
i__12746_12843 = G__12866;
continue;
} else {
var temp__5825__auto___12867 = cljs.core.seq.call(null,seq__12743_12840);
if(temp__5825__auto___12867){
var seq__12743_12868__$1 = temp__5825__auto___12867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12743_12868__$1)){
var c__5548__auto___12869 = cljs.core.chunk_first.call(null,seq__12743_12868__$1);
var G__12870 = cljs.core.chunk_rest.call(null,seq__12743_12868__$1);
var G__12871 = c__5548__auto___12869;
var G__12872 = cljs.core.count.call(null,c__5548__auto___12869);
var G__12873 = (0);
seq__12743_12840 = G__12870;
chunk__12744_12841 = G__12871;
count__12745_12842 = G__12872;
i__12746_12843 = G__12873;
continue;
} else {
var component__10058__auto___12874 = cljs.core.first.call(null,seq__12743_12868__$1);
speclj.components.install.call(null,component__10058__auto___12874,description__10057__auto____$1);


var G__12875 = cljs.core.next.call(null,seq__12743_12868__$1);
var G__12876 = null;
var G__12877 = (0);
var G__12878 = (0);
seq__12743_12840 = G__12875;
chunk__12744_12841 = G__12876;
count__12745_12842 = G__12877;
i__12746_12843 = G__12878;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12741_12838);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"board size selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12747_12879 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12748_12880 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12748_12880);

try{var seq__12749_12881 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
),speclj.components.new_characteristic.call(null,"renders 3x3 and 4x4 buttons",((function (_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
var value__10561__auto___12885 = ".container";
var node__10562__auto___12886 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___12885);
if(cljs.core.truth_(node__10562__auto___12886)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___12885;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12887 = "Board Size: ";
var actual__10251__auto___12888 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___12888 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12887 === 'string') && (typeof actual__10251__auto___12888 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12888,expected__10250__auto___12887) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12888;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12887)) && (typeof actual__10251__auto___12888 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12887,actual__10251__auto___12888))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12888;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12887;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12888)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12888,expected__10250__auto___12887)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12888;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12888)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12887,p1__10249__10252__auto__);
}),actual__10251__auto___12888))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12887;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12888;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12887;
var b__10179__auto__ = actual__10251__auto___12888;
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

var expected__10250__auto___12889 = "3x3";
var actual__10251__auto___12890 = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(1)");
if((actual__10251__auto___12890 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12889;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12889 === 'string') && (typeof actual__10251__auto___12890 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12890,expected__10250__auto___12889) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12889;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12890;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12889)) && (typeof actual__10251__auto___12890 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12889,actual__10251__auto___12890))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12890;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12889;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12890)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12890,expected__10250__auto___12889)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12889;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12890;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12890)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12889,p1__10249__10252__auto__);
}),actual__10251__auto___12890))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12889;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12890;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12889;
var b__10179__auto__ = actual__10251__auto___12890;
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
});})(_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"clicking 4x4 button changes board size",((function (_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(2)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12891 = (16);
var actual__10200__auto___12892 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10199__auto___12891,actual__10200__auto___12892)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12891;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12892;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12893 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10200__auto___12894 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12893,actual__10200__auto___12894)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12893;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12894;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12895 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10200__auto___12896 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12895,actual__10200__auto___12896)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12895;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12896;
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
});})(_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));

c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(1)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12897 = (9);
var actual__10200__auto___12898 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10199__auto___12897,actual__10200__auto___12898)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12897;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12898;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12899 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10200__auto___12900 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12899,actual__10200__auto___12900)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12899;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12900;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12901 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10200__auto___12902 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12901,actual__10200__auto___12902)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12901;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12902;
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
});})(_STAR_parent_description_STAR__orig_val__12747_12879,_STAR_parent_description_STAR__temp_val__12748_12880,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false)],null)));
var chunk__12750_12882 = null;
var count__12751_12883 = (0);
var i__12752_12884 = (0);
while(true){
if((i__12752_12884 < count__12751_12883)){
var component__10058__auto___12903 = cljs.core._nth.call(null,chunk__12750_12882,i__12752_12884);
speclj.components.install.call(null,component__10058__auto___12903,description__10057__auto____$1);


var G__12904 = seq__12749_12881;
var G__12905 = chunk__12750_12882;
var G__12906 = count__12751_12883;
var G__12907 = (i__12752_12884 + (1));
seq__12749_12881 = G__12904;
chunk__12750_12882 = G__12905;
count__12751_12883 = G__12906;
i__12752_12884 = G__12907;
continue;
} else {
var temp__5825__auto___12908 = cljs.core.seq.call(null,seq__12749_12881);
if(temp__5825__auto___12908){
var seq__12749_12909__$1 = temp__5825__auto___12908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12749_12909__$1)){
var c__5548__auto___12910 = cljs.core.chunk_first.call(null,seq__12749_12909__$1);
var G__12911 = cljs.core.chunk_rest.call(null,seq__12749_12909__$1);
var G__12912 = c__5548__auto___12910;
var G__12913 = cljs.core.count.call(null,c__5548__auto___12910);
var G__12914 = (0);
seq__12749_12881 = G__12911;
chunk__12750_12882 = G__12912;
count__12751_12883 = G__12913;
i__12752_12884 = G__12914;
continue;
} else {
var component__10058__auto___12915 = cljs.core.first.call(null,seq__12749_12909__$1);
speclj.components.install.call(null,component__10058__auto___12915,description__10057__auto____$1);


var G__12916 = cljs.core.next.call(null,seq__12749_12909__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12749_12881 = G__12916;
chunk__12750_12882 = G__12917;
count__12751_12883 = G__12918;
i__12752_12884 = G__12919;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12747_12879);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})(),(function (){var description__10057__auto____$1 = speclj.components.new_description.call(null,"Player selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__12753_12920 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__12754_12921 = description__10057__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__12754_12921);

try{var seq__12755_12922 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
),speclj.components.new_characteristic.call(null,"renders human and Expert AI buttons",((function (_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
var value__10561__auto___12926 = ".container";
var node__10562__auto___12927 = c3kit.wire.spec_helper.select.call(null,value__10561__auto___12926);
if(cljs.core.truth_(node__10562__auto___12927)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10561__auto___12926;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12928 = "Player O: ";
var actual__10251__auto___12929 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10251__auto___12929 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12928;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12928 === 'string') && (typeof actual__10251__auto___12929 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12929,expected__10250__auto___12928) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12928;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12929;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12928)) && (typeof actual__10251__auto___12929 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12928,actual__10251__auto___12929))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12929;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12928;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12929)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12929,expected__10250__auto___12928)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12928;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12929;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12929)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12928,p1__10249__10252__auto__);
}),actual__10251__auto___12929))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12928;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12929;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12928;
var b__10179__auto__ = actual__10251__auto___12929;
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

var expected__10250__auto___12930 = "Human";
var actual__10251__auto___12931 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.human");
if((actual__10251__auto___12931 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12930;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12930 === 'string') && (typeof actual__10251__auto___12931 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12931,expected__10250__auto___12930) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12930;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12931;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12930)) && (typeof actual__10251__auto___12931 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12930,actual__10251__auto___12931))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12931;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12930;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12931)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12931,expected__10250__auto___12930)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12930;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12931;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12931)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12930,p1__10249__10252__auto__);
}),actual__10251__auto___12931))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12930;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12931;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12930;
var b__10179__auto__ = actual__10251__auto___12931;
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
});})(_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"clicking expert AI button changes player O",((function (_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12932 = new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886);
var actual__10200__auto___12933 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12932,actual__10200__auto___12933)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12932;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12933;
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
});})(_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10199__auto___12934 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10200__auto___12935 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10199__auto___12934,actual__10200__auto___12935)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10199__auto___12934;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10200__auto___12935;
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
});})(_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false),speclj.components.new_characteristic.call(null,"Expert AI move after human move",((function (_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10250__auto___12936 = "X";
var actual__10251__auto___12937 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10251__auto___12937 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10250__auto___12936 === 'string') && (typeof actual__10251__auto___12937 === 'string'))){
if((clojure.string.index_of.call(null,actual__10251__auto___12937,expected__10250__auto___12936) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12937;
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
if(((speclj.platform.re_QMARK_.call(null,expected__10250__auto___12936)) && (typeof actual__10251__auto___12937 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10250__auto___12936,actual__10251__auto___12937))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10251__auto___12937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10250__auto___12936;
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
if(cljs.core.map_QMARK_.call(null,actual__10251__auto___12937)){
if(cljs.core.contains_QMARK_.call(null,actual__10251__auto___12937,expected__10250__auto___12936)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10251__auto___12937)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10249__10252__auto__){
return cljs.core._EQ_.call(null,expected__10250__auto___12936,p1__10249__10252__auto__);
}),actual__10251__auto___12937))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10250__auto___12936;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10251__auto___12937;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10167__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10167__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10178__auto__ = expected__10250__auto___12936;
var b__10179__auto__ = actual__10251__auto___12937;
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
});})(_STAR_parent_description_STAR__orig_val__12753_12920,_STAR_parent_description_STAR__temp_val__12754_12921,description__10057__auto____$1,_STAR_parent_description_STAR__orig_val__12689_12760,_STAR_parent_description_STAR__temp_val__12690_12761,description__10057__auto___12759))
,false)],null)));
var chunk__12756_12923 = null;
var count__12757_12924 = (0);
var i__12758_12925 = (0);
while(true){
if((i__12758_12925 < count__12757_12924)){
var component__10058__auto___12938 = cljs.core._nth.call(null,chunk__12756_12923,i__12758_12925);
speclj.components.install.call(null,component__10058__auto___12938,description__10057__auto____$1);


var G__12939 = seq__12755_12922;
var G__12940 = chunk__12756_12923;
var G__12941 = count__12757_12924;
var G__12942 = (i__12758_12925 + (1));
seq__12755_12922 = G__12939;
chunk__12756_12923 = G__12940;
count__12757_12924 = G__12941;
i__12758_12925 = G__12942;
continue;
} else {
var temp__5825__auto___12943 = cljs.core.seq.call(null,seq__12755_12922);
if(temp__5825__auto___12943){
var seq__12755_12944__$1 = temp__5825__auto___12943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12755_12944__$1)){
var c__5548__auto___12945 = cljs.core.chunk_first.call(null,seq__12755_12944__$1);
var G__12946 = cljs.core.chunk_rest.call(null,seq__12755_12944__$1);
var G__12947 = c__5548__auto___12945;
var G__12948 = cljs.core.count.call(null,c__5548__auto___12945);
var G__12949 = (0);
seq__12755_12922 = G__12946;
chunk__12756_12923 = G__12947;
count__12757_12924 = G__12948;
i__12758_12925 = G__12949;
continue;
} else {
var component__10058__auto___12950 = cljs.core.first.call(null,seq__12755_12944__$1);
speclj.components.install.call(null,component__10058__auto___12950,description__10057__auto____$1);


var G__12951 = cljs.core.next.call(null,seq__12755_12944__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__12755_12922 = G__12951;
chunk__12756_12923 = G__12952;
count__12757_12924 = G__12953;
i__12758_12925 = G__12954;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12753_12920);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto____$1);
}

return description__10057__auto____$1;
})()],null)));
var chunk__12692_12763 = null;
var count__12693_12764 = (0);
var i__12694_12765 = (0);
while(true){
if((i__12694_12765 < count__12693_12764)){
var component__10058__auto___12955 = cljs.core._nth.call(null,chunk__12692_12763,i__12694_12765);
speclj.components.install.call(null,component__10058__auto___12955,description__10057__auto___12759);


var G__12956 = seq__12691_12762;
var G__12957 = chunk__12692_12763;
var G__12958 = count__12693_12764;
var G__12959 = (i__12694_12765 + (1));
seq__12691_12762 = G__12956;
chunk__12692_12763 = G__12957;
count__12693_12764 = G__12958;
i__12694_12765 = G__12959;
continue;
} else {
var temp__5825__auto___12960 = cljs.core.seq.call(null,seq__12691_12762);
if(temp__5825__auto___12960){
var seq__12691_12961__$1 = temp__5825__auto___12960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12691_12961__$1)){
var c__5548__auto___12962 = cljs.core.chunk_first.call(null,seq__12691_12961__$1);
var G__12963 = cljs.core.chunk_rest.call(null,seq__12691_12961__$1);
var G__12964 = c__5548__auto___12962;
var G__12965 = cljs.core.count.call(null,c__5548__auto___12962);
var G__12966 = (0);
seq__12691_12762 = G__12963;
chunk__12692_12763 = G__12964;
count__12693_12764 = G__12965;
i__12694_12765 = G__12966;
continue;
} else {
var component__10058__auto___12967 = cljs.core.first.call(null,seq__12691_12961__$1);
speclj.components.install.call(null,component__10058__auto___12967,description__10057__auto___12759);


var G__12968 = cljs.core.next.call(null,seq__12691_12961__$1);
var G__12969 = null;
var G__12970 = (0);
var G__12971 = (0);
seq__12691_12762 = G__12968;
chunk__12692_12763 = G__12969;
count__12693_12764 = G__12970;
i__12694_12765 = G__12971;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__12689_12760);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10057__auto___12759);
}


//# sourceMappingURL=main_spec.js.map
