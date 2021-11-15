import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import { Routes , Route } from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import EditProduct from './EditProduct';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>      
       <Route path='/home' element={<Addproduct/>} />
       <Route path='/add' element={<Addproduct/>} />
       <Route path='/update' element={<EditProduct/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
      </Routes>  

    </div>
  );
}

export default App;
