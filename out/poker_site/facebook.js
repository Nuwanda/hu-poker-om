// Compiled by ClojureScript 0.0-2280
goog.provide('poker_site.facebook');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
poker_site.facebook.wrap_keywordize_key = (function wrap_keywordize_key(func){return (function (resp){return func.call(null,cljs.core.js__GT_clj.call(null,resp,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
});
poker_site.facebook.load_sdk = (function load_sdk(fb_async_init_cb){var doc = document;var uid = "fb-sdk-cljs";if(cljs.core.truth_(doc.getElementById(uid)))
{return null;
} else
{window.fbAsyncInit = fb_async_init_cb;
var script = doc.createElement("script");script.id = uid;
script.async = true;
script.src = "//connect.facebook.net/en_GB/sdk.js";
var fst_js = (doc.getElementsByTagName("script")[(0)]);var parent = fst_js.parentNode;return parent.insertBefore(script,fst_js);
}
});
/**
* ref: https://developers.facebook.com/docs/javascript/reference/FB.init/v2.0
*/
poker_site.facebook.init = (function init(params){return FB.init(cljs.core.clj__GT_js.call(null,params));
});
/**
* ref: https://developers.facebook.com/docs/javascript/reference/FB.api
*/
poker_site.facebook.api = (function() {
var api = null;
var api__2 = (function (path,something){return FB.api(path,((cljs.core.fn_QMARK_.call(null,something))?poker_site.facebook.wrap_keywordize_key.call(null,something):cljs.core.clj__GT_js.call(null,something)));
});
var api__3 = (function (path,something,resp_cb){return FB.api(path,cljs.core.clj__GT_js.call(null,something),poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
var api__4 = (function (path,method,params,resp_cb){return FB.api(path,method,cljs.core.clj__GT_js.call(null,params),poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
api = function(path,method,params,resp_cb){
switch(arguments.length){
case 2:
return api__2.call(this,path,method);
case 3:
return api__3.call(this,path,method,params);
case 4:
return api__4.call(this,path,method,params,resp_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
api.cljs$core$IFn$_invoke$arity$2 = api__2;
api.cljs$core$IFn$_invoke$arity$3 = api__3;
api.cljs$core$IFn$_invoke$arity$4 = api__4;
return api;
})()
;
/**
* ref: https://developers.facebook.com/docs/javascript/reference/FB.ui
*/
poker_site.facebook.ui = (function() {
var ui = null;
var ui__1 = (function (params){return FB.ui(cljs.core.clj__GT_js.call(null,params));
});
var ui__2 = (function (params,resp_cb){return FB.ui(cljs.core.clj__GT_js.call(null,params),poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
ui = function(params,resp_cb){
switch(arguments.length){
case 1:
return ui__1.call(this,params);
case 2:
return ui__2.call(this,params,resp_cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui.cljs$core$IFn$_invoke$arity$1 = ui__1;
ui.cljs$core$IFn$_invoke$arity$2 = ui__2;
return ui;
})()
;
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
*/
poker_site.facebook.get_login_status = (function get_login_status(resp_cb){return FB.getLoginStatus(poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
*/
poker_site.facebook.login = (function() {
var login = null;
var login__1 = (function (resp_cb){return login.call(null,resp_cb,cljs.core.PersistentArrayMap.EMPTY);
});
var login__2 = (function (resp_cb,opts){return FB.login(poker_site.facebook.wrap_keywordize_key.call(null,resp_cb),cljs.core.clj__GT_js.call(null,opts));
});
login = function(resp_cb,opts){
switch(arguments.length){
case 1:
return login__1.call(this,resp_cb);
case 2:
return login__2.call(this,resp_cb,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
login.cljs$core$IFn$_invoke$arity$1 = login__1;
login.cljs$core$IFn$_invoke$arity$2 = login__2;
return login;
})()
;
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.logout
*/
poker_site.facebook.logout = (function logout(resp_cb){return FB.logout(poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.getAuthResponse
*/
poker_site.facebook.get_auth_response = (function get_auth_response(resp_cb){return FB.getLoginStatus(poker_site.facebook.wrap_keywordize_key.call(null,resp_cb));
});
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.Event.subscribe/v2.0
*/
poker_site.facebook.Event_COLON_subscribe = (function Event_COLON_subscribe(event,cb){return FB.Event.subscribe(event,cb);
});
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.Event.unsubscribe
*/
poker_site.facebook.Event_COLON_unsubscribe = (function Event_COLON_unsubscribe(event,cb){return FB.Event.unsubscribe(event,cb);
});
/**
* ref: https://developers.facebook.com/docs/reference/javascript/FB.XFBML.parse
*/
poker_site.facebook.XFBML_COLON_parse = (function() {
var XFBML_COLON_parse = null;
var XFBML_COLON_parse__0 = (function (){return FB.XFBML.parse();
});
var XFBML_COLON_parse__1 = (function (dom){return FB.XFBML.parse(dom);
});
var XFBML_COLON_parse__2 = (function (dom,cb){return FB.XFBML.parse(dom,cb);
});
XFBML_COLON_parse = function(dom,cb){
switch(arguments.length){
case 0:
return XFBML_COLON_parse__0.call(this);
case 1:
return XFBML_COLON_parse__1.call(this,dom);
case 2:
return XFBML_COLON_parse__2.call(this,dom,cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
XFBML_COLON_parse.cljs$core$IFn$_invoke$arity$0 = XFBML_COLON_parse__0;
XFBML_COLON_parse.cljs$core$IFn$_invoke$arity$1 = XFBML_COLON_parse__1;
XFBML_COLON_parse.cljs$core$IFn$_invoke$arity$2 = XFBML_COLON_parse__2;
return XFBML_COLON_parse;
})()
;
var ufv___14474 = schema.utils.use_fn_validation;var output_schema14321_14475 = schema.core.Any;var input_schema14322_14476 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker14323_14477 = schema.core.checker.call(null,input_schema14322_14476);var output_checker14324_14478 = schema.core.checker.call(null,output_schema14321_14475);/**
* Inputs: [data owner {:keys [appId max-rows size show-faces? auto-login? on-login], :or {max-rows 1, size "large", show-faces? false, auto-login? true, on-login nil}}]
* 
* Om component for the facebook login button, takes a map of options
* as specificied by https://developers.facebook.com/docs/plugins/login-button (not scope)
*/
poker_site.facebook.login_button = ((function (ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function login_button(G__14325,G__14326,G__14327){var validate__5346__auto__ = ufv___14474.get_cell();if(cljs.core.truth_(validate__5346__auto__))
{var args__5347__auto___14479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14325,G__14326,G__14327], null);var temp__4126__auto___14480 = input_checker14323_14477.call(null,args__5347__auto___14479);if(cljs.core.truth_(temp__4126__auto___14480))
{var error__5348__auto___14481 = temp__4126__auto___14480;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"login-button","login-button",374459705,null),cljs.core.pr_str.call(null,error__5348__auto___14481)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14322_14476,new cljs.core.Keyword(null,"value","value",305978217),args__5347__auto___14479,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14481], null));
} else
{}
} else
{}
var o__5349__auto__ = (function (){var data = G__14325;var owner = G__14326;var G__14402 = G__14327;var map__14403 = G__14402;var map__14403__$1 = ((cljs.core.seq_QMARK_.call(null,map__14403))?cljs.core.apply.call(null,cljs.core.hash_map,map__14403):map__14403);var on_login = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"on-login","on-login",380212178),null);var auto_login_QMARK_ = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"auto-login?","auto-login?",390941802),true);var show_faces_QMARK_ = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"show-faces?","show-faces?",1914883275),false);var size = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"size","size",1098693007),"large");var max_rows = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(1));var appId = cljs.core.get.call(null,map__14403__$1,new cljs.core.Keyword(null,"appId","appId",1841138644));var data__$1 = data;var owner__$1 = owner;var G__14402__$1 = G__14402;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__14404 = G__14402__$1;var map__14404__$1 = ((cljs.core.seq_QMARK_.call(null,map__14404))?cljs.core.apply.call(null,cljs.core.hash_map,map__14404):map__14404);var on_login__$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"on-login","on-login",380212178),null);var auto_login_QMARK___$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"auto-login?","auto-login?",390941802),true);var show_faces_QMARK___$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"show-faces?","show-faces?",1914883275),false);var size__$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"size","size",1098693007),"large");var max_rows__$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(1));var appId__$1 = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"appId","appId",1841138644));if(typeof poker_site.facebook.t14405 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.facebook.t14405 = (function (validate__5346__auto__,input_schema14322,G__14327,owner,G__14325,data,G__14326,output_schema14321,map__14404,auto_login_QMARK_,output_checker14324,input_checker14323,show_faces_QMARK_,size,map__14403,login_button,on_login,max_rows,appId,ufv__,G__14402,meta14406){
this.validate__5346__auto__ = validate__5346__auto__;
this.input_schema14322 = input_schema14322;
this.G__14327 = G__14327;
this.owner = owner;
this.G__14325 = G__14325;
this.data = data;
this.G__14326 = G__14326;
this.output_schema14321 = output_schema14321;
this.map__14404 = map__14404;
this.auto_login_QMARK_ = auto_login_QMARK_;
this.output_checker14324 = output_checker14324;
this.input_checker14323 = input_checker14323;
this.show_faces_QMARK_ = show_faces_QMARK_;
this.size = size;
this.map__14403 = map__14403;
this.login_button = login_button;
this.on_login = on_login;
this.max_rows = max_rows;
this.appId = appId;
this.ufv__ = ufv__;
this.G__14402 = G__14402;
this.meta14406 = meta14406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.facebook.t14405.cljs$lang$type = true;
poker_site.facebook.t14405.cljs$lang$ctorStr = "poker-site.facebook/t14405";
poker_site.facebook.t14405.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"poker-site.facebook/t14405");
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.om$core$IRender$ = true;
poker_site.facebook.t14405.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.div({"id": "fb-root"},null),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onLogin": self__.on_login, "data-auto-logout-link": self__.auto_login_QMARK_, "data-show-faces": self__.show_faces_QMARK_, "data-size": self__.size, "data-max-rows": self__.max_rows, "className": "fb-login-button"},null)],null)));
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.om$core$IRender$ = true;
poker_site.facebook.t14405.prototype.om$core$IDidMount$ = true;
poker_site.facebook.t14405.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_){var self__ = this;
var ___$1 = this;var c = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125));var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (state_14445){var state_val_14446 = (state_14445[(1)]);if((state_val_14446 === (7)))
{var inst_14440 = (state_14445[(2)]);var state_14445__$1 = (function (){var statearr_14447 = state_14445;(statearr_14447[(7)] = inst_14440);
return statearr_14447;
})();var statearr_14448_14482 = state_14445__$1;(statearr_14448_14482[(2)] = null);
(statearr_14448_14482[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (1)))
{var state_14445__$1 = state_14445;var statearr_14449_14483 = state_14445__$1;(statearr_14449_14483[(2)] = null);
(statearr_14449_14483[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (4)))
{var inst_14412 = (state_14445[(8)]);var inst_14411 = (state_14445[(9)]);var inst_14411__$1 = (state_14445[(2)]);var inst_14412__$1 = cljs.core.nth.call(null,inst_14411__$1,(0),null);var inst_14413 = cljs.core.nth.call(null,inst_14411__$1,(1),null);var inst_14414 = cljs.core._EQ_.call(null,inst_14412__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var state_14445__$1 = (function (){var statearr_14450 = state_14445;(statearr_14450[(10)] = inst_14413);
(statearr_14450[(8)] = inst_14412__$1);
(statearr_14450[(9)] = inst_14411__$1);
return statearr_14450;
})();if(inst_14414)
{var statearr_14451_14484 = state_14445__$1;(statearr_14451_14484[(1)] = (5));
} else
{var statearr_14452_14485 = state_14445__$1;(statearr_14452_14485[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (15)))
{var state_14445__$1 = state_14445;var statearr_14453_14486 = state_14445__$1;(statearr_14453_14486[(2)] = null);
(statearr_14453_14486[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (13)))
{var inst_14430 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14454_14487 = state_14445__$1;(statearr_14454_14487[(2)] = inst_14430);
(statearr_14454_14487[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (6)))
{var inst_14412 = (state_14445[(8)]);var inst_14419 = cljs.core._EQ_.call(null,inst_14412,new cljs.core.Keyword(null,"change","change",-1163046502));var state_14445__$1 = state_14445;if(inst_14419)
{var statearr_14455_14488 = state_14445__$1;(statearr_14455_14488[(1)] = (8));
} else
{var statearr_14456_14489 = state_14445__$1;(statearr_14456_14489[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (3)))
{var inst_14443 = (state_14445[(2)]);var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14445__$1,inst_14443);
} else
{if((state_val_14446 === (12)))
{var inst_14413 = (state_14445[(10)]);var inst_14412 = (state_14445[(8)]);var inst_14411 = (state_14445[(9)]);var inst_14427 = (function (){var value = inst_14413;var event = inst_14412;var vec__14409 = inst_14411;return ((function (value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (___$2){return false;
});
;})(value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
})();var inst_14428 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"logged","logged",1726980793),inst_14427);var state_14445__$1 = state_14445;var statearr_14457_14490 = state_14445__$1;(statearr_14457_14490[(2)] = inst_14428);
(statearr_14457_14490[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (2)))
{var state_14445__$1 = state_14445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14445__$1,(4),c);
} else
{if((state_val_14446 === (11)))
{var inst_14413 = (state_14445[(10)]);var inst_14412 = (state_14445[(8)]);var inst_14411 = (state_14445[(9)]);var inst_14424 = (function (){var value = inst_14413;var event = inst_14412;var vec__14409 = inst_14411;return ((function (value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (___$2){return true;
});
;})(value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
})();var inst_14425 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"logged","logged",1726980793),inst_14424);var state_14445__$1 = state_14445;var statearr_14458_14491 = state_14445__$1;(statearr_14458_14491[(2)] = inst_14425);
(statearr_14458_14491[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (9)))
{var state_14445__$1 = state_14445;if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var statearr_14459_14492 = state_14445__$1;(statearr_14459_14492[(1)] = (14));
} else
{var statearr_14460_14493 = state_14445__$1;(statearr_14460_14493[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (5)))
{var inst_14413 = (state_14445[(10)]);var inst_14412 = (state_14445[(8)]);var inst_14411 = (state_14445[(9)]);var inst_14416 = (function (){var value = inst_14413;var event = inst_14412;var vec__14409 = inst_14411;return ((function (value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (p1__14319_SHARP_){return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.js__GT_clj.call(null,p1__14319_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
;})(value,event,vec__14409,inst_14413,inst_14412,inst_14411,state_val_14446,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
})();var inst_14417 = poker_site.facebook.Event_COLON_subscribe.call(null,"auth.statusChange",inst_14416);var state_14445__$1 = state_14445;var statearr_14461_14494 = state_14445__$1;(statearr_14461_14494[(2)] = inst_14417);
(statearr_14461_14494[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (14)))
{var inst_14412 = (state_14445[(8)]);var inst_14433 = cljs.core.print.call(null,inst_14412);var state_14445__$1 = state_14445;var statearr_14462_14495 = state_14445__$1;(statearr_14462_14495[(2)] = inst_14433);
(statearr_14462_14495[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (16)))
{var inst_14436 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14463_14496 = state_14445__$1;(statearr_14463_14496[(2)] = inst_14436);
(statearr_14463_14496[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (10)))
{var inst_14438 = (state_14445[(2)]);var state_14445__$1 = state_14445;var statearr_14464_14497 = state_14445__$1;(statearr_14464_14497[(2)] = inst_14438);
(statearr_14464_14497[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14446 === (8)))
{var inst_14413 = (state_14445[(10)]);var inst_14421 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_14413);var inst_14422 = cljs.core._EQ_.call(null,inst_14421,"connected");var state_14445__$1 = state_14445;if(inst_14422)
{var statearr_14465_14498 = state_14445__$1;(statearr_14465_14498[(1)] = (11));
} else
{var statearr_14466_14499 = state_14445__$1;(statearr_14466_14499[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;return ((function (switch__11457__auto__,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_14470 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14470[(0)] = state_machine__11458__auto__);
(statearr_14470[(1)] = (1));
return statearr_14470;
});
var state_machine__11458__auto____1 = (function (state_14445){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_14445);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e14471){if((e14471 instanceof Object))
{var ex__11461__auto__ = e14471;var statearr_14472_14500 = state_14445;(statearr_14472_14500[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14501 = state_14445;
state_14445 = G__14501;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_14445){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_14445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
})();var state__11474__auto__ = (function (){var statearr_14473 = f__11473__auto__.call(null);(statearr_14473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_14473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__,c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
);
return c__11472__auto__;
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.om$core$IWillMount$ = true;
poker_site.facebook.t14405.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_){var self__ = this;
var ___$1 = this;var c = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125));return poker_site.facebook.load_sdk.call(null,((function (c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (){poker_site.facebook.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"appId","appId",1841138644),self__.appId,new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"xfbml","xfbml",-773766330),true,new cljs.core.Keyword(null,"version","version",425292698),"v2.0"], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),cljs.core.PersistentArrayMap.EMPTY], null));
});})(c,___$1,data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
);
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.om$core$IInitState$ = true;
poker_site.facebook.t14405.prototype.om$core$IInitState$init_state$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125),cljs.core.async.chan.call(null)], null);
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.om$core$IDisplayName$ = true;
poker_site.facebook.t14405.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_){var self__ = this;
var ___$1 = this;return "fb-login";
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_14407){var self__ = this;
var _14407__$1 = this;return self__.meta14406;
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.t14405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function (_14407,meta14406__$1){var self__ = this;
var _14407__$1 = this;return (new poker_site.facebook.t14405(self__.validate__5346__auto__,self__.input_schema14322,self__.G__14327,self__.owner,self__.G__14325,self__.data,self__.G__14326,self__.output_schema14321,self__.map__14404,self__.auto_login_QMARK_,self__.output_checker14324,self__.input_checker14323,self__.show_faces_QMARK_,self__.size,self__.map__14403,self__.login_button,self__.on_login,self__.max_rows,self__.appId,self__.ufv__,self__.G__14402,meta14406__$1));
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
poker_site.facebook.__GT_t14405 = ((function (data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478){
return (function __GT_t14405(validate__5346__auto____$1,input_schema14322__$1,G__14327__$1,owner__$3,G__14325__$1,data__$3,G__14326__$1,output_schema14321__$1,map__14404__$2,auto_login_QMARK___$2,output_checker14324__$1,input_checker14323__$1,show_faces_QMARK___$2,size__$2,map__14403__$2,login_button__$1,on_login__$2,max_rows__$2,appId__$2,ufv____$1,G__14402__$2,meta14406){return (new poker_site.facebook.t14405(validate__5346__auto____$1,input_schema14322__$1,G__14327__$1,owner__$3,G__14325__$1,data__$3,G__14326__$1,output_schema14321__$1,map__14404__$2,auto_login_QMARK___$2,output_checker14324__$1,input_checker14323__$1,show_faces_QMARK___$2,size__$2,map__14403__$2,login_button__$1,on_login__$2,max_rows__$2,appId__$2,ufv____$1,G__14402__$2,meta14406));
});})(data__$2,owner__$2,map__14404,map__14404__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14402,map__14403,map__14403__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5346__auto__,ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
}
return (new poker_site.facebook.t14405(validate__5346__auto__,input_schema14322_14476,G__14327,owner__$2,G__14325,data__$2,G__14326,output_schema14321_14475,map__14404__$1,auto_login_QMARK___$1,output_checker14324_14478,input_checker14323_14477,show_faces_QMARK___$1,size__$1,map__14403__$1,login_button,on_login__$1,max_rows__$1,appId__$1,ufv___14474,G__14402__$1,null));
break;
}
})();if(cljs.core.truth_(validate__5346__auto__))
{var temp__4126__auto___14502 = output_checker14324_14478.call(null,o__5349__auto__);if(cljs.core.truth_(temp__4126__auto___14502))
{var error__5348__auto___14503 = temp__4126__auto___14502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"login-button","login-button",374459705,null),cljs.core.pr_str.call(null,error__5348__auto___14503)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14321_14475,new cljs.core.Keyword(null,"value","value",305978217),o__5349__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5348__auto___14503], null));
} else
{}
} else
{}
return o__5349__auto__;
});})(ufv___14474,output_schema14321_14475,input_schema14322_14476,input_checker14323_14477,output_checker14324_14478))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.facebook.login_button),schema.core.make_fn_schema.call(null,output_schema14321_14475,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14322_14476], null)));
poker_site.facebook.__GT_login_button = (function() {
var __GT_login_button = null;
var __GT_login_button__1 = (function (cursor__7114__auto__){return om.core.build.call(null,poker_site.facebook.login_button,cursor__7114__auto__);
});
var __GT_login_button__2 = (function (cursor__7114__auto__,m14320){return om.core.build.call(null,poker_site.facebook.login_button,cursor__7114__auto__,m14320);
});
__GT_login_button = function(cursor__7114__auto__,m14320){
switch(arguments.length){
case 1:
return __GT_login_button__1.call(this,cursor__7114__auto__);
case 2:
return __GT_login_button__2.call(this,cursor__7114__auto__,m14320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_login_button.cljs$core$IFn$_invoke$arity$1 = __GT_login_button__1;
__GT_login_button.cljs$core$IFn$_invoke$arity$2 = __GT_login_button__2;
return __GT_login_button;
})()
;

//# sourceMappingURL=facebook.js.map