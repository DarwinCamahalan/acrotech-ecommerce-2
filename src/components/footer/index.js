import './styles.scss'
import { Link } from 'react-router-dom'
import acrotechLogo from '../../assets/acrotech-logo.png'
const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="max">
        <div className="flex">
          <div className="contacts">
            <img src={acrotechLogo} alt={acrotechLogo} />
            <p>
              We are located at Zone 3 – Near Kung Hua School, Kauswagan,
              Cagayan de Oro City.
            </p>
            <p className="located">
              <i class="fas fa-phone-alt"> </i>
              <a href="tel:+123-456-789" className="tel">
                123-456-789
              </a>
            </p>
            <div className="social-media">
              <a
                href="https://www.facebook.com/acrotech"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/acrotech"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/acrotech"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="links">
            <p>Quick Links</p>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="form">
            <h6>Sales & Offers</h6>
            <p>
              Subcribe to know Sales and offers of acrotech, Also to Know the
              latest products and design from our high quality engineering
              design made by top notch engineers.
            </p>
            <div className="input">
              <input type="email" placeholder="Your Email Address" />
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Acrotech Industrial Sales Corp.
      </div>
    </footer>
  )
}

export default Footer
