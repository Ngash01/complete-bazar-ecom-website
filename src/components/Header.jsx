import { LogoLight } from '../assets/index';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export const Header = () => {
  const productData = useSelector((state)=> state.bazar.productData)
  const UserInfo = useSelector((state)=> state.bazar.userInfo)
  console.log(UserInfo)
  // console.log(productData)
  return (
    <div className='z-50 w-full h-30 bg-white border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont '>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
       <Link to='/'>
          <div>
            <img src={LogoLight} alt="LogoLight" className='w-28' />
          </div>
       </Link>
      <div className='flex gap-5 items-center'>
        <ul className='flex items-center gap-8 cursor-pointer'>
          <Link to={'/'}><li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li></Link>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Pages</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Shop</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Element</li>
          <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300' >Blog</li>
        </ul>
        
        <Link to='/cart'>
          <div className='cursor-pointer relative'>
          <ShoppingCartIcon/>
          <span className='abslute top-2 left-0'>{productData.length}</span>
          </div>
        </Link>
        <Link to={'/login'}>
          <img className='w-8 h-8 round-full' src={UserInfo ? UserInfo.image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAYQMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAQQCAwUG/8QANhAAAQQBAwEHAgMGBwAAAAAAAQACAxEEEiExEwUiQVFhgZEUcQZCoRUjMjNy8FOSorGywdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGxEBAAICAwAAAAAAAAAAAAAAAAERAkEEEyH/2gAMAwEAAhEDEQA/APHIiICIiAiIgIiICIiApHKhSOUEqVCKKhQpUKoIiICIiAiIgLJjHSODWCyVcwsPXollHccToB/PXPsrGSyOLU9n7sAAP0t5O9BZmdQ6sOPeHZlNQ5bmOY4tcKKgcqZHankjjwUDlahz5VfjJFClQYlQpKhVkVvF7LzMuMyQQ6mA0SXAV8legx8fslscLhglznxh/elcfLw9/wBFrGdidWUR4OIzpiwXMLt9Jd/0VRzf2DkNIEs+LESap8u9/C2xdgMeAfrmOvjpRl4PuF0/2hLHrET8aENice7ERTu9vwdu6sZO0MslwdnNGnE1mgRTuNX8PH90grR/h2FwG+XJfiI+n/yCsR9hQRFofiy9Q7tbM8eHJNGq4+futAfk5ORFGzOLj9KdQL3USWnvH/MDfotRgGTm4zI5gYnY7gwOJ1UdY1ccnn7n7IOnk1g4hcY4/qJ3tZqDuoWij4UNgBYFc15Lh9syBr3Qhmi36qsd0DugfOv5XoMh7TJES0aYyTsN21sR9iGnf1Xks6UzZcj3c3Xxz+tn3Rb0rqRyoQcqIyREUaYoiKsvWxahFAx0TWyCNh3bV7b8ey5ks0LG5tQMIdI1jdLnAvJu/Hyv5VnFyg+GAQv/AJcQa/fa6GxH3FX6p0sd5iL4xbXF4LO6SR6ceCo1ZE2C453U6oAcyMuY8d478AjbgplDDc/LImeCQ2J1EbVRoXQ/L5rEdlxFsbGTGuprc17eRttY9/laz2bM+N2uiJZw90jTYDADZ/1H4Qb5MVsMc72yyBzomxE9O9LQGtPB8SK9nK5jNhhm6bZGum+lYynNOw2228ySa549VzpZJct+TLpcxpnbdGgyNocef73+6sRZJGTkZD5G6A668W6QRv7kIIys4snm0HUIhXUv07oPnuK9155W5tccL3OIBmIto48z8d35VRQFI5UIEGSKEUVCIiqA2NjYjxViPOyI7/eF186t/wBeVXAvhdDF7IyMyPXjvx3+beqNQ9kEx9qf4kVVxoOw9j7+K6XWAx4p3vIhkBPU8bvgeHIG1rlfsvI1FuvGLmmiPqGWP1VrBwsyGTpPdF9NKdMrROwij41fI59kHQORr0s2fHQHfFX5E+deG/mb8q2UYhA58bTE+V/eJ31AbmvelXxeyCYRKc1mO43cf5gPn9FGXGZcaSfqNY4SGoz/ABFpO1VtsqK0bGZmWIXOLHv2YeRq4AP+1qkrePj5EOVE4Na1zHNfbngAbggk+S0ZPT+pl6JuLW7R/Teyg1oiIJRQiAiIg9D2L2Hj9s47jG/Iicyg891zS70GxWfZmTg9knKiZnkmQtB1wubRa6/C7B3Huq/4a7Sm7P8AqzDBJLbA92ht1V8+XPPoubhQukDy0iqo+qC1NgNypnzN7SwXukcXG3lnP9QVzH/DAnha8Z0RcRu2On/FO3XHdivDiNtvVa3QlvNILvaGDmOzZ5ThZDWySOcNTDsCbVfEd0JnCQBgexzCXDiwa/Vdv8HysZnytyZCIxCS0l5AadQHHusO1O2Zj2xkDEyXDGbs3YO3A8L9UHCme57mh5vQNI+wWtbJv5hN3e61oCIiAilEEIiIPS/hRmG1sz8t9Elpa264v/1UH4xgyJOhRj1HTv4LnxSlg2NJ1Xeao2Ssl1EkFaS1/iCtgmf5rdHP3acLUEYNdanOlZQsdI04nytasyB2Llywl2rQ4jV5qzjTCOUvobcLXM5s8xc7kndBU5WJ5W6ePoylnNLSgIiICIiApREALMBYhZWgyWbBZ9FrUgoMyaJpTGbeLWsqLoIJyH65XO81pWRUIIREQEREEoiIJClEQSpCIgKCoRBChEQFCIgIiIP/2Q=='} />    
        </Link>          
          { UserInfo && <p>{UserInfo.name}</p>}
      </div>
      </div>
     
    </div>
  )
}


