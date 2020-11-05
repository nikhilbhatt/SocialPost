import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Auth from './components/Auth';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Protected from './components/Protected';
import Logout from './components/Logout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <div className="auth-wrapper">
        <div className="auth-inner">
            <Switch>
              <Route path="/about">
                <Protected  component={About}/>
              </Route>
              <Route path="/home">
                <Protected  component={Home}/>
              </Route>
              <Route path="/create">
                <Protected  component={CreatePost}/>
              </Route>
              <Route path="/logout">
                <Logout/>
              </Route>
              <Route path="/">
                <Auth />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
