import { NumericLiteral } from "typescript"
import {create} from "zustand"
import { persist } from "zustand/middleware"

type CartItem = {
    name:string,
    id: string, 
    images?:string[],
    descirption:string,
    unit_amount: number,
    quantitiy:number
}

type CartState = {
    isOpen: boolean,
    cart:CartItem[]
}


export const useCartStore = create<CartState>()(
    persist(
        (set) =>({
        cart: [],
        isOpen:false,
    }),
    {name:"cart-store"}
 )
)