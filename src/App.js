// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Myform from './components/Myform';

function App() {
  return (
    // <div className="blank">Sumit</div>
    <>
  
 <Navbar title="Word Converter" />
 <div className="container my=3">
 <Myform heading="Enter your thoughts please"/>
 </div>
 
    </>

  );
}

export default App;
