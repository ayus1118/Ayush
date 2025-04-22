import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assest/css/style.css'
import Header from './componets/header/header'
import todos from './componets/todos/todos'
import Footer from './componets/footer/footer'

function App() {
  return (
    <>
      <Header></Header>
      <Todos></Todos>
      <Footer></Footer>
    </>
  );
}
export default App;
