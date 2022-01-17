function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }
  function spy(func) {
    let mp= new Map();
    function wrapper(...args) {
      let key = hash(args);
  
      if(mp.has(key)){
        return mp.get(key);
      }
      wrapper.calls.push(args);
      let result = func.apply(this,args);
      mp.set(key,result);
      return result;
    }
    wrapper.calls=[];
    return wrapper;
  }
  
  function hash(args){
    return ([].join.call(args))
  }