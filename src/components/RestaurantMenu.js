import { useEffect, useState } from "react"
import { RESTAURANT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    const [itemIndex,setItemIndex] = useState(null);
    const receiveIndex = (index)=>{
        if(index === itemIndex) setItemIndex(null)
        else setItemIndex(index)
    }
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
    // console.log( resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c=>c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)
    return(
        <div className="classified-restaurant text-center">
            <div>
                <h2 className="font-bold my-6 text-2xl">{name}</h2>
                <p className="font-bold">{cuisines.join(',')} - {costForTwoMessage}</p>
                {categories.map((category,index)=> <RestaurantCategory key={index} category={category?.card?.card} expand={ itemIndex !== null && (index===itemIndex ? true:false)} index={index} sendBackIndex={receiveIndex} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu