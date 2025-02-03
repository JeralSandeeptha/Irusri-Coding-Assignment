import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store/store';
import { Provider } from 'react-redux';
import authReducer, { logOut } from '../../store/slices/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { vi } from 'vitest';

describe('Navbar Component', () => {
  
    test('Navbar component should be render', () => {
      render(
        <Provider store={store}>
            <BrowserRouter> 
                <Navbar />
            </BrowserRouter>
        </Provider>
      );
      const navbar = screen.getByTestId('navbar');
      expect(navbar).toBeInTheDocument();
    });

    test('Logo should be render', () => {
      render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
      );
      const navlinks = screen.getByTestId('logo');
      expect(navlinks).toBeInTheDocument();
    });
    
    test('NavLinks should be render', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
          );
        const navlinks = screen.getAllByTestId('nav-link');
        expect(navlinks.length).toBeGreaterThan(0);

        // check each element
        navlinks.forEach(navlink => {
            expect(navlink).toBeInTheDocument();
        });

        expect(navlinks[0]).toHaveTextContent('Home');
        expect(navlinks[1]).toHaveTextContent('Products');
        expect(navlinks[2]).toHaveTextContent('About');
        expect(navlinks[3]).toHaveTextContent('Contact');
    });
    
    test('Mobile navbar should be render', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
          );
        const mobileNav = screen.getByTestId('mobile-nav');
        expect(mobileNav).toBeInTheDocument();
    });
    
    test('Avatar navbar should be render', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
          );
        const avatar = screen.getByTestId('avatar');
        expect(avatar).toBeInTheDocument();
    });

    test('Tooltip should be render', async () => {
        render(
          <Provider store={store}>
              <BrowserRouter>
                  <Navbar />
              </BrowserRouter>
          </Provider>
        );

        const avatarElement = screen.getByTestId('avatar');
        expect(avatarElement).toBeInTheDocument();

        fireEvent.mouseOver(avatarElement);

        const tooltipText = store.getState().auth.isLoggedIn
            ? 'You are authenticated'
            : 'You are loged as a guest';

        const tooltipElement = await screen.findByText(tooltipText);
        expect(tooltipElement).toBeInTheDocument();
    });

    test('Correct tooltip text should be render when the user loggedin', async () => {
        // create a mock redux store
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });

        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const avatarElement = screen.getByTestId('avatar');
        expect(avatarElement).toBeInTheDocument();

        fireEvent.mouseOver(avatarElement);

        await waitFor(() => {
            const tooltipElement = screen.getByText('You are authenticated');
            expect(tooltipElement).toBeInTheDocument();
        });

    });
    
    test('Correct tooltip text should be render when the user not loggedin', async () => {
        // create a mock redux store
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: false },
            },
        });

        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const avatarElement = screen.getByTestId('avatar');
        expect(avatarElement).toBeInTheDocument();

        fireEvent.mouseOver(avatarElement);

        await waitFor(() => {
            const tooltipElement = screen.getByText('You are loged as a guest');
            expect(tooltipElement).toBeInTheDocument();
        });

    });
    
    test('When the user authenticated cart should be displayed', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const cartEle = await screen.getByTestId('cart');
        expect(cartEle).toBeInTheDocument();
    });
    
    test('When the user authenticated logout should be displayed', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const logoutEle = await screen.getByTestId('logout');
        expect(logoutEle).toBeInTheDocument();
    });

    test('Logout button tooltip should be worked', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const logoutEle = await screen.getByTestId('logout');
        expect(logoutEle).toBeInTheDocument();

        fireEvent.mouseOver(logoutEle);

        await waitFor(() => {
            const tooltipEle = screen.getByTestId('tooltip-logout');
            expect(tooltipEle).toBeInTheDocument();
        });
    });
    
    test('Cart button tooltip should be worked', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const logoutEle = await screen.getByTestId('logout');
        expect(logoutEle).toBeInTheDocument();

        fireEvent.mouseOver(logoutEle);

        await waitFor(() => {
            const cartEle = screen.getByTestId('tooltip-cart');
            expect(cartEle).toBeInTheDocument();
        });
    });
    
    test('When the user not loggedin auth buttons should be render', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: false },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const loginEle = screen.getByTestId('login');
        expect(loginEle).toBeInTheDocument();
        const registerEle = screen.getByTestId('register');
        expect(registerEle).toBeInTheDocument();
    });
    
    test('When the user loggedin auth buttons should not be render', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const loginEle = screen.queryByTestId('login');
        expect(loginEle).toBeNull();
        const registerEle = screen.queryByTestId('register');
        expect(registerEle).toBeNull();
    });

    test('When the user click on the contact nav link it should go to correct route', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const contactLinks = screen.getAllByText(/contact/i);
        contactLinks.forEach((contactLink) => {
            fireEvent.click(contactLink);
            expect(window.location.pathname).toBe('/contact');
        });
    });
    
    test('When the user click on the products nav link it should go to correct route', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const contactLinks = screen.getAllByText(/product/i);
        contactLinks.forEach((contactLink) => {
            fireEvent.click(contactLink);
            expect(window.location.pathname).toBe('/');
        });
    });
    
    test('When the user click on the about nav link it should go to correct route', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const contactLinks = screen.getAllByText(/about/i);
        contactLinks.forEach((contactLink) => {
            fireEvent.click(contactLink);
            expect(window.location.pathname).toBe('/about');
        });
    });
    
    test('When the user click on the home nav link it should go to correct route', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const contactLinks = screen.getAllByText(/home/i);
        contactLinks.forEach((contactLink) => {
            fireEvent.click(contactLink);
            expect(window.location.pathname).toBe('/home');
        });
    });

    test('When the user click on the cart it should go to correct route', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const cartEle = screen.getByTestId('cart');
        expect(cartEle).toBeInTheDocument();
        fireEvent.click(cartEle);
        expect(window.location.pathname).toBe('/cart');
    });
    
    test('When the user click on the register button it should go to correct route', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: false },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const btn = screen.getByTestId('register');
        expect(btn).toBeInTheDocument();
        fireEvent.click(btn);
        expect(window.location.pathname).toBe('/register');
    });
    
    test('When the user click on the login button it should go to correct route', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: false },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        const btn = screen.getByTestId('login');
        expect(btn).toBeInTheDocument();
        fireEvent.click(btn);
        expect(window.location.pathname).toBe('/login');
    });
    
    test('When the user click on the logout button popup should be render', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const confirmMock = vi.spyOn(window, "confirm");

        // get the logout element
        const logoutEle = screen.getByTestId('logout');
        // check logout button is in the dom
        expect(logoutEle).toBeInTheDocument();
        // click the logout button
        await fireEvent.click(logoutEle);
        // Ensure window.confirm was called
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");
        // Cleanup mock after test
        confirmMock.mockRestore();
    });
    
    test('When the user click on the logout button popup should be render, Then when the user click Cancle then isLoggedIn should be still true', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const confirmMock = vi.spyOn(window, "confirm").mockReturnValue(false);

        // get the logout element
        const logoutEle = screen.getByTestId('logout');
        // check logout button is in the dom
        expect(logoutEle).toBeInTheDocument();
        // click the logout button
        await fireEvent.click(logoutEle);
        // Ensure window.confirm was called
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");
        // still isLoggedIn variable value should be false
        expect(mockStore.getState().auth.isLoggedIn).toBeTruthy();
        // Cleanup mock after test
        confirmMock.mockRestore();
    });
    
    test('When the user click on the logout button popup should be render, Then when the user click OK then isLoggedIn should be still false', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const confirmMock = vi.spyOn(window, "confirm").mockReturnValue(true);

        // get the logout element
        const logoutEle = screen.getByTestId('logout');
        // check logout button is in the dom
        expect(logoutEle).toBeInTheDocument();
        // click the logout button
        await fireEvent.click(logoutEle);
        // Ensure window.confirm was called
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");
        // set the isLoggedIn variable false
        mockStore.dispatch(logOut());
        // still isLoggedIn variable value should be false
        expect(mockStore.getState().auth.isLoggedIn).toBeFalsy();
        // Cleanup mock after test
        confirmMock.mockRestore();
    });

    test('When the user click logout success alert should be render', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        const confirmMock = vi.spyOn(window, "confirm").mockReturnValue(true);
        const successMock = vi.spyOn(window, "alert").mockImplementation(() => true);

        // get the logout element
        const logoutEle = screen.getByTestId('logout');
        // check logout button is in the dom
        expect(logoutEle).toBeInTheDocument();
        // click the logout button
        await fireEvent.click(logoutEle);
        // Ensure confirm window.confirm was called
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");
        // Ensure success window.confirm was called
        expect(successMock).toHaveBeenCalledTimes(1);
        expect(successMock).toHaveBeenCalledWith("You are successfully logout!");
        // Cleanup mock after test
        confirmMock.mockRestore();
    });

    test('When the user click logout user should navigate to the default route (/)', async () => {
        const mockStore = configureStore({
            reducer: {
              auth: authReducer,
            },
            preloadedState: {
              auth: { isLoggedIn: true },
            },
        });
        
        render(
            <Provider store={mockStore}>
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );

        // get the logout element
        const logoutEle = screen.getByTestId('logout');
        // check logout button is in the dom
        expect(logoutEle).toBeInTheDocument();
        // click the logout button
        await fireEvent.click(logoutEle);
        // user should navigate to the default route
        expect(window.location.pathname).toBe('/');;
    });
});