import React, { useState } from 'react'
import { IoArrowBackSharp } from "react-icons/io5";
import { IoCaretForwardOutline } from "react-icons/io5";
import { BsMeta } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoLogoAngular } from "react-icons/io";

function Home() {
    const [show,setShow] = useState(false);
    const handleShow = () =>
    {
        setShow(!show);
    }
  return (
    <>
      
      <div className="w-full bg-white flex justify-between sticky top-0 items-center px-4 py-3">
        <h1 className='text-xl md:text-2xl font-bold text-green-400'>WhatsApp</h1>
        <div className="flex flex-row justify-center items-center gap-8 text-xl">
          <span className="cursor-pointer"><MdQrCodeScanner /></span>
          <span className="cursor-pointer"><MdOutlineCameraAlt /></span>
          <span className="cursor-pointer"><HiOutlineDotsVertical /></span>
        </div>
      </div>
          <div className='w-full h-screen px-1 md:px-5'>
          <div className='flex justify-between items-center bg-slate-50 rounded-full  px-2 py-2'>
            <div className='flex items-center gap-2'>
              {show && <IoArrowBackSharp size={24} className='cursor-pointer'/>}
            <BsMeta size={24}/>
            
            <input onClick={handleShow} type="text" placeholder='Ask Meta AI or Search' className='outline-none bg-slate-50'/>
            </div>
            {show && (
              <div>
              <IoCaretForwardOutline className='cursor-pointer w-8 h-8 bg-green-500 rounded-full text-white'/>
            </div>
            )}
           </div>
           <div className='py-4'>
            <ul className='flex items-center gap-1 md:gap-3'>
                <li className='bg-slate-50 rounded-full px-3 py-1 cursor-pointer'>All</li>
                <li className='bg-slate-50 rounded-full px-3 py-1 cursor-pointer'>Unread</li>
                <li className='bg-slate-50 rounded-full px-3 py-1 cursor-pointer'>Favourites</li>
                <li className='bg-slate-50 rounded-full px-3 py-1 cursor-pointer'>Groups</li>
                <li className='bg-slate-50 rounded-full px-3 py-1 cursor-pointer'><FiPlus/></li>
            </ul>
           </div>
           <div className='flex justify-between py-2'>
                    <div className='flex items-center gap-3'>
                        <span className='w-10 h-10 bg-stone-200 rounded-full flex justify-center items-center'><IoLogoAngular size={24} /></span>
                        <div>
                            <h1 className='font-semibold'>General</h1>
                            <span>New community members will no longer...</span>
                        </div>
                    </div>
                    <div>
                        <span>07/12/24</span>
                    </div>
                </div>
                <div className='flex justify-between py-2'>
                    <div className='flex items-center gap-3'>
                        <span className='w-10 h-10 bg-stone-200 rounded-full flex justify-center items-center'><IoLogoAngular size={24} /></span>
                        <div>
                            <h1 className='font-semibold'>General</h1>
                            <span>New community members will no longer...</span>
                        </div>
                    </div>
                    <div>
                        <span>07/12/24</span>
                    </div>
                </div>
          </div>
          </>
  )
}

export default Home
