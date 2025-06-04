import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '../App.css';

import Header from './Header/Header.js';
import TextFrom from './Text_form/TextForm.js';
import DismissAleart from './alearts/Dismiss_alert.js';
import About from './About/About.js';
import { useState } from 'react';
function Main() {
  
  const [mode,setmode] = useState ("dark");
  const [alert,setalert] = useState(null);
  const showalert = (message , type) =>{
     setalert({
      msg: message,
      type: type,
     })
  } 

  const toggleMode =() => {
    if(mode === 'light'){
       setmode('dark');
       document.body.style.backgroundColor = "black";
       document.body.style.color= "white";
       showalert("light mode is on", "success")
    }
    if(mode === 'dark'){
       setmode('light');
       document.body.style.backgroundColor = "white";
       document.body.style.color= "black";
       showalert("Dark mode is on", "success")
    }
  } 
  return (
    <>
      <Header menu1="home" menu2="About" menu3="Contact Us" modechange={mode} toggleMode = {toggleMode}/>
      <DismissAleart alert="Dissmiss Alert"/>
      <TextFrom alert={alert}/>
      <About modechange={mode}/>
    </>
  );
}
export default Main;

