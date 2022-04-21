import './Nav.css'
import {
    Link
} from "react-router-dom"; 

const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="logo">
                <h3>LMU PAY</h3>
            </div>

            <div className="links">
                 <Link to="/"><i className="fa fa-th-large"></i> Dashboard</Link>
                 <Link to="/"><i className="fa fa-history"></i> History</Link>
                 <Link to="/"><i className="fa fa-line-chart"></i> Analytics</Link>
                 <Link to="/"><i className="fa fa-cog"></i> Settings</Link>
            </div>
        </div>
    )
}

export default SideNav
