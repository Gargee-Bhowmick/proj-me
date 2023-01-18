import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert =(tom,type)=>{
      setAlert({
        msg:tom,
        typ:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  const toggleMe = ()=>{
    showAlert(`The ${mode} mode has been activated`,`success`)
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#3A3636'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  //JS variables are to be passed in curly braces
  return (
    <>
    <Navbar aboutText="My Blogs"  mode={mode} toggleMe={toggleMe} />
    <Alert alert={alert}/>
    <TextForm heading="Enter the text" property="Text Properties" mode={mode} alert={alert} showAlert={showAlert}/>
</>
  );
}

export default App;
