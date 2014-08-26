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
poker_site.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"logged","logged",1726980793),false,new cljs.core.Keyword(null,"hu-state","hu-state",-1774247721),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hand-count","hand-count",852355864),(192),new cljs.core.Keyword(null,"player1","player1",-1491573636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"stack","stack",-793405930),(228),new cljs.core.Keyword(null,"bis","bis",-1311072700),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Maia"], null),new cljs.core.Keyword(null,"player2","player2",-226422775),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"stack","stack",-793405930),(372),new cljs.core.Keyword(null,"bis","bis",-1311072700),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Pedro Lopes"], null)], null)], null));
var ufv___22653 = schema.utils.use_fn_validation;var output_schema22641_22654 = schema.core.Any;var input_schema22642_22655 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker22643_22656 = schema.core.checker.call(null,input_schema22642_22655);var output_checker22644_22657 = schema.core.checker.call(null,output_schema22641_22654);/**
* Inputs: [data owner]
*/
poker_site.core.teste = ((function (ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function teste(G__22645,G__22646){var validate__5346__auto__ = ufv___22653.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___22658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22645,G__22646], null);var temp__4126__auto___22659 = input_checker22643_22656.call(null,args__5347__auto___22658);if(cljs.core.truth_(temp__4126__auto___22659))
{var error__5348__auto___22660 = temp__4126__auto___22659;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5348__auto___22660)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22642_22655,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___22658,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22660], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__22645;var owner = G__22646;while(true){
if(typeof poker_site.core.t22650 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.core.t22650 = (function (validate__5346__auto__,output_schema22641,owner,data,teste,input_schema22642,G__22646,output_checker22644,input_checker22643,G__22645,ufv__,meta22651){
this.validate__5346__auto__ = validate__5346__auto__;
this.output_schema22641 = output_schema22641;
this.owner = owner;
this.data = data;
this.teste = teste;
this.input_schema22642 = input_schema22642;
this.G__22646 = G__22646;
this.output_checker22644 = output_checker22644;
this.input_checker22643 = input_checker22643;
this.G__22645 = G__22645;
this.ufv__ = ufv__;
this.meta22651 = meta22651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.core.t22650.cljs$lang$type = true;
poker_site.core.t22650.cljs$lang$ctorStr = "poker-site.core/t22650";
poker_site.core.t22650.cljs$lang$ctorPrWriter = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.core/t22650");
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
poker_site.core.t22650.prototype.om$core$IRender$ = true;
poker_site.core.t22650.prototype.om$core$IRender$render$arity$1 = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,poker_site.stats.stats,self__.data),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,poker_site.hand_result.hand_result,self__.data)],null)));
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
poker_site.core.t22650.prototype.om$core$IDisplayName$ = true;
poker_site.core.t22650.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function (_){var self__ = this;
var ___$1 = this;return "root";
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
poker_site.core.t22650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function (_22652){var self__ = this;
var _22652__$1 = this;return self__.meta22651;
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
poker_site.core.t22650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function (_22652,meta22651__$1){var self__ = this;
var _22652__$1 = this;return (new poker_site.core.t22650(self__.validate__5346__auto__,self__.output_schema22641,self__.owner,self__.data,self__.teste,self__.input_schema22642,self__.G__22646,self__.output_checker22644,self__.input_checker22643,self__.G__22645,self__.ufv__,meta22651__$1));
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
poker_site.core.__GT_t22650 = ((function (validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657){
return (function __GT_t22650(validate__5346__auto____$1,output_schema22641__$1,owner__$1,data__$1,teste__$1,input_schema22642__$1,G__22646__$1,output_checker22644__$1,input_checker22643__$1,G__22645__$1,ufv____$1,meta22651){return (new poker_site.core.t22650(validate__5346__auto____$1,output_schema22641__$1,owner__$1,data__$1,teste__$1,input_schema22642__$1,G__22646__$1,output_checker22644__$1,input_checker22643__$1,G__22645__$1,ufv____$1,meta22651));
});})(validate__5346__auto__,ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
}
return (new poker_site.core.t22650(validate__5346__auto__,output_schema22641_22654,owner,data,teste,input_schema22642_22655,G__22646,output_checker22644_22657,input_checker22643_22656,G__22645,ufv___22653,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___22661 = output_checker22644_22657.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___22661))
{var error__5348__auto___22662 = temp__4126__auto___22661;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"teste","teste",-1510588056,null),cljs.core.pr_str.call(null,error__5348__auto___22662)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22641_22654,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___22662], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___22653,output_schema22641_22654,input_schema22642_22655,input_checker22643_22656,output_checker22644_22657))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.core.teste),schema.core.make_fn_schema.call(null,output_schema22641_22654,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22642_22655], null)));
poker_site.core.__GT_teste = (function() {
var __GT_teste = null;
var __GT_teste__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.core.teste,cursor__7114__auto__);
});
var __GT_teste__2 = (function (cursor__7114__auto__,m22640){return om.core.build.call(null,poker_site.core.teste,cursor__7114__auto__,m22640);
});
__GT_teste = function(cursor__7114__auto__,m22640){
switch(arguments.length){
case 1:
return __GT_teste__1.call(this,cursor__7114__auto__);
case 2:
return __GT_teste__2.call(this,cursor__7114__auto__,m22640);
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