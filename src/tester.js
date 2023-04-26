// const idString = (Title)=>{
//   const newIdstring = String(Title).toLowerCase().split(" ").join("")
//   return newIdstring;
// }

// // CART PAGE

// import { useSelector } from "react-redux";
// import CloseIcon from '@mui/icons-material/Close';

// export const CartItem = () => {
//   const productData = useSelector((state)=> state.bazar.productData)
//   console.log(productData)
//   return (
//     <div className="w-2/3 pr-10">
//       <div className="w-full">
//         <h2 className="font-titleFont text-2xl">shopping cart</h2>
//       </div>
//       <div>
//         {
//           productData.map((item)=> (
//             <div key={item._id}
//                   className="flex items-center justify-between gap-6 mt-6"
//                   >
//                     <div>
//                       <CloseIcon className="text-xl text-gray-600 hover:text-red-600 cursor-pointer
//                       duration-300"/>
//                       <img className="w-32 object-cover" src={item.image} alt="" />
//                     </div>
//                 </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }



// // CART  

// import React from 'react'
// import { CartItem } from '../../components/CartItem';

// export const Cart = () => {
  
//   return (
//     <div>
//       <img className='w-full h-60 object-cover' src={"/img/pexels 4345.jpg"} alt="cartImg" />
//       <div className='max-w-screen-xl mx-auto py-20 flex '>
//         <CartItem />
//         <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
//           <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
//             <h2 className='text-2xl font-medium'>cart totals</h2> 
//             <p className='flex items-center gap-4 text-base'>
//               Subtotal  
//             <span className='font-bold text-lg'>200</span></p>
//             <p className='flex items-start gap-4 text-base'>
//               Shipping 
//               <span>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
//                 Veritatis
//               </span>
//             </p>
//           </div>
//           <p className='font-titleFont font-semibold flex justify-between mt-6'>
//             Total <span className='text-xl font-bold'>$200</span>
//           </p>
//           <button className='text-base text-white w-full py-3 mt-6 hover: bg-gray-800 duration-300'>proceed to checkout</button>
//         </div>
//       </div>
//     </div>
//   )
// }
