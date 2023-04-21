import Currency from '../3-currency.js';

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

const naira = new Currency('', 'Naira');
naira.code = '#';
console.log(naira.displayFullCurrency());
console.log(typeof naira);
