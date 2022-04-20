// import Button from '../Button'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"; 

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="logo">
                <h1>LMU PAY</h1>
            </div>

            <div className="links">
                <Router>
                    <Link to="/">Dashboard</Link>
                </Router>
            </div>
        </div>
    )
}

export default SideNav
