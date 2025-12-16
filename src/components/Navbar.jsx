import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-gray-50 flex justify-between items-center px-4 py-3 fixed top-0 z-50 shadow-sm">

        {/* Logo */}
        <Link
          to="/"
          className="text-green-700 font-bold text-xl"
        >
          Wall Galaxy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[60%] justify-between px-10 text-black font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">Products</Link>
          <Link to="/contact">Categories</Link>
        </div>

        {/* Desktop Call Button */}
        <div className="hidden md:flex bg-green-600 rounded-2xl px-4 py-2">
          <a
            href="tel:+919059040439"
            className="text-white font-bold"
          >
            +91 90590 40439
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl text-green-700 cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-green-700 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-15 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Categories</Link>

          <a
            href="tel:+919059040439"
            className="bg-green-600 text-white px-6 py-2 rounded-xl font-bold"
          >
            +91 90590 40439
          </a>
        </div>
      )}
    </>
  )
}

export default Navbar;
