import React, { useEffect, useState } from 'react'
import './expense.css'

function Expense() {

    const [inputlist, setInputlist] = useState("")
    const [amount, setAmount] = useState("")
    const [items, setItems] = useState([])
    

    const addtransaction = () => {
        setItems((olditems) => {
            return [...olditems, { inputlist, amount }]
        });
    }

    const delitem = (index) => {
        // console.log("delete item",index)
        const remove = items.filter((itemval, i) =>
            i != index)
        setItems(remove)
    }

    return (
        <div className='container'>
            <h2>EXPENSE TRACKER</h2>
            <h1>TOTAL:
                <span className='text-success'>
                ₹{' '}
                    {items.reduce((accumulator, currentValue) => {
                        return (accumulator += parseInt(currentValue.amount))
                    }, 0)}
                </span>
            </h1>
            <form onSubmit={(e) => e.preventDefault()}>
                Name of Expense:<input type='text' value={inputlist} onChange={(e) => setInputlist(e.target.value)}></input><br></br>
                Expense Amount:<input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}></input><br></br>
                <button onClick={addtransaction}>ADD Expense</button>
            </form>
            <br></br>
            {/* <>{inputlist} {amount}</> */}
            <table style={{ borderCollapse: "collapse" ,marginLeft:"20px"}}>
                <tr>
                    <td>NAME</td>
                    <td>Amount</td>
                    <td>Action</td>
                </tr>
                {items.map((itemval, index) => (

                    <tr key={index}>
                        <td>{itemval.inputlist}</td>
                        <td>₹{itemval.amount}</td>
                        <td onClick={()=>delitem(index)} style={{cursor:"pointer"}}>&times;</td>
                    </tr>
                ))}

            </table>
           
        </div>
    )
}

export default Expense
