# Irusri Coding Assignment

This repository contains the source code for a React application that integrates with a JSON Server for managing data. The project is designed to run locally, providing a simple frontend and backend setup for demonstration purposes.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Start the React Application](#start-the-react-application)
  - [Start the JSON Server](#start-the-json-server)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Test the Applcation](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes with Node.js)
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/)

---

### Installation

1. **Clone the Repository**  
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/JeralSandeeptha/Irusri-Coding-Assignment.git
   cd Irusri-Coding-Assignment

2. **Install Dependencies**  
   Install the necessary dependencies for the project:
   ```bash
   npm install

## Running the Project

You can follow below instructions for the start the application.

### Start the React Application

- Run the following command to start the React application locally on port 5173:

  ```bash
  npm run dev

- Once started, open your browser and navigate to http://localhost:5173 to view the application.

### Start the JSON Server

- Run the following command to start the JSON Server locally on port 5000:

  ```bash
  npm run json-server

- The JSON Server will be accessible at http://localhost:5000.

## Project Structure

- api: To manage all the json-server data.
- assets: To manage all the assets.
- components: To manage all the components.
- constants: To manage all the constant data.
- pages: To manage all the pages.
- routes: To manage all the routes.
- services: To manage all the api routes and calls.
- store: To manage all the redux global state.
- styles: To manage all the global styles.
- types: To manage all the typescript types.
- utils: To manage all the utility functionalities.

## Available Scripts

- Starts the React development server.
  ```bash
  npm run dev
- Starts the JSON Server.
  ```bash
  npm run json-server

## Technologies Used

- React: Frontend library for building user interfaces.
- JSON Server: A mock REST API for testing and prototyping.
- Local Storage: For persistence data. 
- Redux: For global state management 
- MaterialUI, Tailwind: As component and UI libraries
- GSAP: As an animation library

## Test the Application

- For setup cypress
  ```bash
  npm i cypress
- For start cypress server
  ```bash
  npx cypress open
- or we can use scripts 
- If you get any errors while setup the components and E2E remove this and setup, after add that in the package.json file.
  ```bash
  "type": "module",

## Contributing

- Feel free to fork the repository and submit pull requests to contribute to the project.

## License

- This project is licensed under the MIT License.
