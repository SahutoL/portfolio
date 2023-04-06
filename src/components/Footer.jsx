const Footer = () => {
    return (
      <>
        <hr/>
        <div className="footer-container">
          <p>
            © {new Date().getFullYear()} SahutoL's Portfolio
          </p>
          <div className="social_icons">
            <a
              href="https://github.com/SahutoL"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer;