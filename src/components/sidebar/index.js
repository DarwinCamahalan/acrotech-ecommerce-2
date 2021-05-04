import './styles.scss'
import { Link } from 'react-router-dom'

const SideBar = ({ searchResult, setSearchResult }) => {
  const onChangeHandler = (event) => {
    setSearchResult(event.target.value)
  }
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Products"
          onChange={onChangeHandler}
          value={searchResult}
        />
      </div>
      <div className="categories">
        <h2>Strategic Products</h2>

        <Link to="#">2 Port Valve</Link>
        <Link to="#">Air Dryer</Link>
        <Link to="#">Chiller</Link>
        <Link to="#">Electric Actuators</Link>
        <Link to="#">Ionizer</Link>
        <Link to="#">Process Gas Equipment</Link>
        <Link to="#">Training Equipment</Link>
        <h2>Products</h2>

        <Link to="/products">All Products</Link>
        <Link to="#">New Products</Link>
        <Link to="#">Specialized Products for General Use</Link>
        <Link to="#">Discontinued Products</Link>

        <h2>Services</h2>

        <Link to="#">Technology Courses</Link>
        <Link to="#">SMC International Training</Link>
        <Link to="#">Sales Support</Link>
        <Link to="#">Engineering & Project Support</Link>
        <Link to="#">Demonstration</Link>
        <Link to="#">Regional Logistic Center</Link>
      </div>
    </div>
  )
}

export default SideBar
