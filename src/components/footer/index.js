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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              libero eveniet eaque repudiandae accusamus perspiciatis quas harum
              esse quia magnam?
            </p>
            <div className="social-media">
              <a href="www.facebook.com/acrotech" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="www.linkedin.com/acrotech" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="www.instagram.com/acrotech" target="_blank">
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
              Subcribe to know Sales and offers of acrotech Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quas, itaque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Vero, earum!
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
