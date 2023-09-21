import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
document.getElementById("bored-bot").addEventListener("click",getIdea)

function getIdea(){
fetch("https://apis.scrimba.com/bored/api/activity")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.body.classList.add("fun")
    document.getElementById("idea").textContent=data.activity
    document.getElementById("title").textContent = "Happy Bot"
})
}