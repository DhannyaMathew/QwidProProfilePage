import React, {useEffect, useState} from 'react'
import VerticalCard from './VerticalCard'
import HorizontalCard from './HorizontalCard'
import Button from './Button'
import DetailedCard from './DetailedCard'
import Profile1 from '../assets/profile1.jpg'
import Profile2 from '../assets/profile2.jpg'
import Profile3 from '../assets/profile3.jpg'
import axios from 'axios'
import Rating from './Rating'

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

interface InfoProps{
    body: string;
}

interface ErrorProps{
    message:string;
}

const ProfileBody: React.FC = (): JSX.Element => {
    const [info, setInfo] = React.useState<InfoProps|null>(null);
    const [error, setError] = React.useState<ErrorProps|null>(null);

    React.useEffect(()=> {
        axios.get(`${baseURL}`).then((response) => {
            setInfo(response.data);
        }).catch(error => {
            setError(error);
        })
    }, [])
   
    let text: string = "";
    if (!info){
        text = "";
    } else{
        text = info.body;
    }
    if (error){
        text = "Error obtaining data. Please contact xxxxxx for assistance.";
    }
    return (
        <div className='grid grid-cols-3 gap-24 p-24'>
            <div className='col-span-2 space-y-5'>
                <div className='flex flex-col space-y-5'>
                    <div className='flex items-center'>
                        <h1 className='text-3xl font-bold'> Cindy Ndlovu </h1>
                        <Rating/>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <h2 className='text-1xl font-bold'> Graphic Designer, Web Developer </h2>
                        <h3 className='text-base'> Website Developer, Front end developer, OIT Professional, Shopify and Web Developer, Senior Web Designer </h3>
                        <h4 className='text-xs'> 5 Active Projects | 3 Completed Projects | 3 Teams </h4>
                    </div>
                    <div className='flex space-x-1.5'>
                        <Button className='text-red-500 bg-transparent border-red-500 border rounded-2xl'>Send An Offer</Button>
                        <Button className='text-red-500 bg-transparent border-red-500 border rounded-2xl'>Message</Button>
                        <Button className='text-red-500 bg-transparent border-red-500 border rounded-2xl'>Share</Button>
                    </div>
                </div>
                <div className='flex space-x-5'>
                    <VerticalCard imagePath={Profile1}/>
                    <VerticalCard imagePath={Profile2}/>
                    <VerticalCard imagePath={Profile3}/>
                </div>
                <div className='flex flex-col space-y-5'>
                    <HorizontalCard header='BIO' content={text}/>
                    <HorizontalCard header='Experience' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'/>
                    <HorizontalCard header='Experience' content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'/>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='flex flex-col space-y-5'>
                    <DetailedCard header='Fixed Projects'/>
                    <DetailedCard header='Short Term Contract'/>
                </div>

            </div>
        </div>
    )
}

export default ProfileBody