import { useState, useEffect } from "react"
import axios from 'axios'

const History = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/api/transactions/62724fade149ea59a7d1565f')
        .then(res => {
            setTransactions(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    const [transactions, setTransactions] = useState([])

    return (
        <div className="trans-history">
            <h3>Transaction history</h3>
            <div className="records">
            {  transactions.map(transaction => 
                <a href="#" className="record flex">
                    <div className="flex">
                        <i className="fa fa-copy" style={{fontSize: '20px', marginRight: '10px', color: '#59C9A5' }}></i> 
                        <div>
                            <div>Deposit</div>
                            <div className="price"><b>₦{transaction.amount}</b></div>
                        </div>
                    </div>
                    <div className="date">
                        <span>{new Date(transaction.createdAt).getDate()}/{new Date(transaction.createdAt).getMonth()+ 1}/{new Date(transaction.createdAt).getFullYear()}</span>
                        <span className="time">{new Date(transaction.createdAt).toLocaleTimeString()}</span>
                    </div>
                </a>
            )}
            </div>
        </div>
    )
}

export default History
