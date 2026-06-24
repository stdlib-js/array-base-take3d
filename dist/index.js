"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var h=l(function(b,f){
var m=require('@stdlib/ndarray-base-normalize-index/dist'),g=require('@stdlib/ndarray-base-ind/dist').factory,q=require('@stdlib/array-base-take2d/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),s=3;function p(a,r,t,i){var o,n,u,v,d,e;if(u=m(t,s-1),u===-1)throw new RangeError(c('1mTFD',s,t));if(n=[],u===0){for(v=g(i),o=a.length-1,e=0;e<r.length;e++)d=v(r[e],o),n.push(a[d]);return n}for(u=t-1,e=0;e<a.length;e++)n.push(q(a[e],r,u,i));return n}f.exports=p
});var x=h();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
