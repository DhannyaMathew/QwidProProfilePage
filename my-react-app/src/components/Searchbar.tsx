import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar: React.FC = (): JSX.Element => {
    return (
        <div className="pt-2 relative mx-auto text-gray-800">
            <input className="border-2 border-gray-300 bg-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
                <AiOutlineSearch size={25} />
            </button>
        </div>
    )
}

export default Searchbar