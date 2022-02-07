import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./pages/app-route";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
