const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let i=0; i < domains.length; i++) {
   let domain = domains[i].split('.').reverse(); //делим элементы на массив
   for (let j=0; j < domain.length; j++) {
    let separateDomain = domain.slice(0, j + 1).join('.'); //элементы разделяем на составные части
      separateDomain.concat(['.', separateDomain]); 
      separateDomain = '.' + separateDomain; // добавляем точку в начало
      if (result[separateDomain]) result[separateDomain]++; //считаем домены
      else result[separateDomain] = 1;
   }
  }
 return result;
}

module.exports = {
  getDNSStats
};
