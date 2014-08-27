// Compiled by ClojureScript 0.0-2322
goog.provide('poker_site.hand_result');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('om_tools.dom');
goog.require('poker_site.facebook');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('poker_site.util');
goog.require('poker_site.util');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.reader');
goog.require('poker_site.facebook');
poker_site.hand_result.handle_input = (function handle_input(event,out,id,owner,text){var value = event.target.value;if(cljs.core.truth_(cljs.core.re_find.call(null,/^[+-]?\d*\.?5?$/,value)))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,value], null));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),text);
}
});
var ufv___14174 = schema.utils.use_fn_validation;var output_schema14064_14175 = schema.core.Any;var input_schema14065_14176 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14066_14177 = schema.core.checker.call(null,input_schema14065_14176);var output_checker14067_14178 = schema.core.checker.call(null,output_schema14064_14175);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function player_result(G__14068,G__14069){var validate__5362__auto__ = ufv___14174.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14068,G__14069], null);var temp__4126__auto___14180 = input_checker14066_14177.call(null,args__5363__auto___14179);if(cljs.core.truth_(temp__4126__auto___14180))
{var error__5364__auto___14181 = temp__4126__auto___14180;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5364__auto___14181)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14065_14176,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14179,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14181], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__14068;var owner = G__14069;while(true){
if(typeof poker_site.hand_result.t14122 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t14122 = (function (owner,G__14068,data,player_result,input_schema14065,output_schema14064,input_checker14066,validate__5362__auto__,G__14069,output_checker14067,ufv__,meta14123){
this.owner = owner;
this.G__14068 = G__14068;
this.data = data;
this.player_result = player_result;
this.input_schema14065 = input_schema14065;
this.output_schema14064 = output_schema14064;
this.input_checker14066 = input_checker14066;
this.validate__5362__auto__ = validate__5362__auto__;
this.G__14069 = G__14069;
this.output_checker14067 = output_checker14067;
this.ufv__ = ufv__;
this.meta14123 = meta14123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t14122.cljs$lang$type = true;
poker_site.hand_result.t14122.cljs$lang$ctorStr = "poker-site.hand-result/t14122";
poker_site.hand_result.t14122.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.hand-result/t14122");
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.t14122.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t14122.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (_,p__14125){var self__ = this;
var map__14126 = p__14125;var map__14126__$1 = ((cljs.core.seq_QMARK_.call(null,map__14126))?cljs.core.apply.call(null,cljs.core.hash_map,map__14126):map__14126);var text = cljs.core.get.call(null,map__14126__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var out = cljs.core.get.call(null,map__14126__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,map__14126,map__14126__$1,text,out,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (p1__14062_SHARP_){return poker_site.hand_result.handle_input.call(null,p1__14062_SHARP_,out,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,text);
});})(___$1,map__14126,map__14126__$1,text,out,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
, "value": text, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.t14122.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t14122.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (_){var self__ = this;
var ___$1 = this;var in_chan = cljs.core.async.chan.call(null);var clear_chan = cljs.core.async.chan.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id1","id1",220529770),in_chan);
} else
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id2","id2",1234345165),in_chan);
}
cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"clear","clear",1877104959),clear_chan);
var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (state_14153){var state_val_14154 = (state_14153[(1)]);if((state_val_14154 === (7)))
{var inst_14148 = (state_14153[(2)]);var state_14153__$1 = (function (){var statearr_14155 = state_14153;(statearr_14155[(7)] = inst_14148);
return statearr_14155;
})();var statearr_14156_14182 = state_14153__$1;(statearr_14156_14182[(2)] = null);
(statearr_14156_14182[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (1)))
{var state_14153__$1 = state_14153;var statearr_14157_14183 = state_14153__$1;(statearr_14157_14183[(2)] = null);
(statearr_14157_14183[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (4)))
{var inst_14135 = (state_14153[(8)]);var inst_14133 = (state_14153[(2)]);var inst_14134 = cljs.core.nth.call(null,inst_14133,(0),null);var inst_14135__$1 = cljs.core.nth.call(null,inst_14133,(1),null);var inst_14136 = cljs.core._EQ_.call(null,inst_14135__$1,in_chan);var state_14153__$1 = (function (){var statearr_14158 = state_14153;(statearr_14158[(9)] = inst_14134);
(statearr_14158[(8)] = inst_14135__$1);
return statearr_14158;
})();if(inst_14136)
{var statearr_14159_14184 = state_14153__$1;(statearr_14159_14184[(1)] = (5));
} else
{var statearr_14160_14185 = state_14153__$1;(statearr_14160_14185[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (6)))
{var inst_14135 = (state_14153[(8)]);var inst_14141 = cljs.core._EQ_.call(null,inst_14135,clear_chan);var state_14153__$1 = state_14153;if(inst_14141)
{var statearr_14161_14186 = state_14153__$1;(statearr_14161_14186[(1)] = (8));
} else
{var statearr_14162_14187 = state_14153__$1;(statearr_14162_14187[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (3)))
{var inst_14151 = (state_14153[(2)]);var state_14153__$1 = state_14153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14153__$1,inst_14151);
} else
{if((state_val_14154 === (2)))
{var inst_14129 = cljs.core.PersistentVector.EMPTY_NODE;var inst_14130 = [in_chan,clear_chan];var inst_14131 = (new cljs.core.PersistentVector(null,2,(5),inst_14129,inst_14130,null));var state_14153__$1 = state_14153;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14153__$1,(4),inst_14131);
} else
{if((state_val_14154 === (9)))
{var state_14153__$1 = state_14153;var statearr_14163_14188 = state_14153__$1;(statearr_14163_14188[(2)] = null);
(statearr_14163_14188[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (5)))
{var inst_14134 = (state_14153[(9)]);var inst_14138 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_14134);var inst_14139 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_14138);var state_14153__$1 = state_14153;var statearr_14164_14189 = state_14153__$1;(statearr_14164_14189[(2)] = inst_14139);
(statearr_14164_14189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (10)))
{var inst_14146 = (state_14153[(2)]);var state_14153__$1 = state_14153;var statearr_14165_14190 = state_14153__$1;(statearr_14165_14190[(2)] = inst_14146);
(statearr_14165_14190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14154 === (8)))
{var inst_14143 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),"0");var state_14153__$1 = state_14153;var statearr_14166_14191 = state_14153__$1;(statearr_14166_14191[(2)] = inst_14143);
(statearr_14166_14191[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;return ((function (switch__11490__auto__,c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_14170 = [null,null,null,null,null,null,null,null,null,null];(statearr_14170[(0)] = state_machine__11491__auto__);
(statearr_14170[(1)] = (1));
return statearr_14170;
});
var state_machine__11491__auto____1 = (function (state_14153){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_14153);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e14171){if((e14171 instanceof Object))
{var ex__11494__auto__ = e14171;var statearr_14172_14192 = state_14153;(statearr_14172_14192[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14171;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14193 = state_14153;
state_14153 = G__14193;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_14153){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_14153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
})();var state__11507__auto__ = (function (){var statearr_14173 = f__11506__auto__.call(null);(statearr_14173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_14173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__,in_chan,clear_chan,___$1,validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
);
return c__11505__auto__;
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.t14122.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t14122.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.t14122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (_14124){var self__ = this;
var _14124__$1 = this;return self__.meta14123;
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.t14122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function (_14124,meta14123__$1){var self__ = this;
var _14124__$1 = this;return (new poker_site.hand_result.t14122(self__.owner,self__.G__14068,self__.data,self__.player_result,self__.input_schema14065,self__.output_schema14064,self__.input_checker14066,self__.validate__5362__auto__,self__.G__14069,self__.output_checker14067,self__.ufv__,meta14123__$1));
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
poker_site.hand_result.__GT_t14122 = ((function (validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178){
return (function __GT_t14122(owner__$1,G__14068__$1,data__$1,player_result__$1,input_schema14065__$1,output_schema14064__$1,input_checker14066__$1,validate__5362__auto____$1,G__14069__$1,output_checker14067__$1,ufv____$1,meta14123){return (new poker_site.hand_result.t14122(owner__$1,G__14068__$1,data__$1,player_result__$1,input_schema14065__$1,output_schema14064__$1,input_checker14066__$1,validate__5362__auto____$1,G__14069__$1,output_checker14067__$1,ufv____$1,meta14123));
});})(validate__5362__auto__,ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
}
return (new poker_site.hand_result.t14122(owner,G__14068,data,player_result,input_schema14065_14176,output_schema14064_14175,input_checker14066_14177,validate__5362__auto__,G__14069,output_checker14067_14178,ufv___14174,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14194 = output_checker14067_14178.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14194))
{var error__5364__auto___14195 = temp__4126__auto___14194;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5364__auto___14195)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14064_14175,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14195], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14174,output_schema14064_14175,input_schema14065_14176,input_checker14066_14177,output_checker14067_14178))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema14064_14175,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14065_14176], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7130__auto__);
});
var __GT_player_result__2 = (function (cursor__7130__auto__,m14063){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7130__auto__,m14063);
});
__GT_player_result = function(cursor__7130__auto__,m14063){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7130__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7130__auto__,m14063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__14196_SHARP_){return (p1__14196_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__14197_SHARP_){return (p1__14197_SHARP_ + p2bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"clear","clear",1877104959)], null));
});
poker_site.hand_result.player_by_id = (function player_by_id(data,id){var p1 = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636)], null));var p2 = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775)], null));if(cljs.core._EQ_.call(null,id,(1)))
{return p1;
} else
{return p2;
}
});
poker_site.hand_result.smaller_stack = (function smaller_stack(data){var stack_p1 = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(poker_site.hand_result.player_by_id.call(null,data,(1)));var stack_p2 = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(poker_site.hand_result.player_by_id.call(null,data,(2)));if((stack_p1 < stack_p2))
{return stack_p1;
} else
{return stack_p2;
}
});
poker_site.hand_result.validate_bet = (function validate_bet(number,stack){if((number > (0)))
{var x__3872__auto__ = number;var y__3873__auto__ = stack;return ((x__3872__auto__ < y__3873__auto__) ? x__3872__auto__ : y__3873__auto__);
} else
{var x__3865__auto__ = number;var y__3866__auto__ = ((0) - stack);return ((x__3865__auto__ > y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
}
});
poker_site.hand_result.parse_number = (function parse_number(number){if((cljs.core._EQ_.call(null,number,".5")) || (cljs.core._EQ_.call(null,number,"+.5")))
{return 0.5;
} else
{if(cljs.core._EQ_.call(null,number,"-.5"))
{return -0.5;
} else
{if((cljs.core._EQ_.call(null,number,".")) || (cljs.core._EQ_.call(null,number,"-.")) || (cljs.core._EQ_.call(null,number,"+.")))
{return (0);
} else
{if(cljs.core._EQ_.call(null,number,""))
{return (0);
} else
{if((cljs.core._EQ_.call(null,number,"+")) || (cljs.core._EQ_.call(null,number,"-")))
{return (0);
} else
{return cljs.reader.read_string.call(null,number);

}
}
}
}
}
});
poker_site.hand_result.send_to_self_QMARK_ = (function send_to_self_QMARK_(number){if(cljs.core.truth_(cljs.core.re_find.call(null,/\.$/,number)))
{return false;
} else
{if(cljs.core._EQ_.call(null,poker_site.hand_result.parse_number.call(null,number),(0)))
{return false;
} else
{return true;
}
}
});
poker_site.hand_result.send_message = (function send_message(out,src,msg,to_self_QMARK_){if(cljs.core._EQ_.call(null,src,(1)))
{if(cljs.core.truth_(to_self_QMARK_))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id1","id1",220529770),new cljs.core.Keyword(null,"value","value",305978217),msg], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id2","id2",1234345165),new cljs.core.Keyword(null,"value","value",305978217),((0) - msg)], null));
} else
{if(cljs.core.truth_(to_self_QMARK_))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id2","id2",1234345165),new cljs.core.Keyword(null,"value","value",305978217),msg], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id1","id1",220529770),new cljs.core.Keyword(null,"value","value",305978217),((0) - msg)], null));
}
});
poker_site.hand_result.update_stacks = (function update_stacks(owner,id,validated){if(cljs.core._EQ_.call(null,id,(1)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),validated);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),((0) - validated));
} else
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),validated);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),((0) - validated));
}
});
poker_site.hand_result.handle_message = (function handle_message(data,owner){var in$ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"in","in",-1531184865));var out = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"outC","outC",-1706649413));var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__,in$,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__,in$,out){
return (function (state_14244){var state_val_14245 = (state_14244[(1)]);if((state_val_14245 === (4)))
{var inst_14230 = (state_14244[(2)]);var inst_14231 = cljs.core.nth.call(null,inst_14230,(0),null);var inst_14232 = cljs.core.nth.call(null,inst_14230,(1),null);var inst_14233 = poker_site.hand_result.parse_number.call(null,inst_14232);var inst_14234 = poker_site.hand_result.send_to_self_QMARK_.call(null,inst_14232);var inst_14235 = cljs.core.deref.call(null,data);var inst_14236 = poker_site.hand_result.smaller_stack.call(null,inst_14235);var inst_14237 = poker_site.hand_result.validate_bet.call(null,inst_14233,inst_14236);var inst_14238 = poker_site.hand_result.send_message.call(null,out,inst_14231,inst_14237,inst_14234);var inst_14239 = poker_site.hand_result.update_stacks.call(null,owner,inst_14231,inst_14237);var state_14244__$1 = (function (){var statearr_14246 = state_14244;(statearr_14246[(7)] = inst_14238);
(statearr_14246[(8)] = inst_14239);
return statearr_14246;
})();var statearr_14247_14256 = state_14244__$1;(statearr_14247_14256[(2)] = null);
(statearr_14247_14256[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14245 === (3)))
{var inst_14242 = (state_14244[(2)]);var state_14244__$1 = state_14244;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14244__$1,inst_14242);
} else
{if((state_val_14245 === (2)))
{var state_14244__$1 = state_14244;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14244__$1,(4),in$);
} else
{if((state_val_14245 === (1)))
{var state_14244__$1 = state_14244;var statearr_14248_14257 = state_14244__$1;(statearr_14248_14257[(2)] = null);
(statearr_14248_14257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__11505__auto__,in$,out))
;return ((function (switch__11490__auto__,c__11505__auto__,in$,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_14252 = [null,null,null,null,null,null,null,null,null];(statearr_14252[(0)] = state_machine__11491__auto__);
(statearr_14252[(1)] = (1));
return statearr_14252;
});
var state_machine__11491__auto____1 = (function (state_14244){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_14244);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e14253){if((e14253 instanceof Object))
{var ex__11494__auto__ = e14253;var statearr_14254_14258 = state_14244;(statearr_14254_14258[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14244);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14253;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14259 = state_14244;
state_14244 = G__14259;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_14244){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_14244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__,in$,out))
})();var state__11507__auto__ = (function (){var statearr_14255 = f__11506__auto__.call(null);(statearr_14255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_14255;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__,in$,out))
);
return c__11505__auto__;
});
var ufv___14278 = schema.utils.use_fn_validation;var output_schema14262_14279 = schema.core.Any;var input_schema14263_14280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14264_14281 = schema.core.checker.call(null,input_schema14263_14280);var output_checker14265_14282 = schema.core.checker.call(null,output_schema14262_14279);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function hand_result(G__14266,G__14267){var validate__5362__auto__ = ufv___14278.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14266,G__14267], null);var temp__4126__auto___14284 = input_checker14264_14281.call(null,args__5363__auto___14283);if(cljs.core.truth_(temp__4126__auto___14284))
{var error__5364__auto___14285 = temp__4126__auto___14284;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5364__auto___14285)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14263_14280,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14283,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14285], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__14266;var owner = G__14267;while(true){
if(typeof poker_site.hand_result.t14273 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t14273 = (function (output_schema14262,owner,G__14267,data,hand_result,G__14266,validate__5362__auto__,input_checker14264,output_checker14265,input_schema14263,ufv__,meta14274){
this.output_schema14262 = output_schema14262;
this.owner = owner;
this.G__14267 = G__14267;
this.data = data;
this.hand_result = hand_result;
this.G__14266 = G__14266;
this.validate__5362__auto__ = validate__5362__auto__;
this.input_checker14264 = input_checker14264;
this.output_checker14265 = output_checker14265;
this.input_schema14263 = input_schema14263;
this.ufv__ = ufv__;
this.meta14274 = meta14274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t14273.cljs$lang$type = true;
poker_site.hand_result.t14273.cljs$lang$ctorStr = "poker-site.hand-result/t14273";
poker_site.hand_result.t14273.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.hand-result/t14273");
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t14273.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_,p__14276){var self__ = this;
var map__14277 = p__14276;var map__14277__$1 = ((cljs.core.seq_QMARK_.call(null,map__14277))?cljs.core.apply.call(null,cljs.core.hash_map,map__14277):map__14277);var in$ = cljs.core.get.call(null,map__14277__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var outP = cljs.core.get.call(null,map__14277__$1,new cljs.core.Keyword(null,"outP","outP",481288973));var outC = cljs.core.get.call(null,map__14277__$1,new cljs.core.Keyword(null,"outC","outC",-1706649413));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__14277,map__14277__$1,in$,outP,outC,validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,outC);
});})(___$1,map__14277,map__14277__$1,in$,outP,outC,validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t14273.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_){var self__ = this;
var ___$1 = this;return poker_site.hand_result.handle_message.call(null,self__.data,self__.owner);
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t14273.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_){var self__ = this;
var ___$1 = this;var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outP","outP",481288973),cljs.core.async.pub.call(null,c,((function (c,___$1,validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (p1__14260_SHARP_){return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__14260_SHARP_);
});})(c,___$1,validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
),new cljs.core.Keyword(null,"outC","outC",-1706649413),c,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t14273.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_14275){var self__ = this;
var _14275__$1 = this;return self__.meta14274;
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.t14273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function (_14275,meta14274__$1){var self__ = this;
var _14275__$1 = this;return (new poker_site.hand_result.t14273(self__.output_schema14262,self__.owner,self__.G__14267,self__.data,self__.hand_result,self__.G__14266,self__.validate__5362__auto__,self__.input_checker14264,self__.output_checker14265,self__.input_schema14263,self__.ufv__,meta14274__$1));
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
poker_site.hand_result.__GT_t14273 = ((function (validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282){
return (function __GT_t14273(output_schema14262__$1,owner__$1,G__14267__$1,data__$1,hand_result__$1,G__14266__$1,validate__5362__auto____$1,input_checker14264__$1,output_checker14265__$1,input_schema14263__$1,ufv____$1,meta14274){return (new poker_site.hand_result.t14273(output_schema14262__$1,owner__$1,G__14267__$1,data__$1,hand_result__$1,G__14266__$1,validate__5362__auto____$1,input_checker14264__$1,output_checker14265__$1,input_schema14263__$1,ufv____$1,meta14274));
});})(validate__5362__auto__,ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
}
return (new poker_site.hand_result.t14273(output_schema14262_14279,owner,G__14267,data,hand_result,G__14266,validate__5362__auto__,input_checker14264_14281,output_checker14265_14282,input_schema14263_14280,ufv___14278,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14286 = output_checker14265_14282.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14286))
{var error__5364__auto___14287 = temp__4126__auto___14286;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5364__auto___14287)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14262_14279,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14287], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14278,output_schema14262_14279,input_schema14263_14280,input_checker14264_14281,output_checker14265_14282))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema14262_14279,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14263_14280], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7130__auto__);
});
var __GT_hand_result__2 = (function (cursor__7130__auto__,m14261){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7130__auto__,m14261);
});
__GT_hand_result = function(cursor__7130__auto__,m14261){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7130__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7130__auto__,m14261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map