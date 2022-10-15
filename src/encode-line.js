const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let value = '';
    count = 1;
  for (let i=0; i < str.length; i++) {
  if (str[i] === str[i+1]) {
    count +=1;
  }
    else {
      value += count + str[i];
      count = 1; //счётчик возвращаем к начальному значению
    }
  console.log(value); 
  }
     return value.replace(/1/g, ''); //заменяем все единицы на ''
  }

module.exports = {
  encodeLine
};
