import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import CartPage from '../pages/cart-page/CartPage';
import ProductsPage from '../pages/products-page/ProductsPage';
import NotFoundPage from '../pages/notfound-page/NotFoundPage';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainNavigation = () => {

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={ProductsPage}/>
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route path='/cart' Component={CartPage}/>
        <Route path='*' Component={NotFoundPage}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainNavigation;
