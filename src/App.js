import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert('null');
    }, 3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("light  mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return(
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils">
        </Navbar>  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3"/>
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      <About/>
    </>
  );
}

export default App;
