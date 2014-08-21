// Compiled by ClojureScript 0.0-2280
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
/**
* Handles text change, in case it's a number sends it to the parent, doesn't allow non-numbers
*/
poker_site.hand_result.handle_result = (function handle_result(e,id,owner,p__16118){var map__16120 = p__16118;var map__16120__$1 = ((cljs.core.seq_QMARK_.call(null,map__16120))?cljs.core.apply.call(null,cljs.core.hash_map,map__16120):map__16120);var out = cljs.core.get.call(null,map__16120__$1,new cljs.core.Keyword(null,"out","out",-910545517));var text = cljs.core.get.call(null,map__16120__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var value = e.target.value;if(cljs.core.truth_(cljs.core.re_find.call(null,/^[+-]?\d*$/,value)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),value);
if(cljs.core.not_EQ_.call(null,value,""))
{var number_16121 = cljs.reader.read_string.call(null,value);if(typeof number_16121 === 'number')
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,number_16121], null));
} else
{}
} else
{}
} else
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),text);
}
if(cljs.core._EQ_.call(null,value,""))
{return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(0)], null));
} else
{return null;
}
});
var ufv___16212 = schema.utils.use_fn_validation;var output_schema16124_16213 = schema.core.Any;var input_schema16125_16214 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker16126_16215 = schema.core.checker.call(null,input_schema16125_16214);var output_checker16127_16216 = schema.core.checker.call(null,output_schema16124_16213);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function player_result(G__16128,G__16129){var validate__5346__auto__ = ufv___16212.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___16217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16128,G__16129], null);var temp__4126__auto___16218 = input_checker16126_16215.call(null,args__5347__auto___16217);if(cljs.core.truth_(temp__4126__auto___16218))
{var error__5348__auto___16219 = temp__4126__auto___16218;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___16219)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16125_16214,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___16217,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16219], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__16128;var owner = G__16129;while(true){
if(typeof poker_site.hand_result.t16171 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t16171 = (function (validate__5346__auto__,owner,input_checker16126,data,player_result,input_schema16125,output_checker16127,G__16129,G__16128,output_schema16124,ufv__,meta16172){
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.input_checker16126 = input_checker16126;
this.data = data;
this.player_result = player_result;
this.input_schema16125 = input_schema16125;
this.output_checker16127 = output_checker16127;
this.G__16129 = G__16129;
this.G__16128 = G__16128;
this.output_schema16124 = output_schema16124;
this.ufv__ = ufv__;
this.meta16172 = meta16172;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t16171.cljs$lang$type = true;
poker_site.hand_result.t16171.cljs$lang$ctorStr = "poker-site.hand-result/t16171";
poker_site.hand_result.t16171.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t16171");
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.t16171.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t16171.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (p1__16122_SHARP_){return poker_site.hand_result.handle_result.call(null,p1__16122_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,state);
});})(___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.t16171.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t16171.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (_){var self__ = this;
var ___$1 = this;var in$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865));var c__11485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (){var f__11486__auto__ = (function (){var switch__11470__auto__ = ((function (c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (state_16195){var state_val_16196 = (state_16195[(1)]);if((state_val_16196 === (8)))
{var inst_16188 = (state_16195[(2)]);var state_16195__$1 = state_16195;var statearr_16197_16220 = state_16195__$1;(statearr_16197_16220[(2)] = inst_16188);
(statearr_16197_16220[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (7)))
{var inst_16190 = (state_16195[(2)]);var state_16195__$1 = (function (){var statearr_16198 = state_16195;(statearr_16198[(7)] = inst_16190);
return statearr_16198;
})();var statearr_16199_16221 = state_16195__$1;(statearr_16199_16221[(2)] = null);
(statearr_16199_16221[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (6)))
{var inst_16177 = (state_16195[(8)]);var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16195__$1,(8),in$,inst_16177);
} else
{if((state_val_16196 === (5)))
{var inst_16179 = (state_16195[(9)]);var inst_16184 = ((0) - inst_16179);var inst_16185 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_16184);var state_16195__$1 = state_16195;var statearr_16200_16222 = state_16195__$1;(statearr_16200_16222[(2)] = inst_16185);
(statearr_16200_16222[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (4)))
{var inst_16177 = (state_16195[(8)]);var inst_16177__$1 = (state_16195[(2)]);var inst_16178 = cljs.core.nth.call(null,inst_16177__$1,(0),null);var inst_16179 = cljs.core.nth.call(null,inst_16177__$1,(1),null);var inst_16180 = cljs.core.deref.call(null,self__.data);var inst_16181 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_16180);var inst_16182 = cljs.core.not_EQ_.call(null,inst_16178,inst_16181);var state_16195__$1 = (function (){var statearr_16201 = state_16195;(statearr_16201[(8)] = inst_16177__$1);
(statearr_16201[(9)] = inst_16179);
return statearr_16201;
})();if(inst_16182)
{var statearr_16202_16223 = state_16195__$1;(statearr_16202_16223[(1)] = (5));
} else
{var statearr_16203_16224 = state_16195__$1;(statearr_16203_16224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16196 === (3)))
{var inst_16193 = (state_16195[(2)]);var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16195__$1,inst_16193);
} else
{if((state_val_16196 === (2)))
{var state_16195__$1 = state_16195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16195__$1,(4),in$);
} else
{if((state_val_16196 === (1)))
{var state_16195__$1 = state_16195;var statearr_16204_16225 = state_16195__$1;(statearr_16204_16225[(2)] = null);
(statearr_16204_16225[(1)] = (2));
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
});})(c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;return ((function (switch__11470__auto__,c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function() {
var state_machine__11471__auto__ = null;
var state_machine__11471__auto____0 = (function (){var statearr_16208 = [null,null,null,null,null,null,null,null,null,null];(statearr_16208[(0)] = state_machine__11471__auto__);
(statearr_16208[(1)] = (1));
return statearr_16208;
});
var state_machine__11471__auto____1 = (function (state_16195){while(true){
var ret_value__11472__auto__ = (function (){try{while(true){
var result__11473__auto__ = switch__11470__auto__.call(null,state_16195);if(cljs.core.keyword_identical_QMARK_.call(null,result__11473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11473__auto__;
}
break;
}
}catch (e16209){if((e16209 instanceof Object))
{var ex__11474__auto__ = e16209;var statearr_16210_16226 = state_16195;(statearr_16210_16226[(5)] = ex__11474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16195);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16227 = state_16195;
state_16195 = G__16227;
continue;
}
} else
{return ret_value__11472__auto__;
}
break;
}
});
state_machine__11471__auto__ = function(state_16195){
switch(arguments.length){
case 0:
return state_machine__11471__auto____0.call(this);
case 1:
return state_machine__11471__auto____1.call(this,state_16195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11471__auto____0;
state_machine__11471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11471__auto____1;
return state_machine__11471__auto__;
})()
;})(switch__11470__auto__,c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
})();var state__11487__auto__ = (function (){var statearr_16211 = f__11486__auto__.call(null);(statearr_16211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11485__auto__);
return statearr_16211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11487__auto__);
});})(c__11485__auto__,in$,___$1,validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
);
return c__11485__auto__;
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.t16171.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t16171.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.t16171.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (_16173){var self__ = this;
var _16173__$1 = this;return self__.meta16172;
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.t16171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function (_16173,meta16172__$1){var self__ = this;
var _16173__$1 = this;return (new poker_site.hand_result.t16171(self__.validate__5346__auto__,self__.owner,self__.input_checker16126,self__.data,self__.player_result,self__.input_schema16125,self__.output_checker16127,self__.G__16129,self__.G__16128,self__.output_schema16124,self__.ufv__,meta16172__$1));
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
poker_site.hand_result.__GT_t16171 = ((function (validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216){
return (function __GT_t16171(validate__5346__auto____$1,owner__$1,input_checker16126__$1,data__$1,player_result__$1,input_schema16125__$1,output_checker16127__$1,G__16129__$1,G__16128__$1,output_schema16124__$1,ufv____$1,meta16172){return (new poker_site.hand_result.t16171(validate__5346__auto____$1,owner__$1,input_checker16126__$1,data__$1,player_result__$1,input_schema16125__$1,output_checker16127__$1,G__16129__$1,G__16128__$1,output_schema16124__$1,ufv____$1,meta16172));
});})(validate__5346__auto__,ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
}
return (new poker_site.hand_result.t16171(validate__5346__auto__,owner,input_checker16126_16215,data,player_result,input_schema16125_16214,output_checker16127_16216,G__16129,G__16128,output_schema16124_16213,ufv___16212,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___16228 = output_checker16127_16216.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___16228))
{var error__5348__auto___16229 = temp__4126__auto___16228;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___16229)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16124_16213,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16229], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___16212,output_schema16124_16213,input_schema16125_16214,input_checker16126_16215,output_checker16127_16216))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema16124_16213,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16125_16214], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m16123){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m16123);
});
__GT_player_result = function(cursor__7114__auto__,m16123){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m16123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__16230_SHARP_){return (p1__16230_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__16231_SHARP_){return (p1__16231_SHARP_ + p2bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959),(0)], null));
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959),(0)], null));
});
var ufv___16331 = schema.utils.use_fn_validation;var output_schema16233_16332 = schema.core.Any;var input_schema16234_16333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker16235_16334 = schema.core.checker.call(null,input_schema16234_16333);var output_checker16236_16335 = schema.core.checker.call(null,output_schema16233_16332);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function hand_result(G__16237,G__16238){var validate__5346__auto__ = ufv___16331.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___16336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16237,G__16238], null);var temp__4126__auto___16337 = input_checker16235_16334.call(null,args__5347__auto___16336);if(cljs.core.truth_(temp__4126__auto___16337))
{var error__5348__auto___16338 = temp__4126__auto___16337;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___16338)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16234_16333,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___16336,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16338], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__16237;var owner = G__16238;while(true){
if(typeof poker_site.hand_result.t16285 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t16285 = (function (validate__5346__auto__,G__16238,owner,data,hand_result,output_checker16236,input_schema16234,output_schema16233,input_checker16235,ufv__,G__16237,meta16286){
this.validate__5346__auto__ = validate__5346__auto__;
this.G__16238 = G__16238;
this.owner = owner;
this.data = data;
this.hand_result = hand_result;
this.output_checker16236 = output_checker16236;
this.input_schema16234 = input_schema16234;
this.output_schema16233 = output_schema16233;
this.input_checker16235 = input_checker16235;
this.ufv__ = ufv__;
this.G__16237 = G__16237;
this.meta16286 = meta16286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t16285.cljs$lang$type = true;
poker_site.hand_result.t16285.cljs$lang$ctorStr = "poker-site.hand-result/t16285";
poker_site.hand_result.t16285.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t16285");
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t16285.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_,p__16288){var self__ = this;
var map__16289 = p__16288;var map__16289__$1 = ((cljs.core.seq_QMARK_.call(null,map__16289))?cljs.core.apply.call(null,cljs.core.hash_map,map__16289):map__16289);var in$ = cljs.core.get.call(null,map__16289__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var out = cljs.core.get.call(null,map__16289__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),out,new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),out,new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__16289,map__16289__$1,in$,out,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,out);
});})(___$1,map__16289,map__16289__$1,in$,out,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t16285.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_){var self__ = this;
var ___$1 = this;var in$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865));var out = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"out","out",-910545517));var c__11485__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (){var f__11486__auto__ = (function (){var switch__11470__auto__ = ((function (c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (state_16312){var state_val_16313 = (state_16312[(1)]);if((state_val_16313 === (7)))
{var inst_16293 = (state_16312[(7)]);var inst_16306 = (state_16312[(2)]);var inst_16307 = cljs.core.async.put_BANG_.call(null,out,inst_16293);var state_16312__$1 = (function (){var statearr_16314 = state_16312;(statearr_16314[(8)] = inst_16306);
(statearr_16314[(9)] = inst_16307);
return statearr_16314;
})();var statearr_16315_16339 = state_16312__$1;(statearr_16315_16339[(2)] = null);
(statearr_16315_16339[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16313 === (6)))
{var inst_16295 = (state_16312[(10)]);var inst_16302 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),inst_16295);var inst_16303 = ((0) - inst_16295);var inst_16304 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),inst_16303);var state_16312__$1 = (function (){var statearr_16316 = state_16312;(statearr_16316[(11)] = inst_16302);
return statearr_16316;
})();var statearr_16317_16340 = state_16312__$1;(statearr_16317_16340[(2)] = inst_16304);
(statearr_16317_16340[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16313 === (5)))
{var inst_16295 = (state_16312[(10)]);var inst_16298 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),inst_16295);var inst_16299 = ((0) - inst_16295);var inst_16300 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),inst_16299);var state_16312__$1 = (function (){var statearr_16318 = state_16312;(statearr_16318[(12)] = inst_16298);
return statearr_16318;
})();var statearr_16319_16341 = state_16312__$1;(statearr_16319_16341[(2)] = inst_16300);
(statearr_16319_16341[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16313 === (4)))
{var inst_16293 = (state_16312[(7)]);var inst_16293__$1 = (state_16312[(2)]);var inst_16294 = cljs.core.nth.call(null,inst_16293__$1,(0),null);var inst_16295 = cljs.core.nth.call(null,inst_16293__$1,(1),null);var inst_16296 = cljs.core._EQ_.call(null,inst_16294,(1));var state_16312__$1 = (function (){var statearr_16320 = state_16312;(statearr_16320[(7)] = inst_16293__$1);
(statearr_16320[(10)] = inst_16295);
return statearr_16320;
})();if(inst_16296)
{var statearr_16321_16342 = state_16312__$1;(statearr_16321_16342[(1)] = (5));
} else
{var statearr_16322_16343 = state_16312__$1;(statearr_16322_16343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16313 === (3)))
{var inst_16310 = (state_16312[(2)]);var state_16312__$1 = state_16312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16312__$1,inst_16310);
} else
{if((state_val_16313 === (2)))
{var state_16312__$1 = state_16312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16312__$1,(4),in$);
} else
{if((state_val_16313 === (1)))
{var state_16312__$1 = state_16312;var statearr_16323_16344 = state_16312__$1;(statearr_16323_16344[(2)] = null);
(statearr_16323_16344[(1)] = (2));
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
});})(c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;return ((function (switch__11470__auto__,c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function() {
var state_machine__11471__auto__ = null;
var state_machine__11471__auto____0 = (function (){var statearr_16327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16327[(0)] = state_machine__11471__auto__);
(statearr_16327[(1)] = (1));
return statearr_16327;
});
var state_machine__11471__auto____1 = (function (state_16312){while(true){
var ret_value__11472__auto__ = (function (){try{while(true){
var result__11473__auto__ = switch__11470__auto__.call(null,state_16312);if(cljs.core.keyword_identical_QMARK_.call(null,result__11473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11473__auto__;
}
break;
}
}catch (e16328){if((e16328 instanceof Object))
{var ex__11474__auto__ = e16328;var statearr_16329_16345 = state_16312;(statearr_16329_16345[(5)] = ex__11474__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11472__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16346 = state_16312;
state_16312 = G__16346;
continue;
}
} else
{return ret_value__11472__auto__;
}
break;
}
});
state_machine__11471__auto__ = function(state_16312){
switch(arguments.length){
case 0:
return state_machine__11471__auto____0.call(this);
case 1:
return state_machine__11471__auto____1.call(this,state_16312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11471__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11471__auto____0;
state_machine__11471__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11471__auto____1;
return state_machine__11471__auto__;
})()
;})(switch__11470__auto__,c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
})();var state__11487__auto__ = (function (){var statearr_16330 = f__11486__auto__.call(null);(statearr_16330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11485__auto__);
return statearr_16330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11487__auto__);
});})(c__11485__auto__,in$,out,___$1,validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
);
return c__11485__auto__;
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t16285.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t16285.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_16287){var self__ = this;
var _16287__$1 = this;return self__.meta16286;
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.t16285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function (_16287,meta16286__$1){var self__ = this;
var _16287__$1 = this;return (new poker_site.hand_result.t16285(self__.validate__5346__auto__,self__.G__16238,self__.owner,self__.data,self__.hand_result,self__.output_checker16236,self__.input_schema16234,self__.output_schema16233,self__.input_checker16235,self__.ufv__,self__.G__16237,meta16286__$1));
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
poker_site.hand_result.__GT_t16285 = ((function (validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335){
return (function __GT_t16285(validate__5346__auto____$1,G__16238__$1,owner__$1,data__$1,hand_result__$1,output_checker16236__$1,input_schema16234__$1,output_schema16233__$1,input_checker16235__$1,ufv____$1,G__16237__$1,meta16286){return (new poker_site.hand_result.t16285(validate__5346__auto____$1,G__16238__$1,owner__$1,data__$1,hand_result__$1,output_checker16236__$1,input_schema16234__$1,output_schema16233__$1,input_checker16235__$1,ufv____$1,G__16237__$1,meta16286));
});})(validate__5346__auto__,ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
}
return (new poker_site.hand_result.t16285(validate__5346__auto__,G__16238,owner,data,hand_result,output_checker16236_16335,input_schema16234_16333,output_schema16233_16332,input_checker16235_16334,ufv___16331,G__16237,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___16347 = output_checker16236_16335.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___16347))
{var error__5348__auto___16348 = temp__4126__auto___16347;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___16348)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16233_16332,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16348], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___16331,output_schema16233_16332,input_schema16234_16333,input_checker16235_16334,output_checker16236_16335))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema16233_16332,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16234_16333], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m16232){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m16232);
});
__GT_hand_result = function(cursor__7114__auto__,m16232){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m16232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map