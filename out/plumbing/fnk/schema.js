// Compiled by ClojureScript 0.0-2280
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5376__5377__auto__){var G__14653 = p1__5376__5377__auto__;if(G__14653)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__14653.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__14653.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14653);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14653);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__14654_SHARP_){return (cljs.core.val.call(null,p1__14654_SHARP_) > (1));
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
var vec__14656 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__14656,(0),null);var v = cljs.core.nth.call(null,vec__14656,(1),null);var p = vec__14656;if(cljs.core.truth_(p))
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
var ufv___14662 = schema.utils.use_fn_validation;var output_schema14657_14663 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema14658_14664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker14659_14665 = schema.core.checker.call(null,input_schema14658_14664);var output_checker14660_14666 = schema.core.checker.call(null,output_schema14657_14663);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___14662,output_schema14657_14663,input_schema14658_14664,input_checker14659_14665,output_checker14660_14666){
return (function unwrap_schema_form_key(G__14661){var validate__5346__auto__ = ufv___14662.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14661], null);var temp__4126__auto___14668 = input_checker14659_14665.call(null,args__5347__auto___14667);if(cljs.core.truth_(temp__4126__auto___14668))
{var error__5348__auto___14669 = temp__4126__auto___14668;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5348__auto___14669)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14658_14664,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14667,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14669], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var k = G__14661;while(true){
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
{var temp__4126__auto___14670 = output_checker14660_14666.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14670))
{var error__5348__auto___14671 = temp__4126__auto___14670;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5348__auto___14671)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14657_14663,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14671], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14662,output_schema14657_14663,input_schema14658_14664,input_checker14659_14665,output_checker14660_14666))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema14657_14663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14658_14664], null)));
var ufv___14677 = schema.utils.use_fn_validation;var output_schema14672_14678 = schema.core.Any;var input_schema14673_14679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14674_14680 = schema.core.checker.call(null,input_schema14673_14679);var output_checker14675_14681 = schema.core.checker.call(null,output_schema14672_14678);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___14677,output_schema14672_14678,input_schema14673_14679,input_checker14674_14680,output_checker14675_14681){
return (function explicit_schema_key_map(G__14676){var validate__5346__auto__ = ufv___14677.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14682 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14676], null);var temp__4126__auto___14683 = input_checker14674_14680.call(null,args__5347__auto___14682);if(cljs.core.truth_(temp__4126__auto___14683))
{var error__5348__auto___14684 = temp__4126__auto___14683;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5348__auto___14684)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14673_14679,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14682,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14684], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__14676;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14685 = output_checker14675_14681.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14685))
{var error__5348__auto___14686 = temp__4126__auto___14685;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5348__auto___14686)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14672_14678,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14686], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14677,output_schema14672_14678,input_schema14673_14679,input_checker14674_14680,output_checker14675_14681))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema14672_14678,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14673_14679], null)));
var ufv___14692 = schema.utils.use_fn_validation;var output_schema14687_14693 = schema.core.Any;var input_schema14688_14694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14689_14695 = schema.core.checker.call(null,input_schema14688_14694);var output_checker14690_14696 = schema.core.checker.call(null,output_schema14687_14693);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___14692,output_schema14687_14693,input_schema14688_14694,input_checker14689_14695,output_checker14690_14696){
return (function split_schema_keys(G__14691){var validate__5346__auto__ = ufv___14692.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14691], null);var temp__4126__auto___14698 = input_checker14689_14695.call(null,args__5347__auto___14697);if(cljs.core.truth_(temp__4126__auto___14698))
{var error__5348__auto___14699 = temp__4126__auto___14698;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5348__auto___14699)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14688_14694,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14697,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14699], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__14691;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14700 = output_checker14690_14696.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14700))
{var error__5348__auto___14701 = temp__4126__auto___14700;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5348__auto___14701)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14687_14693,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14701], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14692,output_schema14687_14693,input_schema14688_14694,input_checker14689_14695,output_checker14690_14696))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema14687_14693,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14688_14694], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__14705){var vec__14706 = p__14705;var k = cljs.core.nth.call(null,vec__14706,(0),null);var v = cljs.core.nth.call(null,vec__14706,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__14707 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__14707,(0),null);var ov = cljs.core.nth.call(null,vec__14707,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__14708){
var key_project = cljs.core.first(arglist__14708);
arglist__14708 = cljs.core.next(arglist__14708);
var key_combine = cljs.core.first(arglist__14708);
arglist__14708 = cljs.core.next(arglist__14708);
var val_combine = cljs.core.first(arglist__14708);
var maps = cljs.core.rest(arglist__14708);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___14716 = schema.utils.use_fn_validation;var output_schema14710_14717 = plumbing.fnk.schema.InputSchema;var input_schema14711_14718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker14712_14719 = schema.core.checker.call(null,input_schema14711_14718);var output_checker14713_14720 = schema.core.checker.call(null,output_schema14710_14717);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720){
return (function union_input_schemata(G__14714,G__14715){var validate__5346__auto__ = ufv___14716.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14714,G__14715], null);var temp__4126__auto___14722 = input_checker14712_14719.call(null,args__5347__auto___14721);if(cljs.core.truth_(temp__4126__auto___14722))
{var error__5348__auto___14723 = temp__4126__auto___14722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5348__auto___14723)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14711_14718,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14721,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14723], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var i1 = G__14714;var i2 = G__14715;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720){
return (function (p1__14709_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__14709_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__14709_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720))
,((function (validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720){
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
});})(validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720))
,((function (validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5346__auto__,ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14724 = output_checker14713_14720.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14724))
{var error__5348__auto___14725 = temp__4126__auto___14724;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5348__auto___14725)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14710_14717,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14725], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14716,output_schema14710_14717,input_schema14711_14718,input_checker14712_14719,output_checker14713_14720))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema14710_14717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14711_14718], null)));
var ufv___14731 = schema.utils.use_fn_validation;var output_schema14726_14732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema14727_14733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker14728_14734 = schema.core.checker.call(null,input_schema14727_14733);var output_checker14729_14735 = schema.core.checker.call(null,output_schema14726_14732);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___14731,output_schema14726_14732,input_schema14727_14733,input_checker14728_14734,output_checker14729_14735){
return (function required_toplevel_keys(G__14730){var validate__5346__auto__ = ufv___14731.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14730], null);var temp__4126__auto___14737 = input_checker14728_14734.call(null,args__5347__auto___14736);if(cljs.core.truth_(temp__4126__auto___14737))
{var error__5348__auto___14738 = temp__4126__auto___14737;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5348__auto___14738)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14727_14733,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14736,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14738], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var input_schema = G__14730;while(true){
return cljs.core.keep.call(null,((function (validate__5346__auto__,ufv___14731,output_schema14726_14732,input_schema14727_14733,input_checker14728_14734,output_checker14729_14735){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5346__auto__,ufv___14731,output_schema14726_14732,input_schema14727_14733,input_checker14728_14734,output_checker14729_14735))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14739 = output_checker14729_14735.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14739))
{var error__5348__auto___14740 = temp__4126__auto___14739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5348__auto___14740)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14726_14732,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14740], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14731,output_schema14726_14732,input_schema14727_14733,input_checker14728_14734,output_checker14729_14735))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema14726_14732,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14727_14733], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__14749(s__14750){return (new cljs.core.LazySeq(null,(function (){var s__14750__$1 = s__14750;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14750__$1);if(temp__4126__auto__)
{var s__14750__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14750__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14750__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14752 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14751 = (0);while(true){
if((i__14751 < size__4266__auto__))
{var vec__14755 = cljs.core._nth.call(null,c__4265__auto__,i__14751);var k = cljs.core.nth.call(null,vec__14755,(0),null);var v = cljs.core.nth.call(null,vec__14755,(1),null);cljs.core.chunk_append.call(null,b__14752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__14757 = (i__14751 + (1));
i__14751 = G__14757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14752),iter__14749.call(null,cljs.core.chunk_rest.call(null,s__14750__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14752),null);
}
} else
{var vec__14756 = cljs.core.first.call(null,s__14750__$2);var k = cljs.core.nth.call(null,vec__14756,(0),null);var v = cljs.core.nth.call(null,vec__14756,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__14749.call(null,cljs.core.rest.call(null,s__14750__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__14766(s__14767){return (new cljs.core.LazySeq(null,(function (){var s__14767__$1 = s__14767;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14767__$1);if(temp__4126__auto__)
{var s__14767__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14767__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14767__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14769 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14768 = (0);while(true){
if((i__14768 < size__4266__auto__))
{var vec__14772 = cljs.core._nth.call(null,c__4265__auto__,i__14768);var k = cljs.core.nth.call(null,vec__14772,(0),null);var v = cljs.core.nth.call(null,vec__14772,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__14769,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__14774 = (i__14768 + (1));
i__14768 = G__14774;
continue;
}
} else
{{
var G__14775 = (i__14768 + (1));
i__14768 = G__14775;
continue;
}
}
} else
{{
var G__14776 = (i__14768 + (1));
i__14768 = G__14776;
continue;
}
}
} else
{{
var G__14777 = (i__14768 + (1));
i__14768 = G__14777;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14769),iter__14766.call(null,cljs.core.chunk_rest.call(null,s__14767__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14769),null);
}
} else
{var vec__14773 = cljs.core.first.call(null,s__14767__$2);var k = cljs.core.nth.call(null,vec__14773,(0),null);var v = cljs.core.nth.call(null,vec__14773,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__14766.call(null,cljs.core.rest.call(null,s__14767__$2)));
} else
{{
var G__14778 = cljs.core.rest.call(null,s__14767__$2);
s__14767__$1 = G__14778;
continue;
}
}
} else
{{
var G__14779 = cljs.core.rest.call(null,s__14767__$2);
s__14767__$1 = G__14779;
continue;
}
}
} else
{{
var G__14780 = cljs.core.rest.call(null,s__14767__$2);
s__14767__$1 = G__14780;
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
var ufv___14803 = schema.utils.use_fn_validation;var output_schema14781_14804 = schema.core.Any;var input_schema14782_14805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14783_14806 = schema.core.checker.call(null,input_schema14782_14805);var output_checker14784_14807 = schema.core.checker.call(null,output_schema14781_14804);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___14803,output_schema14781_14804,input_schema14782_14805,input_checker14783_14806,output_checker14784_14807){
return (function compose_schemata(G__14785,G__14786){var validate__5346__auto__ = true;if(validate__5346__auto__)
{var args__5347__auto___14808 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14785,G__14786], null);var temp__4126__auto___14809 = input_checker14783_14806.call(null,args__5347__auto___14808);if(cljs.core.truth_(temp__4126__auto___14809))
{var error__5348__auto___14810 = temp__4126__auto___14809;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5348__auto___14810)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14782_14805,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14808,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14810], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var G__14797 = G__14785;var vec__14799 = G__14797;var i2 = cljs.core.nth.call(null,vec__14799,(0),null);var o2 = cljs.core.nth.call(null,vec__14799,(1),null);var G__14798 = G__14786;var vec__14800 = G__14798;var i1 = cljs.core.nth.call(null,vec__14800,(0),null);var o1 = cljs.core.nth.call(null,vec__14800,(1),null);var G__14797__$1 = G__14797;var G__14798__$1 = G__14798;while(true){
var vec__14801 = G__14797__$1;var i2__$1 = cljs.core.nth.call(null,vec__14801,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14801,(1),null);var vec__14802 = G__14798__$1;var i1__$1 = cljs.core.nth.call(null,vec__14802,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14802,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5346__auto__)
{var temp__4126__auto___14811 = output_checker14784_14807.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14811))
{var error__5348__auto___14812 = temp__4126__auto___14811;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5348__auto___14812)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14781_14804,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14812], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14803,output_schema14781_14804,input_schema14782_14805,input_checker14783_14806,output_checker14784_14807))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema14781_14804,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14782_14805], null)));
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
var ufv___14891 = schema.utils.use_fn_validation;var output_schema14813_14892 = schema.core.Any;var input_schema14814_14893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker14815_14894 = schema.core.checker.call(null,input_schema14814_14893);var output_checker14816_14895 = schema.core.checker.call(null,output_schema14813_14892);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function split_schema(G__14817,G__14818){var validate__5346__auto__ = ufv___14891.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14817,G__14818], null);var temp__4126__auto___14897 = input_checker14815_14894.call(null,args__5347__auto___14896);if(cljs.core.truth_(temp__4126__auto___14897))
{var error__5348__auto___14898 = temp__4126__auto___14897;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5348__auto___14898)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14814_14893,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14896,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14898], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var s = G__14817;var ks = G__14818;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4267__auto__ = ((function (ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function iter__14855(s__14856){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function (){var s__14856__$1 = s__14856;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14856__$1);if(temp__4126__auto__)
{var s__14856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14856__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14856__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14858 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14857 = (0);while(true){
if((i__14857 < size__4266__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4265__auto__,i__14857);cljs.core.chunk_append.call(null,b__14858,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (i__14857,in_QMARK_,c__4265__auto__,size__4266__auto__,b__14858,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function iter__14875(s__14876){return (new cljs.core.LazySeq(null,((function (i__14857,in_QMARK_,c__4265__auto__,size__4266__auto__,b__14858,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function (){var s__14876__$1 = s__14876;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14876__$1);if(temp__4126__auto____$1)
{var s__14876__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14876__$2))
{var c__4265__auto____$1 = cljs.core.chunk_first.call(null,s__14876__$2);var size__4266__auto____$1 = cljs.core.count.call(null,c__4265__auto____$1);var b__14878 = cljs.core.chunk_buffer.call(null,size__4266__auto____$1);if((function (){var i__14877 = (0);while(true){
if((i__14877 < size__4266__auto____$1))
{var vec__14881 = cljs.core._nth.call(null,c__4265__auto____$1,i__14877);var k = cljs.core.nth.call(null,vec__14881,(0),null);var v = cljs.core.nth.call(null,vec__14881,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14878,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14899 = (i__14877 + (1));
i__14877 = G__14899;
continue;
}
} else
{{
var G__14900 = (i__14877 + (1));
i__14877 = G__14900;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14878),iter__14875.call(null,cljs.core.chunk_rest.call(null,s__14876__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14878),null);
}
} else
{var vec__14882 = cljs.core.first.call(null,s__14876__$2);var k = cljs.core.nth.call(null,vec__14882,(0),null);var v = cljs.core.nth.call(null,vec__14882,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14875.call(null,cljs.core.rest.call(null,s__14876__$2)));
} else
{{
var G__14901 = cljs.core.rest.call(null,s__14876__$2);
s__14876__$1 = G__14901;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__14857,in_QMARK_,c__4265__auto__,size__4266__auto__,b__14858,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
,null,null));
});})(i__14857,in_QMARK_,c__4265__auto__,size__4266__auto__,b__14858,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
;return iter__4267__auto__.call(null,s);
})()));
{
var G__14902 = (i__14857 + (1));
i__14857 = G__14902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14858),iter__14855.call(null,cljs.core.chunk_rest.call(null,s__14856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14858),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__14856__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (in_QMARK_,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function iter__14883(s__14884){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895){
return (function (){var s__14884__$1 = s__14884;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14884__$1);if(temp__4126__auto____$1)
{var s__14884__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14884__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14884__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14886 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14885 = (0);while(true){
if((i__14885 < size__4266__auto__))
{var vec__14889 = cljs.core._nth.call(null,c__4265__auto__,i__14885);var k = cljs.core.nth.call(null,vec__14889,(0),null);var v = cljs.core.nth.call(null,vec__14889,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14886,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14903 = (i__14885 + (1));
i__14885 = G__14903;
continue;
}
} else
{{
var G__14904 = (i__14885 + (1));
i__14885 = G__14904;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14886),iter__14883.call(null,cljs.core.chunk_rest.call(null,s__14884__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14886),null);
}
} else
{var vec__14890 = cljs.core.first.call(null,s__14884__$2);var k = cljs.core.nth.call(null,vec__14890,(0),null);var v = cljs.core.nth.call(null,vec__14890,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14883.call(null,cljs.core.rest.call(null,s__14884__$2)));
} else
{{
var G__14905 = cljs.core.rest.call(null,s__14884__$2);
s__14884__$1 = G__14905;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
,null,null));
});})(in_QMARK_,s__14856__$2,temp__4126__auto__,ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
;return iter__4267__auto__.call(null,s);
})()),iter__14855.call(null,cljs.core.rest.call(null,s__14856__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
,null,null));
});})(ks__$1,validate__5346__auto__,ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
;return iter__4267__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14906 = output_checker14816_14895.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14906))
{var error__5348__auto___14907 = temp__4126__auto___14906;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5348__auto___14907)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14813_14892,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14907], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14891,output_schema14813_14892,input_schema14814_14893,input_checker14815_14894,output_checker14816_14895))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema14813_14892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14814_14893], null)));
var ufv___14938 = schema.utils.use_fn_validation;var output_schema14908_14939 = plumbing.fnk.schema.GraphIOSchemata;var input_schema14909_14940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14910_14941 = schema.core.checker.call(null,input_schema14909_14940);var output_checker14911_14942 = schema.core.checker.call(null,output_schema14908_14939);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___14938,output_schema14908_14939,input_schema14909_14940,input_checker14910_14941,output_checker14911_14942){
return (function sequence_schemata(G__14912,G__14913){var validate__5346__auto__ = ufv___14938.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14912,G__14913], null);var temp__4126__auto___14944 = input_checker14910_14941.call(null,args__5347__auto___14943);if(cljs.core.truth_(temp__4126__auto___14944))
{var error__5348__auto___14945 = temp__4126__auto___14944;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5348__auto___14945)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14909_14940,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14943,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14945], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var G__14929 = G__14912;var vec__14931 = G__14929;var i1 = cljs.core.nth.call(null,vec__14931,(0),null);var o1 = cljs.core.nth.call(null,vec__14931,(1),null);var G__14930 = G__14913;var vec__14932 = G__14930;var k = cljs.core.nth.call(null,vec__14932,(0),null);var vec__14933 = cljs.core.nth.call(null,vec__14932,(1),null);var i2 = cljs.core.nth.call(null,vec__14933,(0),null);var o2 = cljs.core.nth.call(null,vec__14933,(1),null);var G__14929__$1 = G__14929;var G__14930__$1 = G__14930;while(true){
var vec__14934 = G__14929__$1;var i1__$1 = cljs.core.nth.call(null,vec__14934,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14934,(1),null);var vec__14935 = G__14930__$1;var k__$1 = cljs.core.nth.call(null,vec__14935,(0),null);var vec__14936 = cljs.core.nth.call(null,vec__14935,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__14936,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14936,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__14937 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__14937,(0),null);var unused = cljs.core.nth.call(null,vec__14937,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14946 = output_checker14911_14942.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14946))
{var error__5348__auto___14947 = temp__4126__auto___14946;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5348__auto___14947)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14908_14939,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14947], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14938,output_schema14908_14939,input_schema14909_14940,input_checker14910_14941,output_checker14911_14942))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema14908_14939,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14909_14940], null)));

//# sourceMappingURL=schema.js.map