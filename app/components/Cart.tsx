'use client'

import Image from "next/image"
import { useCartStore } from "@/store"
import formatPrice from "@/util/PriceFormat"
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'
import basket from '@/public/basket.png'

export default function Cart(){
    const cartStore = useCartStore()
    
    console.log(cartStore.isOpen)
    return(
        <div  onClick={() => cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            
            <div onClick={(e) => e.stopPropagation()}
                  className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700g "
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
                            <div>
                                <button onClick={()=>
                                    cartStore.removeProduct({
                                        id: item.id, 
                                        image: item.image, 
                                        name: item.name, 
                                        unit_amount: item.unit_amount, 
                                        quantity: item.quantity, 
                                    })}>
                                    <IoRemoveCircle/>
                                    </button>

                                <button onClick={()=>
                                    cartStore.addProduct({
                                        id: item.id, 
                                        image: item.image, 
                                        name: item.name, 
                                        unit_amount: item.unit_amount, 
                                        quantity: item.quantity, 
                                    })}>
                                    <IoAddCircle/>
                                    </button>
                            </div> 
                            <h2>Quantity: {item.quantity}</h2>
                            <p className="text-sm">{formatPrice(item.unit_amount)}</p>
                        </div>
                    </div>
                    
                    
                ))}
                {cartStore.cart.length > 0 && (
                    <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white ">
                    Checkout
                    </button>
                )}
                {!cartStore.cart.length  && (
                    <div className="flex flex-col items-center gap-12 text-2xl font-medium pt-56 ">
                        <h1> Your cart is empty </h1>
                        <Image src={basket } alt="empty cart" width={200} height={200}/> 

                    </div> 
                )}
            </div>
            
        </div>
    )
}