// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13979 = (function (f,fn_handler,meta13980){
this.f = f;
this.fn_handler = fn_handler;
this.meta13980 = meta13980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13979.cljs$lang$type = true;
cljs.core.async.t13979.cljs$lang$ctorStr = "cljs.core.async/t13979";
cljs.core.async.t13979.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t13979");
});
cljs.core.async.t13979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13981){var self__ = this;
var _13981__$1 = this;return self__.meta13980;
});
cljs.core.async.t13979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13981,meta13980__$1){var self__ = this;
var _13981__$1 = this;return (new cljs.core.async.t13979(self__.f,self__.fn_handler,meta13980__$1));
});
cljs.core.async.__GT_t13979 = (function __GT_t13979(f__$1,fn_handler__$1,meta13980){return (new cljs.core.async.t13979(f__$1,fn_handler__$1,meta13980));
});
}
return (new cljs.core.async.t13979(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13983 = buff;if(G__13983)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__13983.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13983.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13983);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13983);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13984 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13984);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_13984,ret){
return (function (){return fn1.call(null,val_13984);
});})(val_13984,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3530__auto__ = ret;if(cljs.core.truth_(and__3530__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3530__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4398__auto___13985 = n;var x_13986 = (0);while(true){
if((x_13986 < n__4398__auto___13985))
{(a[x_13986] = (0));
{
var G__13987 = (x_13986 + (1));
x_13986 = G__13987;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13988 = (i + (1));
i = G__13988;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13992 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13992 = (function (flag,alt_flag,meta13993){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13993 = meta13993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13992.cljs$lang$type = true;
cljs.core.async.t13992.cljs$lang$ctorStr = "cljs.core.async/t13992";
cljs.core.async.t13992.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t13992");
});})(flag))
;
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t13992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t13992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13994){var self__ = this;
var _13994__$1 = this;return self__.meta13993;
});})(flag))
;
cljs.core.async.t13992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13994,meta13993__$1){var self__ = this;
var _13994__$1 = this;return (new cljs.core.async.t13992(self__.flag,self__.alt_flag,meta13993__$1));
});})(flag))
;
cljs.core.async.__GT_t13992 = ((function (flag){
return (function __GT_t13992(flag__$1,alt_flag__$1,meta13993){return (new cljs.core.async.t13992(flag__$1,alt_flag__$1,meta13993));
});})(flag))
;
}
return (new cljs.core.async.t13992(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13998 = (function (cb,flag,alt_handler,meta13999){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13999 = meta13999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13998.cljs$lang$type = true;
cljs.core.async.t13998.cljs$lang$ctorStr = "cljs.core.async/t13998";
cljs.core.async.t13998.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t13998");
});
cljs.core.async.t13998.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14000){var self__ = this;
var _14000__$1 = this;return self__.meta13999;
});
cljs.core.async.t13998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14000,meta13999__$1){var self__ = this;
var _14000__$1 = this;return (new cljs.core.async.t13998(self__.cb,self__.flag,self__.alt_handler,meta13999__$1));
});
cljs.core.async.__GT_t13998 = (function __GT_t13998(cb__$1,flag__$1,alt_handler__$1,meta13999){return (new cljs.core.async.t13998(cb__$1,flag__$1,alt_handler__$1,meta13999));
});
}
return (new cljs.core.async.t13998(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14001_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14001_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3542__auto__ = wport;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14002 = (i + (1));
i = G__14002;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3542__auto__ = ret;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3530__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3530__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3530__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__14003){var map__14005 = p__14003;var map__14005__$1 = ((cljs.core.seq_QMARK_.call(null,map__14005))?cljs.core.apply.call(null,cljs.core.hash_map,map__14005):map__14005);var opts = map__14005__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14003 = null;if (arguments.length > 1) {
  p__14003 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14003);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14006){
var ports = cljs.core.first(arglist__14006);
var p__14003 = cljs.core.rest(arglist__14006);
return alts_BANG___delegate(ports,p__14003);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14014 = (function (ch,f,map_LT_,meta14015){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14015 = meta14015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14014.cljs$lang$type = true;
cljs.core.async.t14014.cljs$lang$ctorStr = "cljs.core.async/t14014";
cljs.core.async.t14014.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t14014");
});
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14017 = (function (fn1,_,meta14015,ch,f,map_LT_,meta14018){
this.fn1 = fn1;
this._ = _;
this.meta14015 = meta14015;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14018 = meta14018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14017.cljs$lang$type = true;
cljs.core.async.t14017.cljs$lang$ctorStr = "cljs.core.async/t14017";
cljs.core.async.t14017.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t14017");
});})(___$1))
;
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14007_SHARP_){return f1.call(null,(((p1__14007_SHARP_ == null))?null:self__.f.call(null,p1__14007_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14017.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14019){var self__ = this;
var _14019__$1 = this;return self__.meta14018;
});})(___$1))
;
cljs.core.async.t14017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14019,meta14018__$1){var self__ = this;
var _14019__$1 = this;return (new cljs.core.async.t14017(self__.fn1,self__._,self__.meta14015,self__.ch,self__.f,self__.map_LT_,meta14018__$1));
});})(___$1))
;
cljs.core.async.__GT_t14017 = ((function (___$1){
return (function __GT_t14017(fn1__$1,___$2,meta14015__$1,ch__$2,f__$2,map_LT___$2,meta14018){return (new cljs.core.async.t14017(fn1__$1,___$2,meta14015__$1,ch__$2,f__$2,map_LT___$2,meta14018));
});})(___$1))
;
}
return (new cljs.core.async.t14017(fn1,___$1,self__.meta14015,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3530__auto__ = ret;if(cljs.core.truth_(and__3530__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3530__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14016){var self__ = this;
var _14016__$1 = this;return self__.meta14015;
});
cljs.core.async.t14014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14016,meta14015__$1){var self__ = this;
var _14016__$1 = this;return (new cljs.core.async.t14014(self__.ch,self__.f,self__.map_LT_,meta14015__$1));
});
cljs.core.async.__GT_t14014 = (function __GT_t14014(ch__$1,f__$1,map_LT___$1,meta14015){return (new cljs.core.async.t14014(ch__$1,f__$1,map_LT___$1,meta14015));
});
}
return (new cljs.core.async.t14014(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14023 = (function (ch,f,map_GT_,meta14024){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14024 = meta14024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14023.cljs$lang$type = true;
cljs.core.async.t14023.cljs$lang$ctorStr = "cljs.core.async/t14023";
cljs.core.async.t14023.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t14023");
});
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14025){var self__ = this;
var _14025__$1 = this;return self__.meta14024;
});
cljs.core.async.t14023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14025,meta14024__$1){var self__ = this;
var _14025__$1 = this;return (new cljs.core.async.t14023(self__.ch,self__.f,self__.map_GT_,meta14024__$1));
});
cljs.core.async.__GT_t14023 = (function __GT_t14023(ch__$1,f__$1,map_GT___$1,meta14024){return (new cljs.core.async.t14023(ch__$1,f__$1,map_GT___$1,meta14024));
});
}
return (new cljs.core.async.t14023(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14029 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14029 = (function (ch,p,filter_GT_,meta14030){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14030 = meta14030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14029.cljs$lang$type = true;
cljs.core.async.t14029.cljs$lang$ctorStr = "cljs.core.async/t14029";
cljs.core.async.t14029.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t14029");
});
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14029.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14031){var self__ = this;
var _14031__$1 = this;return self__.meta14030;
});
cljs.core.async.t14029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14031,meta14030__$1){var self__ = this;
var _14031__$1 = this;return (new cljs.core.async.t14029(self__.ch,self__.p,self__.filter_GT_,meta14030__$1));
});
cljs.core.async.__GT_t14029 = (function __GT_t14029(ch__$1,p__$1,filter_GT___$1,meta14030){return (new cljs.core.async.t14029(ch__$1,p__$1,filter_GT___$1,meta14030));
});
}
return (new cljs.core.async.t14029(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___14114 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___14114,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___14114,out){
return (function (state_14093){var state_val_14094 = (state_14093[(1)]);if((state_val_14094 === (7)))
{var inst_14089 = (state_14093[(2)]);var state_14093__$1 = state_14093;var statearr_14095_14115 = state_14093__$1;(statearr_14095_14115[(2)] = inst_14089);
(statearr_14095_14115[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (1)))
{var state_14093__$1 = state_14093;var statearr_14096_14116 = state_14093__$1;(statearr_14096_14116[(2)] = null);
(statearr_14096_14116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (4)))
{var inst_14075 = (state_14093[(7)]);var inst_14075__$1 = (state_14093[(2)]);var inst_14076 = (inst_14075__$1 == null);var state_14093__$1 = (function (){var statearr_14097 = state_14093;(statearr_14097[(7)] = inst_14075__$1);
return statearr_14097;
})();if(cljs.core.truth_(inst_14076))
{var statearr_14098_14117 = state_14093__$1;(statearr_14098_14117[(1)] = (5));
} else
{var statearr_14099_14118 = state_14093__$1;(statearr_14099_14118[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (6)))
{var inst_14075 = (state_14093[(7)]);var inst_14080 = p.call(null,inst_14075);var state_14093__$1 = state_14093;if(cljs.core.truth_(inst_14080))
{var statearr_14100_14119 = state_14093__$1;(statearr_14100_14119[(1)] = (8));
} else
{var statearr_14101_14120 = state_14093__$1;(statearr_14101_14120[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (3)))
{var inst_14091 = (state_14093[(2)]);var state_14093__$1 = state_14093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14093__$1,inst_14091);
} else
{if((state_val_14094 === (2)))
{var state_14093__$1 = state_14093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14093__$1,(4),ch);
} else
{if((state_val_14094 === (11)))
{var inst_14083 = (state_14093[(2)]);var state_14093__$1 = state_14093;var statearr_14102_14121 = state_14093__$1;(statearr_14102_14121[(2)] = inst_14083);
(statearr_14102_14121[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (9)))
{var state_14093__$1 = state_14093;var statearr_14103_14122 = state_14093__$1;(statearr_14103_14122[(2)] = null);
(statearr_14103_14122[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (5)))
{var inst_14078 = cljs.core.async.close_BANG_.call(null,out);var state_14093__$1 = state_14093;var statearr_14104_14123 = state_14093__$1;(statearr_14104_14123[(2)] = inst_14078);
(statearr_14104_14123[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (10)))
{var inst_14086 = (state_14093[(2)]);var state_14093__$1 = (function (){var statearr_14105 = state_14093;(statearr_14105[(8)] = inst_14086);
return statearr_14105;
})();var statearr_14106_14124 = state_14093__$1;(statearr_14106_14124[(2)] = null);
(statearr_14106_14124[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14094 === (8)))
{var inst_14075 = (state_14093[(7)]);var state_14093__$1 = state_14093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14093__$1,(11),out,inst_14075);
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
});})(c__11564__auto___14114,out))
;return ((function (switch__11549__auto__,c__11564__auto___14114,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14110 = [null,null,null,null,null,null,null,null,null];(statearr_14110[(0)] = state_machine__11550__auto__);
(statearr_14110[(1)] = (1));
return statearr_14110;
});
var state_machine__11550__auto____1 = (function (state_14093){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14093);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14111){if((e14111 instanceof Object))
{var ex__11553__auto__ = e14111;var statearr_14112_14125 = state_14093;(statearr_14112_14125[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14126 = state_14093;
state_14093 = G__14126;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14093){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___14114,out))
})();var state__11566__auto__ = (function (){var statearr_14113 = f__11565__auto__.call(null);(statearr_14113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___14114);
return statearr_14113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___14114,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11564__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto__){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto__){
return (function (state_14278){var state_val_14279 = (state_14278[(1)]);if((state_val_14279 === (7)))
{var inst_14274 = (state_14278[(2)]);var state_14278__$1 = state_14278;var statearr_14280_14317 = state_14278__$1;(statearr_14280_14317[(2)] = inst_14274);
(statearr_14280_14317[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (20)))
{var inst_14249 = (state_14278[(7)]);var inst_14260 = (state_14278[(2)]);var inst_14261 = cljs.core.next.call(null,inst_14249);var inst_14235 = inst_14261;var inst_14236 = null;var inst_14237 = (0);var inst_14238 = (0);var state_14278__$1 = (function (){var statearr_14281 = state_14278;(statearr_14281[(8)] = inst_14260);
(statearr_14281[(9)] = inst_14237);
(statearr_14281[(10)] = inst_14238);
(statearr_14281[(11)] = inst_14235);
(statearr_14281[(12)] = inst_14236);
return statearr_14281;
})();var statearr_14282_14318 = state_14278__$1;(statearr_14282_14318[(2)] = null);
(statearr_14282_14318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (1)))
{var state_14278__$1 = state_14278;var statearr_14283_14319 = state_14278__$1;(statearr_14283_14319[(2)] = null);
(statearr_14283_14319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (4)))
{var inst_14224 = (state_14278[(13)]);var inst_14224__$1 = (state_14278[(2)]);var inst_14225 = (inst_14224__$1 == null);var state_14278__$1 = (function (){var statearr_14287 = state_14278;(statearr_14287[(13)] = inst_14224__$1);
return statearr_14287;
})();if(cljs.core.truth_(inst_14225))
{var statearr_14288_14320 = state_14278__$1;(statearr_14288_14320[(1)] = (5));
} else
{var statearr_14289_14321 = state_14278__$1;(statearr_14289_14321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (15)))
{var state_14278__$1 = state_14278;var statearr_14290_14322 = state_14278__$1;(statearr_14290_14322[(2)] = null);
(statearr_14290_14322[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (13)))
{var inst_14237 = (state_14278[(9)]);var inst_14238 = (state_14278[(10)]);var inst_14235 = (state_14278[(11)]);var inst_14236 = (state_14278[(12)]);var inst_14245 = (state_14278[(2)]);var inst_14246 = (inst_14238 + (1));var tmp14284 = inst_14237;var tmp14285 = inst_14235;var tmp14286 = inst_14236;var inst_14235__$1 = tmp14285;var inst_14236__$1 = tmp14286;var inst_14237__$1 = tmp14284;var inst_14238__$1 = inst_14246;var state_14278__$1 = (function (){var statearr_14291 = state_14278;(statearr_14291[(9)] = inst_14237__$1);
(statearr_14291[(10)] = inst_14238__$1);
(statearr_14291[(11)] = inst_14235__$1);
(statearr_14291[(14)] = inst_14245);
(statearr_14291[(12)] = inst_14236__$1);
return statearr_14291;
})();var statearr_14292_14323 = state_14278__$1;(statearr_14292_14323[(2)] = null);
(statearr_14292_14323[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (6)))
{var inst_14224 = (state_14278[(13)]);var inst_14229 = f.call(null,inst_14224);var inst_14234 = cljs.core.seq.call(null,inst_14229);var inst_14235 = inst_14234;var inst_14236 = null;var inst_14237 = (0);var inst_14238 = (0);var state_14278__$1 = (function (){var statearr_14293 = state_14278;(statearr_14293[(9)] = inst_14237);
(statearr_14293[(10)] = inst_14238);
(statearr_14293[(11)] = inst_14235);
(statearr_14293[(12)] = inst_14236);
return statearr_14293;
})();var statearr_14294_14324 = state_14278__$1;(statearr_14294_14324[(2)] = null);
(statearr_14294_14324[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (17)))
{var inst_14249 = (state_14278[(7)]);var inst_14253 = cljs.core.chunk_first.call(null,inst_14249);var inst_14254 = cljs.core.chunk_rest.call(null,inst_14249);var inst_14255 = cljs.core.count.call(null,inst_14253);var inst_14235 = inst_14254;var inst_14236 = inst_14253;var inst_14237 = inst_14255;var inst_14238 = (0);var state_14278__$1 = (function (){var statearr_14295 = state_14278;(statearr_14295[(9)] = inst_14237);
(statearr_14295[(10)] = inst_14238);
(statearr_14295[(11)] = inst_14235);
(statearr_14295[(12)] = inst_14236);
return statearr_14295;
})();var statearr_14296_14325 = state_14278__$1;(statearr_14296_14325[(2)] = null);
(statearr_14296_14325[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (3)))
{var inst_14276 = (state_14278[(2)]);var state_14278__$1 = state_14278;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14278__$1,inst_14276);
} else
{if((state_val_14279 === (12)))
{var inst_14269 = (state_14278[(2)]);var state_14278__$1 = state_14278;var statearr_14297_14326 = state_14278__$1;(statearr_14297_14326[(2)] = inst_14269);
(statearr_14297_14326[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (2)))
{var state_14278__$1 = state_14278;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14278__$1,(4),in$);
} else
{if((state_val_14279 === (19)))
{var inst_14264 = (state_14278[(2)]);var state_14278__$1 = state_14278;var statearr_14298_14327 = state_14278__$1;(statearr_14298_14327[(2)] = inst_14264);
(statearr_14298_14327[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (11)))
{var inst_14235 = (state_14278[(11)]);var inst_14249 = (state_14278[(7)]);var inst_14249__$1 = cljs.core.seq.call(null,inst_14235);var state_14278__$1 = (function (){var statearr_14299 = state_14278;(statearr_14299[(7)] = inst_14249__$1);
return statearr_14299;
})();if(inst_14249__$1)
{var statearr_14300_14328 = state_14278__$1;(statearr_14300_14328[(1)] = (14));
} else
{var statearr_14301_14329 = state_14278__$1;(statearr_14301_14329[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (9)))
{var inst_14271 = (state_14278[(2)]);var state_14278__$1 = (function (){var statearr_14302 = state_14278;(statearr_14302[(15)] = inst_14271);
return statearr_14302;
})();var statearr_14303_14330 = state_14278__$1;(statearr_14303_14330[(2)] = null);
(statearr_14303_14330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (5)))
{var inst_14227 = cljs.core.async.close_BANG_.call(null,out);var state_14278__$1 = state_14278;var statearr_14304_14331 = state_14278__$1;(statearr_14304_14331[(2)] = inst_14227);
(statearr_14304_14331[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (14)))
{var inst_14249 = (state_14278[(7)]);var inst_14251 = cljs.core.chunked_seq_QMARK_.call(null,inst_14249);var state_14278__$1 = state_14278;if(inst_14251)
{var statearr_14305_14332 = state_14278__$1;(statearr_14305_14332[(1)] = (17));
} else
{var statearr_14306_14333 = state_14278__$1;(statearr_14306_14333[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (16)))
{var inst_14267 = (state_14278[(2)]);var state_14278__$1 = state_14278;var statearr_14307_14334 = state_14278__$1;(statearr_14307_14334[(2)] = inst_14267);
(statearr_14307_14334[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14279 === (10)))
{var inst_14238 = (state_14278[(10)]);var inst_14236 = (state_14278[(12)]);var inst_14243 = cljs.core._nth.call(null,inst_14236,inst_14238);var state_14278__$1 = state_14278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14278__$1,(13),out,inst_14243);
} else
{if((state_val_14279 === (18)))
{var inst_14249 = (state_14278[(7)]);var inst_14258 = cljs.core.first.call(null,inst_14249);var state_14278__$1 = state_14278;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14278__$1,(20),out,inst_14258);
} else
{if((state_val_14279 === (8)))
{var inst_14237 = (state_14278[(9)]);var inst_14238 = (state_14278[(10)]);var inst_14240 = (inst_14238 < inst_14237);var inst_14241 = inst_14240;var state_14278__$1 = state_14278;if(cljs.core.truth_(inst_14241))
{var statearr_14308_14335 = state_14278__$1;(statearr_14308_14335[(1)] = (10));
} else
{var statearr_14309_14336 = state_14278__$1;(statearr_14309_14336[(1)] = (11));
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
}
}
}
}
});})(c__11564__auto__))
;return ((function (switch__11549__auto__,c__11564__auto__){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14313[(0)] = state_machine__11550__auto__);
(statearr_14313[(1)] = (1));
return statearr_14313;
});
var state_machine__11550__auto____1 = (function (state_14278){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14278);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14314){if((e14314 instanceof Object))
{var ex__11553__auto__ = e14314;var statearr_14315_14337 = state_14278;(statearr_14315_14337[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14278);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14314;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14338 = state_14278;
state_14278 = G__14338;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14278){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto__))
})();var state__11566__auto__ = (function (){var statearr_14316 = f__11565__auto__.call(null);(statearr_14316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto__);
return statearr_14316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto__))
);
return c__11564__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11564__auto___14419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___14419){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___14419){
return (function (state_14398){var state_val_14399 = (state_14398[(1)]);if((state_val_14399 === (7)))
{var inst_14394 = (state_14398[(2)]);var state_14398__$1 = state_14398;var statearr_14400_14420 = state_14398__$1;(statearr_14400_14420[(2)] = inst_14394);
(statearr_14400_14420[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (1)))
{var state_14398__$1 = state_14398;var statearr_14401_14421 = state_14398__$1;(statearr_14401_14421[(2)] = null);
(statearr_14401_14421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (4)))
{var inst_14381 = (state_14398[(7)]);var inst_14381__$1 = (state_14398[(2)]);var inst_14382 = (inst_14381__$1 == null);var state_14398__$1 = (function (){var statearr_14402 = state_14398;(statearr_14402[(7)] = inst_14381__$1);
return statearr_14402;
})();if(cljs.core.truth_(inst_14382))
{var statearr_14403_14422 = state_14398__$1;(statearr_14403_14422[(1)] = (5));
} else
{var statearr_14404_14423 = state_14398__$1;(statearr_14404_14423[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (6)))
{var inst_14381 = (state_14398[(7)]);var state_14398__$1 = state_14398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14398__$1,(11),to,inst_14381);
} else
{if((state_val_14399 === (3)))
{var inst_14396 = (state_14398[(2)]);var state_14398__$1 = state_14398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14398__$1,inst_14396);
} else
{if((state_val_14399 === (2)))
{var state_14398__$1 = state_14398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14398__$1,(4),from);
} else
{if((state_val_14399 === (11)))
{var inst_14391 = (state_14398[(2)]);var state_14398__$1 = (function (){var statearr_14405 = state_14398;(statearr_14405[(8)] = inst_14391);
return statearr_14405;
})();var statearr_14406_14424 = state_14398__$1;(statearr_14406_14424[(2)] = null);
(statearr_14406_14424[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (9)))
{var state_14398__$1 = state_14398;var statearr_14407_14425 = state_14398__$1;(statearr_14407_14425[(2)] = null);
(statearr_14407_14425[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (5)))
{var state_14398__$1 = state_14398;if(cljs.core.truth_(close_QMARK_))
{var statearr_14408_14426 = state_14398__$1;(statearr_14408_14426[(1)] = (8));
} else
{var statearr_14409_14427 = state_14398__$1;(statearr_14409_14427[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (10)))
{var inst_14388 = (state_14398[(2)]);var state_14398__$1 = state_14398;var statearr_14410_14428 = state_14398__$1;(statearr_14410_14428[(2)] = inst_14388);
(statearr_14410_14428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14399 === (8)))
{var inst_14385 = cljs.core.async.close_BANG_.call(null,to);var state_14398__$1 = state_14398;var statearr_14411_14429 = state_14398__$1;(statearr_14411_14429[(2)] = inst_14385);
(statearr_14411_14429[(1)] = (10));
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
});})(c__11564__auto___14419))
;return ((function (switch__11549__auto__,c__11564__auto___14419){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14415 = [null,null,null,null,null,null,null,null,null];(statearr_14415[(0)] = state_machine__11550__auto__);
(statearr_14415[(1)] = (1));
return statearr_14415;
});
var state_machine__11550__auto____1 = (function (state_14398){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14398);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14416){if((e14416 instanceof Object))
{var ex__11553__auto__ = e14416;var statearr_14417_14430 = state_14398;(statearr_14417_14430[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14431 = state_14398;
state_14398 = G__14431;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14398){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___14419))
})();var state__11566__auto__ = (function (){var statearr_14418 = f__11565__auto__.call(null);(statearr_14418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___14419);
return statearr_14418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___14419))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11564__auto___14518 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___14518,tc,fc){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___14518,tc,fc){
return (function (state_14496){var state_val_14497 = (state_14496[(1)]);if((state_val_14497 === (7)))
{var inst_14492 = (state_14496[(2)]);var state_14496__$1 = state_14496;var statearr_14498_14519 = state_14496__$1;(statearr_14498_14519[(2)] = inst_14492);
(statearr_14498_14519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (1)))
{var state_14496__$1 = state_14496;var statearr_14499_14520 = state_14496__$1;(statearr_14499_14520[(2)] = null);
(statearr_14499_14520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (4)))
{var inst_14477 = (state_14496[(7)]);var inst_14477__$1 = (state_14496[(2)]);var inst_14478 = (inst_14477__$1 == null);var state_14496__$1 = (function (){var statearr_14500 = state_14496;(statearr_14500[(7)] = inst_14477__$1);
return statearr_14500;
})();if(cljs.core.truth_(inst_14478))
{var statearr_14501_14521 = state_14496__$1;(statearr_14501_14521[(1)] = (5));
} else
{var statearr_14502_14522 = state_14496__$1;(statearr_14502_14522[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (6)))
{var inst_14477 = (state_14496[(7)]);var inst_14483 = p.call(null,inst_14477);var state_14496__$1 = state_14496;if(cljs.core.truth_(inst_14483))
{var statearr_14503_14523 = state_14496__$1;(statearr_14503_14523[(1)] = (9));
} else
{var statearr_14504_14524 = state_14496__$1;(statearr_14504_14524[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (3)))
{var inst_14494 = (state_14496[(2)]);var state_14496__$1 = state_14496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14496__$1,inst_14494);
} else
{if((state_val_14497 === (2)))
{var state_14496__$1 = state_14496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14496__$1,(4),ch);
} else
{if((state_val_14497 === (11)))
{var inst_14477 = (state_14496[(7)]);var inst_14487 = (state_14496[(2)]);var state_14496__$1 = state_14496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14496__$1,(8),inst_14487,inst_14477);
} else
{if((state_val_14497 === (9)))
{var state_14496__$1 = state_14496;var statearr_14505_14525 = state_14496__$1;(statearr_14505_14525[(2)] = tc);
(statearr_14505_14525[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (5)))
{var inst_14480 = cljs.core.async.close_BANG_.call(null,tc);var inst_14481 = cljs.core.async.close_BANG_.call(null,fc);var state_14496__$1 = (function (){var statearr_14506 = state_14496;(statearr_14506[(8)] = inst_14480);
return statearr_14506;
})();var statearr_14507_14526 = state_14496__$1;(statearr_14507_14526[(2)] = inst_14481);
(statearr_14507_14526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (10)))
{var state_14496__$1 = state_14496;var statearr_14508_14527 = state_14496__$1;(statearr_14508_14527[(2)] = fc);
(statearr_14508_14527[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14497 === (8)))
{var inst_14489 = (state_14496[(2)]);var state_14496__$1 = (function (){var statearr_14509 = state_14496;(statearr_14509[(9)] = inst_14489);
return statearr_14509;
})();var statearr_14510_14528 = state_14496__$1;(statearr_14510_14528[(2)] = null);
(statearr_14510_14528[(1)] = (2));
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
});})(c__11564__auto___14518,tc,fc))
;return ((function (switch__11549__auto__,c__11564__auto___14518,tc,fc){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14514 = [null,null,null,null,null,null,null,null,null,null];(statearr_14514[(0)] = state_machine__11550__auto__);
(statearr_14514[(1)] = (1));
return statearr_14514;
});
var state_machine__11550__auto____1 = (function (state_14496){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14496);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14515){if((e14515 instanceof Object))
{var ex__11553__auto__ = e14515;var statearr_14516_14529 = state_14496;(statearr_14516_14529[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14496);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14515;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14530 = state_14496;
state_14496 = G__14530;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14496){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___14518,tc,fc))
})();var state__11566__auto__ = (function (){var statearr_14517 = f__11565__auto__.call(null);(statearr_14517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___14518);
return statearr_14517;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___14518,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11564__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto__){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto__){
return (function (state_14577){var state_val_14578 = (state_14577[(1)]);if((state_val_14578 === (7)))
{var inst_14573 = (state_14577[(2)]);var state_14577__$1 = state_14577;var statearr_14579_14595 = state_14577__$1;(statearr_14579_14595[(2)] = inst_14573);
(statearr_14579_14595[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14578 === (6)))
{var inst_14563 = (state_14577[(7)]);var inst_14566 = (state_14577[(8)]);var inst_14570 = f.call(null,inst_14563,inst_14566);var inst_14563__$1 = inst_14570;var state_14577__$1 = (function (){var statearr_14580 = state_14577;(statearr_14580[(7)] = inst_14563__$1);
return statearr_14580;
})();var statearr_14581_14596 = state_14577__$1;(statearr_14581_14596[(2)] = null);
(statearr_14581_14596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14578 === (5)))
{var inst_14563 = (state_14577[(7)]);var state_14577__$1 = state_14577;var statearr_14582_14597 = state_14577__$1;(statearr_14582_14597[(2)] = inst_14563);
(statearr_14582_14597[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14578 === (4)))
{var inst_14566 = (state_14577[(8)]);var inst_14566__$1 = (state_14577[(2)]);var inst_14567 = (inst_14566__$1 == null);var state_14577__$1 = (function (){var statearr_14583 = state_14577;(statearr_14583[(8)] = inst_14566__$1);
return statearr_14583;
})();if(cljs.core.truth_(inst_14567))
{var statearr_14584_14598 = state_14577__$1;(statearr_14584_14598[(1)] = (5));
} else
{var statearr_14585_14599 = state_14577__$1;(statearr_14585_14599[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14578 === (3)))
{var inst_14575 = (state_14577[(2)]);var state_14577__$1 = state_14577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14577__$1,inst_14575);
} else
{if((state_val_14578 === (2)))
{var state_14577__$1 = state_14577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14577__$1,(4),ch);
} else
{if((state_val_14578 === (1)))
{var inst_14563 = init;var state_14577__$1 = (function (){var statearr_14586 = state_14577;(statearr_14586[(7)] = inst_14563);
return statearr_14586;
})();var statearr_14587_14600 = state_14577__$1;(statearr_14587_14600[(2)] = null);
(statearr_14587_14600[(1)] = (2));
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
});})(c__11564__auto__))
;return ((function (switch__11549__auto__,c__11564__auto__){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14591 = [null,null,null,null,null,null,null,null,null];(statearr_14591[(0)] = state_machine__11550__auto__);
(statearr_14591[(1)] = (1));
return statearr_14591;
});
var state_machine__11550__auto____1 = (function (state_14577){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14577);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14592){if((e14592 instanceof Object))
{var ex__11553__auto__ = e14592;var statearr_14593_14601 = state_14577;(statearr_14593_14601[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14602 = state_14577;
state_14577 = G__14602;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14577){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto__))
})();var state__11566__auto__ = (function (){var statearr_14594 = f__11565__auto__.call(null);(statearr_14594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto__);
return statearr_14594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto__))
);
return c__11564__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11564__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto__){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto__){
return (function (state_14664){var state_val_14665 = (state_14664[(1)]);if((state_val_14665 === (7)))
{var inst_14645 = (state_14664[(7)]);var inst_14650 = (state_14664[(2)]);var inst_14651 = cljs.core.next.call(null,inst_14645);var inst_14645__$1 = inst_14651;var state_14664__$1 = (function (){var statearr_14666 = state_14664;(statearr_14666[(8)] = inst_14650);
(statearr_14666[(7)] = inst_14645__$1);
return statearr_14666;
})();var statearr_14667_14685 = state_14664__$1;(statearr_14667_14685[(2)] = null);
(statearr_14667_14685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (1)))
{var inst_14644 = cljs.core.seq.call(null,coll);var inst_14645 = inst_14644;var state_14664__$1 = (function (){var statearr_14668 = state_14664;(statearr_14668[(7)] = inst_14645);
return statearr_14668;
})();var statearr_14669_14686 = state_14664__$1;(statearr_14669_14686[(2)] = null);
(statearr_14669_14686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (4)))
{var inst_14645 = (state_14664[(7)]);var inst_14648 = cljs.core.first.call(null,inst_14645);var state_14664__$1 = state_14664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14664__$1,(7),ch,inst_14648);
} else
{if((state_val_14665 === (6)))
{var inst_14660 = (state_14664[(2)]);var state_14664__$1 = state_14664;var statearr_14670_14687 = state_14664__$1;(statearr_14670_14687[(2)] = inst_14660);
(statearr_14670_14687[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (3)))
{var inst_14662 = (state_14664[(2)]);var state_14664__$1 = state_14664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14664__$1,inst_14662);
} else
{if((state_val_14665 === (2)))
{var inst_14645 = (state_14664[(7)]);var state_14664__$1 = state_14664;if(cljs.core.truth_(inst_14645))
{var statearr_14671_14688 = state_14664__$1;(statearr_14671_14688[(1)] = (4));
} else
{var statearr_14672_14689 = state_14664__$1;(statearr_14672_14689[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (9)))
{var state_14664__$1 = state_14664;var statearr_14673_14690 = state_14664__$1;(statearr_14673_14690[(2)] = null);
(statearr_14673_14690[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (5)))
{var state_14664__$1 = state_14664;if(cljs.core.truth_(close_QMARK_))
{var statearr_14674_14691 = state_14664__$1;(statearr_14674_14691[(1)] = (8));
} else
{var statearr_14675_14692 = state_14664__$1;(statearr_14675_14692[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (10)))
{var inst_14658 = (state_14664[(2)]);var state_14664__$1 = state_14664;var statearr_14676_14693 = state_14664__$1;(statearr_14676_14693[(2)] = inst_14658);
(statearr_14676_14693[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14665 === (8)))
{var inst_14655 = cljs.core.async.close_BANG_.call(null,ch);var state_14664__$1 = state_14664;var statearr_14677_14694 = state_14664__$1;(statearr_14677_14694[(2)] = inst_14655);
(statearr_14677_14694[(1)] = (10));
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
});})(c__11564__auto__))
;return ((function (switch__11549__auto__,c__11564__auto__){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_14681 = [null,null,null,null,null,null,null,null,null];(statearr_14681[(0)] = state_machine__11550__auto__);
(statearr_14681[(1)] = (1));
return statearr_14681;
});
var state_machine__11550__auto____1 = (function (state_14664){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_14664);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e14682){if((e14682 instanceof Object))
{var ex__11553__auto__ = e14682;var statearr_14683_14695 = state_14664;(statearr_14683_14695[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14664);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14696 = state_14664;
state_14664 = G__14696;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_14664){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_14664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto__))
})();var state__11566__auto__ = (function (){var statearr_14684 = f__11565__auto__.call(null);(statearr_14684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto__);
return statearr_14684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto__))
);
return c__11564__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14698 = {};return obj14698;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3530__auto__ = _;if(and__3530__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4169__auto__ = (((_ == null))?null:_);return (function (){var or__3542__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14700 = {};return obj14700;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14924 = (function (cs,ch,mult,meta14925){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14925 = meta14925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14924.cljs$lang$type = true;
cljs.core.async.t14924.cljs$lang$ctorStr = "cljs.core.async/t14924";
cljs.core.async.t14924.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t14924");
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14924.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14926){var self__ = this;
var _14926__$1 = this;return self__.meta14925;
});})(cs))
;
cljs.core.async.t14924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14926,meta14925__$1){var self__ = this;
var _14926__$1 = this;return (new cljs.core.async.t14924(self__.cs,self__.ch,self__.mult,meta14925__$1));
});})(cs))
;
cljs.core.async.__GT_t14924 = ((function (cs){
return (function __GT_t14924(cs__$1,ch__$1,mult__$1,meta14925){return (new cljs.core.async.t14924(cs__$1,ch__$1,mult__$1,meta14925));
});})(cs))
;
}
return (new cljs.core.async.t14924(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11564__auto___15147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___15147,cs,m,dchan,dctr,done){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___15147,cs,m,dchan,dctr,done){
return (function (state_15061){var state_val_15062 = (state_15061[(1)]);if((state_val_15062 === (7)))
{var inst_15057 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15063_15148 = state_15061__$1;(statearr_15063_15148[(2)] = inst_15057);
(statearr_15063_15148[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (20)))
{var inst_14958 = (state_15061[(7)]);var inst_14968 = cljs.core.first.call(null,inst_14958);var inst_14969 = cljs.core.nth.call(null,inst_14968,(0),null);var inst_14970 = cljs.core.nth.call(null,inst_14968,(1),null);var state_15061__$1 = (function (){var statearr_15064 = state_15061;(statearr_15064[(8)] = inst_14969);
return statearr_15064;
})();if(cljs.core.truth_(inst_14970))
{var statearr_15065_15149 = state_15061__$1;(statearr_15065_15149[(1)] = (22));
} else
{var statearr_15066_15150 = state_15061__$1;(statearr_15066_15150[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (27)))
{var inst_14998 = (state_15061[(9)]);var inst_15000 = (state_15061[(10)]);var inst_15005 = cljs.core._nth.call(null,inst_14998,inst_15000);var state_15061__$1 = (function (){var statearr_15067 = state_15061;(statearr_15067[(11)] = inst_15005);
return statearr_15067;
})();var statearr_15068_15151 = state_15061__$1;(statearr_15068_15151[(2)] = null);
(statearr_15068_15151[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (1)))
{var state_15061__$1 = state_15061;var statearr_15069_15152 = state_15061__$1;(statearr_15069_15152[(2)] = null);
(statearr_15069_15152[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (24)))
{var inst_14958 = (state_15061[(7)]);var inst_14975 = (state_15061[(2)]);var inst_14976 = cljs.core.next.call(null,inst_14958);var inst_14938 = inst_14976;var inst_14939 = null;var inst_14940 = (0);var inst_14941 = (0);var state_15061__$1 = (function (){var statearr_15070 = state_15061;(statearr_15070[(12)] = inst_14940);
(statearr_15070[(13)] = inst_14939);
(statearr_15070[(14)] = inst_14938);
(statearr_15070[(15)] = inst_14975);
(statearr_15070[(16)] = inst_14941);
return statearr_15070;
})();var statearr_15071_15153 = state_15061__$1;(statearr_15071_15153[(2)] = null);
(statearr_15071_15153[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (39)))
{var inst_15018 = (state_15061[(17)]);var inst_15036 = (state_15061[(2)]);var inst_15037 = cljs.core.next.call(null,inst_15018);var inst_14997 = inst_15037;var inst_14998 = null;var inst_14999 = (0);var inst_15000 = (0);var state_15061__$1 = (function (){var statearr_15075 = state_15061;(statearr_15075[(9)] = inst_14998);
(statearr_15075[(18)] = inst_14997);
(statearr_15075[(10)] = inst_15000);
(statearr_15075[(19)] = inst_15036);
(statearr_15075[(20)] = inst_14999);
return statearr_15075;
})();var statearr_15076_15154 = state_15061__$1;(statearr_15076_15154[(2)] = null);
(statearr_15076_15154[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (4)))
{var inst_14929 = (state_15061[(21)]);var inst_14929__$1 = (state_15061[(2)]);var inst_14930 = (inst_14929__$1 == null);var state_15061__$1 = (function (){var statearr_15077 = state_15061;(statearr_15077[(21)] = inst_14929__$1);
return statearr_15077;
})();if(cljs.core.truth_(inst_14930))
{var statearr_15078_15155 = state_15061__$1;(statearr_15078_15155[(1)] = (5));
} else
{var statearr_15079_15156 = state_15061__$1;(statearr_15079_15156[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (15)))
{var inst_14940 = (state_15061[(12)]);var inst_14939 = (state_15061[(13)]);var inst_14938 = (state_15061[(14)]);var inst_14941 = (state_15061[(16)]);var inst_14954 = (state_15061[(2)]);var inst_14955 = (inst_14941 + (1));var tmp15072 = inst_14940;var tmp15073 = inst_14939;var tmp15074 = inst_14938;var inst_14938__$1 = tmp15074;var inst_14939__$1 = tmp15073;var inst_14940__$1 = tmp15072;var inst_14941__$1 = inst_14955;var state_15061__$1 = (function (){var statearr_15080 = state_15061;(statearr_15080[(12)] = inst_14940__$1);
(statearr_15080[(13)] = inst_14939__$1);
(statearr_15080[(22)] = inst_14954);
(statearr_15080[(14)] = inst_14938__$1);
(statearr_15080[(16)] = inst_14941__$1);
return statearr_15080;
})();var statearr_15081_15157 = state_15061__$1;(statearr_15081_15157[(2)] = null);
(statearr_15081_15157[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (21)))
{var inst_14979 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15082_15158 = state_15061__$1;(statearr_15082_15158[(2)] = inst_14979);
(statearr_15082_15158[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (31)))
{var inst_15005 = (state_15061[(11)]);var inst_15006 = (state_15061[(2)]);var inst_15007 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15008 = cljs.core.async.untap_STAR_.call(null,m,inst_15005);var state_15061__$1 = (function (){var statearr_15083 = state_15061;(statearr_15083[(23)] = inst_15007);
(statearr_15083[(24)] = inst_15006);
return statearr_15083;
})();var statearr_15084_15159 = state_15061__$1;(statearr_15084_15159[(2)] = inst_15008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (32)))
{var inst_15005 = (state_15061[(11)]);var inst_14929 = (state_15061[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15061,(31),Object,null,(30));var inst_15012 = cljs.core.async.put_BANG_.call(null,inst_15005,inst_14929,done);var state_15061__$1 = state_15061;var statearr_15085_15160 = state_15061__$1;(statearr_15085_15160[(2)] = inst_15012);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (40)))
{var inst_15027 = (state_15061[(25)]);var inst_15028 = (state_15061[(2)]);var inst_15029 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15030 = cljs.core.async.untap_STAR_.call(null,m,inst_15027);var state_15061__$1 = (function (){var statearr_15086 = state_15061;(statearr_15086[(26)] = inst_15028);
(statearr_15086[(27)] = inst_15029);
return statearr_15086;
})();var statearr_15087_15161 = state_15061__$1;(statearr_15087_15161[(2)] = inst_15030);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (33)))
{var inst_15018 = (state_15061[(17)]);var inst_15020 = cljs.core.chunked_seq_QMARK_.call(null,inst_15018);var state_15061__$1 = state_15061;if(inst_15020)
{var statearr_15088_15162 = state_15061__$1;(statearr_15088_15162[(1)] = (36));
} else
{var statearr_15089_15163 = state_15061__$1;(statearr_15089_15163[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (13)))
{var inst_14948 = (state_15061[(28)]);var inst_14951 = cljs.core.async.close_BANG_.call(null,inst_14948);var state_15061__$1 = state_15061;var statearr_15090_15164 = state_15061__$1;(statearr_15090_15164[(2)] = inst_14951);
(statearr_15090_15164[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (22)))
{var inst_14969 = (state_15061[(8)]);var inst_14972 = cljs.core.async.close_BANG_.call(null,inst_14969);var state_15061__$1 = state_15061;var statearr_15091_15165 = state_15061__$1;(statearr_15091_15165[(2)] = inst_14972);
(statearr_15091_15165[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (36)))
{var inst_15018 = (state_15061[(17)]);var inst_15022 = cljs.core.chunk_first.call(null,inst_15018);var inst_15023 = cljs.core.chunk_rest.call(null,inst_15018);var inst_15024 = cljs.core.count.call(null,inst_15022);var inst_14997 = inst_15023;var inst_14998 = inst_15022;var inst_14999 = inst_15024;var inst_15000 = (0);var state_15061__$1 = (function (){var statearr_15092 = state_15061;(statearr_15092[(9)] = inst_14998);
(statearr_15092[(18)] = inst_14997);
(statearr_15092[(10)] = inst_15000);
(statearr_15092[(20)] = inst_14999);
return statearr_15092;
})();var statearr_15093_15166 = state_15061__$1;(statearr_15093_15166[(2)] = null);
(statearr_15093_15166[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (41)))
{var inst_15027 = (state_15061[(25)]);var inst_14929 = (state_15061[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15061,(40),Object,null,(39));var inst_15034 = cljs.core.async.put_BANG_.call(null,inst_15027,inst_14929,done);var state_15061__$1 = state_15061;var statearr_15094_15167 = state_15061__$1;(statearr_15094_15167[(2)] = inst_15034);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (43)))
{var state_15061__$1 = state_15061;var statearr_15095_15168 = state_15061__$1;(statearr_15095_15168[(2)] = null);
(statearr_15095_15168[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (29)))
{var inst_15045 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15096_15169 = state_15061__$1;(statearr_15096_15169[(2)] = inst_15045);
(statearr_15096_15169[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (44)))
{var inst_15054 = (state_15061[(2)]);var state_15061__$1 = (function (){var statearr_15097 = state_15061;(statearr_15097[(29)] = inst_15054);
return statearr_15097;
})();var statearr_15098_15170 = state_15061__$1;(statearr_15098_15170[(2)] = null);
(statearr_15098_15170[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (6)))
{var inst_14989 = (state_15061[(30)]);var inst_14988 = cljs.core.deref.call(null,cs);var inst_14989__$1 = cljs.core.keys.call(null,inst_14988);var inst_14990 = cljs.core.count.call(null,inst_14989__$1);var inst_14991 = cljs.core.reset_BANG_.call(null,dctr,inst_14990);var inst_14996 = cljs.core.seq.call(null,inst_14989__$1);var inst_14997 = inst_14996;var inst_14998 = null;var inst_14999 = (0);var inst_15000 = (0);var state_15061__$1 = (function (){var statearr_15099 = state_15061;(statearr_15099[(31)] = inst_14991);
(statearr_15099[(30)] = inst_14989__$1);
(statearr_15099[(9)] = inst_14998);
(statearr_15099[(18)] = inst_14997);
(statearr_15099[(10)] = inst_15000);
(statearr_15099[(20)] = inst_14999);
return statearr_15099;
})();var statearr_15100_15171 = state_15061__$1;(statearr_15100_15171[(2)] = null);
(statearr_15100_15171[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (28)))
{var inst_14997 = (state_15061[(18)]);var inst_15018 = (state_15061[(17)]);var inst_15018__$1 = cljs.core.seq.call(null,inst_14997);var state_15061__$1 = (function (){var statearr_15101 = state_15061;(statearr_15101[(17)] = inst_15018__$1);
return statearr_15101;
})();if(inst_15018__$1)
{var statearr_15102_15172 = state_15061__$1;(statearr_15102_15172[(1)] = (33));
} else
{var statearr_15103_15173 = state_15061__$1;(statearr_15103_15173[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (25)))
{var inst_15000 = (state_15061[(10)]);var inst_14999 = (state_15061[(20)]);var inst_15002 = (inst_15000 < inst_14999);var inst_15003 = inst_15002;var state_15061__$1 = state_15061;if(cljs.core.truth_(inst_15003))
{var statearr_15104_15174 = state_15061__$1;(statearr_15104_15174[(1)] = (27));
} else
{var statearr_15105_15175 = state_15061__$1;(statearr_15105_15175[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (34)))
{var state_15061__$1 = state_15061;var statearr_15106_15176 = state_15061__$1;(statearr_15106_15176[(2)] = null);
(statearr_15106_15176[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (17)))
{var state_15061__$1 = state_15061;var statearr_15107_15177 = state_15061__$1;(statearr_15107_15177[(2)] = null);
(statearr_15107_15177[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (3)))
{var inst_15059 = (state_15061[(2)]);var state_15061__$1 = state_15061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15061__$1,inst_15059);
} else
{if((state_val_15062 === (12)))
{var inst_14984 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15108_15178 = state_15061__$1;(statearr_15108_15178[(2)] = inst_14984);
(statearr_15108_15178[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (2)))
{var state_15061__$1 = state_15061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15061__$1,(4),ch);
} else
{if((state_val_15062 === (23)))
{var state_15061__$1 = state_15061;var statearr_15109_15179 = state_15061__$1;(statearr_15109_15179[(2)] = null);
(statearr_15109_15179[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (35)))
{var inst_15043 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15110_15180 = state_15061__$1;(statearr_15110_15180[(2)] = inst_15043);
(statearr_15110_15180[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (19)))
{var inst_14958 = (state_15061[(7)]);var inst_14962 = cljs.core.chunk_first.call(null,inst_14958);var inst_14963 = cljs.core.chunk_rest.call(null,inst_14958);var inst_14964 = cljs.core.count.call(null,inst_14962);var inst_14938 = inst_14963;var inst_14939 = inst_14962;var inst_14940 = inst_14964;var inst_14941 = (0);var state_15061__$1 = (function (){var statearr_15111 = state_15061;(statearr_15111[(12)] = inst_14940);
(statearr_15111[(13)] = inst_14939);
(statearr_15111[(14)] = inst_14938);
(statearr_15111[(16)] = inst_14941);
return statearr_15111;
})();var statearr_15112_15181 = state_15061__$1;(statearr_15112_15181[(2)] = null);
(statearr_15112_15181[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (11)))
{var inst_14938 = (state_15061[(14)]);var inst_14958 = (state_15061[(7)]);var inst_14958__$1 = cljs.core.seq.call(null,inst_14938);var state_15061__$1 = (function (){var statearr_15113 = state_15061;(statearr_15113[(7)] = inst_14958__$1);
return statearr_15113;
})();if(inst_14958__$1)
{var statearr_15114_15182 = state_15061__$1;(statearr_15114_15182[(1)] = (16));
} else
{var statearr_15115_15183 = state_15061__$1;(statearr_15115_15183[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (9)))
{var inst_14986 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15116_15184 = state_15061__$1;(statearr_15116_15184[(2)] = inst_14986);
(statearr_15116_15184[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (5)))
{var inst_14936 = cljs.core.deref.call(null,cs);var inst_14937 = cljs.core.seq.call(null,inst_14936);var inst_14938 = inst_14937;var inst_14939 = null;var inst_14940 = (0);var inst_14941 = (0);var state_15061__$1 = (function (){var statearr_15117 = state_15061;(statearr_15117[(12)] = inst_14940);
(statearr_15117[(13)] = inst_14939);
(statearr_15117[(14)] = inst_14938);
(statearr_15117[(16)] = inst_14941);
return statearr_15117;
})();var statearr_15118_15185 = state_15061__$1;(statearr_15118_15185[(2)] = null);
(statearr_15118_15185[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (14)))
{var state_15061__$1 = state_15061;var statearr_15119_15186 = state_15061__$1;(statearr_15119_15186[(2)] = null);
(statearr_15119_15186[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (45)))
{var inst_15051 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15120_15187 = state_15061__$1;(statearr_15120_15187[(2)] = inst_15051);
(statearr_15120_15187[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (26)))
{var inst_14989 = (state_15061[(30)]);var inst_15047 = (state_15061[(2)]);var inst_15048 = cljs.core.seq.call(null,inst_14989);var state_15061__$1 = (function (){var statearr_15121 = state_15061;(statearr_15121[(32)] = inst_15047);
return statearr_15121;
})();if(inst_15048)
{var statearr_15122_15188 = state_15061__$1;(statearr_15122_15188[(1)] = (42));
} else
{var statearr_15123_15189 = state_15061__$1;(statearr_15123_15189[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (16)))
{var inst_14958 = (state_15061[(7)]);var inst_14960 = cljs.core.chunked_seq_QMARK_.call(null,inst_14958);var state_15061__$1 = state_15061;if(inst_14960)
{var statearr_15127_15190 = state_15061__$1;(statearr_15127_15190[(1)] = (19));
} else
{var statearr_15128_15191 = state_15061__$1;(statearr_15128_15191[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (38)))
{var inst_15040 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15129_15192 = state_15061__$1;(statearr_15129_15192[(2)] = inst_15040);
(statearr_15129_15192[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (30)))
{var inst_14998 = (state_15061[(9)]);var inst_14997 = (state_15061[(18)]);var inst_15000 = (state_15061[(10)]);var inst_14999 = (state_15061[(20)]);var inst_15014 = (state_15061[(2)]);var inst_15015 = (inst_15000 + (1));var tmp15124 = inst_14998;var tmp15125 = inst_14997;var tmp15126 = inst_14999;var inst_14997__$1 = tmp15125;var inst_14998__$1 = tmp15124;var inst_14999__$1 = tmp15126;var inst_15000__$1 = inst_15015;var state_15061__$1 = (function (){var statearr_15130 = state_15061;(statearr_15130[(33)] = inst_15014);
(statearr_15130[(9)] = inst_14998__$1);
(statearr_15130[(18)] = inst_14997__$1);
(statearr_15130[(10)] = inst_15000__$1);
(statearr_15130[(20)] = inst_14999__$1);
return statearr_15130;
})();var statearr_15131_15193 = state_15061__$1;(statearr_15131_15193[(2)] = null);
(statearr_15131_15193[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (10)))
{var inst_14939 = (state_15061[(13)]);var inst_14941 = (state_15061[(16)]);var inst_14947 = cljs.core._nth.call(null,inst_14939,inst_14941);var inst_14948 = cljs.core.nth.call(null,inst_14947,(0),null);var inst_14949 = cljs.core.nth.call(null,inst_14947,(1),null);var state_15061__$1 = (function (){var statearr_15132 = state_15061;(statearr_15132[(28)] = inst_14948);
return statearr_15132;
})();if(cljs.core.truth_(inst_14949))
{var statearr_15133_15194 = state_15061__$1;(statearr_15133_15194[(1)] = (13));
} else
{var statearr_15134_15195 = state_15061__$1;(statearr_15134_15195[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (18)))
{var inst_14982 = (state_15061[(2)]);var state_15061__$1 = state_15061;var statearr_15135_15196 = state_15061__$1;(statearr_15135_15196[(2)] = inst_14982);
(statearr_15135_15196[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (42)))
{var state_15061__$1 = state_15061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15061__$1,(45),dchan);
} else
{if((state_val_15062 === (37)))
{var inst_15018 = (state_15061[(17)]);var inst_15027 = cljs.core.first.call(null,inst_15018);var state_15061__$1 = (function (){var statearr_15136 = state_15061;(statearr_15136[(25)] = inst_15027);
return statearr_15136;
})();var statearr_15137_15197 = state_15061__$1;(statearr_15137_15197[(2)] = null);
(statearr_15137_15197[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15062 === (8)))
{var inst_14940 = (state_15061[(12)]);var inst_14941 = (state_15061[(16)]);var inst_14943 = (inst_14941 < inst_14940);var inst_14944 = inst_14943;var state_15061__$1 = state_15061;if(cljs.core.truth_(inst_14944))
{var statearr_15138_15198 = state_15061__$1;(statearr_15138_15198[(1)] = (10));
} else
{var statearr_15139_15199 = state_15061__$1;(statearr_15139_15199[(1)] = (11));
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
});})(c__11564__auto___15147,cs,m,dchan,dctr,done))
;return ((function (switch__11549__auto__,c__11564__auto___15147,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_15143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15143[(0)] = state_machine__11550__auto__);
(statearr_15143[(1)] = (1));
return statearr_15143;
});
var state_machine__11550__auto____1 = (function (state_15061){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_15061);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e15144){if((e15144 instanceof Object))
{var ex__11553__auto__ = e15144;var statearr_15145_15200 = state_15061;(statearr_15145_15200[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15201 = state_15061;
state_15061 = G__15201;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_15061){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_15061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___15147,cs,m,dchan,dctr,done))
})();var state__11566__auto__ = (function (){var statearr_15146 = f__11565__auto__.call(null);(statearr_15146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___15147);
return statearr_15146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___15147,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15203 = {};return obj15203;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15313 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15314){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15314 = meta15314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15313.cljs$lang$type = true;
cljs.core.async.t15313.cljs$lang$ctorStr = "cljs.core.async/t15313";
cljs.core.async.t15313.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15313");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15315){var self__ = this;
var _15315__$1 = this;return self__.meta15314;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15315,meta15314__$1){var self__ = this;
var _15315__$1 = this;return (new cljs.core.async.t15313(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15314__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15313 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15314){return (new cljs.core.async.t15313(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15314));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15313(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11564__auto___15422 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15380){var state_val_15381 = (state_15380[(1)]);if((state_val_15381 === (7)))
{var inst_15329 = (state_15380[(7)]);var inst_15334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15329);var state_15380__$1 = state_15380;var statearr_15382_15423 = state_15380__$1;(statearr_15382_15423[(2)] = inst_15334);
(statearr_15382_15423[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (20)))
{var inst_15344 = (state_15380[(8)]);var state_15380__$1 = state_15380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15380__$1,(23),out,inst_15344);
} else
{if((state_val_15381 === (1)))
{var inst_15319 = (state_15380[(9)]);var inst_15319__$1 = calc_state.call(null);var inst_15320 = cljs.core.seq_QMARK_.call(null,inst_15319__$1);var state_15380__$1 = (function (){var statearr_15383 = state_15380;(statearr_15383[(9)] = inst_15319__$1);
return statearr_15383;
})();if(inst_15320)
{var statearr_15384_15424 = state_15380__$1;(statearr_15384_15424[(1)] = (2));
} else
{var statearr_15385_15425 = state_15380__$1;(statearr_15385_15425[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (4)))
{var inst_15319 = (state_15380[(9)]);var inst_15325 = (state_15380[(2)]);var inst_15326 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15327 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15328 = cljs.core.get.call(null,inst_15325,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_15329 = inst_15319;var state_15380__$1 = (function (){var statearr_15386 = state_15380;(statearr_15386[(10)] = inst_15326);
(statearr_15386[(11)] = inst_15327);
(statearr_15386[(12)] = inst_15328);
(statearr_15386[(7)] = inst_15329);
return statearr_15386;
})();var statearr_15387_15426 = state_15380__$1;(statearr_15387_15426[(2)] = null);
(statearr_15387_15426[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (15)))
{var state_15380__$1 = state_15380;var statearr_15388_15427 = state_15380__$1;(statearr_15388_15427[(2)] = null);
(statearr_15388_15427[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (21)))
{var state_15380__$1 = state_15380;var statearr_15389_15428 = state_15380__$1;(statearr_15389_15428[(2)] = null);
(statearr_15389_15428[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (13)))
{var inst_15376 = (state_15380[(2)]);var state_15380__$1 = state_15380;var statearr_15390_15429 = state_15380__$1;(statearr_15390_15429[(2)] = inst_15376);
(statearr_15390_15429[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (22)))
{var inst_15337 = (state_15380[(13)]);var inst_15373 = (state_15380[(2)]);var inst_15329 = inst_15337;var state_15380__$1 = (function (){var statearr_15391 = state_15380;(statearr_15391[(14)] = inst_15373);
(statearr_15391[(7)] = inst_15329);
return statearr_15391;
})();var statearr_15392_15430 = state_15380__$1;(statearr_15392_15430[(2)] = null);
(statearr_15392_15430[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (6)))
{var inst_15378 = (state_15380[(2)]);var state_15380__$1 = state_15380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15380__$1,inst_15378);
} else
{if((state_val_15381 === (17)))
{var inst_15359 = (state_15380[(15)]);var state_15380__$1 = state_15380;var statearr_15393_15431 = state_15380__$1;(statearr_15393_15431[(2)] = inst_15359);
(statearr_15393_15431[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (3)))
{var inst_15319 = (state_15380[(9)]);var state_15380__$1 = state_15380;var statearr_15394_15432 = state_15380__$1;(statearr_15394_15432[(2)] = inst_15319);
(statearr_15394_15432[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (12)))
{var inst_15340 = (state_15380[(16)]);var inst_15345 = (state_15380[(17)]);var inst_15359 = (state_15380[(15)]);var inst_15359__$1 = inst_15340.call(null,inst_15345);var state_15380__$1 = (function (){var statearr_15395 = state_15380;(statearr_15395[(15)] = inst_15359__$1);
return statearr_15395;
})();if(cljs.core.truth_(inst_15359__$1))
{var statearr_15396_15433 = state_15380__$1;(statearr_15396_15433[(1)] = (17));
} else
{var statearr_15397_15434 = state_15380__$1;(statearr_15397_15434[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (2)))
{var inst_15319 = (state_15380[(9)]);var inst_15322 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15319);var state_15380__$1 = state_15380;var statearr_15398_15435 = state_15380__$1;(statearr_15398_15435[(2)] = inst_15322);
(statearr_15398_15435[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (23)))
{var inst_15370 = (state_15380[(2)]);var state_15380__$1 = state_15380;var statearr_15399_15436 = state_15380__$1;(statearr_15399_15436[(2)] = inst_15370);
(statearr_15399_15436[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (19)))
{var inst_15367 = (state_15380[(2)]);var state_15380__$1 = state_15380;if(cljs.core.truth_(inst_15367))
{var statearr_15400_15437 = state_15380__$1;(statearr_15400_15437[(1)] = (20));
} else
{var statearr_15401_15438 = state_15380__$1;(statearr_15401_15438[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (11)))
{var inst_15344 = (state_15380[(8)]);var inst_15350 = (inst_15344 == null);var state_15380__$1 = state_15380;if(cljs.core.truth_(inst_15350))
{var statearr_15402_15439 = state_15380__$1;(statearr_15402_15439[(1)] = (14));
} else
{var statearr_15403_15440 = state_15380__$1;(statearr_15403_15440[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (9)))
{var inst_15337 = (state_15380[(13)]);var inst_15337__$1 = (state_15380[(2)]);var inst_15338 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_15339 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_15340 = cljs.core.get.call(null,inst_15337__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_15380__$1 = (function (){var statearr_15404 = state_15380;(statearr_15404[(18)] = inst_15339);
(statearr_15404[(13)] = inst_15337__$1);
(statearr_15404[(16)] = inst_15340);
return statearr_15404;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15380__$1,(10),inst_15338);
} else
{if((state_val_15381 === (5)))
{var inst_15329 = (state_15380[(7)]);var inst_15332 = cljs.core.seq_QMARK_.call(null,inst_15329);var state_15380__$1 = state_15380;if(inst_15332)
{var statearr_15405_15441 = state_15380__$1;(statearr_15405_15441[(1)] = (7));
} else
{var statearr_15406_15442 = state_15380__$1;(statearr_15406_15442[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (14)))
{var inst_15345 = (state_15380[(17)]);var inst_15352 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15345);var state_15380__$1 = state_15380;var statearr_15407_15443 = state_15380__$1;(statearr_15407_15443[(2)] = inst_15352);
(statearr_15407_15443[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (16)))
{var inst_15355 = (state_15380[(2)]);var inst_15356 = calc_state.call(null);var inst_15329 = inst_15356;var state_15380__$1 = (function (){var statearr_15408 = state_15380;(statearr_15408[(19)] = inst_15355);
(statearr_15408[(7)] = inst_15329);
return statearr_15408;
})();var statearr_15409_15444 = state_15380__$1;(statearr_15409_15444[(2)] = null);
(statearr_15409_15444[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (10)))
{var inst_15345 = (state_15380[(17)]);var inst_15344 = (state_15380[(8)]);var inst_15343 = (state_15380[(2)]);var inst_15344__$1 = cljs.core.nth.call(null,inst_15343,(0),null);var inst_15345__$1 = cljs.core.nth.call(null,inst_15343,(1),null);var inst_15346 = (inst_15344__$1 == null);var inst_15347 = cljs.core._EQ_.call(null,inst_15345__$1,change);var inst_15348 = (inst_15346) || (inst_15347);var state_15380__$1 = (function (){var statearr_15410 = state_15380;(statearr_15410[(17)] = inst_15345__$1);
(statearr_15410[(8)] = inst_15344__$1);
return statearr_15410;
})();if(cljs.core.truth_(inst_15348))
{var statearr_15411_15445 = state_15380__$1;(statearr_15411_15445[(1)] = (11));
} else
{var statearr_15412_15446 = state_15380__$1;(statearr_15412_15446[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (18)))
{var inst_15339 = (state_15380[(18)]);var inst_15340 = (state_15380[(16)]);var inst_15345 = (state_15380[(17)]);var inst_15362 = cljs.core.empty_QMARK_.call(null,inst_15340);var inst_15363 = inst_15339.call(null,inst_15345);var inst_15364 = cljs.core.not.call(null,inst_15363);var inst_15365 = (inst_15362) && (inst_15364);var state_15380__$1 = state_15380;var statearr_15413_15447 = state_15380__$1;(statearr_15413_15447[(2)] = inst_15365);
(statearr_15413_15447[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15381 === (8)))
{var inst_15329 = (state_15380[(7)]);var state_15380__$1 = state_15380;var statearr_15414_15448 = state_15380__$1;(statearr_15414_15448[(2)] = inst_15329);
(statearr_15414_15448[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11549__auto__,c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_15418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15418[(0)] = state_machine__11550__auto__);
(statearr_15418[(1)] = (1));
return statearr_15418;
});
var state_machine__11550__auto____1 = (function (state_15380){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_15380);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e15419){if((e15419 instanceof Object))
{var ex__11553__auto__ = e15419;var statearr_15420_15449 = state_15380;(statearr_15420_15449[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15380);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15450 = state_15380;
state_15380 = G__15450;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_15380){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_15380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11566__auto__ = (function (){var statearr_15421 = f__11565__auto__.call(null);(statearr_15421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___15422);
return statearr_15421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___15422,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15452 = {};return obj15452;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3542__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3542__auto__,mults){
return (function (p1__15453_SHARP_){if(cljs.core.truth_(p1__15453_SHARP_.call(null,topic)))
{return p1__15453_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15453_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3542__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15578 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15579){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15579 = meta15579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15578.cljs$lang$type = true;
cljs.core.async.t15578.cljs$lang$ctorStr = "cljs.core.async/t15578";
cljs.core.async.t15578.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15578");
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15578.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15578.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15580){var self__ = this;
var _15580__$1 = this;return self__.meta15579;
});})(mults,ensure_mult))
;
cljs.core.async.t15578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15580,meta15579__$1){var self__ = this;
var _15580__$1 = this;return (new cljs.core.async.t15578(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15579__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15578 = ((function (mults,ensure_mult){
return (function __GT_t15578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15579){return (new cljs.core.async.t15578(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15579));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15578(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11564__auto___15702 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___15702,mults,ensure_mult,p){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___15702,mults,ensure_mult,p){
return (function (state_15654){var state_val_15655 = (state_15654[(1)]);if((state_val_15655 === (7)))
{var inst_15650 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15656_15703 = state_15654__$1;(statearr_15656_15703[(2)] = inst_15650);
(statearr_15656_15703[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (20)))
{var state_15654__$1 = state_15654;var statearr_15657_15704 = state_15654__$1;(statearr_15657_15704[(2)] = null);
(statearr_15657_15704[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (1)))
{var state_15654__$1 = state_15654;var statearr_15658_15705 = state_15654__$1;(statearr_15658_15705[(2)] = null);
(statearr_15658_15705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (24)))
{var inst_15583 = (state_15654[(7)]);var inst_15633 = (state_15654[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15654,(23),Object,null,(22));var inst_15640 = cljs.core.async.muxch_STAR_.call(null,inst_15633);var state_15654__$1 = state_15654;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15654__$1,(25),inst_15640,inst_15583);
} else
{if((state_val_15655 === (4)))
{var inst_15583 = (state_15654[(7)]);var inst_15583__$1 = (state_15654[(2)]);var inst_15584 = (inst_15583__$1 == null);var state_15654__$1 = (function (){var statearr_15659 = state_15654;(statearr_15659[(7)] = inst_15583__$1);
return statearr_15659;
})();if(cljs.core.truth_(inst_15584))
{var statearr_15660_15706 = state_15654__$1;(statearr_15660_15706[(1)] = (5));
} else
{var statearr_15661_15707 = state_15654__$1;(statearr_15661_15707[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (15)))
{var inst_15625 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15662_15708 = state_15654__$1;(statearr_15662_15708[(2)] = inst_15625);
(statearr_15662_15708[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (21)))
{var inst_15647 = (state_15654[(2)]);var state_15654__$1 = (function (){var statearr_15663 = state_15654;(statearr_15663[(9)] = inst_15647);
return statearr_15663;
})();var statearr_15664_15709 = state_15654__$1;(statearr_15664_15709[(2)] = null);
(statearr_15664_15709[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (13)))
{var inst_15607 = (state_15654[(10)]);var inst_15609 = cljs.core.chunked_seq_QMARK_.call(null,inst_15607);var state_15654__$1 = state_15654;if(inst_15609)
{var statearr_15665_15710 = state_15654__$1;(statearr_15665_15710[(1)] = (16));
} else
{var statearr_15666_15711 = state_15654__$1;(statearr_15666_15711[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (22)))
{var inst_15644 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15667_15712 = state_15654__$1;(statearr_15667_15712[(2)] = inst_15644);
(statearr_15667_15712[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (6)))
{var inst_15631 = (state_15654[(11)]);var inst_15583 = (state_15654[(7)]);var inst_15633 = (state_15654[(8)]);var inst_15631__$1 = topic_fn.call(null,inst_15583);var inst_15632 = cljs.core.deref.call(null,mults);var inst_15633__$1 = cljs.core.get.call(null,inst_15632,inst_15631__$1);var state_15654__$1 = (function (){var statearr_15668 = state_15654;(statearr_15668[(11)] = inst_15631__$1);
(statearr_15668[(8)] = inst_15633__$1);
return statearr_15668;
})();if(cljs.core.truth_(inst_15633__$1))
{var statearr_15669_15713 = state_15654__$1;(statearr_15669_15713[(1)] = (19));
} else
{var statearr_15670_15714 = state_15654__$1;(statearr_15670_15714[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (25)))
{var inst_15642 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15671_15715 = state_15654__$1;(statearr_15671_15715[(2)] = inst_15642);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (17)))
{var inst_15607 = (state_15654[(10)]);var inst_15616 = cljs.core.first.call(null,inst_15607);var inst_15617 = cljs.core.async.muxch_STAR_.call(null,inst_15616);var inst_15618 = cljs.core.async.close_BANG_.call(null,inst_15617);var inst_15619 = cljs.core.next.call(null,inst_15607);var inst_15593 = inst_15619;var inst_15594 = null;var inst_15595 = (0);var inst_15596 = (0);var state_15654__$1 = (function (){var statearr_15672 = state_15654;(statearr_15672[(12)] = inst_15618);
(statearr_15672[(13)] = inst_15594);
(statearr_15672[(14)] = inst_15593);
(statearr_15672[(15)] = inst_15595);
(statearr_15672[(16)] = inst_15596);
return statearr_15672;
})();var statearr_15673_15716 = state_15654__$1;(statearr_15673_15716[(2)] = null);
(statearr_15673_15716[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (3)))
{var inst_15652 = (state_15654[(2)]);var state_15654__$1 = state_15654;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15654__$1,inst_15652);
} else
{if((state_val_15655 === (12)))
{var inst_15627 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15674_15717 = state_15654__$1;(statearr_15674_15717[(2)] = inst_15627);
(statearr_15674_15717[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (2)))
{var state_15654__$1 = state_15654;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15654__$1,(4),ch);
} else
{if((state_val_15655 === (23)))
{var inst_15631 = (state_15654[(11)]);var inst_15635 = (state_15654[(2)]);var inst_15636 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15631);var state_15654__$1 = (function (){var statearr_15675 = state_15654;(statearr_15675[(17)] = inst_15635);
return statearr_15675;
})();var statearr_15676_15718 = state_15654__$1;(statearr_15676_15718[(2)] = inst_15636);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15654__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (19)))
{var state_15654__$1 = state_15654;var statearr_15677_15719 = state_15654__$1;(statearr_15677_15719[(2)] = null);
(statearr_15677_15719[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (11)))
{var inst_15593 = (state_15654[(14)]);var inst_15607 = (state_15654[(10)]);var inst_15607__$1 = cljs.core.seq.call(null,inst_15593);var state_15654__$1 = (function (){var statearr_15678 = state_15654;(statearr_15678[(10)] = inst_15607__$1);
return statearr_15678;
})();if(inst_15607__$1)
{var statearr_15679_15720 = state_15654__$1;(statearr_15679_15720[(1)] = (13));
} else
{var statearr_15680_15721 = state_15654__$1;(statearr_15680_15721[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (9)))
{var inst_15629 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15681_15722 = state_15654__$1;(statearr_15681_15722[(2)] = inst_15629);
(statearr_15681_15722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (5)))
{var inst_15590 = cljs.core.deref.call(null,mults);var inst_15591 = cljs.core.vals.call(null,inst_15590);var inst_15592 = cljs.core.seq.call(null,inst_15591);var inst_15593 = inst_15592;var inst_15594 = null;var inst_15595 = (0);var inst_15596 = (0);var state_15654__$1 = (function (){var statearr_15682 = state_15654;(statearr_15682[(13)] = inst_15594);
(statearr_15682[(14)] = inst_15593);
(statearr_15682[(15)] = inst_15595);
(statearr_15682[(16)] = inst_15596);
return statearr_15682;
})();var statearr_15683_15723 = state_15654__$1;(statearr_15683_15723[(2)] = null);
(statearr_15683_15723[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (14)))
{var state_15654__$1 = state_15654;var statearr_15687_15724 = state_15654__$1;(statearr_15687_15724[(2)] = null);
(statearr_15687_15724[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (16)))
{var inst_15607 = (state_15654[(10)]);var inst_15611 = cljs.core.chunk_first.call(null,inst_15607);var inst_15612 = cljs.core.chunk_rest.call(null,inst_15607);var inst_15613 = cljs.core.count.call(null,inst_15611);var inst_15593 = inst_15612;var inst_15594 = inst_15611;var inst_15595 = inst_15613;var inst_15596 = (0);var state_15654__$1 = (function (){var statearr_15688 = state_15654;(statearr_15688[(13)] = inst_15594);
(statearr_15688[(14)] = inst_15593);
(statearr_15688[(15)] = inst_15595);
(statearr_15688[(16)] = inst_15596);
return statearr_15688;
})();var statearr_15689_15725 = state_15654__$1;(statearr_15689_15725[(2)] = null);
(statearr_15689_15725[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (10)))
{var inst_15594 = (state_15654[(13)]);var inst_15593 = (state_15654[(14)]);var inst_15595 = (state_15654[(15)]);var inst_15596 = (state_15654[(16)]);var inst_15601 = cljs.core._nth.call(null,inst_15594,inst_15596);var inst_15602 = cljs.core.async.muxch_STAR_.call(null,inst_15601);var inst_15603 = cljs.core.async.close_BANG_.call(null,inst_15602);var inst_15604 = (inst_15596 + (1));var tmp15684 = inst_15594;var tmp15685 = inst_15593;var tmp15686 = inst_15595;var inst_15593__$1 = tmp15685;var inst_15594__$1 = tmp15684;var inst_15595__$1 = tmp15686;var inst_15596__$1 = inst_15604;var state_15654__$1 = (function (){var statearr_15690 = state_15654;(statearr_15690[(13)] = inst_15594__$1);
(statearr_15690[(14)] = inst_15593__$1);
(statearr_15690[(15)] = inst_15595__$1);
(statearr_15690[(18)] = inst_15603);
(statearr_15690[(16)] = inst_15596__$1);
return statearr_15690;
})();var statearr_15691_15726 = state_15654__$1;(statearr_15691_15726[(2)] = null);
(statearr_15691_15726[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (18)))
{var inst_15622 = (state_15654[(2)]);var state_15654__$1 = state_15654;var statearr_15692_15727 = state_15654__$1;(statearr_15692_15727[(2)] = inst_15622);
(statearr_15692_15727[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15655 === (8)))
{var inst_15595 = (state_15654[(15)]);var inst_15596 = (state_15654[(16)]);var inst_15598 = (inst_15596 < inst_15595);var inst_15599 = inst_15598;var state_15654__$1 = state_15654;if(cljs.core.truth_(inst_15599))
{var statearr_15693_15728 = state_15654__$1;(statearr_15693_15728[(1)] = (10));
} else
{var statearr_15694_15729 = state_15654__$1;(statearr_15694_15729[(1)] = (11));
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
}
}
}
}
}
}
}
}
}
});})(c__11564__auto___15702,mults,ensure_mult,p))
;return ((function (switch__11549__auto__,c__11564__auto___15702,mults,ensure_mult,p){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_15698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15698[(0)] = state_machine__11550__auto__);
(statearr_15698[(1)] = (1));
return statearr_15698;
});
var state_machine__11550__auto____1 = (function (state_15654){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_15654);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e15699){if((e15699 instanceof Object))
{var ex__11553__auto__ = e15699;var statearr_15700_15730 = state_15654;(statearr_15700_15730[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15654);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15731 = state_15654;
state_15654 = G__15731;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___15702,mults,ensure_mult,p))
})();var state__11566__auto__ = (function (){var statearr_15701 = f__11565__auto__.call(null);(statearr_15701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___15702);
return statearr_15701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___15702,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__11564__auto___15868 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15838){var state_val_15839 = (state_15838[(1)]);if((state_val_15839 === (7)))
{var state_15838__$1 = state_15838;var statearr_15840_15869 = state_15838__$1;(statearr_15840_15869[(2)] = null);
(statearr_15840_15869[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (1)))
{var state_15838__$1 = state_15838;var statearr_15841_15870 = state_15838__$1;(statearr_15841_15870[(2)] = null);
(statearr_15841_15870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (4)))
{var inst_15802 = (state_15838[(7)]);var inst_15804 = (inst_15802 < cnt);var state_15838__$1 = state_15838;if(cljs.core.truth_(inst_15804))
{var statearr_15842_15871 = state_15838__$1;(statearr_15842_15871[(1)] = (6));
} else
{var statearr_15843_15872 = state_15838__$1;(statearr_15843_15872[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (15)))
{var inst_15834 = (state_15838[(2)]);var state_15838__$1 = state_15838;var statearr_15844_15873 = state_15838__$1;(statearr_15844_15873[(2)] = inst_15834);
(statearr_15844_15873[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (13)))
{var inst_15827 = cljs.core.async.close_BANG_.call(null,out);var state_15838__$1 = state_15838;var statearr_15845_15874 = state_15838__$1;(statearr_15845_15874[(2)] = inst_15827);
(statearr_15845_15874[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (6)))
{var state_15838__$1 = state_15838;var statearr_15846_15875 = state_15838__$1;(statearr_15846_15875[(2)] = null);
(statearr_15846_15875[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (3)))
{var inst_15836 = (state_15838[(2)]);var state_15838__$1 = state_15838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15838__$1,inst_15836);
} else
{if((state_val_15839 === (12)))
{var inst_15824 = (state_15838[(8)]);var inst_15824__$1 = (state_15838[(2)]);var inst_15825 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15824__$1);var state_15838__$1 = (function (){var statearr_15847 = state_15838;(statearr_15847[(8)] = inst_15824__$1);
return statearr_15847;
})();if(cljs.core.truth_(inst_15825))
{var statearr_15848_15876 = state_15838__$1;(statearr_15848_15876[(1)] = (13));
} else
{var statearr_15849_15877 = state_15838__$1;(statearr_15849_15877[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (2)))
{var inst_15801 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15802 = (0);var state_15838__$1 = (function (){var statearr_15850 = state_15838;(statearr_15850[(7)] = inst_15802);
(statearr_15850[(9)] = inst_15801);
return statearr_15850;
})();var statearr_15851_15878 = state_15838__$1;(statearr_15851_15878[(2)] = null);
(statearr_15851_15878[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (11)))
{var inst_15802 = (state_15838[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15838,(10),Object,null,(9));var inst_15811 = chs__$1.call(null,inst_15802);var inst_15812 = done.call(null,inst_15802);var inst_15813 = cljs.core.async.take_BANG_.call(null,inst_15811,inst_15812);var state_15838__$1 = state_15838;var statearr_15852_15879 = state_15838__$1;(statearr_15852_15879[(2)] = inst_15813);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15838__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (9)))
{var inst_15802 = (state_15838[(7)]);var inst_15815 = (state_15838[(2)]);var inst_15816 = (inst_15802 + (1));var inst_15802__$1 = inst_15816;var state_15838__$1 = (function (){var statearr_15853 = state_15838;(statearr_15853[(10)] = inst_15815);
(statearr_15853[(7)] = inst_15802__$1);
return statearr_15853;
})();var statearr_15854_15880 = state_15838__$1;(statearr_15854_15880[(2)] = null);
(statearr_15854_15880[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (5)))
{var inst_15822 = (state_15838[(2)]);var state_15838__$1 = (function (){var statearr_15855 = state_15838;(statearr_15855[(11)] = inst_15822);
return statearr_15855;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15838__$1,(12),dchan);
} else
{if((state_val_15839 === (14)))
{var inst_15824 = (state_15838[(8)]);var inst_15829 = cljs.core.apply.call(null,f,inst_15824);var state_15838__$1 = state_15838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15838__$1,(16),out,inst_15829);
} else
{if((state_val_15839 === (16)))
{var inst_15831 = (state_15838[(2)]);var state_15838__$1 = (function (){var statearr_15856 = state_15838;(statearr_15856[(12)] = inst_15831);
return statearr_15856;
})();var statearr_15857_15881 = state_15838__$1;(statearr_15857_15881[(2)] = null);
(statearr_15857_15881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (10)))
{var inst_15806 = (state_15838[(2)]);var inst_15807 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15838__$1 = (function (){var statearr_15858 = state_15838;(statearr_15858[(13)] = inst_15806);
return statearr_15858;
})();var statearr_15859_15882 = state_15838__$1;(statearr_15859_15882[(2)] = inst_15807);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15838__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15839 === (8)))
{var inst_15820 = (state_15838[(2)]);var state_15838__$1 = state_15838;var statearr_15860_15883 = state_15838__$1;(statearr_15860_15883[(2)] = inst_15820);
(statearr_15860_15883[(1)] = (5));
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
});})(c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11549__auto__,c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_15864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15864[(0)] = state_machine__11550__auto__);
(statearr_15864[(1)] = (1));
return statearr_15864;
});
var state_machine__11550__auto____1 = (function (state_15838){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_15838);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e15865){if((e15865 instanceof Object))
{var ex__11553__auto__ = e15865;var statearr_15866_15884 = state_15838;(statearr_15866_15884[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15865;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15885 = state_15838;
state_15838 = G__15885;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_15838){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_15838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11566__auto__ = (function (){var statearr_15867 = f__11565__auto__.call(null);(statearr_15867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___15868);
return statearr_15867;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___15868,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___15993 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___15993,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___15993,out){
return (function (state_15969){var state_val_15970 = (state_15969[(1)]);if((state_val_15970 === (7)))
{var inst_15948 = (state_15969[(7)]);var inst_15949 = (state_15969[(8)]);var inst_15948__$1 = (state_15969[(2)]);var inst_15949__$1 = cljs.core.nth.call(null,inst_15948__$1,(0),null);var inst_15950 = cljs.core.nth.call(null,inst_15948__$1,(1),null);var inst_15951 = (inst_15949__$1 == null);var state_15969__$1 = (function (){var statearr_15971 = state_15969;(statearr_15971[(9)] = inst_15950);
(statearr_15971[(7)] = inst_15948__$1);
(statearr_15971[(8)] = inst_15949__$1);
return statearr_15971;
})();if(cljs.core.truth_(inst_15951))
{var statearr_15972_15994 = state_15969__$1;(statearr_15972_15994[(1)] = (8));
} else
{var statearr_15973_15995 = state_15969__$1;(statearr_15973_15995[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (1)))
{var inst_15940 = cljs.core.vec.call(null,chs);var inst_15941 = inst_15940;var state_15969__$1 = (function (){var statearr_15974 = state_15969;(statearr_15974[(10)] = inst_15941);
return statearr_15974;
})();var statearr_15975_15996 = state_15969__$1;(statearr_15975_15996[(2)] = null);
(statearr_15975_15996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (4)))
{var inst_15941 = (state_15969[(10)]);var state_15969__$1 = state_15969;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15969__$1,(7),inst_15941);
} else
{if((state_val_15970 === (6)))
{var inst_15965 = (state_15969[(2)]);var state_15969__$1 = state_15969;var statearr_15976_15997 = state_15969__$1;(statearr_15976_15997[(2)] = inst_15965);
(statearr_15976_15997[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (3)))
{var inst_15967 = (state_15969[(2)]);var state_15969__$1 = state_15969;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15969__$1,inst_15967);
} else
{if((state_val_15970 === (2)))
{var inst_15941 = (state_15969[(10)]);var inst_15943 = cljs.core.count.call(null,inst_15941);var inst_15944 = (inst_15943 > (0));var state_15969__$1 = state_15969;if(cljs.core.truth_(inst_15944))
{var statearr_15978_15998 = state_15969__$1;(statearr_15978_15998[(1)] = (4));
} else
{var statearr_15979_15999 = state_15969__$1;(statearr_15979_15999[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (11)))
{var inst_15941 = (state_15969[(10)]);var inst_15958 = (state_15969[(2)]);var tmp15977 = inst_15941;var inst_15941__$1 = tmp15977;var state_15969__$1 = (function (){var statearr_15980 = state_15969;(statearr_15980[(11)] = inst_15958);
(statearr_15980[(10)] = inst_15941__$1);
return statearr_15980;
})();var statearr_15981_16000 = state_15969__$1;(statearr_15981_16000[(2)] = null);
(statearr_15981_16000[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (9)))
{var inst_15949 = (state_15969[(8)]);var state_15969__$1 = state_15969;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15969__$1,(11),out,inst_15949);
} else
{if((state_val_15970 === (5)))
{var inst_15963 = cljs.core.async.close_BANG_.call(null,out);var state_15969__$1 = state_15969;var statearr_15982_16001 = state_15969__$1;(statearr_15982_16001[(2)] = inst_15963);
(statearr_15982_16001[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (10)))
{var inst_15961 = (state_15969[(2)]);var state_15969__$1 = state_15969;var statearr_15983_16002 = state_15969__$1;(statearr_15983_16002[(2)] = inst_15961);
(statearr_15983_16002[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15970 === (8)))
{var inst_15941 = (state_15969[(10)]);var inst_15950 = (state_15969[(9)]);var inst_15948 = (state_15969[(7)]);var inst_15949 = (state_15969[(8)]);var inst_15953 = (function (){var c = inst_15950;var v = inst_15949;var vec__15946 = inst_15948;var cs = inst_15941;return ((function (c,v,vec__15946,cs,inst_15941,inst_15950,inst_15948,inst_15949,state_val_15970,c__11564__auto___15993,out){
return (function (p1__15886_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15886_SHARP_);
});
;})(c,v,vec__15946,cs,inst_15941,inst_15950,inst_15948,inst_15949,state_val_15970,c__11564__auto___15993,out))
})();var inst_15954 = cljs.core.filterv.call(null,inst_15953,inst_15941);var inst_15941__$1 = inst_15954;var state_15969__$1 = (function (){var statearr_15984 = state_15969;(statearr_15984[(10)] = inst_15941__$1);
return statearr_15984;
})();var statearr_15985_16003 = state_15969__$1;(statearr_15985_16003[(2)] = null);
(statearr_15985_16003[(1)] = (2));
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
});})(c__11564__auto___15993,out))
;return ((function (switch__11549__auto__,c__11564__auto___15993,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_15989 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15989[(0)] = state_machine__11550__auto__);
(statearr_15989[(1)] = (1));
return statearr_15989;
});
var state_machine__11550__auto____1 = (function (state_15969){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_15969);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e15990){if((e15990 instanceof Object))
{var ex__11553__auto__ = e15990;var statearr_15991_16004 = state_15969;(statearr_15991_16004[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15969);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16005 = state_15969;
state_15969 = G__16005;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_15969){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_15969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___15993,out))
})();var state__11566__auto__ = (function (){var statearr_15992 = f__11565__auto__.call(null);(statearr_15992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___15993);
return statearr_15992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___15993,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___16098 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___16098,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___16098,out){
return (function (state_16075){var state_val_16076 = (state_16075[(1)]);if((state_val_16076 === (7)))
{var inst_16057 = (state_16075[(7)]);var inst_16057__$1 = (state_16075[(2)]);var inst_16058 = (inst_16057__$1 == null);var inst_16059 = cljs.core.not.call(null,inst_16058);var state_16075__$1 = (function (){var statearr_16077 = state_16075;(statearr_16077[(7)] = inst_16057__$1);
return statearr_16077;
})();if(inst_16059)
{var statearr_16078_16099 = state_16075__$1;(statearr_16078_16099[(1)] = (8));
} else
{var statearr_16079_16100 = state_16075__$1;(statearr_16079_16100[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (1)))
{var inst_16052 = (0);var state_16075__$1 = (function (){var statearr_16080 = state_16075;(statearr_16080[(8)] = inst_16052);
return statearr_16080;
})();var statearr_16081_16101 = state_16075__$1;(statearr_16081_16101[(2)] = null);
(statearr_16081_16101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (4)))
{var state_16075__$1 = state_16075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16075__$1,(7),ch);
} else
{if((state_val_16076 === (6)))
{var inst_16070 = (state_16075[(2)]);var state_16075__$1 = state_16075;var statearr_16082_16102 = state_16075__$1;(statearr_16082_16102[(2)] = inst_16070);
(statearr_16082_16102[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (3)))
{var inst_16072 = (state_16075[(2)]);var inst_16073 = cljs.core.async.close_BANG_.call(null,out);var state_16075__$1 = (function (){var statearr_16083 = state_16075;(statearr_16083[(9)] = inst_16072);
return statearr_16083;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16075__$1,inst_16073);
} else
{if((state_val_16076 === (2)))
{var inst_16052 = (state_16075[(8)]);var inst_16054 = (inst_16052 < n);var state_16075__$1 = state_16075;if(cljs.core.truth_(inst_16054))
{var statearr_16084_16103 = state_16075__$1;(statearr_16084_16103[(1)] = (4));
} else
{var statearr_16085_16104 = state_16075__$1;(statearr_16085_16104[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (11)))
{var inst_16052 = (state_16075[(8)]);var inst_16062 = (state_16075[(2)]);var inst_16063 = (inst_16052 + (1));var inst_16052__$1 = inst_16063;var state_16075__$1 = (function (){var statearr_16086 = state_16075;(statearr_16086[(10)] = inst_16062);
(statearr_16086[(8)] = inst_16052__$1);
return statearr_16086;
})();var statearr_16087_16105 = state_16075__$1;(statearr_16087_16105[(2)] = null);
(statearr_16087_16105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (9)))
{var state_16075__$1 = state_16075;var statearr_16088_16106 = state_16075__$1;(statearr_16088_16106[(2)] = null);
(statearr_16088_16106[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (5)))
{var state_16075__$1 = state_16075;var statearr_16089_16107 = state_16075__$1;(statearr_16089_16107[(2)] = null);
(statearr_16089_16107[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (10)))
{var inst_16067 = (state_16075[(2)]);var state_16075__$1 = state_16075;var statearr_16090_16108 = state_16075__$1;(statearr_16090_16108[(2)] = inst_16067);
(statearr_16090_16108[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16076 === (8)))
{var inst_16057 = (state_16075[(7)]);var state_16075__$1 = state_16075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16075__$1,(11),out,inst_16057);
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
});})(c__11564__auto___16098,out))
;return ((function (switch__11549__auto__,c__11564__auto___16098,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_16094 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16094[(0)] = state_machine__11550__auto__);
(statearr_16094[(1)] = (1));
return statearr_16094;
});
var state_machine__11550__auto____1 = (function (state_16075){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_16075);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e16095){if((e16095 instanceof Object))
{var ex__11553__auto__ = e16095;var statearr_16096_16109 = state_16075;(statearr_16096_16109[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16095;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16110 = state_16075;
state_16075 = G__16110;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_16075){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_16075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___16098,out))
})();var state__11566__auto__ = (function (){var statearr_16097 = f__11565__auto__.call(null);(statearr_16097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___16098);
return statearr_16097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___16098,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___16207 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___16207,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___16207,out){
return (function (state_16182){var state_val_16183 = (state_16182[(1)]);if((state_val_16183 === (7)))
{var inst_16177 = (state_16182[(2)]);var state_16182__$1 = state_16182;var statearr_16184_16208 = state_16182__$1;(statearr_16184_16208[(2)] = inst_16177);
(statearr_16184_16208[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (1)))
{var inst_16159 = null;var state_16182__$1 = (function (){var statearr_16185 = state_16182;(statearr_16185[(7)] = inst_16159);
return statearr_16185;
})();var statearr_16186_16209 = state_16182__$1;(statearr_16186_16209[(2)] = null);
(statearr_16186_16209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (4)))
{var inst_16162 = (state_16182[(8)]);var inst_16162__$1 = (state_16182[(2)]);var inst_16163 = (inst_16162__$1 == null);var inst_16164 = cljs.core.not.call(null,inst_16163);var state_16182__$1 = (function (){var statearr_16187 = state_16182;(statearr_16187[(8)] = inst_16162__$1);
return statearr_16187;
})();if(inst_16164)
{var statearr_16188_16210 = state_16182__$1;(statearr_16188_16210[(1)] = (5));
} else
{var statearr_16189_16211 = state_16182__$1;(statearr_16189_16211[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (6)))
{var state_16182__$1 = state_16182;var statearr_16190_16212 = state_16182__$1;(statearr_16190_16212[(2)] = null);
(statearr_16190_16212[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (3)))
{var inst_16179 = (state_16182[(2)]);var inst_16180 = cljs.core.async.close_BANG_.call(null,out);var state_16182__$1 = (function (){var statearr_16191 = state_16182;(statearr_16191[(9)] = inst_16179);
return statearr_16191;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16182__$1,inst_16180);
} else
{if((state_val_16183 === (2)))
{var state_16182__$1 = state_16182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(4),ch);
} else
{if((state_val_16183 === (11)))
{var inst_16162 = (state_16182[(8)]);var inst_16171 = (state_16182[(2)]);var inst_16159 = inst_16162;var state_16182__$1 = (function (){var statearr_16192 = state_16182;(statearr_16192[(10)] = inst_16171);
(statearr_16192[(7)] = inst_16159);
return statearr_16192;
})();var statearr_16193_16213 = state_16182__$1;(statearr_16193_16213[(2)] = null);
(statearr_16193_16213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (9)))
{var inst_16162 = (state_16182[(8)]);var state_16182__$1 = state_16182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16182__$1,(11),out,inst_16162);
} else
{if((state_val_16183 === (5)))
{var inst_16162 = (state_16182[(8)]);var inst_16159 = (state_16182[(7)]);var inst_16166 = cljs.core._EQ_.call(null,inst_16162,inst_16159);var state_16182__$1 = state_16182;if(inst_16166)
{var statearr_16195_16214 = state_16182__$1;(statearr_16195_16214[(1)] = (8));
} else
{var statearr_16196_16215 = state_16182__$1;(statearr_16196_16215[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (10)))
{var inst_16174 = (state_16182[(2)]);var state_16182__$1 = state_16182;var statearr_16197_16216 = state_16182__$1;(statearr_16197_16216[(2)] = inst_16174);
(statearr_16197_16216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16183 === (8)))
{var inst_16159 = (state_16182[(7)]);var tmp16194 = inst_16159;var inst_16159__$1 = tmp16194;var state_16182__$1 = (function (){var statearr_16198 = state_16182;(statearr_16198[(7)] = inst_16159__$1);
return statearr_16198;
})();var statearr_16199_16217 = state_16182__$1;(statearr_16199_16217[(2)] = null);
(statearr_16199_16217[(1)] = (2));
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
});})(c__11564__auto___16207,out))
;return ((function (switch__11549__auto__,c__11564__auto___16207,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_16203 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16203[(0)] = state_machine__11550__auto__);
(statearr_16203[(1)] = (1));
return statearr_16203;
});
var state_machine__11550__auto____1 = (function (state_16182){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_16182);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e16204){if((e16204 instanceof Object))
{var ex__11553__auto__ = e16204;var statearr_16205_16218 = state_16182;(statearr_16205_16218[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16182);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16219 = state_16182;
state_16182 = G__16219;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___16207,out))
})();var state__11566__auto__ = (function (){var statearr_16206 = f__11565__auto__.call(null);(statearr_16206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___16207);
return statearr_16206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___16207,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___16354 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___16354,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___16354,out){
return (function (state_16324){var state_val_16325 = (state_16324[(1)]);if((state_val_16325 === (7)))
{var inst_16320 = (state_16324[(2)]);var state_16324__$1 = state_16324;var statearr_16326_16355 = state_16324__$1;(statearr_16326_16355[(2)] = inst_16320);
(statearr_16326_16355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (1)))
{var inst_16287 = (new Array(n));var inst_16288 = inst_16287;var inst_16289 = (0);var state_16324__$1 = (function (){var statearr_16327 = state_16324;(statearr_16327[(7)] = inst_16288);
(statearr_16327[(8)] = inst_16289);
return statearr_16327;
})();var statearr_16328_16356 = state_16324__$1;(statearr_16328_16356[(2)] = null);
(statearr_16328_16356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (4)))
{var inst_16292 = (state_16324[(9)]);var inst_16292__$1 = (state_16324[(2)]);var inst_16293 = (inst_16292__$1 == null);var inst_16294 = cljs.core.not.call(null,inst_16293);var state_16324__$1 = (function (){var statearr_16329 = state_16324;(statearr_16329[(9)] = inst_16292__$1);
return statearr_16329;
})();if(inst_16294)
{var statearr_16330_16357 = state_16324__$1;(statearr_16330_16357[(1)] = (5));
} else
{var statearr_16331_16358 = state_16324__$1;(statearr_16331_16358[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (15)))
{var inst_16314 = (state_16324[(2)]);var state_16324__$1 = state_16324;var statearr_16332_16359 = state_16324__$1;(statearr_16332_16359[(2)] = inst_16314);
(statearr_16332_16359[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (13)))
{var state_16324__$1 = state_16324;var statearr_16333_16360 = state_16324__$1;(statearr_16333_16360[(2)] = null);
(statearr_16333_16360[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (6)))
{var inst_16289 = (state_16324[(8)]);var inst_16310 = (inst_16289 > (0));var state_16324__$1 = state_16324;if(cljs.core.truth_(inst_16310))
{var statearr_16334_16361 = state_16324__$1;(statearr_16334_16361[(1)] = (12));
} else
{var statearr_16335_16362 = state_16324__$1;(statearr_16335_16362[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (3)))
{var inst_16322 = (state_16324[(2)]);var state_16324__$1 = state_16324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16324__$1,inst_16322);
} else
{if((state_val_16325 === (12)))
{var inst_16288 = (state_16324[(7)]);var inst_16312 = cljs.core.vec.call(null,inst_16288);var state_16324__$1 = state_16324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16324__$1,(15),out,inst_16312);
} else
{if((state_val_16325 === (2)))
{var state_16324__$1 = state_16324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16324__$1,(4),ch);
} else
{if((state_val_16325 === (11)))
{var inst_16304 = (state_16324[(2)]);var inst_16305 = (new Array(n));var inst_16288 = inst_16305;var inst_16289 = (0);var state_16324__$1 = (function (){var statearr_16336 = state_16324;(statearr_16336[(7)] = inst_16288);
(statearr_16336[(8)] = inst_16289);
(statearr_16336[(10)] = inst_16304);
return statearr_16336;
})();var statearr_16337_16363 = state_16324__$1;(statearr_16337_16363[(2)] = null);
(statearr_16337_16363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (9)))
{var inst_16288 = (state_16324[(7)]);var inst_16302 = cljs.core.vec.call(null,inst_16288);var state_16324__$1 = state_16324;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16324__$1,(11),out,inst_16302);
} else
{if((state_val_16325 === (5)))
{var inst_16288 = (state_16324[(7)]);var inst_16297 = (state_16324[(11)]);var inst_16289 = (state_16324[(8)]);var inst_16292 = (state_16324[(9)]);var inst_16296 = (inst_16288[inst_16289] = inst_16292);var inst_16297__$1 = (inst_16289 + (1));var inst_16298 = (inst_16297__$1 < n);var state_16324__$1 = (function (){var statearr_16338 = state_16324;(statearr_16338[(11)] = inst_16297__$1);
(statearr_16338[(12)] = inst_16296);
return statearr_16338;
})();if(cljs.core.truth_(inst_16298))
{var statearr_16339_16364 = state_16324__$1;(statearr_16339_16364[(1)] = (8));
} else
{var statearr_16340_16365 = state_16324__$1;(statearr_16340_16365[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (14)))
{var inst_16317 = (state_16324[(2)]);var inst_16318 = cljs.core.async.close_BANG_.call(null,out);var state_16324__$1 = (function (){var statearr_16342 = state_16324;(statearr_16342[(13)] = inst_16317);
return statearr_16342;
})();var statearr_16343_16366 = state_16324__$1;(statearr_16343_16366[(2)] = inst_16318);
(statearr_16343_16366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (10)))
{var inst_16308 = (state_16324[(2)]);var state_16324__$1 = state_16324;var statearr_16344_16367 = state_16324__$1;(statearr_16344_16367[(2)] = inst_16308);
(statearr_16344_16367[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16325 === (8)))
{var inst_16288 = (state_16324[(7)]);var inst_16297 = (state_16324[(11)]);var tmp16341 = inst_16288;var inst_16288__$1 = tmp16341;var inst_16289 = inst_16297;var state_16324__$1 = (function (){var statearr_16345 = state_16324;(statearr_16345[(7)] = inst_16288__$1);
(statearr_16345[(8)] = inst_16289);
return statearr_16345;
})();var statearr_16346_16368 = state_16324__$1;(statearr_16346_16368[(2)] = null);
(statearr_16346_16368[(1)] = (2));
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
});})(c__11564__auto___16354,out))
;return ((function (switch__11549__auto__,c__11564__auto___16354,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_16350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16350[(0)] = state_machine__11550__auto__);
(statearr_16350[(1)] = (1));
return statearr_16350;
});
var state_machine__11550__auto____1 = (function (state_16324){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_16324);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e16351){if((e16351 instanceof Object))
{var ex__11553__auto__ = e16351;var statearr_16352_16369 = state_16324;(statearr_16352_16369[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16324);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16370 = state_16324;
state_16324 = G__16370;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_16324){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_16324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___16354,out))
})();var state__11566__auto__ = (function (){var statearr_16353 = f__11565__auto__.call(null);(statearr_16353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___16354);
return statearr_16353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___16354,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11564__auto___16513 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11564__auto___16513,out){
return (function (){var f__11565__auto__ = (function (){var switch__11549__auto__ = ((function (c__11564__auto___16513,out){
return (function (state_16483){var state_val_16484 = (state_16483[(1)]);if((state_val_16484 === (7)))
{var inst_16479 = (state_16483[(2)]);var state_16483__$1 = state_16483;var statearr_16485_16514 = state_16483__$1;(statearr_16485_16514[(2)] = inst_16479);
(statearr_16485_16514[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (1)))
{var inst_16442 = [];var inst_16443 = inst_16442;var inst_16444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_16483__$1 = (function (){var statearr_16486 = state_16483;(statearr_16486[(7)] = inst_16443);
(statearr_16486[(8)] = inst_16444);
return statearr_16486;
})();var statearr_16487_16515 = state_16483__$1;(statearr_16487_16515[(2)] = null);
(statearr_16487_16515[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (4)))
{var inst_16447 = (state_16483[(9)]);var inst_16447__$1 = (state_16483[(2)]);var inst_16448 = (inst_16447__$1 == null);var inst_16449 = cljs.core.not.call(null,inst_16448);var state_16483__$1 = (function (){var statearr_16488 = state_16483;(statearr_16488[(9)] = inst_16447__$1);
return statearr_16488;
})();if(inst_16449)
{var statearr_16489_16516 = state_16483__$1;(statearr_16489_16516[(1)] = (5));
} else
{var statearr_16490_16517 = state_16483__$1;(statearr_16490_16517[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (15)))
{var inst_16473 = (state_16483[(2)]);var state_16483__$1 = state_16483;var statearr_16491_16518 = state_16483__$1;(statearr_16491_16518[(2)] = inst_16473);
(statearr_16491_16518[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (13)))
{var state_16483__$1 = state_16483;var statearr_16492_16519 = state_16483__$1;(statearr_16492_16519[(2)] = null);
(statearr_16492_16519[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (6)))
{var inst_16443 = (state_16483[(7)]);var inst_16468 = inst_16443.length;var inst_16469 = (inst_16468 > (0));var state_16483__$1 = state_16483;if(cljs.core.truth_(inst_16469))
{var statearr_16493_16520 = state_16483__$1;(statearr_16493_16520[(1)] = (12));
} else
{var statearr_16494_16521 = state_16483__$1;(statearr_16494_16521[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (3)))
{var inst_16481 = (state_16483[(2)]);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16483__$1,inst_16481);
} else
{if((state_val_16484 === (12)))
{var inst_16443 = (state_16483[(7)]);var inst_16471 = cljs.core.vec.call(null,inst_16443);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16483__$1,(15),out,inst_16471);
} else
{if((state_val_16484 === (2)))
{var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16483__$1,(4),ch);
} else
{if((state_val_16484 === (11)))
{var inst_16451 = (state_16483[(10)]);var inst_16447 = (state_16483[(9)]);var inst_16461 = (state_16483[(2)]);var inst_16462 = [];var inst_16463 = inst_16462.push(inst_16447);var inst_16443 = inst_16462;var inst_16444 = inst_16451;var state_16483__$1 = (function (){var statearr_16495 = state_16483;(statearr_16495[(7)] = inst_16443);
(statearr_16495[(11)] = inst_16461);
(statearr_16495[(12)] = inst_16463);
(statearr_16495[(8)] = inst_16444);
return statearr_16495;
})();var statearr_16496_16522 = state_16483__$1;(statearr_16496_16522[(2)] = null);
(statearr_16496_16522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (9)))
{var inst_16443 = (state_16483[(7)]);var inst_16459 = cljs.core.vec.call(null,inst_16443);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16483__$1,(11),out,inst_16459);
} else
{if((state_val_16484 === (5)))
{var inst_16451 = (state_16483[(10)]);var inst_16447 = (state_16483[(9)]);var inst_16444 = (state_16483[(8)]);var inst_16451__$1 = f.call(null,inst_16447);var inst_16452 = cljs.core._EQ_.call(null,inst_16451__$1,inst_16444);var inst_16453 = cljs.core.keyword_identical_QMARK_.call(null,inst_16444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_16454 = (inst_16452) || (inst_16453);var state_16483__$1 = (function (){var statearr_16497 = state_16483;(statearr_16497[(10)] = inst_16451__$1);
return statearr_16497;
})();if(cljs.core.truth_(inst_16454))
{var statearr_16498_16523 = state_16483__$1;(statearr_16498_16523[(1)] = (8));
} else
{var statearr_16499_16524 = state_16483__$1;(statearr_16499_16524[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (14)))
{var inst_16476 = (state_16483[(2)]);var inst_16477 = cljs.core.async.close_BANG_.call(null,out);var state_16483__$1 = (function (){var statearr_16501 = state_16483;(statearr_16501[(13)] = inst_16476);
return statearr_16501;
})();var statearr_16502_16525 = state_16483__$1;(statearr_16502_16525[(2)] = inst_16477);
(statearr_16502_16525[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (10)))
{var inst_16466 = (state_16483[(2)]);var state_16483__$1 = state_16483;var statearr_16503_16526 = state_16483__$1;(statearr_16503_16526[(2)] = inst_16466);
(statearr_16503_16526[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16484 === (8)))
{var inst_16443 = (state_16483[(7)]);var inst_16451 = (state_16483[(10)]);var inst_16447 = (state_16483[(9)]);var inst_16456 = inst_16443.push(inst_16447);var tmp16500 = inst_16443;var inst_16443__$1 = tmp16500;var inst_16444 = inst_16451;var state_16483__$1 = (function (){var statearr_16504 = state_16483;(statearr_16504[(7)] = inst_16443__$1);
(statearr_16504[(14)] = inst_16456);
(statearr_16504[(8)] = inst_16444);
return statearr_16504;
})();var statearr_16505_16527 = state_16483__$1;(statearr_16505_16527[(2)] = null);
(statearr_16505_16527[(1)] = (2));
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
});})(c__11564__auto___16513,out))
;return ((function (switch__11549__auto__,c__11564__auto___16513,out){
return (function() {
var state_machine__11550__auto__ = null;
var state_machine__11550__auto____0 = (function (){var statearr_16509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16509[(0)] = state_machine__11550__auto__);
(statearr_16509[(1)] = (1));
return statearr_16509;
});
var state_machine__11550__auto____1 = (function (state_16483){while(true){
var ret_value__11551__auto__ = (function (){try{while(true){
var result__11552__auto__ = switch__11549__auto__.call(null,state_16483);if(cljs.core.keyword_identical_QMARK_.call(null,result__11552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11552__auto__;
}
break;
}
}catch (e16510){if((e16510 instanceof Object))
{var ex__11553__auto__ = e16510;var statearr_16511_16528 = state_16483;(statearr_16511_16528[(5)] = ex__11553__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16510;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16529 = state_16483;
state_16483 = G__16529;
continue;
}
} else
{return ret_value__11551__auto__;
}
break;
}
});
state_machine__11550__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return state_machine__11550__auto____0.call(this);
case 1:
return state_machine__11550__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11550__auto____0;
state_machine__11550__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11550__auto____1;
return state_machine__11550__auto__;
})()
;})(switch__11549__auto__,c__11564__auto___16513,out))
})();var state__11566__auto__ = (function (){var statearr_16512 = f__11565__auto__.call(null);(statearr_16512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11564__auto___16513);
return statearr_16512;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11566__auto__);
});})(c__11564__auto___16513,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map