import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import CartPage from '../pages/cart-page/CartPage';
import ProductsPage from '../pages/products-page/ProductsPage';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={LoginPage}/>
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/cart' Component={CartPage}/>
        <Route path='/products' Component={ProductsPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;
