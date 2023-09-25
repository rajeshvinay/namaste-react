import { useState } from 'react';
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,sla} = resData?.info
    return(
        <div className='res-card' style={{background:'#f0f0f0'}}>
            <img
            style={{borderRadius:'10px'}}
            className='res-logo'
            alt="res-logo"
            src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>   
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating+" stars"}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>
        </div>
    )
}

export default RestaurantCard