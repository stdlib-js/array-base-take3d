// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.1-esm/index.mjs";import{factory as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take2d@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function n(n,d,i,m){var o,a,h,l,j,p;if(-1===(h=r(i,2)))throw new RangeError(t("1mTFD",3,i));if(a=[],0===h){for(l=e(m),o=n.length-1,p=0;p<d.length;p++)j=l(d[p],o),a.push(n[j]);return a}for(h=i-1,p=0;p<n.length;p++)a.push(s(n[p],d,h,m));return a}export{n as default};
//# sourceMappingURL=index.mjs.map
