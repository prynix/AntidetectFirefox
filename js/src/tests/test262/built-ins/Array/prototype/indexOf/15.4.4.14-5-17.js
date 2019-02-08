// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-17
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing -Infinity
---*/

assert.sameValue([true].indexOf(true, "-Infinity"), 0, '[true].indexOf(true, "-Infinity")');

reportCompare(0, 0);