// Compiled by ClojureScript 0.0-2280
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
poker_site.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logged","logged",1726980793),false,new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hand-count","hand-count",852355864),(35),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"stack","stack",-793405930),(100),new cljs.core.Keyword(null,"bis","bis",-1311072700),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Maia"], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"stack","stack",-793405930),(200),new cljs.core.Keyword(null,"bis","bis",-1311072700),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Lopes"], null)], null)], null));
var ufv___16478 = schema.utils.use_fn_validation;var output_schema16466_16479 = schema.core.Any;var input_schema16467_16480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker16468_16481 = schema.core.checker.call(null,input_schema16467_16480);var output_checker16469_16482 = schema.core.checker.call(null,output_schema16466_16479);/**
* Inputs: [data owner]
*/
poker_site.core.teste = ((function (ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function teste(G__16470,G__16471){var validate__5346__auto__ = ufv___16478.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___16483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16470,G__16471], null);var temp__4126__auto___16484 = input_checker16468_16481.call(null,args__5347__auto___16483);if(cljs.core.truth_(temp__4126__auto___16484))
{var error__5348__auto___16485 = temp__4126__auto___16484;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5348__auto___16485)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16467_16480,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___16483,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16485], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__16470;var owner = G__16471;while(true){
if(typeof poker_site.core.t16475 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.core.t16475 = (function (validate__5346__auto__,input_schema16467,owner,data,teste,input_checker16468,G__16471,output_checker16469,ufv__,G__16470,output_schema16466,meta16476){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_schema16467 = input_schema16467;
this.owner = owner;
this.data = data;
this.teste = teste;
this.input_checker16468 = input_checker16468;
this.G__16471 = G__16471;
this.output_checker16469 = output_checker16469;
this.ufv__ = ufv__;
this.G__16470 = G__16470;
this.output_schema16466 = output_schema16466;
this.meta16476 = meta16476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.core.t16475.cljs$lang$type = true;
poker_site.core.t16475.cljs$lang$ctorStr = "poker-site.core/t16475";
poker_site.core.t16475.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.core/t16475");
});})(validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
poker_site.core.t16475.prototype.om$core$IRender$ = true;
poker_site.core.t16475.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,poker_site.stats.stats,self__.data),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.hand_result,self__.data)],null)));
});})(validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
poker_site.core.t16475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function (_16477){var self__ = this;
var _16477__$1 = this;return self__.meta16476;
});})(validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
poker_site.core.t16475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function (_16477,meta16476__$1){var self__ = this;
var _16477__$1 = this;return (new poker_site.core.t16475(self__.validate__5346__auto__,self__.input_schema16467,self__.owner,self__.data,self__.teste,self__.input_checker16468,self__.G__16471,self__.output_checker16469,self__.ufv__,self__.G__16470,self__.output_schema16466,meta16476__$1));
});})(validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
poker_site.core.__GT_t16475 = ((function (validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482){
return (function __GT_t16475(validate__5346__auto____$1,input_schema16467__$1,owner__$1,data__$1,teste__$1,input_checker16468__$1,G__16471__$1,output_checker16469__$1,ufv____$1,G__16470__$1,output_schema16466__$1,meta16476){return (new poker_site.core.t16475(validate__5346__auto____$1,input_schema16467__$1,owner__$1,data__$1,teste__$1,input_checker16468__$1,G__16471__$1,output_checker16469__$1,ufv____$1,G__16470__$1,output_schema16466__$1,meta16476));
});})(validate__5346__auto__,ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
}
return (new poker_site.core.t16475(validate__5346__auto__,input_schema16467_16480,owner,data,teste,input_checker16468_16481,G__16471,output_checker16469_16482,ufv___16478,G__16470,output_schema16466_16479,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___16486 = output_checker16469_16482.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___16486))
{var error__5348__auto___16487 = temp__4126__auto___16486;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5348__auto___16487)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16466_16479,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___16487], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___16478,output_schema16466_16479,input_schema16467_16480,input_checker16468_16481,output_checker16469_16482))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.core.teste),schema.core.make_fn_schema.call(null,output_schema16466_16479,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16467_16480], null)));
poker_site.core.__GT_teste = (function() {
var __GT_teste = null;
var __GT_teste__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.core.teste,cursor__7114__auto__);
});
var __GT_teste__2 = (function (cursor__7114__auto__,m16465){return om.core.build.call(null,poker_site.core.teste,cursor__7114__auto__,m16465);
});
__GT_teste = function(cursor__7114__auto__,m16465){
switch(arguments.length){
case 1:
return __GT_teste__1.call(this,cursor__7114__auto__);
case 2:
return __GT_teste__2.call(this,cursor__7114__auto__,m16465);
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