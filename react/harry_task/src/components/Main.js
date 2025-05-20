import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '../App.css';
import Header from './Header/Header.js';
import TextFrom from './Text_form/TextForm.js';
import About from './About/About.js';
import { useState } from 'react';
function Main() {
  const [mode,setmode] = useState ("dark");
  const toggleMode =() => {
    if(mode === 'light'){
       setmode('dark');
    }
    if(mode === 'dark'){
       setmode('light');
    }
  }
  return (
    <>
      <Header menu1="home" menu2="About" menu3="Contact Us" modechange={mode} toggleMode = {toggleMode}/>
      <TextFrom main-heading="" />
      <About />
    </>
  );
}
export default Main;

