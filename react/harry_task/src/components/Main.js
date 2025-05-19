import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '../App.css';
import Header from './Header/Header.js';
import TextFrom from './Text_form/TextForm.js';
import About from './About/About.js';
function Main() {
  return (
    <>
      <Header menu1="home" menu2="About" menu3="Contact Us" />
      <TextFrom main-heading="" />
      <About />
    </>
  );
}
export default Main;

