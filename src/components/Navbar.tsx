import Link from 'next/link'
import MenuPage from './Menu'
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 bg-white text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500'>
        {/* LOGO */}
        <div className='text-xl'>
            <Link href="/">LUGIS</Link>
        </div>
        {/* Mobile Menu */}
        <div>
            <MenuPage/>
        </div>
    </div>
  )
}

export default Navbar