import { useState } from "react"

const Deposit = () => {
    const [formData, setFormData] = useState({
        amount: "",
        pin: ""
    })

    return (
        <div className="withdraw-page">
            <div className="form with-form">
                <div>
                    <label>Amount</label>
                    <div>
                        <input type="text" placeholder="Type your withdraw amount" value={formData.amount} onChange={e => setFormData({ amount: e.target.value })}/>
                    </div>
                </div>
                <div>
                    <label>Wallet pin</label>
                    <div>
                        <input type="text" placeholder="Type your wallet pin" value={formData.pin} onChange={e => setFormData({ pin: e.target.value })}/>
                    </div>
                </div>
                <div>
                    <button>Withdraw { formData.amount > 0 ? <span>({formData.amount})</span> : null }</button>
                </div>
            </div>
        </div>
    )
}

export default Deposit
