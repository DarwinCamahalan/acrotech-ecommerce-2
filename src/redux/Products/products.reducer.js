import productsTypes from './products.types'
import productTypes from './products.types'

const INITIAL_STATE = {
  products: [],
  product: {},
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    case productsTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      }
    case productsTypes.EDIT_PRODUCT_SUCCESS: //EDIT
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.productID === action.payload.productID) {
            return {
              ...product,
              ...action.payload.update,
            }
          }
          return product
        }),
      } //EDIT
    default:
      return state
  }
}

export default productsReducer
