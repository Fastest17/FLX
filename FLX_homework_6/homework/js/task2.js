var price = parseFloat(prompt("Enter amount of money"));
var discount = parseFloat(prompt("Enter the discount"));

if (price >= 0 && price <= 9999999 && discount >= 0 && discount <= 99){
       calc(price, discount);
} else {
    alert("Invalid input data");
}

function calc(price, discount) {
    var priceWithDiscount = price - price * discount / 100;
    var saved = price - priceWithDiscount;
    alert("Prise without discount: " + +price.toFixed(2) +
        "\nDiscount: " + +discount.toFixed(2) +
        "% \nPrice with discount: " + +priceWithDiscount.toFixed(2) +
        "\nSaved: " + +saved.toFixed(2));
}