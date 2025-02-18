import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";



export const ShopContext = createContext();



 const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [cartItem, setCartItem] = useState({});
    



    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItem)
        if (!size) {
            toast.error('Select Product Size');
            return
        }

        if (cartData[itemId]){
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData);
    }

    const cartCount = () => {
        let count = 0;
        for (const i in cartItem){
            for (const j in cartItem[i]){
                try {
                    if (cartItem[i][j] > 0){
                        count += cartItem[i][j];
                    }
                } catch (error) {
                    
                }
            }
        }
        return count;
    }

    const updateCartValue =async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity ;
        setCartItem(cartData);
    }

    const totalPrice = () => {
        let totalAmount = 0;
        for(const i in cartItem){
            let iteminfo = products.find((product) => product._id === i);
            for (const j in cartItem[i]){
                try {
                    if (cartItem[i][j] > 0) {
                        totalAmount += iteminfo.price * cartItem[i][j];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,search, setSearch,showSearchBar, setShowSearchBar,cartItem,addToCart,cartCount,updateCartValue,totalPrice
    }


   

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;