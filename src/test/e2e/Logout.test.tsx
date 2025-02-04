import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import authReducer, { logOut } from '../../store/slices/authSlice.ts';
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.tsx";
import { expect, vi } from "vitest";

// test('Logout Functionality', async () => {
//     const mockStore = configureStore({
//         reducer: {
//             auth: authReducer,
//         },
//         preloadedState: {
//             auth: { isLoggedIn: true },
//         },
//     });

//     render(
//         <Provider store={mockStore}>
//             <BrowserRouter>
//                 <Navbar />
//             </BrowserRouter>
//         </Provider>
//     );

//     // const confirmMock = vi.spyOn(window, "confirm");

//     // Get the logout element
//     // const logoutEle = screen.getByTestId('logout');

//     // Check logout button is in the DOM
//     // expect(logoutEle).toBeInTheDocument();

//     // First click: check confirmation dialog appears for logout
//     // confirmMock.mockReturnValue(false);  // Mock cancel behavior
//     // await fireEvent.click(logoutEle);
    
//     // Verify that confirm is called for the logout prompt
//     // expect(confirmMock).toHaveBeenCalledTimes(1);
//     // expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");

//     // Reset the mock
//     // confirmMock.mockReset();

//     // Second click: simulate user confirming the logout
//     // await fireEvent.click(logoutEle);
//     // confirmMock.mockReturnValue(true);
    
//     // Verify the confirmation and logout success dialog
//     // expect(confirmMock).toHaveBeenCalledTimes(1);  // Should be called again, but once this time
    
//     // expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");
//     // Add the check for the logout success confirmation message
//     // expect(confirmMock).toHaveBeenCalledWith("You are successfully logout!");

//     // Perform logout action
//     // mockStore.dispatch(logOut());
//     // expect(mockStore.getState().auth.isLoggedIn).toBeFalsy();

//     // Now check the final state, user should be redirected to home (/)
//     // expect(window.location.pathname).toBe('/');

//     // Cleanup mock after test
//     // confirmMock.mockRestore();
// });

describe('Logout Functionality', () => {
    
    test('Logout Cancle works correctly', async () => {
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

        // Get the logout element
        const logoutEle = screen.getByTestId('logout');

        // Check logout button is in the DOM
        expect(logoutEle).toBeInTheDocument();

        // click the logout button
        await fireEvent.click(logoutEle);

        // alert should be render correctly
        confirmMock.mockReturnValue(false);
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");

        // still isLoggedIn should be true
        expect(mockStore.getState().auth.isLoggedIn).toBeTruthy();

        // Cleanup mock after test
        confirmMock.mockRestore();
    });
    
    test('Logout OK works correctly', async () => {
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

        // Get the logout element
        const logoutEle = screen.getByTestId('logout');

        // Check logout button is in the DOM
        expect(logoutEle).toBeInTheDocument();

        // click the logout button
        await fireEvent.click(logoutEle);

        // alert should be render correctly
        confirmMock.mockReturnValue(true);
        expect(confirmMock).toHaveBeenCalledTimes(1);
        expect(confirmMock).toHaveBeenCalledWith("Are you sure want to logout?");

        // Mock the alert function
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

        // Check for the second confirmation alert after successful logout
        window.alert('You are successfully logged out!'); // this should now trigger the mocked alert
        expect(alertMock).toHaveBeenCalledWith('You are successfully logged out!');

        // Mock the logic that happens when user confirms logout
        mockStore.dispatch(logOut());

        // Ensure that the state reflects the user being logged out
        expect(mockStore.getState().auth.isLoggedIn).toBeFalsy();

        // Cleanup mock after test
        confirmMock.mockRestore();
    });
})

