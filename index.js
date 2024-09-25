// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  const leastFavoriteCustomer = 'initial customer';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer'; // This will throw an error because it's a constant
}