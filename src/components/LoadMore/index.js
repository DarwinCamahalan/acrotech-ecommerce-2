import React from 'react'
import Button from './../forms/button'

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <Button onClick={() => onLoadMoreEvt()}>
      Under Design Maintenance 🚧👷‍♀️👷‍♂️
    </Button>
  )
}

export default LoadMore
