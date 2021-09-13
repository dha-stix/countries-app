import './App.css';
import Homepage from "./components/Homepage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return  (
    <Router>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </Router>
  )


}

export default App;
