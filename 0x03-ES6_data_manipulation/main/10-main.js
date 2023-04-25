import updateUniqueItems from '../10-update_uniq_items.js';
import groceriesList from '../9-groceries_list.js';

const map = groceriesList();
const map2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(map);

updateUniqueItems(map);
console.log(map);

updateUniqueItems(map2);
// console.log(map2);
