import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
const Footer = () => {
    return (
    <footer>
    <div className="w-full flex flex-wrap justify-around px-5 mt-5 border-t pt-5 font-[10px]">
    <div className="w-full sm:w-1/2 lg:w-1/4 flex flex-col justify-start items-start gap-2">
        <Link to="/" className="text-green-700 font-bold text-4xl">
        Wall Galaxy
        </Link>
        <p className="text-sm">
        Looking to upgrade your walls or interiors? Contact us today for premium wallpapers, 3D wall designs, artificial grass, blinds, wood flooring, and complete interior solutions. Call or WhatsApp us for a free consultation and quotation. We serve residential and commercial spaces with quality materials, expert installation, and timely service.
        </p>
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/6 flex flex-col justify-start items-start gap-1">
        <h2 className="font-semibold text-lg">Services</h2>
        <Link to="/wallpapers">Wallpapers</Link>
        <Link to="/Artificial_Grass">Artificial Grass</Link>
        <Link to="/Blinds">Blinds</Link>
        <Link to="/3d_wallpapers">3D Wallpapers</Link>
        <Link to="/wooden_Flooring">Wooden Flooring</Link>
        <Link to="/interior_works">Interior Works</Link>
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/9 flex flex-col justify-start items-start gap-1">
        <h2 className="font-semibold text-lg">Navigation</h2>
        <Link to="/">Home</Link>
        <Link to="/About_us">About</Link>
        <Link to="/Contact_us">Contact</Link>
        <Link to="/Products">Products</Link>
    </div>

    <div className="w-full sm:w-1/2 lg:w-1/5 flex flex-col items-center gap-1">
        <h2 className="font-semibold text-lg">Contact</h2>
        <a href="tel:+919059040439" className="text-blue-600 font-semibold">
        📞 +91 90590 40439
        </a>
        <p>Mon–Sun • 9AM–4PM</p>
        <div className="flex gap-3 mt-2">
        <FaWhatsapp size={22} />
        <CgMail size={22} />
        </div>
    </div>
</div>
<div className='ml-20'>
        <p>&copy; 2025 Wall Galaxy. All Rights Reserved.</p>
        <p>Privacy Policy</p>
</div>
</footer>

    )
}

export default Footer;
