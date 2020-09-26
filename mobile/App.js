import React from 'react';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from "react-redux";
import Main from "./containers/Main/Main";
import {reducer} from "./store/reducer";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
