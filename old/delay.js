function f(params) {
    console.log(params);
}

function delay(func,time) {
    function wrapper(...args){
        setTimeout(() => {
            func.apply(this,args);
        }, +time);
    }
    return wrapper;
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000(1,2,3,4); // shows "test" after 1000ms
f1500(1); // shows "test" after 1500ms