const initialState = {
  cart: [],
}

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const SET_CART = "SET_CART"


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return Object.assign({}, state, { cart: action.payload });

    case REMOVE_FROM_CART:
      return Object.assign({}, state, { cart: action.payload });

    case SET_CART:
      return Object.assign({}, state, { cart: action.payload })

    default:
      return state;
  }
}
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export function removeFromCart(id, product) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
}

export function setCart(cart){
  return{
    type: SET_CART,
    payload: cart
  }
}
