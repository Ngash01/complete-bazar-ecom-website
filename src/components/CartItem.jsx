import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { decrementQantity, deleteFromCart, incrementQuantity, resetCart } from "../redux/bazaarSlice";


export const CartItem = () => {
  const dispatch = useDispatch()

  const productData = useSelector((state)=> state.bazar.productData)
  console.log(productData)

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full ">
        <h2 className="font-titleFont text-2xl">Shopping cart</h2>
      </div>
      <div>
        {
         productData.map((item, key)=>{
          return <div key={item._id} className="flex items-center justify-between gap-6 mt-6">
            <div className="flex items-center gap-2">
              <CloseIcon onClick={()=> dispatch(deleteFromCart(item._id))}  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
              <img src={item.image} className="w-32 h-32 object-cover" alt="" />
            </div> 
            <h2 className="w-52 ">{item.title}</h2>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                  <p className='text-base text-black'>Quantity</p>
                  <div className='flex items-center gap-4 text-sm font-semibold'>
                    <button onClick={()=> dispatch(decrementQantity({
                      _id: item._id,
                      title: item.title,
                      image: item.image,
                      price: item.price,
                      quantity: 1,
                      description: item.description
                    }))}
                     className='border text-black h-5 font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=> dispatch(incrementQuantity({
                       _id: item._id,
                       title: item.title,
                       image: item.image,
                       price: item.price,
                       quantity: 1,
                       description: item.description
                      
         }))} className='border h-5 text-black font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>+</button>
                  </div>
                </div>
            <p className="w-10">${item.price * item.quantity}</p>
          </div>
         })
        }
        <button onClick={()=> dispatch(resetCart())} className='text-xl font-bold  bg-red-500 text-white py-1 ml-6 px-6 mt-8'>Reset Cart</button>

      </div>
    </div>
  )
}


