import RestaurantCard from './RestaurantCard';
import resArray from '../utils/mockData';
import { useState } from 'react';

const Body = () =>{
    let [listData,setListData] = useState(resArray);


    const filterRestaurant = () =>{
        const filData = listData.filter(list=>+list.data.avgRating>=4)
        setListData(filData)
    }
    
    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=> filterRestaurant()}>Filter Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listData.map(resDat=>{
                    return(
                        <RestaurantCard key={resDat?.data?.id} resData={resDat}  />
                    )
                })}
            </div>
        </div>
    )
}

export default Body;