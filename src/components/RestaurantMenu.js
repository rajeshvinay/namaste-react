import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    // const [resInfo,setResInfo] = useState(null)
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // const fetchMenu =async () =>{
    //    const resp = await fetch(RESTAURANT_MENU_API+"restaurantId="+resId)
    //     const jsonData = await resp.json();
    //     console.log(jsonData.data.cards[0].card.card.info.name)
    //     console.log(jsonData.data.cards[0].card.card.info)
    //     setResInfo(jsonData.data);
    //     console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info)
    // }
    if(resInfo === null) return <Shimmer />
    const {name,areaName,avgRatingString,costForTwoMessage,cuisines} = resInfo.cards[0].card.card.info; 
    const {itemCards} = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return(
        <div className="classified-restaurant">
            <div>
                <h2>{name}</h2>
                <h4>{areaName}</h4>
                <span>{avgRatingString}⭐ - 💰{costForTwoMessage}</span>
                <p>{cuisines.join(',')}</p>
                <p></p>
            </div>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((menuCard,index)=>(
                    <li key={index}>{menuCard?.card.info.name} -- {menuCard?.card.info.price/100 || menuCard?.card.info.defaultPrice/100}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu