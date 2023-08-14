import React from 'react'

interface VerticalCardProps{
    imagePath: string;
}

const VerticalCard:React.FC<VerticalCardProps> = ({imagePath}):JSX.Element => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src={imagePath} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Website</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    )
}

export default VerticalCard