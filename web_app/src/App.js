import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import AddNewContact from "./containers/AddNewContact/AddNewContact";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/add-new-contact" exact component={AddNewContact} />
      </Switch>
    </Layout>
  );
}

export default App;
