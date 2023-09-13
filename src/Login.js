import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  const [user, setUser] = useState({ email: '', password: '' });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/user/login', { ...user });

      localStorage.setItem('firstLogin', true);

      history.push("/dashboard");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
        <input type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
        <input type="password" name="password" required placeholder="Password" value={user.password} onChange={onChangeInput} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
