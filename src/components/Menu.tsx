"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const user = false;

const links = [
    { id: 1, title: "Home", url: "/"},
    { id: 2, title: "Menu", url: "/menu"},
    { id: 3, title: "Hours", url: "/"},
    { id: 4, title: "Contact", url: "/"},
];

const Menu = () => {
  const [open,setOpen] = useState(false)
  return (
    <div>
        {!open ? (
            <Image className = 'hover:cursor-pointer' src="/open.png" alt="menu button" width={20} height={20} onClick={() => setOpen(true)}/>
            ) : (
                <Image className = 'hover:cursor-pointer' src="/close.png" alt="menu button" width={20} height={20} onClick={() => setOpen(false)}/> 
            )
        }
        
        {open && (<div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6em)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
            {/* left-0 to start at the top left and top-24 becaues the top divs above it both have heights of 12 so 12+12 = 24 */}
            {/* with brackets you can use plain css wihtin it */}
            {/* 100vh means the whole screen size and we have to subtract the top two divs' height to make sure it doesn't overflow */}
            {/* w-full makes width full page */}
            {/* gap-8 gives items cap inbetween */}
            {/* flex-col is what is allowing the items to be stacked vertically instead of horizontally */}
            {/* z-10 gives the component a z index of 10 so it goes above all other components */}
            {links.map(i=>(
                <Link href={i.url} key={i.id} onClick={()=>setOpen(false)}>{i.title}</Link>
            ))}
            {!user ? (
                <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
            ) : (
                <Link href="orders" onClick={()=>setOpen(false)}>Orders</Link>
            )}

            {/* Link tag is put around link component to use on click event even though it looks redundant at face value */}

            <Link href="/cart" onClick={()=>setOpen(false)}>
                <CartIcon/>
            
            </Link>

        </div>)}
    </div>
  )
}

export default Menu