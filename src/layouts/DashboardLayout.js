import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../components/header'
import VerticalNav from './../components/VerticalNav'
import Footer from './../components/footer'

import './styles.scss'
const DashBoardLayout = (props) => {
  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default DashBoardLayout
