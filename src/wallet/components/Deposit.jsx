import { useState } from "react"
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import axios from 'axios'

const Deposit = () => {
    const [formData, setFormData] = useState({
        amount: 2000,
    })

    const config = {
        public_key: 'FLWPUBK_TEST-58d504e919c151e90f97a8640a981ae2-X',
        tx_ref: Date.now(),
        amount: formData.amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'patrickjoseph2121@gmail.com',
          phonenumber: '08021302662',
          name: 'Patrick Joseph',
        },
        customizations: {
          title: 'LMU Cashless Pay',
          description: 'Deposit money in wallet',
          logo: 'https://pngimg.com/uploads/money/money_PNG3523.png',
        },
      };


      const fwConfig = {
        ...config,
        text: 'Pay with Flutterwave!',
        callback: (response) => {
           axios.get(`http://localhost:5000/api/response/${response.transaction_id}`)
           .then(res => {
               console.log(res.data)
           })
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
            alert("Trasaction closed")
        },
      };

      

    return (
        <div className="deposit-page">
            <input type="text" placeholder="Deposit amount" value={formData.amount} onChange={e => setFormData({ amount: e.target.value })}/>
            
            <FlutterWaveButton {...fwConfig} className="deposit-btn"/>
        </div>
    )
}

export default Deposit
