import { render, screen } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe('Not Found Page', () => {

    const renderComponent = () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NotFoundPage />    
                </BrowserRouter>
            </Provider>
        );
    }
    
    test('Not Found component should be render', async () => {
        renderComponent();
        const notfoundEle = await screen.findByTestId('notfound');
        expect(notfoundEle).toBeInTheDocument();
    });
});