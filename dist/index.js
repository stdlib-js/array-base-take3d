"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var h=l(function(b,f){
var m=require('@stdlib/ndarray-base-normalize-index/dist'),g=require('@stdlib/ndarray-base-ind/dist').factory,q=require('@stdlib/array-base-take2d/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),s=3;function p(a,r,u,i){var o,t,n,v,d,e;if(n=m(u,s-1),n===-1)throw new RangeError(c('nullFD',s,u));if(t=[],n===0){for(v=g(i),o=a.length-1,e=0;e<r.length;e++)d=v(r[e],o),t.push(a[d]);return t}for(n=u-1,e=0;e<a.length;e++)t.push(q(a[e],r,n,i));return t}f.exports=p
});var x=h();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
