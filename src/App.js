import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/App-route";
import './App.css';
import useAxiosResponeStatus from './custom_hooks/use-axios-response-status';

function App() {
  const { ErrorContainer } = useAxiosResponeStatus();

  return (
    <div className='font-sans antialiased bg-gray-100'>
      <ErrorContainer />
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
