import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import AddNewContact from "./containers/AddNewContact/AddNewContact";
import EditPage from "./containers/EditPage/EditPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/add-new-contact" exact component={AddNewContact} />
        <Route path="/edit/:id" component={EditPage} />
          <Route render={() => <h1 style={{textAlign: 'center'}}>404 page not found</h1>}/>
      </Switch>
    </Layout>
  );
}

export default App;
