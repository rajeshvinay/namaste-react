import React from 'react'
import { Link } from 'react-router-dom'

const DetailedCartView = ({cartData})=> {
    // console.log(cartData)
  return (
        <div className='mt-4'>
            {cartData?.length>0 ?
            cartData.map((item,index)=>{
                return(
                    <div key={index} data-testId="det-cart" className='w-6/12 m-auto '>
                        <div className='bg-gray-200 p-2'>
                            <div className='flex justify-between'>
                                <h1 className='font-bold'>{item?.name}</h1>
                                <p>₹-{item?.price}</p>
                            </div>
                            <div>
                                <p>{item?.description}</p>
                            </div>
                        </div>
                        <br></br>
                    </div>
                )
            }) 
            :
                <div data-testid="cartEmpty">Cart is empty. Please add items to the cart from <Link to='/'>here.</Link></div>
            }
        </div>
  )
}

export default DetailedCartView