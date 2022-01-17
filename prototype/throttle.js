function f(a) {
    console.log(a);
  }
  
  // f1000 passes calls to f at maximum once per 1000 ms
  let f1000 = throttle(f, 10000);
  
  f1000(1); // shows 1
  f1000(2); // (throttling, 1000ms not out yet)
  f1000(3); // (throttling, 1000ms not out yet)
  
  // when 1000 ms time out...
  // ...outputs 3, intermediate value 2 was ignored
function throttle(func,time) {
    let timeout;
    let isThrottled=false;
    let latestArgs;
    return function(...args) {
        if(!isThrottled){
            latestArgs=args;
            isThrottled=true;
            return func.apply(this,latestArgs);
        }
        else{
        clearInterval(timeout);
        latestArgs=args;
        }
        timeout= setInterval(() =>func.apply(this,latestArgs), time);
    }
}