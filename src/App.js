import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
