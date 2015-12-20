'use strict';
const assert = require('assert');

describe('Strings', () => {

  it('should support templates', () => {

    let printPizza = (name, ingredients) => {
      var output = `Pizza - ${name}: `;
      var i = 0;
      var l = ingredients.length;
      for ( ; i < l; i++) {
        output += ingredients[i];
        if (i < l - 1) {
          output += ', ';
        }
      }
      return output;
    }
    assert.deepEqual(printPizza('simple', ['tomatoe', 'cheese']),
                     'Pizza - simple: tomatoe, cheese');
  });

});
