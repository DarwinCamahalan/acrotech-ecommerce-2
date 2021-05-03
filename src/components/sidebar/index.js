import './styles.scss'
import { Link } from 'react-router-dom'
import search from './../../assets/button_search.png'
const SideBar = ({ searchResult, setSearchResult }) => {
  const onChangeHandler = (event) => {
    setSearchResult(event.target.value)
  }
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input type="text" onChange={onChangeHandler} value={searchResult} />
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
  )
}

export default SideBar
