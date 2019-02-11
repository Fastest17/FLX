function pipe(n) {
    for (let i = 1; i < arguments.length; i++){
        let funcArguments = arguments[i](n);
        n = funcArguments;
    }
    return n;
}
function addOne(x) {
    return x+1;
}
pipe(5, addOne, addOne);