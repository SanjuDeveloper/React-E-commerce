import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { Routes, Route } from 'react-router-dom'
import Protected from './Protected'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/home' element={<Protected compRefr="login" />} />        
        <Route path='/login' element={< Protected compRefr="login" />} />
        <Route path='/add' element={< Protected compRefr="Addproduct" />} />
        <Route path='/update' element={< Protected compRefr="EditProduct" />} />
        <Route path='/register' element={< Protected compRefr="Register" />} />
        <Route path="/" element={<Protected compRefr="ProductList" />} />
      </Routes>

    </div>
  );
}

export default App;
