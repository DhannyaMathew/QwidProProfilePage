import React from 'react'
import Banner from '../assets/banner2.jpg'
import ProfilePicture from './ProfilePicture'
const BannerProfile: React.FC = (): JSX.Element => {
    return (
        <div className="bg-white flex mt-8 mx-24 rounded-lg">
            <div className="mx-auto relative w-full">
                <div className='overflow-hidden h-96 shadow-sm'>
                    <img className="rounded-lg w-full" src={Banner} alt="user banner" />
                </div>
                <div className="absolute -bottom-10 left-5">
                    <ProfilePicture imageDimensions='w-32 h-32' statusDimensions='h-8 w-8' />
                </div>
            </div>
        </div>
    )
}

export default BannerProfile