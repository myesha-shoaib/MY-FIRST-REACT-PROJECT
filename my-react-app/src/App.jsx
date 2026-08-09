import "./App.css";

function App() {

  // Scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };


  // Contact Button
  const contactUs = () => {
    window.location.href =
      "mailto:info@codewave.com?subject=Project Inquiry";
  };


  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h2
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          CodeWave
        </h2>


        <ul className="nav-links">

          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link-btn"
            >
              Home
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link-btn"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="nav-link-btn"
            >
              Services
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link-btn"
            >
              Contact
            </button>
          </li>

        </ul>


        <button
          className="nav-btn"
          onClick={() => scrollToSection("services")}
        >
          Get Started
        </button>

      </nav>



      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="small-heading">
            SIMPLE • MODERN • RESPONSIVE
          </p>

          <h1>
            Build Better Digital
            <span> Experiences</span>
          </h1>


          <p className="hero-text">
            We create modern and responsive web experiences
            that help businesses grow and connect with their
            customers.
          </p>


          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("services")}
            >
              Get Started
            </button>


            <button
              className="secondary-btn"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </button>

          </div>

        </div>



        {/* Hero Card */}

        <div className="hero-card">

          <div className="card-icon">
            🚀
          </div>

          <h2>
            Grow Your Business
          </h2>

          <p>
            Build fast, modern and user-friendly websites
            using React.
          </p>


          <div className="stats">

            <div>
              <h3>100+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>50+</h3>
              <p>Clients</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Years</p>
            </div>

          </div>

        </div>

      </section>



      {/* ================= ABOUT ================= */}

      <section
        className="about"
        id="about"
      >

        <p className="section-label">
          ABOUT US
        </p>

        <h2>
          Everything You Need To Grow
        </h2>

        <p>
          We help businesses build modern digital
          products with clean design and powerful
          technology.
        </p>

      </section>



      {/* ================= SERVICES ================= */}

      <section
        className="services"
        id="services"
      >


        {/* Card 1 */}

        <div className="service-card">

          <div className="service-icon">
            💻
          </div>

          <h3>
            Web Development
          </h3>

          <p>
            Responsive and modern websites built
            using the latest technologies.
          </p>

          <button
            className="service-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

        </div>



        {/* Card 2 */}

        <div className="service-card">

          <div className="service-icon">
            🎨
          </div>

          <h3>
            UI / UX Design
          </h3>

          <p>
            Clean and user-friendly interfaces that
            provide a better experience.
          </p>

          <button
            className="service-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

        </div>



        {/* Card 3 */}

        <div className="service-card">

          <div className="service-icon">
            📱
          </div>

          <h3>
            Responsive Design
          </h3>

          <p>
            Websites that look great on desktop,
            tablet and mobile devices.
          </p>

          <button
            className="service-btn"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

        </div>

      </section>



      {/* ================= CONTACT / CTA ================= */}

      <section
        className="cta"
        id="contact"
      >

        <h2>
          Ready To Start Your Project?
        </h2>

        <p>
          Let's create something amazing together.
        </p>


        <button
          className="primary-btn"
          onClick={contactUs}
        >
          Contact Us
        </button>

      </section>



      {/* ================= FOOTER ================= */}

      <footer>

        <h3
          onClick={() => scrollToSection("home")}
          className="footer-logo"
        >
          CodeWave
        </h3>

        <p>
          © 2026 CodeWave. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;