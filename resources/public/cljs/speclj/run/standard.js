// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.report.progress');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.armed = false;
goog.exportSymbol('speclj.run.standard.armed', speclj.run.standard.armed);

speclj.run.standard.counter = cljs.core.atom.call(null,(0));

speclj.run.standard.arm = (function speclj$run$standard$arm(){
return (speclj.run.standard.armed = true);
});
goog.exportSymbol('speclj.run.standard.arm', speclj.run.standard.arm);

speclj.run.standard.disarm = (function speclj$run$standard$disarm(){
return (speclj.run.standard.armed = false);
});
goog.exportSymbol('speclj.run.standard.disarm', speclj.run.standard.disarm);
speclj.run.standard.load_spec = (function speclj$run$standard$load_spec(_spec_file){
return alert("speclj.run.standard.load-spec:  I don't know how to do this.");
});
speclj.run.standard.try_load_spec = (function speclj$run$standard$try_load_spec(runner,file){
try{return speclj.run.standard.load_spec.call(null,file);
}catch (e23378){var e = e23378;
return speclj.running.process_compile_error.call(null,runner,e);
}});

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (_this,_directories,_reporters){
var self__ = this;
var _this__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$_get_descriptions$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.deref.call(null,self__.descriptions);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (_this,description){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$_filter_descriptions$arity$2 = (function (_this,namespaces){
var self__ = this;
var _this__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,speclj.running.descriptions_with_namespaces,namespaces);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (_this,description,reporters){
var self__ = this;
var _this__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__23380_23384 = cljs.core.seq.call(null,speclj.running.filter_focused.call(null,cljs.core.deref.call(null,self__.descriptions)));
var chunk__23381_23385 = null;
var count__23382_23386 = (0);
var i__23383_23387 = (0);
while(true){
if((i__23383_23387 < count__23382_23386)){
var description_23388 = cljs.core._nth.call(null,chunk__23381_23385,i__23383_23387);
speclj.running.run_description.call(null,this$__$1,description_23388,reporters);


var G__23389 = seq__23380_23384;
var G__23390 = chunk__23381_23385;
var G__23391 = count__23382_23386;
var G__23392 = (i__23383_23387 + (1));
seq__23380_23384 = G__23389;
chunk__23381_23385 = G__23390;
count__23382_23386 = G__23391;
i__23383_23387 = G__23392;
continue;
} else {
var temp__5825__auto___23393 = cljs.core.seq.call(null,seq__23380_23384);
if(temp__5825__auto___23393){
var seq__23380_23394__$1 = temp__5825__auto___23393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23380_23394__$1)){
var c__5548__auto___23395 = cljs.core.chunk_first.call(null,seq__23380_23394__$1);
var G__23396 = cljs.core.chunk_rest.call(null,seq__23380_23394__$1);
var G__23397 = c__5548__auto___23395;
var G__23398 = cljs.core.count.call(null,c__5548__auto___23395);
var G__23399 = (0);
seq__23380_23384 = G__23396;
chunk__23381_23385 = G__23397;
count__23382_23386 = G__23398;
i__23383_23387 = G__23399;
continue;
} else {
var description_23400 = cljs.core.first.call(null,seq__23380_23394__$1);
speclj.running.run_description.call(null,this$__$1,description_23400,reporters);


var G__23401 = cljs.core.next.call(null,seq__23380_23394__$1);
var G__23402 = null;
var G__23403 = (0);
var G__23404 = (0);
seq__23380_23384 = G__23401;
chunk__23381_23385 = G__23402;
count__23382_23386 = G__23403;
i__23383_23387 = G__23404;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,_opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
goog.exportSymbol('speclj.run.standard.new_standard_runner', speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.execute_active_runner = (function speclj$run$standard$execute_active_runner(){
var temp__5825__auto___23407 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5825__auto___23407)){
var filter_msg_23408 = temp__5825__auto___23407;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_23408);
} else {
}

return speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));
});
speclj.run.standard.config_with_defaults = (function speclj$run$standard$config_with_defaults(configurations){
var $ = cljs.core.apply.call(null,cljs.core.hash_map,configurations);
var $__$1 = cljs.core.update_keys.call(null,$,cljs.core.keyword);
return cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),$__$1);
});
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5755__auto__ = [];
var len__5749__auto___23414 = arguments.length;
var i__5750__auto___23415 = (0);
while(true){
if((i__5750__auto___23415 < len__5749__auto___23414)){
args__5755__auto__.push((arguments[i__5750__auto___23415]));

var G__23416 = (i__5750__auto___23415 + (1));
i__5750__auto___23415 = G__23416;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});
goog.exportSymbol('speclj.run.standard.run_specs', speclj.run.standard.run_specs);

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config.call(null,speclj.run.standard.config_with_defaults.call(null,configurations),(function (){
speclj.run.standard.execute_active_runner.call(null);

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq23410){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23410));
}));


//# sourceMappingURL=standard.js.map
