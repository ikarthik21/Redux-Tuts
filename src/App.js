import './App.css';
import Products from './Components/Products';
import Navabr from './Components/Navabr';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart';
import { Provider } from 'react-redux'
import store from './Store/store';
function App() {
  return (


    <Provider store={store}>
      <BrowserRouter>
        <Navabr />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/' element={<Products />} />
        </Routes>



      </BrowserRouter>


    </Provider>
    // <div className='flex align-center justify-center h-screen'>


    //   <Products />
    // </div>
  );
}

export default App;
