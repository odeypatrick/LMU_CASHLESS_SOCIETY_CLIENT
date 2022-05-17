import Header from '../components/Header/Header'
import { useState, useEffect } from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";


const Pay = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [amount, setAmount] = useState('')
    const [data, setData] = useState("Not Found");
    const [torchOn, setTorchOn] = useState(false);

    useEffect(() => {
        setError('')
    }, [])

    const makePayment = async () => {
        try {
            
        } 
        catch (error) {

        }
    }

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
                                setSuccess(true)
                            }
                            else {
                                setData("Not Found")
                                // setError("Not recognised")
                            };
                        }}
                    />
                    <p>{data}</p>
                    <button class="torchBtn button" onClick={() => setTorchOn(!torchOn)}>
                        Switch Torch {torchOn ? "Off" : "On"}
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pay
