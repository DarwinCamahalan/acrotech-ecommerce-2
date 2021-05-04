import { useState } from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/search.png'
import ExitSearch from '../../assets/exit-search.png'
const SideBar = ({ searchResult, setSearchResult }) => {
  const [openSearch, setOpenSearch] = useState(true)

  const onChangeHandler = (event) => {
    setSearchResult(event.target.value)
  }

  const Search = () => {
    setOpenSearch(!openSearch)
  }
  return (
    <>
      <div className="mobile-search">
        {openSearch ? (
          <div className="search-icon" onClick={Search}>
            <img src={SearchIcon} alt={SearchIcon} />
          </div>
        ) : (
          <div className="search-input">
            <div className="arrow-back" onClick={Search}>
              <img src={ExitSearch} alt={ExitSearch} />
            </div>
            <input
              type="text"
              placeholder="Search Products"
              onChange={onChangeHandler}
              value={searchResult}
            />
          </div>
        )}
      </div>
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
        </div>
      </div>
    </>
  )
}

export default SideBar
