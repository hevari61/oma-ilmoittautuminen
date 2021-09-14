import React, { Component } from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
import Json from "./Json";
 
const Main = () => {
  
    return (
        <BrowserRouter>
        <div>
          <h1>Puulaaki</h1>
          <ul className="header">
            <li><NavLink exact to="/">Koti</NavLink></li>
            <li><NavLink to="/tarina">Tarinaa</NavLink></li>
            <li><NavLink to="/yhteys">Yhteys</NavLink></li>
            <li><NavLink to="/json">Json</NavLink></li>
          </ul>
          <div className="content">
              <Route path="/" component={Koti}/>
              <Route path="/tarina" component={Tarina}/>
              <Route path="/yhteys" component={Yhteys}/>             
              <Route path="/json" component={Json}/>             
          </div>
        </div>
        </BrowserRouter>
    );

}
 
export default Main;
