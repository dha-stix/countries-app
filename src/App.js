import {BrowserRouter as Router, Route} from "react-router-dom"
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Body from "./components/Body";



function App() {
  return (
    <Router>
        <Nav/>
        <Route exact path="/" component={Body}/>
        <Route path="/country/:countryName" component={Detail}/>
        <Footer/>
    </Router>
  );
}

export default App;
