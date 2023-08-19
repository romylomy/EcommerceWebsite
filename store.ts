
import {create} from "zustand"
import { persist } from "zustand/middleware"
import Cart from "./app/components/Cart"
import {AddToCartType} from "./Type/AddToCartType"

type CartState = {
    isOpen: boolean
    cart: AddToCartType[]
    toggleCart: () => void
    addProduct: (item: AddToCartType) => void
  }

export const useCartStore = create<CartState>()(
    persist(
        (set) =>({
        cart: [],
        isOpen: false,
        toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        addProduct: (item) =>
            set((state) => {
                const existingItem = state.cart.find(
                (cartItem) => cartItem.id === item.id
                );
                if (existingItem) {
                const updatedCart = state.cart.map((cartItem) =>
                    cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
                );
                return { ...state, cart: updatedCart }; // Spread the existing state and update the cart
                } else {
                return { ...state, cart: [...state.cart, { ...item, quantity: 1 }] }; // Spread the existing state and add to cart
                }
            }),

        }),
            {name:"cart-store"}
        )
 )
