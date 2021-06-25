import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/Login" >
          <Login/>
        </Route>
        <Route exact path='/' >
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
