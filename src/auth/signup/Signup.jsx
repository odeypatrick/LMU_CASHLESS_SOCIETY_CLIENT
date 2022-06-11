import '../Auth.css'

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="form">
                <h1>Signup</h1>

                <form>
                    <div>
                        <label>Fullname</label>
                        <div>
                            <input type="text" placeholder="Type your fullname"/>
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <input type="email" placeholder="Type your email"/>
                        </div>
                    </div>
                    <div>
                        <label>Reg number</label>
                        <div>
                            <input type="text" placeholder="Type your registration number"/>
                        </div>
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input type="password" placeholder="Type your password"/>
                        </div>
                    </div>
                    <div>
                        <label>Confirm password</label>
                        <div>
                            <input type="password" placeholder="Retype your password"/>
                        </div>
                    </div>
                    <div className="btn-spot">
                        <button className="submit-btn">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
