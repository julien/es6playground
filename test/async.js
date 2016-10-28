const assert = require('assert');

function wait(ms, ...arg) {
  return new Promise(r => setTimeout(r, ms, arg));
}

async function testWait(ms, ...arg) {
  return await wait(ms, arg);
}

async function reject(msg) {
  return new Promise((r, e) => e(new Error(msg)));
}

async function testReject(msg) {
    return await reject(msg);
}


describe('async functions', () => {

  it('should wait before resolving', (done) => {
    testWait(300, [1, 2, 3]).then((v) => {
        assert.deepEqual(v[0], [1, 2, 3]);
        done();
      }).catch((err) => {
        done();
      });
  });

  it('should also reject', (done) => {
    testReject('rejected').catch((err) => {
      assert.deepEqual(err.message, 'rejected');
      done();
    });
  });

});
