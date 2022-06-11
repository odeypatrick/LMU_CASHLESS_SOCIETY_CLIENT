import AppHeader from '../../components/Header/Header'
import Balance from './components/Balance'
import Stats from './components/Stats'
import './Homepage.css'
import SideNav from '../../components/side-nav/SideNav'
 
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="nav">
                <SideNav type={2}/>
            </div>
            <div className="display">
                <AppHeader page="Dashboard"/>
                <div className="body">
                    <Stats/>
                    <div>
                        <Balance/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
