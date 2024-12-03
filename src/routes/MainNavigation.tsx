import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import CartPage from '../pages/cart-page/CartPage';
import ProductsPage from '../pages/products-page/ProductsPage';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';

const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={ProductsPage}/>
        <Route path='/login' Component={LoginPage}/>
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/cart' Component={CartPage}/>
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;
