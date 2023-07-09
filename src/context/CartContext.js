import React from 'react'

const CartContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default CartContext
