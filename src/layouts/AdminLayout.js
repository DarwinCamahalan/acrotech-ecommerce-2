import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../components/header'
import VerticalNav from './../components/VerticalNav'
import Footer from './../components/footer'

import './styles.scss'
const AdminLayout = (props) => {
  return (
    <div className="adminLayout">
      <Header {...props} />
      <div className="controlPanel-admin">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">Products</Link>
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

export default AdminLayout
