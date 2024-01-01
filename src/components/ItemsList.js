import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({items}) =>{
    const dispatch = useDispatch();
    console.log({items})
    const addToCart = (item)=>{
        const selectedItem = item?.card?.info
        // console.log(i)
        const itemObj = {
            name: selectedItem?.name,
            price:((selectedItem?.price)/100),
            image:selectedItem?.imageId,
            description:selectedItem?.description,
        }
        dispatch(addItem(itemObj));
    }
    return(
        <>
            <div>
                {items.map(item=>(
                    <div data-testid="foodItems" key={item.card.info.id}  className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                            <div className="w-9/12 ">
                                <div className="py-2">
                                <span className="font-semibold">{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                                
                                </div>
                                <p className="text-xs py-4 pt-6">{item.card.info.description}</p>
                            </div>
                            <div className="w-3/12 p-4 ">
                                <div className="absolute py-1 px-2 mx-12 rounded-lg text-green-500 bg-white shadow-lg">
                                    <button data-testid="add-btn" className="" onClick={()=>addToCart(item)}>Add + </button>
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
