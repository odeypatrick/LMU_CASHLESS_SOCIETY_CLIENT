import SideNav from '../components/side-nav/SideNav'
import AppHeader from '../components/Header/Header'
import Withdraw from './components/Withdraw'
import Deposit from './components/Deposit'
import { useState, useEffect } from 'react'
import axios from 'axios'

import './Wallet.css'

const Wallet = () => {
    const [balance, setBalance] = useState(0.00)

    useEffect(() => {
      getBalance()
    }, [])

    const getBalance = () => {
      axios.get('http://localhost:5000/api/wallet/62724fade149ea59a7d1565f/balance')
      .then(res => setBalance(res.data))
      .catch(err => console.log(err))
    }

    const [currentTab, setCurrentTab] = useState('withdraw')

    return (
        <div className="dashboard">
            <div className="nav">
                <SideNav type={2}/>
            </div>
            <div className="display">
                <AppHeader page="Dashboard"/>
                <div className="body">
                    <div className="balance">
                        Balance
                        <h2>{balance}</h2>
                    </div>

                    <div className="tabs flex">
                        <div className="withdraw-tab" onClick={() => setCurrentTab('withdraw')}>
                            Withdraw
                        </div>

                        <div className="deposit-tab" onClick={() => setCurrentTab('deposit')}>
                            Deposit
                        </div>
                    </div>

                    <div className="section-display">
                        { currentTab == 'withdraw' ? <Withdraw/> :
                        <Deposit/> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
