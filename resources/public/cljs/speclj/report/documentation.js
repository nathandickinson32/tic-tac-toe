// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('speclj.report.documentation');
goog.require('cljs.core');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
speclj.report.documentation.level_of = (function speclj$report$documentation$level_of(component){
var component__$1 = cljs.core.deref.call(null,component.parent);
var level = (0);
while(true){
if(cljs.core.truth_(component__$1)){
var G__25016 = cljs.core.deref.call(null,component__$1.parent);
var G__25017 = (level + (1));
component__$1 = G__25016;
level = G__25017;
continue;
} else {
return level;
}
break;
}
});
speclj.report.documentation.maybe_focused = (function speclj$report$documentation$maybe_focused(text,component){
var G__25015 = text;
if(cljs.core.truth_(cljs.core.deref.call(null,component.is_focused_QMARK_))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25015)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.yellow.call(null,"[FOCUS]"))].join('');
} else {
return G__25015;
}
});
speclj.report.documentation.maybe_profile = (function speclj$report$documentation$maybe_profile(var_args){
var G__25023 = arguments.length;
switch (G__25023) {
case 1:
return speclj.report.documentation.maybe_profile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.report.documentation.maybe_profile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.report.documentation.maybe_profile.cljs$core$IFn$_invoke$arity$1 = (function (text){
var G__25025 = text;
if(cljs.core.truth_(speclj.config._STAR_profile_QMARK__STAR_)){
return ["           ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25025)].join('');
} else {
return G__25025;
}
}));

(speclj.report.documentation.maybe_profile.cljs$core$IFn$_invoke$arity$2 = (function (text,result){
var G__25026 = text;
if(cljs.core.truth_(speclj.config._STAR_profile_QMARK__STAR_)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.yellow.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.format_seconds.call(null,result.seconds)),"s] "].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25026)].join('');
} else {
return G__25026;
}
}));

(speclj.report.documentation.maybe_profile.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.documentation.DocumentationReporter = (function (){
});
(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (_this,message){
var self__ = this;
var _this__$1 = this;
cljs.core.println.call(null,message);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (_this,description){
var self__ = this;
var _this__$1 = this;
var level = speclj.report.documentation.level_of.call(null,description);
if((level === (0))){
cljs.core.println.call(null);
} else {
}

var output = speclj.report.documentation.maybe_profile.call(null,speclj.report.documentation.maybe_focused.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.indent.call(null,level,description.name)),description));
cljs.core.println.call(null,output);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
var output = speclj.report.documentation.maybe_profile.call(null,speclj.report.documentation.maybe_focused.call(null,speclj.reporting.green.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name)),characteristic),result);
cljs.core.println.call(null,output);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
var output = speclj.report.documentation.maybe_profile.call(null,speclj.reporting.yellow.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name," (PENDING: ",speclj.platform.error_message.call(null,result.exception),")")),result);
cljs.core.println.call(null,output);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of.call(null,characteristic);
var output = speclj.report.documentation.maybe_profile.call(null,speclj.report.documentation.maybe_focused.call(null,speclj.reporting.red.call(null,speclj.reporting.indent.call(null,(level - (1)),"- ",characteristic.name," (FAILED)")),characteristic),result);
cljs.core.println.call(null,output);

return cljs.core.flush.call(null);
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (_this,result){
var self__ = this;
var _this__$1 = this;
return cljs.core.println.call(null,speclj.reporting.red.call(null,result.exception.toString()));
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (_this,results){
var self__ = this;
var _this__$1 = this;
return speclj.report.progress.print_summary.call(null,results);
}));

(speclj.report.documentation.DocumentationReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.documentation.DocumentationReporter.cljs$lang$type = true);

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorStr = "speclj.report.documentation/DocumentationReporter");

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write.call(null,writer__5311__auto__,"speclj.report.documentation/DocumentationReporter");
}));

/**
 * Positional factory function for speclj.report.documentation/DocumentationReporter.
 */
speclj.report.documentation.__GT_DocumentationReporter = (function speclj$report$documentation$__GT_DocumentationReporter(){
return (new speclj.report.documentation.DocumentationReporter());
});

speclj.report.documentation.new_documentation_reporter = (function speclj$report$documentation$new_documentation_reporter(){
return (new speclj.report.documentation.DocumentationReporter());
});
goog.exportSymbol('speclj.report.documentation.new_documentation_reporter', speclj.report.documentation.new_documentation_reporter);

//# sourceMappingURL=documentation.js.map
