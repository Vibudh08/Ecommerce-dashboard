import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';
import Protected from './Protected';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
