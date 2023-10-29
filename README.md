# Custom Counter App

This is a simple React application that demonstrates the use of a custom counter hook along with routing features, including a 404 page and an error boundary testing page.

## Features

- **Custom Counter Hook**: The project includes a custom counter hook (`useCounter.js`) that provides functionality to increment, decrement, reset, and set a value for a counter.

- **Routing**: The app uses React Router for handling routes. It includes:
  - A home page that displays the custom counter and allows you to interact with it.
  - A 404 page to handle unknown routes.
  - An error boundary testing page for testing error boundary behavior.

## Usage

The home page displays the count and provides buttons to increment, decrement, reset, and set the counter value.
Click the "Home" link in the navigation to return to the home page.
Click the "Error Boundary Test" link to test error boundaries. An error will be thrown on that page to simulate an error boundary scenario.

# Project Structure

The project structure is as follows:

src
App.js: Main application component with routing.
useCustomCounter.js: Custom counter hook.
NotFound.js: Component for the 404 page.
ErrorBoundaryTest.js: Component to test error boundaries.

## Dependencies

React
React Router


