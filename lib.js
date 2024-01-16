const db = require("./db");
const mail = require("./mail");

//Testing numbers
module.exports.absolute = function (number) {
  if (number > 0) return number;
  if (number < 0) return -number;
  return 0;
};

//Testing strings
module.exports.greet = function (name) {
  return "Welcome " + name;
};

//Testing arrays
module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

//Testing objects
module.exports.getProduct = function (productId) {
  return {
    id: productId,
    price: 10,
  };
};

//Testing exceptions
module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required");

  return { id: new Date().getTime(), username: username };
};

// apply discount if user in db has 10+ points
module.exports.applyDiscount = function (order) {
  //order = {customerId:1,price:100}

  // we will need to mock getCustomerFromMongoDB in our tests because, in unit tests, we test each component in isolation
  // if we make call to mongodb to get the user, it is an integration test
  const customer = db.getCustomerFromMongoDB(order.customerId);
  if (customer.points > 10) {
    order.price = order.price * 0.9;
  }
};

// notify customer with some message
module.exports.notifyCustomer = function (customer) {
  const customerObject = db.getCustomerFromMongoDB(customer.customerId);
  mail.send(customerObject.emailId, "order has been delivered");
};
