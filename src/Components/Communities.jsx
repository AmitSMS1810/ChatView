import React from 'react'
import { MdQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiSpeakerHighFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Communities() {
    return (
        <>
            <div className="w-full bg-white flex justify-between sticky top-0 items-center px-4 py-3">
                <h1 className='text-xl md:text-2xl'>Communities</h1>
                <div className="flex flex-row justify-center items-center gap-8 text-xl">
                    <span className="cursor-pointer"><MdQrCodeScanner /></span>
                    <span className="cursor-pointer"><MdOutlineCameraAlt /></span>
                    <span className="cursor-pointer"><HiOutlineDotsVertical /></span>
                </div>
            </div>
            <div className='h-screen px-4 space-y-8'>
                <div className='flex items-center gap-3'>
                    <span className='w-10 h-10 bg-stone-200 rounded-lg flex justify-center items-center'><HiOutlineUserGroup size={24} /></span>
                    <h1 className='font-semibold'>New community</h1>
                </div>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-3'>
                        <span className='w-10 h-10 bg-green-200 rounded-lg flex justify-center items-center'><PiSpeakerHighFill size={24} /></span>
                        <div>
                            <h1 className='font-semibold'>Announcements</h1>
                            <span>welcome to your community!</span>
                        </div>
                    </div>
                    <div>
                        <span>07/12/24</span>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-3'>
                        <span className='w-10 h-10 bg-stone-200 rounded-full flex justify-center items-center'><FaRegCommentDots size={24} /></span>
                        <div>
                            <h1 className='font-semibold'>General</h1>
                            <span>New community members will no longer...</span>
                        </div>
                    </div>
                    <div>
                        <span>07/12/24</span>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span className=''><IoIosArrowForward size={24} /></span>
                    <div>
                        <h1 className=''>View all</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Communities
