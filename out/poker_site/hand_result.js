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
var ufv___22733 = schema.utils.use_fn_validation;var output_schema22665_22734 = schema.core.Any;var input_schema22666_22735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22667_22736 = schema.core.checker.call(null,input_schema22666_22735);var output_checker22668_22737 = schema.core.checker.call(null,output_schema22665_22734);/**
* Inputs: [data owner]
*/
poker_site.hand_result.player_result = ((function (ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function player_result(G__22669,G__22670){var validate__5346__auto__ = ufv___22733.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___22738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22669,G__22670], null);var temp__4126__auto___22739 = input_checker22667_22736.call(null,args__5347__auto___22738);if(cljs.core.truth_(temp__4126__auto___22739))
{var error__5348__auto___22740 = temp__4126__auto___22739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___22740)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22666_22735,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___22738,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22740], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__22669;var owner = G__22670;while(true){
if(typeof poker_site.hand_result.t22702 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t22702 = (function (validate__5346__auto__,owner,input_schema22666,data,output_schema22665,player_result,output_checker22668,input_checker22667,G__22670,ufv__,G__22669,meta22703){
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.input_schema22666 = input_schema22666;
this.data = data;
this.output_schema22665 = output_schema22665;
this.player_result = player_result;
this.output_checker22668 = output_checker22668;
this.input_checker22667 = input_checker22667;
this.G__22670 = G__22670;
this.ufv__ = ufv__;
this.G__22669 = G__22669;
this.meta22703 = meta22703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t22702.cljs$lang$type = true;
poker_site.hand_result.t22702.cljs$lang$ctorStr = "poker-site.hand-result/t22702";
poker_site.hand_result.t22702.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t22702");
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.t22702.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t22702.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (_,p__22705){var self__ = this;
var map__22706 = p__22705;var map__22706__$1 = ((cljs.core.seq_QMARK_.call(null,map__22706))?cljs.core.apply.call(null,cljs.core.hash_map,map__22706):map__22706);var text = cljs.core.get.call(null,map__22706__$1,new cljs.core.Keyword(null,"text","text",-1790561697));var out = cljs.core.get.call(null,map__22706__$1,new cljs.core.Keyword(null,"out","out",-910545517));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "input-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,map__22706,map__22706__$1,text,out,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (p1__22663_SHARP_){return poker_site.hand_result.handle_input.call(null,p1__22663_SHARP_,out,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)),self__.owner,text);
});})(___$1,map__22706,map__22706__$1,text,out,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
, "value": text, "style": {"text-align": "right"}, "type": "text", "className": "form-control"},null),React.DOM.span({"className": "input-group-addon"},"bb")],null))))],null))));
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.t22702.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t22702.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (_){var self__ = this;
var ___$1 = this;var in_chan = cljs.core.async.chan.call(null);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data),(1)))
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id1","id1",220529770),in_chan);
} else
{cljs.core.async.sub.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"id2","id2",1234345165),in_chan);
}
var c__11452__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (){var f__11453__auto__ = (function (){var switch__11437__auto__ = ((function (c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (state_22719){var state_val_22720 = (state_22719[(1)]);if((state_val_22720 === (5)))
{var inst_22714 = (state_22719[(2)]);var inst_22709 = inst_22714;var state_22719__$1 = (function (){var statearr_22721 = state_22719;(statearr_22721[(7)] = inst_22709);
return statearr_22721;
})();var statearr_22722_22741 = state_22719__$1;(statearr_22722_22741[(2)] = null);
(statearr_22722_22741[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22720 === (4)))
{var inst_22717 = (state_22719[(2)]);var state_22719__$1 = state_22719;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22719__$1,inst_22717);
} else
{if((state_val_22720 === (3)))
{var inst_22709 = (state_22719[(7)]);var inst_22711 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(inst_22709);var inst_22712 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"text","text",-1790561697),inst_22711);var state_22719__$1 = (function (){var statearr_22723 = state_22719;(statearr_22723[(8)] = inst_22712);
return statearr_22723;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22719__$1,(5),in_chan);
} else
{if((state_val_22720 === (2)))
{var inst_22708 = (state_22719[(2)]);var inst_22709 = inst_22708;var state_22719__$1 = (function (){var statearr_22724 = state_22719;(statearr_22724[(7)] = inst_22709);
return statearr_22724;
})();var statearr_22725_22742 = state_22719__$1;(statearr_22725_22742[(2)] = null);
(statearr_22725_22742[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22720 === (1)))
{var state_22719__$1 = state_22719;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22719__$1,(2),in_chan);
} else
{return null;
}
}
}
}
}
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;return ((function (switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function() {
var state_machine__11438__auto__ = null;
var state_machine__11438__auto____0 = (function (){var statearr_22729 = [null,null,null,null,null,null,null,null,null];(statearr_22729[(0)] = state_machine__11438__auto__);
(statearr_22729[(1)] = (1));
return statearr_22729;
});
var state_machine__11438__auto____1 = (function (state_22719){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_22719);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e22730){if((e22730 instanceof Object))
{var ex__11441__auto__ = e22730;var statearr_22731_22743 = state_22719;(statearr_22731_22743[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22719);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22744 = state_22719;
state_22719 = G__22744;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_22719){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_22719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
})();var state__11454__auto__ = (function (){var statearr_22732 = f__11453__auto__.call(null);(statearr_22732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_22732;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in_chan,___$1,validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
);
return c__11452__auto__;
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.t22702.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t22702.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (_){var self__ = this;
var ___$1 = this;return "player-result";
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.t22702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (_22704){var self__ = this;
var _22704__$1 = this;return self__.meta22703;
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.t22702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function (_22704,meta22703__$1){var self__ = this;
var _22704__$1 = this;return (new poker_site.hand_result.t22702(self__.validate__5346__auto__,self__.owner,self__.input_schema22666,self__.data,self__.output_schema22665,self__.player_result,self__.output_checker22668,self__.input_checker22667,self__.G__22670,self__.ufv__,self__.G__22669,meta22703__$1));
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
poker_site.hand_result.__GT_t22702 = ((function (validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737){
return (function __GT_t22702(validate__5346__auto____$1,owner__$1,input_schema22666__$1,data__$1,output_schema22665__$1,player_result__$1,output_checker22668__$1,input_checker22667__$1,G__22670__$1,ufv____$1,G__22669__$1,meta22703){return (new poker_site.hand_result.t22702(validate__5346__auto____$1,owner__$1,input_schema22666__$1,data__$1,output_schema22665__$1,player_result__$1,output_checker22668__$1,input_checker22667__$1,G__22670__$1,ufv____$1,G__22669__$1,meta22703));
});})(validate__5346__auto__,ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
}
return (new poker_site.hand_result.t22702(validate__5346__auto__,owner,input_schema22666_22735,data,output_schema22665_22734,player_result,output_checker22668_22737,input_checker22667_22736,G__22670,ufv___22733,G__22669,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___22745 = output_checker22668_22737.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___22745))
{var error__5348__auto___22746 = temp__4126__auto___22745;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-result","player-result",-1479355224,null),cljs.core.pr_str.call(null,error__5348__auto___22746)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22665_22734,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22746], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___22733,output_schema22665_22734,input_schema22666_22735,input_checker22667_22736,output_checker22668_22737))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.player_result),schema.core.make_fn_schema.call(null,output_schema22665_22734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22666_22735], null)));
poker_site.hand_result.__GT_player_result = (function() {
var __GT_player_result = null;
var __GT_player_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__);
});
var __GT_player_result__2 = (function (cursor__7114__auto__,m22664){return om.core.build.call(null,poker_site.hand_result.player_result,cursor__7114__auto__,m22664);
});
__GT_player_result = function(cursor__7114__auto__,m22664){
switch(arguments.length){
case 1:
return __GT_player_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_result__2.call(this,cursor__7114__auto__,m22664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_result.cljs$core$IFn$_invoke$arity$1 = __GT_player_result__1;
__GT_player_result.cljs$core$IFn$_invoke$arity$2 = __GT_player_result__2;
return __GT_player_result;
})()
;
poker_site.hand_result.import_hand = (function import_hand(data,owner,out){var p1bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p1bb","p1bb",1587346367));var p2bb = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"p2bb","p2bb",1303575447));om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__22747_SHARP_){return (p1__22747_SHARP_ + p1bb);
});})(p1bb,p2bb))
);
om.core.transact_BANG_.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),((function (p1bb,p2bb){
return (function (p1__22748_SHARP_){return (p1__22748_SHARP_ + p2bb);
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
return (function (state_22793){var state_val_22794 = (state_22793[(1)]);if((state_val_22794 === (4)))
{var inst_22780 = (state_22793[(2)]);var inst_22781 = cljs.core.nth.call(null,inst_22780,(0),null);var inst_22782 = cljs.core.nth.call(null,inst_22780,(1),null);var inst_22783 = poker_site.hand_result.parse_number.call(null,inst_22782);var inst_22784 = cljs.core.deref.call(null,data);var inst_22785 = poker_site.hand_result.smaller_stack.call(null,inst_22784);var inst_22786 = poker_site.hand_result.validate_bet.call(null,inst_22783,inst_22785);var inst_22787 = poker_site.hand_result.send_message.call(null,out,inst_22781,inst_22786);var inst_22788 = poker_site.hand_result.update_stacks.call(null,owner,inst_22781,inst_22786);var state_22793__$1 = (function (){var statearr_22795 = state_22793;(statearr_22795[(7)] = inst_22787);
(statearr_22795[(8)] = inst_22788);
return statearr_22795;
})();var statearr_22796_22805 = state_22793__$1;(statearr_22796_22805[(2)] = null);
(statearr_22796_22805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22794 === (3)))
{var inst_22791 = (state_22793[(2)]);var state_22793__$1 = state_22793;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22793__$1,inst_22791);
} else
{if((state_val_22794 === (2)))
{var state_22793__$1 = state_22793;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22793__$1,(4),in$);
} else
{if((state_val_22794 === (1)))
{var state_22793__$1 = state_22793;var statearr_22797_22806 = state_22793__$1;(statearr_22797_22806[(2)] = null);
(statearr_22797_22806[(1)] = (2));
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
var state_machine__11438__auto____0 = (function (){var statearr_22801 = [null,null,null,null,null,null,null,null,null];(statearr_22801[(0)] = state_machine__11438__auto__);
(statearr_22801[(1)] = (1));
return statearr_22801;
});
var state_machine__11438__auto____1 = (function (state_22793){while(true){
var ret_value__11439__auto__ = (function (){try{while(true){
var result__11440__auto__ = switch__11437__auto__.call(null,state_22793);if(cljs.core.keyword_identical_QMARK_.call(null,result__11440__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11440__auto__;
}
break;
}
}catch (e22802){if((e22802 instanceof Object))
{var ex__11441__auto__ = e22802;var statearr_22803_22807 = state_22793;(statearr_22803_22807[(5)] = ex__11441__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22793);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11439__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22808 = state_22793;
state_22793 = G__22808;
continue;
}
} else
{return ret_value__11439__auto__;
}
break;
}
});
state_machine__11438__auto__ = function(state_22793){
switch(arguments.length){
case 0:
return state_machine__11438__auto____0.call(this);
case 1:
return state_machine__11438__auto____1.call(this,state_22793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11438__auto____0;
state_machine__11438__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11438__auto____1;
return state_machine__11438__auto__;
})()
;})(switch__11437__auto__,c__11452__auto__,in$,out))
})();var state__11454__auto__ = (function (){var statearr_22804 = f__11453__auto__.call(null);(statearr_22804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11452__auto__);
return statearr_22804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11454__auto__);
});})(c__11452__auto__,in$,out))
);
return c__11452__auto__;
});
var ufv___22827 = schema.utils.use_fn_validation;var output_schema22811_22828 = schema.core.Any;var input_schema22812_22829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22813_22830 = schema.core.checker.call(null,input_schema22812_22829);var output_checker22814_22831 = schema.core.checker.call(null,output_schema22811_22828);/**
* Inputs: [data owner]
*/
poker_site.hand_result.hand_result = ((function (ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function hand_result(G__22815,G__22816){var validate__5346__auto__ = ufv___22827.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___22832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22815,G__22816], null);var temp__4126__auto___22833 = input_checker22813_22830.call(null,args__5347__auto___22832);if(cljs.core.truth_(temp__4126__auto___22833))
{var error__5348__auto___22834 = temp__4126__auto___22833;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___22834)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22812_22829,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___22832,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22834], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__22815;var owner = G__22816;while(true){
if(typeof poker_site.hand_result.t22822 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_result.t22822 = (function (validate__5346__auto__,input_schema22812,owner,data,input_checker22813,hand_result,G__22815,G__22816,output_schema22811,output_checker22814,ufv__,meta22823){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_schema22812 = input_schema22812;
this.owner = owner;
this.data = data;
this.input_checker22813 = input_checker22813;
this.hand_result = hand_result;
this.G__22815 = G__22815;
this.G__22816 = G__22816;
this.output_schema22811 = output_schema22811;
this.output_checker22814 = output_checker22814;
this.ufv__ = ufv__;
this.meta22823 = meta22823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_result.t22822.cljs$lang$type = true;
poker_site.hand_result.t22822.cljs$lang$ctorStr = "poker-site.hand-result/t22822";
poker_site.hand_result.t22822.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-result/t22822");
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.om$core$IRenderState$ = true;
poker_site.hand_result.t22822.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_,p__22825){var self__ = this;
var map__22826 = p__22825;var map__22826__$1 = ((cljs.core.seq_QMARK_.call(null,map__22826))?cljs.core.apply.call(null,cljs.core.hash_map,map__22826):map__22826);var in$ = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"in","in",-1531184865));var outP = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"outP","outP",481288973));var outC = cljs.core.get.call(null,map__22826__$1,new cljs.core.Keyword(null,"outC","outC",-1706649413));var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Next hand result"),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2 col-md-offset-4"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-2"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.player_result,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"out","out",-910545517),in$,new cljs.core.Keyword(null,"in","in",-1531184865),outP,new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null))],null))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"style": {"margin-top": "10px"}, "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"style": {"text-align": "center"}, "className": "col-md-2 col-md-offset-5"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__22826,map__22826__$1,in$,outP,outC,validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (){return poker_site.hand_result.import_hand.call(null,self__.data,self__.owner,outC);
});})(___$1,map__22826,map__22826__$1,in$,outP,outC,validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
, "className": "btn btn-primary"},"Add Hand")],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.om$core$IWillMount$ = true;
poker_site.hand_result.t22822.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_){var self__ = this;
var ___$1 = this;return poker_site.hand_result.handle_message.call(null,self__.data,self__.owner);
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.om$core$IInitState$ = true;
poker_site.hand_result.t22822.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_){var self__ = this;
var ___$1 = this;var c = cljs.core.async.chan.call(null);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"outP","outP",481288973),cljs.core.async.pub.call(null,c,((function (c,___$1,validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (p1__22809_SHARP_){return new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__22809_SHARP_);
});})(c,___$1,validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
),new cljs.core.Keyword(null,"outC","outC",-1706649413),c,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"p1bb","p1bb",1587346367),(0),new cljs.core.Keyword(null,"p2bb","p2bb",1303575447),(0)], null);
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.om$core$IDisplayName$ = true;
poker_site.hand_result.t22822.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-result";
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_22824){var self__ = this;
var _22824__$1 = this;return self__.meta22823;
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.t22822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function (_22824,meta22823__$1){var self__ = this;
var _22824__$1 = this;return (new poker_site.hand_result.t22822(self__.validate__5346__auto__,self__.input_schema22812,self__.owner,self__.data,self__.input_checker22813,self__.hand_result,self__.G__22815,self__.G__22816,self__.output_schema22811,self__.output_checker22814,self__.ufv__,meta22823__$1));
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
poker_site.hand_result.__GT_t22822 = ((function (validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831){
return (function __GT_t22822(validate__5346__auto____$1,input_schema22812__$1,owner__$1,data__$1,input_checker22813__$1,hand_result__$1,G__22815__$1,G__22816__$1,output_schema22811__$1,output_checker22814__$1,ufv____$1,meta22823){return (new poker_site.hand_result.t22822(validate__5346__auto____$1,input_schema22812__$1,owner__$1,data__$1,input_checker22813__$1,hand_result__$1,G__22815__$1,G__22816__$1,output_schema22811__$1,output_checker22814__$1,ufv____$1,meta22823));
});})(validate__5346__auto__,ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
}
return (new poker_site.hand_result.t22822(validate__5346__auto__,input_schema22812_22829,owner,data,input_checker22813_22830,hand_result,G__22815,G__22816,output_schema22811_22828,output_checker22814_22831,ufv___22827,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___22835 = output_checker22814_22831.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___22835))
{var error__5348__auto___22836 = temp__4126__auto___22835;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-result","hand-result",-1139542166,null),cljs.core.pr_str.call(null,error__5348__auto___22836)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22811_22828,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22836], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___22827,output_schema22811_22828,input_schema22812_22829,input_checker22813_22830,output_checker22814_22831))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_result.hand_result),schema.core.make_fn_schema.call(null,output_schema22811_22828,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22812_22829], null)));
poker_site.hand_result.__GT_hand_result = (function() {
var __GT_hand_result = null;
var __GT_hand_result__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__);
});
var __GT_hand_result__2 = (function (cursor__7114__auto__,m22810){return om.core.build.call(null,poker_site.hand_result.hand_result,cursor__7114__auto__,m22810);
});
__GT_hand_result = function(cursor__7114__auto__,m22810){
switch(arguments.length){
case 1:
return __GT_hand_result__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_result__2.call(this,cursor__7114__auto__,m22810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_result.cljs$core$IFn$_invoke$arity$1 = __GT_hand_result__1;
__GT_hand_result.cljs$core$IFn$_invoke$arity$2 = __GT_hand_result__2;
return __GT_hand_result;
})()
;

//# sourceMappingURL=hand_result.js.map