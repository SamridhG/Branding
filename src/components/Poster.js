import shoes from '../../textures/shoe_image.png'
const Poster=()=>{
    return (
        <div className="flex justify-center items-center my-48">
           <div className="w-9/12 flex">
                <div className="w-1/2">
                <div className='text-11xl font-bold leading-none'>YOUR FEET DESERVE THE BEST</div>
                <div className='w-4/6 text-xl '>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>
                <div className='flex my-4 justify-start'>
                    <button className='bg-[#D01C28] text-white px-4 py-2 text-3xl'>Shop Now</button>
                    <button className='border-gray-500 border-2 px-4 py-2 mx-12 text-5xl'>Category</button>
                </div>
                </div>
                <div className="w-1/2 flex justify-start items-center">
              
                   <img className="object-contain object-center h-full w-full" src={shoes}></img>
                 
                 </div>
           </div>
        </div>
    )
}
export default Poster