import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link,useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () =>{
    const history = useNavigate();
    const [listData,setListData] = useState([]);
    const [searchText,setSearchText] = useState('');
    const [filteredRestaurants,setFilteredRestaurants] = useState([])

    const filterRestaurant = () =>{
        console.log(" got the call here ")
        const filData = listData.filter(list=>{
            // console.log(list.info,list.info.avgRating)
            return +list.info.avgRating>=4
        })
        console.log(filData)
        setListData(filData)
        setFilteredRestaurants(filData)
    }
    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async () =>{
        const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        const restaurantList = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListData(restaurantList?.length>0?restaurantList:json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(restaurantList?.length>0?restaurantList:json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const searchRestaurant = () =>{
        const res = listData.filter(rest =>rest?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(res);
    }

    const status = useOnlineStatus()

    if(!status) return <h1>Looks like you are offline. Please check you internet!</h1>

    return listData?.length===0 ?  <Shimmer />: (
        <div className='body'>
            <div className='filter flex'>
                <div className='search m-4 p-4'>
                    <input type='text' 
                    className=' border border-solid border-black rounded' 
                    value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)} />
                    <button
                    className=' px-4 bg-green-100 m-4 py-2 btn-primary rounded-lg'
                        onClick={searchRestaurant}
                    >Search Restaurant</button>
                </div>
                <div  className='search m-4 p-4 flex items-center'>
                <button className='filter-btn bg-gray-100 px-4 py-2 rounded-lg' onClick={()=> filterRestaurant()}>Filter Top Rated Restaurants</button>
                </div>
                
            </div>
            <div className='flex flex-wrap'>
                {filteredRestaurants?.map(resDat=>{
                    return(
                        <div key={resDat?.info?.id}  onClick={()=>{history('/restaurant/'+resDat.info.id)}}>
                            <RestaurantCard resData={resDat}  />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Body;