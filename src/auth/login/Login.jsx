import '../Auth.css'

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="form">
                <h1>Login</h1>

                <form>
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
                    <div className="btn-spot">
                        <button className="submit-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
