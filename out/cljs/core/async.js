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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16838 = (function (f,fn_handler,meta16839){
this.f = f;
this.fn_handler = fn_handler;
this.meta16839 = meta16839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16838.cljs$lang$type = true;
cljs.core.async.t16838.cljs$lang$ctorStr = "cljs.core.async/t16838";
cljs.core.async.t16838.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16838");
});
cljs.core.async.t16838.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16840){var self__ = this;
var _16840__$1 = this;return self__.meta16839;
});
cljs.core.async.t16838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16840,meta16839__$1){var self__ = this;
var _16840__$1 = this;return (new cljs.core.async.t16838(self__.f,self__.fn_handler,meta16839__$1));
});
cljs.core.async.__GT_t16838 = (function __GT_t16838(f__$1,fn_handler__$1,meta16839){return (new cljs.core.async.t16838(f__$1,fn_handler__$1,meta16839));
});
}
return (new cljs.core.async.t16838(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16842 = buff;if(G__16842)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__16842.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16842.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16842);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16842);
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
{var val_16843 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16843);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16843,ret){
return (function (){return fn1.call(null,val_16843);
});})(val_16843,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4398__auto___16844 = n;var x_16845 = (0);while(true){
if((x_16845 < n__4398__auto___16844))
{(a[x_16845] = (0));
{
var G__16846 = (x_16845 + (1));
x_16845 = G__16846;
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
var G__16847 = (i + (1));
i = G__16847;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16851 = (function (flag,alt_flag,meta16852){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16852 = meta16852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16851.cljs$lang$type = true;
cljs.core.async.t16851.cljs$lang$ctorStr = "cljs.core.async/t16851";
cljs.core.async.t16851.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16851");
});})(flag))
;
cljs.core.async.t16851.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16853){var self__ = this;
var _16853__$1 = this;return self__.meta16852;
});})(flag))
;
cljs.core.async.t16851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16853,meta16852__$1){var self__ = this;
var _16853__$1 = this;return (new cljs.core.async.t16851(self__.flag,self__.alt_flag,meta16852__$1));
});})(flag))
;
cljs.core.async.__GT_t16851 = ((function (flag){
return (function __GT_t16851(flag__$1,alt_flag__$1,meta16852){return (new cljs.core.async.t16851(flag__$1,alt_flag__$1,meta16852));
});})(flag))
;
}
return (new cljs.core.async.t16851(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16857 = (function (cb,flag,alt_handler,meta16858){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16858 = meta16858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16857.cljs$lang$type = true;
cljs.core.async.t16857.cljs$lang$ctorStr = "cljs.core.async/t16857";
cljs.core.async.t16857.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16857");
});
cljs.core.async.t16857.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16859){var self__ = this;
var _16859__$1 = this;return self__.meta16858;
});
cljs.core.async.t16857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16859,meta16858__$1){var self__ = this;
var _16859__$1 = this;return (new cljs.core.async.t16857(self__.cb,self__.flag,self__.alt_handler,meta16858__$1));
});
cljs.core.async.__GT_t16857 = (function __GT_t16857(cb__$1,flag__$1,alt_handler__$1,meta16858){return (new cljs.core.async.t16857(cb__$1,flag__$1,alt_handler__$1,meta16858));
});
}
return (new cljs.core.async.t16857(cb,flag,alt_handler,null));
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
return (function (p1__16860_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16860_SHARP_,port], null));
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
var G__16861 = (i + (1));
i = G__16861;
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
var alts_BANG___delegate = function (ports,p__16862){var map__16864 = p__16862;var map__16864__$1 = ((cljs.core.seq_QMARK_.call(null,map__16864))?cljs.core.apply.call(null,cljs.core.hash_map,map__16864):map__16864);var opts = map__16864__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16862 = null;if (arguments.length > 1) {
  p__16862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16862);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16865){
var ports = cljs.core.first(arglist__16865);
var p__16862 = cljs.core.rest(arglist__16865);
return alts_BANG___delegate(ports,p__16862);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16873 = (function (ch,f,map_LT_,meta16874){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16874 = meta16874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16873.cljs$lang$type = true;
cljs.core.async.t16873.cljs$lang$ctorStr = "cljs.core.async/t16873";
cljs.core.async.t16873.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16873");
});
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16876 = (function (fn1,_,meta16874,ch,f,map_LT_,meta16877){
this.fn1 = fn1;
this._ = _;
this.meta16874 = meta16874;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16877 = meta16877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16876.cljs$lang$type = true;
cljs.core.async.t16876.cljs$lang$ctorStr = "cljs.core.async/t16876";
cljs.core.async.t16876.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16876");
});})(___$1))
;
cljs.core.async.t16876.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16876.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16866_SHARP_){return f1.call(null,(((p1__16866_SHARP_ == null))?null:self__.f.call(null,p1__16866_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16878){var self__ = this;
var _16878__$1 = this;return self__.meta16877;
});})(___$1))
;
cljs.core.async.t16876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16878,meta16877__$1){var self__ = this;
var _16878__$1 = this;return (new cljs.core.async.t16876(self__.fn1,self__._,self__.meta16874,self__.ch,self__.f,self__.map_LT_,meta16877__$1));
});})(___$1))
;
cljs.core.async.__GT_t16876 = ((function (___$1){
return (function __GT_t16876(fn1__$1,___$2,meta16874__$1,ch__$2,f__$2,map_LT___$2,meta16877){return (new cljs.core.async.t16876(fn1__$1,___$2,meta16874__$1,ch__$2,f__$2,map_LT___$2,meta16877));
});})(___$1))
;
}
return (new cljs.core.async.t16876(fn1,___$1,self__.meta16874,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16875){var self__ = this;
var _16875__$1 = this;return self__.meta16874;
});
cljs.core.async.t16873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16875,meta16874__$1){var self__ = this;
var _16875__$1 = this;return (new cljs.core.async.t16873(self__.ch,self__.f,self__.map_LT_,meta16874__$1));
});
cljs.core.async.__GT_t16873 = (function __GT_t16873(ch__$1,f__$1,map_LT___$1,meta16874){return (new cljs.core.async.t16873(ch__$1,f__$1,map_LT___$1,meta16874));
});
}
return (new cljs.core.async.t16873(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16882 = (function (ch,f,map_GT_,meta16883){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16883 = meta16883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16882.cljs$lang$type = true;
cljs.core.async.t16882.cljs$lang$ctorStr = "cljs.core.async/t16882";
cljs.core.async.t16882.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16882");
});
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16884){var self__ = this;
var _16884__$1 = this;return self__.meta16883;
});
cljs.core.async.t16882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16884,meta16883__$1){var self__ = this;
var _16884__$1 = this;return (new cljs.core.async.t16882(self__.ch,self__.f,self__.map_GT_,meta16883__$1));
});
cljs.core.async.__GT_t16882 = (function __GT_t16882(ch__$1,f__$1,map_GT___$1,meta16883){return (new cljs.core.async.t16882(ch__$1,f__$1,map_GT___$1,meta16883));
});
}
return (new cljs.core.async.t16882(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16888 = (function (ch,p,filter_GT_,meta16889){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16889 = meta16889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16888.cljs$lang$type = true;
cljs.core.async.t16888.cljs$lang$ctorStr = "cljs.core.async/t16888";
cljs.core.async.t16888.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16888");
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16890){var self__ = this;
var _16890__$1 = this;return self__.meta16889;
});
cljs.core.async.t16888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16890,meta16889__$1){var self__ = this;
var _16890__$1 = this;return (new cljs.core.async.t16888(self__.ch,self__.p,self__.filter_GT_,meta16889__$1));
});
cljs.core.async.__GT_t16888 = (function __GT_t16888(ch__$1,p__$1,filter_GT___$1,meta16889){return (new cljs.core.async.t16888(ch__$1,p__$1,filter_GT___$1,meta16889));
});
}
return (new cljs.core.async.t16888(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___16973 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___16973,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___16973,out){
return (function (state_16952){var state_val_16953 = (state_16952[(1)]);if((state_val_16953 === (7)))
{var inst_16948 = (state_16952[(2)]);var state_16952__$1 = state_16952;var statearr_16954_16974 = state_16952__$1;(statearr_16954_16974[(2)] = inst_16948);
(statearr_16954_16974[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (1)))
{var state_16952__$1 = state_16952;var statearr_16955_16975 = state_16952__$1;(statearr_16955_16975[(2)] = null);
(statearr_16955_16975[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (4)))
{var inst_16934 = (state_16952[(7)]);var inst_16934__$1 = (state_16952[(2)]);var inst_16935 = (inst_16934__$1 == null);var state_16952__$1 = (function (){var statearr_16956 = state_16952;(statearr_16956[(7)] = inst_16934__$1);
return statearr_16956;
})();if(cljs.core.truth_(inst_16935))
{var statearr_16957_16976 = state_16952__$1;(statearr_16957_16976[(1)] = (5));
} else
{var statearr_16958_16977 = state_16952__$1;(statearr_16958_16977[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (6)))
{var inst_16934 = (state_16952[(7)]);var inst_16939 = p.call(null,inst_16934);var state_16952__$1 = state_16952;if(cljs.core.truth_(inst_16939))
{var statearr_16959_16978 = state_16952__$1;(statearr_16959_16978[(1)] = (8));
} else
{var statearr_16960_16979 = state_16952__$1;(statearr_16960_16979[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (3)))
{var inst_16950 = (state_16952[(2)]);var state_16952__$1 = state_16952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16952__$1,inst_16950);
} else
{if((state_val_16953 === (2)))
{var state_16952__$1 = state_16952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16952__$1,(4),ch);
} else
{if((state_val_16953 === (11)))
{var inst_16942 = (state_16952[(2)]);var state_16952__$1 = state_16952;var statearr_16961_16980 = state_16952__$1;(statearr_16961_16980[(2)] = inst_16942);
(statearr_16961_16980[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (9)))
{var state_16952__$1 = state_16952;var statearr_16962_16981 = state_16952__$1;(statearr_16962_16981[(2)] = null);
(statearr_16962_16981[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (5)))
{var inst_16937 = cljs.core.async.close_BANG_.call(null,out);var state_16952__$1 = state_16952;var statearr_16963_16982 = state_16952__$1;(statearr_16963_16982[(2)] = inst_16937);
(statearr_16963_16982[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (10)))
{var inst_16945 = (state_16952[(2)]);var state_16952__$1 = (function (){var statearr_16964 = state_16952;(statearr_16964[(8)] = inst_16945);
return statearr_16964;
})();var statearr_16965_16983 = state_16952__$1;(statearr_16965_16983[(2)] = null);
(statearr_16965_16983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16953 === (8)))
{var inst_16934 = (state_16952[(7)]);var state_16952__$1 = state_16952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16952__$1,(11),out,inst_16934);
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
});})(c__11472__auto___16973,out))
;return ((function (switch__11457__auto__,c__11472__auto___16973,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_16969 = [null,null,null,null,null,null,null,null,null];(statearr_16969[(0)] = state_machine__11458__auto__);
(statearr_16969[(1)] = (1));
return statearr_16969;
});
var state_machine__11458__auto____1 = (function (state_16952){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_16952);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e16970){if((e16970 instanceof Object))
{var ex__11461__auto__ = e16970;var statearr_16971_16984 = state_16952;(statearr_16971_16984[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16952);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16985 = state_16952;
state_16952 = G__16985;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_16952){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_16952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___16973,out))
})();var state__11474__auto__ = (function (){var statearr_16972 = f__11473__auto__.call(null);(statearr_16972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___16973);
return statearr_16972;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___16973,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__){
return (function (state_17137){var state_val_17138 = (state_17137[(1)]);if((state_val_17138 === (7)))
{var inst_17133 = (state_17137[(2)]);var state_17137__$1 = state_17137;var statearr_17139_17176 = state_17137__$1;(statearr_17139_17176[(2)] = inst_17133);
(statearr_17139_17176[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (20)))
{var inst_17108 = (state_17137[(7)]);var inst_17119 = (state_17137[(2)]);var inst_17120 = cljs.core.next.call(null,inst_17108);var inst_17094 = inst_17120;var inst_17095 = null;var inst_17096 = (0);var inst_17097 = (0);var state_17137__$1 = (function (){var statearr_17140 = state_17137;(statearr_17140[(8)] = inst_17095);
(statearr_17140[(9)] = inst_17094);
(statearr_17140[(10)] = inst_17119);
(statearr_17140[(11)] = inst_17096);
(statearr_17140[(12)] = inst_17097);
return statearr_17140;
})();var statearr_17141_17177 = state_17137__$1;(statearr_17141_17177[(2)] = null);
(statearr_17141_17177[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (1)))
{var state_17137__$1 = state_17137;var statearr_17142_17178 = state_17137__$1;(statearr_17142_17178[(2)] = null);
(statearr_17142_17178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (4)))
{var inst_17083 = (state_17137[(13)]);var inst_17083__$1 = (state_17137[(2)]);var inst_17084 = (inst_17083__$1 == null);var state_17137__$1 = (function (){var statearr_17146 = state_17137;(statearr_17146[(13)] = inst_17083__$1);
return statearr_17146;
})();if(cljs.core.truth_(inst_17084))
{var statearr_17147_17179 = state_17137__$1;(statearr_17147_17179[(1)] = (5));
} else
{var statearr_17148_17180 = state_17137__$1;(statearr_17148_17180[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (15)))
{var state_17137__$1 = state_17137;var statearr_17149_17181 = state_17137__$1;(statearr_17149_17181[(2)] = null);
(statearr_17149_17181[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (13)))
{var inst_17095 = (state_17137[(8)]);var inst_17094 = (state_17137[(9)]);var inst_17096 = (state_17137[(11)]);var inst_17097 = (state_17137[(12)]);var inst_17104 = (state_17137[(2)]);var inst_17105 = (inst_17097 + (1));var tmp17143 = inst_17095;var tmp17144 = inst_17094;var tmp17145 = inst_17096;var inst_17094__$1 = tmp17144;var inst_17095__$1 = tmp17143;var inst_17096__$1 = tmp17145;var inst_17097__$1 = inst_17105;var state_17137__$1 = (function (){var statearr_17150 = state_17137;(statearr_17150[(14)] = inst_17104);
(statearr_17150[(8)] = inst_17095__$1);
(statearr_17150[(9)] = inst_17094__$1);
(statearr_17150[(11)] = inst_17096__$1);
(statearr_17150[(12)] = inst_17097__$1);
return statearr_17150;
})();var statearr_17151_17182 = state_17137__$1;(statearr_17151_17182[(2)] = null);
(statearr_17151_17182[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (6)))
{var inst_17083 = (state_17137[(13)]);var inst_17088 = f.call(null,inst_17083);var inst_17093 = cljs.core.seq.call(null,inst_17088);var inst_17094 = inst_17093;var inst_17095 = null;var inst_17096 = (0);var inst_17097 = (0);var state_17137__$1 = (function (){var statearr_17152 = state_17137;(statearr_17152[(8)] = inst_17095);
(statearr_17152[(9)] = inst_17094);
(statearr_17152[(11)] = inst_17096);
(statearr_17152[(12)] = inst_17097);
return statearr_17152;
})();var statearr_17153_17183 = state_17137__$1;(statearr_17153_17183[(2)] = null);
(statearr_17153_17183[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (17)))
{var inst_17108 = (state_17137[(7)]);var inst_17112 = cljs.core.chunk_first.call(null,inst_17108);var inst_17113 = cljs.core.chunk_rest.call(null,inst_17108);var inst_17114 = cljs.core.count.call(null,inst_17112);var inst_17094 = inst_17113;var inst_17095 = inst_17112;var inst_17096 = inst_17114;var inst_17097 = (0);var state_17137__$1 = (function (){var statearr_17154 = state_17137;(statearr_17154[(8)] = inst_17095);
(statearr_17154[(9)] = inst_17094);
(statearr_17154[(11)] = inst_17096);
(statearr_17154[(12)] = inst_17097);
return statearr_17154;
})();var statearr_17155_17184 = state_17137__$1;(statearr_17155_17184[(2)] = null);
(statearr_17155_17184[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (3)))
{var inst_17135 = (state_17137[(2)]);var state_17137__$1 = state_17137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17137__$1,inst_17135);
} else
{if((state_val_17138 === (12)))
{var inst_17128 = (state_17137[(2)]);var state_17137__$1 = state_17137;var statearr_17156_17185 = state_17137__$1;(statearr_17156_17185[(2)] = inst_17128);
(statearr_17156_17185[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (2)))
{var state_17137__$1 = state_17137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17137__$1,(4),in$);
} else
{if((state_val_17138 === (19)))
{var inst_17123 = (state_17137[(2)]);var state_17137__$1 = state_17137;var statearr_17157_17186 = state_17137__$1;(statearr_17157_17186[(2)] = inst_17123);
(statearr_17157_17186[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (11)))
{var inst_17094 = (state_17137[(9)]);var inst_17108 = (state_17137[(7)]);var inst_17108__$1 = cljs.core.seq.call(null,inst_17094);var state_17137__$1 = (function (){var statearr_17158 = state_17137;(statearr_17158[(7)] = inst_17108__$1);
return statearr_17158;
})();if(inst_17108__$1)
{var statearr_17159_17187 = state_17137__$1;(statearr_17159_17187[(1)] = (14));
} else
{var statearr_17160_17188 = state_17137__$1;(statearr_17160_17188[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (9)))
{var inst_17130 = (state_17137[(2)]);var state_17137__$1 = (function (){var statearr_17161 = state_17137;(statearr_17161[(15)] = inst_17130);
return statearr_17161;
})();var statearr_17162_17189 = state_17137__$1;(statearr_17162_17189[(2)] = null);
(statearr_17162_17189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (5)))
{var inst_17086 = cljs.core.async.close_BANG_.call(null,out);var state_17137__$1 = state_17137;var statearr_17163_17190 = state_17137__$1;(statearr_17163_17190[(2)] = inst_17086);
(statearr_17163_17190[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (14)))
{var inst_17108 = (state_17137[(7)]);var inst_17110 = cljs.core.chunked_seq_QMARK_.call(null,inst_17108);var state_17137__$1 = state_17137;if(inst_17110)
{var statearr_17164_17191 = state_17137__$1;(statearr_17164_17191[(1)] = (17));
} else
{var statearr_17165_17192 = state_17137__$1;(statearr_17165_17192[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (16)))
{var inst_17126 = (state_17137[(2)]);var state_17137__$1 = state_17137;var statearr_17166_17193 = state_17137__$1;(statearr_17166_17193[(2)] = inst_17126);
(statearr_17166_17193[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17138 === (10)))
{var inst_17095 = (state_17137[(8)]);var inst_17097 = (state_17137[(12)]);var inst_17102 = cljs.core._nth.call(null,inst_17095,inst_17097);var state_17137__$1 = state_17137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17137__$1,(13),out,inst_17102);
} else
{if((state_val_17138 === (18)))
{var inst_17108 = (state_17137[(7)]);var inst_17117 = cljs.core.first.call(null,inst_17108);var state_17137__$1 = state_17137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17137__$1,(20),out,inst_17117);
} else
{if((state_val_17138 === (8)))
{var inst_17096 = (state_17137[(11)]);var inst_17097 = (state_17137[(12)]);var inst_17099 = (inst_17097 < inst_17096);var inst_17100 = inst_17099;var state_17137__$1 = state_17137;if(cljs.core.truth_(inst_17100))
{var statearr_17167_17194 = state_17137__$1;(statearr_17167_17194[(1)] = (10));
} else
{var statearr_17168_17195 = state_17137__$1;(statearr_17168_17195[(1)] = (11));
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
});})(c__11472__auto__))
;return ((function (switch__11457__auto__,c__11472__auto__){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_17172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17172[(0)] = state_machine__11458__auto__);
(statearr_17172[(1)] = (1));
return statearr_17172;
});
var state_machine__11458__auto____1 = (function (state_17137){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17137);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e17173){if((e17173 instanceof Object))
{var ex__11461__auto__ = e17173;var statearr_17174_17196 = state_17137;(statearr_17174_17196[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17137);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17197 = state_17137;
state_17137 = G__17197;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17137){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__))
})();var state__11474__auto__ = (function (){var statearr_17175 = f__11473__auto__.call(null);(statearr_17175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_17175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__))
);
return c__11472__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11472__auto___17278 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___17278){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___17278){
return (function (state_17257){var state_val_17258 = (state_17257[(1)]);if((state_val_17258 === (7)))
{var inst_17253 = (state_17257[(2)]);var state_17257__$1 = state_17257;var statearr_17259_17279 = state_17257__$1;(statearr_17259_17279[(2)] = inst_17253);
(statearr_17259_17279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (1)))
{var state_17257__$1 = state_17257;var statearr_17260_17280 = state_17257__$1;(statearr_17260_17280[(2)] = null);
(statearr_17260_17280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (4)))
{var inst_17240 = (state_17257[(7)]);var inst_17240__$1 = (state_17257[(2)]);var inst_17241 = (inst_17240__$1 == null);var state_17257__$1 = (function (){var statearr_17261 = state_17257;(statearr_17261[(7)] = inst_17240__$1);
return statearr_17261;
})();if(cljs.core.truth_(inst_17241))
{var statearr_17262_17281 = state_17257__$1;(statearr_17262_17281[(1)] = (5));
} else
{var statearr_17263_17282 = state_17257__$1;(statearr_17263_17282[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (6)))
{var inst_17240 = (state_17257[(7)]);var state_17257__$1 = state_17257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17257__$1,(11),to,inst_17240);
} else
{if((state_val_17258 === (3)))
{var inst_17255 = (state_17257[(2)]);var state_17257__$1 = state_17257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17257__$1,inst_17255);
} else
{if((state_val_17258 === (2)))
{var state_17257__$1 = state_17257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17257__$1,(4),from);
} else
{if((state_val_17258 === (11)))
{var inst_17250 = (state_17257[(2)]);var state_17257__$1 = (function (){var statearr_17264 = state_17257;(statearr_17264[(8)] = inst_17250);
return statearr_17264;
})();var statearr_17265_17283 = state_17257__$1;(statearr_17265_17283[(2)] = null);
(statearr_17265_17283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (9)))
{var state_17257__$1 = state_17257;var statearr_17266_17284 = state_17257__$1;(statearr_17266_17284[(2)] = null);
(statearr_17266_17284[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (5)))
{var state_17257__$1 = state_17257;if(cljs.core.truth_(close_QMARK_))
{var statearr_17267_17285 = state_17257__$1;(statearr_17267_17285[(1)] = (8));
} else
{var statearr_17268_17286 = state_17257__$1;(statearr_17268_17286[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (10)))
{var inst_17247 = (state_17257[(2)]);var state_17257__$1 = state_17257;var statearr_17269_17287 = state_17257__$1;(statearr_17269_17287[(2)] = inst_17247);
(statearr_17269_17287[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17258 === (8)))
{var inst_17244 = cljs.core.async.close_BANG_.call(null,to);var state_17257__$1 = state_17257;var statearr_17270_17288 = state_17257__$1;(statearr_17270_17288[(2)] = inst_17244);
(statearr_17270_17288[(1)] = (10));
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
});})(c__11472__auto___17278))
;return ((function (switch__11457__auto__,c__11472__auto___17278){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_17274 = [null,null,null,null,null,null,null,null,null];(statearr_17274[(0)] = state_machine__11458__auto__);
(statearr_17274[(1)] = (1));
return statearr_17274;
});
var state_machine__11458__auto____1 = (function (state_17257){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17257);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e17275){if((e17275 instanceof Object))
{var ex__11461__auto__ = e17275;var statearr_17276_17289 = state_17257;(statearr_17276_17289[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17257);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17290 = state_17257;
state_17257 = G__17290;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17257){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___17278))
})();var state__11474__auto__ = (function (){var statearr_17277 = f__11473__auto__.call(null);(statearr_17277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___17278);
return statearr_17277;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___17278))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11472__auto___17377 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___17377,tc,fc){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___17377,tc,fc){
return (function (state_17355){var state_val_17356 = (state_17355[(1)]);if((state_val_17356 === (7)))
{var inst_17351 = (state_17355[(2)]);var state_17355__$1 = state_17355;var statearr_17357_17378 = state_17355__$1;(statearr_17357_17378[(2)] = inst_17351);
(statearr_17357_17378[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (1)))
{var state_17355__$1 = state_17355;var statearr_17358_17379 = state_17355__$1;(statearr_17358_17379[(2)] = null);
(statearr_17358_17379[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (4)))
{var inst_17336 = (state_17355[(7)]);var inst_17336__$1 = (state_17355[(2)]);var inst_17337 = (inst_17336__$1 == null);var state_17355__$1 = (function (){var statearr_17359 = state_17355;(statearr_17359[(7)] = inst_17336__$1);
return statearr_17359;
})();if(cljs.core.truth_(inst_17337))
{var statearr_17360_17380 = state_17355__$1;(statearr_17360_17380[(1)] = (5));
} else
{var statearr_17361_17381 = state_17355__$1;(statearr_17361_17381[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (6)))
{var inst_17336 = (state_17355[(7)]);var inst_17342 = p.call(null,inst_17336);var state_17355__$1 = state_17355;if(cljs.core.truth_(inst_17342))
{var statearr_17362_17382 = state_17355__$1;(statearr_17362_17382[(1)] = (9));
} else
{var statearr_17363_17383 = state_17355__$1;(statearr_17363_17383[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (3)))
{var inst_17353 = (state_17355[(2)]);var state_17355__$1 = state_17355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17355__$1,inst_17353);
} else
{if((state_val_17356 === (2)))
{var state_17355__$1 = state_17355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17355__$1,(4),ch);
} else
{if((state_val_17356 === (11)))
{var inst_17336 = (state_17355[(7)]);var inst_17346 = (state_17355[(2)]);var state_17355__$1 = state_17355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17355__$1,(8),inst_17346,inst_17336);
} else
{if((state_val_17356 === (9)))
{var state_17355__$1 = state_17355;var statearr_17364_17384 = state_17355__$1;(statearr_17364_17384[(2)] = tc);
(statearr_17364_17384[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (5)))
{var inst_17339 = cljs.core.async.close_BANG_.call(null,tc);var inst_17340 = cljs.core.async.close_BANG_.call(null,fc);var state_17355__$1 = (function (){var statearr_17365 = state_17355;(statearr_17365[(8)] = inst_17339);
return statearr_17365;
})();var statearr_17366_17385 = state_17355__$1;(statearr_17366_17385[(2)] = inst_17340);
(statearr_17366_17385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (10)))
{var state_17355__$1 = state_17355;var statearr_17367_17386 = state_17355__$1;(statearr_17367_17386[(2)] = fc);
(statearr_17367_17386[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17356 === (8)))
{var inst_17348 = (state_17355[(2)]);var state_17355__$1 = (function (){var statearr_17368 = state_17355;(statearr_17368[(9)] = inst_17348);
return statearr_17368;
})();var statearr_17369_17387 = state_17355__$1;(statearr_17369_17387[(2)] = null);
(statearr_17369_17387[(1)] = (2));
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
});})(c__11472__auto___17377,tc,fc))
;return ((function (switch__11457__auto__,c__11472__auto___17377,tc,fc){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_17373 = [null,null,null,null,null,null,null,null,null,null];(statearr_17373[(0)] = state_machine__11458__auto__);
(statearr_17373[(1)] = (1));
return statearr_17373;
});
var state_machine__11458__auto____1 = (function (state_17355){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17355);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e17374){if((e17374 instanceof Object))
{var ex__11461__auto__ = e17374;var statearr_17375_17388 = state_17355;(statearr_17375_17388[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17389 = state_17355;
state_17355 = G__17389;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17355){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___17377,tc,fc))
})();var state__11474__auto__ = (function (){var statearr_17376 = f__11473__auto__.call(null);(statearr_17376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___17377);
return statearr_17376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___17377,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__){
return (function (state_17436){var state_val_17437 = (state_17436[(1)]);if((state_val_17437 === (7)))
{var inst_17432 = (state_17436[(2)]);var state_17436__$1 = state_17436;var statearr_17438_17454 = state_17436__$1;(statearr_17438_17454[(2)] = inst_17432);
(statearr_17438_17454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17437 === (6)))
{var inst_17425 = (state_17436[(7)]);var inst_17422 = (state_17436[(8)]);var inst_17429 = f.call(null,inst_17422,inst_17425);var inst_17422__$1 = inst_17429;var state_17436__$1 = (function (){var statearr_17439 = state_17436;(statearr_17439[(8)] = inst_17422__$1);
return statearr_17439;
})();var statearr_17440_17455 = state_17436__$1;(statearr_17440_17455[(2)] = null);
(statearr_17440_17455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17437 === (5)))
{var inst_17422 = (state_17436[(8)]);var state_17436__$1 = state_17436;var statearr_17441_17456 = state_17436__$1;(statearr_17441_17456[(2)] = inst_17422);
(statearr_17441_17456[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17437 === (4)))
{var inst_17425 = (state_17436[(7)]);var inst_17425__$1 = (state_17436[(2)]);var inst_17426 = (inst_17425__$1 == null);var state_17436__$1 = (function (){var statearr_17442 = state_17436;(statearr_17442[(7)] = inst_17425__$1);
return statearr_17442;
})();if(cljs.core.truth_(inst_17426))
{var statearr_17443_17457 = state_17436__$1;(statearr_17443_17457[(1)] = (5));
} else
{var statearr_17444_17458 = state_17436__$1;(statearr_17444_17458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17437 === (3)))
{var inst_17434 = (state_17436[(2)]);var state_17436__$1 = state_17436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17436__$1,inst_17434);
} else
{if((state_val_17437 === (2)))
{var state_17436__$1 = state_17436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17436__$1,(4),ch);
} else
{if((state_val_17437 === (1)))
{var inst_17422 = init;var state_17436__$1 = (function (){var statearr_17445 = state_17436;(statearr_17445[(8)] = inst_17422);
return statearr_17445;
})();var statearr_17446_17459 = state_17436__$1;(statearr_17446_17459[(2)] = null);
(statearr_17446_17459[(1)] = (2));
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
});})(c__11472__auto__))
;return ((function (switch__11457__auto__,c__11472__auto__){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_17450 = [null,null,null,null,null,null,null,null,null];(statearr_17450[(0)] = state_machine__11458__auto__);
(statearr_17450[(1)] = (1));
return statearr_17450;
});
var state_machine__11458__auto____1 = (function (state_17436){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17436);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e17451){if((e17451 instanceof Object))
{var ex__11461__auto__ = e17451;var statearr_17452_17460 = state_17436;(statearr_17452_17460[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17436);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17461 = state_17436;
state_17436 = G__17461;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17436){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__))
})();var state__11474__auto__ = (function (){var statearr_17453 = f__11473__auto__.call(null);(statearr_17453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_17453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__))
);
return c__11472__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11472__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto__){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto__){
return (function (state_17523){var state_val_17524 = (state_17523[(1)]);if((state_val_17524 === (7)))
{var inst_17504 = (state_17523[(7)]);var inst_17509 = (state_17523[(2)]);var inst_17510 = cljs.core.next.call(null,inst_17504);var inst_17504__$1 = inst_17510;var state_17523__$1 = (function (){var statearr_17525 = state_17523;(statearr_17525[(8)] = inst_17509);
(statearr_17525[(7)] = inst_17504__$1);
return statearr_17525;
})();var statearr_17526_17544 = state_17523__$1;(statearr_17526_17544[(2)] = null);
(statearr_17526_17544[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (1)))
{var inst_17503 = cljs.core.seq.call(null,coll);var inst_17504 = inst_17503;var state_17523__$1 = (function (){var statearr_17527 = state_17523;(statearr_17527[(7)] = inst_17504);
return statearr_17527;
})();var statearr_17528_17545 = state_17523__$1;(statearr_17528_17545[(2)] = null);
(statearr_17528_17545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (4)))
{var inst_17504 = (state_17523[(7)]);var inst_17507 = cljs.core.first.call(null,inst_17504);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17523__$1,(7),ch,inst_17507);
} else
{if((state_val_17524 === (6)))
{var inst_17519 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17529_17546 = state_17523__$1;(statearr_17529_17546[(2)] = inst_17519);
(statearr_17529_17546[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (3)))
{var inst_17521 = (state_17523[(2)]);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17523__$1,inst_17521);
} else
{if((state_val_17524 === (2)))
{var inst_17504 = (state_17523[(7)]);var state_17523__$1 = state_17523;if(cljs.core.truth_(inst_17504))
{var statearr_17530_17547 = state_17523__$1;(statearr_17530_17547[(1)] = (4));
} else
{var statearr_17531_17548 = state_17523__$1;(statearr_17531_17548[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (9)))
{var state_17523__$1 = state_17523;var statearr_17532_17549 = state_17523__$1;(statearr_17532_17549[(2)] = null);
(statearr_17532_17549[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (5)))
{var state_17523__$1 = state_17523;if(cljs.core.truth_(close_QMARK_))
{var statearr_17533_17550 = state_17523__$1;(statearr_17533_17550[(1)] = (8));
} else
{var statearr_17534_17551 = state_17523__$1;(statearr_17534_17551[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (10)))
{var inst_17517 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17535_17552 = state_17523__$1;(statearr_17535_17552[(2)] = inst_17517);
(statearr_17535_17552[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (8)))
{var inst_17514 = cljs.core.async.close_BANG_.call(null,ch);var state_17523__$1 = state_17523;var statearr_17536_17553 = state_17523__$1;(statearr_17536_17553[(2)] = inst_17514);
(statearr_17536_17553[(1)] = (10));
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
});})(c__11472__auto__))
;return ((function (switch__11457__auto__,c__11472__auto__){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_17540 = [null,null,null,null,null,null,null,null,null];(statearr_17540[(0)] = state_machine__11458__auto__);
(statearr_17540[(1)] = (1));
return statearr_17540;
});
var state_machine__11458__auto____1 = (function (state_17523){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17523);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e17541){if((e17541 instanceof Object))
{var ex__11461__auto__ = e17541;var statearr_17542_17554 = state_17523;(statearr_17542_17554[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17555 = state_17523;
state_17523 = G__17555;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto__))
})();var state__11474__auto__ = (function (){var statearr_17543 = f__11473__auto__.call(null);(statearr_17543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto__);
return statearr_17543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto__))
);
return c__11472__auto__;
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
cljs.core.async.Mux = (function (){var obj17557 = {};return obj17557;
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
cljs.core.async.Mult = (function (){var obj17559 = {};return obj17559;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17783 = (function (cs,ch,mult,meta17784){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17784 = meta17784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17783.cljs$lang$type = true;
cljs.core.async.t17783.cljs$lang$ctorStr = "cljs.core.async/t17783";
cljs.core.async.t17783.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t17783");
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17785){var self__ = this;
var _17785__$1 = this;return self__.meta17784;
});})(cs))
;
cljs.core.async.t17783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17785,meta17784__$1){var self__ = this;
var _17785__$1 = this;return (new cljs.core.async.t17783(self__.cs,self__.ch,self__.mult,meta17784__$1));
});})(cs))
;
cljs.core.async.__GT_t17783 = ((function (cs){
return (function __GT_t17783(cs__$1,ch__$1,mult__$1,meta17784){return (new cljs.core.async.t17783(cs__$1,ch__$1,mult__$1,meta17784));
});})(cs))
;
}
return (new cljs.core.async.t17783(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11472__auto___18006 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18006,cs,m,dchan,dctr,done){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18006,cs,m,dchan,dctr,done){
return (function (state_17920){var state_val_17921 = (state_17920[(1)]);if((state_val_17921 === (7)))
{var inst_17916 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17922_18007 = state_17920__$1;(statearr_17922_18007[(2)] = inst_17916);
(statearr_17922_18007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (20)))
{var inst_17817 = (state_17920[(7)]);var inst_17827 = cljs.core.first.call(null,inst_17817);var inst_17828 = cljs.core.nth.call(null,inst_17827,(0),null);var inst_17829 = cljs.core.nth.call(null,inst_17827,(1),null);var state_17920__$1 = (function (){var statearr_17923 = state_17920;(statearr_17923[(8)] = inst_17828);
return statearr_17923;
})();if(cljs.core.truth_(inst_17829))
{var statearr_17924_18008 = state_17920__$1;(statearr_17924_18008[(1)] = (22));
} else
{var statearr_17925_18009 = state_17920__$1;(statearr_17925_18009[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (27)))
{var inst_17857 = (state_17920[(9)]);var inst_17859 = (state_17920[(10)]);var inst_17864 = cljs.core._nth.call(null,inst_17857,inst_17859);var state_17920__$1 = (function (){var statearr_17926 = state_17920;(statearr_17926[(11)] = inst_17864);
return statearr_17926;
})();var statearr_17927_18010 = state_17920__$1;(statearr_17927_18010[(2)] = null);
(statearr_17927_18010[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (1)))
{var state_17920__$1 = state_17920;var statearr_17928_18011 = state_17920__$1;(statearr_17928_18011[(2)] = null);
(statearr_17928_18011[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (24)))
{var inst_17817 = (state_17920[(7)]);var inst_17834 = (state_17920[(2)]);var inst_17835 = cljs.core.next.call(null,inst_17817);var inst_17797 = inst_17835;var inst_17798 = null;var inst_17799 = (0);var inst_17800 = (0);var state_17920__$1 = (function (){var statearr_17929 = state_17920;(statearr_17929[(12)] = inst_17799);
(statearr_17929[(13)] = inst_17800);
(statearr_17929[(14)] = inst_17834);
(statearr_17929[(15)] = inst_17798);
(statearr_17929[(16)] = inst_17797);
return statearr_17929;
})();var statearr_17930_18012 = state_17920__$1;(statearr_17930_18012[(2)] = null);
(statearr_17930_18012[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (39)))
{var inst_17877 = (state_17920[(17)]);var inst_17895 = (state_17920[(2)]);var inst_17896 = cljs.core.next.call(null,inst_17877);var inst_17856 = inst_17896;var inst_17857 = null;var inst_17858 = (0);var inst_17859 = (0);var state_17920__$1 = (function (){var statearr_17934 = state_17920;(statearr_17934[(18)] = inst_17858);
(statearr_17934[(19)] = inst_17895);
(statearr_17934[(20)] = inst_17856);
(statearr_17934[(9)] = inst_17857);
(statearr_17934[(10)] = inst_17859);
return statearr_17934;
})();var statearr_17935_18013 = state_17920__$1;(statearr_17935_18013[(2)] = null);
(statearr_17935_18013[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (4)))
{var inst_17788 = (state_17920[(21)]);var inst_17788__$1 = (state_17920[(2)]);var inst_17789 = (inst_17788__$1 == null);var state_17920__$1 = (function (){var statearr_17936 = state_17920;(statearr_17936[(21)] = inst_17788__$1);
return statearr_17936;
})();if(cljs.core.truth_(inst_17789))
{var statearr_17937_18014 = state_17920__$1;(statearr_17937_18014[(1)] = (5));
} else
{var statearr_17938_18015 = state_17920__$1;(statearr_17938_18015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (15)))
{var inst_17799 = (state_17920[(12)]);var inst_17800 = (state_17920[(13)]);var inst_17798 = (state_17920[(15)]);var inst_17797 = (state_17920[(16)]);var inst_17813 = (state_17920[(2)]);var inst_17814 = (inst_17800 + (1));var tmp17931 = inst_17799;var tmp17932 = inst_17798;var tmp17933 = inst_17797;var inst_17797__$1 = tmp17933;var inst_17798__$1 = tmp17932;var inst_17799__$1 = tmp17931;var inst_17800__$1 = inst_17814;var state_17920__$1 = (function (){var statearr_17939 = state_17920;(statearr_17939[(12)] = inst_17799__$1);
(statearr_17939[(13)] = inst_17800__$1);
(statearr_17939[(22)] = inst_17813);
(statearr_17939[(15)] = inst_17798__$1);
(statearr_17939[(16)] = inst_17797__$1);
return statearr_17939;
})();var statearr_17940_18016 = state_17920__$1;(statearr_17940_18016[(2)] = null);
(statearr_17940_18016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (21)))
{var inst_17838 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17941_18017 = state_17920__$1;(statearr_17941_18017[(2)] = inst_17838);
(statearr_17941_18017[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (31)))
{var inst_17864 = (state_17920[(11)]);var inst_17865 = (state_17920[(2)]);var inst_17866 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17867 = cljs.core.async.untap_STAR_.call(null,m,inst_17864);var state_17920__$1 = (function (){var statearr_17942 = state_17920;(statearr_17942[(23)] = inst_17865);
(statearr_17942[(24)] = inst_17866);
return statearr_17942;
})();var statearr_17943_18018 = state_17920__$1;(statearr_17943_18018[(2)] = inst_17867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (32)))
{var inst_17864 = (state_17920[(11)]);var inst_17788 = (state_17920[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17920,(31),Object,null,(30));var inst_17871 = cljs.core.async.put_BANG_.call(null,inst_17864,inst_17788,done);var state_17920__$1 = state_17920;var statearr_17944_18019 = state_17920__$1;(statearr_17944_18019[(2)] = inst_17871);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (40)))
{var inst_17886 = (state_17920[(25)]);var inst_17887 = (state_17920[(2)]);var inst_17888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17889 = cljs.core.async.untap_STAR_.call(null,m,inst_17886);var state_17920__$1 = (function (){var statearr_17945 = state_17920;(statearr_17945[(26)] = inst_17888);
(statearr_17945[(27)] = inst_17887);
return statearr_17945;
})();var statearr_17946_18020 = state_17920__$1;(statearr_17946_18020[(2)] = inst_17889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (33)))
{var inst_17877 = (state_17920[(17)]);var inst_17879 = cljs.core.chunked_seq_QMARK_.call(null,inst_17877);var state_17920__$1 = state_17920;if(inst_17879)
{var statearr_17947_18021 = state_17920__$1;(statearr_17947_18021[(1)] = (36));
} else
{var statearr_17948_18022 = state_17920__$1;(statearr_17948_18022[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (13)))
{var inst_17807 = (state_17920[(28)]);var inst_17810 = cljs.core.async.close_BANG_.call(null,inst_17807);var state_17920__$1 = state_17920;var statearr_17949_18023 = state_17920__$1;(statearr_17949_18023[(2)] = inst_17810);
(statearr_17949_18023[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (22)))
{var inst_17828 = (state_17920[(8)]);var inst_17831 = cljs.core.async.close_BANG_.call(null,inst_17828);var state_17920__$1 = state_17920;var statearr_17950_18024 = state_17920__$1;(statearr_17950_18024[(2)] = inst_17831);
(statearr_17950_18024[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (36)))
{var inst_17877 = (state_17920[(17)]);var inst_17881 = cljs.core.chunk_first.call(null,inst_17877);var inst_17882 = cljs.core.chunk_rest.call(null,inst_17877);var inst_17883 = cljs.core.count.call(null,inst_17881);var inst_17856 = inst_17882;var inst_17857 = inst_17881;var inst_17858 = inst_17883;var inst_17859 = (0);var state_17920__$1 = (function (){var statearr_17951 = state_17920;(statearr_17951[(18)] = inst_17858);
(statearr_17951[(20)] = inst_17856);
(statearr_17951[(9)] = inst_17857);
(statearr_17951[(10)] = inst_17859);
return statearr_17951;
})();var statearr_17952_18025 = state_17920__$1;(statearr_17952_18025[(2)] = null);
(statearr_17952_18025[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (41)))
{var inst_17788 = (state_17920[(21)]);var inst_17886 = (state_17920[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17920,(40),Object,null,(39));var inst_17893 = cljs.core.async.put_BANG_.call(null,inst_17886,inst_17788,done);var state_17920__$1 = state_17920;var statearr_17953_18026 = state_17920__$1;(statearr_17953_18026[(2)] = inst_17893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (43)))
{var state_17920__$1 = state_17920;var statearr_17954_18027 = state_17920__$1;(statearr_17954_18027[(2)] = null);
(statearr_17954_18027[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (29)))
{var inst_17904 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17955_18028 = state_17920__$1;(statearr_17955_18028[(2)] = inst_17904);
(statearr_17955_18028[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (44)))
{var inst_17913 = (state_17920[(2)]);var state_17920__$1 = (function (){var statearr_17956 = state_17920;(statearr_17956[(29)] = inst_17913);
return statearr_17956;
})();var statearr_17957_18029 = state_17920__$1;(statearr_17957_18029[(2)] = null);
(statearr_17957_18029[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (6)))
{var inst_17848 = (state_17920[(30)]);var inst_17847 = cljs.core.deref.call(null,cs);var inst_17848__$1 = cljs.core.keys.call(null,inst_17847);var inst_17849 = cljs.core.count.call(null,inst_17848__$1);var inst_17850 = cljs.core.reset_BANG_.call(null,dctr,inst_17849);var inst_17855 = cljs.core.seq.call(null,inst_17848__$1);var inst_17856 = inst_17855;var inst_17857 = null;var inst_17858 = (0);var inst_17859 = (0);var state_17920__$1 = (function (){var statearr_17958 = state_17920;(statearr_17958[(18)] = inst_17858);
(statearr_17958[(20)] = inst_17856);
(statearr_17958[(30)] = inst_17848__$1);
(statearr_17958[(9)] = inst_17857);
(statearr_17958[(10)] = inst_17859);
(statearr_17958[(31)] = inst_17850);
return statearr_17958;
})();var statearr_17959_18030 = state_17920__$1;(statearr_17959_18030[(2)] = null);
(statearr_17959_18030[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (28)))
{var inst_17877 = (state_17920[(17)]);var inst_17856 = (state_17920[(20)]);var inst_17877__$1 = cljs.core.seq.call(null,inst_17856);var state_17920__$1 = (function (){var statearr_17960 = state_17920;(statearr_17960[(17)] = inst_17877__$1);
return statearr_17960;
})();if(inst_17877__$1)
{var statearr_17961_18031 = state_17920__$1;(statearr_17961_18031[(1)] = (33));
} else
{var statearr_17962_18032 = state_17920__$1;(statearr_17962_18032[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (25)))
{var inst_17858 = (state_17920[(18)]);var inst_17859 = (state_17920[(10)]);var inst_17861 = (inst_17859 < inst_17858);var inst_17862 = inst_17861;var state_17920__$1 = state_17920;if(cljs.core.truth_(inst_17862))
{var statearr_17963_18033 = state_17920__$1;(statearr_17963_18033[(1)] = (27));
} else
{var statearr_17964_18034 = state_17920__$1;(statearr_17964_18034[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (34)))
{var state_17920__$1 = state_17920;var statearr_17965_18035 = state_17920__$1;(statearr_17965_18035[(2)] = null);
(statearr_17965_18035[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (17)))
{var state_17920__$1 = state_17920;var statearr_17966_18036 = state_17920__$1;(statearr_17966_18036[(2)] = null);
(statearr_17966_18036[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (3)))
{var inst_17918 = (state_17920[(2)]);var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17920__$1,inst_17918);
} else
{if((state_val_17921 === (12)))
{var inst_17843 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17967_18037 = state_17920__$1;(statearr_17967_18037[(2)] = inst_17843);
(statearr_17967_18037[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (2)))
{var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(4),ch);
} else
{if((state_val_17921 === (23)))
{var state_17920__$1 = state_17920;var statearr_17968_18038 = state_17920__$1;(statearr_17968_18038[(2)] = null);
(statearr_17968_18038[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (35)))
{var inst_17902 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17969_18039 = state_17920__$1;(statearr_17969_18039[(2)] = inst_17902);
(statearr_17969_18039[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (19)))
{var inst_17817 = (state_17920[(7)]);var inst_17821 = cljs.core.chunk_first.call(null,inst_17817);var inst_17822 = cljs.core.chunk_rest.call(null,inst_17817);var inst_17823 = cljs.core.count.call(null,inst_17821);var inst_17797 = inst_17822;var inst_17798 = inst_17821;var inst_17799 = inst_17823;var inst_17800 = (0);var state_17920__$1 = (function (){var statearr_17970 = state_17920;(statearr_17970[(12)] = inst_17799);
(statearr_17970[(13)] = inst_17800);
(statearr_17970[(15)] = inst_17798);
(statearr_17970[(16)] = inst_17797);
return statearr_17970;
})();var statearr_17971_18040 = state_17920__$1;(statearr_17971_18040[(2)] = null);
(statearr_17971_18040[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (11)))
{var inst_17817 = (state_17920[(7)]);var inst_17797 = (state_17920[(16)]);var inst_17817__$1 = cljs.core.seq.call(null,inst_17797);var state_17920__$1 = (function (){var statearr_17972 = state_17920;(statearr_17972[(7)] = inst_17817__$1);
return statearr_17972;
})();if(inst_17817__$1)
{var statearr_17973_18041 = state_17920__$1;(statearr_17973_18041[(1)] = (16));
} else
{var statearr_17974_18042 = state_17920__$1;(statearr_17974_18042[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (9)))
{var inst_17845 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17975_18043 = state_17920__$1;(statearr_17975_18043[(2)] = inst_17845);
(statearr_17975_18043[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (5)))
{var inst_17795 = cljs.core.deref.call(null,cs);var inst_17796 = cljs.core.seq.call(null,inst_17795);var inst_17797 = inst_17796;var inst_17798 = null;var inst_17799 = (0);var inst_17800 = (0);var state_17920__$1 = (function (){var statearr_17976 = state_17920;(statearr_17976[(12)] = inst_17799);
(statearr_17976[(13)] = inst_17800);
(statearr_17976[(15)] = inst_17798);
(statearr_17976[(16)] = inst_17797);
return statearr_17976;
})();var statearr_17977_18044 = state_17920__$1;(statearr_17977_18044[(2)] = null);
(statearr_17977_18044[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (14)))
{var state_17920__$1 = state_17920;var statearr_17978_18045 = state_17920__$1;(statearr_17978_18045[(2)] = null);
(statearr_17978_18045[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (45)))
{var inst_17910 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17979_18046 = state_17920__$1;(statearr_17979_18046[(2)] = inst_17910);
(statearr_17979_18046[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (26)))
{var inst_17848 = (state_17920[(30)]);var inst_17906 = (state_17920[(2)]);var inst_17907 = cljs.core.seq.call(null,inst_17848);var state_17920__$1 = (function (){var statearr_17980 = state_17920;(statearr_17980[(32)] = inst_17906);
return statearr_17980;
})();if(inst_17907)
{var statearr_17981_18047 = state_17920__$1;(statearr_17981_18047[(1)] = (42));
} else
{var statearr_17982_18048 = state_17920__$1;(statearr_17982_18048[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (16)))
{var inst_17817 = (state_17920[(7)]);var inst_17819 = cljs.core.chunked_seq_QMARK_.call(null,inst_17817);var state_17920__$1 = state_17920;if(inst_17819)
{var statearr_17986_18049 = state_17920__$1;(statearr_17986_18049[(1)] = (19));
} else
{var statearr_17987_18050 = state_17920__$1;(statearr_17987_18050[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (38)))
{var inst_17899 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17988_18051 = state_17920__$1;(statearr_17988_18051[(2)] = inst_17899);
(statearr_17988_18051[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (30)))
{var inst_17858 = (state_17920[(18)]);var inst_17856 = (state_17920[(20)]);var inst_17857 = (state_17920[(9)]);var inst_17859 = (state_17920[(10)]);var inst_17873 = (state_17920[(2)]);var inst_17874 = (inst_17859 + (1));var tmp17983 = inst_17858;var tmp17984 = inst_17856;var tmp17985 = inst_17857;var inst_17856__$1 = tmp17984;var inst_17857__$1 = tmp17985;var inst_17858__$1 = tmp17983;var inst_17859__$1 = inst_17874;var state_17920__$1 = (function (){var statearr_17989 = state_17920;(statearr_17989[(18)] = inst_17858__$1);
(statearr_17989[(20)] = inst_17856__$1);
(statearr_17989[(9)] = inst_17857__$1);
(statearr_17989[(10)] = inst_17859__$1);
(statearr_17989[(33)] = inst_17873);
return statearr_17989;
})();var statearr_17990_18052 = state_17920__$1;(statearr_17990_18052[(2)] = null);
(statearr_17990_18052[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (10)))
{var inst_17800 = (state_17920[(13)]);var inst_17798 = (state_17920[(15)]);var inst_17806 = cljs.core._nth.call(null,inst_17798,inst_17800);var inst_17807 = cljs.core.nth.call(null,inst_17806,(0),null);var inst_17808 = cljs.core.nth.call(null,inst_17806,(1),null);var state_17920__$1 = (function (){var statearr_17991 = state_17920;(statearr_17991[(28)] = inst_17807);
return statearr_17991;
})();if(cljs.core.truth_(inst_17808))
{var statearr_17992_18053 = state_17920__$1;(statearr_17992_18053[(1)] = (13));
} else
{var statearr_17993_18054 = state_17920__$1;(statearr_17993_18054[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (18)))
{var inst_17841 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17994_18055 = state_17920__$1;(statearr_17994_18055[(2)] = inst_17841);
(statearr_17994_18055[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (42)))
{var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(45),dchan);
} else
{if((state_val_17921 === (37)))
{var inst_17877 = (state_17920[(17)]);var inst_17886 = cljs.core.first.call(null,inst_17877);var state_17920__$1 = (function (){var statearr_17995 = state_17920;(statearr_17995[(25)] = inst_17886);
return statearr_17995;
})();var statearr_17996_18056 = state_17920__$1;(statearr_17996_18056[(2)] = null);
(statearr_17996_18056[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (8)))
{var inst_17799 = (state_17920[(12)]);var inst_17800 = (state_17920[(13)]);var inst_17802 = (inst_17800 < inst_17799);var inst_17803 = inst_17802;var state_17920__$1 = state_17920;if(cljs.core.truth_(inst_17803))
{var statearr_17997_18057 = state_17920__$1;(statearr_17997_18057[(1)] = (10));
} else
{var statearr_17998_18058 = state_17920__$1;(statearr_17998_18058[(1)] = (11));
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
});})(c__11472__auto___18006,cs,m,dchan,dctr,done))
;return ((function (switch__11457__auto__,c__11472__auto___18006,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18002[(0)] = state_machine__11458__auto__);
(statearr_18002[(1)] = (1));
return statearr_18002;
});
var state_machine__11458__auto____1 = (function (state_17920){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_17920);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18003){if((e18003 instanceof Object))
{var ex__11461__auto__ = e18003;var statearr_18004_18059 = state_17920;(statearr_18004_18059[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18060 = state_17920;
state_17920 = G__18060;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_17920){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_17920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18006,cs,m,dchan,dctr,done))
})();var state__11474__auto__ = (function (){var statearr_18005 = f__11473__auto__.call(null);(statearr_18005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18006);
return statearr_18005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18006,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18062 = {};return obj18062;
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
;var m = (function (){if(typeof cljs.core.async.t18172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18172 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18173){
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
this.meta18173 = meta18173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18172.cljs$lang$type = true;
cljs.core.async.t18172.cljs$lang$ctorStr = "cljs.core.async/t18172";
cljs.core.async.t18172.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t18172");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18174){var self__ = this;
var _18174__$1 = this;return self__.meta18173;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18174,meta18173__$1){var self__ = this;
var _18174__$1 = this;return (new cljs.core.async.t18172(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18173__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18172 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18172(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18173){return (new cljs.core.async.t18172(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18173));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18172(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11472__auto___18281 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18239){var state_val_18240 = (state_18239[(1)]);if((state_val_18240 === (7)))
{var inst_18188 = (state_18239[(7)]);var inst_18193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18188);var state_18239__$1 = state_18239;var statearr_18241_18282 = state_18239__$1;(statearr_18241_18282[(2)] = inst_18193);
(statearr_18241_18282[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (20)))
{var inst_18203 = (state_18239[(8)]);var state_18239__$1 = state_18239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18239__$1,(23),out,inst_18203);
} else
{if((state_val_18240 === (1)))
{var inst_18178 = (state_18239[(9)]);var inst_18178__$1 = calc_state.call(null);var inst_18179 = cljs.core.seq_QMARK_.call(null,inst_18178__$1);var state_18239__$1 = (function (){var statearr_18242 = state_18239;(statearr_18242[(9)] = inst_18178__$1);
return statearr_18242;
})();if(inst_18179)
{var statearr_18243_18283 = state_18239__$1;(statearr_18243_18283[(1)] = (2));
} else
{var statearr_18244_18284 = state_18239__$1;(statearr_18244_18284[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (4)))
{var inst_18178 = (state_18239[(9)]);var inst_18184 = (state_18239[(2)]);var inst_18185 = cljs.core.get.call(null,inst_18184,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18186 = cljs.core.get.call(null,inst_18184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18187 = cljs.core.get.call(null,inst_18184,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18188 = inst_18178;var state_18239__$1 = (function (){var statearr_18245 = state_18239;(statearr_18245[(10)] = inst_18187);
(statearr_18245[(11)] = inst_18186);
(statearr_18245[(12)] = inst_18185);
(statearr_18245[(7)] = inst_18188);
return statearr_18245;
})();var statearr_18246_18285 = state_18239__$1;(statearr_18246_18285[(2)] = null);
(statearr_18246_18285[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (15)))
{var state_18239__$1 = state_18239;var statearr_18247_18286 = state_18239__$1;(statearr_18247_18286[(2)] = null);
(statearr_18247_18286[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (21)))
{var state_18239__$1 = state_18239;var statearr_18248_18287 = state_18239__$1;(statearr_18248_18287[(2)] = null);
(statearr_18248_18287[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (13)))
{var inst_18235 = (state_18239[(2)]);var state_18239__$1 = state_18239;var statearr_18249_18288 = state_18239__$1;(statearr_18249_18288[(2)] = inst_18235);
(statearr_18249_18288[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (22)))
{var inst_18196 = (state_18239[(13)]);var inst_18232 = (state_18239[(2)]);var inst_18188 = inst_18196;var state_18239__$1 = (function (){var statearr_18250 = state_18239;(statearr_18250[(14)] = inst_18232);
(statearr_18250[(7)] = inst_18188);
return statearr_18250;
})();var statearr_18251_18289 = state_18239__$1;(statearr_18251_18289[(2)] = null);
(statearr_18251_18289[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (6)))
{var inst_18237 = (state_18239[(2)]);var state_18239__$1 = state_18239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18239__$1,inst_18237);
} else
{if((state_val_18240 === (17)))
{var inst_18218 = (state_18239[(15)]);var state_18239__$1 = state_18239;var statearr_18252_18290 = state_18239__$1;(statearr_18252_18290[(2)] = inst_18218);
(statearr_18252_18290[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (3)))
{var inst_18178 = (state_18239[(9)]);var state_18239__$1 = state_18239;var statearr_18253_18291 = state_18239__$1;(statearr_18253_18291[(2)] = inst_18178);
(statearr_18253_18291[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (12)))
{var inst_18204 = (state_18239[(16)]);var inst_18218 = (state_18239[(15)]);var inst_18199 = (state_18239[(17)]);var inst_18218__$1 = inst_18199.call(null,inst_18204);var state_18239__$1 = (function (){var statearr_18254 = state_18239;(statearr_18254[(15)] = inst_18218__$1);
return statearr_18254;
})();if(cljs.core.truth_(inst_18218__$1))
{var statearr_18255_18292 = state_18239__$1;(statearr_18255_18292[(1)] = (17));
} else
{var statearr_18256_18293 = state_18239__$1;(statearr_18256_18293[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (2)))
{var inst_18178 = (state_18239[(9)]);var inst_18181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18178);var state_18239__$1 = state_18239;var statearr_18257_18294 = state_18239__$1;(statearr_18257_18294[(2)] = inst_18181);
(statearr_18257_18294[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (23)))
{var inst_18229 = (state_18239[(2)]);var state_18239__$1 = state_18239;var statearr_18258_18295 = state_18239__$1;(statearr_18258_18295[(2)] = inst_18229);
(statearr_18258_18295[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (19)))
{var inst_18226 = (state_18239[(2)]);var state_18239__$1 = state_18239;if(cljs.core.truth_(inst_18226))
{var statearr_18259_18296 = state_18239__$1;(statearr_18259_18296[(1)] = (20));
} else
{var statearr_18260_18297 = state_18239__$1;(statearr_18260_18297[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (11)))
{var inst_18203 = (state_18239[(8)]);var inst_18209 = (inst_18203 == null);var state_18239__$1 = state_18239;if(cljs.core.truth_(inst_18209))
{var statearr_18261_18298 = state_18239__$1;(statearr_18261_18298[(1)] = (14));
} else
{var statearr_18262_18299 = state_18239__$1;(statearr_18262_18299[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (9)))
{var inst_18196 = (state_18239[(13)]);var inst_18196__$1 = (state_18239[(2)]);var inst_18197 = cljs.core.get.call(null,inst_18196__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18198 = cljs.core.get.call(null,inst_18196__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18199 = cljs.core.get.call(null,inst_18196__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18239__$1 = (function (){var statearr_18263 = state_18239;(statearr_18263[(18)] = inst_18198);
(statearr_18263[(17)] = inst_18199);
(statearr_18263[(13)] = inst_18196__$1);
return statearr_18263;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18239__$1,(10),inst_18197);
} else
{if((state_val_18240 === (5)))
{var inst_18188 = (state_18239[(7)]);var inst_18191 = cljs.core.seq_QMARK_.call(null,inst_18188);var state_18239__$1 = state_18239;if(inst_18191)
{var statearr_18264_18300 = state_18239__$1;(statearr_18264_18300[(1)] = (7));
} else
{var statearr_18265_18301 = state_18239__$1;(statearr_18265_18301[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (14)))
{var inst_18204 = (state_18239[(16)]);var inst_18211 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18204);var state_18239__$1 = state_18239;var statearr_18266_18302 = state_18239__$1;(statearr_18266_18302[(2)] = inst_18211);
(statearr_18266_18302[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (16)))
{var inst_18214 = (state_18239[(2)]);var inst_18215 = calc_state.call(null);var inst_18188 = inst_18215;var state_18239__$1 = (function (){var statearr_18267 = state_18239;(statearr_18267[(19)] = inst_18214);
(statearr_18267[(7)] = inst_18188);
return statearr_18267;
})();var statearr_18268_18303 = state_18239__$1;(statearr_18268_18303[(2)] = null);
(statearr_18268_18303[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (10)))
{var inst_18204 = (state_18239[(16)]);var inst_18203 = (state_18239[(8)]);var inst_18202 = (state_18239[(2)]);var inst_18203__$1 = cljs.core.nth.call(null,inst_18202,(0),null);var inst_18204__$1 = cljs.core.nth.call(null,inst_18202,(1),null);var inst_18205 = (inst_18203__$1 == null);var inst_18206 = cljs.core._EQ_.call(null,inst_18204__$1,change);var inst_18207 = (inst_18205) || (inst_18206);var state_18239__$1 = (function (){var statearr_18269 = state_18239;(statearr_18269[(16)] = inst_18204__$1);
(statearr_18269[(8)] = inst_18203__$1);
return statearr_18269;
})();if(cljs.core.truth_(inst_18207))
{var statearr_18270_18304 = state_18239__$1;(statearr_18270_18304[(1)] = (11));
} else
{var statearr_18271_18305 = state_18239__$1;(statearr_18271_18305[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (18)))
{var inst_18204 = (state_18239[(16)]);var inst_18198 = (state_18239[(18)]);var inst_18199 = (state_18239[(17)]);var inst_18221 = cljs.core.empty_QMARK_.call(null,inst_18199);var inst_18222 = inst_18198.call(null,inst_18204);var inst_18223 = cljs.core.not.call(null,inst_18222);var inst_18224 = (inst_18221) && (inst_18223);var state_18239__$1 = state_18239;var statearr_18272_18306 = state_18239__$1;(statearr_18272_18306[(2)] = inst_18224);
(statearr_18272_18306[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18240 === (8)))
{var inst_18188 = (state_18239[(7)]);var state_18239__$1 = state_18239;var statearr_18273_18307 = state_18239__$1;(statearr_18273_18307[(2)] = inst_18188);
(statearr_18273_18307[(1)] = (9));
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
});})(c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11457__auto__,c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18277[(0)] = state_machine__11458__auto__);
(statearr_18277[(1)] = (1));
return statearr_18277;
});
var state_machine__11458__auto____1 = (function (state_18239){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_18239);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18278){if((e18278 instanceof Object))
{var ex__11461__auto__ = e18278;var statearr_18279_18308 = state_18239;(statearr_18279_18308[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18309 = state_18239;
state_18239 = G__18309;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_18239){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_18239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11474__auto__ = (function (){var statearr_18280 = f__11473__auto__.call(null);(statearr_18280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18281);
return statearr_18280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18281,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18311 = {};return obj18311;
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
return (function (p1__18312_SHARP_){if(cljs.core.truth_(p1__18312_SHARP_.call(null,topic)))
{return p1__18312_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3542__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18437 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18438){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18438 = meta18438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18437.cljs$lang$type = true;
cljs.core.async.t18437.cljs$lang$ctorStr = "cljs.core.async/t18437";
cljs.core.async.t18437.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t18437");
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18437.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18439){var self__ = this;
var _18439__$1 = this;return self__.meta18438;
});})(mults,ensure_mult))
;
cljs.core.async.t18437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18439,meta18438__$1){var self__ = this;
var _18439__$1 = this;return (new cljs.core.async.t18437(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18438__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18437 = ((function (mults,ensure_mult){
return (function __GT_t18437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18438){return (new cljs.core.async.t18437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18438));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18437(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11472__auto___18561 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18561,mults,ensure_mult,p){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18561,mults,ensure_mult,p){
return (function (state_18513){var state_val_18514 = (state_18513[(1)]);if((state_val_18514 === (7)))
{var inst_18509 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18515_18562 = state_18513__$1;(statearr_18515_18562[(2)] = inst_18509);
(statearr_18515_18562[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (20)))
{var state_18513__$1 = state_18513;var statearr_18516_18563 = state_18513__$1;(statearr_18516_18563[(2)] = null);
(statearr_18516_18563[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (1)))
{var state_18513__$1 = state_18513;var statearr_18517_18564 = state_18513__$1;(statearr_18517_18564[(2)] = null);
(statearr_18517_18564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (24)))
{var inst_18492 = (state_18513[(7)]);var inst_18442 = (state_18513[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18513,(23),Object,null,(22));var inst_18499 = cljs.core.async.muxch_STAR_.call(null,inst_18492);var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18513__$1,(25),inst_18499,inst_18442);
} else
{if((state_val_18514 === (4)))
{var inst_18442 = (state_18513[(8)]);var inst_18442__$1 = (state_18513[(2)]);var inst_18443 = (inst_18442__$1 == null);var state_18513__$1 = (function (){var statearr_18518 = state_18513;(statearr_18518[(8)] = inst_18442__$1);
return statearr_18518;
})();if(cljs.core.truth_(inst_18443))
{var statearr_18519_18565 = state_18513__$1;(statearr_18519_18565[(1)] = (5));
} else
{var statearr_18520_18566 = state_18513__$1;(statearr_18520_18566[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (15)))
{var inst_18484 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18521_18567 = state_18513__$1;(statearr_18521_18567[(2)] = inst_18484);
(statearr_18521_18567[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (21)))
{var inst_18506 = (state_18513[(2)]);var state_18513__$1 = (function (){var statearr_18522 = state_18513;(statearr_18522[(9)] = inst_18506);
return statearr_18522;
})();var statearr_18523_18568 = state_18513__$1;(statearr_18523_18568[(2)] = null);
(statearr_18523_18568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (13)))
{var inst_18466 = (state_18513[(10)]);var inst_18468 = cljs.core.chunked_seq_QMARK_.call(null,inst_18466);var state_18513__$1 = state_18513;if(inst_18468)
{var statearr_18524_18569 = state_18513__$1;(statearr_18524_18569[(1)] = (16));
} else
{var statearr_18525_18570 = state_18513__$1;(statearr_18525_18570[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (22)))
{var inst_18503 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18526_18571 = state_18513__$1;(statearr_18526_18571[(2)] = inst_18503);
(statearr_18526_18571[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (6)))
{var inst_18492 = (state_18513[(7)]);var inst_18490 = (state_18513[(11)]);var inst_18442 = (state_18513[(8)]);var inst_18490__$1 = topic_fn.call(null,inst_18442);var inst_18491 = cljs.core.deref.call(null,mults);var inst_18492__$1 = cljs.core.get.call(null,inst_18491,inst_18490__$1);var state_18513__$1 = (function (){var statearr_18527 = state_18513;(statearr_18527[(7)] = inst_18492__$1);
(statearr_18527[(11)] = inst_18490__$1);
return statearr_18527;
})();if(cljs.core.truth_(inst_18492__$1))
{var statearr_18528_18572 = state_18513__$1;(statearr_18528_18572[(1)] = (19));
} else
{var statearr_18529_18573 = state_18513__$1;(statearr_18529_18573[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (25)))
{var inst_18501 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18530_18574 = state_18513__$1;(statearr_18530_18574[(2)] = inst_18501);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (17)))
{var inst_18466 = (state_18513[(10)]);var inst_18475 = cljs.core.first.call(null,inst_18466);var inst_18476 = cljs.core.async.muxch_STAR_.call(null,inst_18475);var inst_18477 = cljs.core.async.close_BANG_.call(null,inst_18476);var inst_18478 = cljs.core.next.call(null,inst_18466);var inst_18452 = inst_18478;var inst_18453 = null;var inst_18454 = (0);var inst_18455 = (0);var state_18513__$1 = (function (){var statearr_18531 = state_18513;(statearr_18531[(12)] = inst_18452);
(statearr_18531[(13)] = inst_18477);
(statearr_18531[(14)] = inst_18453);
(statearr_18531[(15)] = inst_18455);
(statearr_18531[(16)] = inst_18454);
return statearr_18531;
})();var statearr_18532_18575 = state_18513__$1;(statearr_18532_18575[(2)] = null);
(statearr_18532_18575[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (3)))
{var inst_18511 = (state_18513[(2)]);var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18513__$1,inst_18511);
} else
{if((state_val_18514 === (12)))
{var inst_18486 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18533_18576 = state_18513__$1;(statearr_18533_18576[(2)] = inst_18486);
(statearr_18533_18576[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (2)))
{var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18513__$1,(4),ch);
} else
{if((state_val_18514 === (23)))
{var inst_18490 = (state_18513[(11)]);var inst_18494 = (state_18513[(2)]);var inst_18495 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18490);var state_18513__$1 = (function (){var statearr_18534 = state_18513;(statearr_18534[(17)] = inst_18494);
return statearr_18534;
})();var statearr_18535_18577 = state_18513__$1;(statearr_18535_18577[(2)] = inst_18495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (19)))
{var state_18513__$1 = state_18513;var statearr_18536_18578 = state_18513__$1;(statearr_18536_18578[(2)] = null);
(statearr_18536_18578[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (11)))
{var inst_18452 = (state_18513[(12)]);var inst_18466 = (state_18513[(10)]);var inst_18466__$1 = cljs.core.seq.call(null,inst_18452);var state_18513__$1 = (function (){var statearr_18537 = state_18513;(statearr_18537[(10)] = inst_18466__$1);
return statearr_18537;
})();if(inst_18466__$1)
{var statearr_18538_18579 = state_18513__$1;(statearr_18538_18579[(1)] = (13));
} else
{var statearr_18539_18580 = state_18513__$1;(statearr_18539_18580[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (9)))
{var inst_18488 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18540_18581 = state_18513__$1;(statearr_18540_18581[(2)] = inst_18488);
(statearr_18540_18581[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (5)))
{var inst_18449 = cljs.core.deref.call(null,mults);var inst_18450 = cljs.core.vals.call(null,inst_18449);var inst_18451 = cljs.core.seq.call(null,inst_18450);var inst_18452 = inst_18451;var inst_18453 = null;var inst_18454 = (0);var inst_18455 = (0);var state_18513__$1 = (function (){var statearr_18541 = state_18513;(statearr_18541[(12)] = inst_18452);
(statearr_18541[(14)] = inst_18453);
(statearr_18541[(15)] = inst_18455);
(statearr_18541[(16)] = inst_18454);
return statearr_18541;
})();var statearr_18542_18582 = state_18513__$1;(statearr_18542_18582[(2)] = null);
(statearr_18542_18582[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (14)))
{var state_18513__$1 = state_18513;var statearr_18546_18583 = state_18513__$1;(statearr_18546_18583[(2)] = null);
(statearr_18546_18583[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (16)))
{var inst_18466 = (state_18513[(10)]);var inst_18470 = cljs.core.chunk_first.call(null,inst_18466);var inst_18471 = cljs.core.chunk_rest.call(null,inst_18466);var inst_18472 = cljs.core.count.call(null,inst_18470);var inst_18452 = inst_18471;var inst_18453 = inst_18470;var inst_18454 = inst_18472;var inst_18455 = (0);var state_18513__$1 = (function (){var statearr_18547 = state_18513;(statearr_18547[(12)] = inst_18452);
(statearr_18547[(14)] = inst_18453);
(statearr_18547[(15)] = inst_18455);
(statearr_18547[(16)] = inst_18454);
return statearr_18547;
})();var statearr_18548_18584 = state_18513__$1;(statearr_18548_18584[(2)] = null);
(statearr_18548_18584[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (10)))
{var inst_18452 = (state_18513[(12)]);var inst_18453 = (state_18513[(14)]);var inst_18455 = (state_18513[(15)]);var inst_18454 = (state_18513[(16)]);var inst_18460 = cljs.core._nth.call(null,inst_18453,inst_18455);var inst_18461 = cljs.core.async.muxch_STAR_.call(null,inst_18460);var inst_18462 = cljs.core.async.close_BANG_.call(null,inst_18461);var inst_18463 = (inst_18455 + (1));var tmp18543 = inst_18452;var tmp18544 = inst_18453;var tmp18545 = inst_18454;var inst_18452__$1 = tmp18543;var inst_18453__$1 = tmp18544;var inst_18454__$1 = tmp18545;var inst_18455__$1 = inst_18463;var state_18513__$1 = (function (){var statearr_18549 = state_18513;(statearr_18549[(12)] = inst_18452__$1);
(statearr_18549[(18)] = inst_18462);
(statearr_18549[(14)] = inst_18453__$1);
(statearr_18549[(15)] = inst_18455__$1);
(statearr_18549[(16)] = inst_18454__$1);
return statearr_18549;
})();var statearr_18550_18585 = state_18513__$1;(statearr_18550_18585[(2)] = null);
(statearr_18550_18585[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (18)))
{var inst_18481 = (state_18513[(2)]);var state_18513__$1 = state_18513;var statearr_18551_18586 = state_18513__$1;(statearr_18551_18586[(2)] = inst_18481);
(statearr_18551_18586[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18514 === (8)))
{var inst_18455 = (state_18513[(15)]);var inst_18454 = (state_18513[(16)]);var inst_18457 = (inst_18455 < inst_18454);var inst_18458 = inst_18457;var state_18513__$1 = state_18513;if(cljs.core.truth_(inst_18458))
{var statearr_18552_18587 = state_18513__$1;(statearr_18552_18587[(1)] = (10));
} else
{var statearr_18553_18588 = state_18513__$1;(statearr_18553_18588[(1)] = (11));
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
});})(c__11472__auto___18561,mults,ensure_mult,p))
;return ((function (switch__11457__auto__,c__11472__auto___18561,mults,ensure_mult,p){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18557[(0)] = state_machine__11458__auto__);
(statearr_18557[(1)] = (1));
return statearr_18557;
});
var state_machine__11458__auto____1 = (function (state_18513){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_18513);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18558){if((e18558 instanceof Object))
{var ex__11461__auto__ = e18558;var statearr_18559_18589 = state_18513;(statearr_18559_18589[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18590 = state_18513;
state_18513 = G__18590;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18561,mults,ensure_mult,p))
})();var state__11474__auto__ = (function (){var statearr_18560 = f__11473__auto__.call(null);(statearr_18560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18561);
return statearr_18560;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18561,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11472__auto___18727 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18697){var state_val_18698 = (state_18697[(1)]);if((state_val_18698 === (7)))
{var state_18697__$1 = state_18697;var statearr_18699_18728 = state_18697__$1;(statearr_18699_18728[(2)] = null);
(statearr_18699_18728[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (1)))
{var state_18697__$1 = state_18697;var statearr_18700_18729 = state_18697__$1;(statearr_18700_18729[(2)] = null);
(statearr_18700_18729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (4)))
{var inst_18661 = (state_18697[(7)]);var inst_18663 = (inst_18661 < cnt);var state_18697__$1 = state_18697;if(cljs.core.truth_(inst_18663))
{var statearr_18701_18730 = state_18697__$1;(statearr_18701_18730[(1)] = (6));
} else
{var statearr_18702_18731 = state_18697__$1;(statearr_18702_18731[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (15)))
{var inst_18693 = (state_18697[(2)]);var state_18697__$1 = state_18697;var statearr_18703_18732 = state_18697__$1;(statearr_18703_18732[(2)] = inst_18693);
(statearr_18703_18732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (13)))
{var inst_18686 = cljs.core.async.close_BANG_.call(null,out);var state_18697__$1 = state_18697;var statearr_18704_18733 = state_18697__$1;(statearr_18704_18733[(2)] = inst_18686);
(statearr_18704_18733[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (6)))
{var state_18697__$1 = state_18697;var statearr_18705_18734 = state_18697__$1;(statearr_18705_18734[(2)] = null);
(statearr_18705_18734[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (3)))
{var inst_18695 = (state_18697[(2)]);var state_18697__$1 = state_18697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18697__$1,inst_18695);
} else
{if((state_val_18698 === (12)))
{var inst_18683 = (state_18697[(8)]);var inst_18683__$1 = (state_18697[(2)]);var inst_18684 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18683__$1);var state_18697__$1 = (function (){var statearr_18706 = state_18697;(statearr_18706[(8)] = inst_18683__$1);
return statearr_18706;
})();if(cljs.core.truth_(inst_18684))
{var statearr_18707_18735 = state_18697__$1;(statearr_18707_18735[(1)] = (13));
} else
{var statearr_18708_18736 = state_18697__$1;(statearr_18708_18736[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (2)))
{var inst_18660 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18661 = (0);var state_18697__$1 = (function (){var statearr_18709 = state_18697;(statearr_18709[(9)] = inst_18660);
(statearr_18709[(7)] = inst_18661);
return statearr_18709;
})();var statearr_18710_18737 = state_18697__$1;(statearr_18710_18737[(2)] = null);
(statearr_18710_18737[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (11)))
{var inst_18661 = (state_18697[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18697,(10),Object,null,(9));var inst_18670 = chs__$1.call(null,inst_18661);var inst_18671 = done.call(null,inst_18661);var inst_18672 = cljs.core.async.take_BANG_.call(null,inst_18670,inst_18671);var state_18697__$1 = state_18697;var statearr_18711_18738 = state_18697__$1;(statearr_18711_18738[(2)] = inst_18672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18697__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (9)))
{var inst_18661 = (state_18697[(7)]);var inst_18674 = (state_18697[(2)]);var inst_18675 = (inst_18661 + (1));var inst_18661__$1 = inst_18675;var state_18697__$1 = (function (){var statearr_18712 = state_18697;(statearr_18712[(10)] = inst_18674);
(statearr_18712[(7)] = inst_18661__$1);
return statearr_18712;
})();var statearr_18713_18739 = state_18697__$1;(statearr_18713_18739[(2)] = null);
(statearr_18713_18739[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (5)))
{var inst_18681 = (state_18697[(2)]);var state_18697__$1 = (function (){var statearr_18714 = state_18697;(statearr_18714[(11)] = inst_18681);
return statearr_18714;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18697__$1,(12),dchan);
} else
{if((state_val_18698 === (14)))
{var inst_18683 = (state_18697[(8)]);var inst_18688 = cljs.core.apply.call(null,f,inst_18683);var state_18697__$1 = state_18697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18697__$1,(16),out,inst_18688);
} else
{if((state_val_18698 === (16)))
{var inst_18690 = (state_18697[(2)]);var state_18697__$1 = (function (){var statearr_18715 = state_18697;(statearr_18715[(12)] = inst_18690);
return statearr_18715;
})();var statearr_18716_18740 = state_18697__$1;(statearr_18716_18740[(2)] = null);
(statearr_18716_18740[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (10)))
{var inst_18665 = (state_18697[(2)]);var inst_18666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18697__$1 = (function (){var statearr_18717 = state_18697;(statearr_18717[(13)] = inst_18665);
return statearr_18717;
})();var statearr_18718_18741 = state_18697__$1;(statearr_18718_18741[(2)] = inst_18666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18697__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18698 === (8)))
{var inst_18679 = (state_18697[(2)]);var state_18697__$1 = state_18697;var statearr_18719_18742 = state_18697__$1;(statearr_18719_18742[(2)] = inst_18679);
(statearr_18719_18742[(1)] = (5));
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
});})(c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11457__auto__,c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18723[(0)] = state_machine__11458__auto__);
(statearr_18723[(1)] = (1));
return statearr_18723;
});
var state_machine__11458__auto____1 = (function (state_18697){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_18697);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18724){if((e18724 instanceof Object))
{var ex__11461__auto__ = e18724;var statearr_18725_18743 = state_18697;(statearr_18725_18743[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18697);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18744 = state_18697;
state_18697 = G__18744;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_18697){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_18697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11474__auto__ = (function (){var statearr_18726 = f__11473__auto__.call(null);(statearr_18726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18727);
return statearr_18726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18727,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___18852 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18852,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18852,out){
return (function (state_18828){var state_val_18829 = (state_18828[(1)]);if((state_val_18829 === (7)))
{var inst_18807 = (state_18828[(7)]);var inst_18808 = (state_18828[(8)]);var inst_18807__$1 = (state_18828[(2)]);var inst_18808__$1 = cljs.core.nth.call(null,inst_18807__$1,(0),null);var inst_18809 = cljs.core.nth.call(null,inst_18807__$1,(1),null);var inst_18810 = (inst_18808__$1 == null);var state_18828__$1 = (function (){var statearr_18830 = state_18828;(statearr_18830[(7)] = inst_18807__$1);
(statearr_18830[(9)] = inst_18809);
(statearr_18830[(8)] = inst_18808__$1);
return statearr_18830;
})();if(cljs.core.truth_(inst_18810))
{var statearr_18831_18853 = state_18828__$1;(statearr_18831_18853[(1)] = (8));
} else
{var statearr_18832_18854 = state_18828__$1;(statearr_18832_18854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (1)))
{var inst_18799 = cljs.core.vec.call(null,chs);var inst_18800 = inst_18799;var state_18828__$1 = (function (){var statearr_18833 = state_18828;(statearr_18833[(10)] = inst_18800);
return statearr_18833;
})();var statearr_18834_18855 = state_18828__$1;(statearr_18834_18855[(2)] = null);
(statearr_18834_18855[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (4)))
{var inst_18800 = (state_18828[(10)]);var state_18828__$1 = state_18828;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18828__$1,(7),inst_18800);
} else
{if((state_val_18829 === (6)))
{var inst_18824 = (state_18828[(2)]);var state_18828__$1 = state_18828;var statearr_18835_18856 = state_18828__$1;(statearr_18835_18856[(2)] = inst_18824);
(statearr_18835_18856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (3)))
{var inst_18826 = (state_18828[(2)]);var state_18828__$1 = state_18828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18828__$1,inst_18826);
} else
{if((state_val_18829 === (2)))
{var inst_18800 = (state_18828[(10)]);var inst_18802 = cljs.core.count.call(null,inst_18800);var inst_18803 = (inst_18802 > (0));var state_18828__$1 = state_18828;if(cljs.core.truth_(inst_18803))
{var statearr_18837_18857 = state_18828__$1;(statearr_18837_18857[(1)] = (4));
} else
{var statearr_18838_18858 = state_18828__$1;(statearr_18838_18858[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (11)))
{var inst_18800 = (state_18828[(10)]);var inst_18817 = (state_18828[(2)]);var tmp18836 = inst_18800;var inst_18800__$1 = tmp18836;var state_18828__$1 = (function (){var statearr_18839 = state_18828;(statearr_18839[(11)] = inst_18817);
(statearr_18839[(10)] = inst_18800__$1);
return statearr_18839;
})();var statearr_18840_18859 = state_18828__$1;(statearr_18840_18859[(2)] = null);
(statearr_18840_18859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (9)))
{var inst_18808 = (state_18828[(8)]);var state_18828__$1 = state_18828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18828__$1,(11),out,inst_18808);
} else
{if((state_val_18829 === (5)))
{var inst_18822 = cljs.core.async.close_BANG_.call(null,out);var state_18828__$1 = state_18828;var statearr_18841_18860 = state_18828__$1;(statearr_18841_18860[(2)] = inst_18822);
(statearr_18841_18860[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (10)))
{var inst_18820 = (state_18828[(2)]);var state_18828__$1 = state_18828;var statearr_18842_18861 = state_18828__$1;(statearr_18842_18861[(2)] = inst_18820);
(statearr_18842_18861[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18829 === (8)))
{var inst_18800 = (state_18828[(10)]);var inst_18807 = (state_18828[(7)]);var inst_18809 = (state_18828[(9)]);var inst_18808 = (state_18828[(8)]);var inst_18812 = (function (){var c = inst_18809;var v = inst_18808;var vec__18805 = inst_18807;var cs = inst_18800;return ((function (c,v,vec__18805,cs,inst_18800,inst_18807,inst_18809,inst_18808,state_val_18829,c__11472__auto___18852,out){
return (function (p1__18745_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18745_SHARP_);
});
;})(c,v,vec__18805,cs,inst_18800,inst_18807,inst_18809,inst_18808,state_val_18829,c__11472__auto___18852,out))
})();var inst_18813 = cljs.core.filterv.call(null,inst_18812,inst_18800);var inst_18800__$1 = inst_18813;var state_18828__$1 = (function (){var statearr_18843 = state_18828;(statearr_18843[(10)] = inst_18800__$1);
return statearr_18843;
})();var statearr_18844_18862 = state_18828__$1;(statearr_18844_18862[(2)] = null);
(statearr_18844_18862[(1)] = (2));
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
});})(c__11472__auto___18852,out))
;return ((function (switch__11457__auto__,c__11472__auto___18852,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18848 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18848[(0)] = state_machine__11458__auto__);
(statearr_18848[(1)] = (1));
return statearr_18848;
});
var state_machine__11458__auto____1 = (function (state_18828){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_18828);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18849){if((e18849 instanceof Object))
{var ex__11461__auto__ = e18849;var statearr_18850_18863 = state_18828;(statearr_18850_18863[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18828);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18864 = state_18828;
state_18828 = G__18864;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_18828){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_18828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18852,out))
})();var state__11474__auto__ = (function (){var statearr_18851 = f__11473__auto__.call(null);(statearr_18851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18852);
return statearr_18851;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18852,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___18957 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___18957,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___18957,out){
return (function (state_18934){var state_val_18935 = (state_18934[(1)]);if((state_val_18935 === (7)))
{var inst_18916 = (state_18934[(7)]);var inst_18916__$1 = (state_18934[(2)]);var inst_18917 = (inst_18916__$1 == null);var inst_18918 = cljs.core.not.call(null,inst_18917);var state_18934__$1 = (function (){var statearr_18936 = state_18934;(statearr_18936[(7)] = inst_18916__$1);
return statearr_18936;
})();if(inst_18918)
{var statearr_18937_18958 = state_18934__$1;(statearr_18937_18958[(1)] = (8));
} else
{var statearr_18938_18959 = state_18934__$1;(statearr_18938_18959[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (1)))
{var inst_18911 = (0);var state_18934__$1 = (function (){var statearr_18939 = state_18934;(statearr_18939[(8)] = inst_18911);
return statearr_18939;
})();var statearr_18940_18960 = state_18934__$1;(statearr_18940_18960[(2)] = null);
(statearr_18940_18960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (4)))
{var state_18934__$1 = state_18934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18934__$1,(7),ch);
} else
{if((state_val_18935 === (6)))
{var inst_18929 = (state_18934[(2)]);var state_18934__$1 = state_18934;var statearr_18941_18961 = state_18934__$1;(statearr_18941_18961[(2)] = inst_18929);
(statearr_18941_18961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (3)))
{var inst_18931 = (state_18934[(2)]);var inst_18932 = cljs.core.async.close_BANG_.call(null,out);var state_18934__$1 = (function (){var statearr_18942 = state_18934;(statearr_18942[(9)] = inst_18931);
return statearr_18942;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18934__$1,inst_18932);
} else
{if((state_val_18935 === (2)))
{var inst_18911 = (state_18934[(8)]);var inst_18913 = (inst_18911 < n);var state_18934__$1 = state_18934;if(cljs.core.truth_(inst_18913))
{var statearr_18943_18962 = state_18934__$1;(statearr_18943_18962[(1)] = (4));
} else
{var statearr_18944_18963 = state_18934__$1;(statearr_18944_18963[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (11)))
{var inst_18911 = (state_18934[(8)]);var inst_18921 = (state_18934[(2)]);var inst_18922 = (inst_18911 + (1));var inst_18911__$1 = inst_18922;var state_18934__$1 = (function (){var statearr_18945 = state_18934;(statearr_18945[(10)] = inst_18921);
(statearr_18945[(8)] = inst_18911__$1);
return statearr_18945;
})();var statearr_18946_18964 = state_18934__$1;(statearr_18946_18964[(2)] = null);
(statearr_18946_18964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (9)))
{var state_18934__$1 = state_18934;var statearr_18947_18965 = state_18934__$1;(statearr_18947_18965[(2)] = null);
(statearr_18947_18965[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (5)))
{var state_18934__$1 = state_18934;var statearr_18948_18966 = state_18934__$1;(statearr_18948_18966[(2)] = null);
(statearr_18948_18966[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (10)))
{var inst_18926 = (state_18934[(2)]);var state_18934__$1 = state_18934;var statearr_18949_18967 = state_18934__$1;(statearr_18949_18967[(2)] = inst_18926);
(statearr_18949_18967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18935 === (8)))
{var inst_18916 = (state_18934[(7)]);var state_18934__$1 = state_18934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18934__$1,(11),out,inst_18916);
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
});})(c__11472__auto___18957,out))
;return ((function (switch__11457__auto__,c__11472__auto___18957,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_18953 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18953[(0)] = state_machine__11458__auto__);
(statearr_18953[(1)] = (1));
return statearr_18953;
});
var state_machine__11458__auto____1 = (function (state_18934){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_18934);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e18954){if((e18954 instanceof Object))
{var ex__11461__auto__ = e18954;var statearr_18955_18968 = state_18934;(statearr_18955_18968[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18934);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18969 = state_18934;
state_18934 = G__18969;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_18934){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_18934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___18957,out))
})();var state__11474__auto__ = (function (){var statearr_18956 = f__11473__auto__.call(null);(statearr_18956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___18957);
return statearr_18956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___18957,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___19066 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___19066,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___19066,out){
return (function (state_19041){var state_val_19042 = (state_19041[(1)]);if((state_val_19042 === (7)))
{var inst_19036 = (state_19041[(2)]);var state_19041__$1 = state_19041;var statearr_19043_19067 = state_19041__$1;(statearr_19043_19067[(2)] = inst_19036);
(statearr_19043_19067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (1)))
{var inst_19018 = null;var state_19041__$1 = (function (){var statearr_19044 = state_19041;(statearr_19044[(7)] = inst_19018);
return statearr_19044;
})();var statearr_19045_19068 = state_19041__$1;(statearr_19045_19068[(2)] = null);
(statearr_19045_19068[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (4)))
{var inst_19021 = (state_19041[(8)]);var inst_19021__$1 = (state_19041[(2)]);var inst_19022 = (inst_19021__$1 == null);var inst_19023 = cljs.core.not.call(null,inst_19022);var state_19041__$1 = (function (){var statearr_19046 = state_19041;(statearr_19046[(8)] = inst_19021__$1);
return statearr_19046;
})();if(inst_19023)
{var statearr_19047_19069 = state_19041__$1;(statearr_19047_19069[(1)] = (5));
} else
{var statearr_19048_19070 = state_19041__$1;(statearr_19048_19070[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (6)))
{var state_19041__$1 = state_19041;var statearr_19049_19071 = state_19041__$1;(statearr_19049_19071[(2)] = null);
(statearr_19049_19071[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (3)))
{var inst_19038 = (state_19041[(2)]);var inst_19039 = cljs.core.async.close_BANG_.call(null,out);var state_19041__$1 = (function (){var statearr_19050 = state_19041;(statearr_19050[(9)] = inst_19038);
return statearr_19050;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19041__$1,inst_19039);
} else
{if((state_val_19042 === (2)))
{var state_19041__$1 = state_19041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19041__$1,(4),ch);
} else
{if((state_val_19042 === (11)))
{var inst_19021 = (state_19041[(8)]);var inst_19030 = (state_19041[(2)]);var inst_19018 = inst_19021;var state_19041__$1 = (function (){var statearr_19051 = state_19041;(statearr_19051[(7)] = inst_19018);
(statearr_19051[(10)] = inst_19030);
return statearr_19051;
})();var statearr_19052_19072 = state_19041__$1;(statearr_19052_19072[(2)] = null);
(statearr_19052_19072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (9)))
{var inst_19021 = (state_19041[(8)]);var state_19041__$1 = state_19041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19041__$1,(11),out,inst_19021);
} else
{if((state_val_19042 === (5)))
{var inst_19021 = (state_19041[(8)]);var inst_19018 = (state_19041[(7)]);var inst_19025 = cljs.core._EQ_.call(null,inst_19021,inst_19018);var state_19041__$1 = state_19041;if(inst_19025)
{var statearr_19054_19073 = state_19041__$1;(statearr_19054_19073[(1)] = (8));
} else
{var statearr_19055_19074 = state_19041__$1;(statearr_19055_19074[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (10)))
{var inst_19033 = (state_19041[(2)]);var state_19041__$1 = state_19041;var statearr_19056_19075 = state_19041__$1;(statearr_19056_19075[(2)] = inst_19033);
(statearr_19056_19075[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19042 === (8)))
{var inst_19018 = (state_19041[(7)]);var tmp19053 = inst_19018;var inst_19018__$1 = tmp19053;var state_19041__$1 = (function (){var statearr_19057 = state_19041;(statearr_19057[(7)] = inst_19018__$1);
return statearr_19057;
})();var statearr_19058_19076 = state_19041__$1;(statearr_19058_19076[(2)] = null);
(statearr_19058_19076[(1)] = (2));
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
});})(c__11472__auto___19066,out))
;return ((function (switch__11457__auto__,c__11472__auto___19066,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_19062 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19062[(0)] = state_machine__11458__auto__);
(statearr_19062[(1)] = (1));
return statearr_19062;
});
var state_machine__11458__auto____1 = (function (state_19041){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_19041);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e19063){if((e19063 instanceof Object))
{var ex__11461__auto__ = e19063;var statearr_19064_19077 = state_19041;(statearr_19064_19077[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19078 = state_19041;
state_19041 = G__19078;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_19041){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_19041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___19066,out))
})();var state__11474__auto__ = (function (){var statearr_19065 = f__11473__auto__.call(null);(statearr_19065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___19066);
return statearr_19065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___19066,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___19213 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___19213,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___19213,out){
return (function (state_19183){var state_val_19184 = (state_19183[(1)]);if((state_val_19184 === (7)))
{var inst_19179 = (state_19183[(2)]);var state_19183__$1 = state_19183;var statearr_19185_19214 = state_19183__$1;(statearr_19185_19214[(2)] = inst_19179);
(statearr_19185_19214[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (1)))
{var inst_19146 = (new Array(n));var inst_19147 = inst_19146;var inst_19148 = (0);var state_19183__$1 = (function (){var statearr_19186 = state_19183;(statearr_19186[(7)] = inst_19148);
(statearr_19186[(8)] = inst_19147);
return statearr_19186;
})();var statearr_19187_19215 = state_19183__$1;(statearr_19187_19215[(2)] = null);
(statearr_19187_19215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (4)))
{var inst_19151 = (state_19183[(9)]);var inst_19151__$1 = (state_19183[(2)]);var inst_19152 = (inst_19151__$1 == null);var inst_19153 = cljs.core.not.call(null,inst_19152);var state_19183__$1 = (function (){var statearr_19188 = state_19183;(statearr_19188[(9)] = inst_19151__$1);
return statearr_19188;
})();if(inst_19153)
{var statearr_19189_19216 = state_19183__$1;(statearr_19189_19216[(1)] = (5));
} else
{var statearr_19190_19217 = state_19183__$1;(statearr_19190_19217[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (15)))
{var inst_19173 = (state_19183[(2)]);var state_19183__$1 = state_19183;var statearr_19191_19218 = state_19183__$1;(statearr_19191_19218[(2)] = inst_19173);
(statearr_19191_19218[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (13)))
{var state_19183__$1 = state_19183;var statearr_19192_19219 = state_19183__$1;(statearr_19192_19219[(2)] = null);
(statearr_19192_19219[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (6)))
{var inst_19148 = (state_19183[(7)]);var inst_19169 = (inst_19148 > (0));var state_19183__$1 = state_19183;if(cljs.core.truth_(inst_19169))
{var statearr_19193_19220 = state_19183__$1;(statearr_19193_19220[(1)] = (12));
} else
{var statearr_19194_19221 = state_19183__$1;(statearr_19194_19221[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (3)))
{var inst_19181 = (state_19183[(2)]);var state_19183__$1 = state_19183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19183__$1,inst_19181);
} else
{if((state_val_19184 === (12)))
{var inst_19147 = (state_19183[(8)]);var inst_19171 = cljs.core.vec.call(null,inst_19147);var state_19183__$1 = state_19183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19183__$1,(15),out,inst_19171);
} else
{if((state_val_19184 === (2)))
{var state_19183__$1 = state_19183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19183__$1,(4),ch);
} else
{if((state_val_19184 === (11)))
{var inst_19163 = (state_19183[(2)]);var inst_19164 = (new Array(n));var inst_19147 = inst_19164;var inst_19148 = (0);var state_19183__$1 = (function (){var statearr_19195 = state_19183;(statearr_19195[(7)] = inst_19148);
(statearr_19195[(10)] = inst_19163);
(statearr_19195[(8)] = inst_19147);
return statearr_19195;
})();var statearr_19196_19222 = state_19183__$1;(statearr_19196_19222[(2)] = null);
(statearr_19196_19222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (9)))
{var inst_19147 = (state_19183[(8)]);var inst_19161 = cljs.core.vec.call(null,inst_19147);var state_19183__$1 = state_19183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19183__$1,(11),out,inst_19161);
} else
{if((state_val_19184 === (5)))
{var inst_19148 = (state_19183[(7)]);var inst_19156 = (state_19183[(11)]);var inst_19147 = (state_19183[(8)]);var inst_19151 = (state_19183[(9)]);var inst_19155 = (inst_19147[inst_19148] = inst_19151);var inst_19156__$1 = (inst_19148 + (1));var inst_19157 = (inst_19156__$1 < n);var state_19183__$1 = (function (){var statearr_19197 = state_19183;(statearr_19197[(12)] = inst_19155);
(statearr_19197[(11)] = inst_19156__$1);
return statearr_19197;
})();if(cljs.core.truth_(inst_19157))
{var statearr_19198_19223 = state_19183__$1;(statearr_19198_19223[(1)] = (8));
} else
{var statearr_19199_19224 = state_19183__$1;(statearr_19199_19224[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (14)))
{var inst_19176 = (state_19183[(2)]);var inst_19177 = cljs.core.async.close_BANG_.call(null,out);var state_19183__$1 = (function (){var statearr_19201 = state_19183;(statearr_19201[(13)] = inst_19176);
return statearr_19201;
})();var statearr_19202_19225 = state_19183__$1;(statearr_19202_19225[(2)] = inst_19177);
(statearr_19202_19225[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (10)))
{var inst_19167 = (state_19183[(2)]);var state_19183__$1 = state_19183;var statearr_19203_19226 = state_19183__$1;(statearr_19203_19226[(2)] = inst_19167);
(statearr_19203_19226[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19184 === (8)))
{var inst_19156 = (state_19183[(11)]);var inst_19147 = (state_19183[(8)]);var tmp19200 = inst_19147;var inst_19147__$1 = tmp19200;var inst_19148 = inst_19156;var state_19183__$1 = (function (){var statearr_19204 = state_19183;(statearr_19204[(7)] = inst_19148);
(statearr_19204[(8)] = inst_19147__$1);
return statearr_19204;
})();var statearr_19205_19227 = state_19183__$1;(statearr_19205_19227[(2)] = null);
(statearr_19205_19227[(1)] = (2));
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
});})(c__11472__auto___19213,out))
;return ((function (switch__11457__auto__,c__11472__auto___19213,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_19209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19209[(0)] = state_machine__11458__auto__);
(statearr_19209[(1)] = (1));
return statearr_19209;
});
var state_machine__11458__auto____1 = (function (state_19183){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_19183);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e19210){if((e19210 instanceof Object))
{var ex__11461__auto__ = e19210;var statearr_19211_19228 = state_19183;(statearr_19211_19228[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19183);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19229 = state_19183;
state_19183 = G__19229;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_19183){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_19183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___19213,out))
})();var state__11474__auto__ = (function (){var statearr_19212 = f__11473__auto__.call(null);(statearr_19212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___19213);
return statearr_19212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___19213,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11472__auto___19372 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11472__auto___19372,out){
return (function (){var f__11473__auto__ = (function (){var switch__11457__auto__ = ((function (c__11472__auto___19372,out){
return (function (state_19342){var state_val_19343 = (state_19342[(1)]);if((state_val_19343 === (7)))
{var inst_19338 = (state_19342[(2)]);var state_19342__$1 = state_19342;var statearr_19344_19373 = state_19342__$1;(statearr_19344_19373[(2)] = inst_19338);
(statearr_19344_19373[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (1)))
{var inst_19301 = [];var inst_19302 = inst_19301;var inst_19303 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19342__$1 = (function (){var statearr_19345 = state_19342;(statearr_19345[(7)] = inst_19303);
(statearr_19345[(8)] = inst_19302);
return statearr_19345;
})();var statearr_19346_19374 = state_19342__$1;(statearr_19346_19374[(2)] = null);
(statearr_19346_19374[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (4)))
{var inst_19306 = (state_19342[(9)]);var inst_19306__$1 = (state_19342[(2)]);var inst_19307 = (inst_19306__$1 == null);var inst_19308 = cljs.core.not.call(null,inst_19307);var state_19342__$1 = (function (){var statearr_19347 = state_19342;(statearr_19347[(9)] = inst_19306__$1);
return statearr_19347;
})();if(inst_19308)
{var statearr_19348_19375 = state_19342__$1;(statearr_19348_19375[(1)] = (5));
} else
{var statearr_19349_19376 = state_19342__$1;(statearr_19349_19376[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (15)))
{var inst_19332 = (state_19342[(2)]);var state_19342__$1 = state_19342;var statearr_19350_19377 = state_19342__$1;(statearr_19350_19377[(2)] = inst_19332);
(statearr_19350_19377[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (13)))
{var state_19342__$1 = state_19342;var statearr_19351_19378 = state_19342__$1;(statearr_19351_19378[(2)] = null);
(statearr_19351_19378[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (6)))
{var inst_19302 = (state_19342[(8)]);var inst_19327 = inst_19302.length;var inst_19328 = (inst_19327 > (0));var state_19342__$1 = state_19342;if(cljs.core.truth_(inst_19328))
{var statearr_19352_19379 = state_19342__$1;(statearr_19352_19379[(1)] = (12));
} else
{var statearr_19353_19380 = state_19342__$1;(statearr_19353_19380[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (3)))
{var inst_19340 = (state_19342[(2)]);var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19342__$1,inst_19340);
} else
{if((state_val_19343 === (12)))
{var inst_19302 = (state_19342[(8)]);var inst_19330 = cljs.core.vec.call(null,inst_19302);var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19342__$1,(15),out,inst_19330);
} else
{if((state_val_19343 === (2)))
{var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19342__$1,(4),ch);
} else
{if((state_val_19343 === (11)))
{var inst_19310 = (state_19342[(10)]);var inst_19306 = (state_19342[(9)]);var inst_19320 = (state_19342[(2)]);var inst_19321 = [];var inst_19322 = inst_19321.push(inst_19306);var inst_19302 = inst_19321;var inst_19303 = inst_19310;var state_19342__$1 = (function (){var statearr_19354 = state_19342;(statearr_19354[(7)] = inst_19303);
(statearr_19354[(8)] = inst_19302);
(statearr_19354[(11)] = inst_19322);
(statearr_19354[(12)] = inst_19320);
return statearr_19354;
})();var statearr_19355_19381 = state_19342__$1;(statearr_19355_19381[(2)] = null);
(statearr_19355_19381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (9)))
{var inst_19302 = (state_19342[(8)]);var inst_19318 = cljs.core.vec.call(null,inst_19302);var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19342__$1,(11),out,inst_19318);
} else
{if((state_val_19343 === (5)))
{var inst_19310 = (state_19342[(10)]);var inst_19303 = (state_19342[(7)]);var inst_19306 = (state_19342[(9)]);var inst_19310__$1 = f.call(null,inst_19306);var inst_19311 = cljs.core._EQ_.call(null,inst_19310__$1,inst_19303);var inst_19312 = cljs.core.keyword_identical_QMARK_.call(null,inst_19303,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19313 = (inst_19311) || (inst_19312);var state_19342__$1 = (function (){var statearr_19356 = state_19342;(statearr_19356[(10)] = inst_19310__$1);
return statearr_19356;
})();if(cljs.core.truth_(inst_19313))
{var statearr_19357_19382 = state_19342__$1;(statearr_19357_19382[(1)] = (8));
} else
{var statearr_19358_19383 = state_19342__$1;(statearr_19358_19383[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (14)))
{var inst_19335 = (state_19342[(2)]);var inst_19336 = cljs.core.async.close_BANG_.call(null,out);var state_19342__$1 = (function (){var statearr_19360 = state_19342;(statearr_19360[(13)] = inst_19335);
return statearr_19360;
})();var statearr_19361_19384 = state_19342__$1;(statearr_19361_19384[(2)] = inst_19336);
(statearr_19361_19384[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (10)))
{var inst_19325 = (state_19342[(2)]);var state_19342__$1 = state_19342;var statearr_19362_19385 = state_19342__$1;(statearr_19362_19385[(2)] = inst_19325);
(statearr_19362_19385[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (8)))
{var inst_19310 = (state_19342[(10)]);var inst_19302 = (state_19342[(8)]);var inst_19306 = (state_19342[(9)]);var inst_19315 = inst_19302.push(inst_19306);var tmp19359 = inst_19302;var inst_19302__$1 = tmp19359;var inst_19303 = inst_19310;var state_19342__$1 = (function (){var statearr_19363 = state_19342;(statearr_19363[(7)] = inst_19303);
(statearr_19363[(8)] = inst_19302__$1);
(statearr_19363[(14)] = inst_19315);
return statearr_19363;
})();var statearr_19364_19386 = state_19342__$1;(statearr_19364_19386[(2)] = null);
(statearr_19364_19386[(1)] = (2));
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
});})(c__11472__auto___19372,out))
;return ((function (switch__11457__auto__,c__11472__auto___19372,out){
return (function() {
var state_machine__11458__auto__ = null;
var state_machine__11458__auto____0 = (function (){var statearr_19368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19368[(0)] = state_machine__11458__auto__);
(statearr_19368[(1)] = (1));
return statearr_19368;
});
var state_machine__11458__auto____1 = (function (state_19342){while(true){
var ret_value__11459__auto__ = (function (){try{while(true){
var result__11460__auto__ = switch__11457__auto__.call(null,state_19342);if(cljs.core.keyword_identical_QMARK_.call(null,result__11460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11460__auto__;
}
break;
}
}catch (e19369){if((e19369 instanceof Object))
{var ex__11461__auto__ = e19369;var statearr_19370_19387 = state_19342;(statearr_19370_19387[(5)] = ex__11461__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11459__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19388 = state_19342;
state_19342 = G__19388;
continue;
}
} else
{return ret_value__11459__auto__;
}
break;
}
});
state_machine__11458__auto__ = function(state_19342){
switch(arguments.length){
case 0:
return state_machine__11458__auto____0.call(this);
case 1:
return state_machine__11458__auto____1.call(this,state_19342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11458__auto____0;
state_machine__11458__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11458__auto____1;
return state_machine__11458__auto__;
})()
;})(switch__11457__auto__,c__11472__auto___19372,out))
})();var state__11474__auto__ = (function (){var statearr_19371 = f__11473__auto__.call(null);(statearr_19371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11472__auto___19372);
return statearr_19371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11474__auto__);
});})(c__11472__auto___19372,out))
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