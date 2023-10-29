import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1>Error Encountered</h1>
          <p>Sorry, something went wrong.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
