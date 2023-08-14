import React from 'react'

const Rating:React.FC = ():JSX.Element => {
    return (
        <div className="flex flex-row-reverse justify-center m-2">
            <i className="star border-yellow-100 peer peer-hover:border-yellow-500 hover:border-yellow-500 w-12 h-12 mx-2"></i>
            <i className="star border-yellow-100 peer peer-hover:border-yellow-500 hover:border-yellow-500 w-12 h-12 mx-2"></i>
            <i className="star border-yellow-100 peer peer-hover:border-yellow-500 hover:border-yellow-500 w-12 h-12 mx-2"></i>
            <i className="star border-yellow-100 peer peer-hover:border-yellow-500 hover:border-yellow-500 w-12 h-12 mx-2"></i>
            <i className="star border-yellow-100 peer peer-hover:border-yellow-500 hover:border-yellow-500 w-12 h-12 mx-2"></i>
        </div>
    )
}

export default Rating