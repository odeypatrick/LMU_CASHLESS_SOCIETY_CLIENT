import Header from '../components/Header/Header'
import { useState, useEffect } from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import SweetAlert2 from 'react-sweetalert2';
import './Pay.css'
import axios from 'axios'


const Pay = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [amount, setAmount] = useState('')
    const [data, setData] = useState("Null");
    const [torchOn, setTorchOn] = useState(false);
    // const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        setError('')
    }, [])

    // const makePayment = async () => {
    //     try {
            
    //     } 
    //     catch (error) {

    //     }
    // }

    return (
        <>
        <Header/>
        <div className="wrapper">
        <h1>Make Payment</h1>
            <div className="form flex">
                <div>
                    <div className="steps">
                        <p>
                            <small>Steps 1: Enter amount</small>
                        </p>
                        <p>
                            <small>Step 2: Scan QR Code to complete payment</small>
                        </p>
                    </div>
                    { success ?
                        <div className="success-msg flex">
                            <span>Payment completed successfully</span>
                            <span className="close-btn" onClick={() => setSuccess(false)}>&times;</span>
                        </div> : null
                    }
                    { error ?  
                        <div className="error-msg flex">
                            <span>{error}</span>
                            <span className="close-btn" onClick={e => setError('')}>&times;</span>
                        </div> : null
                    }
                    {/* <SweetAlert2 {...swalProps}/> */}
                    <form>
                        <div>
                            <label>Total amount</label>
                            <div>
                                <input type="text" value={amount} placeholder="Enter total amount..." onChange={e => setAmount(e.target.value)}/>
                            </div>
                        </div>
                        <div className="amount-display">
                            ₦{amount ? amount : '0  '}.00
                        </div>
                    </form>
                </div>

                <div className="barcode-scanner">
                    <BarcodeScannerComponent
                        width={250}
                        height={250}
                        torch={torchOn}
                        onUpdate={(err, result) => {
                            if (result) {
                                setData(result.text)
                                axios.get(`http://localhost:5000/api/card/${result.text}`)
                                .then(res => {
                                    console.log(res.data)
                                    setSuccess(true)
                                })
                                .catch(err => console.log(err))
                            }
                            else {
                                setData("Null")
                                // setError("Not recognised")
                            };
                        }}
                    />
                    <p>Reg Number: {data}</p>
                    <button className="torchBtn button" onClick={() => setTorchOn(!torchOn)}>
                        Switch Torch {torchOn ? "Off" : "On"}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pay
