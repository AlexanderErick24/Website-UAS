$(document).ready(function() {
    var users = [];

    // Register
    $('#register-btn').on('click', function() {
        var username = $('#register-username').val().trim();
        var password = $('#register-password').val().trim();
        var message = $('#register-message');

        if (username === '' || password === '') {
            message.text('Username and password cannot be empty');
            return;
        }

        var userExists = users.some(function(user) {
            return user.username === username;
        });

        if (userExists) {
            message.text('Username already exists');
        } else {
            users.push({ username: username, password: password });
            message.text('User registered successfully');
        }

        $('#register-username').val('');
        $('#register-password').val('');
    });

    // Login
    $('#login-btn').on('click', function() {
        var username = $('#login-username').val().trim();
        var password = $('#login-password').val().trim();
        var message = $('#login-message');

        if (username === '' || password === '') {
            message.text('Username and password cannot be empty');
            return;
        }

        var user = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (user) {
            message.text('Login successful');
            window. location. replace("respon.html")
        } else {
            message.text('Invalid username or password');
        }

        $('#login-username').val('');
        $('#login-password').val('');
    });
});
