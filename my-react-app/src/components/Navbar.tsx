import React from 'react'
import { AiOutlineBell, AiOutlineMessage, AiOutlineCopy } from 'react-icons/ai';
import Button from './Button';
import ProfilePicture from './ProfilePicture';
import Searchbar from './Searchbar';
import DropDown from './DropDown';

const Navbar: React.FC = (): JSX.Element => {

    return (
        <div className='flex justify-between items-center h-20 mx-auto px-8 text-black bg-white shadow-md'>
            <div className='flex space-x-3 items-center'>
                <h1 className='w-full text-3xl font-bold text-red-500'>QWID</h1>
                <h1 className='w-full text-3xl font-bold text-black'>PRO</h1>
                <Searchbar />
                <div className='flex space-x-3 bg-gray-300 py-1 px-1 rounded-md'>
                    <Button className='text-white'>Freelancer</Button>
                    <Button className='bg-gray-200'>Employer</Button>
                </div>
            </div>

            <div className='flex items-center'>
                <ul className='flex px-8'>
                    <li className='p-4 hover:opacity-40 duration-300 flex flex-col items-center'><AiOutlineCopy size={25} />Projects</li>
                    <li className='p-4 hover:opacity-40 duration-300 flex flex-col items-center'><AiOutlineMessage size={25} />Messages</li>
                    <li className='p-4 hover:opacity-40 duration-300 flex flex-col items-center'><AiOutlineBell size={25} />Notifications</li>
                </ul>
                <Button className='text-white'>Post Project</Button>
                <div className='flex px-4 items-center'>
                    <ProfilePicture imageDimensions='w-12 h-12' statusDimensions='h-3 w-3' />                    
                    <div>
                        <DropDown/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar