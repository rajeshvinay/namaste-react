import { useState } from 'react';
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData?.info
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300' >
            <img
            // style={{borderRadius:'10px'}}
            className='rounded-lg'
            alt="res-logo"
            style={{width:'100%', height:'100%'}}
            src={CDN_URL+cloudinaryImageId} />
            <h3 className='font-bold py-4 text-lg'> {name}</h3>   
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating+" stars"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard