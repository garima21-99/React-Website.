import React from 'react';
import Navbar from './Navbar';
import Services from "./Services";
import Header from "./Header";
import Cases from "./Cases";
import Blog from "./Blog";
import Page from "./Page";
import Home from "./Home";
import { Route } from "react-router-dom";


const App =  () => {
    return (
    <> 
    <Navbar />
  
   
      <Route exact  path ="/"> <Header /> </Route>
      <Route path ="/services"> <Services /> </Route>
      <Route path ="/cases"> <Cases /> </Route>
      <Route path ="/blog"> <Blog /> </Route>
      <Route path ="/page"> <Page /> </Route>
      




</>
    );
  };


export default App;
