import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
const DropDown: React.FC = (): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleDropDown = () => setOpen(!isOpen);
    return (
        <div onClick={handleDropDown} className="relative w-full lg:max-w-sm">           
            <select className="text-transparent w-8">
                <option className='text-black'>Option 1</option>
                <option className='text-black'>Option 2</option>
                <option className='text-black'>Option 3</option>
                <option className='text-black'>Option 4</option>
            </select>
            <div className='absolute top-0'>
                {isOpen ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />}
            </div>
        </div>
    )
}

export default DropDown