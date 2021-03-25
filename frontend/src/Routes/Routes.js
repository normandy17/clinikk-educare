import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { Feed } from "../Pages/Feed/Feed";
import { Nav } from "../Components/Nav";
import { SearchResult } from "../Pages/SearchResult/SearchResult";
import PrivateRoute from "./PrivateRoute";
import MediaPlayer from "../Pages/MediaPlayer/MediaPlayer";


export const Routes = () => {
  return (
    <div>
        <Route path="/" render={() => <Nav />} />
        <Route path="/" exact render={() => <Login />} />        
      <Switch>      
        <PrivateRoute path="/search" exact MyComponent={SearchResult} />       
        <PrivateRoute path="/home" exact MyComponent={Feed} />           
        <PrivateRoute
          path="/player/:title"
          exact
          MyComponent={MediaPlayer} />
      </Switch>     
    </div>
  );
};