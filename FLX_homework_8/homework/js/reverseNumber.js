function reverseNumber(n) {
    const reverse = n.toString().split("").reverse().join("");
    return Math.sign(n) * parseInt(reverse);

}
reverseNumber(-456);