import React from 'react'
import { Link } from 'react-router-dom'
import CatogeryButton from './catogeryButton'
const CategoryShape = ({ source, information,destination }) => {
  return (
    <div
      className="w-37.5 sm:w-[20%] lg:w-[25%] flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg m-3"
    >
      <img src={source} alt="image" className="w-full h-27 md:h-48 object-cover" />
      <p className="text-center font-sans pb-3 text-sm md:text-xl mt-2">{information}</p>
      <CatogeryButton destination={destination}/>
    </div>
  )
}

export default CategoryShape
