"use client"


import { useCartStore } from "@/store"
import { AddToCartType } from "@/Type/AddToCartType"

export default function AddCart({
    name, 
    id, 
    image, 
    unit_amount, 
    quantity}:
    AddToCartType){
    const cartStore = useCartStore()
    
    return(
        <>
            <button onClick={() => cartStore} className="my-12 text-white py-2 px-6 font-medium rounded-md">
                Add to cart 
             </button>  
        </> 
    )
}