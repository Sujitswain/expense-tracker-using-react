import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }) => {

  // use delete transaction from Context
  const { deleteTransaction } = useContext(GlobalContext);

  // if it is negative add a '-'
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className = {transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} 

      <span>
        {sign}
        {moneyFormatter(transaction.amount)}
      </span>
      
      <button
        className="delete-btn" 
        onClick={() => deleteTransaction(transaction.id)} 
      >
          x
      </button>
    
    </li>
  )
}
