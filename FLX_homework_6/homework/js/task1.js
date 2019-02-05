var a = parseFloat(prompt("Enter value 'a'"));
var b = prompt("Enter value 'b'");
var c = prompt("Enter value 'c'");

if (a === 0 || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Invalid input data");
} else {
    calc(a, b, c);
}
function calc(a, b, c) {
    var D = b * b - 4 * a * c;
    var x1,x2;
    if(D > 0){
        x1 = (-b + Math.sqrt(D))/(2 * a);
        x2 = (-b - Math.sqrt(D))/(2 * a);
        alert("x1 = "+ +x1.toFixed(2) +", x2 = "+ +x2.toFixed(2));
    } else if(D === 0){
        x1 = -b/(2*a);
        alert("x = "+ +x1.toFixed(2))
    } else {
        alert("no solution");
    }
}