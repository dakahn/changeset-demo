"use strict";

function add(...numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
}

module.exports = add;
