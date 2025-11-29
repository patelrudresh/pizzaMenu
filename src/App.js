import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header'
import Menu from './component/Menu';

  function Pizza(){
    return (
      <h2>Pizza componnet</h2>
    )
  }
function App() {
  return (
    <div className="App">
      <Header/>
       <Menu/>
       <Footer/>
    </div>
  );
}

export default App;
