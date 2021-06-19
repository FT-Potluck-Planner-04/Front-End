import './App.css';
import { Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>🍲 Potluck Planner 🥘</h1>
      <Switch>
        <Route exact path='/'>
          <h2>Welcome!</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
