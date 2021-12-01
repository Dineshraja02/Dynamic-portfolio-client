import React from 'react';
import Signup from "./Signup/Signup";
import LoginForm from "./login/LoginForm";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Portfolio from '../Portfolio/Portfolio';
import PortfolioForm from '../Portfolio/PortfolioForm/PortfolioForm';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    return (
    <>
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/Login" exact component={LoginForm}/>
        <Route path="/Register" exact component={Signup}/>
        <Route path="/PortfolioForm" render ={(props)=>{
        let hasToken=JSON.parse(localStorage.getItem('auth'))
        return hasToken  !==null? <PortfolioForm {...props}/> : <Redirect to="/login" /> }}/>
        <Route path="/Portfolio" 
       render ={(props)=>{
        let hasToken=JSON.parse(localStorage.getItem('auth'))
      return hasToken  !==null ? <Portfolio {...props}/>: <Redirect to="/login" /> }}/>
       </Switch>   
     </BrowserRouter>
      <ToastContainer />
    </>
    )
}

export default Home;
