import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const initialFormValues={
  membername:'',
  email:'',
  role:'',

} 
const memberMember=[
  {membername:'Jason',email:'jasonemail@email.com',role:'Frontend'},
  {membername:'mark',email:'markemail@email.com',role:'Frontend'},
  {membername:'sam',email:'samemail@email.com',role:'Frontend'},
  {membername:'isac',email:'isacemail@email.com',role:'Frontend'},
  {membername:'john',email:'johnemail@email.com',role:'Frontend'},
]



ReactDOM.render(
  <React.StrictMode>
    
    <App initialFormValues={initialFormValues} memberMember={memberMember} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
