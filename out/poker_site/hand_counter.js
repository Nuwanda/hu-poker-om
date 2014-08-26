// Compiled by ClojureScript 0.0-2280
goog.provide('poker_site.hand_counter');
goog.require('cljs.core');
goog.require('poker_site.util');
goog.require('poker_site.util');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
var ufv___14309 = schema.utils.use_fn_validation;var output_schema14297_14310 = schema.core.Any;var input_schema14298_14311 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14299_14312 = schema.core.checker.call(null,input_schema14298_14311);var output_checker14300_14313 = schema.core.checker.call(null,output_schema14297_14310);/**
* Inputs: [data owner]
*/
poker_site.hand_counter.hand_counter = ((function (ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function hand_counter(G__14301,G__14302){var validate__5346__auto__ = ufv___14309.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14301,G__14302], null);var temp__4126__auto___14315 = input_checker14299_14312.call(null,args__5347__auto___14314);if(cljs.core.truth_(temp__4126__auto___14315))
{var error__5348__auto___14316 = temp__4126__auto___14315;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5348__auto___14316)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14298_14311,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14314,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14316], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__14301;var owner = G__14302;while(true){
if(typeof poker_site.hand_counter.t14306 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_counter.t14306 = (function (validate__5346__auto__,owner,output_checker14300,data,G__14301,G__14302,input_schema14298,hand_counter,input_checker14299,ufv__,output_schema14297,meta14307){
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.output_checker14300 = output_checker14300;
this.data = data;
this.G__14301 = G__14301;
this.G__14302 = G__14302;
this.input_schema14298 = input_schema14298;
this.hand_counter = hand_counter;
this.input_checker14299 = input_checker14299;
this.ufv__ = ufv__;
this.output_schema14297 = output_schema14297;
this.meta14307 = meta14307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_counter.t14306.cljs$lang$type = true;
poker_site.hand_counter.t14306.cljs$lang$ctorStr = "poker-site.hand-counter/t14306";
poker_site.hand_counter.t14306.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-counter/t14306");
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.t14306.prototype.om$core$IRender$ = true;
poker_site.hand_counter.t14306.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h3,("Hand count: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "btn-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-info", "onClick": ((function (___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
});})(___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
, "ref": "inc"},"Increment"),React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-danger", "onClick": ((function (___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),((function (___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (___$2){return (0);
});})(___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
);
});})(___$1,validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
},"Reset")],null))))],null))));
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.t14306.prototype.om$core$IDidMount$ = true;
poker_site.hand_counter.t14306.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (_){var self__ = this;
var ___$1 = this;var inc_button = om.core.get_node.call(null,self__.owner,"inc");return inc_button.focus();
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.t14306.prototype.om$core$IDisplayName$ = true;
poker_site.hand_counter.t14306.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-counter";
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.t14306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (_14308){var self__ = this;
var _14308__$1 = this;return self__.meta14307;
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.t14306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function (_14308,meta14307__$1){var self__ = this;
var _14308__$1 = this;return (new poker_site.hand_counter.t14306(self__.validate__5346__auto__,self__.owner,self__.output_checker14300,self__.data,self__.G__14301,self__.G__14302,self__.input_schema14298,self__.hand_counter,self__.input_checker14299,self__.ufv__,self__.output_schema14297,meta14307__$1));
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
poker_site.hand_counter.__GT_t14306 = ((function (validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313){
return (function __GT_t14306(validate__5346__auto____$1,owner__$1,output_checker14300__$1,data__$1,G__14301__$1,G__14302__$1,input_schema14298__$1,hand_counter__$1,input_checker14299__$1,ufv____$1,output_schema14297__$1,meta14307){return (new poker_site.hand_counter.t14306(validate__5346__auto____$1,owner__$1,output_checker14300__$1,data__$1,G__14301__$1,G__14302__$1,input_schema14298__$1,hand_counter__$1,input_checker14299__$1,ufv____$1,output_schema14297__$1,meta14307));
});})(validate__5346__auto__,ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
}
return (new poker_site.hand_counter.t14306(validate__5346__auto__,owner,output_checker14300_14313,data,G__14301,G__14302,input_schema14298_14311,hand_counter,input_checker14299_14312,ufv___14309,output_schema14297_14310,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14317 = output_checker14300_14313.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14317))
{var error__5348__auto___14318 = temp__4126__auto___14317;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5348__auto___14318)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14297_14310,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14318], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14309,output_schema14297_14310,input_schema14298_14311,input_checker14299_14312,output_checker14300_14313))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_counter.hand_counter),schema.core.make_fn_schema.call(null,output_schema14297_14310,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14298_14311], null)));
poker_site.hand_counter.__GT_hand_counter = (function() {
var __GT_hand_counter = null;
var __GT_hand_counter__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7114__auto__);
});
var __GT_hand_counter__2 = (function (cursor__7114__auto__,m14296){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7114__auto__,m14296);
});
__GT_hand_counter = function(cursor__7114__auto__,m14296){
switch(arguments.length){
case 1:
return __GT_hand_counter__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_counter__2.call(this,cursor__7114__auto__,m14296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_counter.cljs$core$IFn$_invoke$arity$1 = __GT_hand_counter__1;
__GT_hand_counter.cljs$core$IFn$_invoke$arity$2 = __GT_hand_counter__2;
return __GT_hand_counter;
})()
;

//# sourceMappingURL=hand_counter.js.map