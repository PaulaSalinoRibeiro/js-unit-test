const arr = [];
const orderFromMenu = (str) => {
  arr.push(str);
  return str;
};

const createMenu = (obj) => {
  const restaurant = {
    fetchMenu: () => obj,
    consumption: arr,
    order: orderFromMenu,
    pay: () => {
      const foods = arr.reduce((acc, elem) => {
        if (elem === 'coxinha') {
          acc += 3.90;
          return acc;
        }
        return acc;
      }, 0);

      const drinks = arr.reduce((acc, elem) => {
        if (elem === 'agua') {
          acc += 3.90;
          return acc;
        }
        return acc;
      }, 0);
      const consumption = foods + drinks + (foods + drinks) * 0.10;
      return consumption;
    },
  };
  return restaurant; 
};

module.exports = { createMenu };
