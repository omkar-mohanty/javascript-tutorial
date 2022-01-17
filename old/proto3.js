function f() {
    console.log("Hello!");
  }
Function.prototype.defer= function(time) {
    setTimeout(f, time);
}
f.defer(1000); 