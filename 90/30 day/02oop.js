class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }
  createCart() {
    return new Cart(this);
  }
}

class CartItem {
  constructor(book, quantity) {
    this.book = book;
    this.quantity = quantity;
  }
}

class Cart {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addItem(book, quantity) {
    const item = new CartItem(book, quantity);
    this.items.push(item);
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
    total += item.book.price * item.quantity;
  }
  return total;
  }

  getSummary() {
    let summary = ""
    for (const item of this.items) {
        summary += `${item.quantity}x ${item.book.title}, `
    }
    summary = summary.slice(0, -2);
    return `${this.customer.name}'s Cart: ${summary}. Total $${this.getTotal()}`
   }
}

class Store {
  constructor(storeName) {
    this.storeName = storeName;
    this.inventory = [];
  }
  addBook(book) {
     this.inventory.push(book);
  }
  showInventory() {
    const titles = this.inventory.map(b => b.title).join(', ');
    console.log(`Inventory of ${this.storeName}: ${titles}`);
  }
}

// TEST CASE
const book1 = new Book("Clean Code", "Robert C. Martin", 300);
const book2 = new Book("The Pragmatic Programmer", "Andrew Hunt", 250);

const alya = new Customer("Alya");

const alyaCart = alya.createCart();
alyaCart.addItem(book1, 2); // beli 2 Clean Code
alyaCart.addItem(book2, 1); // beli 1 Pragmatic Programmer

console.log(alyaCart.getTotal()); // expected: 850
console.log(alyaCart.getSummary());
// expected output (bebas gaya penulisan asal isi sama):
// "Alya's Cart: 2x Clean Code, 1x The Pragmatic Programmer. Total: $850"

const store = new Store("BookVerse");
store.addBook(book1);
store.addBook(book2);
store.showInventory();
// expected:
// "Inventory of BookVerse: Clean Code, The Pragmatic Programmer"
