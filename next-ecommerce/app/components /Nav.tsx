'use client' 

import {Session} from 'next-auth'
import {signIn} from 'next-auth/react'
import Image from 'next/image'


const Nav = ({user}: Session) => {
    return(
        <nav className="flex justify-between items-center py-8">
            <h1>Styled</h1>
            <ul>
                <li> Products</li> 
                {!user && (
                     <li>
                        <button onClick={() => signIn()}> Sign in </button>
                    </li> 
                )}
                { user && (
                    <li>
                        <Image 
                            src={user?.image as string} 
                            alt={user.name as string} 
                            width={48} 
                            height={48} 
                            className="rounded-full"/>
                    </li>
                )}
            </ul>
        </nav> 
    )
    }
    
export default Nav;
