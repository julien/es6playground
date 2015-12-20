'use strict';
const assert = require('assert');

describe('Arrow functions', () => {

  it('should have type function type', () => {
    let mul = (a, b) => a * b;
    assert.deepEqual(typeof mul, 'function');
  });

  it('should multiply two numbers', () => {
    let mul = (a, b) => a * b;
    assert.deepEqual(mul(2, 2), 4);
  });

  it('should work with objects too', () => {
    let obj = {
      name: 'the dude',
      printName() {
        return `Hi, my name is ${this.name}`;
      }
    };
    assert.deepEqual(obj.printName(), 'Hi, my name is the dude');
  });

  it('default args', () => {

    let log = (message, level='DEBUG') => `${level}: ${message}`

    assert.deepEqual(log('debug message'), 'DEBUG: debug message');
    assert.deepEqual(log('info message', 'INFO'), 'INFO: info message');
  });

  it('rest params', () => {

    let log = (msg, level='DEBUG', ...args) => `${level.toUpperCase()}: ${msg} [${args}]`;

    assert.deepEqual(log('debug message'), 'DEBUG: debug message []');
    assert.deepEqual(log('info message', 'INFO', 'foo'), 'INFO: info message [foo]');
    assert.deepEqual(log('warning message', 'WARNING', 'foo', 'bar'), 'WARNING: warning message [foo,bar]');

  });

  it('more rest params', () => {

    let add = function (...values) {
      var sum1 = 0;

      for (let val of values) {
        sum1 += val;
      }

      return function (...values) {
        let sum2 = sum1;
        for (let val of values) {
          sum2 += val;
        }
        return sum2;
      };
    };

    assert.deepEqual(add(1)(1), 2);
    assert.deepEqual(add(2)(3, 5), 10);

  })
});
