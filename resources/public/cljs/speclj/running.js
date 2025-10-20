// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.error');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_.call(null,component)) || (speclj.components.is_characteristic_QMARK_.call(null,component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref.call(null,component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
var and__5023__auto__ = speclj.components.is_description_QMARK_.call(null,component);
if(and__5023__auto__){
return cljs.core.deref.call(null,component.has_focus_QMARK_);
} else {
return and__5023__auto__;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__5025__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5825__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
var G__23103 = parent;
component = G__23103;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__5025__auto__ = speclj.running.focused_QMARK_.call(null,component);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = speclj.running.has_focus_QMARK_.call(null,component);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.not.call(null,speclj.running.focus_mode_QMARK_.call(null,component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_.call(null,component)){
return cljs.core.concat.call(null,cljs.core.deref.call(null,component.characteristics),cljs.core.deref.call(null,component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_.call(null,component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_BANG_,cljs.core.deref.call(null,component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_.call(null,component);

return cljs.core.doall.call(null,cljs.core.map.call(null,speclj.running.focus_children_BANG_,cljs.core.deref.call(null,component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5825__auto__ = cljs.core.deref.call(null,component.parent);
if(cljs.core.truth_(temp__5825__auto__)){
var parent = temp__5825__auto__;
cljs.core.reset_BANG_.call(null,parent.has_focus_QMARK_,true);

var G__23124 = parent;
component = G__23124;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__23119 = cljs.core.seq.call(null,descriptions);
var chunk__23120 = null;
var count__23121 = (0);
var i__23122 = (0);
while(true){
if((i__23122 < count__23121)){
var component = cljs.core._nth.call(null,chunk__23120,i__23122);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__23132 = seq__23119;
var G__23133 = chunk__23120;
var G__23134 = count__23121;
var G__23135 = (i__23122 + (1));
seq__23119 = G__23132;
chunk__23120 = G__23133;
count__23121 = G__23134;
i__23122 = G__23135;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__23119);
if(temp__5825__auto__){
var seq__23119__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23119__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__23119__$1);
var G__23142 = cljs.core.chunk_rest.call(null,seq__23119__$1);
var G__23143 = c__5548__auto__;
var G__23144 = cljs.core.count.call(null,c__5548__auto__);
var G__23145 = (0);
seq__23119 = G__23142;
chunk__23120 = G__23143;
count__23121 = G__23144;
i__23122 = G__23145;
continue;
} else {
var component = cljs.core.first.call(null,seq__23119__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_.call(null,component))){
speclj.running.enable_focus_mode_BANG_.call(null,component);

speclj.running.focus_children_BANG_.call(null,component);

speclj.running.focus_characteristics_BANG_.call(null,component);
} else {
}


var G__23152 = cljs.core.next.call(null,seq__23119__$1);
var G__23153 = null;
var G__23154 = (0);
var G__23155 = (0);
seq__23119 = G__23152;
chunk__23120 = G__23153;
count__23121 = G__23154;
i__23122 = G__23155;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
return cljs.core.run_BANG_.call(null,speclj.running.enable_focus_mode_BANG_,cljs.core.filter.call(null,speclj.running.focused_QMARK_,characteristics));
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq.call(null,cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_.call(null,cljs.core.filter.call(null,speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
cljs.core.run_BANG_.call(null,speclj.running.scan_for_focus_BANG_,descriptions);

var or__5025__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,speclj.running.focus_mode_QMARK_,descriptions));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return descriptions;
}
});
speclj.running.descriptions_with_namespaces = (function speclj$running$descriptions_with_namespaces(descriptions,namespaces){
var G__23138 = descriptions;
if(cljs.core.truth_(namespaces)){
return cljs.core.filter.call(null,(function (p1__23136_SHARP_){
return namespaces.call(null,p1__23136_SHARP_.ns);
}),G__23138);
} else {
return G__23138;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__23146 = cljs.core.seq.call(null,components);
var chunk__23147 = null;
var count__23148 = (0);
var i__23149 = (0);
while(true){
if((i__23149 < count__23148)){
var component = cljs.core._nth.call(null,chunk__23147,i__23149);
component.body.call(null);


var G__23162 = seq__23146;
var G__23163 = chunk__23147;
var G__23164 = count__23148;
var G__23165 = (i__23149 + (1));
seq__23146 = G__23162;
chunk__23147 = G__23163;
count__23148 = G__23164;
i__23149 = G__23165;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__23146);
if(temp__5825__auto__){
var seq__23146__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23146__$1)){
var c__5548__auto__ = cljs.core.chunk_first.call(null,seq__23146__$1);
var G__23166 = cljs.core.chunk_rest.call(null,seq__23146__$1);
var G__23167 = c__5548__auto__;
var G__23168 = cljs.core.count.call(null,c__5548__auto__);
var G__23169 = (0);
seq__23146 = G__23166;
chunk__23147 = G__23167;
count__23148 = G__23168;
i__23149 = G__23169;
continue;
} else {
var component = cljs.core.first.call(null,seq__23146__$1);
component.body.call(null);


var G__23172 = cljs.core.next.call(null,seq__23146__$1);
var G__23173 = null;
var G__23174 = (0);
var G__23175 = (0);
seq__23146 = G__23172;
chunk__23147 = G__23173;
count__23148 = G__23174;
i__23149 = G__23175;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
return cljs.core.run_BANG_.call(null,speclj.components.reset_with,withs);
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__23178 = cljs.core.deref.call(null,description__$1.parent);
var G__23179 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__23178;
components = G__23179;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure,assertions){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure,assertions], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var _STAR_assertions_STAR__orig_val__23185 = speclj.components._STAR_assertions_STAR_;
var _STAR_assertions_STAR__temp_val__23186 = cljs.core.atom.call(null,(0));
(speclj.components._STAR_assertions_STAR_ = _STAR_assertions_STAR__temp_val__23186);

try{var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__23180_SHARP_){
return cljs.core.deref.call(null,p1__23180_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__23181_SHARP_){
return cljs.core.deref.call(null,p1__23181_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__23182_SHARP_){
return cljs.core.deref.call(null,p1__23182_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__23183_SHARP_){
return p1__23183_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__23184_SHARP_){
return cljs.core.deref.call(null,p1__23184_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null,cljs.core.deref.call(null,speclj.components._STAR_assertions_STAR_));
}catch (e23187){var e = e23187;
if(speclj.error.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e,null);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e,cljs.core.deref.call(null,speclj.components._STAR_assertions_STAR_));
}
}finally {speclj.running.reset_withs.call(null,withs);
}}finally {(speclj.components._STAR_assertions_STAR_ = _STAR_assertions_STAR__orig_val__23185);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5503__auto__ = (function speclj$running$do_characteristics_$_iter__23188(s__23189){
return (new cljs.core.LazySeq(null,(function (){
var s__23189__$1 = s__23189;
while(true){
var temp__5825__auto__ = cljs.core.seq.call(null,s__23189__$1);
if(temp__5825__auto__){
var s__23189__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23189__$2)){
var c__5501__auto__ = cljs.core.chunk_first.call(null,s__23189__$2);
var size__5502__auto__ = cljs.core.count.call(null,c__5501__auto__);
var b__23191 = cljs.core.chunk_buffer.call(null,size__5502__auto__);
if((function (){var i__23190 = (0);
while(true){
if((i__23190 < size__5502__auto__)){
var characteristic = cljs.core._nth.call(null,c__5501__auto__,i__23190);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
cljs.core.chunk_append.call(null,b__23191,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__23207 = (i__23190 + (1));
i__23190 = G__23207;
continue;
} else {
var G__23208 = (i__23190 + (1));
i__23190 = G__23208;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23191),speclj$running$do_characteristics_$_iter__23188.call(null,cljs.core.chunk_rest.call(null,s__23189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23191),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__23189__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,characteristic))){
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__23188.call(null,cljs.core.rest.call(null,s__23189__$2)));
} else {
var G__23216 = cljs.core.rest.call(null,s__23189__$2);
s__23189__$1 = G__23216;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,children)){
var G__23219 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,children),reporters));
var G__23220 = cljs.core.rest.call(null,children);
results__$1 = G__23219;
children = G__23220;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
cljs.core.run_BANG_.call(null,(function (p1__23197_SHARP_){
return p1__23197_SHARP_.set_var_BANG_.call(null,p1__23197_SHARP_);
}),withs);

try{return body.call(null);
}finally {cljs.core.run_BANG_.call(null,(function (p1__23199_SHARP_){
return p1__23199_SHARP_.set_var_BANG_.call(null,null);
}),withs);
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__23206_SHARP_){
return p1__23206_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_.call(null,description))){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
var _STAR_assertions_STAR__orig_val__23212 = speclj.components._STAR_assertions_STAR_;
var _STAR_assertions_STAR__temp_val__23213 = cljs.core.atom.call(null,(0));
(speclj.components._STAR_assertions_STAR_ = _STAR_assertions_STAR__temp_val__23213);

try{speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
}finally {(speclj.components._STAR_assertions_STAR_ = _STAR_assertions_STAR__orig_val__23212);
}} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_23230 = (function (this$,directories,reporters){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running.run_directories[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,directories,reporters);
} else {
var m__5372__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_23230.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_23231 = (function (this$,description){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running.submit_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description);
} else {
var m__5372__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_23231.call(null,this$,description);
}
});

var speclj$running$Runner$_filter_descriptions$dyn_23232 = (function (this$,namespaces){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running._filter_descriptions[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,namespaces);
} else {
var m__5372__auto__ = (speclj.running._filter_descriptions["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,namespaces);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.-filter-descriptions",this$);
}
}
});
speclj.running._filter_descriptions = (function speclj$running$_filter_descriptions(this$,namespaces){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$_filter_descriptions$arity$2 == null)))))){
return this$.speclj$running$Runner$_filter_descriptions$arity$2(this$,namespaces);
} else {
return speclj$running$Runner$_filter_descriptions$dyn_23232.call(null,this$,namespaces);
}
});

var speclj$running$Runner$_get_descriptions$dyn_23233 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running._get_descriptions[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$);
} else {
var m__5372__auto__ = (speclj.running._get_descriptions["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.-get-descriptions",this$);
}
}
});
speclj.running._get_descriptions = (function speclj$running$_get_descriptions(this$){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$_get_descriptions$arity$1 == null)))))){
return this$.speclj$running$Runner$_get_descriptions$arity$1(this$);
} else {
return speclj$running$Runner$_get_descriptions$dyn_23233.call(null,this$);
}
});

var speclj$running$Runner$run_description$dyn_23236 = (function (this$,description,reporters){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running.run_description[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,description,reporters);
} else {
var m__5372__auto__ = (speclj.running.run_description["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_23236.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_23238 = (function (this$,reporters){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return m__5374__auto__.call(null,this$,reporters);
} else {
var m__5372__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5372__auto__ == null)))){
return m__5372__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_23238.call(null,this$,reporters);
}
});

/**
 * Protocol method defined as function for JavaScript interoperability
 */
speclj.running.filter_descriptions = (function speclj$running$filter_descriptions(runner,namespaces){
return speclj.running._filter_descriptions.call(null,runner,cljs.core.js__GT_clj.call(null,namespaces));
});
goog.exportSymbol('speclj.running.filter_descriptions', speclj.running.filter_descriptions);
speclj.running.get_descriptions = (function speclj$running$get_descriptions(runner){
return cljs.core.into_array.call(null,speclj.running._get_descriptions.call(null,runner));
});
goog.exportSymbol('speclj.running.get_descriptions', speclj.running.get_descriptions);

//# sourceMappingURL=running.js.map
