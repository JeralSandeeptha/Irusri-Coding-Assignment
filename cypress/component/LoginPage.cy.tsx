import { BrowserRouter } from "react-router-dom";
import LoginPage from "../../src/pages/login-page/LoginPage";
import { Provider } from "react-redux";
import store from "../../src/store/store";

describe('LoginPage should work correctly', () => {
  
  const renderComponent = () => {
    return (
      <Provider store={store}> 
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
  }

  it('Login page should be render correctly', () => {
    cy.mount(renderComponent());   
  });
  
  it('Logo should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="logo"]').should('exist');    
  });
  
  it('Header should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="header"]').should('exist');    
  });
  
  it('Sub Header should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="subheader"]').should('exist');    
  });
  
  it('Login button should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="loginBtn"]').should('exist').should('have.text', 'Login');    
  });
  
  it('Curley image should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="curlyarrow"]').should('exist');  
  });
  
  it('Rounded image should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('img[alt="logo-img"]').should('exist');  
  });
  
  it('Right side texts should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('.right-header').should('exist').should('have.text', "Purchase thousands of products");  
    cy.get('.right-para').should('exist').should('have.text', "Join our platform to purchase thousands of highly valuable products in minutes.");  
    cy.get('[data-testid="usersText"]').should('exist').should('have.text', "Join 60,000+ users");  
  });
  
  it('Bottom links should be render correctly', () => {
    cy.mount(renderComponent());
    cy.get('[data-testid="date"]').should('exist').should('have.text', '© 2025 Company');    
    cy.get('[data-testid="terms"] > :nth-child(1)').should('exist').should('have.text', 'Term');    
    cy.get('[data-testid="terms"] > :nth-child(2)').should('exist').should('have.text', 'Privacy');    
  });
  
  it('Bottom links should be render correctly', () => {
    cy.viewport(1024, 768);
    cy.mount(renderComponent());
    cy.get('[data-testid="registernavlink"]').should('exist').should('have.text', 'Register');   
  });
})