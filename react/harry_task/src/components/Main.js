import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import '../App.css';
import Header from './Header/Header.jsx';
function Main() {
  return (
   <>
      <Header menu1='home' menu2="About" menu3="Contact Us"/>
   </>
  );
}
export default Main;

