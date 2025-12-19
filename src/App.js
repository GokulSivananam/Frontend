//import logo from './logo.svg';
import {  Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {

  let [data,setData]=useState([])

  useEffect(()=>{
    const FetchEventApi  = async ()=>{
      try{
        const token = localStorage.getItem('token');
        if (!token) {
          setData([]);
          return;
        }
        const respose = await fetch("https://backend-qg3x.onrender.com/api/events", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        const result=await respose.json();
        setData(Array.isArray(result.data) ? result.data : [])
      }
      catch(err){
        setData([])
      }
    };
    FetchEventApi()
    
  },[]);


  return (
    <div className="App">
      <Header></Header>
      <Outlet 
      context={{
        data,
      }}
      ></Outlet>
    </div>
  );
}

export default App;