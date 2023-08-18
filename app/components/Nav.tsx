"use client"
import {signIn} from 'next-auth/react'
import Image from 'next/image'
import { Session } from 'next-auth'
import { useCartStore } from '@/store'
import Cart from './Cart'
import Link from 'next/link'
import {TbShoppingBag} from "react-icons/tb"

const Nav = ({user}: Session) => {
    const cartStore = useCartStore()
    return(
        <nav className="flex justify-between items-center py-12 ">
            <Link href={"/"} > 
                <h1> Styled</h1>
            </Link>
            
            <ul className="flex items-center gap-12">
               <li  className="flex items-center text-4xl relative cursor-pointer">
                 <TbShoppingBag/>
                 <span className=" text-black text-sm font-bold w-3 h-4 rounded-full absolute left-3 bottom-1 flex items-center justify-center">
                    {cartStore.cart.length}    
                </span> 

               </li>
                {!user &&(
                    <div> 
                        <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
                          <button onClick={() => signIn}>Sign In</button>
                       </li>
                    </div>
                   
                )}
                {user &&(
                    <div>
                       <li> 
                         <Image src ={user?.image as string} 
                                alt={user.name as string} 
                                width={36} 
                                height={36} 
                                className="rounded-full"
                         />
                       </li>
                    </div> 
                )}
            </ul>
            {cartStore.isOpen && <Cart/> }
        </nav> 
    )
    }
    
export default Nav;
