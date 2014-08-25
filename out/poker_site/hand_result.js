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
poker_site.hand_result.handle_result = (function handle_result(e,id,owner,p__14029){var map__14031 = p__14029;var map__14031__$1 = ((cljs.core.seq_QMARK_.call(null,map__14031))?cljs.core.apply.call(null,cljs.core.hash_map,map__14031):map__14031);var out = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"out","out",-910545517));var text = cljs.core.get.call(null,map__14031__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var value = e.target.value;if(cljs.core.truth_(cljs.core.re_find.call(null,/^[+-]?\d*$/,value)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),value);
if(cljs.core.not_EQ_.call(null,value,""))
{var number_14032 = cljs.reader.read_string.call(null,value);if(typeof number_14032 === 'number')
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,number_14032], null));
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
var ufv___14123 = schema.utils.use_fn_validation;var output_schema14035_14124 = schema.core.Any;var input_schema14036_14125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14037_14126 = schema.core.checker.call(null,input_schema14036_14125);var output_checker14038_14127 = schema.core.checker.call(null,output_schema14035_14124);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function player_result(G__14039,G__14040){var validate__5346__auto__ = ufv___14123.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14128 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14039,G__14040], null);var temp__4126__auto___14129 = input_checker14037_14126.call(null,args__5347__auto___14128);if(cljs.core.truth_(temp__4126__auto___14129))
{var error__5348__auto___14130 = temp__4126__auto___14129;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___14130)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14036_14125,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14128,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14130], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__14039;var owner = G__14040;while(true){
if(typeof poker_site.hand_result.t14082 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t14082 = (function (validate__5346__auto__,output_checker14038,owner,data,player_result,G__14039,output_schema14035,G__14040,ufv__,input_checker14037,input_schema14036,meta14083){
this.validate__5346__auto__ = validate__5346__auto__;
this.output_checker14038 = output_checker14038;
this.owner = owner;
this.data = data;
this.player_result = player_result;
this.G__14039 = G__14039;
this.output_schema14035 = output_schema14035;
this.G__14040 = G__14040;
this.ufv__ = ufv__;
this.input_checker14037 = input_checker14037;
this.input_schema14036 = input_schema14036;
this.meta14083 = meta14083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t14082.cljs$lang$type = true;
poker_site.hand_result.t14082.cljs$lang$ctorStr = "poker-site.hand-result/t14082";
poker_site.hand_result.t14082.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t14082");
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.t14082.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t14082.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (_,state){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (p1__14033_SHARP_){return poker_site.hand_result.handle_result.call(null,p1__14033_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,state);
});})(___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.t14082.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t14082.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (_){var self__ = this;
var ___$1 = this;var in$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865));var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (state_14106){var state_val_14107 = (state_14106[(1)]);if((state_val_14107 === (8)))
{var inst_14099 = (state_14106[(2)]);var state_14106__$1 = state_14106;var statearr_14108_14131 = state_14106__$1;(statearr_14108_14131[(2)] = inst_14099);
(statearr_14108_14131[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14107 === (7)))
{var inst_14101 = (state_14106[(2)]);var state_14106__$1 = (function (){var statearr_14109 = state_14106;(statearr_14109[(7)] = inst_14101);
return statearr_14109;
})();var statearr_14110_14132 = state_14106__$1;(statearr_14110_14132[(2)] = null);
(statearr_14110_14132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14107 === (6)))
{var inst_14088 = (state_14106[(8)]);var state_14106__$1 = state_14106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14106__$1,(8),in$,inst_14088);
} else
{if((state_val_14107 === (5)))
{var inst_14090 = (state_14106[(9)]);var inst_14095 = ((0) - inst_14090);var inst_14096 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_14095);var state_14106__$1 = state_14106;var statearr_14111_14133 = state_14106__$1;(statearr_14111_14133[(2)] = inst_14096);
(statearr_14111_14133[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14107 === (4)))
{var inst_14088 = (state_14106[(8)]);var inst_14088__$1 = (state_14106[(2)]);var inst_14089 = cljs.core.nth.call(null,inst_14088__$1,(0),null);var inst_14090 = cljs.core.nth.call(null,inst_14088__$1,(1),null);var inst_14091 = cljs.core.deref.call(null,self__.data);var inst_14092 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(inst_14091);var inst_14093 = cljs.core.not_EQ_.call(null,inst_14089,inst_14092);var state_14106__$1 = (function (){var statearr_14112 = state_14106;(statearr_14112[(8)] = inst_14088__$1);
(statearr_14112[(9)] = inst_14090);
return statearr_14112;
})();if(inst_14093)
{var statearr_14113_14134 = state_14106__$1;(statearr_14113_14134[(1)] = (5));
} else
{var statearr_14114_14135 = state_14106__$1;(statearr_14114_14135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14107 === (3)))
{var inst_14104 = (state_14106[(2)]);var state_14106__$1 = state_14106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14106__$1,inst_14104);
} else
{if((state_val_14107 === (2)))
{var state_14106__$1 = state_14106;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14106__$1,(4),in$);
} else
{if((state_val_14107 === (1)))
{var state_14106__$1 = state_14106;var statearr_14115_14136 = state_14106__$1;(statearr_14115_14136[(2)] = null);
(statearr_14115_14136[(1)] = (2));
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
});})(c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;return ((function (switch__11457__auto__,c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_14119 = [null,null,null,null,null,null,null,null,null,null];(statearr_14119[(0)] = state_machine__11458__auto__);
(statearr_14119[(1)] = (1));
return statearr_14119;
});
var state_machine__11458__auto____1 = (function (state_14106){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_14106);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e14120){if((e14120 instanceof Object))
{var ex__11461__auto__ = e14120;var statearr_14121_14137 = state_14106;(statearr_14121_14137[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14106);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14138 = state_14106;
state_14106 = G__14138;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_14106){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_14106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
})();var state__11474__auto__ = (function (){var statearr_14122 = f__11473__auto__.call(null);(statearr_14122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_14122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__,in$,___$1,validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
);
return c__11472__auto__;
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.t14082.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t14082.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.t14082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (_14084){var self__ = this;
var _14084__$1 = this;return self__.meta14083;
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.t14082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function (_14084,meta14083__$1){var self__ = this;
var _14084__$1 = this;return (new poker_site.hand_result.t14082(self__.validate__5346__auto__,self__.output_checker14038,self__.owner,self__.data,self__.player_result,self__.G__14039,self__.output_schema14035,self__.G__14040,self__.ufv__,self__.input_checker14037,self__.input_schema14036,meta14083__$1));
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
poker_site.hand_result.__GT_t14082 = ((function (validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127){
return (function __GT_t14082(validate__5346__auto____$1,output_checker14038__$1,owner__$1,data__$1,player_result__$1,G__14039__$1,output_schema14035__$1,G__14040__$1,ufv____$1,input_checker14037__$1,input_schema14036__$1,meta14083){return (new poker_site.hand_result.t14082(validate__5346__auto____$1,output_checker14038__$1,owner__$1,data__$1,player_result__$1,G__14039__$1,output_schema14035__$1,G__14040__$1,ufv____$1,input_checker14037__$1,input_schema14036__$1,meta14083));
});})(validate__5346__auto__,ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
}
return (new poker_site.hand_result.t14082(validate__5346__auto__,output_checker14038_14127,owner,data,player_result,G__14039,output_schema14035_14124,G__14040,ufv___14123,input_checker14037_14126,input_schema14036_14125,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14139 = output_checker14038_14127.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14139))
{var error__5348__auto___14140 = temp__4126__auto___14139;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___14140)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14035_14124,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14140], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14123,output_schema14035_14124,input_schema14036_14125,input_checker14037_14126,output_checker14038_14127))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema14035_14124,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14036_14125], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m14034){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m14034);
});
__GT_player_result = function(cursor__7114__auto__,m14034){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m14034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__14141_SHARP_){return (p1__14141_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__14142_SHARP_){return (p1__14142_SHARP_ + p2bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959),(0)], null));
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear","clear",1877104959),(0)], null));
});
var ufv___14242 = schema.utils.use_fn_validation;var output_schema14144_14243 = schema.core.Any;var input_schema14145_14244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14146_14245 = schema.core.checker.call(null,input_schema14145_14244);var output_checker14147_14246 = schema.core.checker.call(null,output_schema14144_14243);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function hand_result(G__14148,G__14149){var validate__5346__auto__ = ufv___14242.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14148,G__14149], null);var temp__4126__auto___14248 = input_checker14146_14245.call(null,args__5347__auto___14247);if(cljs.core.truth_(temp__4126__auto___14248))
{var error__5348__auto___14249 = temp__4126__auto___14248;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___14249)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14145_14244,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14247,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14249], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__14148;var owner = G__14149;while(true){
if(typeof poker_site.hand_result.t14196 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t14196 = (function (validate__5346__auto__,owner,data,input_schema14145,hand_result,output_checker14147,G__14149,output_schema14144,G__14148,input_checker14146,ufv__,meta14197){
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.data = data;
this.input_schema14145 = input_schema14145;
this.hand_result = hand_result;
this.output_checker14147 = output_checker14147;
this.G__14149 = G__14149;
this.output_schema14144 = output_schema14144;
this.G__14148 = G__14148;
this.input_checker14146 = input_checker14146;
this.ufv__ = ufv__;
this.meta14197 = meta14197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t14196.cljs$lang$type = true;
poker_site.hand_result.t14196.cljs$lang$ctorStr = "poker-site.hand-result/t14196";
poker_site.hand_result.t14196.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t14196");
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t14196.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_,p__14199){var self__ = this;
var map__14200 = p__14199;var map__14200__$1 = ((cljs.core.seq_QMARK_.call(null,map__14200))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);var in$ = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var out = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),out,new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),out,new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__14200,map__14200__$1,in$,out,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,out);
});})(___$1,map__14200,map__14200__$1,in$,out,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t14196.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_){var self__ = this;
var ___$1 = this;var in$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865));var out = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"out","out",-910545517));var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (state_14223){var state_val_14224 = (state_14223[(1)]);if((state_val_14224 === (7)))
{var inst_14204 = (state_14223[(7)]);var inst_14217 = (state_14223[(2)]);var inst_14218 = cljs.core.async.put_BANG_.call(null,out,inst_14204);var state_14223__$1 = (function (){var statearr_14225 = state_14223;(statearr_14225[(8)] = inst_14217);
(statearr_14225[(9)] = inst_14218);
return statearr_14225;
})();var statearr_14226_14250 = state_14223__$1;(statearr_14226_14250[(2)] = null);
(statearr_14226_14250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14224 === (6)))
{var inst_14206 = (state_14223[(10)]);var inst_14213 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),inst_14206);var inst_14214 = ((0) - inst_14206);var inst_14215 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),inst_14214);var state_14223__$1 = (function (){var statearr_14227 = state_14223;(statearr_14227[(11)] = inst_14213);
return statearr_14227;
})();var statearr_14228_14251 = state_14223__$1;(statearr_14228_14251[(2)] = inst_14215);
(statearr_14228_14251[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14224 === (5)))
{var inst_14206 = (state_14223[(10)]);var inst_14209 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),inst_14206);var inst_14210 = ((0) - inst_14206);var inst_14211 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),inst_14210);var state_14223__$1 = (function (){var statearr_14229 = state_14223;(statearr_14229[(12)] = inst_14209);
return statearr_14229;
})();var statearr_14230_14252 = state_14223__$1;(statearr_14230_14252[(2)] = inst_14211);
(statearr_14230_14252[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14224 === (4)))
{var inst_14204 = (state_14223[(7)]);var inst_14204__$1 = (state_14223[(2)]);var inst_14205 = cljs.core.nth.call(null,inst_14204__$1,(0),null);var inst_14206 = cljs.core.nth.call(null,inst_14204__$1,(1),null);var inst_14207 = cljs.core._EQ_.call(null,inst_14205,(1));var state_14223__$1 = (function (){var statearr_14231 = state_14223;(statearr_14231[(10)] = inst_14206);
(statearr_14231[(7)] = inst_14204__$1);
return statearr_14231;
})();if(inst_14207)
{var statearr_14232_14253 = state_14223__$1;(statearr_14232_14253[(1)] = (5));
} else
{var statearr_14233_14254 = state_14223__$1;(statearr_14233_14254[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14224 === (3)))
{var inst_14221 = (state_14223[(2)]);var state_14223__$1 = state_14223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14223__$1,inst_14221);
} else
{if((state_val_14224 === (2)))
{var state_14223__$1 = state_14223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14223__$1,(4),in$);
} else
{if((state_val_14224 === (1)))
{var state_14223__$1 = state_14223;var statearr_14234_14255 = state_14223__$1;(statearr_14234_14255[(2)] = null);
(statearr_14234_14255[(1)] = (2));
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
});})(c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;return ((function (switch__11457__auto__,c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_14238 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14238[(0)] = state_machine__11458__auto__);
(statearr_14238[(1)] = (1));
return statearr_14238;
});
var state_machine__11458__auto____1 = (function (state_14223){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_14223);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e14239){if((e14239 instanceof Object))
{var ex__11461__auto__ = e14239;var statearr_14240_14256 = state_14223;(statearr_14240_14256[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14223);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14257 = state_14223;
state_14223 = G__14257;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_14223){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_14223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
})();var state__11474__auto__ = (function (){var statearr_14241 = f__11473__auto__.call(null);(statearr_14241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_14241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__,in$,out,___$1,validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
);
return c__11472__auto__;
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t14196.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t14196.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_14198){var self__ = this;
var _14198__$1 = this;return self__.meta14197;
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.t14196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function (_14198,meta14197__$1){var self__ = this;
var _14198__$1 = this;return (new poker_site.hand_result.t14196(self__.validate__5346__auto__,self__.owner,self__.data,self__.input_schema14145,self__.hand_result,self__.output_checker14147,self__.G__14149,self__.output_schema14144,self__.G__14148,self__.input_checker14146,self__.ufv__,meta14197__$1));
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
poker_site.hand_result.__GT_t14196 = ((function (validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246){
return (function __GT_t14196(validate__5346__auto____$1,owner__$1,data__$1,input_schema14145__$1,hand_result__$1,output_checker14147__$1,G__14149__$1,output_schema14144__$1,G__14148__$1,input_checker14146__$1,ufv____$1,meta14197){return (new poker_site.hand_result.t14196(validate__5346__auto____$1,owner__$1,data__$1,input_schema14145__$1,hand_result__$1,output_checker14147__$1,G__14149__$1,output_schema14144__$1,G__14148__$1,input_checker14146__$1,ufv____$1,meta14197));
});})(validate__5346__auto__,ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
}
return (new poker_site.hand_result.t14196(validate__5346__auto__,owner,data,input_schema14145_14244,hand_result,output_checker14147_14246,G__14149,output_schema14144_14243,G__14148,input_checker14146_14245,ufv___14242,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14258 = output_checker14147_14246.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14258))
{var error__5348__auto___14259 = temp__4126__auto___14258;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___14259)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14144_14243,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14259], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14242,output_schema14144_14243,input_schema14145_14244,input_checker14146_14245,output_checker14147_14246))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema14144_14243,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14145_14244], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m14143){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m14143);
});
__GT_hand_result = function(cursor__7114__auto__,m14143){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m14143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map