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
poker_site.hand_result.handle_input = (function handle_input(event,out,id,owner,text){var value = event.target.value;if(cljs.core.truth_(cljs.core.re_find.call(null,/^[+-]?\d*\.?5?$/,value)))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,value], null));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),text);
}
});
var ufv___25097 = schema.utils.use_fn_validation;var output_schema24989_25098 = schema.core.Any;var input_schema24990_25099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker24991_25100 = schema.core.checker.call(null,input_schema24990_25099);var output_checker24992_25101 = schema.core.checker.call(null,output_schema24989_25098);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function player_result(G__24993,G__24994){var validate__5346__auto__ = ufv___25097.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___25102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__24993,G__24994], null);var temp__4126__auto___25103 = input_checker24991_25100.call(null,args__5347__auto___25102);if(cljs.core.truth_(temp__4126__auto___25103))
{var error__5348__auto___25104 = temp__4126__auto___25103;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___25104)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema24990_25099,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___25102,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___25104], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__24993;var owner = G__24994;while(true){
if(typeof poker_site.hand_result.t25046 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t25046 = (function (input_checker24991,validate__5346__auto__,owner,input_schema24990,data,G__24994,player_result,output_checker24992,output_schema24989,G__24993,ufv__,meta25047){
this.input_checker24991 = input_checker24991;
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.input_schema24990 = input_schema24990;
this.data = data;
this.G__24994 = G__24994;
this.player_result = player_result;
this.output_checker24992 = output_checker24992;
this.output_schema24989 = output_schema24989;
this.G__24993 = G__24993;
this.ufv__ = ufv__;
this.meta25047 = meta25047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t25046.cljs$lang$type = true;
poker_site.hand_result.t25046.cljs$lang$ctorStr = "poker-site.hand-result/t25046";
poker_site.hand_result.t25046.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t25046");
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.t25046.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t25046.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (_,p__25049){var self__ = this;
var map__25050 = p__25049;var map__25050__$1 = ((cljs.core.seq_QMARK_.call(null,map__25050))?cljs.core.apply.call(null,cljs.core.hash_map,map__25050):map__25050);var text = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var out = cljs.core.get.call(null,map__25050__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,map__25050,map__25050__$1,text,out,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (p1__24987_SHARP_){return poker_site.hand_result.handle_input.call(null,p1__24987_SHARP_,out,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,text);
});})(___$1,map__25050,map__25050__$1,text,out,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
, "value": text, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.t25046.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t25046.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (_){var self__ = this;
var ___$1 = this;var in_chan = cljs.core.async.chan.call(null);var clear_chan = cljs.core.async.chan.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id1","id1",220529770),in_chan);
} else
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id2","id2",1234345165),in_chan);
}
cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"clear","clear",1877104959),clear_chan);
var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (state_25076){var state_val_25077 = (state_25076[(1)]);if((state_val_25077 === (7)))
{var inst_25071 = (state_25076[(2)]);var state_25076__$1 = (function (){var statearr_25078 = state_25076;(statearr_25078[(7)] = inst_25071);
return statearr_25078;
})();var statearr_25079_25105 = state_25076__$1;(statearr_25079_25105[(2)] = null);
(statearr_25079_25105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (1)))
{var state_25076__$1 = state_25076;var statearr_25080_25106 = state_25076__$1;(statearr_25080_25106[(2)] = null);
(statearr_25080_25106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (4)))
{var inst_25058 = (state_25076[(8)]);var inst_25056 = (state_25076[(2)]);var inst_25057 = cljs.core.nth.call(null,inst_25056,(0),null);var inst_25058__$1 = cljs.core.nth.call(null,inst_25056,(1),null);var inst_25059 = cljs.core._EQ_.call(null,inst_25058__$1,in_chan);var state_25076__$1 = (function (){var statearr_25081 = state_25076;(statearr_25081[(9)] = inst_25057);
(statearr_25081[(8)] = inst_25058__$1);
return statearr_25081;
})();if(inst_25059)
{var statearr_25082_25107 = state_25076__$1;(statearr_25082_25107[(1)] = (5));
} else
{var statearr_25083_25108 = state_25076__$1;(statearr_25083_25108[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (6)))
{var inst_25058 = (state_25076[(8)]);var inst_25064 = cljs.core._EQ_.call(null,inst_25058,clear_chan);var state_25076__$1 = state_25076;if(inst_25064)
{var statearr_25084_25109 = state_25076__$1;(statearr_25084_25109[(1)] = (8));
} else
{var statearr_25085_25110 = state_25076__$1;(statearr_25085_25110[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (3)))
{var inst_25074 = (state_25076[(2)]);var state_25076__$1 = state_25076;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25076__$1,inst_25074);
} else
{if((state_val_25077 === (2)))
{var inst_25053 = [in_chan,clear_chan];var inst_25054 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25053,null));var state_25076__$1 = state_25076;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25076__$1,(4),inst_25054);
} else
{if((state_val_25077 === (9)))
{var state_25076__$1 = state_25076;var statearr_25086_25111 = state_25076__$1;(statearr_25086_25111[(2)] = null);
(statearr_25086_25111[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (5)))
{var inst_25057 = (state_25076[(9)]);var inst_25061 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_25057);var inst_25062 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_25061);var state_25076__$1 = state_25076;var statearr_25087_25112 = state_25076__$1;(statearr_25087_25112[(2)] = inst_25062);
(statearr_25087_25112[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (10)))
{var inst_25069 = (state_25076[(2)]);var state_25076__$1 = state_25076;var statearr_25088_25113 = state_25076__$1;(statearr_25088_25113[(2)] = inst_25069);
(statearr_25088_25113[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25077 === (8)))
{var inst_25066 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),"0");var state_25076__$1 = state_25076;var statearr_25089_25114 = state_25076__$1;(statearr_25089_25114[(2)] = inst_25066);
(statearr_25089_25114[(1)] = (10));
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
});})(c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;return ((function (switch__11437__auto__,c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function() {
var state_machine__11438__auto__ = null;
var state_machine__11438__auto____0 = (function (){var statearr_25093 = [null,null,null,null,null,null,null,null,null,null];(statearr_25093[(0)] = state_machine__11438__auto__);
(statearr_25093[(1)] = (1));
return statearr_25093;
});
var state_machine__11438__auto____1 = (function (state_25076){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_25076);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object))
{var ex__11441__auto__ = e25094;var statearr_25095_25115 = state_25076;(statearr_25095_25115[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25076);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25116 = state_25076;
state_25076 = G__25116;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_25076){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_25076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
})();var state__11454__auto__ = (function (){var statearr_25096 = f__11453__auto__.call(null);(statearr_25096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_25096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in_chan,clear_chan,___$1,validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
);
return c__11452__auto__;
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.t25046.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t25046.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.t25046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (_25048){var self__ = this;
var _25048__$1 = this;return self__.meta25047;
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.t25046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function (_25048,meta25047__$1){var self__ = this;
var _25048__$1 = this;return (new poker_site.hand_result.t25046(self__.input_checker24991,self__.validate__5346__auto__,self__.owner,self__.input_schema24990,self__.data,self__.G__24994,self__.player_result,self__.output_checker24992,self__.output_schema24989,self__.G__24993,self__.ufv__,meta25047__$1));
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
poker_site.hand_result.__GT_t25046 = ((function (validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101){
return (function __GT_t25046(input_checker24991__$1,validate__5346__auto____$1,owner__$1,input_schema24990__$1,data__$1,G__24994__$1,player_result__$1,output_checker24992__$1,output_schema24989__$1,G__24993__$1,ufv____$1,meta25047){return (new poker_site.hand_result.t25046(input_checker24991__$1,validate__5346__auto____$1,owner__$1,input_schema24990__$1,data__$1,G__24994__$1,player_result__$1,output_checker24992__$1,output_schema24989__$1,G__24993__$1,ufv____$1,meta25047));
});})(validate__5346__auto__,ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
}
return (new poker_site.hand_result.t25046(input_checker24991_25100,validate__5346__auto__,owner,input_schema24990_25099,data,G__24994,player_result,output_checker24992_25101,output_schema24989_25098,G__24993,ufv___25097,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___25117 = output_checker24992_25101.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___25117))
{var error__5348__auto___25118 = temp__4126__auto___25117;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___25118)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema24989_25098,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___25118], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___25097,output_schema24989_25098,input_schema24990_25099,input_checker24991_25100,output_checker24992_25101))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema24989_25098,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema24990_25099], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m24988){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m24988);
});
__GT_player_result = function(cursor__7114__auto__,m24988){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m24988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__25119_SHARP_){return (p1__25119_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__25120_SHARP_){return (p1__25120_SHARP_ + p2bb);
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
{var x__3856__auto__ = number;var y__3857__auto__ = stack;return ((x__3856__auto__ < y__3857__auto__) ? x__3856__auto__ : y__3857__auto__);
} else
{var x__3849__auto__ = number;var y__3850__auto__ = ((0) - stack);return ((x__3849__auto__ > y__3850__auto__) ? x__3849__auto__ : y__3850__auto__);
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.reader.read_string.call(null,number);
} else
{return null;
}
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
poker_site.hand_result.handle_message = (function handle_message(data,owner){var in$ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"in","in",-1531184865));var out = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"outC","outC",-1706649413));var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in$,out){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in$,out){
return (function (state_25167){var state_val_25168 = (state_25167[(1)]);if((state_val_25168 === (4)))
{var inst_25153 = (state_25167[(2)]);var inst_25154 = cljs.core.nth.call(null,inst_25153,(0),null);var inst_25155 = cljs.core.nth.call(null,inst_25153,(1),null);var inst_25156 = poker_site.hand_result.parse_number.call(null,inst_25155);var inst_25157 = poker_site.hand_result.send_to_self_QMARK_.call(null,inst_25155);var inst_25158 = cljs.core.deref.call(null,data);var inst_25159 = poker_site.hand_result.smaller_stack.call(null,inst_25158);var inst_25160 = poker_site.hand_result.validate_bet.call(null,inst_25156,inst_25159);var inst_25161 = poker_site.hand_result.send_message.call(null,out,inst_25154,inst_25160,inst_25157);var inst_25162 = poker_site.hand_result.update_stacks.call(null,owner,inst_25154,inst_25160);var state_25167__$1 = (function (){var statearr_25169 = state_25167;(statearr_25169[(7)] = inst_25162);
(statearr_25169[(8)] = inst_25161);
return statearr_25169;
})();var statearr_25170_25179 = state_25167__$1;(statearr_25170_25179[(2)] = null);
(statearr_25170_25179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25168 === (3)))
{var inst_25165 = (state_25167[(2)]);var state_25167__$1 = state_25167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25167__$1,inst_25165);
} else
{if((state_val_25168 === (2)))
{var state_25167__$1 = state_25167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25167__$1,(4),in$);
} else
{if((state_val_25168 === (1)))
{var state_25167__$1 = state_25167;var statearr_25171_25180 = state_25167__$1;(statearr_25171_25180[(2)] = null);
(statearr_25171_25180[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__11452__auto__,in$,out))
;return ((function (switch__11437__auto__,c__11452__auto__,in$,out){
return (function() {
var state_machine__11438__auto__ = null;
var state_machine__11438__auto____0 = (function (){var statearr_25175 = [null,null,null,null,null,null,null,null,null];(statearr_25175[(0)] = state_machine__11438__auto__);
(statearr_25175[(1)] = (1));
return statearr_25175;
});
var state_machine__11438__auto____1 = (function (state_25167){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_25167);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e25176){if((e25176 instanceof Object))
{var ex__11441__auto__ = e25176;var statearr_25177_25181 = state_25167;(statearr_25177_25181[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25182 = state_25167;
state_25167 = G__25182;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_25167){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_25167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in$,out))
})();var state__11454__auto__ = (function (){var statearr_25178 = f__11453__auto__.call(null);(statearr_25178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_25178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in$,out))
);
return c__11452__auto__;
});
var ufv___25201 = schema.utils.use_fn_validation;var output_schema25185_25202 = schema.core.Any;var input_schema25186_25203 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker25187_25204 = schema.core.checker.call(null,input_schema25186_25203);var output_checker25188_25205 = schema.core.checker.call(null,output_schema25185_25202);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function hand_result(G__25189,G__25190){var validate__5346__auto__ = ufv___25201.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___25206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25189,G__25190], null);var temp__4126__auto___25207 = input_checker25187_25204.call(null,args__5347__auto___25206);if(cljs.core.truth_(temp__4126__auto___25207))
{var error__5348__auto___25208 = temp__4126__auto___25207;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___25208)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema25186_25203,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___25206,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___25208], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__25189;var owner = G__25190;while(true){
if(typeof poker_site.hand_result.t25196 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t25196 = (function (validate__5346__auto__,input_checker25187,G__25190,input_schema25186,owner,data,G__25189,hand_result,output_checker25188,output_schema25185,ufv__,meta25197){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_checker25187 = input_checker25187;
this.G__25190 = G__25190;
this.input_schema25186 = input_schema25186;
this.owner = owner;
this.data = data;
this.G__25189 = G__25189;
this.hand_result = hand_result;
this.output_checker25188 = output_checker25188;
this.output_schema25185 = output_schema25185;
this.ufv__ = ufv__;
this.meta25197 = meta25197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t25196.cljs$lang$type = true;
poker_site.hand_result.t25196.cljs$lang$ctorStr = "poker-site.hand-result/t25196";
poker_site.hand_result.t25196.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t25196");
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t25196.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_,p__25199){var self__ = this;
var map__25200 = p__25199;var map__25200__$1 = ((cljs.core.seq_QMARK_.call(null,map__25200))?cljs.core.apply.call(null,cljs.core.hash_map,map__25200):map__25200);var in$ = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var outP = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"outP","outP",481288973));var outC = cljs.core.get.call(null,map__25200__$1,new cljs.core.Keyword(null,"outC","outC",-1706649413));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__25200,map__25200__$1,in$,outP,outC,validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,outC);
});})(___$1,map__25200,map__25200__$1,in$,outP,outC,validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t25196.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_){var self__ = this;
var ___$1 = this;return poker_site.hand_result.handle_message.call(null,self__.data,self__.owner);
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t25196.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_){var self__ = this;
var ___$1 = this;var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outP","outP",481288973),cljs.core.async.pub.call(null,c,((function (c,___$1,validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (p1__25183_SHARP_){return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__25183_SHARP_);
});})(c,___$1,validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
),new cljs.core.Keyword(null,"outC","outC",-1706649413),c,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t25196.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_25198){var self__ = this;
var _25198__$1 = this;return self__.meta25197;
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.t25196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function (_25198,meta25197__$1){var self__ = this;
var _25198__$1 = this;return (new poker_site.hand_result.t25196(self__.validate__5346__auto__,self__.input_checker25187,self__.G__25190,self__.input_schema25186,self__.owner,self__.data,self__.G__25189,self__.hand_result,self__.output_checker25188,self__.output_schema25185,self__.ufv__,meta25197__$1));
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
poker_site.hand_result.__GT_t25196 = ((function (validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205){
return (function __GT_t25196(validate__5346__auto____$1,input_checker25187__$1,G__25190__$1,input_schema25186__$1,owner__$1,data__$1,G__25189__$1,hand_result__$1,output_checker25188__$1,output_schema25185__$1,ufv____$1,meta25197){return (new poker_site.hand_result.t25196(validate__5346__auto____$1,input_checker25187__$1,G__25190__$1,input_schema25186__$1,owner__$1,data__$1,G__25189__$1,hand_result__$1,output_checker25188__$1,output_schema25185__$1,ufv____$1,meta25197));
});})(validate__5346__auto__,ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
}
return (new poker_site.hand_result.t25196(validate__5346__auto__,input_checker25187_25204,G__25190,input_schema25186_25203,owner,data,G__25189,hand_result,output_checker25188_25205,output_schema25185_25202,ufv___25201,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___25209 = output_checker25188_25205.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___25209))
{var error__5348__auto___25210 = temp__4126__auto___25209;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___25210)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema25185_25202,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___25210], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___25201,output_schema25185_25202,input_schema25186_25203,input_checker25187_25204,output_checker25188_25205))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema25185_25202,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25186_25203], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m25184){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m25184);
});
__GT_hand_result = function(cursor__7114__auto__,m25184){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m25184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map