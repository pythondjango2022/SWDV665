class Grocery {
    groceryItem: string;
    constructor(
      public name: string,
      public qty: number,
      public price: number
    ) {
      this.groceryItem = name + " " + qty + " " + price;
    }
  }
   
  interface Item {
    name: string;
    qty: number;
    price: number;
  }
   
  function groceries(item: Item) {
    return "Item Name: " + item.name + ", Item Qty " + item.qty + ", Item Price " + item.price;
  }
   
  let item1 = new Grocery("Milk", 1, 3.99);
  let item2 = new Grocery("Bread", 1, 2.99);
  let item3 = new Grocery("Cereal", 1, 2.99);
   
  document.body.innerHTML = groceries(item1)
  