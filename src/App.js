

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Purchase from './pages/AboutUs/Purchase/Purchase';
import Addproduct from './pages/DashBoard/AddProducts/Addproduct';
import AddReview from './pages/DashBoard/AddReview/AddReview';
import AllOrders from './pages/DashBoard/AllOrders/AllOrders';
import DashBoard from './pages/DashBoard/DashBoard';
import Dashboard1 from './pages/DashBoard/Dashboard1';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/DashBoard/ManageProducts/ManageProducts';
import MyOrders from './pages/DashBoard/MyOrders/MyOrders';
import Pay from './pages/DashBoard/Pay/Pay';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';

import Login from './pages/Login/Login';

import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Products from './pages/Products/Products';
import Register from './pages/Resigter/Register';



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <Dashboard1></Dashboard1>
          </PrivateRoute>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <PrivateRoute path="/makeadmin" >
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/allorder" >
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addreview" >
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/myorder" >
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/addproduct" >
            <Addproduct></Addproduct>
          </PrivateRoute>
          <PrivateRoute path="/mgproduct" >
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute path="/pay" >
            <Pay></Pay>
          </PrivateRoute>


          <Route exact path="/home" >
            <Home></Home>
          </Route>


          <Route path="/login" >
            <Login></Login>
          </Route>
          <Route path="/products" >
            <Products></Products>
          </Route>
          <PrivateRoute path="/purchase/:id" >
            <Purchase></Purchase>
          </PrivateRoute>

          <Route exact path="/db">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/register" >
            <Register></Register>
          </Route>
          <Route path="*" >
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
