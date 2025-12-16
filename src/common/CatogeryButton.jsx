import React from 'react'
import { Link } from 'react-router-dom'
const CatogeryButton = ({destination}) => {
  return (
    <div>
    <Link to={`/${destination}`} >
        <button className='py-1 px-2 bg-blue-600 font-bold text-white rounded-full mb-2 text-center pb-2'>View More</button>
    </Link>
    </div>
  )
}

export default CatogeryButton
