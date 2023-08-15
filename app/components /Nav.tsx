'use client' 
import {signOut} from 'next-auth/react'
import {signIn} from 'next-auth/react'
import Image from 'next/image'
import { Session } from 'next-auth'


const Nav = ({user}: Session) => {
    return(
        <nav className="flex justify-between items-center py-12">
            <h1>Styled</h1>
            <ul className="flex items-center gap-12 ">
                {!user && (
                   <div>
                        <li className="bg-teal-600 text-white py-2 px-4 rounded-md">
                            <button onClick={() => signIn()}> Sign in </button>
                        </li> 
                   </div>  

                )}
                { user && (
                   
                    <div>
                         <li>
                        <Image 
                            src={user?.image as string} 
                            alt={user.name as string} 
                            width={48} 
                            height={48} 
                            className="rounded-full"/>
                       
                        </li>

                        <li>
                            <button onClick={() => signOut()}> Sign Out </button>
                        </li> 
                    </div>
                   
                    
                )}
            </ul>
        </nav> 
    )
    }
    
export default Nav;
