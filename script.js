window.onload = function() {
  var loginForm = document.getElementById('loginForm');
  loginForm.onsubmit = function(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === '' || password === '') {
      alert('Please enter both username and password.');
      return false;
    }
    alert('Login successful.');
    return true;
  };
};