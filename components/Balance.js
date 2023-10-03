import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) 
{
    // decimal vale fixed to 2
    let p = num.toFixed(2).split('.');
    
    return (
      '$ ' 
      + 
      (p[0].split('')[0]=== '-' ? '-' : '') 
      + 
      p[0].split('')
          .reverse()
          .reduce(function (acc, num, i) {
            return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
          }, '') 
      +
      '.' 
      +
      p[1]
    );
}

export const Balance = () => {

  // use transactions using Context
  const { transactions } = useContext(GlobalContext);

  // map all amounts
  const amounts = transactions.map(transaction => transaction.amount);

  // sum all the amount
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1> {moneyFormatter(total)} </h1>
    </>
  )
}
