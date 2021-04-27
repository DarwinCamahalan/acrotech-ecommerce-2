import './styles.scss'
import { Link } from 'react-router-dom'
import search from './../../assets/button_search.png'
const HomePage = () => {
  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="search-bar">
          <input type="text" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>
        <div className="categories">
          <h2>Strategic Products</h2>

          <Link>2 Port Valve</Link>
          <Link>Air Dryer</Link>
          <Link>Chiller</Link>
          <Link>Electric Actuators</Link>
          <Link>Ionizer</Link>
          <Link>Process Gas Equipment</Link>
          <Link>Training Equipment</Link>
          <h2>Products</h2>

          <Link to="/products">All Products</Link>
          <Link>New Products</Link>
          <Link>Specialized Products for General Use</Link>
          <Link>Discontinued Products</Link>

          <h2>Services</h2>

          <Link>Technology Courses</Link>
          <Link>SMC International Training</Link>
          <Link>Sales Support</Link>
          <Link>Engineering & Project Support</Link>
          <Link>Demonstration</Link>
          <Link>Regional Logistic Center</Link>
        </div>
      </div>

      <div className="hero">
        <div className="links">
          <Link to="/">Home</Link> {'> '}
          <Link to="/products">Products</Link> {'> '}
          <Link>Home</Link> {'> '}
          <Link>Home</Link> {'> '}
        </div>
        <h1>Acrotech Industrial Sales Corp.</h1>
        <div className="separator"></div>
        <div className="info">
          <ul>
            <li>Lorem ipsum dolor sit..,</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.,</li>
            <li>Lorem ipsum dolor sit amet.,</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <ul>
            <li>Tel : +12 (34) 5678-91011</li>
            <li>Fax : +12 (34) 5678-91011</li>
          </ul>
          <ul>
            <span>Email: </span>
            <a href="emailto:acrotech@gmail.com">acrotech@example.com</a>
          </ul>
        </div>
        <div className="btn">
          <button>SEND ENQUIRY</button>
        </div>
      </div>
      <div className="copy-right">
        <p>
          Copyright © {new Date().getFullYear()} Acrotech Industrial Sales Corp.
          All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default HomePage
