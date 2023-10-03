import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => 
{
    const [formData, setFormData] = useState(
      {
        id: Math.floor(Math.random() * 100000000),
        text : "",
        amount : 0
      }
    );

    // using Global Context
    const { addTransaction } = useContext(GlobalContext);

    // updates the value when input is given
    const handleChange = event =>
    {
      const {name, value, type} = event.target
      
      setFormData(prevData => {
        return ({
            ...prevData,
            [name] : type === "number" ? +value : value
        });
      })
    
    }

    // when button is clicked
    const onSubmit = e => 
    {
      e.preventDefault();
      
      // save the list of data using AppReducer
      addTransaction(formData);
    }

  return (
    <>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        
        <div className="form-control">
          
          <label htmlFor="text">Text</label>
          
          <input 
            type="text" 
            placeholder="Enter text..."

            name="text"
            value={formData.text} 
            onChange={handleChange}  
          />
        
        </div>

        <div className="form-control">
          
          <label htmlFor="amount">
            Amount 
            <br />
            (negative - expense, positive - income)
          </label>
          
          <input 
            type="number" 
            placeholder="Enter amount..." 

            name="amount"
            value={formData.amount} 
            onChange={handleChange} 
            
          />
        
        </div>

        <button className="btn">Add transaction</button>

      </form>
    </>
  );
}
