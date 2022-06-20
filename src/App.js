import Dashboard from './dashboard/Dashboard'
import Pay from './pay/Pay'
import Login from './auth/login/Login'
import Signup from './auth/signup/Signup'
import Homepage from './auth/homepage/Homepage'
import Wallet from './wallet/Wallet'

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
        <div className="display">
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Homepage />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
