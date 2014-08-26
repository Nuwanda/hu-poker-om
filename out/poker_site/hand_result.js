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
var ufv___22538 = schema.utils.use_fn_validation;var output_schema22470_22539 = schema.core.Any;var input_schema22471_22540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22472_22541 = schema.core.checker.call(null,input_schema22471_22540);var output_checker22473_22542 = schema.core.checker.call(null,output_schema22470_22539);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function player_result(G__22474,G__22475){var validate__5346__auto__ = ufv___22538.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___22543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22474,G__22475], null);var temp__4126__auto___22544 = input_checker22472_22541.call(null,args__5347__auto___22543);if(cljs.core.truth_(temp__4126__auto___22544))
{var error__5348__auto___22545 = temp__4126__auto___22544;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___22545)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22471_22540,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___22543,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22545], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__22474;var owner = G__22475;while(true){
if(typeof poker_site.hand_result.t22507 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t22507 = (function (validate__5346__auto__,input_schema22471,owner,data,input_checker22472,output_schema22470,player_result,output_checker22473,G__22475,G__22474,ufv__,meta22508){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_schema22471 = input_schema22471;
this.owner = owner;
this.data = data;
this.input_checker22472 = input_checker22472;
this.output_schema22470 = output_schema22470;
this.player_result = player_result;
this.output_checker22473 = output_checker22473;
this.G__22475 = G__22475;
this.G__22474 = G__22474;
this.ufv__ = ufv__;
this.meta22508 = meta22508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t22507.cljs$lang$type = true;
poker_site.hand_result.t22507.cljs$lang$ctorStr = "poker-site.hand-result/t22507";
poker_site.hand_result.t22507.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t22507");
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.t22507.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t22507.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (_,p__22510){var self__ = this;
var map__22511 = p__22510;var map__22511__$1 = ((cljs.core.seq_QMARK_.call(null,map__22511))?cljs.core.apply.call(null,cljs.core.hash_map,map__22511):map__22511);var text = cljs.core.get.call(null,map__22511__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var out = cljs.core.get.call(null,map__22511__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,map__22511,map__22511__$1,text,out,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (p1__22468_SHARP_){return poker_site.hand_result.handle_input.call(null,p1__22468_SHARP_,out,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,text);
});})(___$1,map__22511,map__22511__$1,text,out,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
, "value": text, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.t22507.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t22507.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (_){var self__ = this;
var ___$1 = this;var in_chan = cljs.core.async.chan.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id1","id1",220529770),in_chan);
} else
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id2","id2",1234345165),in_chan);
}
var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (state_22524){var state_val_22525 = (state_22524[(1)]);if((state_val_22525 === (5)))
{var inst_22519 = (state_22524[(2)]);var inst_22514 = inst_22519;var state_22524__$1 = (function (){var statearr_22526 = state_22524;(statearr_22526[(7)] = inst_22514);
return statearr_22526;
})();var statearr_22527_22546 = state_22524__$1;(statearr_22527_22546[(2)] = null);
(statearr_22527_22546[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22525 === (4)))
{var inst_22522 = (state_22524[(2)]);var state_22524__$1 = state_22524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22524__$1,inst_22522);
} else
{if((state_val_22525 === (3)))
{var inst_22514 = (state_22524[(7)]);var inst_22516 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_22514);var inst_22517 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_22516);var state_22524__$1 = (function (){var statearr_22528 = state_22524;(statearr_22528[(8)] = inst_22517);
return statearr_22528;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22524__$1,(5),in_chan);
} else
{if((state_val_22525 === (2)))
{var inst_22513 = (state_22524[(2)]);var inst_22514 = inst_22513;var state_22524__$1 = (function (){var statearr_22529 = state_22524;(statearr_22529[(7)] = inst_22514);
return statearr_22529;
})();var statearr_22530_22547 = state_22524__$1;(statearr_22530_22547[(2)] = null);
(statearr_22530_22547[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22525 === (1)))
{var state_22524__$1 = state_22524;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22524__$1,(2),in_chan);
} else
{return null;
}
}
}
}
}
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;return ((function (switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function() {
var state_machine__11438__auto__ = null;
var state_machine__11438__auto____0 = (function (){var statearr_22534 = [null,null,null,null,null,null,null,null,null];(statearr_22534[(0)] = state_machine__11438__auto__);
(statearr_22534[(1)] = (1));
return statearr_22534;
});
var state_machine__11438__auto____1 = (function (state_22524){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_22524);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e22535){if((e22535 instanceof Object))
{var ex__11441__auto__ = e22535;var statearr_22536_22548 = state_22524;(statearr_22536_22548[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22524);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22549 = state_22524;
state_22524 = G__22549;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_22524){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_22524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
})();var state__11454__auto__ = (function (){var statearr_22537 = f__11453__auto__.call(null);(statearr_22537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_22537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
);
return c__11452__auto__;
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.t22507.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t22507.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.t22507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (_22509){var self__ = this;
var _22509__$1 = this;return self__.meta22508;
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.t22507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function (_22509,meta22508__$1){var self__ = this;
var _22509__$1 = this;return (new poker_site.hand_result.t22507(self__.validate__5346__auto__,self__.input_schema22471,self__.owner,self__.data,self__.input_checker22472,self__.output_schema22470,self__.player_result,self__.output_checker22473,self__.G__22475,self__.G__22474,self__.ufv__,meta22508__$1));
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
poker_site.hand_result.__GT_t22507 = ((function (validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542){
return (function __GT_t22507(validate__5346__auto____$1,input_schema22471__$1,owner__$1,data__$1,input_checker22472__$1,output_schema22470__$1,player_result__$1,output_checker22473__$1,G__22475__$1,G__22474__$1,ufv____$1,meta22508){return (new poker_site.hand_result.t22507(validate__5346__auto____$1,input_schema22471__$1,owner__$1,data__$1,input_checker22472__$1,output_schema22470__$1,player_result__$1,output_checker22473__$1,G__22475__$1,G__22474__$1,ufv____$1,meta22508));
});})(validate__5346__auto__,ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
}
return (new poker_site.hand_result.t22507(validate__5346__auto__,input_schema22471_22540,owner,data,input_checker22472_22541,output_schema22470_22539,player_result,output_checker22473_22542,G__22475,G__22474,ufv___22538,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___22550 = output_checker22473_22542.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___22550))
{var error__5348__auto___22551 = temp__4126__auto___22550;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___22551)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22470_22539,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22551], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___22538,output_schema22470_22539,input_schema22471_22540,input_checker22472_22541,output_checker22473_22542))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema22470_22539,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22471_22540], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m22469){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m22469);
});
__GT_player_result = function(cursor__7114__auto__,m22469){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m22469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__22552_SHARP_){return (p1__22552_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__22553_SHARP_){return (p1__22553_SHARP_ + p2bb);
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
poker_site.hand_result.send_message = (function send_message(out,src,msg){if(cljs.core._EQ_.call(null,src,(1)))
{if(cljs.core.not_EQ_.call(null,msg,(0)))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id1","id1",220529770),new cljs.core.Keyword(null,"value","value",305978217),msg], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id2","id2",1234345165),new cljs.core.Keyword(null,"value","value",305978217),((0) - msg)], null));
} else
{if(cljs.core.not_EQ_.call(null,msg,(0)))
{cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id2","id2",1234345165),new cljs.core.Keyword(null,"value","value",305978217),msg], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"id1","id1",220529770),new cljs.core.Keyword(null,"value","value",305978217),((0) - msg)], null));
}
});
poker_site.hand_result.handle_message = (function handle_message(data,owner){var in$ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"in","in",-1531184865));var out = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"outC","outC",-1706649413));var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in$,out){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in$,out){
return (function (state_22596){var state_val_22597 = (state_22596[(1)]);if((state_val_22597 === (4)))
{var inst_22584 = (state_22596[(2)]);var inst_22585 = cljs.core.nth.call(null,inst_22584,(0),null);var inst_22586 = cljs.core.nth.call(null,inst_22584,(1),null);var inst_22587 = poker_site.hand_result.parse_number.call(null,inst_22586);var inst_22588 = cljs.core.deref.call(null,data);var inst_22589 = poker_site.hand_result.smaller_stack.call(null,inst_22588);var inst_22590 = poker_site.hand_result.validate_bet.call(null,inst_22587,inst_22589);var inst_22591 = poker_site.hand_result.send_message.call(null,out,inst_22585,inst_22590);var state_22596__$1 = (function (){var statearr_22598 = state_22596;(statearr_22598[(7)] = inst_22591);
return statearr_22598;
})();var statearr_22599_22608 = state_22596__$1;(statearr_22599_22608[(2)] = null);
(statearr_22599_22608[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22597 === (3)))
{var inst_22594 = (state_22596[(2)]);var state_22596__$1 = state_22596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22596__$1,inst_22594);
} else
{if((state_val_22597 === (2)))
{var state_22596__$1 = state_22596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22596__$1,(4),in$);
} else
{if((state_val_22597 === (1)))
{var state_22596__$1 = state_22596;var statearr_22600_22609 = state_22596__$1;(statearr_22600_22609[(2)] = null);
(statearr_22600_22609[(1)] = (2));
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
var state_machine__11438__auto____0 = (function (){var statearr_22604 = [null,null,null,null,null,null,null,null];(statearr_22604[(0)] = state_machine__11438__auto__);
(statearr_22604[(1)] = (1));
return statearr_22604;
});
var state_machine__11438__auto____1 = (function (state_22596){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_22596);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e22605){if((e22605 instanceof Object))
{var ex__11441__auto__ = e22605;var statearr_22606_22610 = state_22596;(statearr_22606_22610[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22596);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22611 = state_22596;
state_22596 = G__22611;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_22596){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_22596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in$,out))
})();var state__11454__auto__ = (function (){var statearr_22607 = f__11453__auto__.call(null);(statearr_22607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_22607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in$,out))
);
return c__11452__auto__;
});
var ufv___22630 = schema.utils.use_fn_validation;var output_schema22614_22631 = schema.core.Any;var input_schema22615_22632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22616_22633 = schema.core.checker.call(null,input_schema22615_22632);var output_checker22617_22634 = schema.core.checker.call(null,output_schema22614_22631);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function hand_result(G__22618,G__22619){var validate__5346__auto__ = ufv___22630.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___22635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22618,G__22619], null);var temp__4126__auto___22636 = input_checker22616_22633.call(null,args__5347__auto___22635);if(cljs.core.truth_(temp__4126__auto___22636))
{var error__5348__auto___22637 = temp__4126__auto___22636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___22637)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22615_22632,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___22635,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22637], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__22618;var owner = G__22619;while(true){
if(typeof poker_site.hand_result.t22625 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t22625 = (function (validate__5346__auto__,output_checker22617,owner,data,hand_result,input_schema22615,G__22618,G__22619,ufv__,output_schema22614,input_checker22616,meta22626){
this.validate__5346__auto__ = validate__5346__auto__;
this.output_checker22617 = output_checker22617;
this.owner = owner;
this.data = data;
this.hand_result = hand_result;
this.input_schema22615 = input_schema22615;
this.G__22618 = G__22618;
this.G__22619 = G__22619;
this.ufv__ = ufv__;
this.output_schema22614 = output_schema22614;
this.input_checker22616 = input_checker22616;
this.meta22626 = meta22626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t22625.cljs$lang$type = true;
poker_site.hand_result.t22625.cljs$lang$ctorStr = "poker-site.hand-result/t22625";
poker_site.hand_result.t22625.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t22625");
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t22625.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_,p__22628){var self__ = this;
var map__22629 = p__22628;var map__22629__$1 = ((cljs.core.seq_QMARK_.call(null,map__22629))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);var in$ = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var outP = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"outP","outP",481288973));var outC = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"outC","outC",-1706649413));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__22629,map__22629__$1,in$,outP,outC,validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,outC);
});})(___$1,map__22629,map__22629__$1,in$,outP,outC,validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t22625.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_){var self__ = this;
var ___$1 = this;return poker_site.hand_result.handle_message.call(null,self__.data,self__.owner);
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t22625.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_){var self__ = this;
var ___$1 = this;var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outP","outP",481288973),cljs.core.async.pub.call(null,c,((function (c,___$1,validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (p1__22612_SHARP_){return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__22612_SHARP_);
});})(c,___$1,validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
),new cljs.core.Keyword(null,"outC","outC",-1706649413),c,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t22625.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_22627){var self__ = this;
var _22627__$1 = this;return self__.meta22626;
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.t22625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function (_22627,meta22626__$1){var self__ = this;
var _22627__$1 = this;return (new poker_site.hand_result.t22625(self__.validate__5346__auto__,self__.output_checker22617,self__.owner,self__.data,self__.hand_result,self__.input_schema22615,self__.G__22618,self__.G__22619,self__.ufv__,self__.output_schema22614,self__.input_checker22616,meta22626__$1));
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
poker_site.hand_result.__GT_t22625 = ((function (validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634){
return (function __GT_t22625(validate__5346__auto____$1,output_checker22617__$1,owner__$1,data__$1,hand_result__$1,input_schema22615__$1,G__22618__$1,G__22619__$1,ufv____$1,output_schema22614__$1,input_checker22616__$1,meta22626){return (new poker_site.hand_result.t22625(validate__5346__auto____$1,output_checker22617__$1,owner__$1,data__$1,hand_result__$1,input_schema22615__$1,G__22618__$1,G__22619__$1,ufv____$1,output_schema22614__$1,input_checker22616__$1,meta22626));
});})(validate__5346__auto__,ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
}
return (new poker_site.hand_result.t22625(validate__5346__auto__,output_checker22617_22634,owner,data,hand_result,input_schema22615_22632,G__22618,G__22619,ufv___22630,output_schema22614_22631,input_checker22616_22633,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___22638 = output_checker22617_22634.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___22638))
{var error__5348__auto___22639 = temp__4126__auto___22638;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___22639)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22614_22631,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22639], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___22630,output_schema22614_22631,input_schema22615_22632,input_checker22616_22633,output_checker22617_22634))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema22614_22631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22615_22632], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m22613){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m22613);
});
__GT_hand_result = function(cursor__7114__auto__,m22613){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m22613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map