// Compiled by ClojureScript 0.0-2322
goog.provide('poker_site.hand_counter');
goog.require('cljs.core');
goog.require('poker_site.util');
goog.require('poker_site.util');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
var ufv___14337 = schema.utils.use_fn_validation;var output_schema14325_14338 = schema.core.Any;var input_schema14326_14339 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14327_14340 = schema.core.checker.call(null,input_schema14326_14339);var output_checker14328_14341 = schema.core.checker.call(null,output_schema14325_14338);/**
* Inputs: [data owner]
*/
poker_site.hand_counter.hand_counter = ((function (ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function hand_counter(G__14329,G__14330){var validate__5362__auto__ = ufv___14337.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14329,G__14330], null);var temp__4126__auto___14343 = input_checker14327_14340.call(null,args__5363__auto___14342);if(cljs.core.truth_(temp__4126__auto___14343))
{var error__5364__auto___14344 = temp__4126__auto___14343;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5364__auto___14344)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14326_14339,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14342,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14344], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__14329;var owner = G__14330;while(true){
if(typeof poker_site.hand_counter.t14334 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_counter.t14334 = (function (input_schema14326,G__14329,owner,data,output_checker14328,hand_counter,validate__5362__auto__,output_schema14325,input_checker14327,ufv__,G__14330,meta14335){
this.input_schema14326 = input_schema14326;
this.G__14329 = G__14329;
this.owner = owner;
this.data = data;
this.output_checker14328 = output_checker14328;
this.hand_counter = hand_counter;
this.validate__5362__auto__ = validate__5362__auto__;
this.output_schema14325 = output_schema14325;
this.input_checker14327 = input_checker14327;
this.ufv__ = ufv__;
this.G__14330 = G__14330;
this.meta14335 = meta14335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_counter.t14334.cljs$lang$type = true;
poker_site.hand_counter.t14334.cljs$lang$ctorStr = "poker-site.hand-counter/t14334";
poker_site.hand_counter.t14334.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.hand-counter/t14334");
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.t14334.prototype.om$core$IRender$ = true;
poker_site.hand_counter.t14334.prototype.om$core$IRender$render$arity$1 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h3,("Hand count: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "btn-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-info", "onClick": ((function (___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
});})(___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
, "ref": "inc"},"Increment"),React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-danger", "onClick": ((function (___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),((function (___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (___$2){return (0);
});})(___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
);
});})(___$1,validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
},"Reset")],null))))],null))));
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.t14334.prototype.om$core$IDidMount$ = true;
poker_site.hand_counter.t14334.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (_){var self__ = this;
var ___$1 = this;var inc_button = om.core.get_node.call(null,self__.owner,"inc");return inc_button.focus();
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.t14334.prototype.om$core$IDisplayName$ = true;
poker_site.hand_counter.t14334.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-counter";
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.t14334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (_14336){var self__ = this;
var _14336__$1 = this;return self__.meta14335;
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.t14334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function (_14336,meta14335__$1){var self__ = this;
var _14336__$1 = this;return (new poker_site.hand_counter.t14334(self__.input_schema14326,self__.G__14329,self__.owner,self__.data,self__.output_checker14328,self__.hand_counter,self__.validate__5362__auto__,self__.output_schema14325,self__.input_checker14327,self__.ufv__,self__.G__14330,meta14335__$1));
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
poker_site.hand_counter.__GT_t14334 = ((function (validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341){
return (function __GT_t14334(input_schema14326__$1,G__14329__$1,owner__$1,data__$1,output_checker14328__$1,hand_counter__$1,validate__5362__auto____$1,output_schema14325__$1,input_checker14327__$1,ufv____$1,G__14330__$1,meta14335){return (new poker_site.hand_counter.t14334(input_schema14326__$1,G__14329__$1,owner__$1,data__$1,output_checker14328__$1,hand_counter__$1,validate__5362__auto____$1,output_schema14325__$1,input_checker14327__$1,ufv____$1,G__14330__$1,meta14335));
});})(validate__5362__auto__,ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
}
return (new poker_site.hand_counter.t14334(input_schema14326_14339,G__14329,owner,data,output_checker14328_14341,hand_counter,validate__5362__auto__,output_schema14325_14338,input_checker14327_14340,ufv___14337,G__14330,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14345 = output_checker14328_14341.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14345))
{var error__5364__auto___14346 = temp__4126__auto___14345;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5364__auto___14346)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14325_14338,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14346], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14337,output_schema14325_14338,input_schema14326_14339,input_checker14327_14340,output_checker14328_14341))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_counter.hand_counter),schema.core.make_fn_schema.call(null,output_schema14325_14338,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14326_14339], null)));
poker_site.hand_counter.__GT_hand_counter = (function() {
var __GT_hand_counter = null;
var __GT_hand_counter__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7130__auto__);
});
var __GT_hand_counter__2 = (function (cursor__7130__auto__,m14324){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7130__auto__,m14324);
});
__GT_hand_counter = function(cursor__7130__auto__,m14324){
switch(arguments.length){
case 1:
return __GT_hand_counter__1.call(this,cursor__7130__auto__);
case 2:
return __GT_hand_counter__2.call(this,cursor__7130__auto__,m14324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_counter.cljs$core$IFn$_invoke$arity$1 = __GT_hand_counter__1;
__GT_hand_counter.cljs$core$IFn$_invoke$arity$2 = __GT_hand_counter__2;
return __GT_hand_counter;
})()
;

//# sourceMappingURL=hand_counter.js.map