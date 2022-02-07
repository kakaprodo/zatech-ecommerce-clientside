import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/App-route";
import './App.css';

function App() {
  return (
    <div className='font-sans antialiased bg-gray-100'>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
