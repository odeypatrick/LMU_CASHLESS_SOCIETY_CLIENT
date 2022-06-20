import './Nav.css'
import {
    NavLink
} from "react-router-dom"; 

const SideNav = ({ type }) => {
    return (
        <div className="side-nav">
            <div className="logo">
                <h3>LMU PAY</h3>
            </div>

            { type === 1 ? <div className="links">
                 <NavLink to="/admin" exact><i className="fa fa-th-large"></i> Dashboard</NavLink>
                 <NavLink to="/history"><i className="fa fa-history"></i> History</NavLink>
                 <NavLink to="/analytics"><i className="fa fa-line-chart"></i> Analytics</NavLink>
                 <NavLink to="/settings"><i className="fa fa-cog"></i> Settings</NavLink>
            </div>

            : <div className="links">
                 <NavLink to="/dashboard" exact><i className="fa fa-th-large"></i> Dashboard</NavLink>
                 <NavLink to="/wallet"><i className="fa fa-wallet"></i> Wallet</NavLink>
                 <NavLink to="/history"><i className="fa fa-history"></i> History</NavLink>
                 <NavLink to="/analytics"><i className="fa fa-line-chart"></i> Analytics</NavLink>
                 <NavLink to="/settings"><i className="fa fa-cog"></i> Settings</NavLink>
            </div> }
        </div>
    )
}

export default SideNav
