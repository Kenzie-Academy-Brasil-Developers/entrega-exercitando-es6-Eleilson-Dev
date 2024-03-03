console.log('========================index Tarefa 1 ========================');
import { productsList } from './database.js';

const calculateTotalCost = (customerName, products, discount = 0) => {
  let msg;
  discount === 0
    ? (msg = '(sem desconto)')
    : (msg = `(${discount}% de desconto)`);

  let total = products
    .map((element) => {
      return element.price * element.quantity;
    })
    .reduce((acm, current) => {
      return acm + current;
    }, 0);

  const discounted = (total * discount) / 100;
  const totalDisconted = (total - discounted).toFixed(2);

  return `Olá, ${customerName} o total da sua compra é R$ ${totalDisconted} ${msg}.`;
};

console.log(calculateTotalCost('João', productsList, 15));
