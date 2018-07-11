const  Guidify=require('../app');
const assert=require('assert');
suite('\033[36m Yaratıcı test \033[90m', () =>{
    test('uniqueTest', (done)=> {
      var guid = Guidify;
      assert.equal(typeof(guid), 'string', 'Should return a string' );
      assert.equal(guid.length, 20, 'Should return a string with length 20' );
      done();
      
    });
  });