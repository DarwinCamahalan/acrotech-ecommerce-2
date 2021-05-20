import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

// hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

// layouts
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import DashboardLayout from './layouts/DashboardLayout'

// pages
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/login'
import Recovery from './pages/Recovery'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import ScrollToTop from './ScrollToTop'
import Order from './pages/Order'
import './default.scss'
import Products from './pages/Products/index'
import ProductDetails from './pages/ProductDetails/index'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MainLayout>
              <Home />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <MainLayout>
              <AboutPage />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/contact"
          render={() => (
            <MainLayout>
              <ContactPage />
            </MainLayout>
          )}
        />

        <Route
          exact
          path="/products"
          render={() => (
            <MainLayout>
              <Products />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/order"
          render={() => (
            <MainLayout>
              <Cart />
            </MainLayout>
          )}
        />

        <Route path="/signup" render={() => <Registration />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/recovery" render={() => <Recovery />} />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/order/:orderID"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Order />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  )
}

export default App
