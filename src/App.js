import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./App-route";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
