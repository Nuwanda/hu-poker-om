// Compiled by ClojureScript 0.0-2280
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__15225__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__15225 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__15225__delegate.call(this,m,k,f,x1,x2,xs);};
G__15225.cljs$lang$maxFixedArity = 5;
G__15225.cljs$lang$applyTo = (function (arglist__15226){
var m = cljs.core.first(arglist__15226);
arglist__15226 = cljs.core.next(arglist__15226);
var k = cljs.core.first(arglist__15226);
arglist__15226 = cljs.core.next(arglist__15226);
var f = cljs.core.first(arglist__15226);
arglist__15226 = cljs.core.next(arglist__15226);
var x1 = cljs.core.first(arglist__15226);
arglist__15226 = cljs.core.next(arglist__15226);
var x2 = cljs.core.first(arglist__15226);
var xs = cljs.core.rest(arglist__15226);
return G__15225__delegate(m,k,f,x1,x2,xs);
});
G__15225.cljs$core$IFn$_invoke$arity$variadic = G__15225__delegate;
return G__15225;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15235_15241 = cljs.core.seq.call(null,m);var chunk__15236_15242 = null;var count__15237_15243 = (0);var i__15238_15244 = (0);while(true){
if((i__15238_15244 < count__15237_15243))
{var vec__15239_15245 = cljs.core._nth.call(null,chunk__15236_15242,i__15238_15244);var k_15246 = cljs.core.nth.call(null,vec__15239_15245,(0),null);var v_15247 = cljs.core.nth.call(null,vec__15239_15245,(1),null);var m15234_15248 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15234_15248,k_15246,f.call(null,v_15247)));
{
var G__15249 = seq__15235_15241;
var G__15250 = chunk__15236_15242;
var G__15251 = count__15237_15243;
var G__15252 = (i__15238_15244 + (1));
seq__15235_15241 = G__15249;
chunk__15236_15242 = G__15250;
count__15237_15243 = G__15251;
i__15238_15244 = G__15252;
continue;
}
} else
{var temp__4126__auto___15253 = cljs.core.seq.call(null,seq__15235_15241);if(temp__4126__auto___15253)
{var seq__15235_15254__$1 = temp__4126__auto___15253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15235_15254__$1))
{var c__4298__auto___15255 = cljs.core.chunk_first.call(null,seq__15235_15254__$1);{
var G__15256 = cljs.core.chunk_rest.call(null,seq__15235_15254__$1);
var G__15257 = c__4298__auto___15255;
var G__15258 = cljs.core.count.call(null,c__4298__auto___15255);
var G__15259 = (0);
seq__15235_15241 = G__15256;
chunk__15236_15242 = G__15257;
count__15237_15243 = G__15258;
i__15238_15244 = G__15259;
continue;
}
} else
{var vec__15240_15260 = cljs.core.first.call(null,seq__15235_15254__$1);var k_15261 = cljs.core.nth.call(null,vec__15240_15260,(0),null);var v_15262 = cljs.core.nth.call(null,vec__15240_15260,(1),null);var m15234_15263 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15234_15263,k_15261,f.call(null,v_15262)));
{
var G__15264 = cljs.core.next.call(null,seq__15235_15254__$1);
var G__15265 = null;
var G__15266 = (0);
var G__15267 = (0);
seq__15235_15241 = G__15264;
chunk__15236_15242 = G__15265;
count__15237_15243 = G__15266;
i__15238_15244 = G__15267;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6847__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15276_15282 = cljs.core.seq.call(null,m);var chunk__15277_15283 = null;var count__15278_15284 = (0);var i__15279_15285 = (0);while(true){
if((i__15279_15285 < count__15278_15284))
{var vec__15280_15286 = cljs.core._nth.call(null,chunk__15277_15283,i__15279_15285);var k_15287 = cljs.core.nth.call(null,vec__15280_15286,(0),null);var v_15288 = cljs.core.nth.call(null,vec__15280_15286,(1),null);var m15275_15289 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15275_15289,f.call(null,k_15287),v_15288));
{
var G__15290 = seq__15276_15282;
var G__15291 = chunk__15277_15283;
var G__15292 = count__15278_15284;
var G__15293 = (i__15279_15285 + (1));
seq__15276_15282 = G__15290;
chunk__15277_15283 = G__15291;
count__15278_15284 = G__15292;
i__15279_15285 = G__15293;
continue;
}
} else
{var temp__4126__auto___15294 = cljs.core.seq.call(null,seq__15276_15282);if(temp__4126__auto___15294)
{var seq__15276_15295__$1 = temp__4126__auto___15294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15276_15295__$1))
{var c__4298__auto___15296 = cljs.core.chunk_first.call(null,seq__15276_15295__$1);{
var G__15297 = cljs.core.chunk_rest.call(null,seq__15276_15295__$1);
var G__15298 = c__4298__auto___15296;
var G__15299 = cljs.core.count.call(null,c__4298__auto___15296);
var G__15300 = (0);
seq__15276_15282 = G__15297;
chunk__15277_15283 = G__15298;
count__15278_15284 = G__15299;
i__15279_15285 = G__15300;
continue;
}
} else
{var vec__15281_15301 = cljs.core.first.call(null,seq__15276_15295__$1);var k_15302 = cljs.core.nth.call(null,vec__15281_15301,(0),null);var v_15303 = cljs.core.nth.call(null,vec__15281_15301,(1),null);var m15275_15304 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15275_15304,f.call(null,k_15302),v_15303));
{
var G__15305 = cljs.core.next.call(null,seq__15276_15295__$1);
var G__15306 = null;
var G__15307 = (0);
var G__15308 = (0);
seq__15276_15282 = G__15305;
chunk__15277_15283 = G__15306;
count__15278_15284 = G__15307;
i__15279_15285 = G__15308;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6847__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15315_15319 = cljs.core.seq.call(null,ks);var chunk__15316_15320 = null;var count__15317_15321 = (0);var i__15318_15322 = (0);while(true){
if((i__15318_15322 < count__15317_15321))
{var k_15323 = cljs.core._nth.call(null,chunk__15316_15320,i__15318_15322);var m15314_15324 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15314_15324,k_15323,f.call(null,k_15323)));
{
var G__15325 = seq__15315_15319;
var G__15326 = chunk__15316_15320;
var G__15327 = count__15317_15321;
var G__15328 = (i__15318_15322 + (1));
seq__15315_15319 = G__15325;
chunk__15316_15320 = G__15326;
count__15317_15321 = G__15327;
i__15318_15322 = G__15328;
continue;
}
} else
{var temp__4126__auto___15329 = cljs.core.seq.call(null,seq__15315_15319);if(temp__4126__auto___15329)
{var seq__15315_15330__$1 = temp__4126__auto___15329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15315_15330__$1))
{var c__4298__auto___15331 = cljs.core.chunk_first.call(null,seq__15315_15330__$1);{
var G__15332 = cljs.core.chunk_rest.call(null,seq__15315_15330__$1);
var G__15333 = c__4298__auto___15331;
var G__15334 = cljs.core.count.call(null,c__4298__auto___15331);
var G__15335 = (0);
seq__15315_15319 = G__15332;
chunk__15316_15320 = G__15333;
count__15317_15321 = G__15334;
i__15318_15322 = G__15335;
continue;
}
} else
{var k_15336 = cljs.core.first.call(null,seq__15315_15330__$1);var m15314_15337 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15314_15337,k_15336,f.call(null,k_15336)));
{
var G__15338 = cljs.core.next.call(null,seq__15315_15330__$1);
var G__15339 = null;
var G__15340 = (0);
var G__15341 = (0);
seq__15315_15319 = G__15338;
chunk__15316_15320 = G__15339;
count__15317_15321 = G__15340;
i__15318_15322 = G__15341;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6847__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15348_15352 = cljs.core.seq.call(null,vs);var chunk__15349_15353 = null;var count__15350_15354 = (0);var i__15351_15355 = (0);while(true){
if((i__15351_15355 < count__15350_15354))
{var v_15356 = cljs.core._nth.call(null,chunk__15349_15353,i__15351_15355);var m15347_15357 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15347_15357,f.call(null,v_15356),v_15356));
{
var G__15358 = seq__15348_15352;
var G__15359 = chunk__15349_15353;
var G__15360 = count__15350_15354;
var G__15361 = (i__15351_15355 + (1));
seq__15348_15352 = G__15358;
chunk__15349_15353 = G__15359;
count__15350_15354 = G__15360;
i__15351_15355 = G__15361;
continue;
}
} else
{var temp__4126__auto___15362 = cljs.core.seq.call(null,seq__15348_15352);if(temp__4126__auto___15362)
{var seq__15348_15363__$1 = temp__4126__auto___15362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15348_15363__$1))
{var c__4298__auto___15364 = cljs.core.chunk_first.call(null,seq__15348_15363__$1);{
var G__15365 = cljs.core.chunk_rest.call(null,seq__15348_15363__$1);
var G__15366 = c__4298__auto___15364;
var G__15367 = cljs.core.count.call(null,c__4298__auto___15364);
var G__15368 = (0);
seq__15348_15352 = G__15365;
chunk__15349_15353 = G__15366;
count__15350_15354 = G__15367;
i__15351_15355 = G__15368;
continue;
}
} else
{var v_15369 = cljs.core.first.call(null,seq__15348_15363__$1);var m15347_15370 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15347_15370,f.call(null,v_15369),v_15369));
{
var G__15371 = cljs.core.next.call(null,seq__15348_15363__$1);
var G__15372 = null;
var G__15373 = (0);
var G__15374 = (0);
seq__15348_15352 = G__15371;
chunk__15349_15353 = G__15372;
count__15350_15354 = G__15373;
i__15351_15355 = G__15374;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6847__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__15375){var vec__15377 = p__15375;var k = cljs.core.nth.call(null,vec__15377,(0),null);var ks = cljs.core.nthnext.call(null,vec__15377,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3530__auto__ = ks;if(and__3530__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3530__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15386_15392 = cljs.core.seq.call(null,x);var chunk__15387_15393 = null;var count__15388_15394 = (0);var i__15389_15395 = (0);while(true){
if((i__15389_15395 < count__15388_15394))
{var vec__15390_15396 = cljs.core._nth.call(null,chunk__15387_15393,i__15389_15395);var k_15397 = cljs.core.nth.call(null,vec__15390_15396,(0),null);var v_15398 = cljs.core.nth.call(null,vec__15390_15396,(1),null);var m15385_15399 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15385_15399,((typeof k_15397 === 'string')?cljs.core.keyword.call(null,k_15397):k_15397),keywordize_map.call(null,v_15398)));
{
var G__15400 = seq__15386_15392;
var G__15401 = chunk__15387_15393;
var G__15402 = count__15388_15394;
var G__15403 = (i__15389_15395 + (1));
seq__15386_15392 = G__15400;
chunk__15387_15393 = G__15401;
count__15388_15394 = G__15402;
i__15389_15395 = G__15403;
continue;
}
} else
{var temp__4126__auto___15404 = cljs.core.seq.call(null,seq__15386_15392);if(temp__4126__auto___15404)
{var seq__15386_15405__$1 = temp__4126__auto___15404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15386_15405__$1))
{var c__4298__auto___15406 = cljs.core.chunk_first.call(null,seq__15386_15405__$1);{
var G__15407 = cljs.core.chunk_rest.call(null,seq__15386_15405__$1);
var G__15408 = c__4298__auto___15406;
var G__15409 = cljs.core.count.call(null,c__4298__auto___15406);
var G__15410 = (0);
seq__15386_15392 = G__15407;
chunk__15387_15393 = G__15408;
count__15388_15394 = G__15409;
i__15389_15395 = G__15410;
continue;
}
} else
{var vec__15391_15411 = cljs.core.first.call(null,seq__15386_15405__$1);var k_15412 = cljs.core.nth.call(null,vec__15391_15411,(0),null);var v_15413 = cljs.core.nth.call(null,vec__15391_15411,(1),null);var m15385_15414 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m15385_15414,((typeof k_15412 === 'string')?cljs.core.keyword.call(null,k_15412):k_15412),keywordize_map.call(null,v_15413)));
{
var G__15415 = cljs.core.next.call(null,seq__15386_15405__$1);
var G__15416 = null;
var G__15417 = (0);
var G__15418 = (0);
seq__15386_15392 = G__15415;
chunk__15387_15393 = G__15416;
count__15388_15394 = G__15417;
i__15389_15395 = G__15418;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6847__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__6916__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__6916__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__15419 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__15420 = cljs.core.next.call(null,ks);
m = G__15419;
ks = G__15420;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3542__auto__ = m;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4267__auto__ = (function iter__15429(s__15430){return (new cljs.core.LazySeq(null,(function (){var s__15430__$1 = s__15430;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15430__$1);if(temp__4126__auto__)
{var s__15430__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15430__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__15430__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__15432 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__15431 = (0);while(true){
if((i__15431 < size__4266__auto__))
{var vec__15435 = cljs.core._nth.call(null,c__4265__auto__,i__15431);var k = cljs.core.nth.call(null,vec__15435,(0),null);var v = cljs.core.nth.call(null,vec__15435,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__15432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15437 = (i__15431 + (1));
i__15431 = G__15437;
continue;
}
} else
{{
var G__15438 = (i__15431 + (1));
i__15431 = G__15438;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15432),iter__15429.call(null,cljs.core.chunk_rest.call(null,s__15430__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15432),null);
}
} else
{var vec__15436 = cljs.core.first.call(null,s__15430__$2);var k = cljs.core.nth.call(null,vec__15436,(0),null);var v = cljs.core.nth.call(null,vec__15436,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15429.call(null,cljs.core.rest.call(null,s__15430__$2)));
} else
{{
var G__15439 = cljs.core.rest.call(null,s__15430__$2);
s__15430__$1 = G__15439;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__15440){
var m = cljs.core.first(arglist__15440);
var kvs = cljs.core.rest(arglist__15440);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__15441){
var m = cljs.core.first(arglist__15441);
arglist__15441 = cljs.core.next(arglist__15441);
var key_seq = cljs.core.first(arglist__15441);
arglist__15441 = cljs.core.next(arglist__15441);
var f = cljs.core.first(arglist__15441);
var args = cljs.core.rest(arglist__15441);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4267__auto__ = ((function (s){
return (function iter__15446(s__15447){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__15447__$1 = s__15447;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15447__$1);if(temp__4126__auto__)
{var s__15447__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15447__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__15447__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__15449 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__15448 = (0);while(true){
if((i__15448 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__15448);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__15449,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__15450 = (i__15448 + (1));
i__15448 = G__15450;
continue;
}
} else
{{
var G__15451 = (i__15448 + (1));
i__15448 = G__15451;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15449),iter__15446.call(null,cljs.core.chunk_rest.call(null,s__15447__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15449),null);
}
} else
{var x = cljs.core.first.call(null,s__15447__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__15446.call(null,cljs.core.rest.call(null,s__15447__$2)));
} else
{{
var G__15452 = cljs.core.rest.call(null,s__15447__$2);
s__15447__$1 = G__15452;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4267__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__15453){
var colls = cljs.core.seq(arglist__15453);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__15454__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__15455 = conj_when.call(null,coll,x);
var G__15456 = cljs.core.first.call(null,xs);
var G__15457 = cljs.core.next.call(null,xs);
coll = G__15455;
x = G__15456;
xs = G__15457;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__15454 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15454__delegate.call(this,coll,x,xs);};
G__15454.cljs$lang$maxFixedArity = 2;
G__15454.cljs$lang$applyTo = (function (arglist__15458){
var coll = cljs.core.first(arglist__15458);
arglist__15458 = cljs.core.next(arglist__15458);
var x = cljs.core.first(arglist__15458);
var xs = cljs.core.rest(arglist__15458);
return G__15454__delegate(coll,x,xs);
});
G__15454.cljs$core$IFn$_invoke$arity$variadic = G__15454__delegate;
return G__15454;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__15460__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__15459_SHARP_){return cljs.core.apply.call(null,f,p1__15459_SHARP_,args);
}));
};
var G__15460 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15460__delegate.call(this,a,f,args);};
G__15460.cljs$lang$maxFixedArity = 2;
G__15460.cljs$lang$applyTo = (function (arglist__15461){
var a = cljs.core.first(arglist__15461);
arglist__15461 = cljs.core.next(arglist__15461);
var f = cljs.core.first(arglist__15461);
var args = cljs.core.rest(arglist__15461);
return G__15460__delegate(a,f,args);
});
G__15460.cljs$core$IFn$_invoke$arity$variadic = G__15460__delegate;
return G__15460;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__15462__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__15462 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15462__delegate.call(this,f,arg,args);};
G__15462.cljs$lang$maxFixedArity = 2;
G__15462.cljs$lang$applyTo = (function (arglist__15463){
var f = cljs.core.first(arglist__15463);
arglist__15463 = cljs.core.next(arglist__15463);
var arg = cljs.core.first(arglist__15463);
var args = cljs.core.rest(arglist__15463);
return G__15462__delegate(f,arg,args);
});
G__15462.cljs$core$IFn$_invoke$arity$variadic = G__15462__delegate;
return G__15462;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map