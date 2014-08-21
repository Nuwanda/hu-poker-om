// Compiled by ClojureScript 0.0-2280
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5376__5377__auto__){var G__13658 = p1__5376__5377__auto__;if(G__13658)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__13658.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__13658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__13658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__13658);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__13659_SHARP_){return (cljs.core.val.call(null,p1__13659_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__13661 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__13661,(0),null);var v = cljs.core.nth.call(null,vec__13661,(1),null);var p = vec__13661;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___13667 = schema.utils.use_fn_validation;var output_schema13662_13668 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema13663_13669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker13664_13670 = schema.core.checker.call(null,input_schema13663_13669);var output_checker13665_13671 = schema.core.checker.call(null,output_schema13662_13668);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___13667,output_schema13662_13668,input_schema13663_13669,input_checker13664_13670,output_checker13665_13671){
return (function unwrap_schema_form_key(G__13666){var validate__5346__auto__ = ufv___13667.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13666], null);var temp__4126__auto___13673 = input_checker13664_13670.call(null,args__5347__auto___13672);if(cljs.core.truth_(temp__4126__auto___13673))
{var error__5348__auto___13674 = temp__4126__auto___13673;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5348__auto___13674)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13663_13669,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13672,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13674], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var k = G__13666;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13675 = output_checker13665_13671.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13675))
{var error__5348__auto___13676 = temp__4126__auto___13675;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5348__auto___13676)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13662_13668,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13676], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13667,output_schema13662_13668,input_schema13663_13669,input_checker13664_13670,output_checker13665_13671))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema13662_13668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13663_13669], null)));
var ufv___13682 = schema.utils.use_fn_validation;var output_schema13677_13683 = schema.core.Any;var input_schema13678_13684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker13679_13685 = schema.core.checker.call(null,input_schema13678_13684);var output_checker13680_13686 = schema.core.checker.call(null,output_schema13677_13683);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___13682,output_schema13677_13683,input_schema13678_13684,input_checker13679_13685,output_checker13680_13686){
return (function explicit_schema_key_map(G__13681){var validate__5346__auto__ = ufv___13682.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13687 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13681], null);var temp__4126__auto___13688 = input_checker13679_13685.call(null,args__5347__auto___13687);if(cljs.core.truth_(temp__4126__auto___13688))
{var error__5348__auto___13689 = temp__4126__auto___13688;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5348__auto___13689)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13678_13684,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13687,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13689], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__13681;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13690 = output_checker13680_13686.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13690))
{var error__5348__auto___13691 = temp__4126__auto___13690;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5348__auto___13691)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13677_13683,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13691], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13682,output_schema13677_13683,input_schema13678_13684,input_checker13679_13685,output_checker13680_13686))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema13677_13683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13678_13684], null)));
var ufv___13697 = schema.utils.use_fn_validation;var output_schema13692_13698 = schema.core.Any;var input_schema13693_13699 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker13694_13700 = schema.core.checker.call(null,input_schema13693_13699);var output_checker13695_13701 = schema.core.checker.call(null,output_schema13692_13698);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___13697,output_schema13692_13698,input_schema13693_13699,input_checker13694_13700,output_checker13695_13701){
return (function split_schema_keys(G__13696){var validate__5346__auto__ = ufv___13697.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13696], null);var temp__4126__auto___13703 = input_checker13694_13700.call(null,args__5347__auto___13702);if(cljs.core.truth_(temp__4126__auto___13703))
{var error__5348__auto___13704 = temp__4126__auto___13703;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5348__auto___13704)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13693_13699,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13702,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13704], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__13696;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13705 = output_checker13695_13701.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13705))
{var error__5348__auto___13706 = temp__4126__auto___13705;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5348__auto___13706)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13692_13698,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13706], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13697,output_schema13692_13698,input_schema13693_13699,input_checker13694_13700,output_checker13695_13701))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema13692_13698,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13693_13699], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__13710){var vec__13711 = p__13710;var k = cljs.core.nth.call(null,vec__13711,(0),null);var v = cljs.core.nth.call(null,vec__13711,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__13712 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__13712,(0),null);var ov = cljs.core.nth.call(null,vec__13712,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__13713){
var key_project = cljs.core.first(arglist__13713);
arglist__13713 = cljs.core.next(arglist__13713);
var key_combine = cljs.core.first(arglist__13713);
arglist__13713 = cljs.core.next(arglist__13713);
var val_combine = cljs.core.first(arglist__13713);
var maps = cljs.core.rest(arglist__13713);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___13721 = schema.utils.use_fn_validation;var output_schema13715_13722 = plumbing.fnk.schema.InputSchema;var input_schema13716_13723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker13717_13724 = schema.core.checker.call(null,input_schema13716_13723);var output_checker13718_13725 = schema.core.checker.call(null,output_schema13715_13722);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725){
return (function union_input_schemata(G__13719,G__13720){var validate__5346__auto__ = ufv___13721.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13719,G__13720], null);var temp__4126__auto___13727 = input_checker13717_13724.call(null,args__5347__auto___13726);if(cljs.core.truth_(temp__4126__auto___13727))
{var error__5348__auto___13728 = temp__4126__auto___13727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5348__auto___13728)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13716_13723,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13726,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13728], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var i1 = G__13719;var i2 = G__13720;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725){
return (function (p1__13714_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__13714_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__13714_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725))
,((function (validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
});})(validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725))
,((function (validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5346__auto__,ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13729 = output_checker13718_13725.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13729))
{var error__5348__auto___13730 = temp__4126__auto___13729;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5348__auto___13730)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13715_13722,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13730], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13721,output_schema13715_13722,input_schema13716_13723,input_checker13717_13724,output_checker13718_13725))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema13715_13722,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13716_13723], null)));
var ufv___13736 = schema.utils.use_fn_validation;var output_schema13731_13737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema13732_13738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker13733_13739 = schema.core.checker.call(null,input_schema13732_13738);var output_checker13734_13740 = schema.core.checker.call(null,output_schema13731_13737);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___13736,output_schema13731_13737,input_schema13732_13738,input_checker13733_13739,output_checker13734_13740){
return (function required_toplevel_keys(G__13735){var validate__5346__auto__ = ufv___13736.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13735], null);var temp__4126__auto___13742 = input_checker13733_13739.call(null,args__5347__auto___13741);if(cljs.core.truth_(temp__4126__auto___13742))
{var error__5348__auto___13743 = temp__4126__auto___13742;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5348__auto___13743)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13732_13738,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13741,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13743], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var input_schema = G__13735;while(true){
return cljs.core.keep.call(null,((function (validate__5346__auto__,ufv___13736,output_schema13731_13737,input_schema13732_13738,input_checker13733_13739,output_checker13734_13740){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5346__auto__,ufv___13736,output_schema13731_13737,input_schema13732_13738,input_checker13733_13739,output_checker13734_13740))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13744 = output_checker13734_13740.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13744))
{var error__5348__auto___13745 = temp__4126__auto___13744;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5348__auto___13745)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13731_13737,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13745], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13736,output_schema13731_13737,input_schema13732_13738,input_checker13733_13739,output_checker13734_13740))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema13731_13737,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13732_13738], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__13754(s__13755){return (new cljs.core.LazySeq(null,(function (){var s__13755__$1 = s__13755;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13755__$1);if(temp__4126__auto__)
{var s__13755__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13755__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13755__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13757 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13756 = (0);while(true){
if((i__13756 < size__4266__auto__))
{var vec__13760 = cljs.core._nth.call(null,c__4265__auto__,i__13756);var k = cljs.core.nth.call(null,vec__13760,(0),null);var v = cljs.core.nth.call(null,vec__13760,(1),null);cljs.core.chunk_append.call(null,b__13757,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__13762 = (i__13756 + (1));
i__13756 = G__13762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13757),iter__13754.call(null,cljs.core.chunk_rest.call(null,s__13755__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13757),null);
}
} else
{var vec__13761 = cljs.core.first.call(null,s__13755__$2);var k = cljs.core.nth.call(null,vec__13761,(0),null);var v = cljs.core.nth.call(null,vec__13761,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__13754.call(null,cljs.core.rest.call(null,s__13755__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__13771(s__13772){return (new cljs.core.LazySeq(null,(function (){var s__13772__$1 = s__13772;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13772__$1);if(temp__4126__auto__)
{var s__13772__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13772__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13772__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13774 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13773 = (0);while(true){
if((i__13773 < size__4266__auto__))
{var vec__13777 = cljs.core._nth.call(null,c__4265__auto__,i__13773);var k = cljs.core.nth.call(null,vec__13777,(0),null);var v = cljs.core.nth.call(null,vec__13777,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__13774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__13779 = (i__13773 + (1));
i__13773 = G__13779;
continue;
}
} else
{{
var G__13780 = (i__13773 + (1));
i__13773 = G__13780;
continue;
}
}
} else
{{
var G__13781 = (i__13773 + (1));
i__13773 = G__13781;
continue;
}
}
} else
{{
var G__13782 = (i__13773 + (1));
i__13773 = G__13782;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13774),iter__13771.call(null,cljs.core.chunk_rest.call(null,s__13772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13774),null);
}
} else
{var vec__13778 = cljs.core.first.call(null,s__13772__$2);var k = cljs.core.nth.call(null,vec__13778,(0),null);var v = cljs.core.nth.call(null,vec__13778,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__13771.call(null,cljs.core.rest.call(null,s__13772__$2)));
} else
{{
var G__13783 = cljs.core.rest.call(null,s__13772__$2);
s__13772__$1 = G__13783;
continue;
}
}
} else
{{
var G__13784 = cljs.core.rest.call(null,s__13772__$2);
s__13772__$1 = G__13784;
continue;
}
}
} else
{{
var G__13785 = cljs.core.rest.call(null,s__13772__$2);
s__13772__$1 = G__13785;
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
});return iter__4267__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___13808 = schema.utils.use_fn_validation;var output_schema13786_13809 = schema.core.Any;var input_schema13787_13810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker13788_13811 = schema.core.checker.call(null,input_schema13787_13810);var output_checker13789_13812 = schema.core.checker.call(null,output_schema13786_13809);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___13808,output_schema13786_13809,input_schema13787_13810,input_checker13788_13811,output_checker13789_13812){
return (function compose_schemata(G__13790,G__13791){var validate__5346__auto__ = true;if(validate__5346__auto__)
{var args__5347__auto___13813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13790,G__13791], null);var temp__4126__auto___13814 = input_checker13788_13811.call(null,args__5347__auto___13813);if(cljs.core.truth_(temp__4126__auto___13814))
{var error__5348__auto___13815 = temp__4126__auto___13814;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5348__auto___13815)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13787_13810,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13813,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13815], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var G__13802 = G__13790;var vec__13804 = G__13802;var i2 = cljs.core.nth.call(null,vec__13804,(0),null);var o2 = cljs.core.nth.call(null,vec__13804,(1),null);var G__13803 = G__13791;var vec__13805 = G__13803;var i1 = cljs.core.nth.call(null,vec__13805,(0),null);var o1 = cljs.core.nth.call(null,vec__13805,(1),null);var G__13802__$1 = G__13802;var G__13803__$1 = G__13803;while(true){
var vec__13806 = G__13802__$1;var i2__$1 = cljs.core.nth.call(null,vec__13806,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__13806,(1),null);var vec__13807 = G__13803__$1;var i1__$1 = cljs.core.nth.call(null,vec__13807,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__13807,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5346__auto__)
{var temp__4126__auto___13816 = output_checker13789_13812.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13816))
{var error__5348__auto___13817 = temp__4126__auto___13816;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5348__auto___13817)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13786_13809,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13817], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13808,output_schema13786_13809,input_schema13787_13810,input_checker13788_13811,output_checker13789_13812))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema13786_13809,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13787_13810], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___13896 = schema.utils.use_fn_validation;var output_schema13818_13897 = schema.core.Any;var input_schema13819_13898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker13820_13899 = schema.core.checker.call(null,input_schema13819_13898);var output_checker13821_13900 = schema.core.checker.call(null,output_schema13818_13897);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function split_schema(G__13822,G__13823){var validate__5346__auto__ = ufv___13896.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13822,G__13823], null);var temp__4126__auto___13902 = input_checker13820_13899.call(null,args__5347__auto___13901);if(cljs.core.truth_(temp__4126__auto___13902))
{var error__5348__auto___13903 = temp__4126__auto___13902;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5348__auto___13903)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13819_13898,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13901,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13903], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__13822;var ks = G__13823;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4267__auto__ = ((function (ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function iter__13860(s__13861){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function (){var s__13861__$1 = s__13861;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13861__$1);if(temp__4126__auto__)
{var s__13861__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13861__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13861__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13863 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13862 = (0);while(true){
if((i__13862 < size__4266__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4265__auto__,i__13862);cljs.core.chunk_append.call(null,b__13863,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (i__13862,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13863,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function iter__13880(s__13881){return (new cljs.core.LazySeq(null,((function (i__13862,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13863,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function (){var s__13881__$1 = s__13881;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13881__$1);if(temp__4126__auto____$1)
{var s__13881__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13881__$2))
{var c__4265__auto____$1 = cljs.core.chunk_first.call(null,s__13881__$2);var size__4266__auto____$1 = cljs.core.count.call(null,c__4265__auto____$1);var b__13883 = cljs.core.chunk_buffer.call(null,size__4266__auto____$1);if((function (){var i__13882 = (0);while(true){
if((i__13882 < size__4266__auto____$1))
{var vec__13886 = cljs.core._nth.call(null,c__4265__auto____$1,i__13882);var k = cljs.core.nth.call(null,vec__13886,(0),null);var v = cljs.core.nth.call(null,vec__13886,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__13883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13904 = (i__13882 + (1));
i__13882 = G__13904;
continue;
}
} else
{{
var G__13905 = (i__13882 + (1));
i__13882 = G__13905;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13883),iter__13880.call(null,cljs.core.chunk_rest.call(null,s__13881__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13883),null);
}
} else
{var vec__13887 = cljs.core.first.call(null,s__13881__$2);var k = cljs.core.nth.call(null,vec__13887,(0),null);var v = cljs.core.nth.call(null,vec__13887,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13880.call(null,cljs.core.rest.call(null,s__13881__$2)));
} else
{{
var G__13906 = cljs.core.rest.call(null,s__13881__$2);
s__13881__$1 = G__13906;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__13862,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13863,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
,null,null));
});})(i__13862,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13863,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
;return iter__4267__auto__.call(null,s);
})()));
{
var G__13907 = (i__13862 + (1));
i__13862 = G__13907;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13863),iter__13860.call(null,cljs.core.chunk_rest.call(null,s__13861__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13863),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__13861__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (in_QMARK_,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function iter__13888(s__13889){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900){
return (function (){var s__13889__$1 = s__13889;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13889__$1);if(temp__4126__auto____$1)
{var s__13889__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13889__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13889__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13891 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13890 = (0);while(true){
if((i__13890 < size__4266__auto__))
{var vec__13894 = cljs.core._nth.call(null,c__4265__auto__,i__13890);var k = cljs.core.nth.call(null,vec__13894,(0),null);var v = cljs.core.nth.call(null,vec__13894,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__13891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13908 = (i__13890 + (1));
i__13890 = G__13908;
continue;
}
} else
{{
var G__13909 = (i__13890 + (1));
i__13890 = G__13909;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13891),iter__13888.call(null,cljs.core.chunk_rest.call(null,s__13889__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13891),null);
}
} else
{var vec__13895 = cljs.core.first.call(null,s__13889__$2);var k = cljs.core.nth.call(null,vec__13895,(0),null);var v = cljs.core.nth.call(null,vec__13895,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13888.call(null,cljs.core.rest.call(null,s__13889__$2)));
} else
{{
var G__13910 = cljs.core.rest.call(null,s__13889__$2);
s__13889__$1 = G__13910;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
,null,null));
});})(in_QMARK_,s__13861__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
;return iter__4267__auto__.call(null,s);
})()),iter__13860.call(null,cljs.core.rest.call(null,s__13861__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
,null,null));
});})(ks__$1,validate__5346__auto__,ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
;return iter__4267__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13911 = output_checker13821_13900.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13911))
{var error__5348__auto___13912 = temp__4126__auto___13911;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5348__auto___13912)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13818_13897,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13912], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13896,output_schema13818_13897,input_schema13819_13898,input_checker13820_13899,output_checker13821_13900))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema13818_13897,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13819_13898], null)));
var ufv___13943 = schema.utils.use_fn_validation;var output_schema13913_13944 = plumbing.fnk.schema.GraphIOSchemata;var input_schema13914_13945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker13915_13946 = schema.core.checker.call(null,input_schema13914_13945);var output_checker13916_13947 = schema.core.checker.call(null,output_schema13913_13944);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___13943,output_schema13913_13944,input_schema13914_13945,input_checker13915_13946,output_checker13916_13947){
return (function sequence_schemata(G__13917,G__13918){var validate__5346__auto__ = ufv___13943.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___13948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13917,G__13918], null);var temp__4126__auto___13949 = input_checker13915_13946.call(null,args__5347__auto___13948);if(cljs.core.truth_(temp__4126__auto___13949))
{var error__5348__auto___13950 = temp__4126__auto___13949;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5348__auto___13950)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13914_13945,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___13948,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13950], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var G__13934 = G__13917;var vec__13936 = G__13934;var i1 = cljs.core.nth.call(null,vec__13936,(0),null);var o1 = cljs.core.nth.call(null,vec__13936,(1),null);var G__13935 = G__13918;var vec__13937 = G__13935;var k = cljs.core.nth.call(null,vec__13937,(0),null);var vec__13938 = cljs.core.nth.call(null,vec__13937,(1),null);var i2 = cljs.core.nth.call(null,vec__13938,(0),null);var o2 = cljs.core.nth.call(null,vec__13938,(1),null);var G__13934__$1 = G__13934;var G__13935__$1 = G__13935;while(true){
var vec__13939 = G__13934__$1;var i1__$1 = cljs.core.nth.call(null,vec__13939,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__13939,(1),null);var vec__13940 = G__13935__$1;var k__$1 = cljs.core.nth.call(null,vec__13940,(0),null);var vec__13941 = cljs.core.nth.call(null,vec__13940,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__13941,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__13941,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__13942 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__13942,(0),null);var unused = cljs.core.nth.call(null,vec__13942,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___13951 = output_checker13916_13947.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___13951))
{var error__5348__auto___13952 = temp__4126__auto___13951;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5348__auto___13952)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13913_13944,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___13952], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___13943,output_schema13913_13944,input_schema13914_13945,input_checker13915_13946,output_checker13916_13947))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema13913_13944,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13914_13945], null)));

//# sourceMappingURL=schema.js.map