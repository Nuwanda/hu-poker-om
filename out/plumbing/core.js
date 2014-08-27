// Compiled by ClojureScript 0.0-2322
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
var G__15252__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__15252 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__15252__delegate.call(this,m,k,f,x1,x2,xs);};
G__15252.cljs$lang$maxFixedArity = 5;
G__15252.cljs$lang$applyTo = (function (arglist__15253){
var m = cljs.core.first(arglist__15253);
arglist__15253 = cljs.core.next(arglist__15253);
var k = cljs.core.first(arglist__15253);
arglist__15253 = cljs.core.next(arglist__15253);
var f = cljs.core.first(arglist__15253);
arglist__15253 = cljs.core.next(arglist__15253);
var x1 = cljs.core.first(arglist__15253);
arglist__15253 = cljs.core.next(arglist__15253);
var x2 = cljs.core.first(arglist__15253);
var xs = cljs.core.rest(arglist__15253);
return G__15252__delegate(m,k,f,x1,x2,xs);
});
G__15252.cljs$core$IFn$_invoke$arity$variadic = G__15252__delegate;
return G__15252;
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
{var m_atom__6863__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15262_15268 = cljs.core.seq.call(null,m);var chunk__15263_15269 = null;var count__15264_15270 = (0);var i__15265_15271 = (0);while(true){
if((i__15265_15271 < count__15264_15270))
{var vec__15266_15272 = cljs.core._nth.call(null,chunk__15263_15269,i__15265_15271);var k_15273 = cljs.core.nth.call(null,vec__15266_15272,(0),null);var v_15274 = cljs.core.nth.call(null,vec__15266_15272,(1),null);var m15261_15275 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15261_15275,k_15273,f.call(null,v_15274)));
{
var G__15276 = seq__15262_15268;
var G__15277 = chunk__15263_15269;
var G__15278 = count__15264_15270;
var G__15279 = (i__15265_15271 + (1));
seq__15262_15268 = G__15276;
chunk__15263_15269 = G__15277;
count__15264_15270 = G__15278;
i__15265_15271 = G__15279;
continue;
}
} else
{var temp__4126__auto___15280 = cljs.core.seq.call(null,seq__15262_15268);if(temp__4126__auto___15280)
{var seq__15262_15281__$1 = temp__4126__auto___15280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15262_15281__$1))
{var c__4314__auto___15282 = cljs.core.chunk_first.call(null,seq__15262_15281__$1);{
var G__15283 = cljs.core.chunk_rest.call(null,seq__15262_15281__$1);
var G__15284 = c__4314__auto___15282;
var G__15285 = cljs.core.count.call(null,c__4314__auto___15282);
var G__15286 = (0);
seq__15262_15268 = G__15283;
chunk__15263_15269 = G__15284;
count__15264_15270 = G__15285;
i__15265_15271 = G__15286;
continue;
}
} else
{var vec__15267_15287 = cljs.core.first.call(null,seq__15262_15281__$1);var k_15288 = cljs.core.nth.call(null,vec__15267_15287,(0),null);var v_15289 = cljs.core.nth.call(null,vec__15267_15287,(1),null);var m15261_15290 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15261_15290,k_15288,f.call(null,v_15289)));
{
var G__15291 = cljs.core.next.call(null,seq__15262_15281__$1);
var G__15292 = null;
var G__15293 = (0);
var G__15294 = (0);
seq__15262_15268 = G__15291;
chunk__15263_15269 = G__15292;
count__15264_15270 = G__15293;
i__15265_15271 = G__15294;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6863__auto__));

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
{var m_atom__6863__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15303_15309 = cljs.core.seq.call(null,m);var chunk__15304_15310 = null;var count__15305_15311 = (0);var i__15306_15312 = (0);while(true){
if((i__15306_15312 < count__15305_15311))
{var vec__15307_15313 = cljs.core._nth.call(null,chunk__15304_15310,i__15306_15312);var k_15314 = cljs.core.nth.call(null,vec__15307_15313,(0),null);var v_15315 = cljs.core.nth.call(null,vec__15307_15313,(1),null);var m15302_15316 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15302_15316,f.call(null,k_15314),v_15315));
{
var G__15317 = seq__15303_15309;
var G__15318 = chunk__15304_15310;
var G__15319 = count__15305_15311;
var G__15320 = (i__15306_15312 + (1));
seq__15303_15309 = G__15317;
chunk__15304_15310 = G__15318;
count__15305_15311 = G__15319;
i__15306_15312 = G__15320;
continue;
}
} else
{var temp__4126__auto___15321 = cljs.core.seq.call(null,seq__15303_15309);if(temp__4126__auto___15321)
{var seq__15303_15322__$1 = temp__4126__auto___15321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15303_15322__$1))
{var c__4314__auto___15323 = cljs.core.chunk_first.call(null,seq__15303_15322__$1);{
var G__15324 = cljs.core.chunk_rest.call(null,seq__15303_15322__$1);
var G__15325 = c__4314__auto___15323;
var G__15326 = cljs.core.count.call(null,c__4314__auto___15323);
var G__15327 = (0);
seq__15303_15309 = G__15324;
chunk__15304_15310 = G__15325;
count__15305_15311 = G__15326;
i__15306_15312 = G__15327;
continue;
}
} else
{var vec__15308_15328 = cljs.core.first.call(null,seq__15303_15322__$1);var k_15329 = cljs.core.nth.call(null,vec__15308_15328,(0),null);var v_15330 = cljs.core.nth.call(null,vec__15308_15328,(1),null);var m15302_15331 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15302_15331,f.call(null,k_15329),v_15330));
{
var G__15332 = cljs.core.next.call(null,seq__15303_15322__$1);
var G__15333 = null;
var G__15334 = (0);
var G__15335 = (0);
seq__15303_15309 = G__15332;
chunk__15304_15310 = G__15333;
count__15305_15311 = G__15334;
i__15306_15312 = G__15335;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6863__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__6863__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15342_15346 = cljs.core.seq.call(null,ks);var chunk__15343_15347 = null;var count__15344_15348 = (0);var i__15345_15349 = (0);while(true){
if((i__15345_15349 < count__15344_15348))
{var k_15350 = cljs.core._nth.call(null,chunk__15343_15347,i__15345_15349);var m15341_15351 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15341_15351,k_15350,f.call(null,k_15350)));
{
var G__15352 = seq__15342_15346;
var G__15353 = chunk__15343_15347;
var G__15354 = count__15344_15348;
var G__15355 = (i__15345_15349 + (1));
seq__15342_15346 = G__15352;
chunk__15343_15347 = G__15353;
count__15344_15348 = G__15354;
i__15345_15349 = G__15355;
continue;
}
} else
{var temp__4126__auto___15356 = cljs.core.seq.call(null,seq__15342_15346);if(temp__4126__auto___15356)
{var seq__15342_15357__$1 = temp__4126__auto___15356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15342_15357__$1))
{var c__4314__auto___15358 = cljs.core.chunk_first.call(null,seq__15342_15357__$1);{
var G__15359 = cljs.core.chunk_rest.call(null,seq__15342_15357__$1);
var G__15360 = c__4314__auto___15358;
var G__15361 = cljs.core.count.call(null,c__4314__auto___15358);
var G__15362 = (0);
seq__15342_15346 = G__15359;
chunk__15343_15347 = G__15360;
count__15344_15348 = G__15361;
i__15345_15349 = G__15362;
continue;
}
} else
{var k_15363 = cljs.core.first.call(null,seq__15342_15357__$1);var m15341_15364 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15341_15364,k_15363,f.call(null,k_15363)));
{
var G__15365 = cljs.core.next.call(null,seq__15342_15357__$1);
var G__15366 = null;
var G__15367 = (0);
var G__15368 = (0);
seq__15342_15346 = G__15365;
chunk__15343_15347 = G__15366;
count__15344_15348 = G__15367;
i__15345_15349 = G__15368;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6863__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__6863__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15375_15379 = cljs.core.seq.call(null,vs);var chunk__15376_15380 = null;var count__15377_15381 = (0);var i__15378_15382 = (0);while(true){
if((i__15378_15382 < count__15377_15381))
{var v_15383 = cljs.core._nth.call(null,chunk__15376_15380,i__15378_15382);var m15374_15384 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15374_15384,f.call(null,v_15383),v_15383));
{
var G__15385 = seq__15375_15379;
var G__15386 = chunk__15376_15380;
var G__15387 = count__15377_15381;
var G__15388 = (i__15378_15382 + (1));
seq__15375_15379 = G__15385;
chunk__15376_15380 = G__15386;
count__15377_15381 = G__15387;
i__15378_15382 = G__15388;
continue;
}
} else
{var temp__4126__auto___15389 = cljs.core.seq.call(null,seq__15375_15379);if(temp__4126__auto___15389)
{var seq__15375_15390__$1 = temp__4126__auto___15389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15375_15390__$1))
{var c__4314__auto___15391 = cljs.core.chunk_first.call(null,seq__15375_15390__$1);{
var G__15392 = cljs.core.chunk_rest.call(null,seq__15375_15390__$1);
var G__15393 = c__4314__auto___15391;
var G__15394 = cljs.core.count.call(null,c__4314__auto___15391);
var G__15395 = (0);
seq__15375_15379 = G__15392;
chunk__15376_15380 = G__15393;
count__15377_15381 = G__15394;
i__15378_15382 = G__15395;
continue;
}
} else
{var v_15396 = cljs.core.first.call(null,seq__15375_15390__$1);var m15374_15397 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15374_15397,f.call(null,v_15396),v_15396));
{
var G__15398 = cljs.core.next.call(null,seq__15375_15390__$1);
var G__15399 = null;
var G__15400 = (0);
var G__15401 = (0);
seq__15375_15379 = G__15398;
chunk__15376_15380 = G__15399;
count__15377_15381 = G__15400;
i__15378_15382 = G__15401;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6863__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__15402){var vec__15404 = p__15402;var k = cljs.core.nth.call(null,vec__15404,(0),null);var ks = cljs.core.nthnext.call(null,vec__15404,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3546__auto__ = ks;if(and__3546__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3546__auto__;
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
{var m_atom__6863__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15413_15419 = cljs.core.seq.call(null,x);var chunk__15414_15420 = null;var count__15415_15421 = (0);var i__15416_15422 = (0);while(true){
if((i__15416_15422 < count__15415_15421))
{var vec__15417_15423 = cljs.core._nth.call(null,chunk__15414_15420,i__15416_15422);var k_15424 = cljs.core.nth.call(null,vec__15417_15423,(0),null);var v_15425 = cljs.core.nth.call(null,vec__15417_15423,(1),null);var m15412_15426 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15412_15426,((typeof k_15424 === 'string')?cljs.core.keyword.call(null,k_15424):k_15424),keywordize_map.call(null,v_15425)));
{
var G__15427 = seq__15413_15419;
var G__15428 = chunk__15414_15420;
var G__15429 = count__15415_15421;
var G__15430 = (i__15416_15422 + (1));
seq__15413_15419 = G__15427;
chunk__15414_15420 = G__15428;
count__15415_15421 = G__15429;
i__15416_15422 = G__15430;
continue;
}
} else
{var temp__4126__auto___15431 = cljs.core.seq.call(null,seq__15413_15419);if(temp__4126__auto___15431)
{var seq__15413_15432__$1 = temp__4126__auto___15431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15413_15432__$1))
{var c__4314__auto___15433 = cljs.core.chunk_first.call(null,seq__15413_15432__$1);{
var G__15434 = cljs.core.chunk_rest.call(null,seq__15413_15432__$1);
var G__15435 = c__4314__auto___15433;
var G__15436 = cljs.core.count.call(null,c__4314__auto___15433);
var G__15437 = (0);
seq__15413_15419 = G__15434;
chunk__15414_15420 = G__15435;
count__15415_15421 = G__15436;
i__15416_15422 = G__15437;
continue;
}
} else
{var vec__15418_15438 = cljs.core.first.call(null,seq__15413_15432__$1);var k_15439 = cljs.core.nth.call(null,vec__15418_15438,(0),null);var v_15440 = cljs.core.nth.call(null,vec__15418_15438,(1),null);var m15412_15441 = cljs.core.deref.call(null,m_atom__6863__auto__);cljs.core.reset_BANG_.call(null,m_atom__6863__auto__,cljs.core.assoc_BANG_.call(null,m15412_15441,((typeof k_15439 === 'string')?cljs.core.keyword.call(null,k_15439):k_15439),keywordize_map.call(null,v_15440)));
{
var G__15442 = cljs.core.next.call(null,seq__15413_15432__$1);
var G__15443 = null;
var G__15444 = (0);
var G__15445 = (0);
seq__15413_15419 = G__15442;
chunk__15414_15420 = G__15443;
count__15415_15421 = G__15444;
i__15416_15422 = G__15445;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__6863__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__6932__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__6932__auto__);
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
var G__15446 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__15447 = cljs.core.next.call(null,ks);
m = G__15446;
ks = G__15447;
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
return cljs.core.into.call(null,(function (){var or__3558__auto__ = m;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4283__auto__ = (function iter__15456(s__15457){return (new cljs.core.LazySeq(null,(function (){var s__15457__$1 = s__15457;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15457__$1);if(temp__4126__auto__)
{var s__15457__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15457__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__15457__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__15459 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__15458 = (0);while(true){
if((i__15458 < size__4282__auto__))
{var vec__15462 = cljs.core._nth.call(null,c__4281__auto__,i__15458);var k = cljs.core.nth.call(null,vec__15462,(0),null);var v = cljs.core.nth.call(null,vec__15462,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__15459,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15464 = (i__15458 + (1));
i__15458 = G__15464;
continue;
}
} else
{{
var G__15465 = (i__15458 + (1));
i__15458 = G__15465;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15459),iter__15456.call(null,cljs.core.chunk_rest.call(null,s__15457__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15459),null);
}
} else
{var vec__15463 = cljs.core.first.call(null,s__15457__$2);var k = cljs.core.nth.call(null,vec__15463,(0),null);var v = cljs.core.nth.call(null,vec__15463,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15456.call(null,cljs.core.rest.call(null,s__15457__$2)));
} else
{{
var G__15466 = cljs.core.rest.call(null,s__15457__$2);
s__15457__$1 = G__15466;
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
});return iter__4283__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__15467){
var m = cljs.core.first(arglist__15467);
var kvs = cljs.core.rest(arglist__15467);
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
update_in_when.cljs$lang$applyTo = (function (arglist__15468){
var m = cljs.core.first(arglist__15468);
arglist__15468 = cljs.core.next(arglist__15468);
var key_seq = cljs.core.first(arglist__15468);
arglist__15468 = cljs.core.next(arglist__15468);
var f = cljs.core.first(arglist__15468);
var args = cljs.core.rest(arglist__15468);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4283__auto__ = ((function (s){
return (function iter__15473(s__15474){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__15474__$1 = s__15474;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15474__$1);if(temp__4126__auto__)
{var s__15474__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15474__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__15474__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__15476 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__15475 = (0);while(true){
if((i__15475 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__15475);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__15476,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__15477 = (i__15475 + (1));
i__15475 = G__15477;
continue;
}
} else
{{
var G__15478 = (i__15475 + (1));
i__15475 = G__15478;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15476),iter__15473.call(null,cljs.core.chunk_rest.call(null,s__15474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15476),null);
}
} else
{var x = cljs.core.first.call(null,s__15474__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__15473.call(null,cljs.core.rest.call(null,s__15474__$2)));
} else
{{
var G__15479 = cljs.core.rest.call(null,s__15474__$2);
s__15474__$1 = G__15479;
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
;return iter__4283__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__15480){
var colls = cljs.core.seq(arglist__15480);
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
var G__15481__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__15482 = conj_when.call(null,coll,x);
var G__15483 = cljs.core.first.call(null,xs);
var G__15484 = cljs.core.next.call(null,xs);
coll = G__15482;
x = G__15483;
xs = G__15484;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__15481 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15481__delegate.call(this,coll,x,xs);};
G__15481.cljs$lang$maxFixedArity = 2;
G__15481.cljs$lang$applyTo = (function (arglist__15485){
var coll = cljs.core.first(arglist__15485);
arglist__15485 = cljs.core.next(arglist__15485);
var x = cljs.core.first(arglist__15485);
var xs = cljs.core.rest(arglist__15485);
return G__15481__delegate(coll,x,xs);
});
G__15481.cljs$core$IFn$_invoke$arity$variadic = G__15481__delegate;
return G__15481;
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
var G__15487__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__15486_SHARP_){return cljs.core.apply.call(null,f,p1__15486_SHARP_,args);
}));
};
var G__15487 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15487__delegate.call(this,a,f,args);};
G__15487.cljs$lang$maxFixedArity = 2;
G__15487.cljs$lang$applyTo = (function (arglist__15488){
var a = cljs.core.first(arglist__15488);
arglist__15488 = cljs.core.next(arglist__15488);
var f = cljs.core.first(arglist__15488);
var args = cljs.core.rest(arglist__15488);
return G__15487__delegate(a,f,args);
});
G__15487.cljs$core$IFn$_invoke$arity$variadic = G__15487__delegate;
return G__15487;
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
var G__15489__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__15489 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15489__delegate.call(this,f,arg,args);};
G__15489.cljs$lang$maxFixedArity = 2;
G__15489.cljs$lang$applyTo = (function (arglist__15490){
var f = cljs.core.first(arglist__15490);
arglist__15490 = cljs.core.next(arglist__15490);
var arg = cljs.core.first(arglist__15490);
var args = cljs.core.rest(arglist__15490);
return G__15489__delegate(f,arg,args);
});
G__15489.cljs$core$IFn$_invoke$arity$variadic = G__15489__delegate;
return G__15489;
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