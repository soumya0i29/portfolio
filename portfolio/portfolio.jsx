import React, { useState } from "react";

const styles = {
  body: {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(to right, #8e2de2, #4a00e0)",
    color: "#fff",
  },
  nav: {
    background: "rgba(0, 0, 0, 0.4)",
    padding: "10px",
    textAlign: "center",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    backdropFilter: "blur(4px)",
  },
  navButton: isActive => ({
    backgroundColor: isActive ? "#ffa500" : "#ffcc70",
    color: "#333",
    border: "none",
    padding: "10px 24px",
    margin: "0 12px",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "1.08em",
    boxShadow: isActive
      ? "0 2px 10px 0 #ffa50044"
      : "0 2px 6px 0 rgba(0,0,0,0.12)",
    transition: "background 0.2s, box-shadow 0.2s",
    outline: "none",
  }),
  header: {
    textAlign: "center",
    padding: "54px 20px 36px 20px",
    background: "rgba(0,0,0,0.12)",
    borderBottom: "2px solid #fff2",
    boxShadow: "0 8px 32px 0 #4a00e044",
  },
  h1: {
    fontSize: "3.2em",
    margin: 0,
    letterSpacing: "2px",
    textShadow: "0 3px 24px #4a00e0",
  },
  headerP: {
    color: "#ffcc70",
    marginTop: "16px",
    fontSize: "1.25em",
    fontWeight: 500,
    letterSpacing: "1px",
    textShadow: "0 2px 6px #0006",
  },
  section: {
    display: "none",
    background: "rgba(255,255,255,0.11)",
    maxWidth: "800px",
    margin: "32px auto",
    padding: "38px 32px",
    borderRadius: "22px",
    boxShadow: "0 4px 40px 0 #0004",
    animation: "appear 0.6s cubic-bezier(.41,.82,.44,1.09)",
  },
  sectionActive: {
    display: "block",
  },
  h2: {
    fontSize: "2.2em",
    marginBottom: "22px",
    color: "#ffcc70",
    textShadow: "0 1px 5px #4a00e0cc",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  li: {
    marginBottom: "21px",
    background: "rgba(255,255,255,0.22)",
    padding: "19px",
    borderRadius: "14px",
    color: "#fff",
    boxShadow: "0 2px 8px #4a00e033",
    fontSize: "1.11em",
    letterSpacing: ".5px",
    borderLeft: "5px solid #ffcc70",
    transition: "background 0.2s, border 0.2s",
  },
  a: {
    color: "#ffcc70",
    textDecoration: "none",
    fontWeight: 600,
    wordBreak: "break-all",
    transition: "color 0.15s",
  },
  aHover: {
    color: "#ffa500",
    textDecoration: "underline",
  },
  footer: {
    textAlign: "center",
    padding: "24px",
    background: "rgba(0,0,0,0.4)",
    marginTop: "60px",
    color: "#ffcc70",
    letterSpacing: ".5px",
    fontWeight: 500,
    borderTop: "2px solid #ffcc70",
    fontSize: "1.07em",
    boxShadow: "0 -2px 16px 0 #4a00e022",
  },
};

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.h1}>Hi, I'm Gundaboina Soumya</h1>
        <p style={styles.headerP}>
          🌟 Web Developer &nbsp;|&nbsp; 🎨 Designer &nbsp;|&nbsp; 🛠️ Coder
        </p>
      </header>

      <nav style={styles.nav}>
        {navItems.map(item => (
          <button
            key={item.id}
            style={styles.navButton(activeSection === item.id)}
            onClick={() => setActiveSection(item.id)}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <section
        style={{
          ...styles.section,
          ...(activeSection === "about" ? styles.sectionActive : {}),
        }}
        id="about"
      >
        <h2 style={styles.h2}>About Me</h2>
        <p>
          I am Gundaboina Soumya, a creative and passionate developer with experience in building web applications, designing user interfaces, and solving real-world tech problems. I enjoy exploring new technologies and turning ideas into interactive experiences.
        </p>
      </section>

      <section
        style={{
          ...styles.section,
          ...(activeSection === "projects" ? styles.sectionActive : {}),
        }}
        id="projects"
      >
        <h2 style={styles.h2}>Projects</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <strong>🎯 Portfolio Website:</strong> A sleek personal portfolio site to showcase my work.
          </li>
          <li style={styles.li}>
            <strong>✅ To-Do App:</strong> A task manager built using HTML, CSS, and JavaScript.
          </li>
          <li style={styles.li}>
            <strong>🌤️ Weather App:</strong> Real-time weather forecast using API integration.
          </li>
        </ul>
      </section>

      <section
        style={{
          ...styles.section,
          ...(activeSection === "contact" ? styles.sectionActive : {}),
        }}
        id="contact"
      >
        <h2 style={styles.h2}>Contact Me</h2>
        <p>
          Email:{" "}
          <a
            href="mailto:gundaboinasoumya@gmail.com"
            style={hovered === "email" ? { ...styles.a, ...styles.aHover } : styles.a}
            onMouseEnter={() => setHovered("email")}
            onMouseLeave={() => setHovered(null)}
          >
            gundaboinasoumya@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            style={hovered === "linkedin" ? { ...styles.a, ...styles.aHover } : styles.a}
            onMouseEnter={() => setHovered("linkedin")}
            onMouseLeave={() => setHovered(null)}
          >
            yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/soumya0i29"
            target="_blank"
            rel="noopener noreferrer"
            style={hovered === "github" ? { ...styles.a, ...styles.aHover } : styles.a}
            onMouseEnter={() => setHovered("github")}
            onMouseLeave={() => setHovered(null)}
          >
            https://github.com/soumya0i29
          </a>
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© 2025 Gundaboina Soumya. All rights reserved.</p>
      </footer>

      {/* Keyframes for the appear animation */}
      <style>{`
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(38px) scale(.97);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Portfolio;