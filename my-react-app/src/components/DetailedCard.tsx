import React from 'react'
import Button from './Button'

interface DetailedCardProps {
    header: string;
}
const DetailedCard: React.FC<DetailedCardProps> = ({ header }): JSX.Element => {
    return (
        <div className="rounded-xl max-w-sm overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{header}</div>
                <div className='grid grid-cols-2 grid-rows-2'>
                    <div className="font-bold text-md mb-2 mt-2 text-red-500 underline">Standard</div>
                    <div className="font-bold text-md mb-2 mt-2 text-red-500">Premium</div>
                    <div className="font-bold text-md mb-2 mt-2">Standard</div>
                    <div className="font-bold text-md mb-2 mt-2">Euro Pricing</div>
                </div>
                <p className="text-gray-700 text-base mb-8 mt-8">
                    40,000 Map Citations, +60 Live Back-Links, +20Driving Directions+60Miles Radius Cover
                </p>
                <div className="font-bold text-md mb-2 mt-2">7 Day Delivery</div>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-col space-y-2">
                <Button className='text-red-500 bg-white border-red-500 border rounded-2xl'>Send An Offer</Button>
                <Button className='text-red-500 bg-white border-red-500 border rounded-2xl'>Hire Cindy</Button>
                <Button className='text-red-500 bg-white'>Compare Packages</Button>
            </div>
        </div>
    )
}

export default DetailedCard