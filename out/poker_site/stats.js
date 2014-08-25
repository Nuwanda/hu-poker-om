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
var ufv___10231 = schema.utils.use_fn_validation;var output_schema10219_10232 = schema.core.Any;var input_schema10220_10233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10221_10234 = schema.core.checker.call(null,input_schema10220_10233);var output_checker10222_10235 = schema.core.checker.call(null,output_schema10219_10232);/**
* Inputs: [data owner]
*/
poker_site.stats.player_stats = ((function (ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function player_stats(G__10223,G__10224){var validate__5346__auto__ = ufv___10231.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___10236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10223,G__10224], null);var temp__4126__auto___10237 = input_checker10221_10234.call(null,args__5347__auto___10236);if(cljs.core.truth_(temp__4126__auto___10237))
{var error__5348__auto___10238 = temp__4126__auto___10237;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5348__auto___10238)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10220_10233,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___10236,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___10238], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__10223;var owner = G__10224;while(true){
if(typeof poker_site.stats.t10228 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t10228 = (function (G__10224,validate__5346__auto__,player_stats,owner,output_schema10219,data,G__10223,input_schema10220,input_checker10221,output_checker10222,ufv__,meta10229){
this.G__10224 = G__10224;
this.validate__5346__auto__ = validate__5346__auto__;
this.player_stats = player_stats;
this.owner = owner;
this.output_schema10219 = output_schema10219;
this.data = data;
this.G__10223 = G__10223;
this.input_schema10220 = input_schema10220;
this.input_checker10221 = input_checker10221;
this.output_checker10222 = output_checker10222;
this.ufv__ = ufv__;
this.meta10229 = meta10229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t10228.cljs$lang$type = true;
poker_site.stats.t10228.cljs$lang$ctorStr = "poker-site.stats/t10228";
poker_site.stats.t10228.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.stats/t10228");
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
poker_site.stats.t10228.prototype.om$core$IRender$ = true;
poker_site.stats.t10228.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"className": "panel panel-default"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "panel-heading"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}, "className": "panel-title"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(self__.data,("Player "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.data))))],null))))],null)))),cljs.core.apply.call(null,React.DOM.ul,{"style": {"text-align": "center"}, "className": "list-group"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Stack: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[("BI's: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data))),React.DOM.span({"onClick": ((function (___$1,validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (___$2){om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"bis","bis",-1311072700),cljs.core.inc);
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"stack","stack",-793405930),((function (___$1,validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (p1__10217_SHARP_){return ((100) + p1__10217_SHARP_);
});})(___$1,validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
);
});})(___$1,validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
, "className": "glyphicon glyphicon-plus pull-right"})],null)))),cljs.core.apply.call(null,React.DOM.li,{"className": "list-group-item"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Win/Loss: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(self__.data) - (new cljs.core.Keyword(null,"bis","bis",-1311072700).cljs$core$IFn$_invoke$arity$1(self__.data) * (100)))))],null))))],null))))],null))));
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
poker_site.stats.t10228.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t10228.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (_){var self__ = this;
var ___$1 = this;return "player-stats";
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
poker_site.stats.t10228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (_10230){var self__ = this;
var _10230__$1 = this;return self__.meta10229;
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
poker_site.stats.t10228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function (_10230,meta10229__$1){var self__ = this;
var _10230__$1 = this;return (new poker_site.stats.t10228(self__.G__10224,self__.validate__5346__auto__,self__.player_stats,self__.owner,self__.output_schema10219,self__.data,self__.G__10223,self__.input_schema10220,self__.input_checker10221,self__.output_checker10222,self__.ufv__,meta10229__$1));
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
poker_site.stats.__GT_t10228 = ((function (validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235){
return (function __GT_t10228(G__10224__$1,validate__5346__auto____$1,player_stats__$1,owner__$1,output_schema10219__$1,data__$1,G__10223__$1,input_schema10220__$1,input_checker10221__$1,output_checker10222__$1,ufv____$1,meta10229){return (new poker_site.stats.t10228(G__10224__$1,validate__5346__auto____$1,player_stats__$1,owner__$1,output_schema10219__$1,data__$1,G__10223__$1,input_schema10220__$1,input_checker10221__$1,output_checker10222__$1,ufv____$1,meta10229));
});})(validate__5346__auto__,ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
}
return (new poker_site.stats.t10228(G__10224,validate__5346__auto__,player_stats,owner,output_schema10219_10232,data,G__10223,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235,ufv___10231,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___10239 = output_checker10222_10235.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___10239))
{var error__5348__auto___10240 = temp__4126__auto___10239;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"player-stats","player-stats",-234368317,null),cljs.core.pr_str.call(null,error__5348__auto___10240)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10219_10232,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___10240], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___10231,output_schema10219_10232,input_schema10220_10233,input_checker10221_10234,output_checker10222_10235))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.player_stats),schema.core.make_fn_schema.call(null,output_schema10219_10232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10220_10233], null)));
poker_site.stats.__GT_player_stats = (function() {
var __GT_player_stats = null;
var __GT_player_stats__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7114__auto__);
});
var __GT_player_stats__2 = (function (cursor__7114__auto__,m10218){return om.core.build.call(null,poker_site.stats.player_stats,cursor__7114__auto__,m10218);
});
__GT_player_stats = function(cursor__7114__auto__,m10218){
switch(arguments.length){
case 1:
return __GT_player_stats__1.call(this,cursor__7114__auto__);
case 2:
return __GT_player_stats__2.call(this,cursor__7114__auto__,m10218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_player_stats.cljs$core$IFn$_invoke$arity$1 = __GT_player_stats__1;
__GT_player_stats.cljs$core$IFn$_invoke$arity$2 = __GT_player_stats__2;
return __GT_player_stats;
})()
;
var ufv___10254 = schema.utils.use_fn_validation;var output_schema10242_10255 = schema.core.Any;var input_schema10243_10256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker10244_10257 = schema.core.checker.call(null,input_schema10243_10256);var output_checker10245_10258 = schema.core.checker.call(null,output_schema10242_10255);/**
* Inputs: [data owner]
*/
poker_site.stats.stats = ((function (ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function stats(G__10246,G__10247){var validate__5346__auto__ = ufv___10254.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___10259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__10246,G__10247], null);var temp__4126__auto___10260 = input_checker10244_10257.call(null,args__5347__auto___10259);if(cljs.core.truth_(temp__4126__auto___10260))
{var error__5348__auto___10261 = temp__4126__auto___10260;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5348__auto___10261)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema10243_10256,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___10259,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___10261], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__10246;var owner = G__10247;while(true){
if(typeof poker_site.stats.t10251 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.stats.t10251 = (function (validate__5346__auto__,output_checker10245,owner,stats,input_checker10244,data,output_schema10242,G__10247,G__10246,input_schema10243,ufv__,meta10252){
this.validate__5346__auto__ = validate__5346__auto__;
this.output_checker10245 = output_checker10245;
this.owner = owner;
this.stats = stats;
this.input_checker10244 = input_checker10244;
this.data = data;
this.output_schema10242 = output_schema10242;
this.G__10247 = G__10247;
this.G__10246 = G__10246;
this.input_schema10243 = input_schema10243;
this.ufv__ = ufv__;
this.meta10252 = meta10252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.stats.t10251.cljs$lang$type = true;
poker_site.stats.t10251.cljs$lang$ctorStr = "poker-site.stats/t10251";
poker_site.stats.t10251.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.stats/t10251");
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
poker_site.stats.t10251.prototype.om$core$IRender$ = true;
poker_site.stats.t10251.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,{"style": poker_site.util.display.call(null,new cljs.core.Keyword(null,"logged","logged",1726980793).cljs$core$IFn$_invoke$arity$1(self__.data)), "className": "row"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h2({"style": {"text-align": "center"}},"Challenge Status"),cljs.core.apply.call(null,React.DOM.h4,{"style": {"text-align": "center"}},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("Hands Played: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hand-count","hand-count",852355864).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data))))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3 col-md-offset-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player1","player1",-1491573636).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "col-md-3"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.stats.player_stats,new cljs.core.Keyword(null,"player2","player2",-226422775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721).cljs$core$IFn$_invoke$arity$1(self__.data)))],null))))],null))));
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
poker_site.stats.t10251.prototype.om$core$IDisplayName$ = true;
poker_site.stats.t10251.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function (_){var self__ = this;
var ___$1 = this;return "stats-view";
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
poker_site.stats.t10251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function (_10253){var self__ = this;
var _10253__$1 = this;return self__.meta10252;
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
poker_site.stats.t10251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function (_10253,meta10252__$1){var self__ = this;
var _10253__$1 = this;return (new poker_site.stats.t10251(self__.validate__5346__auto__,self__.output_checker10245,self__.owner,self__.stats,self__.input_checker10244,self__.data,self__.output_schema10242,self__.G__10247,self__.G__10246,self__.input_schema10243,self__.ufv__,meta10252__$1));
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
poker_site.stats.__GT_t10251 = ((function (validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258){
return (function __GT_t10251(validate__5346__auto____$1,output_checker10245__$1,owner__$1,stats__$1,input_checker10244__$1,data__$1,output_schema10242__$1,G__10247__$1,G__10246__$1,input_schema10243__$1,ufv____$1,meta10252){return (new poker_site.stats.t10251(validate__5346__auto____$1,output_checker10245__$1,owner__$1,stats__$1,input_checker10244__$1,data__$1,output_schema10242__$1,G__10247__$1,G__10246__$1,input_schema10243__$1,ufv____$1,meta10252));
});})(validate__5346__auto__,ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
}
return (new poker_site.stats.t10251(validate__5346__auto__,output_checker10245_10258,owner,stats,input_checker10244_10257,data,output_schema10242_10255,G__10247,G__10246,input_schema10243_10256,ufv___10254,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___10262 = output_checker10245_10258.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___10262))
{var error__5348__auto___10263 = temp__4126__auto___10262;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"stats","stats",1554888516,null),cljs.core.pr_str.call(null,error__5348__auto___10263)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema10242_10255,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___10263], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___10254,output_schema10242_10255,input_schema10243_10256,input_checker10244_10257,output_checker10245_10258))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.stats.stats),schema.core.make_fn_schema.call(null,output_schema10242_10255,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema10243_10256], null)));
poker_site.stats.__GT_stats = (function() {
var __GT_stats = null;
var __GT_stats__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.stats.stats,cursor__7114__auto__);
});
var __GT_stats__2 = (function (cursor__7114__auto__,m10241){return om.core.build.call(null,poker_site.stats.stats,cursor__7114__auto__,m10241);
});
__GT_stats = function(cursor__7114__auto__,m10241){
switch(arguments.length){
case 1:
return __GT_stats__1.call(this,cursor__7114__auto__);
case 2:
return __GT_stats__2.call(this,cursor__7114__auto__,m10241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_stats.cljs$core$IFn$_invoke$arity$1 = __GT_stats__1;
__GT_stats.cljs$core$IFn$_invoke$arity$2 = __GT_stats__2;
return __GT_stats;
})()
;

//# sourceMappingURL=stats.js.map