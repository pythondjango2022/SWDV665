var Grocery = /** @class */ (function () {
    function Grocery(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.groceryItem = name + " " + qty + " " + price;
    }
    return Grocery;
}());
function groceries(item) {
    return "Item Name: " + item.name + ", Item Qty " + item.qty + ", Item Price " + item.price;
}
var item1 = new Grocery("Milk", 1, 3.99);
var item2 = new Grocery("Bread", 1, 2.99);
var item3 = new Grocery("Cereal", 1, 2.99);
document.body.innerHTML = groceries(item1);
