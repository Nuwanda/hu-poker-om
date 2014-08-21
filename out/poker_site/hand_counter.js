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
var ufv___19009 = schema.utils.use_fn_validation;var output_schema18997_19010 = schema.core.Any;var input_schema18998_19011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker18999_19012 = schema.core.checker.call(null,input_schema18998_19011);var output_checker19000_19013 = schema.core.checker.call(null,output_schema18997_19010);/**
* Inputs: [data owner]
*/
poker_site.hand_counter.hand_counter = ((function (ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function hand_counter(G__19001,G__19002){var validate__5346__auto__ = ufv___19009.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___19014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19001,G__19002], null);var temp__4126__auto___19015 = input_checker18999_19012.call(null,args__5347__auto___19014);if(cljs.core.truth_(temp__4126__auto___19015))
{var error__5348__auto___19016 = temp__4126__auto___19015;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5348__auto___19016)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18998_19011,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___19014,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___19016], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__19001;var owner = G__19002;while(true){
if(typeof poker_site.hand_counter.t19006 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.hand_counter.t19006 = (function (validate__5346__auto__,owner,data,output_schema18997,input_checker18999,output_checker19000,hand_counter,G__19001,G__19002,ufv__,input_schema18998,meta19007){
this.validate__5346__auto__ = validate__5346__auto__;
this.owner = owner;
this.data = data;
this.output_schema18997 = output_schema18997;
this.input_checker18999 = input_checker18999;
this.output_checker19000 = output_checker19000;
this.hand_counter = hand_counter;
this.G__19001 = G__19001;
this.G__19002 = G__19002;
this.ufv__ = ufv__;
this.input_schema18998 = input_schema18998;
this.meta19007 = meta19007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.hand_counter.t19006.cljs$lang$type = true;
poker_site.hand_counter.t19006.cljs$lang$ctorStr = "poker-site.hand-counter/t19006";
poker_site.hand_counter.t19006.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.hand-counter/t19006");
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.t19006.prototype.om$core$IRender$ = true;
poker_site.hand_counter.t19006.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "text-center"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.h3,("Hand count: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))),cljs.core.PersistentVector.EMPTY),cljs.core.apply.call(null,React.DOM.div,{"className": "btn-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-info", "onClick": ((function (___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),cljs.core.inc);
});})(___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
, "ref": "inc"},"Increment"),React.DOM.button({"style": {"width": "100px"}, "className": "btn btn-danger", "onClick": ((function (___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (){return om.core.transact_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.Keyword(null,"hand-count","hand-count",852355864)], null),((function (___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (___$2){return (0);
});})(___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
);
});})(___$1,validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
},"Reset")],null))))],null))));
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.t19006.prototype.om$core$IDidMount$ = true;
poker_site.hand_counter.t19006.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (_){var self__ = this;
var ___$1 = this;var inc_button = om.core.get_node.call(null,self__.owner,"inc");return inc_button.focus();
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.t19006.prototype.om$core$IDisplayName$ = true;
poker_site.hand_counter.t19006.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (_){var self__ = this;
var ___$1 = this;return "hand-counter";
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.t19006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (_19008){var self__ = this;
var _19008__$1 = this;return self__.meta19007;
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.t19006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function (_19008,meta19007__$1){var self__ = this;
var _19008__$1 = this;return (new poker_site.hand_counter.t19006(self__.validate__5346__auto__,self__.owner,self__.data,self__.output_schema18997,self__.input_checker18999,self__.output_checker19000,self__.hand_counter,self__.G__19001,self__.G__19002,self__.ufv__,self__.input_schema18998,meta19007__$1));
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
poker_site.hand_counter.__GT_t19006 = ((function (validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013){
return (function __GT_t19006(validate__5346__auto____$1,owner__$1,data__$1,output_schema18997__$1,input_checker18999__$1,output_checker19000__$1,hand_counter__$1,G__19001__$1,G__19002__$1,ufv____$1,input_schema18998__$1,meta19007){return (new poker_site.hand_counter.t19006(validate__5346__auto____$1,owner__$1,data__$1,output_schema18997__$1,input_checker18999__$1,output_checker19000__$1,hand_counter__$1,G__19001__$1,G__19002__$1,ufv____$1,input_schema18998__$1,meta19007));
});})(validate__5346__auto__,ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
}
return (new poker_site.hand_counter.t19006(validate__5346__auto__,owner,data,output_schema18997_19010,input_checker18999_19012,output_checker19000_19013,hand_counter,G__19001,G__19002,ufv___19009,input_schema18998_19011,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___19017 = output_checker19000_19013.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___19017))
{var error__5348__auto___19018 = temp__4126__auto___19017;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"hand-counter","hand-counter",-1469680369,null),cljs.core.pr_str.call(null,error__5348__auto___19018)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18997_19010,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___19018], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___19009,output_schema18997_19010,input_schema18998_19011,input_checker18999_19012,output_checker19000_19013))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.hand_counter.hand_counter),schema.core.make_fn_schema.call(null,output_schema18997_19010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18998_19011], null)));
poker_site.hand_counter.__GT_hand_counter = (function() {
var __GT_hand_counter = null;
var __GT_hand_counter__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7114__auto__);
});
var __GT_hand_counter__2 = (function (cursor__7114__auto__,m18996){return om.core.build.call(null,poker_site.hand_counter.hand_counter,cursor__7114__auto__,m18996);
});
__GT_hand_counter = function(cursor__7114__auto__,m18996){
switch(arguments.length){
case 1:
return __GT_hand_counter__1.call(this,cursor__7114__auto__);
case 2:
return __GT_hand_counter__2.call(this,cursor__7114__auto__,m18996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_hand_counter.cljs$core$IFn$_invoke$arity$1 = __GT_hand_counter__1;
__GT_hand_counter.cljs$core$IFn$_invoke$arity$2 = __GT_hand_counter__2;
return __GT_hand_counter;
})()
;

//# sourceMappingURL=hand_counter.js.map