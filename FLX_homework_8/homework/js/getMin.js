function getMin() {
    let minValue = arguments[0];
    let i;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] < minValue){
            minValue = arguments[i];
        }
    }
    return minValue
}
getMin(3,0,-3);
