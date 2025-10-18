// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.sum_by = (function speclj$reporting$sum_by(f,coll){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,coll));
});
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return speclj.reporting.sum_by.call(null,(function (p1__6752_SHARP_){
return p1__6752_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__6754_SHARP_){
return p1__6754_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_6766 = (function (reporter,message){
var x__5373__auto__ = (((reporter == null))?null:reporter);
var m__5374__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,reporter,message);
} else {
var m__5372__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_6766.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_6767 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_6767.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_6772 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_6772.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_6773 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_6773.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_6774 = (function (this$,result){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,result);
} else {
var m__5372__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_6774.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_6775 = (function (this$,results){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,results);
} else {
var m__5372__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_6775.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_6780 = (function (this$,exception){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,exception);
} else {
var m__5372__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_6780.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,_reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__6768 = cljs.core.seq.call(null,reporters);
var chunk__6769 = null;
var count__6770 = (0);
var i__6771 = (0);
while(true){
if((i__6771 < count__6770)){
var reporter = cljs.core._nth.call(null,chunk__6769,i__6771);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6785 = seq__6768;
var G__6786 = chunk__6769;
var G__6787 = count__6770;
var G__6788 = (i__6771 + (1));
seq__6768 = G__6785;
chunk__6769 = G__6786;
count__6770 = G__6787;
i__6771 = G__6788;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6768);
if(temp__5825__auto__){
var seq__6768__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6768__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6768__$1);
var G__6789 = cljs.core.chunk_rest.call(null,seq__6768__$1);
var G__6790 = c__5548__auto__;
var G__6791 = cljs.core.count.call(null,c__5548__auto__);
var G__6792 = (0);
seq__6768 = G__6789;
chunk__6769 = G__6790;
count__6770 = G__6791;
i__6771 = G__6792;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6768__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__6793 = cljs.core.next.call(null,seq__6768__$1);
var G__6794 = null;
var G__6795 = (0);
var G__6796 = (0);
seq__6768 = G__6793;
chunk__6769 = G__6794;
count__6770 = G__6795;
i__6771 = G__6796;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__6776 = cljs.core.seq.call(null,reporters);
var chunk__6777 = null;
var count__6778 = (0);
var i__6779 = (0);
while(true){
if((i__6779 < count__6778)){
var reporter = cljs.core._nth.call(null,chunk__6777,i__6779);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6797 = seq__6776;
var G__6798 = chunk__6777;
var G__6799 = count__6778;
var G__6800 = (i__6779 + (1));
seq__6776 = G__6797;
chunk__6777 = G__6798;
count__6778 = G__6799;
i__6779 = G__6800;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6776);
if(temp__5825__auto__){
var seq__6776__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6776__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6776__$1);
var G__6801 = cljs.core.chunk_rest.call(null,seq__6776__$1);
var G__6802 = c__5548__auto__;
var G__6803 = cljs.core.count.call(null,c__5548__auto__);
var G__6804 = (0);
seq__6776 = G__6801;
chunk__6777 = G__6802;
count__6778 = G__6803;
i__6779 = G__6804;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6776__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__6805 = cljs.core.next.call(null,seq__6776__$1);
var G__6806 = null;
var G__6807 = (0);
var G__6808 = (0);
seq__6776 = G__6805;
chunk__6777 = G__6806;
count__6778 = G__6807;
i__6779 = G__6808;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__6781 = cljs.core.seq.call(null,reporters);
var chunk__6782 = null;
var count__6783 = (0);
var i__6784 = (0);
while(true){
if((i__6784 < count__6783)){
var reporter = cljs.core._nth.call(null,chunk__6782,i__6784);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6813 = seq__6781;
var G__6814 = chunk__6782;
var G__6815 = count__6783;
var G__6816 = (i__6784 + (1));
seq__6781 = G__6813;
chunk__6782 = G__6814;
count__6783 = G__6815;
i__6784 = G__6816;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6781);
if(temp__5825__auto__){
var seq__6781__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6781__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6781__$1);
var G__6817 = cljs.core.chunk_rest.call(null,seq__6781__$1);
var G__6818 = c__5548__auto__;
var G__6819 = cljs.core.count.call(null,c__5548__auto__);
var G__6820 = (0);
seq__6781 = G__6817;
chunk__6782 = G__6818;
count__6783 = G__6819;
i__6784 = G__6820;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6781__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__6821 = cljs.core.next.call(null,seq__6781__$1);
var G__6822 = null;
var G__6823 = (0);
var G__6824 = (0);
seq__6781 = G__6821;
chunk__6782 = G__6822;
count__6783 = G__6823;
i__6784 = G__6824;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__6809 = cljs.core.seq.call(null,reporters);
var chunk__6810 = null;
var count__6811 = (0);
var i__6812 = (0);
while(true){
if((i__6812 < count__6811)){
var reporter = cljs.core._nth.call(null,chunk__6810,i__6812);
speclj.reporting.report_error.call(null,reporter,result);


var G__6825 = seq__6809;
var G__6826 = chunk__6810;
var G__6827 = count__6811;
var G__6828 = (i__6812 + (1));
seq__6809 = G__6825;
chunk__6810 = G__6826;
count__6811 = G__6827;
i__6812 = G__6828;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6809);
if(temp__5825__auto__){
var seq__6809__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6809__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6809__$1);
var G__6829 = cljs.core.chunk_rest.call(null,seq__6809__$1);
var G__6830 = c__5548__auto__;
var G__6831 = cljs.core.count.call(null,c__5548__auto__);
var G__6832 = (0);
seq__6809 = G__6829;
chunk__6810 = G__6830;
count__6811 = G__6831;
i__6812 = G__6832;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6809__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__6833 = cljs.core.next.call(null,seq__6809__$1);
var G__6834 = null;
var G__6835 = (0);
var G__6836 = (0);
seq__6809 = G__6833;
chunk__6810 = G__6834;
count__6811 = G__6835;
i__6812 = G__6836;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code,text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
speclj.reporting.red = (function speclj$reporting$red(text){
return speclj.reporting.stylizer.call(null,"31",text);
});
speclj.reporting.green = (function speclj$reporting$green(text){
return speclj.reporting.stylizer.call(null,"32",text);
});
speclj.reporting.yellow = (function speclj$reporting$yellow(text){
return speclj.reporting.stylizer.call(null,"33",text);
});
speclj.reporting.grey = (function speclj$reporting$grey(text){
return speclj.reporting.stylizer.call(null,"90",text);
});
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_6837 = speclj.platform.stack_trace.call(null,exception);
var elides_6838 = (0);
while(true){
if(cljs.core.seq.call(null,levels_6837)){
var level_6839 = cljs.core.first.call(null,levels_6837);
if(speclj.platform.elide_level_QMARK_.call(null,level_6839)){
var G__6840 = cljs.core.rest.call(null,levels_6837);
var G__6841 = (elides_6838 + (1));
levels_6837 = G__6840;
elides_6838 = G__6841;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_6838);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_6839));

var G__6842 = cljs.core.rest.call(null,levels_6837);
var G__6843 = (0);
levels_6837 = G__6842;
elides_6838 = G__6843;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_6838);
}
break;
}

var temp__5825__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,speclj.platform.error_str.call(null,exception));
} else {
cljs.core.println.call(null,speclj.platform.error_str.call(null,exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__6844_6849 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__6845_6850 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__6846_6851 = true;
var _STAR_print_fn_STAR__temp_val__6847_6852 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__6846_6851);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__6847_6852);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__6845_6850);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__6844_6849);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6857 = arguments.length;
var i__5750__auto___6858 = (0);
while(true){
if((i__5750__auto___6858 < len__5749__auto___6857)){
args__5755__auto__.push((arguments[i__5750__auto___6858]));

var G__6859 = (i__5750__auto___6858 + (1));
i__5750__auto___6858 = G__6859;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__6848_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6848_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq6853){
var G__6854 = cljs.core.first.call(null,seq6853);
var seq6853__$1 = cljs.core.next.call(null,seq6853);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6854,seq6853__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___6864 = arguments.length;
var i__5750__auto___6865 = (0);
while(true){
if((i__5750__auto___6865 < len__5749__auto___6864)){
args__5755__auto__.push((arguments[i__5750__auto___6865]));

var G__6866 = (i__5750__auto___6865 + (1));
i__5750__auto___6865 = G__6866;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq6855){
var G__6856 = cljs.core.first.call(null,seq6855);
var seq6855__$1 = cljs.core.next.call(null,seq6855);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6856,seq6855__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__6860 = cljs.core.seq.call(null,reporters);
var chunk__6861 = null;
var count__6862 = (0);
var i__6863 = (0);
while(true){
if((i__6863 < count__6862)){
var reporter = cljs.core._nth.call(null,chunk__6861,i__6863);
speclj.reporting.report_description.call(null,reporter,description);


var G__6871 = seq__6860;
var G__6872 = chunk__6861;
var G__6873 = count__6862;
var G__6874 = (i__6863 + (1));
seq__6860 = G__6871;
chunk__6861 = G__6872;
count__6862 = G__6873;
i__6863 = G__6874;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6860);
if(temp__5825__auto__){
var seq__6860__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6860__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6860__$1);
var G__6875 = cljs.core.chunk_rest.call(null,seq__6860__$1);
var G__6876 = c__5548__auto__;
var G__6877 = cljs.core.count.call(null,c__5548__auto__);
var G__6878 = (0);
seq__6860 = G__6875;
chunk__6861 = G__6876;
count__6862 = G__6877;
i__6863 = G__6878;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6860__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__6879 = cljs.core.next.call(null,seq__6860__$1);
var G__6880 = null;
var G__6881 = (0);
var G__6882 = (0);
seq__6860 = G__6879;
chunk__6861 = G__6880;
count__6862 = G__6881;
i__6863 = G__6882;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__6867 = cljs.core.seq.call(null,reporters);
var chunk__6868 = null;
var count__6869 = (0);
var i__6870 = (0);
while(true){
if((i__6870 < count__6869)){
var reporter = cljs.core._nth.call(null,chunk__6868,i__6870);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6883 = seq__6867;
var G__6884 = chunk__6868;
var G__6885 = count__6869;
var G__6886 = (i__6870 + (1));
seq__6867 = G__6883;
chunk__6868 = G__6884;
count__6869 = G__6885;
i__6870 = G__6886;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6867);
if(temp__5825__auto__){
var seq__6867__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6867__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6867__$1);
var G__6891 = cljs.core.chunk_rest.call(null,seq__6867__$1);
var G__6892 = c__5548__auto__;
var G__6893 = cljs.core.count.call(null,c__5548__auto__);
var G__6894 = (0);
seq__6867 = G__6891;
chunk__6868 = G__6892;
count__6869 = G__6893;
i__6870 = G__6894;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6867__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__6895 = cljs.core.next.call(null,seq__6867__$1);
var G__6896 = null;
var G__6897 = (0);
var G__6898 = (0);
seq__6867 = G__6895;
chunk__6868 = G__6896;
count__6869 = G__6897;
i__6870 = G__6898;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__6887 = cljs.core.seq.call(null,reporters);
var chunk__6888 = null;
var count__6889 = (0);
var i__6890 = (0);
while(true){
if((i__6890 < count__6889)){
var reporter = cljs.core._nth.call(null,chunk__6888,i__6890);
speclj.reporting.report_message.call(null,reporter,message);


var G__6903 = seq__6887;
var G__6904 = chunk__6888;
var G__6905 = count__6889;
var G__6906 = (i__6890 + (1));
seq__6887 = G__6903;
chunk__6888 = G__6904;
count__6889 = G__6905;
i__6890 = G__6906;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6887);
if(temp__5825__auto__){
var seq__6887__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6887__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6887__$1);
var G__6907 = cljs.core.chunk_rest.call(null,seq__6887__$1);
var G__6908 = c__5548__auto__;
var G__6909 = cljs.core.count.call(null,c__5548__auto__);
var G__6910 = (0);
seq__6887 = G__6907;
chunk__6888 = G__6908;
count__6889 = G__6909;
i__6890 = G__6910;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6887__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__6911 = cljs.core.next.call(null,seq__6887__$1);
var G__6912 = null;
var G__6913 = (0);
var G__6914 = (0);
seq__6887 = G__6911;
chunk__6888 = G__6912;
count__6889 = G__6913;
i__6890 = G__6914;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__6899 = cljs.core.seq.call(null,reporters);
var chunk__6900 = null;
var count__6901 = (0);
var i__6902 = (0);
while(true){
if((i__6902 < count__6901)){
var reporter = cljs.core._nth.call(null,chunk__6900,i__6902);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6915 = seq__6899;
var G__6916 = chunk__6900;
var G__6917 = count__6901;
var G__6918 = (i__6902 + (1));
seq__6899 = G__6915;
chunk__6900 = G__6916;
count__6901 = G__6917;
i__6902 = G__6918;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__6899);
if(temp__5825__auto__){
var seq__6899__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6899__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__6899__$1);
var G__6919 = cljs.core.chunk_rest.call(null,seq__6899__$1);
var G__6920 = c__5548__auto__;
var G__6921 = cljs.core.count.call(null,c__5548__auto__);
var G__6922 = (0);
seq__6899 = G__6919;
chunk__6900 = G__6920;
count__6901 = G__6921;
i__6902 = G__6922;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__6899__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__6923 = cljs.core.next.call(null,seq__6899__$1);
var G__6924 = null;
var G__6925 = (0);
var G__6926 = (0);
seq__6899 = G__6923;
chunk__6900 = G__6924;
count__6901 = G__6925;
i__6902 = G__6926;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
