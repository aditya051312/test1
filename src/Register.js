import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  let history = useHistory();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/user/register', { ...user });

      localStorage.setItem('firstLogin', true);

      history.push("/login");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={registerSubmit}>
        <input type="text" name="name" required placeholder="Full Name" value={user.name} onChange={onChangeInput} />
        <input type="email" name="email" required placeholder="Email" value={user.email} onChange={onChangeInput} />
        <input type="password" name="password" required placeholder="Password" value={user.password} onChange={onChangeInput} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
