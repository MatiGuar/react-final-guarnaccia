
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
/* import { useContext } from 'react'; */

function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer/>} /> 
            <Route path="cart" element={<Cart /> } />
          </Routes>
      </CartProvider>
    </BrowserRouter> 
    
    </div>
  );
}

export default App;
