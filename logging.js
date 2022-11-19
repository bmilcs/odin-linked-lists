//
// Console Logging Functions
//

const methodDescription = (string, linkedList) => {
  console.warn(`\n# ${string}`);
  console.log(`- before: ${linkedList.toString()}`);
};

const listAfterMethod = (linkedList) => {
  console.log(`- after:  ${linkedList.toString()}`);
};

const methodReturnVal = (description, callback) => {
  console.log(`- ${description}: ${callback}`);
};

module.exports = {
  methodDescription,
  listAfterMethod,
  methodReturnVal,
};
