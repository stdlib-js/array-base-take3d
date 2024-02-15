// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.2.0-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-take2d@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function t(t,i,d,m){var a,o,h,l,f,j;if(-1===(h=e(d,2)))throw new RangeError(n("invalid argument. Third argument exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",3,d));if(o=[],0===h){for(l=r(m),a=t.length-1,j=0;j<i.length;j++)f=l(i[j],a),o.push(t[f]);return o}for(h=d-1,j=0;j<t.length;j++)o.push(s(t[j],i,h,m));return o}export{t as default};
//# sourceMappingURL=index.mjs.map