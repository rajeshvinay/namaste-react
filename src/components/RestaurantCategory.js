import { useState } from "react"
import ItemsList from "./ItemsList"

const RestaurantCategory = ({category,expand,index,sendBackIndex}) =>{
    // const [expand,setExpand] = useState(false)
    const sendDataTop = ()=>{
        sendBackIndex(index)
    }
    return(
        <div className="mx-auto my-4  w-6/12 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={sendDataTop}>
                <span className="font-bold">{category?.title} ({category?.itemCards?.length})</span>
                <span >{!expand?'⬇️':'⬆️'}</span>
            </div>
           {expand && <ItemsList items = {category?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory