import './components/styles/Nav.css'
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ItemListContainer from './components/componentecontenedor/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/componentecontenedor/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from '../src/context/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  
  return (
  
    <div className='index'>
    <CartContextProvider>
          <BrowserRouter>
              <div>
                <AppNavbar/>
                    <Routes>
            
                      <Route path='/'element={<ItemListContainer/>}/>

                      <Route path='/category/:categoryId'element={<ItemListContainer/>}/>

                      <Route path='cart' element={<Cart/>}/>

                      <Route path='/detail/:detailId' element= {<ItemDetailContainer/>}/>

                      <Route path='/*' element={<Navigate to ='/' replace/> } />
                    </Routes>
              </div>
          </BrowserRouter>

    </CartContextProvider>
    </div>

  );
}

export default App;
