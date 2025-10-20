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
return speclj.reporting.sum_by.call(null,(function (p1__22058_SHARP_){
return p1__22058_SHARP_.seconds;
}),results);
});
speclj.reporting.tally_assertions = (function speclj$reporting$tally_assertions(results){
return speclj.reporting.sum_by.call(null,(function (p1__22060_SHARP_){
return p1__22060_SHARP_.assertions;
}),results);
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_22077 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_22077.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_22088 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_22088.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_22093 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_22093.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_22094 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_22094.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_22099 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_22099.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_22100 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_22100.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_22105 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_22105.call(null,this$,exception);
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
var seq__22081 = cljs.core.seq.call(null,reporters);
var chunk__22082 = null;
var count__22083 = (0);
var i__22084 = (0);
while(true){
if((i__22084 < count__22083)){
var reporter = cljs.core._nth.call(null,chunk__22082,i__22084);
speclj.reporting.report_pass.call(null,reporter,result);


var G__22106 = seq__22081;
var G__22107 = chunk__22082;
var G__22108 = count__22083;
var G__22109 = (i__22084 + (1));
seq__22081 = G__22106;
chunk__22082 = G__22107;
count__22083 = G__22108;
i__22084 = G__22109;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22081);
if(temp__5825__auto__){
var seq__22081__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22081__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22081__$1);
var G__22110 = cljs.core.chunk_rest.call(null,seq__22081__$1);
var G__22111 = c__5548__auto__;
var G__22112 = cljs.core.count.call(null,c__5548__auto__);
var G__22113 = (0);
seq__22081 = G__22110;
chunk__22082 = G__22111;
count__22083 = G__22112;
i__22084 = G__22113;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22081__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__22114 = cljs.core.next.call(null,seq__22081__$1);
var G__22115 = null;
var G__22116 = (0);
var G__22117 = (0);
seq__22081 = G__22114;
chunk__22082 = G__22115;
count__22083 = G__22116;
i__22084 = G__22117;
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
var seq__22089 = cljs.core.seq.call(null,reporters);
var chunk__22090 = null;
var count__22091 = (0);
var i__22092 = (0);
while(true){
if((i__22092 < count__22091)){
var reporter = cljs.core._nth.call(null,chunk__22090,i__22092);
speclj.reporting.report_fail.call(null,reporter,result);


var G__22118 = seq__22089;
var G__22119 = chunk__22090;
var G__22120 = count__22091;
var G__22121 = (i__22092 + (1));
seq__22089 = G__22118;
chunk__22090 = G__22119;
count__22091 = G__22120;
i__22092 = G__22121;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22089);
if(temp__5825__auto__){
var seq__22089__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22089__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22089__$1);
var G__22122 = cljs.core.chunk_rest.call(null,seq__22089__$1);
var G__22123 = c__5548__auto__;
var G__22124 = cljs.core.count.call(null,c__5548__auto__);
var G__22125 = (0);
seq__22089 = G__22122;
chunk__22090 = G__22123;
count__22091 = G__22124;
i__22092 = G__22125;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22089__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__22126 = cljs.core.next.call(null,seq__22089__$1);
var G__22127 = null;
var G__22128 = (0);
var G__22129 = (0);
seq__22089 = G__22126;
chunk__22090 = G__22127;
count__22091 = G__22128;
i__22092 = G__22129;
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
var seq__22095 = cljs.core.seq.call(null,reporters);
var chunk__22096 = null;
var count__22097 = (0);
var i__22098 = (0);
while(true){
if((i__22098 < count__22097)){
var reporter = cljs.core._nth.call(null,chunk__22096,i__22098);
speclj.reporting.report_pending.call(null,reporter,result);


var G__22130 = seq__22095;
var G__22131 = chunk__22096;
var G__22132 = count__22097;
var G__22133 = (i__22098 + (1));
seq__22095 = G__22130;
chunk__22096 = G__22131;
count__22097 = G__22132;
i__22098 = G__22133;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22095);
if(temp__5825__auto__){
var seq__22095__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22095__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22095__$1);
var G__22138 = cljs.core.chunk_rest.call(null,seq__22095__$1);
var G__22139 = c__5548__auto__;
var G__22140 = cljs.core.count.call(null,c__5548__auto__);
var G__22141 = (0);
seq__22095 = G__22138;
chunk__22096 = G__22139;
count__22097 = G__22140;
i__22098 = G__22141;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22095__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__22142 = cljs.core.next.call(null,seq__22095__$1);
var G__22143 = null;
var G__22144 = (0);
var G__22145 = (0);
seq__22095 = G__22142;
chunk__22096 = G__22143;
count__22097 = G__22144;
i__22098 = G__22145;
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
var seq__22101 = cljs.core.seq.call(null,reporters);
var chunk__22102 = null;
var count__22103 = (0);
var i__22104 = (0);
while(true){
if((i__22104 < count__22103)){
var reporter = cljs.core._nth.call(null,chunk__22102,i__22104);
speclj.reporting.report_error.call(null,reporter,result);


var G__22146 = seq__22101;
var G__22147 = chunk__22102;
var G__22148 = count__22103;
var G__22149 = (i__22104 + (1));
seq__22101 = G__22146;
chunk__22102 = G__22147;
count__22103 = G__22148;
i__22104 = G__22149;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22101);
if(temp__5825__auto__){
var seq__22101__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22101__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22101__$1);
var G__22150 = cljs.core.chunk_rest.call(null,seq__22101__$1);
var G__22151 = c__5548__auto__;
var G__22152 = cljs.core.count.call(null,c__5548__auto__);
var G__22153 = (0);
seq__22101 = G__22150;
chunk__22102 = G__22151;
count__22103 = G__22152;
i__22104 = G__22153;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22101__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__22154 = cljs.core.next.call(null,seq__22101__$1);
var G__22155 = null;
var G__22156 = (0);
var G__22157 = (0);
seq__22101 = G__22154;
chunk__22102 = G__22155;
count__22103 = G__22156;
i__22104 = G__22157;
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
var levels_22162 = speclj.platform.stack_trace.call(null,exception);
var elides_22163 = (0);
while(true){
if(cljs.core.seq.call(null,levels_22162)){
var level_22164 = cljs.core.first.call(null,levels_22162);
if(speclj.platform.elide_level_QMARK_.call(null,level_22164)){
var G__22165 = cljs.core.rest.call(null,levels_22162);
var G__22166 = (elides_22163 + (1));
levels_22162 = G__22165;
elides_22163 = G__22166;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_22163);

cljs.core.println.call(null,"\tat",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_22164));

var G__22167 = cljs.core.rest.call(null,levels_22162);
var G__22168 = (0);
levels_22162 = G__22167;
elides_22163 = G__22168;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_22163);
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
var _STAR_print_newline_STAR__orig_val__22134_22170 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22135_22171 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22136_22172 = true;
var _STAR_print_fn_STAR__temp_val__22137_22173 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22136_22172);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22137_22173);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22135_22171);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22134_22170);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22178 = arguments.length;
var i__5750__auto___22179 = (0);
while(true){
if((i__5750__auto___22179 < len__5749__auto___22178)){
args__5755__auto__.push((arguments[i__5750__auto___22179]));

var G__22180 = (i__5750__auto___22179 + (1));
i__5750__auto___22179 = G__22180;
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
var prefixed_lines = cljs.core.map.call(null,(function (p1__22169_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22169_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq22174){
var G__22175 = cljs.core.first.call(null,seq22174);
var seq22174__$1 = cljs.core.next.call(null,seq22174);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22175,seq22174__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22185 = arguments.length;
var i__5750__auto___22186 = (0);
while(true){
if((i__5750__auto___22186 < len__5749__auto___22185)){
args__5755__auto__.push((arguments[i__5750__auto___22186]));

var G__22187 = (i__5750__auto___22186 + (1));
i__5750__auto___22186 = G__22187;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq22176){
var G__22177 = cljs.core.first.call(null,seq22176);
var seq22176__$1 = cljs.core.next.call(null,seq22176);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22177,seq22176__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__22188 = cljs.core.seq.call(null,reporters);
var chunk__22189 = null;
var count__22190 = (0);
var i__22191 = (0);
while(true){
if((i__22191 < count__22190)){
var reporter = cljs.core._nth.call(null,chunk__22189,i__22191);
speclj.reporting.report_description.call(null,reporter,description);


var G__22240 = seq__22188;
var G__22241 = chunk__22189;
var G__22242 = count__22190;
var G__22243 = (i__22191 + (1));
seq__22188 = G__22240;
chunk__22189 = G__22241;
count__22190 = G__22242;
i__22191 = G__22243;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22188);
if(temp__5825__auto__){
var seq__22188__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22188__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22188__$1);
var G__22248 = cljs.core.chunk_rest.call(null,seq__22188__$1);
var G__22249 = c__5548__auto__;
var G__22250 = cljs.core.count.call(null,c__5548__auto__);
var G__22251 = (0);
seq__22188 = G__22248;
chunk__22189 = G__22249;
count__22190 = G__22250;
i__22191 = G__22251;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22188__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__22252 = cljs.core.next.call(null,seq__22188__$1);
var G__22253 = null;
var G__22254 = (0);
var G__22255 = (0);
seq__22188 = G__22252;
chunk__22189 = G__22253;
count__22190 = G__22254;
i__22191 = G__22255;
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
var seq__22232 = cljs.core.seq.call(null,reporters);
var chunk__22233 = null;
var count__22234 = (0);
var i__22235 = (0);
while(true){
if((i__22235 < count__22234)){
var reporter = cljs.core._nth.call(null,chunk__22233,i__22235);
speclj.reporting.report_runs.call(null,reporter,results);


var G__22260 = seq__22232;
var G__22261 = chunk__22233;
var G__22262 = count__22234;
var G__22263 = (i__22235 + (1));
seq__22232 = G__22260;
chunk__22233 = G__22261;
count__22234 = G__22262;
i__22235 = G__22263;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22232);
if(temp__5825__auto__){
var seq__22232__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22232__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22232__$1);
var G__22264 = cljs.core.chunk_rest.call(null,seq__22232__$1);
var G__22265 = c__5548__auto__;
var G__22266 = cljs.core.count.call(null,c__5548__auto__);
var G__22267 = (0);
seq__22232 = G__22264;
chunk__22233 = G__22265;
count__22234 = G__22266;
i__22235 = G__22267;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22232__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__22268 = cljs.core.next.call(null,seq__22232__$1);
var G__22269 = null;
var G__22270 = (0);
var G__22271 = (0);
seq__22232 = G__22268;
chunk__22233 = G__22269;
count__22234 = G__22270;
i__22235 = G__22271;
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
var seq__22256 = cljs.core.seq.call(null,reporters);
var chunk__22257 = null;
var count__22258 = (0);
var i__22259 = (0);
while(true){
if((i__22259 < count__22258)){
var reporter = cljs.core._nth.call(null,chunk__22257,i__22259);
speclj.reporting.report_message.call(null,reporter,message);


var G__22276 = seq__22256;
var G__22277 = chunk__22257;
var G__22278 = count__22258;
var G__22279 = (i__22259 + (1));
seq__22256 = G__22276;
chunk__22257 = G__22277;
count__22258 = G__22278;
i__22259 = G__22279;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22256);
if(temp__5825__auto__){
var seq__22256__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22256__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22256__$1);
var G__22280 = cljs.core.chunk_rest.call(null,seq__22256__$1);
var G__22281 = c__5548__auto__;
var G__22282 = cljs.core.count.call(null,c__5548__auto__);
var G__22283 = (0);
seq__22256 = G__22280;
chunk__22257 = G__22281;
count__22258 = G__22282;
i__22259 = G__22283;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22256__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__22284 = cljs.core.next.call(null,seq__22256__$1);
var G__22285 = null;
var G__22286 = (0);
var G__22287 = (0);
seq__22256 = G__22284;
chunk__22257 = G__22285;
count__22258 = G__22286;
i__22259 = G__22287;
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
var seq__22272 = cljs.core.seq.call(null,reporters);
var chunk__22273 = null;
var count__22274 = (0);
var i__22275 = (0);
while(true){
if((i__22275 < count__22274)){
var reporter = cljs.core._nth.call(null,chunk__22273,i__22275);
speclj.reporting.report_error.call(null,reporter,exception);


var G__22288 = seq__22272;
var G__22289 = chunk__22273;
var G__22290 = count__22274;
var G__22291 = (i__22275 + (1));
seq__22272 = G__22288;
chunk__22273 = G__22289;
count__22274 = G__22290;
i__22275 = G__22291;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__22272);
if(temp__5825__auto__){
var seq__22272__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22272__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__22272__$1);
var G__22292 = cljs.core.chunk_rest.call(null,seq__22272__$1);
var G__22293 = c__5548__auto__;
var G__22294 = cljs.core.count.call(null,c__5548__auto__);
var G__22295 = (0);
seq__22272 = G__22292;
chunk__22273 = G__22293;
count__22274 = G__22294;
i__22275 = G__22295;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__22272__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__22296 = cljs.core.next.call(null,seq__22272__$1);
var G__22297 = null;
var G__22298 = (0);
var G__22299 = (0);
seq__22272 = G__22296;
chunk__22273 = G__22297;
count__22274 = G__22298;
i__22275 = G__22299;
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
