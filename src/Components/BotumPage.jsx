import React from 'react';
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function BotumPage() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className='w-full md:w-[30%] mx-auto pb-4'>
            <hr className='py-2' />
            <div className='flex justify-between px-3 items-center'>
                <Link to='/' className='flex flex-col items-center'>
                    <div className={`p-2 rounded-full ${isActive('/') ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                        <MdMarkUnreadChatAlt size={24} />
                    </div>
                    <span className={`${isActive('/') ? 'text-green-500' : 'text-black'}`}>Chats</span>
                </Link>
                <Link to='/status' className='flex flex-col items-center'>
                    <div className={`p-2 rounded-full ${isActive('/status') ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                        <HiOutlineStatusOnline size={24} />
                    </div>
                    <span className={`${isActive('/status') ? 'text-green-500' : 'text-black'}`}>Updates</span>
                </Link>
                <Link to='/comm' className='flex flex-col items-center'>
                    <div className={`p-2 rounded-full ${isActive('/comm') ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                        <HiOutlineUserGroup size={24} />
                    </div>
                    <span className={`${isActive('/comm') ? 'text-green-500' : 'text-black'}`}>Communities</span>
                </Link>
                <Link to='/call' className='flex flex-col items-center'>
                    <div className={`p-2 rounded-full ${isActive('/call') ? 'bg-green-500 text-white' : 'bg-white text-black'}`}>
                        <IoIosCall size={24} />
                    </div>
                    <span className={`${isActive('/call') ? 'text-green-500' : 'text-black'}`}>Calls</span>
                </Link>
            </div>
        </div>
    );
}

export default BotumPage;
