import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'

import './CartSlots.css'
import basket from './basket.png'

import AboutSlot from '../../../Portal/SlotMenu/AboutSlot'

const productsMap = AboutSlot.reduce((accObj,slot)=>({
    ...accObj,
    [slot.id]:slot
}),{})

function CartSlots({
    SlotInCart,
    AddSlot,
    MinSlot,
    DeletSlot
}){
    return(
    <div>
        {keys(SlotInCart).map((ids)=>(
            <div className="CartSlot" key={ids}>
                <div className="CartSlotImg">
                <Link to={'/Slot/'+ids}><img src={productsMap[ids].image==undefined?CartSlots.defaultProps.image[0]:productsMap[ids].image[0]}/></Link>
                </div>
                <div className="CartSlotInfo">
                    {productsMap[ids].name}
                    <br></br>
                    Цена:{productsMap[ids].price+"$"}( В целом:{productsMap[ids].price*SlotInCart[ids]+"$"})
                    <br></br>
                    Количкство:<button onClick={()=>AddSlot(ids)}>+</button><input value={SlotInCart[ids]} readOnly/><button onClick={SlotInCart[ids]>1?()=>MinSlot(ids):()=>DeletSlot(ids)}>-</button>
                </div>
                <button className="Del" onClick={()=>DeletSlot(ids)}><img src={basket}/></button>
            </div>
            ))
    }
    <div className="TotalPrice">
        Вцелом:{keys(SlotInCart).reduce((total,ids)=>(total+productsMap[ids].price*SlotInCart[ids]),0)+"$"}
        <hr></hr>
    </div>
    </div>
)
        
}
CartSlots.defaultProps={
    image:['/Item/Noimg.png']
}

export default CartSlots