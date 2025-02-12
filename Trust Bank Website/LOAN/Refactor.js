

//extract Method

function ProductPriceCalculator(products,singleProductPrice,cost,discount){
    let totalProductPrice=products*singleProductPrice;
    let totalCost=cost;
    let lessCost=cost-discount;
    return lessCost;
}

console.log(ProductPriceCalculator(4,30,120,21));


function CalculateTotalProductsPrice(products,singleProductPrice){
    return products*singleProductPrice;
}

function CalculateTotalCost(cost,discount){
    return cost-discount;
}

function ProductPriceCalculator(){
    console.log(CalculateTotalCost(4,30)-CalculateTotalCost(120,21));
}



function getAreaBySqKm(length,width){
    return length*width/1000;
}


function getAreaBySqMeter(length,width){
    return length*width;
}

function getAreaBySqKm(){
    return getAreaBySqMeter(100,200)/1000;
}



class Address{
    constructor(city,state,country){
        this.city=city;
        this.state=state;
        this.country=country;
    }
}

class Person{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    getFullAddress(){
        return `${this.address.city},${this.address.state},${this.address.country}`;
    }
}

// const myAddress = new Address("123 Main St", "New York", "10001");
// const person = new Person("John Doe", myAddress);

// console.log(person.getFullAddress());




class Address{
    constructor(city,state,country){
        this.city=city;
        this.state=state;
        this.country=country;
    }

    getFullAddress(){
        return `${this.city},${this.state},${this.country}`;
    }
}

class Person{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
}

const myAddress = new Address("123 Main St", "New York", "10001");
const person = new Person("John Doe", myAddress);

console.log(myAddress.getFullAddress());



class User {
    constructor(name, age, email, phone) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }

    getUserInfo() {
        return `${this.name}, Age: ${this.age}`;
    }

    getContactDetails() {
        return `Email: ${this.email}, Phone: ${this.phone}`;
    }
}

// const user = new User("John Doe", 30, "john@example.com", "123-456-7890");

console.log(user.getUserInfo()); 
console.log(user.getContactDetails()); 


class ContactInfo {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }

    getContactDetails() {
        return `Email: ${this.email}, Phone: ${this.phone}`;
    }
}

class User {
    constructor(name, age, contactInfo) {
        this.name = name;
        this.age = age;
        this.contactInfo = contactInfo;
    }

    getUserInfo() {
        return `${this.name}, Age: ${this.age}`;
    }
}

const contact = new ContactInfo("john@example.com", "123-456-7890");
const user = new User("John Doe", 30, contact);

console.log(user.getUserInfo()); 
console.log(user.contactInfo.getContactDetails()); 



let x = "Saif Rahman";
console.log(x);


let fullName="Saif Rahman";
console.log(fullName);


// let age = 20;
// let isMember = true;

// if (age > 18 && isMember && new Date().getDay() !== 0) {
//     console.log("Discount applied!");
// }



let age = 20;
let isMember = true;
let isWeekend = new Date().getDay() === 0; 

let eligibleForDiscount = age > 18 && isMember && !isWeekend;

if (eligibleForDiscount) {
    console.log("Discount applied!");
}


function showUserInfo(user, isAdmin) {
  if (isAdmin) {
    console.log(`Admin: ${user.name}, Email: ${user.email}`);
  } else {
    console.log(`User: ${user.name}`);
  }
}

showUserInfo({ name: "Alice", email: "alice@example.com" }, true);
showUserInfo({ name: "Bob", email: "bob@example.com" }, false);



function showAdminInfo(user) {
  console.log(`Admin: ${user.name}, Email: ${user.email}`);
}

function showUserInfo(user) {
  console.log(`User: ${user.name}`);
}


showAdminInfo({ name: "Alice", email: "alice@example.com" });
showUserInfo({ name: "Bob", email: "bob@example.com" });



function calculateShippingCost(type, weight) {
  if (type === "standard") {
    return weight * 5;
  } else if (type === "express") {
    return weight * 10;
  } else if (type === "overnight") {
    return weight * 20;
  } else {
    throw new Error("Invalid shipping type");
  }
}

console.log(calculateShippingCost("express", 2)); 
console.log(calculateShippingCost("overnight", 3)); 



class Shipping {
  calculate(weight) {
    throw new Error("Method not implemented");
  }
}

class StandardShipping extends Shipping {
  calculate(weight) {
    return weight * 5;
  }
}

class ExpressShipping extends Shipping {
  calculate(weight) {
    return weight * 10;
  }
}

class OvernightShipping extends Shipping {
  calculate(weight) {
    return weight * 20;
  }
}

function getShippingMethod(type) {
  switch (type) {
    case "standard":
      return new StandardShipping();
    case "express":
      return new ExpressShipping();
    case "overnight":
      return new OvernightShipping();
  }
}

const shippingMethod = getShippingMethod("express");
console.log(shippingMethod.calculate(2)); 

const overnight = getShippingMethod("overnight");
console.log(overnight.calculate(3)); 

