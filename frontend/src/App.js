import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./modules/Home/HomePage";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomePage />
      </PersistGate>
    </Provider>
  );
}

export default App;
