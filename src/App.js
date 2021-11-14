import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Addproduct from './Addproduct';
import EditProduct from './EditProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header />
       <Routes> 
       <Route path="login">
        <Login />
       </Route>
       </Routes>
       </BrowserRouter>    
    </div>
  );
}

export default App;
