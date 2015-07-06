const assert = require('assert');

describe('Classes', () => {

  it('definition', () => {
    class Person {
      constructor(name) {
        this.name = name
      }
      say(message) {
        return `${this.name} says ${message}`
      }
    }

    let p = new Person('the dude');

    assert.deepEqual(p.say('hello'), 'the dude says hello');
  });

});
