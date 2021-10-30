import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/login">
            <Login></Login> 
          </Route>
          <PrivateRoute path="/serviceDetails:serviceId">
            <ServiceDetails></ServiceDetails> 
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound> 
          </Route>
        </Switch>
      
          <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
