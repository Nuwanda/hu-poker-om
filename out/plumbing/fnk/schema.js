// Compiled by ClojureScript 0.0-2322
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5392__5393__auto__){var G__14680 = p1__5392__5393__auto__;if(G__14680)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__14680.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__14680.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14680);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14680);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__14681_SHARP_){return (cljs.core.val.call(null,p1__14681_SHARP_) > (1));
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
var vec__14683 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__14683,(0),null);var v = cljs.core.nth.call(null,vec__14683,(1),null);var p = vec__14683;if(cljs.core.truth_(p))
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
{return schema.core.both.call(null,s1,s2);

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
var ufv___14689 = schema.utils.use_fn_validation;var output_schema14684_14690 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema14685_14691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker14686_14692 = schema.core.checker.call(null,input_schema14685_14691);var output_checker14687_14693 = schema.core.checker.call(null,output_schema14684_14690);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___14689,output_schema14684_14690,input_schema14685_14691,input_checker14686_14692,output_checker14687_14693){
return (function unwrap_schema_form_key(G__14688){var validate__5362__auto__ = ufv___14689.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14688], null);var temp__4126__auto___14695 = input_checker14686_14692.call(null,args__5363__auto___14694);if(cljs.core.truth_(temp__4126__auto___14695))
{var error__5364__auto___14696 = temp__4126__auto___14695;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5364__auto___14696)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14685_14691,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14694,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14696], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var k = G__14688;while(true){
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
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14697 = output_checker14687_14693.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14697))
{var error__5364__auto___14698 = temp__4126__auto___14697;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5364__auto___14698)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14684_14690,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14698], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14689,output_schema14684_14690,input_schema14685_14691,input_checker14686_14692,output_checker14687_14693))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema14684_14690,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14685_14691], null)));
var ufv___14704 = schema.utils.use_fn_validation;var output_schema14699_14705 = schema.core.Any;var input_schema14700_14706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14701_14707 = schema.core.checker.call(null,input_schema14700_14706);var output_checker14702_14708 = schema.core.checker.call(null,output_schema14699_14705);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___14704,output_schema14699_14705,input_schema14700_14706,input_checker14701_14707,output_checker14702_14708){
return (function explicit_schema_key_map(G__14703){var validate__5362__auto__ = ufv___14704.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14703], null);var temp__4126__auto___14710 = input_checker14701_14707.call(null,args__5363__auto___14709);if(cljs.core.truth_(temp__4126__auto___14710))
{var error__5364__auto___14711 = temp__4126__auto___14710;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5364__auto___14711)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14700_14706,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14709,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14711], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var s = G__14703;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14712 = output_checker14702_14708.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14712))
{var error__5364__auto___14713 = temp__4126__auto___14712;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5364__auto___14713)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14699_14705,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14713], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14704,output_schema14699_14705,input_schema14700_14706,input_checker14701_14707,output_checker14702_14708))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema14699_14705,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14700_14706], null)));
var ufv___14719 = schema.utils.use_fn_validation;var output_schema14714_14720 = schema.core.Any;var input_schema14715_14721 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14716_14722 = schema.core.checker.call(null,input_schema14715_14721);var output_checker14717_14723 = schema.core.checker.call(null,output_schema14714_14720);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___14719,output_schema14714_14720,input_schema14715_14721,input_checker14716_14722,output_checker14717_14723){
return (function split_schema_keys(G__14718){var validate__5362__auto__ = ufv___14719.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14724 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14718], null);var temp__4126__auto___14725 = input_checker14716_14722.call(null,args__5363__auto___14724);if(cljs.core.truth_(temp__4126__auto___14725))
{var error__5364__auto___14726 = temp__4126__auto___14725;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5364__auto___14726)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14715_14721,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14724,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14726], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var s = G__14718;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14727 = output_checker14717_14723.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14727))
{var error__5364__auto___14728 = temp__4126__auto___14727;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5364__auto___14728)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14714_14720,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14728], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14719,output_schema14714_14720,input_schema14715_14721,input_checker14716_14722,output_checker14717_14723))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema14714_14720,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14715_14721], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__14732){var vec__14733 = p__14732;var k = cljs.core.nth.call(null,vec__14733,(0),null);var v = cljs.core.nth.call(null,vec__14733,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__14734 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__14734,(0),null);var ov = cljs.core.nth.call(null,vec__14734,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__14735){
var key_project = cljs.core.first(arglist__14735);
arglist__14735 = cljs.core.next(arglist__14735);
var key_combine = cljs.core.first(arglist__14735);
arglist__14735 = cljs.core.next(arglist__14735);
var val_combine = cljs.core.first(arglist__14735);
var maps = cljs.core.rest(arglist__14735);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___14743 = schema.utils.use_fn_validation;var output_schema14737_14744 = plumbing.fnk.schema.InputSchema;var input_schema14738_14745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker14739_14746 = schema.core.checker.call(null,input_schema14738_14745);var output_checker14740_14747 = schema.core.checker.call(null,output_schema14737_14744);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747){
return (function union_input_schemata(G__14741,G__14742){var validate__5362__auto__ = ufv___14743.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14741,G__14742], null);var temp__4126__auto___14749 = input_checker14739_14746.call(null,args__5363__auto___14748);if(cljs.core.truth_(temp__4126__auto___14749))
{var error__5364__auto___14750 = temp__4126__auto___14749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5364__auto___14750)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14738_14745,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14748,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14750], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var i1 = G__14741;var i2 = G__14742;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747){
return (function (p1__14736_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__14736_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__14736_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747))
,((function (validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747){
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
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747))
,((function (validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5362__auto__,ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14751 = output_checker14740_14747.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14751))
{var error__5364__auto___14752 = temp__4126__auto___14751;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5364__auto___14752)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14737_14744,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14752], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14743,output_schema14737_14744,input_schema14738_14745,input_checker14739_14746,output_checker14740_14747))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema14737_14744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14738_14745], null)));
var ufv___14758 = schema.utils.use_fn_validation;var output_schema14753_14759 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema14754_14760 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker14755_14761 = schema.core.checker.call(null,input_schema14754_14760);var output_checker14756_14762 = schema.core.checker.call(null,output_schema14753_14759);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___14758,output_schema14753_14759,input_schema14754_14760,input_checker14755_14761,output_checker14756_14762){
return (function required_toplevel_keys(G__14757){var validate__5362__auto__ = ufv___14758.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14763 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14757], null);var temp__4126__auto___14764 = input_checker14755_14761.call(null,args__5363__auto___14763);if(cljs.core.truth_(temp__4126__auto___14764))
{var error__5364__auto___14765 = temp__4126__auto___14764;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5364__auto___14765)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14754_14760,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14763,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14765], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var input_schema = G__14757;while(true){
return cljs.core.keep.call(null,((function (validate__5362__auto__,ufv___14758,output_schema14753_14759,input_schema14754_14760,input_checker14755_14761,output_checker14756_14762){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5362__auto__,ufv___14758,output_schema14753_14759,input_schema14754_14760,input_checker14755_14761,output_checker14756_14762))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14766 = output_checker14756_14762.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14766))
{var error__5364__auto___14767 = temp__4126__auto___14766;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5364__auto___14767)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14753_14759,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14767], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14758,output_schema14753_14759,input_schema14754_14760,input_checker14755_14761,output_checker14756_14762))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema14753_14759,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14754_14760], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__14776(s__14777){return (new cljs.core.LazySeq(null,(function (){var s__14777__$1 = s__14777;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14777__$1);if(temp__4126__auto__)
{var s__14777__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14777__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14777__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14779 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14778 = (0);while(true){
if((i__14778 < size__4282__auto__))
{var vec__14782 = cljs.core._nth.call(null,c__4281__auto__,i__14778);var k = cljs.core.nth.call(null,vec__14782,(0),null);var v = cljs.core.nth.call(null,vec__14782,(1),null);cljs.core.chunk_append.call(null,b__14779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__14784 = (i__14778 + (1));
i__14778 = G__14784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14779),iter__14776.call(null,cljs.core.chunk_rest.call(null,s__14777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14779),null);
}
} else
{var vec__14783 = cljs.core.first.call(null,s__14777__$2);var k = cljs.core.nth.call(null,vec__14783,(0),null);var v = cljs.core.nth.call(null,vec__14783,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__14776.call(null,cljs.core.rest.call(null,s__14777__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = (function iter__14793(s__14794){return (new cljs.core.LazySeq(null,(function (){var s__14794__$1 = s__14794;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14794__$1);if(temp__4126__auto__)
{var s__14794__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14794__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14794__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14796 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14795 = (0);while(true){
if((i__14795 < size__4282__auto__))
{var vec__14799 = cljs.core._nth.call(null,c__4281__auto__,i__14795);var k = cljs.core.nth.call(null,vec__14799,(0),null);var v = cljs.core.nth.call(null,vec__14799,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__14796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__14801 = (i__14795 + (1));
i__14795 = G__14801;
continue;
}
} else
{{
var G__14802 = (i__14795 + (1));
i__14795 = G__14802;
continue;
}
}
} else
{{
var G__14803 = (i__14795 + (1));
i__14795 = G__14803;
continue;
}
}
} else
{{
var G__14804 = (i__14795 + (1));
i__14795 = G__14804;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14796),iter__14793.call(null,cljs.core.chunk_rest.call(null,s__14794__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14796),null);
}
} else
{var vec__14800 = cljs.core.first.call(null,s__14794__$2);var k = cljs.core.nth.call(null,vec__14800,(0),null);var v = cljs.core.nth.call(null,vec__14800,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__14793.call(null,cljs.core.rest.call(null,s__14794__$2)));
} else
{{
var G__14805 = cljs.core.rest.call(null,s__14794__$2);
s__14794__$1 = G__14805;
continue;
}
}
} else
{{
var G__14806 = cljs.core.rest.call(null,s__14794__$2);
s__14794__$1 = G__14806;
continue;
}
}
} else
{{
var G__14807 = cljs.core.rest.call(null,s__14794__$2);
s__14794__$1 = G__14807;
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
});return iter__4283__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___14830 = schema.utils.use_fn_validation;var output_schema14808_14831 = schema.core.Any;var input_schema14809_14832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14810_14833 = schema.core.checker.call(null,input_schema14809_14832);var output_checker14811_14834 = schema.core.checker.call(null,output_schema14808_14831);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___14830,output_schema14808_14831,input_schema14809_14832,input_checker14810_14833,output_checker14811_14834){
return (function compose_schemata(G__14812,G__14813){var validate__5362__auto__ = true;if(validate__5362__auto__)
{var args__5363__auto___14835 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14812,G__14813], null);var temp__4126__auto___14836 = input_checker14810_14833.call(null,args__5363__auto___14835);if(cljs.core.truth_(temp__4126__auto___14836))
{var error__5364__auto___14837 = temp__4126__auto___14836;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5364__auto___14837)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14809_14832,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14835,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14837], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var G__14824 = G__14812;var vec__14826 = G__14824;var i2 = cljs.core.nth.call(null,vec__14826,(0),null);var o2 = cljs.core.nth.call(null,vec__14826,(1),null);var G__14825 = G__14813;var vec__14827 = G__14825;var i1 = cljs.core.nth.call(null,vec__14827,(0),null);var o1 = cljs.core.nth.call(null,vec__14827,(1),null);var G__14824__$1 = G__14824;var G__14825__$1 = G__14825;while(true){
var vec__14828 = G__14824__$1;var i2__$1 = cljs.core.nth.call(null,vec__14828,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14828,(1),null);var vec__14829 = G__14825__$1;var i1__$1 = cljs.core.nth.call(null,vec__14829,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14829,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5362__auto__)
{var temp__4126__auto___14838 = output_checker14811_14834.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14838))
{var error__5364__auto___14839 = temp__4126__auto___14838;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5364__auto___14839)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14808_14831,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14839], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14830,output_schema14808_14831,input_schema14809_14832,input_checker14810_14833,output_checker14811_14834))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema14808_14831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14809_14832], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___14918 = schema.utils.use_fn_validation;var output_schema14840_14919 = schema.core.Any;var input_schema14841_14920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker14842_14921 = schema.core.checker.call(null,input_schema14841_14920);var output_checker14843_14922 = schema.core.checker.call(null,output_schema14840_14919);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function split_schema(G__14844,G__14845){var validate__5362__auto__ = ufv___14918.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14844,G__14845], null);var temp__4126__auto___14924 = input_checker14842_14921.call(null,args__5363__auto___14923);if(cljs.core.truth_(temp__4126__auto___14924))
{var error__5364__auto___14925 = temp__4126__auto___14924;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5364__auto___14925)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14841_14920,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14923,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14925], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var s = G__14844;var ks = G__14845;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4283__auto__ = ((function (ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function iter__14882(s__14883){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function (){var s__14883__$1 = s__14883;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14883__$1);if(temp__4126__auto__)
{var s__14883__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14883__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14883__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14885 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14884 = (0);while(true){
if((i__14884 < size__4282__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4281__auto__,i__14884);cljs.core.chunk_append.call(null,b__14885,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (i__14884,in_QMARK_,c__4281__auto__,size__4282__auto__,b__14885,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function iter__14902(s__14903){return (new cljs.core.LazySeq(null,((function (i__14884,in_QMARK_,c__4281__auto__,size__4282__auto__,b__14885,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function (){var s__14903__$1 = s__14903;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14903__$1);if(temp__4126__auto____$1)
{var s__14903__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14903__$2))
{var c__4281__auto____$1 = cljs.core.chunk_first.call(null,s__14903__$2);var size__4282__auto____$1 = cljs.core.count.call(null,c__4281__auto____$1);var b__14905 = cljs.core.chunk_buffer.call(null,size__4282__auto____$1);if((function (){var i__14904 = (0);while(true){
if((i__14904 < size__4282__auto____$1))
{var vec__14908 = cljs.core._nth.call(null,c__4281__auto____$1,i__14904);var k = cljs.core.nth.call(null,vec__14908,(0),null);var v = cljs.core.nth.call(null,vec__14908,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14905,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14926 = (i__14904 + (1));
i__14904 = G__14926;
continue;
}
} else
{{
var G__14927 = (i__14904 + (1));
i__14904 = G__14927;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14905),iter__14902.call(null,cljs.core.chunk_rest.call(null,s__14903__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14905),null);
}
} else
{var vec__14909 = cljs.core.first.call(null,s__14903__$2);var k = cljs.core.nth.call(null,vec__14909,(0),null);var v = cljs.core.nth.call(null,vec__14909,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14902.call(null,cljs.core.rest.call(null,s__14903__$2)));
} else
{{
var G__14928 = cljs.core.rest.call(null,s__14903__$2);
s__14903__$1 = G__14928;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__14884,in_QMARK_,c__4281__auto__,size__4282__auto__,b__14885,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
,null,null));
});})(i__14884,in_QMARK_,c__4281__auto__,size__4282__auto__,b__14885,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
;return iter__4283__auto__.call(null,s);
})()));
{
var G__14929 = (i__14884 + (1));
i__14884 = G__14929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14885),iter__14882.call(null,cljs.core.chunk_rest.call(null,s__14883__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14885),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__14883__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4283__auto__ = ((function (in_QMARK_,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function iter__14910(s__14911){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922){
return (function (){var s__14911__$1 = s__14911;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14911__$1);if(temp__4126__auto____$1)
{var s__14911__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14911__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14911__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14913 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14912 = (0);while(true){
if((i__14912 < size__4282__auto__))
{var vec__14916 = cljs.core._nth.call(null,c__4281__auto__,i__14912);var k = cljs.core.nth.call(null,vec__14916,(0),null);var v = cljs.core.nth.call(null,vec__14916,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14913,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14930 = (i__14912 + (1));
i__14912 = G__14930;
continue;
}
} else
{{
var G__14931 = (i__14912 + (1));
i__14912 = G__14931;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14913),iter__14910.call(null,cljs.core.chunk_rest.call(null,s__14911__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14913),null);
}
} else
{var vec__14917 = cljs.core.first.call(null,s__14911__$2);var k = cljs.core.nth.call(null,vec__14917,(0),null);var v = cljs.core.nth.call(null,vec__14917,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14910.call(null,cljs.core.rest.call(null,s__14911__$2)));
} else
{{
var G__14932 = cljs.core.rest.call(null,s__14911__$2);
s__14911__$1 = G__14932;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
,null,null));
});})(in_QMARK_,s__14883__$2,temp__4126__auto__,ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
;return iter__4283__auto__.call(null,s);
})()),iter__14882.call(null,cljs.core.rest.call(null,s__14883__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
,null,null));
});})(ks__$1,validate__5362__auto__,ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
;return iter__4283__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14933 = output_checker14843_14922.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14933))
{var error__5364__auto___14934 = temp__4126__auto___14933;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5364__auto___14934)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14840_14919,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14934], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14918,output_schema14840_14919,input_schema14841_14920,input_checker14842_14921,output_checker14843_14922))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema14840_14919,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14841_14920], null)));
var ufv___14965 = schema.utils.use_fn_validation;var output_schema14935_14966 = plumbing.fnk.schema.GraphIOSchemata;var input_schema14936_14967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14937_14968 = schema.core.checker.call(null,input_schema14936_14967);var output_checker14938_14969 = schema.core.checker.call(null,output_schema14935_14966);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___14965,output_schema14935_14966,input_schema14936_14967,input_checker14937_14968,output_checker14938_14969){
return (function sequence_schemata(G__14939,G__14940){var validate__5362__auto__ = ufv___14965.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14970 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14939,G__14940], null);var temp__4126__auto___14971 = input_checker14937_14968.call(null,args__5363__auto___14970);if(cljs.core.truth_(temp__4126__auto___14971))
{var error__5364__auto___14972 = temp__4126__auto___14971;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5364__auto___14972)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14936_14967,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14970,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14972], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var G__14956 = G__14939;var vec__14958 = G__14956;var i1 = cljs.core.nth.call(null,vec__14958,(0),null);var o1 = cljs.core.nth.call(null,vec__14958,(1),null);var G__14957 = G__14940;var vec__14959 = G__14957;var k = cljs.core.nth.call(null,vec__14959,(0),null);var vec__14960 = cljs.core.nth.call(null,vec__14959,(1),null);var i2 = cljs.core.nth.call(null,vec__14960,(0),null);var o2 = cljs.core.nth.call(null,vec__14960,(1),null);var G__14956__$1 = G__14956;var G__14957__$1 = G__14957;while(true){
var vec__14961 = G__14956__$1;var i1__$1 = cljs.core.nth.call(null,vec__14961,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14961,(1),null);var vec__14962 = G__14957__$1;var k__$1 = cljs.core.nth.call(null,vec__14962,(0),null);var vec__14963 = cljs.core.nth.call(null,vec__14962,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__14963,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14963,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__14964 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__14964,(0),null);var unused = cljs.core.nth.call(null,vec__14964,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14973 = output_checker14938_14969.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14973))
{var error__5364__auto___14974 = temp__4126__auto___14973;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5364__auto___14974)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14935_14966,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14974], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14965,output_schema14935_14966,input_schema14936_14967,input_checker14937_14968,output_checker14938_14969))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema14935_14966,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14936_14967], null)));

//# sourceMappingURL=schema.js.map