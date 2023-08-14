import React from 'react'

interface HorizontalCardProps{
    header: string;
    content: string;
}

const HorizontalCard:React.FC<HorizontalCardProps> = ({header, content}):JSX.Element => {
    return (
        <div className="w-full lg:flex">
            <div className="border rounded-xl bg-white p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{header}</div>
                    <p className="text-gray-700 text-base">{content}</p>
                </div>
                
            </div>
        </div>
    )
}

export default HorizontalCard