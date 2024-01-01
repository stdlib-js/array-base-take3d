<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# take3d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from a three-dimensional nested array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-take3d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var take3d = require( '@stdlib/array-base-take3d' );
```

#### take3d( x, indices, dimension, mode )

Takes elements along a specified `dimension` from a three-dimensional nested array according to a specified [index `mode`][@stdlib/ndarray/index-modes].

```javascript
var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
var indices = [ 1, 1, 0, 0, -1, -1 ];

var y = take3d( x, indices, 2, 'normalize' );
// returns [ [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ] ]
```

The function accepts the following arguments:

-   **x**: input nested array.
-   **indices**: list of indices.
-   **dimension**: dimension along which to take elements. If provided a negative integer, the dimension is resolved relative to the last dimension, with the last dimension being `-1`.
-   **mode**: [index mode][@stdlib/ndarray/index-modes] specifying how to handle an index which is out-of-bounds.

If `indices` is an empty array, the function returns empty arrays along the specified `dimension`.

```javascript
var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];

var y = take3d( x, [], 0, 'throw' );
// returns []

var z = take3d( x, [], 1, 'throw' );
// returns [ [] ]

var w = take3d( x, [], 2, 'throw' );
// returns [ [ [], [] ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** deep copy nested array elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filled3dBy = require( '@stdlib/array-base-filled3d-by' );
var filledBy = require( '@stdlib/array-base-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var take3d = require( '@stdlib/array-base-take3d' );

// Generate a random array:
var shape = [ 3, 3, 3 ];
var x = filled3dBy( shape, discreteUniform.factory( 0, 100 ) );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 1, 5 );
var indices = filledBy( N, discreteUniform.factory( 0, shape[2]-1 ) );
console.log( indices );

// Take a random sample of elements from `x`:
var y = take3d( x, indices, 2, 'throw' );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-take3d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-take3d

[test-image]: https://github.com/stdlib-js/array-base-take3d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-take3d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-take3d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-take3d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-take3d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-take3d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-take3d/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-take3d/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-take3d/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-take3d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-take3d/main/LICENSE

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray-index-modes

</section>

<!-- /.links -->