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
var G__14244__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__14244 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__14244__delegate.call(this,m,k,f,x1,x2,xs);};
G__14244.cljs$lang$maxFixedArity = 5;
G__14244.cljs$lang$applyTo = (function (arglist__14245){
var m = cljs.core.first(arglist__14245);
arglist__14245 = cljs.core.next(arglist__14245);
var k = cljs.core.first(arglist__14245);
arglist__14245 = cljs.core.next(arglist__14245);
var f = cljs.core.first(arglist__14245);
arglist__14245 = cljs.core.next(arglist__14245);
var x1 = cljs.core.first(arglist__14245);
arglist__14245 = cljs.core.next(arglist__14245);
var x2 = cljs.core.first(arglist__14245);
var xs = cljs.core.rest(arglist__14245);
return G__14244__delegate(m,k,f,x1,x2,xs);
});
G__14244.cljs$core$IFn$_invoke$arity$variadic = G__14244__delegate;
return G__14244;
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
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14254_14260 = cljs.core.seq.call(null,m);var chunk__14255_14261 = null;var count__14256_14262 = (0);var i__14257_14263 = (0);while(true){
if((i__14257_14263 < count__14256_14262))
{var vec__14258_14264 = cljs.core._nth.call(null,chunk__14255_14261,i__14257_14263);var k_14265 = cljs.core.nth.call(null,vec__14258_14264,(0),null);var v_14266 = cljs.core.nth.call(null,vec__14258_14264,(1),null);var m14253_14267 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14253_14267,k_14265,f.call(null,v_14266)));
{
var G__14268 = seq__14254_14260;
var G__14269 = chunk__14255_14261;
var G__14270 = count__14256_14262;
var G__14271 = (i__14257_14263 + (1));
seq__14254_14260 = G__14268;
chunk__14255_14261 = G__14269;
count__14256_14262 = G__14270;
i__14257_14263 = G__14271;
continue;
}
} else
{var temp__4126__auto___14272 = cljs.core.seq.call(null,seq__14254_14260);if(temp__4126__auto___14272)
{var seq__14254_14273__$1 = temp__4126__auto___14272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14254_14273__$1))
{var c__4298__auto___14274 = cljs.core.chunk_first.call(null,seq__14254_14273__$1);{
var G__14275 = cljs.core.chunk_rest.call(null,seq__14254_14273__$1);
var G__14276 = c__4298__auto___14274;
var G__14277 = cljs.core.count.call(null,c__4298__auto___14274);
var G__14278 = (0);
seq__14254_14260 = G__14275;
chunk__14255_14261 = G__14276;
count__14256_14262 = G__14277;
i__14257_14263 = G__14278;
continue;
}
} else
{var vec__14259_14279 = cljs.core.first.call(null,seq__14254_14273__$1);var k_14280 = cljs.core.nth.call(null,vec__14259_14279,(0),null);var v_14281 = cljs.core.nth.call(null,vec__14259_14279,(1),null);var m14253_14282 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14253_14282,k_14280,f.call(null,v_14281)));
{
var G__14283 = cljs.core.next.call(null,seq__14254_14273__$1);
var G__14284 = null;
var G__14285 = (0);
var G__14286 = (0);
seq__14254_14260 = G__14283;
chunk__14255_14261 = G__14284;
count__14256_14262 = G__14285;
i__14257_14263 = G__14286;
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
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14295_14301 = cljs.core.seq.call(null,m);var chunk__14296_14302 = null;var count__14297_14303 = (0);var i__14298_14304 = (0);while(true){
if((i__14298_14304 < count__14297_14303))
{var vec__14299_14305 = cljs.core._nth.call(null,chunk__14296_14302,i__14298_14304);var k_14306 = cljs.core.nth.call(null,vec__14299_14305,(0),null);var v_14307 = cljs.core.nth.call(null,vec__14299_14305,(1),null);var m14294_14308 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14294_14308,f.call(null,k_14306),v_14307));
{
var G__14309 = seq__14295_14301;
var G__14310 = chunk__14296_14302;
var G__14311 = count__14297_14303;
var G__14312 = (i__14298_14304 + (1));
seq__14295_14301 = G__14309;
chunk__14296_14302 = G__14310;
count__14297_14303 = G__14311;
i__14298_14304 = G__14312;
continue;
}
} else
{var temp__4126__auto___14313 = cljs.core.seq.call(null,seq__14295_14301);if(temp__4126__auto___14313)
{var seq__14295_14314__$1 = temp__4126__auto___14313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14295_14314__$1))
{var c__4298__auto___14315 = cljs.core.chunk_first.call(null,seq__14295_14314__$1);{
var G__14316 = cljs.core.chunk_rest.call(null,seq__14295_14314__$1);
var G__14317 = c__4298__auto___14315;
var G__14318 = cljs.core.count.call(null,c__4298__auto___14315);
var G__14319 = (0);
seq__14295_14301 = G__14316;
chunk__14296_14302 = G__14317;
count__14297_14303 = G__14318;
i__14298_14304 = G__14319;
continue;
}
} else
{var vec__14300_14320 = cljs.core.first.call(null,seq__14295_14314__$1);var k_14321 = cljs.core.nth.call(null,vec__14300_14320,(0),null);var v_14322 = cljs.core.nth.call(null,vec__14300_14320,(1),null);var m14294_14323 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14294_14323,f.call(null,k_14321),v_14322));
{
var G__14324 = cljs.core.next.call(null,seq__14295_14314__$1);
var G__14325 = null;
var G__14326 = (0);
var G__14327 = (0);
seq__14295_14301 = G__14324;
chunk__14296_14302 = G__14325;
count__14297_14303 = G__14326;
i__14298_14304 = G__14327;
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
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14334_14338 = cljs.core.seq.call(null,ks);var chunk__14335_14339 = null;var count__14336_14340 = (0);var i__14337_14341 = (0);while(true){
if((i__14337_14341 < count__14336_14340))
{var k_14342 = cljs.core._nth.call(null,chunk__14335_14339,i__14337_14341);var m14333_14343 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14333_14343,k_14342,f.call(null,k_14342)));
{
var G__14344 = seq__14334_14338;
var G__14345 = chunk__14335_14339;
var G__14346 = count__14336_14340;
var G__14347 = (i__14337_14341 + (1));
seq__14334_14338 = G__14344;
chunk__14335_14339 = G__14345;
count__14336_14340 = G__14346;
i__14337_14341 = G__14347;
continue;
}
} else
{var temp__4126__auto___14348 = cljs.core.seq.call(null,seq__14334_14338);if(temp__4126__auto___14348)
{var seq__14334_14349__$1 = temp__4126__auto___14348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14334_14349__$1))
{var c__4298__auto___14350 = cljs.core.chunk_first.call(null,seq__14334_14349__$1);{
var G__14351 = cljs.core.chunk_rest.call(null,seq__14334_14349__$1);
var G__14352 = c__4298__auto___14350;
var G__14353 = cljs.core.count.call(null,c__4298__auto___14350);
var G__14354 = (0);
seq__14334_14338 = G__14351;
chunk__14335_14339 = G__14352;
count__14336_14340 = G__14353;
i__14337_14341 = G__14354;
continue;
}
} else
{var k_14355 = cljs.core.first.call(null,seq__14334_14349__$1);var m14333_14356 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14333_14356,k_14355,f.call(null,k_14355)));
{
var G__14357 = cljs.core.next.call(null,seq__14334_14349__$1);
var G__14358 = null;
var G__14359 = (0);
var G__14360 = (0);
seq__14334_14338 = G__14357;
chunk__14335_14339 = G__14358;
count__14336_14340 = G__14359;
i__14337_14341 = G__14360;
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
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14367_14371 = cljs.core.seq.call(null,vs);var chunk__14368_14372 = null;var count__14369_14373 = (0);var i__14370_14374 = (0);while(true){
if((i__14370_14374 < count__14369_14373))
{var v_14375 = cljs.core._nth.call(null,chunk__14368_14372,i__14370_14374);var m14366_14376 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14366_14376,f.call(null,v_14375),v_14375));
{
var G__14377 = seq__14367_14371;
var G__14378 = chunk__14368_14372;
var G__14379 = count__14369_14373;
var G__14380 = (i__14370_14374 + (1));
seq__14367_14371 = G__14377;
chunk__14368_14372 = G__14378;
count__14369_14373 = G__14379;
i__14370_14374 = G__14380;
continue;
}
} else
{var temp__4126__auto___14381 = cljs.core.seq.call(null,seq__14367_14371);if(temp__4126__auto___14381)
{var seq__14367_14382__$1 = temp__4126__auto___14381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14367_14382__$1))
{var c__4298__auto___14383 = cljs.core.chunk_first.call(null,seq__14367_14382__$1);{
var G__14384 = cljs.core.chunk_rest.call(null,seq__14367_14382__$1);
var G__14385 = c__4298__auto___14383;
var G__14386 = cljs.core.count.call(null,c__4298__auto___14383);
var G__14387 = (0);
seq__14367_14371 = G__14384;
chunk__14368_14372 = G__14385;
count__14369_14373 = G__14386;
i__14370_14374 = G__14387;
continue;
}
} else
{var v_14388 = cljs.core.first.call(null,seq__14367_14382__$1);var m14366_14389 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14366_14389,f.call(null,v_14388),v_14388));
{
var G__14390 = cljs.core.next.call(null,seq__14367_14382__$1);
var G__14391 = null;
var G__14392 = (0);
var G__14393 = (0);
seq__14367_14371 = G__14390;
chunk__14368_14372 = G__14391;
count__14369_14373 = G__14392;
i__14370_14374 = G__14393;
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
plumbing.core.dissoc_in = (function dissoc_in(m,p__14394){var vec__14396 = p__14394;var k = cljs.core.nth.call(null,vec__14396,(0),null);var ks = cljs.core.nthnext.call(null,vec__14396,(1));if(cljs.core.truth_(m))
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
{var m_atom__6847__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14405_14411 = cljs.core.seq.call(null,x);var chunk__14406_14412 = null;var count__14407_14413 = (0);var i__14408_14414 = (0);while(true){
if((i__14408_14414 < count__14407_14413))
{var vec__14409_14415 = cljs.core._nth.call(null,chunk__14406_14412,i__14408_14414);var k_14416 = cljs.core.nth.call(null,vec__14409_14415,(0),null);var v_14417 = cljs.core.nth.call(null,vec__14409_14415,(1),null);var m14404_14418 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14404_14418,((typeof k_14416 === 'string')?cljs.core.keyword.call(null,k_14416):k_14416),keywordize_map.call(null,v_14417)));
{
var G__14419 = seq__14405_14411;
var G__14420 = chunk__14406_14412;
var G__14421 = count__14407_14413;
var G__14422 = (i__14408_14414 + (1));
seq__14405_14411 = G__14419;
chunk__14406_14412 = G__14420;
count__14407_14413 = G__14421;
i__14408_14414 = G__14422;
continue;
}
} else
{var temp__4126__auto___14423 = cljs.core.seq.call(null,seq__14405_14411);if(temp__4126__auto___14423)
{var seq__14405_14424__$1 = temp__4126__auto___14423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14405_14424__$1))
{var c__4298__auto___14425 = cljs.core.chunk_first.call(null,seq__14405_14424__$1);{
var G__14426 = cljs.core.chunk_rest.call(null,seq__14405_14424__$1);
var G__14427 = c__4298__auto___14425;
var G__14428 = cljs.core.count.call(null,c__4298__auto___14425);
var G__14429 = (0);
seq__14405_14411 = G__14426;
chunk__14406_14412 = G__14427;
count__14407_14413 = G__14428;
i__14408_14414 = G__14429;
continue;
}
} else
{var vec__14410_14430 = cljs.core.first.call(null,seq__14405_14424__$1);var k_14431 = cljs.core.nth.call(null,vec__14410_14430,(0),null);var v_14432 = cljs.core.nth.call(null,vec__14410_14430,(1),null);var m14404_14433 = cljs.core.deref.call(null,m_atom__6847__auto__);cljs.core.reset_BANG_.call(null,m_atom__6847__auto__,cljs.core.assoc_BANG_.call(null,m14404_14433,((typeof k_14431 === 'string')?cljs.core.keyword.call(null,k_14431):k_14431),keywordize_map.call(null,v_14432)));
{
var G__14434 = cljs.core.next.call(null,seq__14405_14424__$1);
var G__14435 = null;
var G__14436 = (0);
var G__14437 = (0);
seq__14405_14411 = G__14434;
chunk__14406_14412 = G__14435;
count__14407_14413 = G__14436;
i__14408_14414 = G__14437;
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
var G__14438 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__14439 = cljs.core.next.call(null,ks);
m = G__14438;
ks = G__14439;
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
})(),(function (){var iter__4267__auto__ = (function iter__14448(s__14449){return (new cljs.core.LazySeq(null,(function (){var s__14449__$1 = s__14449;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14449__$1);if(temp__4126__auto__)
{var s__14449__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14449__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14449__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14451 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14450 = (0);while(true){
if((i__14450 < size__4266__auto__))
{var vec__14454 = cljs.core._nth.call(null,c__4265__auto__,i__14450);var k = cljs.core.nth.call(null,vec__14454,(0),null);var v = cljs.core.nth.call(null,vec__14454,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__14451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14456 = (i__14450 + (1));
i__14450 = G__14456;
continue;
}
} else
{{
var G__14457 = (i__14450 + (1));
i__14450 = G__14457;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14451),iter__14448.call(null,cljs.core.chunk_rest.call(null,s__14449__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14451),null);
}
} else
{var vec__14455 = cljs.core.first.call(null,s__14449__$2);var k = cljs.core.nth.call(null,vec__14455,(0),null);var v = cljs.core.nth.call(null,vec__14455,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14448.call(null,cljs.core.rest.call(null,s__14449__$2)));
} else
{{
var G__14458 = cljs.core.rest.call(null,s__14449__$2);
s__14449__$1 = G__14458;
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
assoc_when.cljs$lang$applyTo = (function (arglist__14459){
var m = cljs.core.first(arglist__14459);
var kvs = cljs.core.rest(arglist__14459);
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
update_in_when.cljs$lang$applyTo = (function (arglist__14460){
var m = cljs.core.first(arglist__14460);
arglist__14460 = cljs.core.next(arglist__14460);
var key_seq = cljs.core.first(arglist__14460);
arglist__14460 = cljs.core.next(arglist__14460);
var f = cljs.core.first(arglist__14460);
var args = cljs.core.rest(arglist__14460);
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
return (function iter__14465(s__14466){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__14466__$1 = s__14466;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14466__$1);if(temp__4126__auto__)
{var s__14466__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14466__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14466__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14468 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14467 = (0);while(true){
if((i__14467 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__14467);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__14468,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__14469 = (i__14467 + (1));
i__14467 = G__14469;
continue;
}
} else
{{
var G__14470 = (i__14467 + (1));
i__14467 = G__14470;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14468),iter__14465.call(null,cljs.core.chunk_rest.call(null,s__14466__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14468),null);
}
} else
{var x = cljs.core.first.call(null,s__14466__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__14465.call(null,cljs.core.rest.call(null,s__14466__$2)));
} else
{{
var G__14471 = cljs.core.rest.call(null,s__14466__$2);
s__14466__$1 = G__14471;
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
interleave_all.cljs$lang$applyTo = (function (arglist__14472){
var colls = cljs.core.seq(arglist__14472);
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
var G__14473__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__14474 = conj_when.call(null,coll,x);
var G__14475 = cljs.core.first.call(null,xs);
var G__14476 = cljs.core.next.call(null,xs);
coll = G__14474;
x = G__14475;
xs = G__14476;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__14473 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14473__delegate.call(this,coll,x,xs);};
G__14473.cljs$lang$maxFixedArity = 2;
G__14473.cljs$lang$applyTo = (function (arglist__14477){
var coll = cljs.core.first(arglist__14477);
arglist__14477 = cljs.core.next(arglist__14477);
var x = cljs.core.first(arglist__14477);
var xs = cljs.core.rest(arglist__14477);
return G__14473__delegate(coll,x,xs);
});
G__14473.cljs$core$IFn$_invoke$arity$variadic = G__14473__delegate;
return G__14473;
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
var G__14479__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__14478_SHARP_){return cljs.core.apply.call(null,f,p1__14478_SHARP_,args);
}));
};
var G__14479 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14479__delegate.call(this,a,f,args);};
G__14479.cljs$lang$maxFixedArity = 2;
G__14479.cljs$lang$applyTo = (function (arglist__14480){
var a = cljs.core.first(arglist__14480);
arglist__14480 = cljs.core.next(arglist__14480);
var f = cljs.core.first(arglist__14480);
var args = cljs.core.rest(arglist__14480);
return G__14479__delegate(a,f,args);
});
G__14479.cljs$core$IFn$_invoke$arity$variadic = G__14479__delegate;
return G__14479;
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
var G__14481__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__14481 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14481__delegate.call(this,f,arg,args);};
G__14481.cljs$lang$maxFixedArity = 2;
G__14481.cljs$lang$applyTo = (function (arglist__14482){
var f = cljs.core.first(arglist__14482);
arglist__14482 = cljs.core.next(arglist__14482);
var arg = cljs.core.first(arglist__14482);
var args = cljs.core.rest(arglist__14482);
return G__14481__delegate(f,arg,args);
});
G__14481.cljs$core$IFn$_invoke$arity$variadic = G__14481__delegate;
return G__14481;
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