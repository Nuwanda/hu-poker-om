// Compiled by ClojureScript 0.0-2280
goog.provide('poker_site.stats');
goog.require('cljs.core');
goog.require('poker_site.util');
goog.require('poker_site.util');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
var ufv___16549 = schema.utils.use_fn_validation;var output_schema16537_16550 = schema.core.Any;var input_schema16538_16551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker16539_16552 = schema.core.checker.call(null,input_schema16538_16551);var output_checker16540_16553 = schema.core.checker.call(null,output_schema16537_16550);/**
* Inputs: [data owner]
*/
poker_site.stats.player_stats = ((function (ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function player_stats(G__16541,G__16542){var validate__5346__auto__ = ufv___16549.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___16554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16541,G__16542], null);var temp__4126__auto___16555 = input_checker16539_16552.call(null,args__5347__auto___16554);if(cljs.core.truth_(temp__4126__auto___16555))
{var error__5348__auto___16556 = temp__4126__auto___16555;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5348__auto___16556)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16538_16551,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___16554,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16556], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__16541;var owner = G__16542;while(true){
if(typeof poker_site.stats.t16546 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t16546 = (function (validate__5346__auto__,player_stats,owner,G__16541,G__16542,data,input_checker16539,output_schema16537,input_schema16538,output_checker16540,ufv__,meta16547){
this.validate__5346__auto__ = validate__5346__auto__;
this.player_stats = player_stats;
this.owner = owner;
this.G__16541 = G__16541;
this.G__16542 = G__16542;
this.data = data;
this.input_checker16539 = input_checker16539;
this.output_schema16537 = output_schema16537;
this.input_schema16538 = input_schema16538;
this.output_checker16540 = output_checker16540;
this.ufv__ = ufv__;
this.meta16547 = meta16547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t16546.cljs$lang$type = true;
poker_site.stats.t16546.cljs$lang$ctorStr = "poker-site.stats/t16546";
poker_site.stats.t16546.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.stats/t16546");
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
poker_site.stats.t16546.prototype.om$core$IRender$ = true;
poker_site.stats.t16546.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "panel panel-default"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}, "className": "panel-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data))))],null))))],null)))),cljs.core.apply.call(null,React.DOM.ul,{"style": {"text-align": "center"}, "className": "list-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Stack: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[("BI's: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.span({"onClick": ((function (___$1,validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (___$2){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"bis","bis",-1311072700),cljs.core.inc);
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"stack","stack",-793405930),((function (___$1,validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (p1__16535_SHARP_){return ((100) + p1__16535_SHARP_);
});})(___$1,validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
);
});})(___$1,validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
, "className": "glyphicon glyphicon-plus pull-right"})],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Win/Loss: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data) - (new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data) * (100)))))],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
poker_site.stats.t16546.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t16546.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (_){var self__ = this;
var ___$1 = this;return "player-stats";
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
poker_site.stats.t16546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (_16548){var self__ = this;
var _16548__$1 = this;return self__.meta16547;
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
poker_site.stats.t16546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function (_16548,meta16547__$1){var self__ = this;
var _16548__$1 = this;return (new poker_site.stats.t16546(self__.validate__5346__auto__,self__.player_stats,self__.owner,self__.G__16541,self__.G__16542,self__.data,self__.input_checker16539,self__.output_schema16537,self__.input_schema16538,self__.output_checker16540,self__.ufv__,meta16547__$1));
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
poker_site.stats.__GT_t16546 = ((function (validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553){
return (function __GT_t16546(validate__5346__auto____$1,player_stats__$1,owner__$1,G__16541__$1,G__16542__$1,data__$1,input_checker16539__$1,output_schema16537__$1,input_schema16538__$1,output_checker16540__$1,ufv____$1,meta16547){return (new poker_site.stats.t16546(validate__5346__auto____$1,player_stats__$1,owner__$1,G__16541__$1,G__16542__$1,data__$1,input_checker16539__$1,output_schema16537__$1,input_schema16538__$1,output_checker16540__$1,ufv____$1,meta16547));
});})(validate__5346__auto__,ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
}
return (new poker_site.stats.t16546(validate__5346__auto__,player_stats,owner,G__16541,G__16542,data,input_checker16539_16552,output_schema16537_16550,input_schema16538_16551,output_checker16540_16553,ufv___16549,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___16557 = output_checker16540_16553.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___16557))
{var error__5348__auto___16558 = temp__4126__auto___16557;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5348__auto___16558)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16537_16550,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16558], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___16549,output_schema16537_16550,input_schema16538_16551,input_checker16539_16552,output_checker16540_16553))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.player_stats),schema.core.make_fn_schema.call(null,output_schema16537_16550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16538_16551], null)));
poker_site.stats.__GT_player_stats = (function() {
var __GT_player_stats = null;
var __GT_player_stats__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7114__auto__);
});
var __GT_player_stats__2 = (function (cursor__7114__auto__,m16536){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7114__auto__,m16536);
});
__GT_player_stats = function(cursor__7114__auto__,m16536){
switch(arguments.length){
case 1:
return __GT_player_stats__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_stats__2.call(this,cursor__7114__auto__,m16536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_stats.cljs$core$IFn$_invoke$arity$1 = __GT_player_stats__1;
__GT_player_stats.cljs$core$IFn$_invoke$arity$2 = __GT_player_stats__2;
return __GT_player_stats;
})()
;
var ufv___16572 = schema.utils.use_fn_validation;var output_schema16560_16573 = schema.core.Any;var input_schema16561_16574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker16562_16575 = schema.core.checker.call(null,input_schema16561_16574);var output_checker16563_16576 = schema.core.checker.call(null,output_schema16560_16573);/**
* Inputs: [data owner]
*/
poker_site.stats.stats = ((function (ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function stats(G__16564,G__16565){var validate__5346__auto__ = ufv___16572.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___16577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16564,G__16565], null);var temp__4126__auto___16578 = input_checker16562_16575.call(null,args__5347__auto___16577);if(cljs.core.truth_(temp__4126__auto___16578))
{var error__5348__auto___16579 = temp__4126__auto___16578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5348__auto___16579)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16561_16574,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___16577,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16579], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__16564;var owner = G__16565;while(true){
if(typeof poker_site.stats.t16569 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t16569 = (function (validate__5346__auto__,input_checker16562,owner,stats,data,input_schema16561,output_schema16560,G__16564,G__16565,output_checker16563,ufv__,meta16570){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_checker16562 = input_checker16562;
this.owner = owner;
this.stats = stats;
this.data = data;
this.input_schema16561 = input_schema16561;
this.output_schema16560 = output_schema16560;
this.G__16564 = G__16564;
this.G__16565 = G__16565;
this.output_checker16563 = output_checker16563;
this.ufv__ = ufv__;
this.meta16570 = meta16570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t16569.cljs$lang$type = true;
poker_site.stats.t16569.cljs$lang$ctorStr = "poker-site.stats/t16569";
poker_site.stats.t16569.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.stats/t16569");
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
poker_site.stats.t16569.prototype.om$core$IRender$ = true;
poker_site.stats.t16569.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Challenge Status"),cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Hands Played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3 col-md-offset-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null))))],null))));
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
poker_site.stats.t16569.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t16569.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function (_){var self__ = this;
var ___$1 = this;return "stats-view";
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
poker_site.stats.t16569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function (_16571){var self__ = this;
var _16571__$1 = this;return self__.meta16570;
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
poker_site.stats.t16569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function (_16571,meta16570__$1){var self__ = this;
var _16571__$1 = this;return (new poker_site.stats.t16569(self__.validate__5346__auto__,self__.input_checker16562,self__.owner,self__.stats,self__.data,self__.input_schema16561,self__.output_schema16560,self__.G__16564,self__.G__16565,self__.output_checker16563,self__.ufv__,meta16570__$1));
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
poker_site.stats.__GT_t16569 = ((function (validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576){
return (function __GT_t16569(validate__5346__auto____$1,input_checker16562__$1,owner__$1,stats__$1,data__$1,input_schema16561__$1,output_schema16560__$1,G__16564__$1,G__16565__$1,output_checker16563__$1,ufv____$1,meta16570){return (new poker_site.stats.t16569(validate__5346__auto____$1,input_checker16562__$1,owner__$1,stats__$1,data__$1,input_schema16561__$1,output_schema16560__$1,G__16564__$1,G__16565__$1,output_checker16563__$1,ufv____$1,meta16570));
});})(validate__5346__auto__,ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
}
return (new poker_site.stats.t16569(validate__5346__auto__,input_checker16562_16575,owner,stats,data,input_schema16561_16574,output_schema16560_16573,G__16564,G__16565,output_checker16563_16576,ufv___16572,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___16580 = output_checker16563_16576.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___16580))
{var error__5348__auto___16581 = temp__4126__auto___16580;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5348__auto___16581)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16560_16573,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16581], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___16572,output_schema16560_16573,input_schema16561_16574,input_checker16562_16575,output_checker16563_16576))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.stats),schema.core.make_fn_schema.call(null,output_schema16560_16573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16561_16574], null)));
poker_site.stats.__GT_stats = (function() {
var __GT_stats = null;
var __GT_stats__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.stats.stats,cursor__7114__auto__);
});
var __GT_stats__2 = (function (cursor__7114__auto__,m16559){return om.core.build.call(null,poker_site.stats.stats,cursor__7114__auto__,m16559);
});
__GT_stats = function(cursor__7114__auto__,m16559){
switch(arguments.length){
case 1:
return __GT_stats__1.call(this,cursor__7114__auto__);
case 2:
return __GT_stats__2.call(this,cursor__7114__auto__,m16559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats.cljs$core$IFn$_invoke$arity$1 = __GT_stats__1;
__GT_stats.cljs$core$IFn$_invoke$arity$2 = __GT_stats__2;
return __GT_stats;
})()
;

//# sourceMappingURL=stats.js.map