document.getElementById('login-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the username and password values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate the username and password
    if (username === 'admin' && password === 'password') {
        // If the username and password are correct, show a success message
        alert('Login successful');
    } else {
        // If the username or password are incorrect, show a failure message
        alert('Login failed');
    }
});
