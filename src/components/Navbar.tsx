import Link from 'next/link'
import MenuPage from './Menu'
import React from 'react'
import CartIcon from './CartIcon';
import Image from 'next/image';

const user = false;

const Navbar = () => {
  return (
    <div className='h-12 bg-white text-red-500 p-6 py-8 flex items-center justify-between border-b-2 border-b-red-500 text-transform: uppercase md:h-24 lg:px-20 xl:px-40'>
        {/* left side links */}
        {/* addding flex-1 to all divs within navbar allows for them to be properly centered*/}
        <div className='hidden md:flex gap-4 flex-1'>
            {/* this hidden and md:flex combo will make it so the div will not appear when the page is small/for mobile devices but appear when large enough screen */}
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
            {!user ? (
                <Link href="/login">Login</Link>
                ) : (
                <Link href="/orders">Orders</Link>
            )}
        </div>
       
        {/* LOGO */}
        <div className='text-xl font-bold flex-1 md:text-center'>
            <Link href="/">LUGIS</Link>
        </div>

         {/* right side links */}
         
         <div className='hidden md:flex gap-8 items-center justify-end flex-1'>
          {/* justify-end makes it go to the far right */}

            <div className='md:absolute top-1.5 r-2 lg:static flex items-center gap-3 cursor-pointer text-white bg-orange-400 p-1.5 rounded-md'>
                {/* md:absolute makes the phone div be able to be placed exactly while lg:static allows it to be affected by flex again*/}

                <Image src="/phone.png" alt="phone icon" width={20} height={20}/>
                <span> +1 012 345 6789 </span>
            </div>
            
            <CartIcon/>

        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
            <MenuPage/>
        </div>
    </div>
  )
}

export default Navbar