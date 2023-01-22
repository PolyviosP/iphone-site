import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Phones from './pages/phones';
import Order from './pages/order';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/phones" element={<Phones/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

