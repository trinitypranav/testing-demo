module.exports = function getCustomerFromMongoDB(customerId) {
  // assume this function connects to mongoDB and return data from there
  console.log("getting data from mongodb");
  return { id: customerId, points: 15 };
};
