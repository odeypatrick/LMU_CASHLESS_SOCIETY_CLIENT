import '../Auth.css'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [regNumber, setRegNumber] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', {
            regNumber,
            password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="signup-page">
            <div className="form">
                <h1>Login</h1>

                <form>
                    <div>
                        <label>Reg number</label>
                        <div>
                            <input type="text" placeholder="Type your registration number" onChange={e => setRegNumber(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input type="password" placeholder="Type your password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="btn-spot">
                        <button className="submit-btn" onClick={loginUser}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
