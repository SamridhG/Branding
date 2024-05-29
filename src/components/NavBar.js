import brandLogo from '../../textures/brand_logo.png';
const NavBar=()=>{
    return (
        <div className="cursor-pointer flex mx-60 my-6 p-4 justify-between">
           <div className='h-24'>
            <img className='object-cover object-center w-full h-full' src={brandLogo}></img>
           </div>
           <div className='flex justify-center items-center '>
            <ul className='font-poppins font-semibold text-3xl flex justify-center items-center'>
                <li className='px-5'>Menu</li>
                <li className='px-5'>Location</li>
                <li className='px-5'>About</li>
                <li className='px-5'>Contect</li>
            </ul>
           </div>
           <div className='flex justify-center items-center'>
            <button className='bg-[#D01C28] px-5 py-1 font-poppins text-fuchsia-50 text-2xl'>Login</button>
           </div>
        </div>
    )
}
export default NavBar