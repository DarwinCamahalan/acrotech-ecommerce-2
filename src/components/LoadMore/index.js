import React from 'react'
import Button from './../forms/button'

const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return <Button onClick={() => onLoadMoreEvt()}>🚧 Being Built 🚧</Button>
}

export default LoadMore
