const assert = require('assert');

describe('Objects', () => {

  it('simplified litterals', () => {
    let [name, age] = ['the dude', 18];
    let obj = {name, age};

    assert.deepEqual(obj.name, 'the dude');
    assert.deepEqual(obj.age, 18);
  });

  it('object functions', () => {
    let obj =  {
      name: 'the dude',
      say: function (message) {
        var name = this.name;
        return `${name} says ${message}`;
      },
      nickname: () => obj.name.replace(/\s/g, '_').toUpperCase()
    };

    assert.deepEqual(obj.say('hi'), 'the dude says hi');
    assert.deepEqual(obj.nickname(), 'THE_DUDE');
  });

  it('computed properties', () => {
    let now = Date.now();
    let obj =  {
      ['tick-' + now]: now
    };

    assert.deepEqual(obj[`tick-${now}`], now);
  });
});
