<?php
// login.php
include 'index.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    // Check for empty fields
    if (empty($email) || empty($password)) {
        die("Both email and password are required.");
    }

    // Fetch user by email
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() === 0) {
        die("Invalid email or password.");
    }

    // Verify the password
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if (password_verify($password, $user['password'])) {
        // Set a session or cookie for the logged-in user
        session_start();
        $_SESSION['user_id'] = $user['userid'];
        $_SESSION['firstname'] = $user['firstname'];
        $_SESSION['lastname'] = $user['lastname'];

        echo "Login successful! Welcome, " . $user['firstname'];
    } else {
        echo "Invalid email or password.";
    }
}
?>
