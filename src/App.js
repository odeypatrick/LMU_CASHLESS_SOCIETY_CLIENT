import SideNav from './components/side-nav/SideNav'
import Dashboard from './dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {

    return (
    <div className="App">
      <SideNav/>
      <Router>
      <Switch>
          <Route path="/">
            <Dashboard/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
