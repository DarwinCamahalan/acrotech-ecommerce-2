import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrderHistory } from './../../redux/Orders/orders.actions'
import OrderHistory from './../../components/OrderHistory'
import './styles.scss'

import bg from '../../assets/slide-content/1.jpg'

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data,
})

const Dashboard = (props) => {
  const dispatch = useDispatch()
  const { currentUser, orderHistory } = useSelector(mapState)

  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id))
  }, [])

  return (
    <div>
      <div className="header-black-bg-dashboard"></div>
      <h1>My Account</h1>

      <OrderHistory orders={orderHistory} />
    </div>
  )
}

export default Dashboard
