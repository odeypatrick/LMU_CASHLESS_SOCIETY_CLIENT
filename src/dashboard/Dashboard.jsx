import AppHeader from '../components/Header/Header'
import Stats from './components/Stats'
import Entry from './components/Entry'
import './Dashboard.css'

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
            
            <div className="pay-btn">
                <i className="fa fa-credit-card"></i>
            </div>
        </div>
    )
}

export default Dashboard
