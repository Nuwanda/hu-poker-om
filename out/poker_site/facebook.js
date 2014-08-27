// Compiled by ClojureScript 0.0-2322
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
var ufv___14502 = schema.utils.use_fn_validation;var output_schema14349_14503 = schema.core.Any;var input_schema14350_14504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-924884852,null))], null);var input_checker14351_14505 = schema.core.checker.call(null,input_schema14350_14504);var output_checker14352_14506 = schema.core.checker.call(null,output_schema14349_14503);/**
* Inputs: [data owner {:keys [appId max-rows size show-faces? auto-login? on-login], :or {max-rows 1, size "large", show-faces? false, auto-login? true, on-login nil}}]
* 
* Om component for the facebook login button, takes a map of options
* as specificied by https://developers.facebook.com/docs/plugins/login-button (not scope)
*/
poker_site.facebook.login_button = ((function (ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function login_button(G__14353,G__14354,G__14355){var validate__5362__auto__ = ufv___14502.get_cell();if(cljs.core.truth_(validate__5362__auto__))
{var args__5363__auto___14507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14353,G__14354,G__14355], null);var temp__4126__auto___14508 = input_checker14351_14505.call(null,args__5363__auto___14507);if(cljs.core.truth_(temp__4126__auto___14508))
{var error__5364__auto___14509 = temp__4126__auto___14508;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"login-button","login-button",374459705,null),cljs.core.pr_str.call(null,error__5364__auto___14509)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14350_14504,new cljs.core.Keyword(null,"value","value",305978217),args__5363__auto___14507,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14509], null));
} else
{}
} else
{}
var o__5365__auto__ = (function (){var data = G__14353;var owner = G__14354;var G__14430 = G__14355;var map__14431 = G__14430;var map__14431__$1 = ((cljs.core.seq_QMARK_.call(null,map__14431))?cljs.core.apply.call(null,cljs.core.hash_map,map__14431):map__14431);var on_login = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"on-login","on-login",380212178),null);var auto_login_QMARK_ = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"auto-login?","auto-login?",390941802),true);var show_faces_QMARK_ = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"show-faces?","show-faces?",1914883275),false);var size = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"size","size",1098693007),"large");var max_rows = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(1));var appId = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"appId","appId",1841138644));var data__$1 = data;var owner__$1 = owner;var G__14430__$1 = G__14430;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__14432 = G__14430__$1;var map__14432__$1 = ((cljs.core.seq_QMARK_.call(null,map__14432))?cljs.core.apply.call(null,cljs.core.hash_map,map__14432):map__14432);var on_login__$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"on-login","on-login",380212178),null);var auto_login_QMARK___$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"auto-login?","auto-login?",390941802),true);var show_faces_QMARK___$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"show-faces?","show-faces?",1914883275),false);var size__$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"size","size",1098693007),"large");var max_rows__$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),(1));var appId__$1 = cljs.core.get.call(null,map__14432__$1,new cljs.core.Keyword(null,"appId","appId",1841138644));if(typeof poker_site.facebook.t14433 !== 'undefined')
{} else
{
/**
* @constructor
*/
poker_site.facebook.t14433 = (function (output_schema14349,owner,data,map__14431,G__14353,validate__5362__auto__,auto_login_QMARK_,show_faces_QMARK_,input_checker14351,size,input_schema14350,login_button,on_login,map__14432,max_rows,appId,G__14354,output_checker14352,ufv__,G__14355,G__14430,meta14434){
this.output_schema14349 = output_schema14349;
this.owner = owner;
this.data = data;
this.map__14431 = map__14431;
this.G__14353 = G__14353;
this.validate__5362__auto__ = validate__5362__auto__;
this.auto_login_QMARK_ = auto_login_QMARK_;
this.show_faces_QMARK_ = show_faces_QMARK_;
this.input_checker14351 = input_checker14351;
this.size = size;
this.input_schema14350 = input_schema14350;
this.login_button = login_button;
this.on_login = on_login;
this.map__14432 = map__14432;
this.max_rows = max_rows;
this.appId = appId;
this.G__14354 = G__14354;
this.output_checker14352 = output_checker14352;
this.ufv__ = ufv__;
this.G__14355 = G__14355;
this.G__14430 = G__14430;
this.meta14434 = meta14434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
poker_site.facebook.t14433.cljs$lang$type = true;
poker_site.facebook.t14433.cljs$lang$ctorStr = "poker-site.facebook/t14433";
poker_site.facebook.t14433.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"poker-site.facebook/t14433");
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.om$core$IRender$ = true;
poker_site.facebook.t14433.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.div({"id": "fb-root"},null),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.div({"onLogin": self__.on_login, "data-auto-logout-link": self__.auto_login_QMARK_, "data-show-faces": self__.show_faces_QMARK_, "data-size": self__.size, "data-max-rows": self__.max_rows, "className": "fb-login-button"},null)],null)));
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.om$core$IRender$ = true;
poker_site.facebook.t14433.prototype.om$core$IDidMount$ = true;
poker_site.facebook.t14433.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_){var self__ = this;
var ___$1 = this;var c = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125));var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (state_14473){var state_val_14474 = (state_14473[(1)]);if((state_val_14474 === (7)))
{var inst_14468 = (state_14473[(2)]);var state_14473__$1 = (function (){var statearr_14475 = state_14473;(statearr_14475[(7)] = inst_14468);
return statearr_14475;
})();var statearr_14476_14510 = state_14473__$1;(statearr_14476_14510[(2)] = null);
(statearr_14476_14510[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (1)))
{var state_14473__$1 = state_14473;var statearr_14477_14511 = state_14473__$1;(statearr_14477_14511[(2)] = null);
(statearr_14477_14511[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (4)))
{var inst_14439 = (state_14473[(8)]);var inst_14440 = (state_14473[(9)]);var inst_14439__$1 = (state_14473[(2)]);var inst_14440__$1 = cljs.core.nth.call(null,inst_14439__$1,(0),null);var inst_14441 = cljs.core.nth.call(null,inst_14439__$1,(1),null);var inst_14442 = cljs.core._EQ_.call(null,inst_14440__$1,new cljs.core.Keyword(null,"loaded","loaded",-1246482293));var state_14473__$1 = (function (){var statearr_14478 = state_14473;(statearr_14478[(8)] = inst_14439__$1);
(statearr_14478[(10)] = inst_14441);
(statearr_14478[(9)] = inst_14440__$1);
return statearr_14478;
})();if(inst_14442)
{var statearr_14479_14512 = state_14473__$1;(statearr_14479_14512[(1)] = (5));
} else
{var statearr_14480_14513 = state_14473__$1;(statearr_14480_14513[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (15)))
{var state_14473__$1 = state_14473;var statearr_14481_14514 = state_14473__$1;(statearr_14481_14514[(2)] = null);
(statearr_14481_14514[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (13)))
{var inst_14458 = (state_14473[(2)]);var state_14473__$1 = state_14473;var statearr_14482_14515 = state_14473__$1;(statearr_14482_14515[(2)] = inst_14458);
(statearr_14482_14515[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (6)))
{var inst_14440 = (state_14473[(9)]);var inst_14447 = cljs.core._EQ_.call(null,inst_14440,new cljs.core.Keyword(null,"change","change",-1163046502));var state_14473__$1 = state_14473;if(inst_14447)
{var statearr_14483_14516 = state_14473__$1;(statearr_14483_14516[(1)] = (8));
} else
{var statearr_14484_14517 = state_14473__$1;(statearr_14484_14517[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (3)))
{var inst_14471 = (state_14473[(2)]);var state_14473__$1 = state_14473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14473__$1,inst_14471);
} else
{if((state_val_14474 === (12)))
{var inst_14439 = (state_14473[(8)]);var inst_14441 = (state_14473[(10)]);var inst_14440 = (state_14473[(9)]);var inst_14455 = (function (){var value = inst_14441;var event = inst_14440;var vec__14437 = inst_14439;return ((function (value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (___$2){return false;
});
;})(value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
})();var inst_14456 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"logged","logged",1726980793),inst_14455);var state_14473__$1 = state_14473;var statearr_14485_14518 = state_14473__$1;(statearr_14485_14518[(2)] = inst_14456);
(statearr_14485_14518[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (2)))
{var state_14473__$1 = state_14473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14473__$1,(4),c);
} else
{if((state_val_14474 === (11)))
{var inst_14439 = (state_14473[(8)]);var inst_14441 = (state_14473[(10)]);var inst_14440 = (state_14473[(9)]);var inst_14452 = (function (){var value = inst_14441;var event = inst_14440;var vec__14437 = inst_14439;return ((function (value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (___$2){return true;
});
;})(value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
})();var inst_14453 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"logged","logged",1726980793),inst_14452);var state_14473__$1 = state_14473;var statearr_14486_14519 = state_14473__$1;(statearr_14486_14519[(2)] = inst_14453);
(statearr_14486_14519[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (9)))
{var state_14473__$1 = state_14473;var statearr_14487_14520 = state_14473__$1;(statearr_14487_14520[(1)] = (14));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (5)))
{var inst_14439 = (state_14473[(8)]);var inst_14441 = (state_14473[(10)]);var inst_14440 = (state_14473[(9)]);var inst_14444 = (function (){var value = inst_14441;var event = inst_14440;var vec__14437 = inst_14439;return ((function (value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (p1__14347_SHARP_){return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.js__GT_clj.call(null,p1__14347_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
});
;})(value,event,vec__14437,inst_14439,inst_14441,inst_14440,state_val_14474,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
})();var inst_14445 = poker_site.facebook.Event_COLON_subscribe.call(null,"auth.statusChange",inst_14444);var state_14473__$1 = state_14473;var statearr_14489_14521 = state_14473__$1;(statearr_14489_14521[(2)] = inst_14445);
(statearr_14489_14521[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (14)))
{var inst_14440 = (state_14473[(9)]);var inst_14461 = cljs.core.print.call(null,inst_14440);var state_14473__$1 = state_14473;var statearr_14490_14522 = state_14473__$1;(statearr_14490_14522[(2)] = inst_14461);
(statearr_14490_14522[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (16)))
{var inst_14464 = (state_14473[(2)]);var state_14473__$1 = state_14473;var statearr_14491_14523 = state_14473__$1;(statearr_14491_14523[(2)] = inst_14464);
(statearr_14491_14523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (10)))
{var inst_14466 = (state_14473[(2)]);var state_14473__$1 = state_14473;var statearr_14492_14524 = state_14473__$1;(statearr_14492_14524[(2)] = inst_14466);
(statearr_14492_14524[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14474 === (8)))
{var inst_14441 = (state_14473[(10)]);var inst_14449 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_14441);var inst_14450 = cljs.core._EQ_.call(null,inst_14449,"connected");var state_14473__$1 = state_14473;if(inst_14450)
{var statearr_14493_14525 = state_14473__$1;(statearr_14493_14525[(1)] = (11));
} else
{var statearr_14494_14526 = state_14473__$1;(statearr_14494_14526[(1)] = (12));
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
});})(c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;return ((function (switch__11490__auto__,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_14498 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14498[(0)] = state_machine__11491__auto__);
(statearr_14498[(1)] = (1));
return statearr_14498;
});
var state_machine__11491__auto____1 = (function (state_14473){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_14473);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e14499){if((e14499 instanceof Object))
{var ex__11494__auto__ = e14499;var statearr_14500_14527 = state_14473;(statearr_14500_14527[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14499;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14528 = state_14473;
state_14473 = G__14528;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_14473){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_14473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
})();var state__11507__auto__ = (function (){var statearr_14501 = f__11506__auto__.call(null);(statearr_14501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_14501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__,c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
);
return c__11505__auto__;
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.om$core$IWillMount$ = true;
poker_site.facebook.t14433.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_){var self__ = this;
var ___$1 = this;var c = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125));return poker_site.facebook.load_sdk.call(null,((function (c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (){poker_site.facebook.init.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"appId","appId",1841138644),self__.appId,new cljs.core.Keyword(null,"status","status",-1997798413),true,new cljs.core.Keyword(null,"xfbml","xfbml",-773766330),true,new cljs.core.Keyword(null,"version","version",425292698),"v2.0"], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),cljs.core.PersistentArrayMap.EMPTY], null));
});})(c,___$1,data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
);
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.om$core$IInitState$ = true;
poker_site.facebook.t14433.prototype.om$core$IInitState$init_state$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fb-events","fb-events",-1913739125),cljs.core.async.chan.call(null)], null);
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.om$core$IDisplayName$ = true;
poker_site.facebook.t14433.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_){var self__ = this;
var ___$1 = this;return "fb-login";
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_14435){var self__ = this;
var _14435__$1 = this;return self__.meta14434;
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.t14433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function (_14435,meta14434__$1){var self__ = this;
var _14435__$1 = this;return (new poker_site.facebook.t14433(self__.output_schema14349,self__.owner,self__.data,self__.map__14431,self__.G__14353,self__.validate__5362__auto__,self__.auto_login_QMARK_,self__.show_faces_QMARK_,self__.input_checker14351,self__.size,self__.input_schema14350,self__.login_button,self__.on_login,self__.map__14432,self__.max_rows,self__.appId,self__.G__14354,self__.output_checker14352,self__.ufv__,self__.G__14355,self__.G__14430,meta14434__$1));
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
poker_site.facebook.__GT_t14433 = ((function (data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506){
return (function __GT_t14433(output_schema14349__$1,owner__$3,data__$3,map__14431__$2,G__14353__$1,validate__5362__auto____$1,auto_login_QMARK___$2,show_faces_QMARK___$2,input_checker14351__$1,size__$2,input_schema14350__$1,login_button__$1,on_login__$2,map__14432__$2,max_rows__$2,appId__$2,G__14354__$1,output_checker14352__$1,ufv____$1,G__14355__$1,G__14430__$2,meta14434){return (new poker_site.facebook.t14433(output_schema14349__$1,owner__$3,data__$3,map__14431__$2,G__14353__$1,validate__5362__auto____$1,auto_login_QMARK___$2,show_faces_QMARK___$2,input_checker14351__$1,size__$2,input_schema14350__$1,login_button__$1,on_login__$2,map__14432__$2,max_rows__$2,appId__$2,G__14354__$1,output_checker14352__$1,ufv____$1,G__14355__$1,G__14430__$2,meta14434));
});})(data__$2,owner__$2,map__14432,map__14432__$1,on_login__$1,auto_login_QMARK___$1,show_faces_QMARK___$1,size__$1,max_rows__$1,appId__$1,data,owner,G__14430,map__14431,map__14431__$1,on_login,auto_login_QMARK_,show_faces_QMARK_,size,max_rows,appId,validate__5362__auto__,ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
}
return (new poker_site.facebook.t14433(output_schema14349_14503,owner__$2,data__$2,map__14431__$1,G__14353,validate__5362__auto__,auto_login_QMARK___$1,show_faces_QMARK___$1,input_checker14351_14505,size__$1,input_schema14350_14504,login_button,on_login__$1,map__14432__$1,max_rows__$1,appId__$1,G__14354,output_checker14352_14506,ufv___14502,G__14355,G__14430__$1,null));
break;
}
})();if(cljs.core.truth_(validate__5362__auto__))
{var temp__4126__auto___14529 = output_checker14352_14506.call(null,o__5365__auto__);if(cljs.core.truth_(temp__4126__auto___14529))
{var error__5364__auto___14530 = temp__4126__auto___14529;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"login-button","login-button",374459705,null),cljs.core.pr_str.call(null,error__5364__auto___14530)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14349_14503,new cljs.core.Keyword(null,"value","value",305978217),o__5365__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5364__auto___14530], null));
} else
{}
} else
{}
return o__5365__auto__;
});})(ufv___14502,output_schema14349_14503,input_schema14350_14504,input_checker14351_14505,output_checker14352_14506))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,poker_site.facebook.login_button),schema.core.make_fn_schema.call(null,output_schema14349_14503,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14350_14504], null)));
poker_site.facebook.__GT_login_button = (function() {
var __GT_login_button = null;
var __GT_login_button__1 = (function (cursor__7130__auto__){return om.core.build.call(null,poker_site.facebook.login_button,cursor__7130__auto__);
});
var __GT_login_button__2 = (function (cursor__7130__auto__,m14348){return om.core.build.call(null,poker_site.facebook.login_button,cursor__7130__auto__,m14348);
});
__GT_login_button = function(cursor__7130__auto__,m14348){
switch(arguments.length){
case 1:
return __GT_login_button__1.call(this,cursor__7130__auto__);
case 2:
return __GT_login_button__2.call(this,cursor__7130__auto__,m14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_login_button.cljs$core$IFn$_invoke$arity$1 = __GT_login_button__1;
__GT_login_button.cljs$core$IFn$_invoke$arity$2 = __GT_login_button__2;
return __GT_login_button;
})()
;

//# sourceMappingURL=facebook.js.map