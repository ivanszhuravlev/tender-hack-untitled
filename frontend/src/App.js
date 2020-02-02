import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./modules/Home/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
