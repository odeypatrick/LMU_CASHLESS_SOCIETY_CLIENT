import SideNav from './components/side-nav/SideNav'
import Dashboard from './dashboard/Dashboard'
import Login from './auth/login/Login'
import Signup from './auth/signup/Signup'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

    return (
    <Router>
      <div className="app">
        <div className="nav">
          <SideNav/>
        </div>
        <div className="display">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
