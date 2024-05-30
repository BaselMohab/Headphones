import React from 'react'
import { useGlobalContext } from '../StoreContext & StoreReducer/StoreContext'


const CartProducts = ({item}) => {

  const {remove, increase, decrease} = useGlobalContext()

  const handleRemove = (item) => {
    remove(item)
  }
  const handleIncrease = (item) => {
    increase(item)
  }
  const handleDecrease = (item) => {
    decrease(item)
  }

  const itemTotal = item.price * item.amount


  return (
    <section>
      <div className='grid grid-cols-8 text-white items-center gap-10 py-3 text-2xl mx-auto'>
      <img src={item.image} className='w-32 col-span-2' /> 
      <div className='col-span-2'>
        {item.name}
      </div>
      <div>
        ${item.price}
      </div>
      <div className='flex flex-col items-center'>
        <button className='amount-btn'
        onClick={() => handleIncrease(item)}
        >
          <i class="fa-solid fa-chevron-up"></i>
        </button>
        <p>{item.amount}</p>
        <button className='amount-btn'
        onClick={() => handleDecrease(item)}
        >
          <i class="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <div>
        ${itemTotal}
      </div>
      <button className='text-lg cursor-pointer trash'>
        <i 
        onClick={()=> handleRemove(item)}
        class="fa-solid fa-trash-can"></i>
      </button>
      </div>
    </section>
    
  )
}

export default CartProducts
