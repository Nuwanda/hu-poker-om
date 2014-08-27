// Compiled by ClojureScript 0.0-2322
goog.provide('poker_site.stats');
goog.require('cljs.core');
goog.require('poker_site.util');
goog.require('poker_site.util');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
var ufv___10264 = schema.utils.use_fn_validation;var output_schema10252_10265 = schema.core.Any;var input_schema10253_10266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10254_10267 = schema.core.checker.call(null,input_schema10253_10266);var output_checker10255_10268 = schema.core.checker.call(null,output_schema10252_10265);/**
* Inputs: [data owner]
*/
poker_site.stats.player_stats = ((function (ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function player_stats(G__10256,G__10257){var validate__5362__auto__ = ufv___10264.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___10269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10256,G__10257], null);var temp__4126__auto___10270 = input_checker10254_10267.call(null,args__5363__auto___10269);if(cljs.core.truth_(temp__4126__auto___10270))
{var error__5364__auto___10271 = temp__4126__auto___10270;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5364__auto___10271)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10253_10266,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___10269,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___10271], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__10256;var owner = G__10257;while(true){
if(typeof poker_site.stats.t10261 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t10261 = (function (player_stats,owner,data,G__10256,input_schema10253,output_checker10255,output_schema10252,validate__5362__auto__,input_checker10254,ufv__,G__10257,meta10262){
this.player_stats = player_stats;
this.owner = owner;
this.data = data;
this.G__10256 = G__10256;
this.input_schema10253 = input_schema10253;
this.output_checker10255 = output_checker10255;
this.output_schema10252 = output_schema10252;
this.validate__5362__auto__ = validate__5362__auto__;
this.input_checker10254 = input_checker10254;
this.ufv__ = ufv__;
this.G__10257 = G__10257;
this.meta10262 = meta10262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t10261.cljs$lang$type = true;
poker_site.stats.t10261.cljs$lang$ctorStr = "poker-site.stats/t10261";
poker_site.stats.t10261.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.stats/t10261");
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
poker_site.stats.t10261.prototype.om$core$IRender$ = true;
poker_site.stats.t10261.prototype.om$core$IRender$render$arity$1 = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "panel panel-default"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}, "className": "panel-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data))))],null))))],null)))),cljs.core.apply.call(null,React.DOM.ul,{"style": {"text-align": "center"}, "className": "list-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Stack: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[("BI's: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.span({"onClick": ((function (___$1,validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (___$2){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"bis","bis",-1311072700),cljs.core.inc);
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"stack","stack",-793405930),((function (___$1,validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (p1__10250_SHARP_){return ((100) + p1__10250_SHARP_);
});})(___$1,validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
);
});})(___$1,validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
, "className": "glyphicon glyphicon-plus pull-right"})],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Win/Loss: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data) - (new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data) * (100)))))],null))))],null))))],null))));
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
poker_site.stats.t10261.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t10261.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (_){var self__ = this;
var ___$1 = this;return "player-stats";
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
poker_site.stats.t10261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (_10263){var self__ = this;
var _10263__$1 = this;return self__.meta10262;
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
poker_site.stats.t10261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function (_10263,meta10262__$1){var self__ = this;
var _10263__$1 = this;return (new poker_site.stats.t10261(self__.player_stats,self__.owner,self__.data,self__.G__10256,self__.input_schema10253,self__.output_checker10255,self__.output_schema10252,self__.validate__5362__auto__,self__.input_checker10254,self__.ufv__,self__.G__10257,meta10262__$1));
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
poker_site.stats.__GT_t10261 = ((function (validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268){
return (function __GT_t10261(player_stats__$1,owner__$1,data__$1,G__10256__$1,input_schema10253__$1,output_checker10255__$1,output_schema10252__$1,validate__5362__auto____$1,input_checker10254__$1,ufv____$1,G__10257__$1,meta10262){return (new poker_site.stats.t10261(player_stats__$1,owner__$1,data__$1,G__10256__$1,input_schema10253__$1,output_checker10255__$1,output_schema10252__$1,validate__5362__auto____$1,input_checker10254__$1,ufv____$1,G__10257__$1,meta10262));
});})(validate__5362__auto__,ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
}
return (new poker_site.stats.t10261(player_stats,owner,data,G__10256,input_schema10253_10266,output_checker10255_10268,output_schema10252_10265,validate__5362__auto__,input_checker10254_10267,ufv___10264,G__10257,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___10272 = output_checker10255_10268.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___10272))
{var error__5364__auto___10273 = temp__4126__auto___10272;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5364__auto___10273)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10252_10265,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___10273], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___10264,output_schema10252_10265,input_schema10253_10266,input_checker10254_10267,output_checker10255_10268))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.player_stats),schema.core.make_fn_schema.call(null,output_schema10252_10265,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10253_10266], null)));
poker_site.stats.__GT_player_stats = (function() {
var __GT_player_stats = null;
var __GT_player_stats__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7130__auto__);
});
var __GT_player_stats__2 = (function (cursor__7130__auto__,m10251){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7130__auto__,m10251);
});
__GT_player_stats = function(cursor__7130__auto__,m10251){
switch(arguments.length){
case 1:
return __GT_player_stats__1.call(this,cursor__7130__auto__);
case 2:
return __GT_player_stats__2.call(this,cursor__7130__auto__,m10251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_stats.cljs$core$IFn$_invoke$arity$1 = __GT_player_stats__1;
__GT_player_stats.cljs$core$IFn$_invoke$arity$2 = __GT_player_stats__2;
return __GT_player_stats;
})()
;
var ufv___10287 = schema.utils.use_fn_validation;var output_schema10275_10288 = schema.core.Any;var input_schema10276_10289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10277_10290 = schema.core.checker.call(null,input_schema10276_10289);var output_checker10278_10291 = schema.core.checker.call(null,output_schema10275_10288);/**
* Inputs: [data owner]
*/
poker_site.stats.stats = ((function (ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function stats(G__10279,G__10280){var validate__5362__auto__ = ufv___10287.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___10292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10279,G__10280], null);var temp__4126__auto___10293 = input_checker10277_10290.call(null,args__5363__auto___10292);if(cljs.core.truth_(temp__4126__auto___10293))
{var error__5364__auto___10294 = temp__4126__auto___10293;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5364__auto___10294)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10276_10289,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___10292,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___10294], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__10279;var owner = G__10280;while(true){
if(typeof poker_site.stats.t10284 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t10284 = (function (input_checker10277,owner,stats,G__10279,data,input_schema10276,G__10280,validate__5362__auto__,output_schema10275,output_checker10278,ufv__,meta10285){
this.input_checker10277 = input_checker10277;
this.owner = owner;
this.stats = stats;
this.G__10279 = G__10279;
this.data = data;
this.input_schema10276 = input_schema10276;
this.G__10280 = G__10280;
this.validate__5362__auto__ = validate__5362__auto__;
this.output_schema10275 = output_schema10275;
this.output_checker10278 = output_checker10278;
this.ufv__ = ufv__;
this.meta10285 = meta10285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t10284.cljs$lang$type = true;
poker_site.stats.t10284.cljs$lang$ctorStr = "poker-site.stats/t10284";
poker_site.stats.t10284.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.stats/t10284");
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
poker_site.stats.t10284.prototype.om$core$IRender$ = true;
poker_site.stats.t10284.prototype.om$core$IRender$render$arity$1 = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Challenge Status"),cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Hands Played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3 col-md-offset-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null))))],null))));
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
poker_site.stats.t10284.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t10284.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function (_){var self__ = this;
var ___$1 = this;return "stats-view";
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
poker_site.stats.t10284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function (_10286){var self__ = this;
var _10286__$1 = this;return self__.meta10285;
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
poker_site.stats.t10284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function (_10286,meta10285__$1){var self__ = this;
var _10286__$1 = this;return (new poker_site.stats.t10284(self__.input_checker10277,self__.owner,self__.stats,self__.G__10279,self__.data,self__.input_schema10276,self__.G__10280,self__.validate__5362__auto__,self__.output_schema10275,self__.output_checker10278,self__.ufv__,meta10285__$1));
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
poker_site.stats.__GT_t10284 = ((function (validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291){
return (function __GT_t10284(input_checker10277__$1,owner__$1,stats__$1,G__10279__$1,data__$1,input_schema10276__$1,G__10280__$1,validate__5362__auto____$1,output_schema10275__$1,output_checker10278__$1,ufv____$1,meta10285){return (new poker_site.stats.t10284(input_checker10277__$1,owner__$1,stats__$1,G__10279__$1,data__$1,input_schema10276__$1,G__10280__$1,validate__5362__auto____$1,output_schema10275__$1,output_checker10278__$1,ufv____$1,meta10285));
});})(validate__5362__auto__,ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
}
return (new poker_site.stats.t10284(input_checker10277_10290,owner,stats,G__10279,data,input_schema10276_10289,G__10280,validate__5362__auto__,output_schema10275_10288,output_checker10278_10291,ufv___10287,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___10295 = output_checker10278_10291.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___10295))
{var error__5364__auto___10296 = temp__4126__auto___10295;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5364__auto___10296)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10275_10288,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___10296], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___10287,output_schema10275_10288,input_schema10276_10289,input_checker10277_10290,output_checker10278_10291))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.stats),schema.core.make_fn_schema.call(null,output_schema10275_10288,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10276_10289], null)));
poker_site.stats.__GT_stats = (function() {
var __GT_stats = null;
var __GT_stats__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.stats.stats,cursor__7130__auto__);
});
var __GT_stats__2 = (function (cursor__7130__auto__,m10274){return om.core.build.call(null,poker_site.stats.stats,cursor__7130__auto__,m10274);
});
__GT_stats = function(cursor__7130__auto__,m10274){
switch(arguments.length){
case 1:
return __GT_stats__1.call(this,cursor__7130__auto__);
case 2:
return __GT_stats__2.call(this,cursor__7130__auto__,m10274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats.cljs$core$IFn$_invoke$arity$1 = __GT_stats__1;
__GT_stats.cljs$core$IFn$_invoke$arity$2 = __GT_stats__2;
return __GT_stats;
})()
;

//# sourceMappingURL=stats.js.map