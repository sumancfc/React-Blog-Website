import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Gadgets from "./components/pages/Gadgets";
import Home from "./components/pages/Home";
import Author from "./components/pages/Author";
import Technology from "./components/pages/Technology";
import Vidoes from "./components/pages/Vidoes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/page/:id' component={Home} />
        <Route path='/' exact component={Home} />
        <Route path='/gadgets' exact component={Gadgets} />
        <Route path='/gadgets/:id' component={Gadgets} />
        <Route path='/videos' exact component={Vidoes} />
        <Route path='/videso/:id' component={Vidoes} />
        <Route path='/technology/:id' component={Technology} />
        <Route path='/technology' exact component={Technology} />
        <Route path='/author' exact component={Author} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
