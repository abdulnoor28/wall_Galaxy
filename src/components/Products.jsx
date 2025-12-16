import React from 'react'
import CatogeryShape from '../common/catogeryShape.jsx'
import image1 from '../assets/wall_paper.png'

const Products = () => {
    return (
        <div>
        <h1 className="text-center text-[20px] sm:text-3xl md:text-[28px] font-sans font-semibold text-rose-500 mt-2">
            Services We Provide
        </h1>
        <div className='flex flex-wrap justify-around gap-1'>
            <CatogeryShape source={image1} information="Wall Paper" />
            <CatogeryShape source="https://cdn.thewirecutter.com/wp-content/media/2021/07/synthetic-lawn-2048px-802551536-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" information="Artificial Grass" destination="/" />
            <CatogeryShape source="https://images.pexels.com/photos/851238/pexels-photo-851238.jpeg" information="Blinds" destination="/" />
            <CatogeryShape source="https://images.pexels.com/photos/12515076/pexels-photo-12515076.jpeg" information="3d Wall Papers" destination="/" />
            <CatogeryShape source="https://images.pexels.com/photos/7534545/pexels-photo-7534545.jpeg" information="Wooden Flooring" destination="/"/>
            <CatogeryShape source="https://images.pexels.com/photos/6790048/pexels-photo-6790048.jpeg" information="Interior Works" destination="/"/>
        </div>
        </div>
    )
}

export default Products;
