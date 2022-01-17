let f = debounce(console.log, 1000);

f("a");
setTimeout( () => f("b"), 200);
setTimeout( () => f("c"), 500);

function debounce(func,time) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout= setTimeout(() =>func.apply(this,args), time);
    }
}