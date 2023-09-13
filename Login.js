import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Registration Component
function Register() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle registration here
    history.push('/login');
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

// Login Component
function Login() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle login here
    history.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

// Dashboard Component
function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
}

// App Component
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
