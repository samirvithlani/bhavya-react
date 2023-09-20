import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/ProductSlice'

export const CartComponent = () => {
    //container mapStateToProp
    const state =  useSelector(state=>state?.products?.productData)//productData
    const dispatch = useDispatch()
    console.log(state)
  return (
    <div>
        {
            state?.map((item)=>{
                return(
                    <div>
                        <h1>{item?.name}</h1>
                        <h1>{item?.price}</h1>
                        <button onClick={()=>dispatch(removeFromCart(item))}>Remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

