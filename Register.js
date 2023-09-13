import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // After successful registration, redirect to login page
    window.location.href = '/login';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // After successful login, redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

function Dashboard() {
  return <h1>Welcome to Dashboard</h1>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/register" />
      </Switch>
    </Router>
  );
}

export default App;
