// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('c3kit.wire.apic');
goog.require('cljs.core');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.apron.schema');
goog.require('c3kit.wire.flashc');
c3kit.wire.apic.response_schema = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.Keyword(null,"flash","flash",934660619),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033)], null)], null),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ignore","ignore",-1631542033)], null),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
c3kit.wire.apic.conform_error_response = (function c3kit$wire$apic$conform_error_response(response){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to conform response."], null);
}),null)),null,(49),null);

var seq__15075_15087 = cljs.core.seq.call(null,c3kit.apron.schema.messages.call(null,response));
var chunk__15076_15088 = null;
var count__15077_15089 = (0);
var i__15078_15090 = (0);
while(true){
if((i__15078_15090 < count__15077_15089)){
var message_15091 = cljs.core._nth.call(null,chunk__15076_15088,i__15078_15090);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__15075_15087,chunk__15076_15088,count__15077_15089,i__15078_15090,message_15091){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_15091], null);
});})(seq__15075_15087,chunk__15076_15088,count__15077_15089,i__15078_15090,message_15091))
,null)),null,(52),null);


var G__15093 = seq__15075_15087;
var G__15094 = chunk__15076_15088;
var G__15095 = count__15077_15089;
var G__15096 = (i__15078_15090 + (1));
seq__15075_15087 = G__15093;
chunk__15076_15088 = G__15094;
count__15077_15089 = G__15095;
i__15078_15090 = G__15096;
continue;
} else {
var temp__5825__auto___15098 = cljs.core.seq.call(null,seq__15075_15087);
if(temp__5825__auto___15098){
var seq__15075_15099__$1 = temp__5825__auto___15098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15075_15099__$1)){
var c__5548__auto___15100 = cljs.core.chunk_first.call(null,seq__15075_15099__$1);
var G__15101 = cljs.core.chunk_rest.call(null,seq__15075_15099__$1);
var G__15102 = c__5548__auto___15100;
var G__15103 = cljs.core.count.call(null,c__5548__auto___15100);
var G__15104 = (0);
seq__15075_15087 = G__15101;
chunk__15076_15088 = G__15102;
count__15077_15089 = G__15103;
i__15078_15090 = G__15104;
continue;
} else {
var message_15105 = cljs.core.first.call(null,seq__15075_15099__$1);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"c3kit.wire.apic",null,null,null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (seq__15075_15087,chunk__15076_15088,count__15077_15089,i__15078_15090,message_15105,seq__15075_15099__$1,temp__5825__auto___15098){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [message_15105], null);
});})(seq__15075_15087,chunk__15076_15088,count__15077_15089,i__15078_15090,message_15105,seq__15075_15099__$1,temp__5825__auto___15098))
,null)),null,(53),null);


var G__15106 = cljs.core.next.call(null,seq__15075_15099__$1);
var G__15107 = null;
var G__15108 = (0);
var G__15109 = (0);
seq__15075_15087 = G__15106;
chunk__15076_15088 = G__15107;
count__15077_15089 = G__15108;
i__15078_15090 = G__15109;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
});
c3kit.wire.apic.conform_response = (function c3kit$wire$apic$conform_response(response){
var response__$1 = c3kit.apron.schema.conform.call(null,c3kit.wire.apic.response_schema,response);
var G__15085 = response__$1;
if(c3kit.apron.schema.error_QMARK_.call(null,response__$1)){
return c3kit.wire.apic.conform_error_response.call(null,G__15085);
} else {
return G__15085;
}
});
c3kit.wire.apic.flash_success = (function c3kit$wire$apic$flash_success(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.success.call(null,msg));
});
c3kit.wire.apic.flash_warn = (function c3kit$wire$apic$flash_warn(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.warn.call(null,msg));
});
c3kit.wire.apic.flash_error = (function c3kit$wire$apic$flash_error(response,msg){
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"flash","flash",934660619),c3kit.apron.corec.conjv,c3kit.wire.flashc.error.call(null,msg));
});
c3kit.wire.apic.flash_level = (function c3kit$wire$apic$flash_level(response,n){
return c3kit.wire.flashc.level.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.flash_text = (function c3kit$wire$apic$flash_text(response,n){
return c3kit.wire.flashc.text.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response),n));
});
c3kit.wire.apic.first_flash = (function c3kit$wire$apic$first_flash(response){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"flash","flash",934660619).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.first_flash_text = (function c3kit$wire$apic$first_flash_text(response){
return c3kit.wire.flashc.text.call(null,c3kit.wire.apic.first_flash.call(null,response));
});
/**
 * The request was processed without a hitch.
 */
c3kit.wire.apic.ok = (function c3kit$wire$apic$ok(var_args){
var G__15097 = arguments.length;
switch (G__15097) {
case 0:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236)], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"ok","ok",967785236)], null);
}));

(c3kit.wire.apic.ok.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_success.call(null,c3kit.wire.apic.ok.call(null,payload),msg);
}));

(c3kit.wire.apic.ok.cljs$lang$maxFixedArity = 2);

/**
 * The resource has been moved
 */
c3kit.wire.apic.redirect = (function c3kit$wire$apic$redirect(var_args){
var G__15111 = arguments.length;
switch (G__15111) {
case 1:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null);
}));

(c3kit.wire.apic.redirect.cljs$core$IFn$_invoke$arity$2 = (function (uri,msg){
return c3kit.wire.apic.flash_warn.call(null,c3kit.wire.apic.redirect.call(null,uri),msg);
}));

(c3kit.wire.apic.redirect.cljs$lang$maxFixedArity = 2);

/**
 * The request failed for anticipated reasons.
 */
c3kit.wire.apic.fail = (function c3kit$wire$apic$fail(var_args){
var G__15116 = arguments.length;
switch (G__15116) {
case 0:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"fail","fail",1706214930)], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"fail","fail",1706214930)], null);
}));

(c3kit.wire.apic.fail.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error.call(null,c3kit.wire.apic.fail.call(null,payload),msg);
}));

(c3kit.wire.apic.fail.cljs$lang$maxFixedArity = 2);

/**
 * An unexpected exception was thrown while processing the request.
 */
c3kit.wire.apic.error = (function c3kit$wire$apic$error(var_args){
var G__15122 = arguments.length;
switch (G__15122) {
case 0:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$1 = (function (payload){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),payload,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032)], null);
}));

(c3kit.wire.apic.error.cljs$core$IFn$_invoke$arity$2 = (function (payload,msg){
return c3kit.wire.apic.flash_error.call(null,c3kit.wire.apic.error.call(null,payload),msg);
}));

(c3kit.wire.apic.error.cljs$lang$maxFixedArity = 2);

c3kit.wire.apic.status = (function c3kit$wire$apic$status(response){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
});
c3kit.wire.apic.payload = (function c3kit$wire$apic$payload(response){
return new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(response);
});
c3kit.wire.apic.uri = (function c3kit$wire$apic$uri(response){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(response);
});
c3kit.wire.apic.error_QMARK_ = (function c3kit$wire$apic$error_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.fail_QMARK_ = (function c3kit$wire$apic$fail_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.redirect_QMARK_ = (function c3kit$wire$apic$redirect_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});
c3kit.wire.apic.ok_QMARK_ = (function c3kit$wire$apic$ok_QMARK_(response){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
});

//# sourceMappingURL=apic.js.map
