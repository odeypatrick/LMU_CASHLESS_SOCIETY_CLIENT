import '../Auth.css'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name, setName] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const signup = (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            axios.post('http://localhost:5000/api/signup', {
                name,
                email,
                regNumber,
                password,
                role: 0
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data.msg))
        } else {
            console.log('Password do not match, please retype')
        }
    }

    return (
        <div className="signup-page">
            <div className="form">
                <h1>Signup</h1>

                <form>
                    <div>
                        <label>Fullname</label>
                        <div>
                            <input type="text" placeholder="Type your fullname" onChange={e => setName(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <input type="email" placeholder="Type your email" onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>
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
                    <div>
                        <label>Confirm password</label>
                        <div>
                            <input type="password" placeholder="Retype your password" onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="btn-spot">
                        <button className="submit-btn" onClick={signup}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
