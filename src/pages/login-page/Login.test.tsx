import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe('Login Page', () => {

    test('Login component should be render', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />    
                </BrowserRouter>
            </Provider>
        );
        const loginElement = screen.getByTestId('login');
        expect(loginElement).toBeInTheDocument();
    });
    
    test('All the elements should be render correctly', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />    
                </BrowserRouter>
            </Provider>
        );
        const loginElement = screen.getByTestId('login');
        expect(loginElement).toBeInTheDocument();
        
        const logoElement = screen.getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
        
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
        
        const subheader = screen.getByTestId('subheader');
        expect(subheader).toBeInTheDocument();
        
        const email = screen.getByTestId('email');
        expect(email).toBeInTheDocument();
        
        const password = screen.getByTestId('password');
        expect(password).toBeInTheDocument();
        
        const screensplit = screen.getByTestId('screensplit');
        expect(screensplit).toBeInTheDocument();
        
        const loginBtn = screen.getByTestId('loginBtn');
        expect(loginBtn).toBeInTheDocument();
        
        const terms = screen.getByTestId('terms');
        expect(terms).toBeInTheDocument();
        
        const date = screen.getByTestId('date');
        expect(date).toBeInTheDocument();
        
        const curlyarrow = screen.getByTestId('curlyarrow');
        expect(curlyarrow).toBeInTheDocument();
        
        const logoimg = screen.getByTestId('logoimg');
        expect(logoimg).toBeInTheDocument();
        
        const mainHeaders = screen.getAllByTestId('mainHeader');
        mainHeaders.forEach(mainHeader => {
            expect(mainHeader).toBeInTheDocument();
        });
        
        const usersText = screen.getByTestId('usersText');
        expect(usersText).toBeInTheDocument();

        const avatarGroup = screen.getByTestId('avatarGroup');
        const visibleAvatars = avatarGroup.querySelectorAll('.MuiAvatar-root');
        expect(visibleAvatars.length).toBeLessThanOrEqual(4);
    });
    
    test('User should navigate to the register page when use clicks on the register text', () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />    
                </BrowserRouter>
            </Provider>
        );
        const registernavlink = screen.getByTestId('registernavlink');
        expect(registernavlink).toBeInTheDocument();

        fireEvent.click(registernavlink);
        expect(registernavlink).toHaveAttribute('href', '/register');
        expect(window.location.pathname).toBe('/register');
    });

    describe('Password Field', () => {
        
        test('Password field should render correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const password = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
            expect(password).toBeInTheDocument();
    
            // initial value should be nothing
            expect(password).toHaveValue('');
    
            // password not should be null. it should present
            expect(password).not.toBeNull();
    
            // inpput should have correct name attribute
            expect(password).toHaveAttribute('name', 'password');
    
            // inpput should have correct type
            expect(password).toHaveAttribute('type', 'password');
    
            // Simulate typing an password
            await fireEvent.change(password, { target: { value: 'test@example.com' } });
            // Assert that the input field's value has changed
            expect(password.value).toBe('test@example.com');
        });

        test('In the start there should not be present any password validation texts', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );

            // validation message should not be appear
            const passwordValidationTextOne = screen.queryByText('Password is required');
            expect(passwordValidationTextOne).not.toBeInTheDocument();
            const passwordValidationTextTwo = screen.queryByText('Password must be at least 3 characters');
            expect(passwordValidationTextTwo).not.toBeInTheDocument();
        });
        
        test('User should can type the password correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const password = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
            expect(password).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(password, { target: { value: 'mypassword' } });
            // Assert that the input field's value has changed
            expect(password.value).toBe('mypassword');
        });

        test('When the user enter password length is less than 3, validation should be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const password = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
            expect(password).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(password, { target: { value: 'je' } });
            // Simulate losing focus
            await fireEvent.blur(password);

            // validation message should not be appear
            await waitFor(() => {
                const passwordValidationText = screen.getByText('Password must be at least 3 characters');
                expect(passwordValidationText).toBeInTheDocument();
            });
        });

        test('When the user didnt enter password, validation should be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const password = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
            expect(password).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(password, { target: { value: '' } });
            // Simulate losing focus
            await fireEvent.blur(password);

            // validation message should be appear
            await waitFor(() => {
                const passwordValidationText = screen.getByText('Password is required');
                expect(passwordValidationText).toBeInTheDocument();
            });
        });

        test('When the user enter password correctly, validation should not be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const password = screen.getByTestId('password').querySelector('input') as HTMLInputElement;
            expect(password).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(password, { target: { value: 'mypassword' } });
            // Simulate losing focus
            await fireEvent.blur(password);

            // validation message should not be appear
            await waitFor(() => {
                expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
                expect(screen.queryByText('Password must be at least 3 characters')).not.toBeInTheDocument();
           });
        });
    });

    describe('Email Field', () => {
        
        test('Email field should render correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const email = screen.getByTestId('email').querySelector('input') as HTMLInputElement;
            expect(email).toBeInTheDocument();
    
            // initial value should be nothing
            expect(email).toHaveValue('');
    
            // email not should be null. it should present
            expect(email).not.toBeNull();
    
            // inpput should have correct name attribute
            expect(email).toHaveAttribute('name', 'email');
    
            // inpput should have correct type
            expect(email).toHaveAttribute('type', 'text');
    
            // Simulate typing an email
            await fireEvent.change(email, { target: { value: 'test@example.com' } });
            // Assert that the input field's value has changed
            expect(email.value).toBe('test@example.com');
        });

        test('In the start there should not be present any email validation texts', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );

            // validation message should not be appear
            const emailValidationTextOne = screen.queryByText('Email is required');
            expect(emailValidationTextOne).not.toBeInTheDocument();
            const emailValidationTextTwo = screen.queryByText('Invalid email format');
            expect(emailValidationTextTwo).not.toBeInTheDocument();
        });
        
        test('User should can type the email correctly', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const email = screen.getByTestId('email').querySelector('input') as HTMLInputElement;
            expect(email).toBeInTheDocument();
    
            // Simulate typing an email
            await fireEvent.change(email, { target: { value: 'test@example.com' } });
            // Assert that the input field's value has changed
            expect(email.value).toBe('test@example.com');
        });

        test('When the user enter email incorrectly, validation should be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const email = screen.getByTestId('email').querySelector('input') as HTMLInputElement;
            expect(email).toBeInTheDocument();
    
            // Simulate typing an email
            await fireEvent.change(email, { target: { value: 'jasd' } });
            // Simulate losing focus
            await fireEvent.blur(email);

            // validation message should not be appear
            await waitFor(() => {
                const emailValidationText = screen.getByText('Invalid email format');
                expect(emailValidationText).toBeInTheDocument();
            });
        });

        test('When the user didnt enter email, validation should be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const email = screen.getByTestId('email').querySelector('input') as HTMLInputElement;
            expect(email).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(email, { target: { value: '' } });
            // Simulate losing focus
            await fireEvent.blur(email);

            // validation message should be appear
            await waitFor(() => {
                const emailValidationText = screen.getByText('Email is required');
                expect(emailValidationText).toBeInTheDocument();
            });
        });

        test('When the user enter email correctly, validation should not be appear', async () => {
            render(
                <Provider store={store}>
                    <BrowserRouter>
                        <LoginPage />    
                    </BrowserRouter>
                </Provider>
            );
    
            // render correctly
            const email = screen.getByTestId('email').querySelector('input') as HTMLInputElement;
            expect(email).toBeInTheDocument();
    
            // Simulate typing an password
            await fireEvent.change(email, { target: { value: 'test@example.com' } });
            // Simulate losing focus
            await fireEvent.blur(email);

            // validation message should not be appear
            await waitFor(() => {
                expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
                expect(screen.queryByText('Invalid email format')).not.toBeInTheDocument();
           });
        });
    });

    test('When the click the button without enter values, validations should be appear', async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage />
                </BrowserRouter>
            </Provider>
        );

        const loginButton = screen.getByTestId('loginBtn') as HTMLButtonElement;
        await fireEvent.click(loginButton);

        await waitFor(() => {
            expect(screen.queryByText('Email is required')).toBeInTheDocument();
            expect(screen.queryByText('Password is required')).toBeInTheDocument();
        });
    });
});