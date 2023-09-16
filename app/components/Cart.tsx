'use client'


import Image from "next/image"
import { useCartStore } from "@/store"
import formatPrice from "@/util/PriceFormat"

export default function Cart(){
    const cartStore = useCartStore()
    
    console.log(cartStore.isOpen)
    return(
        
        <div className="fixed w-full h-screen left-0 top-0 bg-black/25">
            
            <div  onClick={() => cartStore.toggleCart()} 
                  className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700 "
                  >
                <h1>Here's your shopping list</h1>
                {cartStore.cart.map((item) => (
                    <div className="flex py-4 gap-4">
                        <Image src={item.image} 
                       alt="image" 
                       width={120} 
                       height= {120} 
                       className=" object-cover rounded-md" />

                       <div>
                            <h2>{item.name}</h2>
                            <h2>Quantity: {item.quantity}</h2>
                            <p className="text-sm">{formatPrice(item.unit_amount)}</p>
                        </div>
                    </div>
                    
                    
                ))}
                <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white ">Checkout</button>
            </div>
            
        </div>
    )
}