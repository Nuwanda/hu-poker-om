// Compiled by ClojureScript 0.0-2322
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16925 = (function (f,fn_handler,meta16926){
this.f = f;
this.fn_handler = fn_handler;
this.meta16926 = meta16926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16925.cljs$lang$type = true;
cljs.core.async.t16925.cljs$lang$ctorStr = "cljs.core.async/t16925";
cljs.core.async.t16925.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16925");
});
cljs.core.async.t16925.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16925.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16925.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16927){var self__ = this;
var _16927__$1 = this;return self__.meta16926;
});
cljs.core.async.t16925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16927,meta16926__$1){var self__ = this;
var _16927__$1 = this;return (new cljs.core.async.t16925(self__.f,self__.fn_handler,meta16926__$1));
});
cljs.core.async.__GT_t16925 = (function __GT_t16925(f__$1,fn_handler__$1,meta16926){return (new cljs.core.async.t16925(f__$1,fn_handler__$1,meta16926));
});
}
return (new cljs.core.async.t16925(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16929 = buff;if(G__16929)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__16929.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16929.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16929);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16929);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_16930 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16930);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16930,ret){
return (function (){return fn1.call(null,val_16930);
});})(val_16930,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___16931 = n;var x_16932 = (0);while(true){
if((x_16932 < n__4414__auto___16931))
{(a[x_16932] = (0));
{
var G__16933 = (x_16932 + (1));
x_16932 = G__16933;
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
var G__16934 = (i + (1));
i = G__16934;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16938 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16938 = (function (flag,alt_flag,meta16939){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16939 = meta16939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16938.cljs$lang$type = true;
cljs.core.async.t16938.cljs$lang$ctorStr = "cljs.core.async/t16938";
cljs.core.async.t16938.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16938");
});})(flag))
;
cljs.core.async.t16938.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16940){var self__ = this;
var _16940__$1 = this;return self__.meta16939;
});})(flag))
;
cljs.core.async.t16938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16940,meta16939__$1){var self__ = this;
var _16940__$1 = this;return (new cljs.core.async.t16938(self__.flag,self__.alt_flag,meta16939__$1));
});})(flag))
;
cljs.core.async.__GT_t16938 = ((function (flag){
return (function __GT_t16938(flag__$1,alt_flag__$1,meta16939){return (new cljs.core.async.t16938(flag__$1,alt_flag__$1,meta16939));
});})(flag))
;
}
return (new cljs.core.async.t16938(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16944 = (function (cb,flag,alt_handler,meta16945){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16945 = meta16945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16944.cljs$lang$type = true;
cljs.core.async.t16944.cljs$lang$ctorStr = "cljs.core.async/t16944";
cljs.core.async.t16944.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16944");
});
cljs.core.async.t16944.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16944.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16944.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16946){var self__ = this;
var _16946__$1 = this;return self__.meta16945;
});
cljs.core.async.t16944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16946,meta16945__$1){var self__ = this;
var _16946__$1 = this;return (new cljs.core.async.t16944(self__.cb,self__.flag,self__.alt_handler,meta16945__$1));
});
cljs.core.async.__GT_t16944 = (function __GT_t16944(cb__$1,flag__$1,alt_handler__$1,meta16945){return (new cljs.core.async.t16944(cb__$1,flag__$1,alt_handler__$1,meta16945));
});
}
return (new cljs.core.async.t16944(cb,flag,alt_handler,null));
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
return (function (p1__16947_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16947_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16948 = (i + (1));
i = G__16948;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
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
var alts_BANG___delegate = function (ports,p__16949){var map__16951 = p__16949;var map__16951__$1 = ((cljs.core.seq_QMARK_.call(null,map__16951))?cljs.core.apply.call(null,cljs.core.hash_map,map__16951):map__16951);var opts = map__16951__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__16949 = null;if (arguments.length > 1) {
  p__16949 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16949);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16952){
var ports = cljs.core.first(arglist__16952);
var p__16949 = cljs.core.rest(arglist__16952);
return alts_BANG___delegate(ports,p__16949);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16960 = (function (ch,f,map_LT_,meta16961){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16961 = meta16961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16960.cljs$lang$type = true;
cljs.core.async.t16960.cljs$lang$ctorStr = "cljs.core.async/t16960";
cljs.core.async.t16960.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16960");
});
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16963 = (function (fn1,_,meta16961,ch,f,map_LT_,meta16964){
this.fn1 = fn1;
this._ = _;
this.meta16961 = meta16961;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16964 = meta16964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16963.cljs$lang$type = true;
cljs.core.async.t16963.cljs$lang$ctorStr = "cljs.core.async/t16963";
cljs.core.async.t16963.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16963");
});})(___$1))
;
cljs.core.async.t16963.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16963.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16953_SHARP_){return f1.call(null,(((p1__16953_SHARP_ == null))?null:self__.f.call(null,p1__16953_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16965){var self__ = this;
var _16965__$1 = this;return self__.meta16964;
});})(___$1))
;
cljs.core.async.t16963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16965,meta16964__$1){var self__ = this;
var _16965__$1 = this;return (new cljs.core.async.t16963(self__.fn1,self__._,self__.meta16961,self__.ch,self__.f,self__.map_LT_,meta16964__$1));
});})(___$1))
;
cljs.core.async.__GT_t16963 = ((function (___$1){
return (function __GT_t16963(fn1__$1,___$2,meta16961__$1,ch__$2,f__$2,map_LT___$2,meta16964){return (new cljs.core.async.t16963(fn1__$1,___$2,meta16961__$1,ch__$2,f__$2,map_LT___$2,meta16964));
});})(___$1))
;
}
return (new cljs.core.async.t16963(fn1,___$1,self__.meta16961,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16962){var self__ = this;
var _16962__$1 = this;return self__.meta16961;
});
cljs.core.async.t16960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16962,meta16961__$1){var self__ = this;
var _16962__$1 = this;return (new cljs.core.async.t16960(self__.ch,self__.f,self__.map_LT_,meta16961__$1));
});
cljs.core.async.__GT_t16960 = (function __GT_t16960(ch__$1,f__$1,map_LT___$1,meta16961){return (new cljs.core.async.t16960(ch__$1,f__$1,map_LT___$1,meta16961));
});
}
return (new cljs.core.async.t16960(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16969 = (function (ch,f,map_GT_,meta16970){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16970 = meta16970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16969.cljs$lang$type = true;
cljs.core.async.t16969.cljs$lang$ctorStr = "cljs.core.async/t16969";
cljs.core.async.t16969.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16969");
});
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16971){var self__ = this;
var _16971__$1 = this;return self__.meta16970;
});
cljs.core.async.t16969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16971,meta16970__$1){var self__ = this;
var _16971__$1 = this;return (new cljs.core.async.t16969(self__.ch,self__.f,self__.map_GT_,meta16970__$1));
});
cljs.core.async.__GT_t16969 = (function __GT_t16969(ch__$1,f__$1,map_GT___$1,meta16970){return (new cljs.core.async.t16969(ch__$1,f__$1,map_GT___$1,meta16970));
});
}
return (new cljs.core.async.t16969(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16975 = (function (ch,p,filter_GT_,meta16976){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16976 = meta16976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16975.cljs$lang$type = true;
cljs.core.async.t16975.cljs$lang$ctorStr = "cljs.core.async/t16975";
cljs.core.async.t16975.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16975");
});
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16977){var self__ = this;
var _16977__$1 = this;return self__.meta16976;
});
cljs.core.async.t16975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16977,meta16976__$1){var self__ = this;
var _16977__$1 = this;return (new cljs.core.async.t16975(self__.ch,self__.p,self__.filter_GT_,meta16976__$1));
});
cljs.core.async.__GT_t16975 = (function __GT_t16975(ch__$1,p__$1,filter_GT___$1,meta16976){return (new cljs.core.async.t16975(ch__$1,p__$1,filter_GT___$1,meta16976));
});
}
return (new cljs.core.async.t16975(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___17060 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___17060,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___17060,out){
return (function (state_17039){var state_val_17040 = (state_17039[(1)]);if((state_val_17040 === (7)))
{var inst_17035 = (state_17039[(2)]);var state_17039__$1 = state_17039;var statearr_17041_17061 = state_17039__$1;(statearr_17041_17061[(2)] = inst_17035);
(statearr_17041_17061[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (1)))
{var state_17039__$1 = state_17039;var statearr_17042_17062 = state_17039__$1;(statearr_17042_17062[(2)] = null);
(statearr_17042_17062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (4)))
{var inst_17021 = (state_17039[(7)]);var inst_17021__$1 = (state_17039[(2)]);var inst_17022 = (inst_17021__$1 == null);var state_17039__$1 = (function (){var statearr_17043 = state_17039;(statearr_17043[(7)] = inst_17021__$1);
return statearr_17043;
})();if(cljs.core.truth_(inst_17022))
{var statearr_17044_17063 = state_17039__$1;(statearr_17044_17063[(1)] = (5));
} else
{var statearr_17045_17064 = state_17039__$1;(statearr_17045_17064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (6)))
{var inst_17021 = (state_17039[(7)]);var inst_17026 = p.call(null,inst_17021);var state_17039__$1 = state_17039;if(cljs.core.truth_(inst_17026))
{var statearr_17046_17065 = state_17039__$1;(statearr_17046_17065[(1)] = (8));
} else
{var statearr_17047_17066 = state_17039__$1;(statearr_17047_17066[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (3)))
{var inst_17037 = (state_17039[(2)]);var state_17039__$1 = state_17039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17039__$1,inst_17037);
} else
{if((state_val_17040 === (2)))
{var state_17039__$1 = state_17039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17039__$1,(4),ch);
} else
{if((state_val_17040 === (11)))
{var inst_17029 = (state_17039[(2)]);var state_17039__$1 = state_17039;var statearr_17048_17067 = state_17039__$1;(statearr_17048_17067[(2)] = inst_17029);
(statearr_17048_17067[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (9)))
{var state_17039__$1 = state_17039;var statearr_17049_17068 = state_17039__$1;(statearr_17049_17068[(2)] = null);
(statearr_17049_17068[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (5)))
{var inst_17024 = cljs.core.async.close_BANG_.call(null,out);var state_17039__$1 = state_17039;var statearr_17050_17069 = state_17039__$1;(statearr_17050_17069[(2)] = inst_17024);
(statearr_17050_17069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (10)))
{var inst_17032 = (state_17039[(2)]);var state_17039__$1 = (function (){var statearr_17051 = state_17039;(statearr_17051[(8)] = inst_17032);
return statearr_17051;
})();var statearr_17052_17070 = state_17039__$1;(statearr_17052_17070[(2)] = null);
(statearr_17052_17070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17040 === (8)))
{var inst_17021 = (state_17039[(7)]);var state_17039__$1 = state_17039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17039__$1,(11),out,inst_17021);
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
});})(c__11505__auto___17060,out))
;return ((function (switch__11490__auto__,c__11505__auto___17060,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17056 = [null,null,null,null,null,null,null,null,null];(statearr_17056[(0)] = state_machine__11491__auto__);
(statearr_17056[(1)] = (1));
return statearr_17056;
});
var state_machine__11491__auto____1 = (function (state_17039){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17039);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object))
{var ex__11494__auto__ = e17057;var statearr_17058_17071 = state_17039;(statearr_17058_17071[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17072 = state_17039;
state_17039 = G__17072;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17039){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___17060,out))
})();var state__11507__auto__ = (function (){var statearr_17059 = f__11506__auto__.call(null);(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___17060);
return statearr_17059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___17060,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__){
return (function (state_17224){var state_val_17225 = (state_17224[(1)]);if((state_val_17225 === (7)))
{var inst_17220 = (state_17224[(2)]);var state_17224__$1 = state_17224;var statearr_17226_17263 = state_17224__$1;(statearr_17226_17263[(2)] = inst_17220);
(statearr_17226_17263[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (20)))
{var inst_17195 = (state_17224[(7)]);var inst_17206 = (state_17224[(2)]);var inst_17207 = cljs.core.next.call(null,inst_17195);var inst_17181 = inst_17207;var inst_17182 = null;var inst_17183 = (0);var inst_17184 = (0);var state_17224__$1 = (function (){var statearr_17227 = state_17224;(statearr_17227[(8)] = inst_17206);
(statearr_17227[(9)] = inst_17183);
(statearr_17227[(10)] = inst_17181);
(statearr_17227[(11)] = inst_17184);
(statearr_17227[(12)] = inst_17182);
return statearr_17227;
})();var statearr_17228_17264 = state_17224__$1;(statearr_17228_17264[(2)] = null);
(statearr_17228_17264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (1)))
{var state_17224__$1 = state_17224;var statearr_17229_17265 = state_17224__$1;(statearr_17229_17265[(2)] = null);
(statearr_17229_17265[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (4)))
{var inst_17170 = (state_17224[(13)]);var inst_17170__$1 = (state_17224[(2)]);var inst_17171 = (inst_17170__$1 == null);var state_17224__$1 = (function (){var statearr_17233 = state_17224;(statearr_17233[(13)] = inst_17170__$1);
return statearr_17233;
})();if(cljs.core.truth_(inst_17171))
{var statearr_17234_17266 = state_17224__$1;(statearr_17234_17266[(1)] = (5));
} else
{var statearr_17235_17267 = state_17224__$1;(statearr_17235_17267[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (15)))
{var state_17224__$1 = state_17224;var statearr_17236_17268 = state_17224__$1;(statearr_17236_17268[(2)] = null);
(statearr_17236_17268[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (13)))
{var inst_17183 = (state_17224[(9)]);var inst_17181 = (state_17224[(10)]);var inst_17184 = (state_17224[(11)]);var inst_17182 = (state_17224[(12)]);var inst_17191 = (state_17224[(2)]);var inst_17192 = (inst_17184 + (1));var tmp17230 = inst_17183;var tmp17231 = inst_17181;var tmp17232 = inst_17182;var inst_17181__$1 = tmp17231;var inst_17182__$1 = tmp17232;var inst_17183__$1 = tmp17230;var inst_17184__$1 = inst_17192;var state_17224__$1 = (function (){var statearr_17237 = state_17224;(statearr_17237[(9)] = inst_17183__$1);
(statearr_17237[(14)] = inst_17191);
(statearr_17237[(10)] = inst_17181__$1);
(statearr_17237[(11)] = inst_17184__$1);
(statearr_17237[(12)] = inst_17182__$1);
return statearr_17237;
})();var statearr_17238_17269 = state_17224__$1;(statearr_17238_17269[(2)] = null);
(statearr_17238_17269[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (6)))
{var inst_17170 = (state_17224[(13)]);var inst_17175 = f.call(null,inst_17170);var inst_17180 = cljs.core.seq.call(null,inst_17175);var inst_17181 = inst_17180;var inst_17182 = null;var inst_17183 = (0);var inst_17184 = (0);var state_17224__$1 = (function (){var statearr_17239 = state_17224;(statearr_17239[(9)] = inst_17183);
(statearr_17239[(10)] = inst_17181);
(statearr_17239[(11)] = inst_17184);
(statearr_17239[(12)] = inst_17182);
return statearr_17239;
})();var statearr_17240_17270 = state_17224__$1;(statearr_17240_17270[(2)] = null);
(statearr_17240_17270[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (17)))
{var inst_17195 = (state_17224[(7)]);var inst_17199 = cljs.core.chunk_first.call(null,inst_17195);var inst_17200 = cljs.core.chunk_rest.call(null,inst_17195);var inst_17201 = cljs.core.count.call(null,inst_17199);var inst_17181 = inst_17200;var inst_17182 = inst_17199;var inst_17183 = inst_17201;var inst_17184 = (0);var state_17224__$1 = (function (){var statearr_17241 = state_17224;(statearr_17241[(9)] = inst_17183);
(statearr_17241[(10)] = inst_17181);
(statearr_17241[(11)] = inst_17184);
(statearr_17241[(12)] = inst_17182);
return statearr_17241;
})();var statearr_17242_17271 = state_17224__$1;(statearr_17242_17271[(2)] = null);
(statearr_17242_17271[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (3)))
{var inst_17222 = (state_17224[(2)]);var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17224__$1,inst_17222);
} else
{if((state_val_17225 === (12)))
{var inst_17215 = (state_17224[(2)]);var state_17224__$1 = state_17224;var statearr_17243_17272 = state_17224__$1;(statearr_17243_17272[(2)] = inst_17215);
(statearr_17243_17272[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (2)))
{var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17224__$1,(4),in$);
} else
{if((state_val_17225 === (19)))
{var inst_17210 = (state_17224[(2)]);var state_17224__$1 = state_17224;var statearr_17244_17273 = state_17224__$1;(statearr_17244_17273[(2)] = inst_17210);
(statearr_17244_17273[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (11)))
{var inst_17195 = (state_17224[(7)]);var inst_17181 = (state_17224[(10)]);var inst_17195__$1 = cljs.core.seq.call(null,inst_17181);var state_17224__$1 = (function (){var statearr_17245 = state_17224;(statearr_17245[(7)] = inst_17195__$1);
return statearr_17245;
})();if(inst_17195__$1)
{var statearr_17246_17274 = state_17224__$1;(statearr_17246_17274[(1)] = (14));
} else
{var statearr_17247_17275 = state_17224__$1;(statearr_17247_17275[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (9)))
{var inst_17217 = (state_17224[(2)]);var state_17224__$1 = (function (){var statearr_17248 = state_17224;(statearr_17248[(15)] = inst_17217);
return statearr_17248;
})();var statearr_17249_17276 = state_17224__$1;(statearr_17249_17276[(2)] = null);
(statearr_17249_17276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (5)))
{var inst_17173 = cljs.core.async.close_BANG_.call(null,out);var state_17224__$1 = state_17224;var statearr_17250_17277 = state_17224__$1;(statearr_17250_17277[(2)] = inst_17173);
(statearr_17250_17277[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (14)))
{var inst_17195 = (state_17224[(7)]);var inst_17197 = cljs.core.chunked_seq_QMARK_.call(null,inst_17195);var state_17224__$1 = state_17224;if(inst_17197)
{var statearr_17251_17278 = state_17224__$1;(statearr_17251_17278[(1)] = (17));
} else
{var statearr_17252_17279 = state_17224__$1;(statearr_17252_17279[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (16)))
{var inst_17213 = (state_17224[(2)]);var state_17224__$1 = state_17224;var statearr_17253_17280 = state_17224__$1;(statearr_17253_17280[(2)] = inst_17213);
(statearr_17253_17280[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17225 === (10)))
{var inst_17184 = (state_17224[(11)]);var inst_17182 = (state_17224[(12)]);var inst_17189 = cljs.core._nth.call(null,inst_17182,inst_17184);var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17224__$1,(13),out,inst_17189);
} else
{if((state_val_17225 === (18)))
{var inst_17195 = (state_17224[(7)]);var inst_17204 = cljs.core.first.call(null,inst_17195);var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17224__$1,(20),out,inst_17204);
} else
{if((state_val_17225 === (8)))
{var inst_17183 = (state_17224[(9)]);var inst_17184 = (state_17224[(11)]);var inst_17186 = (inst_17184 < inst_17183);var inst_17187 = inst_17186;var state_17224__$1 = state_17224;if(cljs.core.truth_(inst_17187))
{var statearr_17254_17281 = state_17224__$1;(statearr_17254_17281[(1)] = (10));
} else
{var statearr_17255_17282 = state_17224__$1;(statearr_17255_17282[(1)] = (11));
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
});})(c__11505__auto__))
;return ((function (switch__11490__auto__,c__11505__auto__){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17259[(0)] = state_machine__11491__auto__);
(statearr_17259[(1)] = (1));
return statearr_17259;
});
var state_machine__11491__auto____1 = (function (state_17224){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17224);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17260){if((e17260 instanceof Object))
{var ex__11494__auto__ = e17260;var statearr_17261_17283 = state_17224;(statearr_17261_17283[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17260;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17284 = state_17224;
state_17224 = G__17284;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17224){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__))
})();var state__11507__auto__ = (function (){var statearr_17262 = f__11506__auto__.call(null);(statearr_17262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_17262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__))
);
return c__11505__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__11505__auto___17365 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___17365){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___17365){
return (function (state_17344){var state_val_17345 = (state_17344[(1)]);if((state_val_17345 === (7)))
{var inst_17340 = (state_17344[(2)]);var state_17344__$1 = state_17344;var statearr_17346_17366 = state_17344__$1;(statearr_17346_17366[(2)] = inst_17340);
(statearr_17346_17366[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (1)))
{var state_17344__$1 = state_17344;var statearr_17347_17367 = state_17344__$1;(statearr_17347_17367[(2)] = null);
(statearr_17347_17367[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (4)))
{var inst_17327 = (state_17344[(7)]);var inst_17327__$1 = (state_17344[(2)]);var inst_17328 = (inst_17327__$1 == null);var state_17344__$1 = (function (){var statearr_17348 = state_17344;(statearr_17348[(7)] = inst_17327__$1);
return statearr_17348;
})();if(cljs.core.truth_(inst_17328))
{var statearr_17349_17368 = state_17344__$1;(statearr_17349_17368[(1)] = (5));
} else
{var statearr_17350_17369 = state_17344__$1;(statearr_17350_17369[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (6)))
{var inst_17327 = (state_17344[(7)]);var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17344__$1,(11),to,inst_17327);
} else
{if((state_val_17345 === (3)))
{var inst_17342 = (state_17344[(2)]);var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17344__$1,inst_17342);
} else
{if((state_val_17345 === (2)))
{var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17344__$1,(4),from);
} else
{if((state_val_17345 === (11)))
{var inst_17337 = (state_17344[(2)]);var state_17344__$1 = (function (){var statearr_17351 = state_17344;(statearr_17351[(8)] = inst_17337);
return statearr_17351;
})();var statearr_17352_17370 = state_17344__$1;(statearr_17352_17370[(2)] = null);
(statearr_17352_17370[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (9)))
{var state_17344__$1 = state_17344;var statearr_17353_17371 = state_17344__$1;(statearr_17353_17371[(2)] = null);
(statearr_17353_17371[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (5)))
{var state_17344__$1 = state_17344;if(cljs.core.truth_(close_QMARK_))
{var statearr_17354_17372 = state_17344__$1;(statearr_17354_17372[(1)] = (8));
} else
{var statearr_17355_17373 = state_17344__$1;(statearr_17355_17373[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (10)))
{var inst_17334 = (state_17344[(2)]);var state_17344__$1 = state_17344;var statearr_17356_17374 = state_17344__$1;(statearr_17356_17374[(2)] = inst_17334);
(statearr_17356_17374[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (8)))
{var inst_17331 = cljs.core.async.close_BANG_.call(null,to);var state_17344__$1 = state_17344;var statearr_17357_17375 = state_17344__$1;(statearr_17357_17375[(2)] = inst_17331);
(statearr_17357_17375[(1)] = (10));
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
});})(c__11505__auto___17365))
;return ((function (switch__11490__auto__,c__11505__auto___17365){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17361 = [null,null,null,null,null,null,null,null,null];(statearr_17361[(0)] = state_machine__11491__auto__);
(statearr_17361[(1)] = (1));
return statearr_17361;
});
var state_machine__11491__auto____1 = (function (state_17344){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17344);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17362){if((e17362 instanceof Object))
{var ex__11494__auto__ = e17362;var statearr_17363_17376 = state_17344;(statearr_17363_17376[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17362;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17377 = state_17344;
state_17344 = G__17377;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17344){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___17365))
})();var state__11507__auto__ = (function (){var statearr_17364 = f__11506__auto__.call(null);(statearr_17364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___17365);
return statearr_17364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___17365))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__11505__auto___17464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___17464,tc,fc){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___17464,tc,fc){
return (function (state_17442){var state_val_17443 = (state_17442[(1)]);if((state_val_17443 === (7)))
{var inst_17438 = (state_17442[(2)]);var state_17442__$1 = state_17442;var statearr_17444_17465 = state_17442__$1;(statearr_17444_17465[(2)] = inst_17438);
(statearr_17444_17465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (1)))
{var state_17442__$1 = state_17442;var statearr_17445_17466 = state_17442__$1;(statearr_17445_17466[(2)] = null);
(statearr_17445_17466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (4)))
{var inst_17423 = (state_17442[(7)]);var inst_17423__$1 = (state_17442[(2)]);var inst_17424 = (inst_17423__$1 == null);var state_17442__$1 = (function (){var statearr_17446 = state_17442;(statearr_17446[(7)] = inst_17423__$1);
return statearr_17446;
})();if(cljs.core.truth_(inst_17424))
{var statearr_17447_17467 = state_17442__$1;(statearr_17447_17467[(1)] = (5));
} else
{var statearr_17448_17468 = state_17442__$1;(statearr_17448_17468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (6)))
{var inst_17423 = (state_17442[(7)]);var inst_17429 = p.call(null,inst_17423);var state_17442__$1 = state_17442;if(cljs.core.truth_(inst_17429))
{var statearr_17449_17469 = state_17442__$1;(statearr_17449_17469[(1)] = (9));
} else
{var statearr_17450_17470 = state_17442__$1;(statearr_17450_17470[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (3)))
{var inst_17440 = (state_17442[(2)]);var state_17442__$1 = state_17442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17442__$1,inst_17440);
} else
{if((state_val_17443 === (2)))
{var state_17442__$1 = state_17442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17442__$1,(4),ch);
} else
{if((state_val_17443 === (11)))
{var inst_17423 = (state_17442[(7)]);var inst_17433 = (state_17442[(2)]);var state_17442__$1 = state_17442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17442__$1,(8),inst_17433,inst_17423);
} else
{if((state_val_17443 === (9)))
{var state_17442__$1 = state_17442;var statearr_17451_17471 = state_17442__$1;(statearr_17451_17471[(2)] = tc);
(statearr_17451_17471[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (5)))
{var inst_17426 = cljs.core.async.close_BANG_.call(null,tc);var inst_17427 = cljs.core.async.close_BANG_.call(null,fc);var state_17442__$1 = (function (){var statearr_17452 = state_17442;(statearr_17452[(8)] = inst_17426);
return statearr_17452;
})();var statearr_17453_17472 = state_17442__$1;(statearr_17453_17472[(2)] = inst_17427);
(statearr_17453_17472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (10)))
{var state_17442__$1 = state_17442;var statearr_17454_17473 = state_17442__$1;(statearr_17454_17473[(2)] = fc);
(statearr_17454_17473[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17443 === (8)))
{var inst_17435 = (state_17442[(2)]);var state_17442__$1 = (function (){var statearr_17455 = state_17442;(statearr_17455[(9)] = inst_17435);
return statearr_17455;
})();var statearr_17456_17474 = state_17442__$1;(statearr_17456_17474[(2)] = null);
(statearr_17456_17474[(1)] = (2));
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
});})(c__11505__auto___17464,tc,fc))
;return ((function (switch__11490__auto__,c__11505__auto___17464,tc,fc){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17460 = [null,null,null,null,null,null,null,null,null,null];(statearr_17460[(0)] = state_machine__11491__auto__);
(statearr_17460[(1)] = (1));
return statearr_17460;
});
var state_machine__11491__auto____1 = (function (state_17442){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17442);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17461){if((e17461 instanceof Object))
{var ex__11494__auto__ = e17461;var statearr_17462_17475 = state_17442;(statearr_17462_17475[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17442);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17476 = state_17442;
state_17442 = G__17476;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17442){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___17464,tc,fc))
})();var state__11507__auto__ = (function (){var statearr_17463 = f__11506__auto__.call(null);(statearr_17463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___17464);
return statearr_17463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___17464,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__){
return (function (state_17523){var state_val_17524 = (state_17523[(1)]);if((state_val_17524 === (7)))
{var inst_17519 = (state_17523[(2)]);var state_17523__$1 = state_17523;var statearr_17525_17541 = state_17523__$1;(statearr_17525_17541[(2)] = inst_17519);
(statearr_17525_17541[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (6)))
{var inst_17509 = (state_17523[(7)]);var inst_17512 = (state_17523[(8)]);var inst_17516 = f.call(null,inst_17509,inst_17512);var inst_17509__$1 = inst_17516;var state_17523__$1 = (function (){var statearr_17526 = state_17523;(statearr_17526[(7)] = inst_17509__$1);
return statearr_17526;
})();var statearr_17527_17542 = state_17523__$1;(statearr_17527_17542[(2)] = null);
(statearr_17527_17542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (5)))
{var inst_17509 = (state_17523[(7)]);var state_17523__$1 = state_17523;var statearr_17528_17543 = state_17523__$1;(statearr_17528_17543[(2)] = inst_17509);
(statearr_17528_17543[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (4)))
{var inst_17512 = (state_17523[(8)]);var inst_17512__$1 = (state_17523[(2)]);var inst_17513 = (inst_17512__$1 == null);var state_17523__$1 = (function (){var statearr_17529 = state_17523;(statearr_17529[(8)] = inst_17512__$1);
return statearr_17529;
})();if(cljs.core.truth_(inst_17513))
{var statearr_17530_17544 = state_17523__$1;(statearr_17530_17544[(1)] = (5));
} else
{var statearr_17531_17545 = state_17523__$1;(statearr_17531_17545[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17524 === (3)))
{var inst_17521 = (state_17523[(2)]);var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17523__$1,inst_17521);
} else
{if((state_val_17524 === (2)))
{var state_17523__$1 = state_17523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17523__$1,(4),ch);
} else
{if((state_val_17524 === (1)))
{var inst_17509 = init;var state_17523__$1 = (function (){var statearr_17532 = state_17523;(statearr_17532[(7)] = inst_17509);
return statearr_17532;
})();var statearr_17533_17546 = state_17523__$1;(statearr_17533_17546[(2)] = null);
(statearr_17533_17546[(1)] = (2));
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
});})(c__11505__auto__))
;return ((function (switch__11490__auto__,c__11505__auto__){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17537 = [null,null,null,null,null,null,null,null,null];(statearr_17537[(0)] = state_machine__11491__auto__);
(statearr_17537[(1)] = (1));
return statearr_17537;
});
var state_machine__11491__auto____1 = (function (state_17523){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17523);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17538){if((e17538 instanceof Object))
{var ex__11494__auto__ = e17538;var statearr_17539_17547 = state_17523;(statearr_17539_17547[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17523);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17538;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17548 = state_17523;
state_17523 = G__17548;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__))
})();var state__11507__auto__ = (function (){var statearr_17540 = f__11506__auto__.call(null);(statearr_17540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_17540;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__))
);
return c__11505__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11505__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto__){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto__){
return (function (state_17610){var state_val_17611 = (state_17610[(1)]);if((state_val_17611 === (7)))
{var inst_17591 = (state_17610[(7)]);var inst_17596 = (state_17610[(2)]);var inst_17597 = cljs.core.next.call(null,inst_17591);var inst_17591__$1 = inst_17597;var state_17610__$1 = (function (){var statearr_17612 = state_17610;(statearr_17612[(8)] = inst_17596);
(statearr_17612[(7)] = inst_17591__$1);
return statearr_17612;
})();var statearr_17613_17631 = state_17610__$1;(statearr_17613_17631[(2)] = null);
(statearr_17613_17631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (1)))
{var inst_17590 = cljs.core.seq.call(null,coll);var inst_17591 = inst_17590;var state_17610__$1 = (function (){var statearr_17614 = state_17610;(statearr_17614[(7)] = inst_17591);
return statearr_17614;
})();var statearr_17615_17632 = state_17610__$1;(statearr_17615_17632[(2)] = null);
(statearr_17615_17632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (4)))
{var inst_17591 = (state_17610[(7)]);var inst_17594 = cljs.core.first.call(null,inst_17591);var state_17610__$1 = state_17610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17610__$1,(7),ch,inst_17594);
} else
{if((state_val_17611 === (6)))
{var inst_17606 = (state_17610[(2)]);var state_17610__$1 = state_17610;var statearr_17616_17633 = state_17610__$1;(statearr_17616_17633[(2)] = inst_17606);
(statearr_17616_17633[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (3)))
{var inst_17608 = (state_17610[(2)]);var state_17610__$1 = state_17610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17610__$1,inst_17608);
} else
{if((state_val_17611 === (2)))
{var inst_17591 = (state_17610[(7)]);var state_17610__$1 = state_17610;if(cljs.core.truth_(inst_17591))
{var statearr_17617_17634 = state_17610__$1;(statearr_17617_17634[(1)] = (4));
} else
{var statearr_17618_17635 = state_17610__$1;(statearr_17618_17635[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (9)))
{var state_17610__$1 = state_17610;var statearr_17619_17636 = state_17610__$1;(statearr_17619_17636[(2)] = null);
(statearr_17619_17636[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (5)))
{var state_17610__$1 = state_17610;if(cljs.core.truth_(close_QMARK_))
{var statearr_17620_17637 = state_17610__$1;(statearr_17620_17637[(1)] = (8));
} else
{var statearr_17621_17638 = state_17610__$1;(statearr_17621_17638[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (10)))
{var inst_17604 = (state_17610[(2)]);var state_17610__$1 = state_17610;var statearr_17622_17639 = state_17610__$1;(statearr_17622_17639[(2)] = inst_17604);
(statearr_17622_17639[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17611 === (8)))
{var inst_17601 = cljs.core.async.close_BANG_.call(null,ch);var state_17610__$1 = state_17610;var statearr_17623_17640 = state_17610__$1;(statearr_17623_17640[(2)] = inst_17601);
(statearr_17623_17640[(1)] = (10));
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
});})(c__11505__auto__))
;return ((function (switch__11490__auto__,c__11505__auto__){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_17627 = [null,null,null,null,null,null,null,null,null];(statearr_17627[(0)] = state_machine__11491__auto__);
(statearr_17627[(1)] = (1));
return statearr_17627;
});
var state_machine__11491__auto____1 = (function (state_17610){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_17610);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e17628){if((e17628 instanceof Object))
{var ex__11494__auto__ = e17628;var statearr_17629_17641 = state_17610;(statearr_17629_17641[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17610);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17628;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17642 = state_17610;
state_17610 = G__17642;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_17610){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_17610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto__))
})();var state__11507__auto__ = (function (){var statearr_17630 = f__11506__auto__.call(null);(statearr_17630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto__);
return statearr_17630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto__))
);
return c__11505__auto__;
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
cljs.core.async.Mux = (function (){var obj17644 = {};return obj17644;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17646 = {};return obj17646;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17870 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17870 = (function (cs,ch,mult,meta17871){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17871 = meta17871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17870.cljs$lang$type = true;
cljs.core.async.t17870.cljs$lang$ctorStr = "cljs.core.async/t17870";
cljs.core.async.t17870.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17870");
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17870.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17872){var self__ = this;
var _17872__$1 = this;return self__.meta17871;
});})(cs))
;
cljs.core.async.t17870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17872,meta17871__$1){var self__ = this;
var _17872__$1 = this;return (new cljs.core.async.t17870(self__.cs,self__.ch,self__.mult,meta17871__$1));
});})(cs))
;
cljs.core.async.__GT_t17870 = ((function (cs){
return (function __GT_t17870(cs__$1,ch__$1,mult__$1,meta17871){return (new cljs.core.async.t17870(cs__$1,ch__$1,mult__$1,meta17871));
});})(cs))
;
}
return (new cljs.core.async.t17870(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11505__auto___18093 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___18093,cs,m,dchan,dctr,done){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___18093,cs,m,dchan,dctr,done){
return (function (state_18007){var state_val_18008 = (state_18007[(1)]);if((state_val_18008 === (7)))
{var inst_18003 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18009_18094 = state_18007__$1;(statearr_18009_18094[(2)] = inst_18003);
(statearr_18009_18094[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (20)))
{var inst_17904 = (state_18007[(7)]);var inst_17914 = cljs.core.first.call(null,inst_17904);var inst_17915 = cljs.core.nth.call(null,inst_17914,(0),null);var inst_17916 = cljs.core.nth.call(null,inst_17914,(1),null);var state_18007__$1 = (function (){var statearr_18010 = state_18007;(statearr_18010[(8)] = inst_17915);
return statearr_18010;
})();if(cljs.core.truth_(inst_17916))
{var statearr_18011_18095 = state_18007__$1;(statearr_18011_18095[(1)] = (22));
} else
{var statearr_18012_18096 = state_18007__$1;(statearr_18012_18096[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (27)))
{var inst_17946 = (state_18007[(9)]);var inst_17944 = (state_18007[(10)]);var inst_17951 = cljs.core._nth.call(null,inst_17944,inst_17946);var state_18007__$1 = (function (){var statearr_18013 = state_18007;(statearr_18013[(11)] = inst_17951);
return statearr_18013;
})();var statearr_18014_18097 = state_18007__$1;(statearr_18014_18097[(2)] = null);
(statearr_18014_18097[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (1)))
{var state_18007__$1 = state_18007;var statearr_18015_18098 = state_18007__$1;(statearr_18015_18098[(2)] = null);
(statearr_18015_18098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (24)))
{var inst_17904 = (state_18007[(7)]);var inst_17921 = (state_18007[(2)]);var inst_17922 = cljs.core.next.call(null,inst_17904);var inst_17884 = inst_17922;var inst_17885 = null;var inst_17886 = (0);var inst_17887 = (0);var state_18007__$1 = (function (){var statearr_18016 = state_18007;(statearr_18016[(12)] = inst_17921);
(statearr_18016[(13)] = inst_17886);
(statearr_18016[(14)] = inst_17884);
(statearr_18016[(15)] = inst_17885);
(statearr_18016[(16)] = inst_17887);
return statearr_18016;
})();var statearr_18017_18099 = state_18007__$1;(statearr_18017_18099[(2)] = null);
(statearr_18017_18099[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (39)))
{var inst_17964 = (state_18007[(17)]);var inst_17982 = (state_18007[(2)]);var inst_17983 = cljs.core.next.call(null,inst_17964);var inst_17943 = inst_17983;var inst_17944 = null;var inst_17945 = (0);var inst_17946 = (0);var state_18007__$1 = (function (){var statearr_18021 = state_18007;(statearr_18021[(18)] = inst_17945);
(statearr_18021[(9)] = inst_17946);
(statearr_18021[(19)] = inst_17943);
(statearr_18021[(20)] = inst_17982);
(statearr_18021[(10)] = inst_17944);
return statearr_18021;
})();var statearr_18022_18100 = state_18007__$1;(statearr_18022_18100[(2)] = null);
(statearr_18022_18100[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (4)))
{var inst_17875 = (state_18007[(21)]);var inst_17875__$1 = (state_18007[(2)]);var inst_17876 = (inst_17875__$1 == null);var state_18007__$1 = (function (){var statearr_18023 = state_18007;(statearr_18023[(21)] = inst_17875__$1);
return statearr_18023;
})();if(cljs.core.truth_(inst_17876))
{var statearr_18024_18101 = state_18007__$1;(statearr_18024_18101[(1)] = (5));
} else
{var statearr_18025_18102 = state_18007__$1;(statearr_18025_18102[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (15)))
{var inst_17886 = (state_18007[(13)]);var inst_17884 = (state_18007[(14)]);var inst_17885 = (state_18007[(15)]);var inst_17887 = (state_18007[(16)]);var inst_17900 = (state_18007[(2)]);var inst_17901 = (inst_17887 + (1));var tmp18018 = inst_17886;var tmp18019 = inst_17884;var tmp18020 = inst_17885;var inst_17884__$1 = tmp18019;var inst_17885__$1 = tmp18020;var inst_17886__$1 = tmp18018;var inst_17887__$1 = inst_17901;var state_18007__$1 = (function (){var statearr_18026 = state_18007;(statearr_18026[(22)] = inst_17900);
(statearr_18026[(13)] = inst_17886__$1);
(statearr_18026[(14)] = inst_17884__$1);
(statearr_18026[(15)] = inst_17885__$1);
(statearr_18026[(16)] = inst_17887__$1);
return statearr_18026;
})();var statearr_18027_18103 = state_18007__$1;(statearr_18027_18103[(2)] = null);
(statearr_18027_18103[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (21)))
{var inst_17925 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18028_18104 = state_18007__$1;(statearr_18028_18104[(2)] = inst_17925);
(statearr_18028_18104[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (31)))
{var inst_17951 = (state_18007[(11)]);var inst_17952 = (state_18007[(2)]);var inst_17953 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17954 = cljs.core.async.untap_STAR_.call(null,m,inst_17951);var state_18007__$1 = (function (){var statearr_18029 = state_18007;(statearr_18029[(23)] = inst_17953);
(statearr_18029[(24)] = inst_17952);
return statearr_18029;
})();var statearr_18030_18105 = state_18007__$1;(statearr_18030_18105[(2)] = inst_17954);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (32)))
{var inst_17875 = (state_18007[(21)]);var inst_17951 = (state_18007[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18007,(31),Object,null,(30));var inst_17958 = cljs.core.async.put_BANG_.call(null,inst_17951,inst_17875,done);var state_18007__$1 = state_18007;var statearr_18031_18106 = state_18007__$1;(statearr_18031_18106[(2)] = inst_17958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (40)))
{var inst_17973 = (state_18007[(25)]);var inst_17974 = (state_18007[(2)]);var inst_17975 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17976 = cljs.core.async.untap_STAR_.call(null,m,inst_17973);var state_18007__$1 = (function (){var statearr_18032 = state_18007;(statearr_18032[(26)] = inst_17974);
(statearr_18032[(27)] = inst_17975);
return statearr_18032;
})();var statearr_18033_18107 = state_18007__$1;(statearr_18033_18107[(2)] = inst_17976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (33)))
{var inst_17964 = (state_18007[(17)]);var inst_17966 = cljs.core.chunked_seq_QMARK_.call(null,inst_17964);var state_18007__$1 = state_18007;if(inst_17966)
{var statearr_18034_18108 = state_18007__$1;(statearr_18034_18108[(1)] = (36));
} else
{var statearr_18035_18109 = state_18007__$1;(statearr_18035_18109[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (13)))
{var inst_17894 = (state_18007[(28)]);var inst_17897 = cljs.core.async.close_BANG_.call(null,inst_17894);var state_18007__$1 = state_18007;var statearr_18036_18110 = state_18007__$1;(statearr_18036_18110[(2)] = inst_17897);
(statearr_18036_18110[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (22)))
{var inst_17915 = (state_18007[(8)]);var inst_17918 = cljs.core.async.close_BANG_.call(null,inst_17915);var state_18007__$1 = state_18007;var statearr_18037_18111 = state_18007__$1;(statearr_18037_18111[(2)] = inst_17918);
(statearr_18037_18111[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (36)))
{var inst_17964 = (state_18007[(17)]);var inst_17968 = cljs.core.chunk_first.call(null,inst_17964);var inst_17969 = cljs.core.chunk_rest.call(null,inst_17964);var inst_17970 = cljs.core.count.call(null,inst_17968);var inst_17943 = inst_17969;var inst_17944 = inst_17968;var inst_17945 = inst_17970;var inst_17946 = (0);var state_18007__$1 = (function (){var statearr_18038 = state_18007;(statearr_18038[(18)] = inst_17945);
(statearr_18038[(9)] = inst_17946);
(statearr_18038[(19)] = inst_17943);
(statearr_18038[(10)] = inst_17944);
return statearr_18038;
})();var statearr_18039_18112 = state_18007__$1;(statearr_18039_18112[(2)] = null);
(statearr_18039_18112[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (41)))
{var inst_17875 = (state_18007[(21)]);var inst_17973 = (state_18007[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18007,(40),Object,null,(39));var inst_17980 = cljs.core.async.put_BANG_.call(null,inst_17973,inst_17875,done);var state_18007__$1 = state_18007;var statearr_18040_18113 = state_18007__$1;(statearr_18040_18113[(2)] = inst_17980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (43)))
{var state_18007__$1 = state_18007;var statearr_18041_18114 = state_18007__$1;(statearr_18041_18114[(2)] = null);
(statearr_18041_18114[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (29)))
{var inst_17991 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18042_18115 = state_18007__$1;(statearr_18042_18115[(2)] = inst_17991);
(statearr_18042_18115[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (44)))
{var inst_18000 = (state_18007[(2)]);var state_18007__$1 = (function (){var statearr_18043 = state_18007;(statearr_18043[(29)] = inst_18000);
return statearr_18043;
})();var statearr_18044_18116 = state_18007__$1;(statearr_18044_18116[(2)] = null);
(statearr_18044_18116[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (6)))
{var inst_17935 = (state_18007[(30)]);var inst_17934 = cljs.core.deref.call(null,cs);var inst_17935__$1 = cljs.core.keys.call(null,inst_17934);var inst_17936 = cljs.core.count.call(null,inst_17935__$1);var inst_17937 = cljs.core.reset_BANG_.call(null,dctr,inst_17936);var inst_17942 = cljs.core.seq.call(null,inst_17935__$1);var inst_17943 = inst_17942;var inst_17944 = null;var inst_17945 = (0);var inst_17946 = (0);var state_18007__$1 = (function (){var statearr_18045 = state_18007;(statearr_18045[(31)] = inst_17937);
(statearr_18045[(18)] = inst_17945);
(statearr_18045[(9)] = inst_17946);
(statearr_18045[(19)] = inst_17943);
(statearr_18045[(30)] = inst_17935__$1);
(statearr_18045[(10)] = inst_17944);
return statearr_18045;
})();var statearr_18046_18117 = state_18007__$1;(statearr_18046_18117[(2)] = null);
(statearr_18046_18117[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (28)))
{var inst_17943 = (state_18007[(19)]);var inst_17964 = (state_18007[(17)]);var inst_17964__$1 = cljs.core.seq.call(null,inst_17943);var state_18007__$1 = (function (){var statearr_18047 = state_18007;(statearr_18047[(17)] = inst_17964__$1);
return statearr_18047;
})();if(inst_17964__$1)
{var statearr_18048_18118 = state_18007__$1;(statearr_18048_18118[(1)] = (33));
} else
{var statearr_18049_18119 = state_18007__$1;(statearr_18049_18119[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (25)))
{var inst_17945 = (state_18007[(18)]);var inst_17946 = (state_18007[(9)]);var inst_17948 = (inst_17946 < inst_17945);var inst_17949 = inst_17948;var state_18007__$1 = state_18007;if(cljs.core.truth_(inst_17949))
{var statearr_18050_18120 = state_18007__$1;(statearr_18050_18120[(1)] = (27));
} else
{var statearr_18051_18121 = state_18007__$1;(statearr_18051_18121[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (34)))
{var state_18007__$1 = state_18007;var statearr_18052_18122 = state_18007__$1;(statearr_18052_18122[(2)] = null);
(statearr_18052_18122[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (17)))
{var state_18007__$1 = state_18007;var statearr_18053_18123 = state_18007__$1;(statearr_18053_18123[(2)] = null);
(statearr_18053_18123[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (3)))
{var inst_18005 = (state_18007[(2)]);var state_18007__$1 = state_18007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18007__$1,inst_18005);
} else
{if((state_val_18008 === (12)))
{var inst_17930 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18054_18124 = state_18007__$1;(statearr_18054_18124[(2)] = inst_17930);
(statearr_18054_18124[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (2)))
{var state_18007__$1 = state_18007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(4),ch);
} else
{if((state_val_18008 === (23)))
{var state_18007__$1 = state_18007;var statearr_18055_18125 = state_18007__$1;(statearr_18055_18125[(2)] = null);
(statearr_18055_18125[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (35)))
{var inst_17989 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18056_18126 = state_18007__$1;(statearr_18056_18126[(2)] = inst_17989);
(statearr_18056_18126[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (19)))
{var inst_17904 = (state_18007[(7)]);var inst_17908 = cljs.core.chunk_first.call(null,inst_17904);var inst_17909 = cljs.core.chunk_rest.call(null,inst_17904);var inst_17910 = cljs.core.count.call(null,inst_17908);var inst_17884 = inst_17909;var inst_17885 = inst_17908;var inst_17886 = inst_17910;var inst_17887 = (0);var state_18007__$1 = (function (){var statearr_18057 = state_18007;(statearr_18057[(13)] = inst_17886);
(statearr_18057[(14)] = inst_17884);
(statearr_18057[(15)] = inst_17885);
(statearr_18057[(16)] = inst_17887);
return statearr_18057;
})();var statearr_18058_18127 = state_18007__$1;(statearr_18058_18127[(2)] = null);
(statearr_18058_18127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (11)))
{var inst_17884 = (state_18007[(14)]);var inst_17904 = (state_18007[(7)]);var inst_17904__$1 = cljs.core.seq.call(null,inst_17884);var state_18007__$1 = (function (){var statearr_18059 = state_18007;(statearr_18059[(7)] = inst_17904__$1);
return statearr_18059;
})();if(inst_17904__$1)
{var statearr_18060_18128 = state_18007__$1;(statearr_18060_18128[(1)] = (16));
} else
{var statearr_18061_18129 = state_18007__$1;(statearr_18061_18129[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (9)))
{var inst_17932 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18062_18130 = state_18007__$1;(statearr_18062_18130[(2)] = inst_17932);
(statearr_18062_18130[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (5)))
{var inst_17882 = cljs.core.deref.call(null,cs);var inst_17883 = cljs.core.seq.call(null,inst_17882);var inst_17884 = inst_17883;var inst_17885 = null;var inst_17886 = (0);var inst_17887 = (0);var state_18007__$1 = (function (){var statearr_18063 = state_18007;(statearr_18063[(13)] = inst_17886);
(statearr_18063[(14)] = inst_17884);
(statearr_18063[(15)] = inst_17885);
(statearr_18063[(16)] = inst_17887);
return statearr_18063;
})();var statearr_18064_18131 = state_18007__$1;(statearr_18064_18131[(2)] = null);
(statearr_18064_18131[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (14)))
{var state_18007__$1 = state_18007;var statearr_18065_18132 = state_18007__$1;(statearr_18065_18132[(2)] = null);
(statearr_18065_18132[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (45)))
{var inst_17997 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18066_18133 = state_18007__$1;(statearr_18066_18133[(2)] = inst_17997);
(statearr_18066_18133[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (26)))
{var inst_17935 = (state_18007[(30)]);var inst_17993 = (state_18007[(2)]);var inst_17994 = cljs.core.seq.call(null,inst_17935);var state_18007__$1 = (function (){var statearr_18067 = state_18007;(statearr_18067[(32)] = inst_17993);
return statearr_18067;
})();if(inst_17994)
{var statearr_18068_18134 = state_18007__$1;(statearr_18068_18134[(1)] = (42));
} else
{var statearr_18069_18135 = state_18007__$1;(statearr_18069_18135[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (16)))
{var inst_17904 = (state_18007[(7)]);var inst_17906 = cljs.core.chunked_seq_QMARK_.call(null,inst_17904);var state_18007__$1 = state_18007;if(inst_17906)
{var statearr_18073_18136 = state_18007__$1;(statearr_18073_18136[(1)] = (19));
} else
{var statearr_18074_18137 = state_18007__$1;(statearr_18074_18137[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (38)))
{var inst_17986 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18075_18138 = state_18007__$1;(statearr_18075_18138[(2)] = inst_17986);
(statearr_18075_18138[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (30)))
{var inst_17945 = (state_18007[(18)]);var inst_17946 = (state_18007[(9)]);var inst_17943 = (state_18007[(19)]);var inst_17944 = (state_18007[(10)]);var inst_17960 = (state_18007[(2)]);var inst_17961 = (inst_17946 + (1));var tmp18070 = inst_17945;var tmp18071 = inst_17943;var tmp18072 = inst_17944;var inst_17943__$1 = tmp18071;var inst_17944__$1 = tmp18072;var inst_17945__$1 = tmp18070;var inst_17946__$1 = inst_17961;var state_18007__$1 = (function (){var statearr_18076 = state_18007;(statearr_18076[(18)] = inst_17945__$1);
(statearr_18076[(9)] = inst_17946__$1);
(statearr_18076[(19)] = inst_17943__$1);
(statearr_18076[(10)] = inst_17944__$1);
(statearr_18076[(33)] = inst_17960);
return statearr_18076;
})();var statearr_18077_18139 = state_18007__$1;(statearr_18077_18139[(2)] = null);
(statearr_18077_18139[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (10)))
{var inst_17885 = (state_18007[(15)]);var inst_17887 = (state_18007[(16)]);var inst_17893 = cljs.core._nth.call(null,inst_17885,inst_17887);var inst_17894 = cljs.core.nth.call(null,inst_17893,(0),null);var inst_17895 = cljs.core.nth.call(null,inst_17893,(1),null);var state_18007__$1 = (function (){var statearr_18078 = state_18007;(statearr_18078[(28)] = inst_17894);
return statearr_18078;
})();if(cljs.core.truth_(inst_17895))
{var statearr_18079_18140 = state_18007__$1;(statearr_18079_18140[(1)] = (13));
} else
{var statearr_18080_18141 = state_18007__$1;(statearr_18080_18141[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (18)))
{var inst_17928 = (state_18007[(2)]);var state_18007__$1 = state_18007;var statearr_18081_18142 = state_18007__$1;(statearr_18081_18142[(2)] = inst_17928);
(statearr_18081_18142[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (42)))
{var state_18007__$1 = state_18007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18007__$1,(45),dchan);
} else
{if((state_val_18008 === (37)))
{var inst_17964 = (state_18007[(17)]);var inst_17973 = cljs.core.first.call(null,inst_17964);var state_18007__$1 = (function (){var statearr_18082 = state_18007;(statearr_18082[(25)] = inst_17973);
return statearr_18082;
})();var statearr_18083_18143 = state_18007__$1;(statearr_18083_18143[(2)] = null);
(statearr_18083_18143[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18008 === (8)))
{var inst_17886 = (state_18007[(13)]);var inst_17887 = (state_18007[(16)]);var inst_17889 = (inst_17887 < inst_17886);var inst_17890 = inst_17889;var state_18007__$1 = state_18007;if(cljs.core.truth_(inst_17890))
{var statearr_18084_18144 = state_18007__$1;(statearr_18084_18144[(1)] = (10));
} else
{var statearr_18085_18145 = state_18007__$1;(statearr_18085_18145[(1)] = (11));
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
});})(c__11505__auto___18093,cs,m,dchan,dctr,done))
;return ((function (switch__11490__auto__,c__11505__auto___18093,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_18089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18089[(0)] = state_machine__11491__auto__);
(statearr_18089[(1)] = (1));
return statearr_18089;
});
var state_machine__11491__auto____1 = (function (state_18007){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_18007);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e18090){if((e18090 instanceof Object))
{var ex__11494__auto__ = e18090;var statearr_18091_18146 = state_18007;(statearr_18091_18146[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18090;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18147 = state_18007;
state_18007 = G__18147;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_18007){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_18007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___18093,cs,m,dchan,dctr,done))
})();var state__11507__auto__ = (function (){var statearr_18092 = f__11506__auto__.call(null);(statearr_18092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___18093);
return statearr_18092;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___18093,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18149 = {};return obj18149;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t18259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18259 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18260){
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
this.meta18260 = meta18260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18259.cljs$lang$type = true;
cljs.core.async.t18259.cljs$lang$ctorStr = "cljs.core.async/t18259";
cljs.core.async.t18259.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18259");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18261){var self__ = this;
var _18261__$1 = this;return self__.meta18260;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18261,meta18260__$1){var self__ = this;
var _18261__$1 = this;return (new cljs.core.async.t18259(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18260__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18259 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18259(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18260){return (new cljs.core.async.t18259(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18260));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18259(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11505__auto___18368 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18326){var state_val_18327 = (state_18326[(1)]);if((state_val_18327 === (7)))
{var inst_18275 = (state_18326[(7)]);var inst_18280 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18275);var state_18326__$1 = state_18326;var statearr_18328_18369 = state_18326__$1;(statearr_18328_18369[(2)] = inst_18280);
(statearr_18328_18369[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (20)))
{var inst_18290 = (state_18326[(8)]);var state_18326__$1 = state_18326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18326__$1,(23),out,inst_18290);
} else
{if((state_val_18327 === (1)))
{var inst_18265 = (state_18326[(9)]);var inst_18265__$1 = calc_state.call(null);var inst_18266 = cljs.core.seq_QMARK_.call(null,inst_18265__$1);var state_18326__$1 = (function (){var statearr_18329 = state_18326;(statearr_18329[(9)] = inst_18265__$1);
return statearr_18329;
})();if(inst_18266)
{var statearr_18330_18370 = state_18326__$1;(statearr_18330_18370[(1)] = (2));
} else
{var statearr_18331_18371 = state_18326__$1;(statearr_18331_18371[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (4)))
{var inst_18265 = (state_18326[(9)]);var inst_18271 = (state_18326[(2)]);var inst_18272 = cljs.core.get.call(null,inst_18271,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18273 = cljs.core.get.call(null,inst_18271,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18274 = cljs.core.get.call(null,inst_18271,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18275 = inst_18265;var state_18326__$1 = (function (){var statearr_18332 = state_18326;(statearr_18332[(10)] = inst_18272);
(statearr_18332[(11)] = inst_18273);
(statearr_18332[(12)] = inst_18274);
(statearr_18332[(7)] = inst_18275);
return statearr_18332;
})();var statearr_18333_18372 = state_18326__$1;(statearr_18333_18372[(2)] = null);
(statearr_18333_18372[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (15)))
{var state_18326__$1 = state_18326;var statearr_18334_18373 = state_18326__$1;(statearr_18334_18373[(2)] = null);
(statearr_18334_18373[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (21)))
{var state_18326__$1 = state_18326;var statearr_18335_18374 = state_18326__$1;(statearr_18335_18374[(2)] = null);
(statearr_18335_18374[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (13)))
{var inst_18322 = (state_18326[(2)]);var state_18326__$1 = state_18326;var statearr_18336_18375 = state_18326__$1;(statearr_18336_18375[(2)] = inst_18322);
(statearr_18336_18375[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (22)))
{var inst_18283 = (state_18326[(13)]);var inst_18319 = (state_18326[(2)]);var inst_18275 = inst_18283;var state_18326__$1 = (function (){var statearr_18337 = state_18326;(statearr_18337[(7)] = inst_18275);
(statearr_18337[(14)] = inst_18319);
return statearr_18337;
})();var statearr_18338_18376 = state_18326__$1;(statearr_18338_18376[(2)] = null);
(statearr_18338_18376[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (6)))
{var inst_18324 = (state_18326[(2)]);var state_18326__$1 = state_18326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18326__$1,inst_18324);
} else
{if((state_val_18327 === (17)))
{var inst_18305 = (state_18326[(15)]);var state_18326__$1 = state_18326;var statearr_18339_18377 = state_18326__$1;(statearr_18339_18377[(2)] = inst_18305);
(statearr_18339_18377[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (3)))
{var inst_18265 = (state_18326[(9)]);var state_18326__$1 = state_18326;var statearr_18340_18378 = state_18326__$1;(statearr_18340_18378[(2)] = inst_18265);
(statearr_18340_18378[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (12)))
{var inst_18286 = (state_18326[(16)]);var inst_18305 = (state_18326[(15)]);var inst_18291 = (state_18326[(17)]);var inst_18305__$1 = inst_18286.call(null,inst_18291);var state_18326__$1 = (function (){var statearr_18341 = state_18326;(statearr_18341[(15)] = inst_18305__$1);
return statearr_18341;
})();if(cljs.core.truth_(inst_18305__$1))
{var statearr_18342_18379 = state_18326__$1;(statearr_18342_18379[(1)] = (17));
} else
{var statearr_18343_18380 = state_18326__$1;(statearr_18343_18380[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (2)))
{var inst_18265 = (state_18326[(9)]);var inst_18268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18265);var state_18326__$1 = state_18326;var statearr_18344_18381 = state_18326__$1;(statearr_18344_18381[(2)] = inst_18268);
(statearr_18344_18381[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (23)))
{var inst_18316 = (state_18326[(2)]);var state_18326__$1 = state_18326;var statearr_18345_18382 = state_18326__$1;(statearr_18345_18382[(2)] = inst_18316);
(statearr_18345_18382[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (19)))
{var inst_18313 = (state_18326[(2)]);var state_18326__$1 = state_18326;if(cljs.core.truth_(inst_18313))
{var statearr_18346_18383 = state_18326__$1;(statearr_18346_18383[(1)] = (20));
} else
{var statearr_18347_18384 = state_18326__$1;(statearr_18347_18384[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (11)))
{var inst_18290 = (state_18326[(8)]);var inst_18296 = (inst_18290 == null);var state_18326__$1 = state_18326;if(cljs.core.truth_(inst_18296))
{var statearr_18348_18385 = state_18326__$1;(statearr_18348_18385[(1)] = (14));
} else
{var statearr_18349_18386 = state_18326__$1;(statearr_18349_18386[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (9)))
{var inst_18283 = (state_18326[(13)]);var inst_18283__$1 = (state_18326[(2)]);var inst_18284 = cljs.core.get.call(null,inst_18283__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18285 = cljs.core.get.call(null,inst_18283__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18286 = cljs.core.get.call(null,inst_18283__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18326__$1 = (function (){var statearr_18350 = state_18326;(statearr_18350[(16)] = inst_18286);
(statearr_18350[(13)] = inst_18283__$1);
(statearr_18350[(18)] = inst_18285);
return statearr_18350;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18326__$1,(10),inst_18284);
} else
{if((state_val_18327 === (5)))
{var inst_18275 = (state_18326[(7)]);var inst_18278 = cljs.core.seq_QMARK_.call(null,inst_18275);var state_18326__$1 = state_18326;if(inst_18278)
{var statearr_18351_18387 = state_18326__$1;(statearr_18351_18387[(1)] = (7));
} else
{var statearr_18352_18388 = state_18326__$1;(statearr_18352_18388[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (14)))
{var inst_18291 = (state_18326[(17)]);var inst_18298 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18291);var state_18326__$1 = state_18326;var statearr_18353_18389 = state_18326__$1;(statearr_18353_18389[(2)] = inst_18298);
(statearr_18353_18389[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (16)))
{var inst_18301 = (state_18326[(2)]);var inst_18302 = calc_state.call(null);var inst_18275 = inst_18302;var state_18326__$1 = (function (){var statearr_18354 = state_18326;(statearr_18354[(19)] = inst_18301);
(statearr_18354[(7)] = inst_18275);
return statearr_18354;
})();var statearr_18355_18390 = state_18326__$1;(statearr_18355_18390[(2)] = null);
(statearr_18355_18390[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (10)))
{var inst_18291 = (state_18326[(17)]);var inst_18290 = (state_18326[(8)]);var inst_18289 = (state_18326[(2)]);var inst_18290__$1 = cljs.core.nth.call(null,inst_18289,(0),null);var inst_18291__$1 = cljs.core.nth.call(null,inst_18289,(1),null);var inst_18292 = (inst_18290__$1 == null);var inst_18293 = cljs.core._EQ_.call(null,inst_18291__$1,change);var inst_18294 = (inst_18292) || (inst_18293);var state_18326__$1 = (function (){var statearr_18356 = state_18326;(statearr_18356[(17)] = inst_18291__$1);
(statearr_18356[(8)] = inst_18290__$1);
return statearr_18356;
})();if(cljs.core.truth_(inst_18294))
{var statearr_18357_18391 = state_18326__$1;(statearr_18357_18391[(1)] = (11));
} else
{var statearr_18358_18392 = state_18326__$1;(statearr_18358_18392[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (18)))
{var inst_18286 = (state_18326[(16)]);var inst_18285 = (state_18326[(18)]);var inst_18291 = (state_18326[(17)]);var inst_18308 = cljs.core.empty_QMARK_.call(null,inst_18286);var inst_18309 = inst_18285.call(null,inst_18291);var inst_18310 = cljs.core.not.call(null,inst_18309);var inst_18311 = (inst_18308) && (inst_18310);var state_18326__$1 = state_18326;var statearr_18359_18393 = state_18326__$1;(statearr_18359_18393[(2)] = inst_18311);
(statearr_18359_18393[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18327 === (8)))
{var inst_18275 = (state_18326[(7)]);var state_18326__$1 = state_18326;var statearr_18360_18394 = state_18326__$1;(statearr_18360_18394[(2)] = inst_18275);
(statearr_18360_18394[(1)] = (9));
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
});})(c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11490__auto__,c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_18364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18364[(0)] = state_machine__11491__auto__);
(statearr_18364[(1)] = (1));
return statearr_18364;
});
var state_machine__11491__auto____1 = (function (state_18326){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_18326);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e18365){if((e18365 instanceof Object))
{var ex__11494__auto__ = e18365;var statearr_18366_18395 = state_18326;(statearr_18366_18395[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18326);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18365;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18396 = state_18326;
state_18326 = G__18396;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_18326){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_18326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11507__auto__ = (function (){var statearr_18367 = f__11506__auto__.call(null);(statearr_18367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___18368);
return statearr_18367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___18368,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18398 = {};return obj18398;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__18399_SHARP_){if(cljs.core.truth_(p1__18399_SHARP_.call(null,topic)))
{return p1__18399_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18524 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18524 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18525){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18525 = meta18525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18524.cljs$lang$type = true;
cljs.core.async.t18524.cljs$lang$ctorStr = "cljs.core.async/t18524";
cljs.core.async.t18524.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18524");
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18524.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18526){var self__ = this;
var _18526__$1 = this;return self__.meta18525;
});})(mults,ensure_mult))
;
cljs.core.async.t18524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18526,meta18525__$1){var self__ = this;
var _18526__$1 = this;return (new cljs.core.async.t18524(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18525__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18524 = ((function (mults,ensure_mult){
return (function __GT_t18524(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18525){return (new cljs.core.async.t18524(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18525));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18524(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11505__auto___18648 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___18648,mults,ensure_mult,p){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___18648,mults,ensure_mult,p){
return (function (state_18600){var state_val_18601 = (state_18600[(1)]);if((state_val_18601 === (7)))
{var inst_18596 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18602_18649 = state_18600__$1;(statearr_18602_18649[(2)] = inst_18596);
(statearr_18602_18649[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (20)))
{var state_18600__$1 = state_18600;var statearr_18603_18650 = state_18600__$1;(statearr_18603_18650[(2)] = null);
(statearr_18603_18650[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (1)))
{var state_18600__$1 = state_18600;var statearr_18604_18651 = state_18600__$1;(statearr_18604_18651[(2)] = null);
(statearr_18604_18651[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (24)))
{var inst_18579 = (state_18600[(7)]);var inst_18529 = (state_18600[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18600,(23),Object,null,(22));var inst_18586 = cljs.core.async.muxch_STAR_.call(null,inst_18579);var state_18600__$1 = state_18600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18600__$1,(25),inst_18586,inst_18529);
} else
{if((state_val_18601 === (4)))
{var inst_18529 = (state_18600[(8)]);var inst_18529__$1 = (state_18600[(2)]);var inst_18530 = (inst_18529__$1 == null);var state_18600__$1 = (function (){var statearr_18605 = state_18600;(statearr_18605[(8)] = inst_18529__$1);
return statearr_18605;
})();if(cljs.core.truth_(inst_18530))
{var statearr_18606_18652 = state_18600__$1;(statearr_18606_18652[(1)] = (5));
} else
{var statearr_18607_18653 = state_18600__$1;(statearr_18607_18653[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (15)))
{var inst_18571 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18608_18654 = state_18600__$1;(statearr_18608_18654[(2)] = inst_18571);
(statearr_18608_18654[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (21)))
{var inst_18593 = (state_18600[(2)]);var state_18600__$1 = (function (){var statearr_18609 = state_18600;(statearr_18609[(9)] = inst_18593);
return statearr_18609;
})();var statearr_18610_18655 = state_18600__$1;(statearr_18610_18655[(2)] = null);
(statearr_18610_18655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (13)))
{var inst_18553 = (state_18600[(10)]);var inst_18555 = cljs.core.chunked_seq_QMARK_.call(null,inst_18553);var state_18600__$1 = state_18600;if(inst_18555)
{var statearr_18611_18656 = state_18600__$1;(statearr_18611_18656[(1)] = (16));
} else
{var statearr_18612_18657 = state_18600__$1;(statearr_18612_18657[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (22)))
{var inst_18590 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18613_18658 = state_18600__$1;(statearr_18613_18658[(2)] = inst_18590);
(statearr_18613_18658[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (6)))
{var inst_18577 = (state_18600[(11)]);var inst_18579 = (state_18600[(7)]);var inst_18529 = (state_18600[(8)]);var inst_18577__$1 = topic_fn.call(null,inst_18529);var inst_18578 = cljs.core.deref.call(null,mults);var inst_18579__$1 = cljs.core.get.call(null,inst_18578,inst_18577__$1);var state_18600__$1 = (function (){var statearr_18614 = state_18600;(statearr_18614[(11)] = inst_18577__$1);
(statearr_18614[(7)] = inst_18579__$1);
return statearr_18614;
})();if(cljs.core.truth_(inst_18579__$1))
{var statearr_18615_18659 = state_18600__$1;(statearr_18615_18659[(1)] = (19));
} else
{var statearr_18616_18660 = state_18600__$1;(statearr_18616_18660[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (25)))
{var inst_18588 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18617_18661 = state_18600__$1;(statearr_18617_18661[(2)] = inst_18588);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18600__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (17)))
{var inst_18553 = (state_18600[(10)]);var inst_18562 = cljs.core.first.call(null,inst_18553);var inst_18563 = cljs.core.async.muxch_STAR_.call(null,inst_18562);var inst_18564 = cljs.core.async.close_BANG_.call(null,inst_18563);var inst_18565 = cljs.core.next.call(null,inst_18553);var inst_18539 = inst_18565;var inst_18540 = null;var inst_18541 = (0);var inst_18542 = (0);var state_18600__$1 = (function (){var statearr_18618 = state_18600;(statearr_18618[(12)] = inst_18564);
(statearr_18618[(13)] = inst_18540);
(statearr_18618[(14)] = inst_18539);
(statearr_18618[(15)] = inst_18541);
(statearr_18618[(16)] = inst_18542);
return statearr_18618;
})();var statearr_18619_18662 = state_18600__$1;(statearr_18619_18662[(2)] = null);
(statearr_18619_18662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (3)))
{var inst_18598 = (state_18600[(2)]);var state_18600__$1 = state_18600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18600__$1,inst_18598);
} else
{if((state_val_18601 === (12)))
{var inst_18573 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18620_18663 = state_18600__$1;(statearr_18620_18663[(2)] = inst_18573);
(statearr_18620_18663[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (2)))
{var state_18600__$1 = state_18600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18600__$1,(4),ch);
} else
{if((state_val_18601 === (23)))
{var inst_18577 = (state_18600[(11)]);var inst_18581 = (state_18600[(2)]);var inst_18582 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18577);var state_18600__$1 = (function (){var statearr_18621 = state_18600;(statearr_18621[(17)] = inst_18581);
return statearr_18621;
})();var statearr_18622_18664 = state_18600__$1;(statearr_18622_18664[(2)] = inst_18582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18600__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (19)))
{var state_18600__$1 = state_18600;var statearr_18623_18665 = state_18600__$1;(statearr_18623_18665[(2)] = null);
(statearr_18623_18665[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (11)))
{var inst_18553 = (state_18600[(10)]);var inst_18539 = (state_18600[(14)]);var inst_18553__$1 = cljs.core.seq.call(null,inst_18539);var state_18600__$1 = (function (){var statearr_18624 = state_18600;(statearr_18624[(10)] = inst_18553__$1);
return statearr_18624;
})();if(inst_18553__$1)
{var statearr_18625_18666 = state_18600__$1;(statearr_18625_18666[(1)] = (13));
} else
{var statearr_18626_18667 = state_18600__$1;(statearr_18626_18667[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (9)))
{var inst_18575 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18627_18668 = state_18600__$1;(statearr_18627_18668[(2)] = inst_18575);
(statearr_18627_18668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (5)))
{var inst_18536 = cljs.core.deref.call(null,mults);var inst_18537 = cljs.core.vals.call(null,inst_18536);var inst_18538 = cljs.core.seq.call(null,inst_18537);var inst_18539 = inst_18538;var inst_18540 = null;var inst_18541 = (0);var inst_18542 = (0);var state_18600__$1 = (function (){var statearr_18628 = state_18600;(statearr_18628[(13)] = inst_18540);
(statearr_18628[(14)] = inst_18539);
(statearr_18628[(15)] = inst_18541);
(statearr_18628[(16)] = inst_18542);
return statearr_18628;
})();var statearr_18629_18669 = state_18600__$1;(statearr_18629_18669[(2)] = null);
(statearr_18629_18669[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (14)))
{var state_18600__$1 = state_18600;var statearr_18633_18670 = state_18600__$1;(statearr_18633_18670[(2)] = null);
(statearr_18633_18670[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (16)))
{var inst_18553 = (state_18600[(10)]);var inst_18557 = cljs.core.chunk_first.call(null,inst_18553);var inst_18558 = cljs.core.chunk_rest.call(null,inst_18553);var inst_18559 = cljs.core.count.call(null,inst_18557);var inst_18539 = inst_18558;var inst_18540 = inst_18557;var inst_18541 = inst_18559;var inst_18542 = (0);var state_18600__$1 = (function (){var statearr_18634 = state_18600;(statearr_18634[(13)] = inst_18540);
(statearr_18634[(14)] = inst_18539);
(statearr_18634[(15)] = inst_18541);
(statearr_18634[(16)] = inst_18542);
return statearr_18634;
})();var statearr_18635_18671 = state_18600__$1;(statearr_18635_18671[(2)] = null);
(statearr_18635_18671[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (10)))
{var inst_18540 = (state_18600[(13)]);var inst_18539 = (state_18600[(14)]);var inst_18541 = (state_18600[(15)]);var inst_18542 = (state_18600[(16)]);var inst_18547 = cljs.core._nth.call(null,inst_18540,inst_18542);var inst_18548 = cljs.core.async.muxch_STAR_.call(null,inst_18547);var inst_18549 = cljs.core.async.close_BANG_.call(null,inst_18548);var inst_18550 = (inst_18542 + (1));var tmp18630 = inst_18540;var tmp18631 = inst_18539;var tmp18632 = inst_18541;var inst_18539__$1 = tmp18631;var inst_18540__$1 = tmp18630;var inst_18541__$1 = tmp18632;var inst_18542__$1 = inst_18550;var state_18600__$1 = (function (){var statearr_18636 = state_18600;(statearr_18636[(18)] = inst_18549);
(statearr_18636[(13)] = inst_18540__$1);
(statearr_18636[(14)] = inst_18539__$1);
(statearr_18636[(15)] = inst_18541__$1);
(statearr_18636[(16)] = inst_18542__$1);
return statearr_18636;
})();var statearr_18637_18672 = state_18600__$1;(statearr_18637_18672[(2)] = null);
(statearr_18637_18672[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (18)))
{var inst_18568 = (state_18600[(2)]);var state_18600__$1 = state_18600;var statearr_18638_18673 = state_18600__$1;(statearr_18638_18673[(2)] = inst_18568);
(statearr_18638_18673[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18601 === (8)))
{var inst_18541 = (state_18600[(15)]);var inst_18542 = (state_18600[(16)]);var inst_18544 = (inst_18542 < inst_18541);var inst_18545 = inst_18544;var state_18600__$1 = state_18600;if(cljs.core.truth_(inst_18545))
{var statearr_18639_18674 = state_18600__$1;(statearr_18639_18674[(1)] = (10));
} else
{var statearr_18640_18675 = state_18600__$1;(statearr_18640_18675[(1)] = (11));
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
});})(c__11505__auto___18648,mults,ensure_mult,p))
;return ((function (switch__11490__auto__,c__11505__auto___18648,mults,ensure_mult,p){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_18644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18644[(0)] = state_machine__11491__auto__);
(statearr_18644[(1)] = (1));
return statearr_18644;
});
var state_machine__11491__auto____1 = (function (state_18600){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_18600);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e18645){if((e18645 instanceof Object))
{var ex__11494__auto__ = e18645;var statearr_18646_18676 = state_18600;(statearr_18646_18676[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18600);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18645;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18677 = state_18600;
state_18600 = G__18677;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_18600){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_18600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___18648,mults,ensure_mult,p))
})();var state__11507__auto__ = (function (){var statearr_18647 = f__11506__auto__.call(null);(statearr_18647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___18648);
return statearr_18647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___18648,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__11505__auto___18814 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18784){var state_val_18785 = (state_18784[(1)]);if((state_val_18785 === (7)))
{var state_18784__$1 = state_18784;var statearr_18786_18815 = state_18784__$1;(statearr_18786_18815[(2)] = null);
(statearr_18786_18815[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (1)))
{var state_18784__$1 = state_18784;var statearr_18787_18816 = state_18784__$1;(statearr_18787_18816[(2)] = null);
(statearr_18787_18816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (4)))
{var inst_18748 = (state_18784[(7)]);var inst_18750 = (inst_18748 < cnt);var state_18784__$1 = state_18784;if(cljs.core.truth_(inst_18750))
{var statearr_18788_18817 = state_18784__$1;(statearr_18788_18817[(1)] = (6));
} else
{var statearr_18789_18818 = state_18784__$1;(statearr_18789_18818[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (15)))
{var inst_18780 = (state_18784[(2)]);var state_18784__$1 = state_18784;var statearr_18790_18819 = state_18784__$1;(statearr_18790_18819[(2)] = inst_18780);
(statearr_18790_18819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (13)))
{var inst_18773 = cljs.core.async.close_BANG_.call(null,out);var state_18784__$1 = state_18784;var statearr_18791_18820 = state_18784__$1;(statearr_18791_18820[(2)] = inst_18773);
(statearr_18791_18820[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (6)))
{var state_18784__$1 = state_18784;var statearr_18792_18821 = state_18784__$1;(statearr_18792_18821[(2)] = null);
(statearr_18792_18821[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (3)))
{var inst_18782 = (state_18784[(2)]);var state_18784__$1 = state_18784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18784__$1,inst_18782);
} else
{if((state_val_18785 === (12)))
{var inst_18770 = (state_18784[(8)]);var inst_18770__$1 = (state_18784[(2)]);var inst_18771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18770__$1);var state_18784__$1 = (function (){var statearr_18793 = state_18784;(statearr_18793[(8)] = inst_18770__$1);
return statearr_18793;
})();if(cljs.core.truth_(inst_18771))
{var statearr_18794_18822 = state_18784__$1;(statearr_18794_18822[(1)] = (13));
} else
{var statearr_18795_18823 = state_18784__$1;(statearr_18795_18823[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (2)))
{var inst_18747 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18748 = (0);var state_18784__$1 = (function (){var statearr_18796 = state_18784;(statearr_18796[(9)] = inst_18747);
(statearr_18796[(7)] = inst_18748);
return statearr_18796;
})();var statearr_18797_18824 = state_18784__$1;(statearr_18797_18824[(2)] = null);
(statearr_18797_18824[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (11)))
{var inst_18748 = (state_18784[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18784,(10),Object,null,(9));var inst_18757 = chs__$1.call(null,inst_18748);var inst_18758 = done.call(null,inst_18748);var inst_18759 = cljs.core.async.take_BANG_.call(null,inst_18757,inst_18758);var state_18784__$1 = state_18784;var statearr_18798_18825 = state_18784__$1;(statearr_18798_18825[(2)] = inst_18759);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (9)))
{var inst_18748 = (state_18784[(7)]);var inst_18761 = (state_18784[(2)]);var inst_18762 = (inst_18748 + (1));var inst_18748__$1 = inst_18762;var state_18784__$1 = (function (){var statearr_18799 = state_18784;(statearr_18799[(10)] = inst_18761);
(statearr_18799[(7)] = inst_18748__$1);
return statearr_18799;
})();var statearr_18800_18826 = state_18784__$1;(statearr_18800_18826[(2)] = null);
(statearr_18800_18826[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (5)))
{var inst_18768 = (state_18784[(2)]);var state_18784__$1 = (function (){var statearr_18801 = state_18784;(statearr_18801[(11)] = inst_18768);
return statearr_18801;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18784__$1,(12),dchan);
} else
{if((state_val_18785 === (14)))
{var inst_18770 = (state_18784[(8)]);var inst_18775 = cljs.core.apply.call(null,f,inst_18770);var state_18784__$1 = state_18784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18784__$1,(16),out,inst_18775);
} else
{if((state_val_18785 === (16)))
{var inst_18777 = (state_18784[(2)]);var state_18784__$1 = (function (){var statearr_18802 = state_18784;(statearr_18802[(12)] = inst_18777);
return statearr_18802;
})();var statearr_18803_18827 = state_18784__$1;(statearr_18803_18827[(2)] = null);
(statearr_18803_18827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (10)))
{var inst_18752 = (state_18784[(2)]);var inst_18753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18784__$1 = (function (){var statearr_18804 = state_18784;(statearr_18804[(13)] = inst_18752);
return statearr_18804;
})();var statearr_18805_18828 = state_18784__$1;(statearr_18805_18828[(2)] = inst_18753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18785 === (8)))
{var inst_18766 = (state_18784[(2)]);var state_18784__$1 = state_18784;var statearr_18806_18829 = state_18784__$1;(statearr_18806_18829[(2)] = inst_18766);
(statearr_18806_18829[(1)] = (5));
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
});})(c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11490__auto__,c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_18810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18810[(0)] = state_machine__11491__auto__);
(statearr_18810[(1)] = (1));
return statearr_18810;
});
var state_machine__11491__auto____1 = (function (state_18784){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_18784);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e18811){if((e18811 instanceof Object))
{var ex__11494__auto__ = e18811;var statearr_18812_18830 = state_18784;(statearr_18812_18830[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18811;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18831 = state_18784;
state_18784 = G__18831;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_18784){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_18784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11507__auto__ = (function (){var statearr_18813 = f__11506__auto__.call(null);(statearr_18813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___18814);
return statearr_18813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___18814,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___18939 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___18939,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___18939,out){
return (function (state_18915){var state_val_18916 = (state_18915[(1)]);if((state_val_18916 === (7)))
{var inst_18894 = (state_18915[(7)]);var inst_18895 = (state_18915[(8)]);var inst_18894__$1 = (state_18915[(2)]);var inst_18895__$1 = cljs.core.nth.call(null,inst_18894__$1,(0),null);var inst_18896 = cljs.core.nth.call(null,inst_18894__$1,(1),null);var inst_18897 = (inst_18895__$1 == null);var state_18915__$1 = (function (){var statearr_18917 = state_18915;(statearr_18917[(9)] = inst_18896);
(statearr_18917[(7)] = inst_18894__$1);
(statearr_18917[(8)] = inst_18895__$1);
return statearr_18917;
})();if(cljs.core.truth_(inst_18897))
{var statearr_18918_18940 = state_18915__$1;(statearr_18918_18940[(1)] = (8));
} else
{var statearr_18919_18941 = state_18915__$1;(statearr_18919_18941[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (1)))
{var inst_18886 = cljs.core.vec.call(null,chs);var inst_18887 = inst_18886;var state_18915__$1 = (function (){var statearr_18920 = state_18915;(statearr_18920[(10)] = inst_18887);
return statearr_18920;
})();var statearr_18921_18942 = state_18915__$1;(statearr_18921_18942[(2)] = null);
(statearr_18921_18942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (4)))
{var inst_18887 = (state_18915[(10)]);var state_18915__$1 = state_18915;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18915__$1,(7),inst_18887);
} else
{if((state_val_18916 === (6)))
{var inst_18911 = (state_18915[(2)]);var state_18915__$1 = state_18915;var statearr_18922_18943 = state_18915__$1;(statearr_18922_18943[(2)] = inst_18911);
(statearr_18922_18943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (3)))
{var inst_18913 = (state_18915[(2)]);var state_18915__$1 = state_18915;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18915__$1,inst_18913);
} else
{if((state_val_18916 === (2)))
{var inst_18887 = (state_18915[(10)]);var inst_18889 = cljs.core.count.call(null,inst_18887);var inst_18890 = (inst_18889 > (0));var state_18915__$1 = state_18915;if(cljs.core.truth_(inst_18890))
{var statearr_18924_18944 = state_18915__$1;(statearr_18924_18944[(1)] = (4));
} else
{var statearr_18925_18945 = state_18915__$1;(statearr_18925_18945[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (11)))
{var inst_18887 = (state_18915[(10)]);var inst_18904 = (state_18915[(2)]);var tmp18923 = inst_18887;var inst_18887__$1 = tmp18923;var state_18915__$1 = (function (){var statearr_18926 = state_18915;(statearr_18926[(11)] = inst_18904);
(statearr_18926[(10)] = inst_18887__$1);
return statearr_18926;
})();var statearr_18927_18946 = state_18915__$1;(statearr_18927_18946[(2)] = null);
(statearr_18927_18946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (9)))
{var inst_18895 = (state_18915[(8)]);var state_18915__$1 = state_18915;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18915__$1,(11),out,inst_18895);
} else
{if((state_val_18916 === (5)))
{var inst_18909 = cljs.core.async.close_BANG_.call(null,out);var state_18915__$1 = state_18915;var statearr_18928_18947 = state_18915__$1;(statearr_18928_18947[(2)] = inst_18909);
(statearr_18928_18947[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (10)))
{var inst_18907 = (state_18915[(2)]);var state_18915__$1 = state_18915;var statearr_18929_18948 = state_18915__$1;(statearr_18929_18948[(2)] = inst_18907);
(statearr_18929_18948[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18916 === (8)))
{var inst_18896 = (state_18915[(9)]);var inst_18894 = (state_18915[(7)]);var inst_18895 = (state_18915[(8)]);var inst_18887 = (state_18915[(10)]);var inst_18899 = (function (){var c = inst_18896;var v = inst_18895;var vec__18892 = inst_18894;var cs = inst_18887;return ((function (c,v,vec__18892,cs,inst_18896,inst_18894,inst_18895,inst_18887,state_val_18916,c__11505__auto___18939,out){
return (function (p1__18832_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18832_SHARP_);
});
;})(c,v,vec__18892,cs,inst_18896,inst_18894,inst_18895,inst_18887,state_val_18916,c__11505__auto___18939,out))
})();var inst_18900 = cljs.core.filterv.call(null,inst_18899,inst_18887);var inst_18887__$1 = inst_18900;var state_18915__$1 = (function (){var statearr_18930 = state_18915;(statearr_18930[(10)] = inst_18887__$1);
return statearr_18930;
})();var statearr_18931_18949 = state_18915__$1;(statearr_18931_18949[(2)] = null);
(statearr_18931_18949[(1)] = (2));
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
});})(c__11505__auto___18939,out))
;return ((function (switch__11490__auto__,c__11505__auto___18939,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_18935 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18935[(0)] = state_machine__11491__auto__);
(statearr_18935[(1)] = (1));
return statearr_18935;
});
var state_machine__11491__auto____1 = (function (state_18915){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_18915);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e18936){if((e18936 instanceof Object))
{var ex__11494__auto__ = e18936;var statearr_18937_18950 = state_18915;(statearr_18937_18950[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18915);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18936;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18951 = state_18915;
state_18915 = G__18951;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_18915){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_18915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___18939,out))
})();var state__11507__auto__ = (function (){var statearr_18938 = f__11506__auto__.call(null);(statearr_18938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___18939);
return statearr_18938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___18939,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___19044 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___19044,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___19044,out){
return (function (state_19021){var state_val_19022 = (state_19021[(1)]);if((state_val_19022 === (7)))
{var inst_19003 = (state_19021[(7)]);var inst_19003__$1 = (state_19021[(2)]);var inst_19004 = (inst_19003__$1 == null);var inst_19005 = cljs.core.not.call(null,inst_19004);var state_19021__$1 = (function (){var statearr_19023 = state_19021;(statearr_19023[(7)] = inst_19003__$1);
return statearr_19023;
})();if(inst_19005)
{var statearr_19024_19045 = state_19021__$1;(statearr_19024_19045[(1)] = (8));
} else
{var statearr_19025_19046 = state_19021__$1;(statearr_19025_19046[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (1)))
{var inst_18998 = (0);var state_19021__$1 = (function (){var statearr_19026 = state_19021;(statearr_19026[(8)] = inst_18998);
return statearr_19026;
})();var statearr_19027_19047 = state_19021__$1;(statearr_19027_19047[(2)] = null);
(statearr_19027_19047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (4)))
{var state_19021__$1 = state_19021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19021__$1,(7),ch);
} else
{if((state_val_19022 === (6)))
{var inst_19016 = (state_19021[(2)]);var state_19021__$1 = state_19021;var statearr_19028_19048 = state_19021__$1;(statearr_19028_19048[(2)] = inst_19016);
(statearr_19028_19048[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (3)))
{var inst_19018 = (state_19021[(2)]);var inst_19019 = cljs.core.async.close_BANG_.call(null,out);var state_19021__$1 = (function (){var statearr_19029 = state_19021;(statearr_19029[(9)] = inst_19018);
return statearr_19029;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19021__$1,inst_19019);
} else
{if((state_val_19022 === (2)))
{var inst_18998 = (state_19021[(8)]);var inst_19000 = (inst_18998 < n);var state_19021__$1 = state_19021;if(cljs.core.truth_(inst_19000))
{var statearr_19030_19049 = state_19021__$1;(statearr_19030_19049[(1)] = (4));
} else
{var statearr_19031_19050 = state_19021__$1;(statearr_19031_19050[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (11)))
{var inst_18998 = (state_19021[(8)]);var inst_19008 = (state_19021[(2)]);var inst_19009 = (inst_18998 + (1));var inst_18998__$1 = inst_19009;var state_19021__$1 = (function (){var statearr_19032 = state_19021;(statearr_19032[(10)] = inst_19008);
(statearr_19032[(8)] = inst_18998__$1);
return statearr_19032;
})();var statearr_19033_19051 = state_19021__$1;(statearr_19033_19051[(2)] = null);
(statearr_19033_19051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (9)))
{var state_19021__$1 = state_19021;var statearr_19034_19052 = state_19021__$1;(statearr_19034_19052[(2)] = null);
(statearr_19034_19052[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (5)))
{var state_19021__$1 = state_19021;var statearr_19035_19053 = state_19021__$1;(statearr_19035_19053[(2)] = null);
(statearr_19035_19053[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (10)))
{var inst_19013 = (state_19021[(2)]);var state_19021__$1 = state_19021;var statearr_19036_19054 = state_19021__$1;(statearr_19036_19054[(2)] = inst_19013);
(statearr_19036_19054[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19022 === (8)))
{var inst_19003 = (state_19021[(7)]);var state_19021__$1 = state_19021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19021__$1,(11),out,inst_19003);
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
});})(c__11505__auto___19044,out))
;return ((function (switch__11490__auto__,c__11505__auto___19044,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_19040 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19040[(0)] = state_machine__11491__auto__);
(statearr_19040[(1)] = (1));
return statearr_19040;
});
var state_machine__11491__auto____1 = (function (state_19021){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_19021);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e19041){if((e19041 instanceof Object))
{var ex__11494__auto__ = e19041;var statearr_19042_19055 = state_19021;(statearr_19042_19055[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19021);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19041;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19056 = state_19021;
state_19021 = G__19056;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_19021){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_19021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___19044,out))
})();var state__11507__auto__ = (function (){var statearr_19043 = f__11506__auto__.call(null);(statearr_19043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___19044);
return statearr_19043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___19044,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___19153 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___19153,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___19153,out){
return (function (state_19128){var state_val_19129 = (state_19128[(1)]);if((state_val_19129 === (7)))
{var inst_19123 = (state_19128[(2)]);var state_19128__$1 = state_19128;var statearr_19130_19154 = state_19128__$1;(statearr_19130_19154[(2)] = inst_19123);
(statearr_19130_19154[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (1)))
{var inst_19105 = null;var state_19128__$1 = (function (){var statearr_19131 = state_19128;(statearr_19131[(7)] = inst_19105);
return statearr_19131;
})();var statearr_19132_19155 = state_19128__$1;(statearr_19132_19155[(2)] = null);
(statearr_19132_19155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (4)))
{var inst_19108 = (state_19128[(8)]);var inst_19108__$1 = (state_19128[(2)]);var inst_19109 = (inst_19108__$1 == null);var inst_19110 = cljs.core.not.call(null,inst_19109);var state_19128__$1 = (function (){var statearr_19133 = state_19128;(statearr_19133[(8)] = inst_19108__$1);
return statearr_19133;
})();if(inst_19110)
{var statearr_19134_19156 = state_19128__$1;(statearr_19134_19156[(1)] = (5));
} else
{var statearr_19135_19157 = state_19128__$1;(statearr_19135_19157[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (6)))
{var state_19128__$1 = state_19128;var statearr_19136_19158 = state_19128__$1;(statearr_19136_19158[(2)] = null);
(statearr_19136_19158[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (3)))
{var inst_19125 = (state_19128[(2)]);var inst_19126 = cljs.core.async.close_BANG_.call(null,out);var state_19128__$1 = (function (){var statearr_19137 = state_19128;(statearr_19137[(9)] = inst_19125);
return statearr_19137;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19128__$1,inst_19126);
} else
{if((state_val_19129 === (2)))
{var state_19128__$1 = state_19128;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19128__$1,(4),ch);
} else
{if((state_val_19129 === (11)))
{var inst_19108 = (state_19128[(8)]);var inst_19117 = (state_19128[(2)]);var inst_19105 = inst_19108;var state_19128__$1 = (function (){var statearr_19138 = state_19128;(statearr_19138[(7)] = inst_19105);
(statearr_19138[(10)] = inst_19117);
return statearr_19138;
})();var statearr_19139_19159 = state_19128__$1;(statearr_19139_19159[(2)] = null);
(statearr_19139_19159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (9)))
{var inst_19108 = (state_19128[(8)]);var state_19128__$1 = state_19128;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19128__$1,(11),out,inst_19108);
} else
{if((state_val_19129 === (5)))
{var inst_19105 = (state_19128[(7)]);var inst_19108 = (state_19128[(8)]);var inst_19112 = cljs.core._EQ_.call(null,inst_19108,inst_19105);var state_19128__$1 = state_19128;if(inst_19112)
{var statearr_19141_19160 = state_19128__$1;(statearr_19141_19160[(1)] = (8));
} else
{var statearr_19142_19161 = state_19128__$1;(statearr_19142_19161[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (10)))
{var inst_19120 = (state_19128[(2)]);var state_19128__$1 = state_19128;var statearr_19143_19162 = state_19128__$1;(statearr_19143_19162[(2)] = inst_19120);
(statearr_19143_19162[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19129 === (8)))
{var inst_19105 = (state_19128[(7)]);var tmp19140 = inst_19105;var inst_19105__$1 = tmp19140;var state_19128__$1 = (function (){var statearr_19144 = state_19128;(statearr_19144[(7)] = inst_19105__$1);
return statearr_19144;
})();var statearr_19145_19163 = state_19128__$1;(statearr_19145_19163[(2)] = null);
(statearr_19145_19163[(1)] = (2));
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
});})(c__11505__auto___19153,out))
;return ((function (switch__11490__auto__,c__11505__auto___19153,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_19149 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19149[(0)] = state_machine__11491__auto__);
(statearr_19149[(1)] = (1));
return statearr_19149;
});
var state_machine__11491__auto____1 = (function (state_19128){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_19128);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e19150){if((e19150 instanceof Object))
{var ex__11494__auto__ = e19150;var statearr_19151_19164 = state_19128;(statearr_19151_19164[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19128);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19165 = state_19128;
state_19128 = G__19165;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_19128){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_19128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___19153,out))
})();var state__11507__auto__ = (function (){var statearr_19152 = f__11506__auto__.call(null);(statearr_19152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___19153);
return statearr_19152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___19153,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___19300 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___19300,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___19300,out){
return (function (state_19270){var state_val_19271 = (state_19270[(1)]);if((state_val_19271 === (7)))
{var inst_19266 = (state_19270[(2)]);var state_19270__$1 = state_19270;var statearr_19272_19301 = state_19270__$1;(statearr_19272_19301[(2)] = inst_19266);
(statearr_19272_19301[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (1)))
{var inst_19233 = (new Array(n));var inst_19234 = inst_19233;var inst_19235 = (0);var state_19270__$1 = (function (){var statearr_19273 = state_19270;(statearr_19273[(7)] = inst_19235);
(statearr_19273[(8)] = inst_19234);
return statearr_19273;
})();var statearr_19274_19302 = state_19270__$1;(statearr_19274_19302[(2)] = null);
(statearr_19274_19302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (4)))
{var inst_19238 = (state_19270[(9)]);var inst_19238__$1 = (state_19270[(2)]);var inst_19239 = (inst_19238__$1 == null);var inst_19240 = cljs.core.not.call(null,inst_19239);var state_19270__$1 = (function (){var statearr_19275 = state_19270;(statearr_19275[(9)] = inst_19238__$1);
return statearr_19275;
})();if(inst_19240)
{var statearr_19276_19303 = state_19270__$1;(statearr_19276_19303[(1)] = (5));
} else
{var statearr_19277_19304 = state_19270__$1;(statearr_19277_19304[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (15)))
{var inst_19260 = (state_19270[(2)]);var state_19270__$1 = state_19270;var statearr_19278_19305 = state_19270__$1;(statearr_19278_19305[(2)] = inst_19260);
(statearr_19278_19305[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (13)))
{var state_19270__$1 = state_19270;var statearr_19279_19306 = state_19270__$1;(statearr_19279_19306[(2)] = null);
(statearr_19279_19306[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (6)))
{var inst_19235 = (state_19270[(7)]);var inst_19256 = (inst_19235 > (0));var state_19270__$1 = state_19270;if(cljs.core.truth_(inst_19256))
{var statearr_19280_19307 = state_19270__$1;(statearr_19280_19307[(1)] = (12));
} else
{var statearr_19281_19308 = state_19270__$1;(statearr_19281_19308[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (3)))
{var inst_19268 = (state_19270[(2)]);var state_19270__$1 = state_19270;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19270__$1,inst_19268);
} else
{if((state_val_19271 === (12)))
{var inst_19234 = (state_19270[(8)]);var inst_19258 = cljs.core.vec.call(null,inst_19234);var state_19270__$1 = state_19270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19270__$1,(15),out,inst_19258);
} else
{if((state_val_19271 === (2)))
{var state_19270__$1 = state_19270;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19270__$1,(4),ch);
} else
{if((state_val_19271 === (11)))
{var inst_19250 = (state_19270[(2)]);var inst_19251 = (new Array(n));var inst_19234 = inst_19251;var inst_19235 = (0);var state_19270__$1 = (function (){var statearr_19282 = state_19270;(statearr_19282[(10)] = inst_19250);
(statearr_19282[(7)] = inst_19235);
(statearr_19282[(8)] = inst_19234);
return statearr_19282;
})();var statearr_19283_19309 = state_19270__$1;(statearr_19283_19309[(2)] = null);
(statearr_19283_19309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (9)))
{var inst_19234 = (state_19270[(8)]);var inst_19248 = cljs.core.vec.call(null,inst_19234);var state_19270__$1 = state_19270;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19270__$1,(11),out,inst_19248);
} else
{if((state_val_19271 === (5)))
{var inst_19243 = (state_19270[(11)]);var inst_19238 = (state_19270[(9)]);var inst_19235 = (state_19270[(7)]);var inst_19234 = (state_19270[(8)]);var inst_19242 = (inst_19234[inst_19235] = inst_19238);var inst_19243__$1 = (inst_19235 + (1));var inst_19244 = (inst_19243__$1 < n);var state_19270__$1 = (function (){var statearr_19284 = state_19270;(statearr_19284[(11)] = inst_19243__$1);
(statearr_19284[(12)] = inst_19242);
return statearr_19284;
})();if(cljs.core.truth_(inst_19244))
{var statearr_19285_19310 = state_19270__$1;(statearr_19285_19310[(1)] = (8));
} else
{var statearr_19286_19311 = state_19270__$1;(statearr_19286_19311[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (14)))
{var inst_19263 = (state_19270[(2)]);var inst_19264 = cljs.core.async.close_BANG_.call(null,out);var state_19270__$1 = (function (){var statearr_19288 = state_19270;(statearr_19288[(13)] = inst_19263);
return statearr_19288;
})();var statearr_19289_19312 = state_19270__$1;(statearr_19289_19312[(2)] = inst_19264);
(statearr_19289_19312[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (10)))
{var inst_19254 = (state_19270[(2)]);var state_19270__$1 = state_19270;var statearr_19290_19313 = state_19270__$1;(statearr_19290_19313[(2)] = inst_19254);
(statearr_19290_19313[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19271 === (8)))
{var inst_19243 = (state_19270[(11)]);var inst_19234 = (state_19270[(8)]);var tmp19287 = inst_19234;var inst_19234__$1 = tmp19287;var inst_19235 = inst_19243;var state_19270__$1 = (function (){var statearr_19291 = state_19270;(statearr_19291[(7)] = inst_19235);
(statearr_19291[(8)] = inst_19234__$1);
return statearr_19291;
})();var statearr_19292_19314 = state_19270__$1;(statearr_19292_19314[(2)] = null);
(statearr_19292_19314[(1)] = (2));
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
});})(c__11505__auto___19300,out))
;return ((function (switch__11490__auto__,c__11505__auto___19300,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_19296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19296[(0)] = state_machine__11491__auto__);
(statearr_19296[(1)] = (1));
return statearr_19296;
});
var state_machine__11491__auto____1 = (function (state_19270){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_19270);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e19297){if((e19297 instanceof Object))
{var ex__11494__auto__ = e19297;var statearr_19298_19315 = state_19270;(statearr_19298_19315[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19270);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19297;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19316 = state_19270;
state_19270 = G__19316;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_19270){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_19270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___19300,out))
})();var state__11507__auto__ = (function (){var statearr_19299 = f__11506__auto__.call(null);(statearr_19299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___19300);
return statearr_19299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___19300,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__11505__auto___19459 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__11505__auto___19459,out){
return (function (){var f__11506__auto__ = (function (){var switch__11490__auto__ = ((function (c__11505__auto___19459,out){
return (function (state_19429){var state_val_19430 = (state_19429[(1)]);if((state_val_19430 === (7)))
{var inst_19425 = (state_19429[(2)]);var state_19429__$1 = state_19429;var statearr_19431_19460 = state_19429__$1;(statearr_19431_19460[(2)] = inst_19425);
(statearr_19431_19460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (1)))
{var inst_19388 = [];var inst_19389 = inst_19388;var inst_19390 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19429__$1 = (function (){var statearr_19432 = state_19429;(statearr_19432[(7)] = inst_19389);
(statearr_19432[(8)] = inst_19390);
return statearr_19432;
})();var statearr_19433_19461 = state_19429__$1;(statearr_19433_19461[(2)] = null);
(statearr_19433_19461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (4)))
{var inst_19393 = (state_19429[(9)]);var inst_19393__$1 = (state_19429[(2)]);var inst_19394 = (inst_19393__$1 == null);var inst_19395 = cljs.core.not.call(null,inst_19394);var state_19429__$1 = (function (){var statearr_19434 = state_19429;(statearr_19434[(9)] = inst_19393__$1);
return statearr_19434;
})();if(inst_19395)
{var statearr_19435_19462 = state_19429__$1;(statearr_19435_19462[(1)] = (5));
} else
{var statearr_19436_19463 = state_19429__$1;(statearr_19436_19463[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (15)))
{var inst_19419 = (state_19429[(2)]);var state_19429__$1 = state_19429;var statearr_19437_19464 = state_19429__$1;(statearr_19437_19464[(2)] = inst_19419);
(statearr_19437_19464[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (13)))
{var state_19429__$1 = state_19429;var statearr_19438_19465 = state_19429__$1;(statearr_19438_19465[(2)] = null);
(statearr_19438_19465[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (6)))
{var inst_19389 = (state_19429[(7)]);var inst_19414 = inst_19389.length;var inst_19415 = (inst_19414 > (0));var state_19429__$1 = state_19429;if(cljs.core.truth_(inst_19415))
{var statearr_19439_19466 = state_19429__$1;(statearr_19439_19466[(1)] = (12));
} else
{var statearr_19440_19467 = state_19429__$1;(statearr_19440_19467[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (3)))
{var inst_19427 = (state_19429[(2)]);var state_19429__$1 = state_19429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19429__$1,inst_19427);
} else
{if((state_val_19430 === (12)))
{var inst_19389 = (state_19429[(7)]);var inst_19417 = cljs.core.vec.call(null,inst_19389);var state_19429__$1 = state_19429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19429__$1,(15),out,inst_19417);
} else
{if((state_val_19430 === (2)))
{var state_19429__$1 = state_19429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19429__$1,(4),ch);
} else
{if((state_val_19430 === (11)))
{var inst_19397 = (state_19429[(10)]);var inst_19393 = (state_19429[(9)]);var inst_19407 = (state_19429[(2)]);var inst_19408 = [];var inst_19409 = inst_19408.push(inst_19393);var inst_19389 = inst_19408;var inst_19390 = inst_19397;var state_19429__$1 = (function (){var statearr_19441 = state_19429;(statearr_19441[(11)] = inst_19409);
(statearr_19441[(7)] = inst_19389);
(statearr_19441[(12)] = inst_19407);
(statearr_19441[(8)] = inst_19390);
return statearr_19441;
})();var statearr_19442_19468 = state_19429__$1;(statearr_19442_19468[(2)] = null);
(statearr_19442_19468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (9)))
{var inst_19389 = (state_19429[(7)]);var inst_19405 = cljs.core.vec.call(null,inst_19389);var state_19429__$1 = state_19429;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19429__$1,(11),out,inst_19405);
} else
{if((state_val_19430 === (5)))
{var inst_19397 = (state_19429[(10)]);var inst_19390 = (state_19429[(8)]);var inst_19393 = (state_19429[(9)]);var inst_19397__$1 = f.call(null,inst_19393);var inst_19398 = cljs.core._EQ_.call(null,inst_19397__$1,inst_19390);var inst_19399 = cljs.core.keyword_identical_QMARK_.call(null,inst_19390,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19400 = (inst_19398) || (inst_19399);var state_19429__$1 = (function (){var statearr_19443 = state_19429;(statearr_19443[(10)] = inst_19397__$1);
return statearr_19443;
})();if(cljs.core.truth_(inst_19400))
{var statearr_19444_19469 = state_19429__$1;(statearr_19444_19469[(1)] = (8));
} else
{var statearr_19445_19470 = state_19429__$1;(statearr_19445_19470[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (14)))
{var inst_19422 = (state_19429[(2)]);var inst_19423 = cljs.core.async.close_BANG_.call(null,out);var state_19429__$1 = (function (){var statearr_19447 = state_19429;(statearr_19447[(13)] = inst_19422);
return statearr_19447;
})();var statearr_19448_19471 = state_19429__$1;(statearr_19448_19471[(2)] = inst_19423);
(statearr_19448_19471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (10)))
{var inst_19412 = (state_19429[(2)]);var state_19429__$1 = state_19429;var statearr_19449_19472 = state_19429__$1;(statearr_19449_19472[(2)] = inst_19412);
(statearr_19449_19472[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19430 === (8)))
{var inst_19389 = (state_19429[(7)]);var inst_19397 = (state_19429[(10)]);var inst_19393 = (state_19429[(9)]);var inst_19402 = inst_19389.push(inst_19393);var tmp19446 = inst_19389;var inst_19389__$1 = tmp19446;var inst_19390 = inst_19397;var state_19429__$1 = (function (){var statearr_19450 = state_19429;(statearr_19450[(7)] = inst_19389__$1);
(statearr_19450[(14)] = inst_19402);
(statearr_19450[(8)] = inst_19390);
return statearr_19450;
})();var statearr_19451_19473 = state_19429__$1;(statearr_19451_19473[(2)] = null);
(statearr_19451_19473[(1)] = (2));
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
});})(c__11505__auto___19459,out))
;return ((function (switch__11490__auto__,c__11505__auto___19459,out){
return (function() {
var state_machine__11491__auto__ = null;
var state_machine__11491__auto____0 = (function (){var statearr_19455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19455[(0)] = state_machine__11491__auto__);
(statearr_19455[(1)] = (1));
return statearr_19455;
});
var state_machine__11491__auto____1 = (function (state_19429){while(true){
var ret_value__11492__auto__ = (function (){try{while(true){
var result__11493__auto__ = switch__11490__auto__.call(null,state_19429);if(cljs.core.keyword_identical_QMARK_.call(null,result__11493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__11493__auto__;
}
break;
}
}catch (e19456){if((e19456 instanceof Object))
{var ex__11494__auto__ = e19456;var statearr_19457_19474 = state_19429;(statearr_19457_19474[(5)] = ex__11494__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19456;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19475 = state_19429;
state_19429 = G__19475;
continue;
}
} else
{return ret_value__11492__auto__;
}
break;
}
});
state_machine__11491__auto__ = function(state_19429){
switch(arguments.length){
case 0:
return state_machine__11491__auto____0.call(this);
case 1:
return state_machine__11491__auto____1.call(this,state_19429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11491__auto____0;
state_machine__11491__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11491__auto____1;
return state_machine__11491__auto__;
})()
;})(switch__11490__auto__,c__11505__auto___19459,out))
})();var state__11507__auto__ = (function (){var statearr_19458 = f__11506__auto__.call(null);(statearr_19458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11505__auto___19459);
return statearr_19458;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11507__auto__);
});})(c__11505__auto___19459,out))
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