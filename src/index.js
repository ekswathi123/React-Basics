import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './components/Hello';
//import Favourite from './components/Favourtie';
//import Color from './components/Color';
import reportWebVitals from './reportWebVitals';
//import Hello from './components/Hello';
import Col from './components/Col';
import Scooter from './components/Scooter';
import Scooters from './components/Scooters';
import List from './components/List';
import Timer from './components/Timer';
import Form from './components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <>
   {/* <Hello/> */}
   {/* <Color/> */}
   {/* <Col/> */}
   {/* <Scooter/> */}
   {/* <Scooters/> */}
   {/* <List/> */}
   {/* <Timer/> */}
   <Form/>
   </>
  // </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
