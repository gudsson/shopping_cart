import { combineReducers } from "redux"
import products from "../reducers/products"
import cartItems from "../reducers/cartitems"

export default combineReducers({ products, cartItems })