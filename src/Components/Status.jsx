import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { LiaUserPlusSolid } from "react-icons/lia";
import { IoLogoAngular } from "react-icons/io";

function Status() {
  return (
    <>
      
      <div className="w-full bg-white flex justify-between sticky top-0 items-center px-4 py-3">
        <h1 className='text-xl md:text-2xl'>Updates</h1>
        <div className="flex flex-row justify-center items-center gap-8 text-xl">
          <span className="cursor-pointer"><MdQrCodeScanner /></span>
          <span className="cursor-pointer"><MdOutlineCameraAlt /></span>
          <span className="cursor-pointer"><IoIosSearch/></span>
          <span className="cursor-pointer"><HiOutlineDotsVertical /></span>
        </div>
      </div>
        <div className='h-screen px-4'>
        <h1 className='font-semibold text-xl py-2'>Status</h1>
        <div className='flex items-center gap-3 py-3'>
            <span className='h-10 w-10 bg-slate-200 flex justify-center items-center rounded-full'><LiaUserPlusSolid size={24}/></span>
            <div>
                <h1 className='font-semibold'>My status</h1>
                <span className=''>Tap to add staus update</span>
            </div>
        </div>
        <h1>Recent updates</h1>
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

export default Status
