import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "../../src/pages/notfound-page/NotFoundPage";

const renderComponent = () => {
  return (
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
}

describe('NotFound Page Component', () => {
  
  it('Not Found Page renders correctly', () => {
    cy.mount(renderComponent());
  });

  it('Should render batch component correctly', () => {
    cy.mount(renderComponent());
    cy.get('[class="badge"]').should('exist').should('have.text', '404 error');
  });
  
  it('Should render header correctly', () => {
    cy.mount(renderComponent());
    cy.get('[class="header"]').should('exist').should('have.text', "We've lost this page");
  });
  
  it('Should render sub header correctly', () => {
    cy.mount(renderComponent());
    cy.get('[class="subheader"]').should('exist').should('have.text', "Sorry, the page you are looking for doesn't exist or has been moved");
  });
  
  it('Should render back button correctly', () => {
    cy.mount(renderComponent());
    cy.get('button[type="button"]').should('exist').should('have.text', "Back");
  });
  
  it('When the use click on the back button, user should navigate into the Home page', () => {
    cy.mount(renderComponent());
    cy.get('button[type="button"]').should('exist').should('have.text', "Back");
  });
});