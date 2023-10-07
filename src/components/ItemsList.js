import { CDN_URL } from "../utils/constants";

const ItemsList = ({items}) =>{
    console.log({items})
    return(
        <>
            <div>
                {items.map(item=>(
                    <div key={item.card.info.id}  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                            <div className="w-9/12 ">
                                <div className="py-2">
                                <span className="font-semibold">{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                                
                                </div>
                                <p className="text-xs py-4 pt-6">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12 p-4 ">
                                <div className="absolute py-1 px-2 mx-12 rounded-lg text-green-500 bg-white shadow-lg">
                                    <button className="">Add + </button>
                                </div>
                                <img className="w-full h-[120px] rounded-md" src={CDN_URL+item.card.info.imageId}></img>
                           </div>
                        
                        
                    </div>
                ))}
            </div>
        </>
    )
}

export default ItemsList;
