import React, { createContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Login/Login';
import { AuthContextProvider, PrivateRoute } from './Login/auth';
import Shipment from './Components/Shipment/Shipment'


export const UserContext = createContext();

function App() {
  // const user = {name: 'Ahoshanul', email: 'rayhanshajib500@gmail.com'}
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route path='/product/:productKey'>
              <ProductDetails></ProductDetails>
            </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          </Switch>
        </Router>      
      </AuthContextProvider>
    </div>
  );
}

export default App;