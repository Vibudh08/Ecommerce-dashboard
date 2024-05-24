import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header/>
        <h1>Hii</h1>
        <Routes>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/update' element={<UpdateProduct/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
