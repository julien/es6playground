'use strict';

const assert = require('assert');

class Person {
  constructor(name) {
    this.name = name
  }
  say(message) {
    return `${this.name} says ${message}`
  }
}

describe('Classes', () => {

  it('definition', () => {


    let p = new Person('the dude');

    assert.deepEqual(p.say('hello'), 'the dude says hello');
  });

});
