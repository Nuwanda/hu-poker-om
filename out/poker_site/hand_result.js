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
var ufv___23257 = schema.utils.use_fn_validation;var output_schema23189_23258 = schema.core.Any;var input_schema23190_23259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker23191_23260 = schema.core.checker.call(null,input_schema23190_23259);var output_checker23192_23261 = schema.core.checker.call(null,output_schema23189_23258);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function player_result(G__23193,G__23194){var validate__5346__auto__ = ufv___23257.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___23262 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23193,G__23194], null);var temp__4126__auto___23263 = input_checker23191_23260.call(null,args__5347__auto___23262);if(cljs.core.truth_(temp__4126__auto___23263))
{var error__5348__auto___23264 = temp__4126__auto___23263;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___23264)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23190_23259,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___23262,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___23264], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__23193;var owner = G__23194;while(true){
if(typeof poker_site.hand_result.t23226 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t23226 = (function (input_checker23191,validate__5346__auto__,owner,G__23193,data,output_schema23189,input_schema23190,player_result,output_checker23192,G__23194,ufv__,meta23227){
this.input_checker23191 = input_checker23191;
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.G__23193 = G__23193;
this.data = data;
this.output_schema23189 = output_schema23189;
this.input_schema23190 = input_schema23190;
this.player_result = player_result;
this.output_checker23192 = output_checker23192;
this.G__23194 = G__23194;
this.ufv__ = ufv__;
this.meta23227 = meta23227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t23226.cljs$lang$type = true;
poker_site.hand_result.t23226.cljs$lang$ctorStr = "poker-site.hand-result/t23226";
poker_site.hand_result.t23226.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t23226");
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.t23226.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t23226.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (_,p__23229){var self__ = this;
var map__23230 = p__23229;var map__23230__$1 = ((cljs.core.seq_QMARK_.call(null,map__23230))?cljs.core.apply.call(null,cljs.core.hash_map,map__23230):map__23230);var text = cljs.core.get.call(null,map__23230__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var out = cljs.core.get.call(null,map__23230__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,map__23230,map__23230__$1,text,out,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (p1__23187_SHARP_){return poker_site.hand_result.handle_input.call(null,p1__23187_SHARP_,out,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,text);
});})(___$1,map__23230,map__23230__$1,text,out,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
, "value": text, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.t23226.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t23226.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (_){var self__ = this;
var ___$1 = this;var in_chan = cljs.core.async.chan.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id1","id1",220529770),in_chan);
} else
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id2","id2",1234345165),in_chan);
}
var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (state_23243){var state_val_23244 = (state_23243[(1)]);if((state_val_23244 === (5)))
{var inst_23238 = (state_23243[(2)]);var inst_23233 = inst_23238;var state_23243__$1 = (function (){var statearr_23245 = state_23243;(statearr_23245[(7)] = inst_23233);
return statearr_23245;
})();var statearr_23246_23265 = state_23243__$1;(statearr_23246_23265[(2)] = null);
(statearr_23246_23265[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23244 === (4)))
{var inst_23241 = (state_23243[(2)]);var state_23243__$1 = state_23243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23243__$1,inst_23241);
} else
{if((state_val_23244 === (3)))
{var inst_23233 = (state_23243[(7)]);var inst_23235 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_23233);var inst_23236 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_23235);var state_23243__$1 = (function (){var statearr_23247 = state_23243;(statearr_23247[(8)] = inst_23236);
return statearr_23247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23243__$1,(5),in_chan);
} else
{if((state_val_23244 === (2)))
{var inst_23232 = (state_23243[(2)]);var inst_23233 = inst_23232;var state_23243__$1 = (function (){var statearr_23248 = state_23243;(statearr_23248[(7)] = inst_23233);
return statearr_23248;
})();var statearr_23249_23266 = state_23243__$1;(statearr_23249_23266[(2)] = null);
(statearr_23249_23266[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23244 === (1)))
{var state_23243__$1 = state_23243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23243__$1,(2),in_chan);
} else
{return null;
}
}
}
}
}
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;return ((function (switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function() {
var state_machine__11438__auto__ = null;
var state_machine__11438__auto____0 = (function (){var statearr_23253 = [null,null,null,null,null,null,null,null,null];(statearr_23253[(0)] = state_machine__11438__auto__);
(statearr_23253[(1)] = (1));
return statearr_23253;
});
var state_machine__11438__auto____1 = (function (state_23243){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_23243);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e23254){if((e23254 instanceof Object))
{var ex__11441__auto__ = e23254;var statearr_23255_23267 = state_23243;(statearr_23255_23267[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23268 = state_23243;
state_23243 = G__23268;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_23243){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_23243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
})();var state__11454__auto__ = (function (){var statearr_23256 = f__11453__auto__.call(null);(statearr_23256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_23256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
);
return c__11452__auto__;
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.t23226.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t23226.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.t23226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (_23228){var self__ = this;
var _23228__$1 = this;return self__.meta23227;
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.t23226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function (_23228,meta23227__$1){var self__ = this;
var _23228__$1 = this;return (new poker_site.hand_result.t23226(self__.input_checker23191,self__.validate__5346__auto__,self__.owner,self__.G__23193,self__.data,self__.output_schema23189,self__.input_schema23190,self__.player_result,self__.output_checker23192,self__.G__23194,self__.ufv__,meta23227__$1));
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
poker_site.hand_result.__GT_t23226 = ((function (validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261){
return (function __GT_t23226(input_checker23191__$1,validate__5346__auto____$1,owner__$1,G__23193__$1,data__$1,output_schema23189__$1,input_schema23190__$1,player_result__$1,output_checker23192__$1,G__23194__$1,ufv____$1,meta23227){return (new poker_site.hand_result.t23226(input_checker23191__$1,validate__5346__auto____$1,owner__$1,G__23193__$1,data__$1,output_schema23189__$1,input_schema23190__$1,player_result__$1,output_checker23192__$1,G__23194__$1,ufv____$1,meta23227));
});})(validate__5346__auto__,ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
}
return (new poker_site.hand_result.t23226(input_checker23191_23260,validate__5346__auto__,owner,G__23193,data,output_schema23189_23258,input_schema23190_23259,player_result,output_checker23192_23261,G__23194,ufv___23257,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___23269 = output_checker23192_23261.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___23269))
{var error__5348__auto___23270 = temp__4126__auto___23269;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___23270)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23189_23258,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___23270], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___23257,output_schema23189_23258,input_schema23190_23259,input_checker23191_23260,output_checker23192_23261))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema23189_23258,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23190_23259], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m23188){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m23188);
});
__GT_player_result = function(cursor__7114__auto__,m23188){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m23188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__23271_SHARP_){return (p1__23271_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__23272_SHARP_){return (p1__23272_SHARP_ + p2bb);
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
return (function (state_23319){var state_val_23320 = (state_23319[(1)]);if((state_val_23320 === (4)))
{var inst_23305 = (state_23319[(2)]);var inst_23306 = cljs.core.nth.call(null,inst_23305,(0),null);var inst_23307 = cljs.core.nth.call(null,inst_23305,(1),null);var inst_23308 = poker_site.hand_result.parse_number.call(null,inst_23307);var inst_23309 = poker_site.hand_result.send_to_self_QMARK_.call(null,inst_23307);var inst_23310 = cljs.core.deref.call(null,data);var inst_23311 = poker_site.hand_result.smaller_stack.call(null,inst_23310);var inst_23312 = poker_site.hand_result.validate_bet.call(null,inst_23308,inst_23311);var inst_23313 = poker_site.hand_result.send_message.call(null,out,inst_23306,inst_23312,inst_23309);var inst_23314 = poker_site.hand_result.update_stacks.call(null,owner,inst_23306,inst_23312);var state_23319__$1 = (function (){var statearr_23321 = state_23319;(statearr_23321[(7)] = inst_23313);
(statearr_23321[(8)] = inst_23314);
return statearr_23321;
})();var statearr_23322_23331 = state_23319__$1;(statearr_23322_23331[(2)] = null);
(statearr_23322_23331[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23320 === (3)))
{var inst_23317 = (state_23319[(2)]);var state_23319__$1 = state_23319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else
{if((state_val_23320 === (2)))
{var state_23319__$1 = state_23319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(4),in$);
} else
{if((state_val_23320 === (1)))
{var state_23319__$1 = state_23319;var statearr_23323_23332 = state_23319__$1;(statearr_23323_23332[(2)] = null);
(statearr_23323_23332[(1)] = (2));
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
var state_machine__11438__auto____0 = (function (){var statearr_23327 = [null,null,null,null,null,null,null,null,null];(statearr_23327[(0)] = state_machine__11438__auto__);
(statearr_23327[(1)] = (1));
return statearr_23327;
});
var state_machine__11438__auto____1 = (function (state_23319){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_23319);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e23328){if((e23328 instanceof Object))
{var ex__11441__auto__ = e23328;var statearr_23329_23333 = state_23319;(statearr_23329_23333[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23334 = state_23319;
state_23319 = G__23334;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in$,out))
})();var state__11454__auto__ = (function (){var statearr_23330 = f__11453__auto__.call(null);(statearr_23330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_23330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in$,out))
);
return c__11452__auto__;
});
var ufv___23353 = schema.utils.use_fn_validation;var output_schema23337_23354 = schema.core.Any;var input_schema23338_23355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker23339_23356 = schema.core.checker.call(null,input_schema23338_23355);var output_checker23340_23357 = schema.core.checker.call(null,output_schema23337_23354);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function hand_result(G__23341,G__23342){var validate__5346__auto__ = ufv___23353.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___23358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23341,G__23342], null);var temp__4126__auto___23359 = input_checker23339_23356.call(null,args__5347__auto___23358);if(cljs.core.truth_(temp__4126__auto___23359))
{var error__5348__auto___23360 = temp__4126__auto___23359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___23360)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23338_23355,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___23358,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___23360], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__23341;var owner = G__23342;while(true){
if(typeof poker_site.hand_result.t23348 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t23348 = (function (validate__5346__auto__,G__23342,owner,data,output_schema23337,input_schema23338,hand_result,output_checker23340,ufv__,G__23341,input_checker23339,meta23349){
this.validate__5346__auto__ = validate__5346__auto__;
this.G__23342 = G__23342;
this.owner = owner;
this.data = data;
this.output_schema23337 = output_schema23337;
this.input_schema23338 = input_schema23338;
this.hand_result = hand_result;
this.output_checker23340 = output_checker23340;
this.ufv__ = ufv__;
this.G__23341 = G__23341;
this.input_checker23339 = input_checker23339;
this.meta23349 = meta23349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t23348.cljs$lang$type = true;
poker_site.hand_result.t23348.cljs$lang$ctorStr = "poker-site.hand-result/t23348";
poker_site.hand_result.t23348.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t23348");
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t23348.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_,p__23351){var self__ = this;
var map__23352 = p__23351;var map__23352__$1 = ((cljs.core.seq_QMARK_.call(null,map__23352))?cljs.core.apply.call(null,cljs.core.hash_map,map__23352):map__23352);var in$ = cljs.core.get.call(null,map__23352__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var outP = cljs.core.get.call(null,map__23352__$1,new cljs.core.Keyword(null,"outP","outP",481288973));var outC = cljs.core.get.call(null,map__23352__$1,new cljs.core.Keyword(null,"outC","outC",-1706649413));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__23352,map__23352__$1,in$,outP,outC,validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,outC);
});})(___$1,map__23352,map__23352__$1,in$,outP,outC,validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t23348.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_){var self__ = this;
var ___$1 = this;return poker_site.hand_result.handle_message.call(null,self__.data,self__.owner);
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t23348.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_){var self__ = this;
var ___$1 = this;var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outP","outP",481288973),cljs.core.async.pub.call(null,c,((function (c,___$1,validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (p1__23335_SHARP_){return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__23335_SHARP_);
});})(c,___$1,validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
),new cljs.core.Keyword(null,"outC","outC",-1706649413),c,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t23348.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_23350){var self__ = this;
var _23350__$1 = this;return self__.meta23349;
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.t23348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function (_23350,meta23349__$1){var self__ = this;
var _23350__$1 = this;return (new poker_site.hand_result.t23348(self__.validate__5346__auto__,self__.G__23342,self__.owner,self__.data,self__.output_schema23337,self__.input_schema23338,self__.hand_result,self__.output_checker23340,self__.ufv__,self__.G__23341,self__.input_checker23339,meta23349__$1));
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
poker_site.hand_result.__GT_t23348 = ((function (validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357){
return (function __GT_t23348(validate__5346__auto____$1,G__23342__$1,owner__$1,data__$1,output_schema23337__$1,input_schema23338__$1,hand_result__$1,output_checker23340__$1,ufv____$1,G__23341__$1,input_checker23339__$1,meta23349){return (new poker_site.hand_result.t23348(validate__5346__auto____$1,G__23342__$1,owner__$1,data__$1,output_schema23337__$1,input_schema23338__$1,hand_result__$1,output_checker23340__$1,ufv____$1,G__23341__$1,input_checker23339__$1,meta23349));
});})(validate__5346__auto__,ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
}
return (new poker_site.hand_result.t23348(validate__5346__auto__,G__23342,owner,data,output_schema23337_23354,input_schema23338_23355,hand_result,output_checker23340_23357,ufv___23353,G__23341,input_checker23339_23356,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___23361 = output_checker23340_23357.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___23361))
{var error__5348__auto___23362 = temp__4126__auto___23361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___23362)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23337_23354,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___23362], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___23353,output_schema23337_23354,input_schema23338_23355,input_checker23339_23356,output_checker23340_23357))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema23337_23354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23338_23355], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m23336){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m23336);
});
__GT_hand_result = function(cursor__7114__auto__,m23336){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m23336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map