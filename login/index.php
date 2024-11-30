<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login & Signup</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <div class="form-container">
      <!-- Login Form -->
      <form class="form login-form" id="loginForm">
        <h2>Login</h2>
        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Login</button>
        <p>Don't have an account? <span id="goToSignup">Sign up</span></p>
      </form>

      <!-- Signup Form -->
      <form class="form signup-form" id="signupForm">
        <h2>Sign Up</h2>
        <input type="text" placeholder="First Name" required>
        <input type="text" placeholder="Last Name" required>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
        <p>Already have an account? <span id="goToLogin">Log in</span></p>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
