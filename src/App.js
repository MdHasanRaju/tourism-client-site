import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/services">
            <Services></Services> 
          </Route> */}
          <Route path="/about">
            <AboutUs></AboutUs> 
          </Route>
          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>
      
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
