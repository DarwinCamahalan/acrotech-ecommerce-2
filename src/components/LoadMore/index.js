import React from 'react'
import Button from './../forms/button'

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return <Button onClick={() => onLoadMoreEvt()}>See More</Button>
}

export default LoadMore
