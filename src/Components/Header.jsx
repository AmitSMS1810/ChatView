import { MdQrCodeScanner } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";


function Header() {

  return (
    <>
      <div className="w-full bg-white md:w-[30%] flex justify-between items-center px-3 py-2">
        <h1 className='text-xl md:text-2xl font-bold text-green-400'>WhatsApp</h1>
        <div className="flex flex-row justify-center items-center space-x-4">
          <span className="cursor-pointer"><MdQrCodeScanner /></span>
          <span className="cursor-pointer"><MdOutlineCameraAlt /></span>
          <span className="cursor-pointer"><HiOutlineDotsVertical /></span>
        </div>
      </div>
    </>
  )
}

export default Header
