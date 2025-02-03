import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icons/pfizer.png';
import './Navbar.scss';
import { Avatar, Button, Tooltip } from '@mui/material';
import cross from '../../assets/icons/cross.png';
import menu from '../../assets/icons/menu-burger.png';
import cart from '../../assets/icons/shopping-cart (1).png';
import logout from '../../assets/icons/exit.png';
import { routes } from '../../constants/constants';
import gsap from 'gsap';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logOut } from '../../store/slices/authSlice';
import { clearCart } from '../../store/slices/cartSlice';

const Navbar = () => {

    const mobileMenu = useRef(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    const logOutUser = () => {
        const confirm = window.confirm('Are you sure want to logout?');
        if(confirm) {
            handleLogOut();
            navigate('/');
        }
    }

    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(clearCart());
        alert('You are successfully logout!');
    }

    const openNav = () => {
        gsap.to('.mobile-navbar', {
            y: 0,
        });
    }
    const closeNav = () => {
        gsap.to('.mobile-navbar', {
            y: '-100vh',
        });
    }

    return (
        <div className='navbar' data-testid="navbar">
            <div className="navbar-inner">

                <div className="mobile-navbar" ref={mobileMenu} data-testid="mobile-nav">
                    <img src={cross} alt="close" className="close" onClick={closeNav}/>
                    <div className="nav-links-container">
                        {
                            routes.map((route) => {
                                return (
                                    <Link key={route.id} className='navlink' to={route.routePath} data-testid="nav-link">{route.routeName}</Link>
                                )
                            })
                        }
                    </div>
                    <div className="nav-other-container">
                        {
                            isLoggedIn ? (
                                <>
                                    <div className="auth-container">
                                        <Tooltip title="View your cart">
                                            <Link to='/cart'>
                                                <div className="icon-container">
                                                    <img src={cart} alt="cart-icon" className="icon" />
                                                </div>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title="Logout">
                                            <div className="icon-container" onClick={logOutUser}>
                                            <img src={logout} alt="logout-icon" className="icon"/>
                                            </div>
                                        </Tooltip>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="non-auth-container">
                                        <Link to='/login'>
                                            <Button variant="outlined" size="small" className='control-button'>Login</Button>
                                        </Link>
                                        <Link to='/register'>
                                            <Button variant="outlined" size="small" className='control-button'>Register</Button>
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                        <Tooltip title={isLoggedIn ? 'You are authenticated' : 'You are loged as a guest'}>
                            <Avatar className='avatar'></Avatar>
                        </Tooltip>
                    </div>
                </div>

                <div className="nav-left">
                    <div className="logo-content">
                        <img src={logo} alt="logo" className="logo" data-testid='logo'/>
                    </div>
                </div>
                <div className="nav-center">
                    {
                        routes.map((route) => {
                            return (
                                <Link key={route.id} className='navlink' to={route.routePath} data-testid='nav-link'>{route.routeName}</Link>
                            )
                        })
                    }
                </div>
                <div className="nav-right">
                    {
                        isLoggedIn ? (
                            <>
                                <div className="auth-container">
                                    <Tooltip title="View your cart" data-testid='tooltip-cart'>
                                        <Link to='/cart'>
                                            <div className="icon-container">
                                                <img src={cart} alt="cart-icon" className="icon" data-testid='cart'/>
                                            </div>
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="Logout" data-testid='tooltip-logout'>
                                        <div className="icon-container" onClick={logOutUser}>
                                        <img src={logout} alt="logout-icon" className="icon" data-testid='logout'/>
                                        </div>
                                    </Tooltip>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="non-auth-container">
                                    <Link to='/login' data-testid='login'>
                                        <Button variant="contained" size="small" className='control-button'>Login</Button>
                                    </Link>
                                    <Link to='/register' data-testid='register'>
                                        <Button variant="outlined" size="small" className='control-button'>Register</Button>
                                    </Link>
                                </div>
                            </>
                        )
                    }
                    <Tooltip data-testid="tooltip-avatar" title={isLoggedIn ? 'You are authenticated' : 'You are loged as a guest'}>
                        <Avatar className='avatar' data-testid='avatar'></Avatar>
                    </Tooltip>
                </div>
                <img src={menu} alt="menu" className="menu" onClick={openNav}/>
            </div>
        </div>
    );

}

export default Navbar;
