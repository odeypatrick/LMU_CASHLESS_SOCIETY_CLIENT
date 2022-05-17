import AppHeader from '../components/Header/Header'
import Stats from './components/Stats'
import Entry from './components/Entry'
import './Dashboard.css'
import { Link } from 'react-router-dom'
 
const Dashboard = () => {
    return (
        <div>
            <AppHeader page="Dashboard"/>
            <div className="body">
                <div style={{ marginBottom: '20px' }}>
                    <Stats/>
                </div>
                <Entry/>
            </div>
            
            <Link to="/pay">
                <div className="pay-btn">
                    <i className="fa fa-credit-card"></i>
                </div>
            </Link>
        </div>
    )
}

export default Dashboard
