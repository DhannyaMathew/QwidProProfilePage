import React from 'react'
import DP from '../assets/user.png';

interface PictureProps {
    imageDimensions: string;
    statusDimensions: string;
}
const ProfilePicture: React.FC<PictureProps> = ({imageDimensions, statusDimensions}): JSX.Element => {
    return (
        <div className="flex space-x-2">
            <div className={`relative ${imageDimensions}`}>
                <img className="rounded-full border border-gray-100 shadow-sm" src={DP} alt="user image" />
                <div className={`absolute top-0 right-0 ${statusDimensions} my-1 border-2 border-white rounded-full bg-green-400 z-2`}></div>
            </div>
        </div>
    )
}

export default ProfilePicture