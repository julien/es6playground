'use strict';
const assert = require('assert');

describe('Destructuring', () => {

  it('should support arrays', () => {
    let fruit = ['apple', 'banana', 'cherry'];
    let [apple, banana] = fruit;

    assert.deepEqual(apple, 'apple');
    assert.deepEqual(banana, 'banana');
  });

  it('should support objects', () => {
    function createVehicle(brand, model, color) {
      return {brand, model, color};
    }

    let {brand: b, model: m, color: c} = createVehicle('Ford', 'Mustang', 'Black');

    assert.deepEqual(b, 'Ford');
    assert.deepEqual(m, 'Mustang');
    assert.deepEqual(c, 'Black');
  });

  it('should do something elese', () => {
    function searchVehicle({brand: brand, model: model, color: color}) {
      return `Searching for: ${brand} - ${model} - ${color}`;
    }
    let result = searchVehicle({brand: 'Ferrari', model: 'F40', color: 'Red'});
    assert.deepEqual(result, 'Searching for: Ferrari - F40 - Red');
  });

});
