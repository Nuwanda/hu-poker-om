// Compiled by ClojureScript 0.0-2322
goog.provide('poker_site.core');
goog.require('cljs.core');
goog.require('poker_site.hand_counter');
goog.require('poker_site.hand_result');
goog.require('poker_site.stats');
goog.require('poker_site.hand_result');
goog.require('om_tools.dom');
goog.require('poker_site.facebook');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('poker_site.hand_counter');
goog.require('om.core');
goog.require('om.core');
goog.require('poker_site.stats');
goog.require('poker_site.facebook');
cljs.core.enable_console_print_BANG_.call(null);
poker_site.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logged","logged",1726980793),false,new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hand-count","hand-count",852355864),(192),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"stack","stack",-793405930),(228),new cljs.core.Keyword(null,"bis","bis",-1311072700),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Maia"], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"stack","stack",-793405930),(372),new cljs.core.Keyword(null,"bis","bis",-1311072700),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Lopes"], null)], null)], null));
var ufv___14314 = schema.utils.use_fn_validation;var output_schema14302_14315 = schema.core.Any;var input_schema14303_14316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker14304_14317 = schema.core.checker.call(null,input_schema14303_14316);var output_checker14305_14318 = schema.core.checker.call(null,output_schema14302_14315);/**
* Inputs: [data owner]
*/
poker_site.core.teste = ((function (ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function teste(G__14306,G__14307){var validate__5362__auto__ = ufv___14314.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14306,G__14307], null);var temp__4126__auto___14320 = input_checker14304_14317.call(null,args__5363__auto___14319);if(cljs.core.truth_(temp__4126__auto___14320))
{var error__5364__auto___14321 = temp__4126__auto___14320;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5364__auto___14321)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14303_14316,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14319,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14321], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__14306;var owner = G__14307;while(true){
if(typeof poker_site.core.t14311 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.core.t14311 = (function (owner,data,teste,G__14307,validate__5362__auto__,G__14306,input_schema14303,input_checker14304,output_checker14305,ufv__,output_schema14302,meta14312){
this.owner = owner;
this.data = data;
this.teste = teste;
this.G__14307 = G__14307;
this.validate__5362__auto__ = validate__5362__auto__;
this.G__14306 = G__14306;
this.input_schema14303 = input_schema14303;
this.input_checker14304 = input_checker14304;
this.output_checker14305 = output_checker14305;
this.ufv__ = ufv__;
this.output_schema14302 = output_schema14302;
this.meta14312 = meta14312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.core.t14311.cljs$lang$type = true;
poker_site.core.t14311.cljs$lang$ctorStr = "poker-site.core/t14311";
poker_site.core.t14311.cljs$lang$ctorPrWriter = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.core/t14311");
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
poker_site.core.t14311.prototype.om$core$IRender$ = true;
poker_site.core.t14311.prototype.om$core$IRender$render$arity$1 = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,poker_site.stats.stats,self__.data),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.hand_result,self__.data)],null)));
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
poker_site.core.t14311.prototype.om$core$IDisplayName$ = true;
poker_site.core.t14311.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function (_){var self__ = this;
var ___$1 = this;return "root";
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
poker_site.core.t14311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function (_14313){var self__ = this;
var _14313__$1 = this;return self__.meta14312;
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
poker_site.core.t14311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function (_14313,meta14312__$1){var self__ = this;
var _14313__$1 = this;return (new poker_site.core.t14311(self__.owner,self__.data,self__.teste,self__.G__14307,self__.validate__5362__auto__,self__.G__14306,self__.input_schema14303,self__.input_checker14304,self__.output_checker14305,self__.ufv__,self__.output_schema14302,meta14312__$1));
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
poker_site.core.__GT_t14311 = ((function (validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318){
return (function __GT_t14311(owner__$1,data__$1,teste__$1,G__14307__$1,validate__5362__auto____$1,G__14306__$1,input_schema14303__$1,input_checker14304__$1,output_checker14305__$1,ufv____$1,output_schema14302__$1,meta14312){return (new poker_site.core.t14311(owner__$1,data__$1,teste__$1,G__14307__$1,validate__5362__auto____$1,G__14306__$1,input_schema14303__$1,input_checker14304__$1,output_checker14305__$1,ufv____$1,output_schema14302__$1,meta14312));
});})(validate__5362__auto__,ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
}
return (new poker_site.core.t14311(owner,data,teste,G__14307,validate__5362__auto__,G__14306,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318,ufv___14314,output_schema14302_14315,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14322 = output_checker14305_14318.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14322))
{var error__5364__auto___14323 = temp__4126__auto___14322;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5364__auto___14323)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14302_14315,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14323], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14314,output_schema14302_14315,input_schema14303_14316,input_checker14304_14317,output_checker14305_14318))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.core.teste),schema.core.make_fn_schema.call(null,output_schema14302_14315,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14303_14316], null)));
poker_site.core.__GT_teste = (function() {
var __GT_teste = null;
var __GT_teste__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.core.teste,cursor__7130__auto__);
});
var __GT_teste__2 = (function (cursor__7130__auto__,m14301){return om.core.build.call(null,poker_site.core.teste,cursor__7130__auto__,m14301);
});
__GT_teste = function(cursor__7130__auto__,m14301){
switch(arguments.length){
case 1:
return __GT_teste__1.call(this,cursor__7130__auto__);
case 2:
return __GT_teste__2.call(this,cursor__7130__auto__,m14301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_teste.cljs$core$IFn$_invoke$arity$1 = __GT_teste__1;
__GT_teste.cljs$core$IFn$_invoke$arity$2 = __GT_teste__2;
return __GT_teste;
})()
;
om.core.root.call(null,poker_site.core.teste,poker_site.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
om.core.root.call(null,poker_site.facebook.login_button,poker_site.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("fb-button"),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"appId","appId",1841138644),(304922749669792)], null)], null));

//# sourceMappingURL=core.js.map