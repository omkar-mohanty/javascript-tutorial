let o={
    last:"Mohanty",
    constructor:NewObj
}
function NewObj() {
    this.name="Omkar";
    this.constructor = NewObj;
}
NewObj.prototype=o;
let obj= new NewObj();
let obj2 = new obj.constructor();
console.log(obj2.name);