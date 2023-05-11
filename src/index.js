// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// router
import {Route, Routes, BrowserRouter} from "react-router-dom"
// styles
import "../src/assets/styles/index.css"
// pages 
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
