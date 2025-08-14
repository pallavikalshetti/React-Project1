const Footer = () => {

    return (
        <footer className="footer-container">
      <div className="footer">
        <div className="logo">Shortly</div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Features</h3>
            <ul>
              <div><a href="/link-shortening">Link Shortening</a></div><br></br>
              <div><a href="/branded-links">Branded Links</a></div><br></br>
              <div><a href="/analytics">Analytics</a></div>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <div><a href="/blog">Blog</a></div><br></br>
             <div><a href="/developers">Developers</a></div><br></br>
              <div><a href="/support">Support</a></div>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <div><a href="/about">About</a></div><br></br>
              <div><a href="/team">Our Team</a></div><br></br>
              <div><a href="/careers">Careers</a></div><br></br>
              <div><a href="/contact">Contact</a></div>
            </ul>

            <div className="social-icons">
              <img src="/src/assets/icon-facebook.svg" alt="Facebook" />
              <img src="/src/assets/icon-twitter.svg" alt="Twitter" />
              <img src="/src/assets/icon-pinterest.svg" alt="Pinterest" />
              <img src="/src/assets/icon-instagram.svg" alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </footer>
 )

};
export default Footer;