// react
import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
// router
import {Route, Routes, BrowserRouter} from "react-router-dom"
// styles
import "../src/assets/styles/index.css"
// pages 
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import Error from './pages/Error';
import Register from './pages/Register';
// context
import { ErrorProvider, ErrorContext } from './contexts/ErrorContext';

const App = () => {
  const {
    errorMessage, 
    setErrorMessage,
    errorCode,
    setErrorCode,
  } = useContext(ErrorContext);

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/error" element={<Error message={errorMessage}/>}/>
        </Routes>
    </BrowserRouter>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </React.StrictMode>
);
