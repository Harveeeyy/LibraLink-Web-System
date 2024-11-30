<!DOCTYPE html>
<html>
<head>

  <title>LibraLink</title>
  <link rel="stylesheet" type="text/css" href="styles.css">


</head>

<body>
<header>
  <div class="logo">
    <img src="mainlogo.jpg" alt="LibraLink Logo" class="logo-img">
  </div>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      

      <?php if(isset($_COOKIE['user_logged_in'])): ?>
        <!-- If user is logged in, show profile options -->
        <li class="profile">
          <a href="#" class="profile-link">Profile</a>
          <div class="profile-options">
            <span class="email">user@example.com</span> <!-- Replace this dynamically -->
            <a href="logout.php">Logout</a>
          </div>
        </li>
      <?php else: ?>
        <!-- If user is not logged in, show login option -->
        <li><a href="login/index.php">Login</a></li>
      <?php endif; ?>
    </ul>
  </nav>
</header>




<section class="hero">
  <div class="hero-content">
    <h1>Welcome to LibraLink</h1>
    <p>Read different books with different genres</p>
    <a href="#menu" class="btn">Explore</a>
  </div>
</section>

<section class="about dark-theme">
  <div class="about-content">
    <h2>About LibraLink</h2>
    <p>Welcome to LibraLink, your ultimate online platform for exploring the world of books! At LibraLink, we believe that knowledge and stories should be accessible to everyone, everywhere. Our platform is designed to connect book enthusiasts with an extensive library of free, high-quality books across various genres. </p>
    <p>Whether you’re a curious reader, a student seeking resources, or simply someone who loves the joy of discovering new stories, LibraLink is here to support your journey. With a user-friendly interface, visually appealing design, and a growing collection of books, we aim to create an immersive reading experience for all.</p>
    <a href="#menu" class="btn">Explore Our Menu</a>
  </div>
  <div class="about-image">
    <img src="aboutimg.jpg" alt="About Image">
  </div>
</section>


<section class="menu">
  <h2>Recommended Books</h2>
  <div class="menu-items">
    <div class="menu-item">
      <img src="C++INTRO.jpg" alt="book1">
      <h3>Introduction to C++</h3>
      <p>A beginner friendly book all about C++.</p>
    </div>
    <div class="menu-item">
      <img src="JAVAINTRO.jpg" alt="book2">
      <h3>JAVA</h3>
      <p>Guide to knowing JAVA.</p>
    </div>
    <div class="menu-item">
      <img src="PHPINTRO.jpg" alt="Book3">
      <h3>PHP</h3>
      <p>A book all about the server side scripting language.</p>
    </div>
  </div>
</section>

<section class="reservations">
  <div class="reservation-form">
    <h2>Kindly leave us a feedback</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <input type="tel" name="phone" placeholder="Phone Number" required>
      <input type="date" name="date" required>
      <input type="time" name="time" required>
      <textarea name="message" placeholder="Additional Message" rows="5"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</section>


<section class="testimonials">
  <h2>What Our Readers Say</h2>
  <div class="testimonial">
    <img src="noprofile.png" alt="Customer 1">
    <p>"LibraLink has completely changed the way I access books! The platform is super easy to use, and the collection is amazing. I love that I can explore so many genres for free. Highly recommend it to all book lovers!"</p>
    <h4>Samantha L., Avid Reader</h4>
  </div>
  <div class="testimonial">
    <img src="noprofile.png" alt="Customer 2">
    <p>"LibraLink is a game-changer! It’s like having a library in my pocket. The design is clean, the books are diverse, and it’s so convenient to use. I’ve discovered so many great reads here. Love it!"</p>
    <h4>Jonathan R., Literature Enthusiast</h4>
  </div>
</section>


<section class="gallery">
  <h2>Gallery</h2>
  <div class="image-grid">
    <div class="image-item">
      <img src="gallery1.jpg" alt="Image 1">
    </div>
    <div class="image-item">
      <img src="gallery2.jpg" alt="Image 2">
    </div>
    <div class="image-item">
      <img src="gallery3.jpg" alt="Image 3">
    </div>
    <div class="image-item">
      <img src="gallery4.jpg" alt="Image 4">
    </div>
  </div>
</section>

<section class="contact">
  <div class="contact-container">
    <h2>Contact Us</h2>
    <div class="contact-info">
      <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <p>Batangas City, Batangas, Philippines</p>
      </div>
      <div class="info-item">
        <i class="fas fa-phone-alt"></i>
        <p>+6391234567890</p>
      </div>
      <div class="info-item">
        <i class="fas fa-envelope"></i>
        <p>info@libralink.com</p>
      </div>
    </div>
    <form class="contact-form">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
</section>




<footer class="footer">
  <div class="footer-content">
    <div class="footer-logo">
      <img src="mainlogo.jpg" alt="Logo">
    </div>
    <nav class="footer-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Menu</a>
      <a href="#">Reservations</a>
      <a href="#">Testimonials</a>
      <a href="#">Gallery</a>
      <a href="#">Contact</a>
    </nav>
    <div class="footer-social">
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
  <p class="footer-text">&copy; 2024 LibraLink. All rights reserved.</p>
</footer>

</body>