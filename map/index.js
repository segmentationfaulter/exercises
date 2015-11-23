'use strict';
function map(arr, callback, context) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    // mapped.push(callback(arr[i], i, arr));
    mapped.push(callback.call(context, arr[i], i, arr));
  }
  return mapped;
}

module.exports = map;
