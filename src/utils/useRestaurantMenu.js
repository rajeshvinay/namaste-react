import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API } from "./constants"

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null)
    useEffect(()=>{
       fetchData() 
    },[])

    const fetchData = async() =>{
        const nonJson = await fetch(RESTAURANT_MENU_API+"restaurantId="+resId)
        const json = await nonJson.json()
        setResInfo(json.data);
    }

    return resInfo
}

export default useRestaurantMenu