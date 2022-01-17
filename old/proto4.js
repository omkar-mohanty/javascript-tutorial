function f(a, b) {
    console.log( a + b );
  }
Function.prototype.defer = function(time) {
    return (...args)=>{
        setTimeout(()=>this.apply(this,args), time);
    }
}
  f.defer(1000)(1, 2);