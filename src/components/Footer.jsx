import React from 'react';
import {LogoLight} from "../assets/index";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-10 px-7 font-titleFont flex flex-row justify-between'>
      <div className=' flex flex-col gap-7'>
        <div className='flex flex-col gap-7'>
          <img className=' h-10 w-20' src={LogoLight} alt="" />
          <p className='text-white text-sm tracking-wide'>© ReactBD.com</p>
          <img src={'/img/payment.png'} className='w-80' alt="" />
        </div>
        <div className='flex flex-row gap-3'>
          <GitHubIcon/>
          <YouTubeIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
        </div>
      </div>
      <div className="">
        <h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
        <p>MBD.RM, MUSCAT OMAN</p>
        <p>Mobile: 009683732</p>
        <p>Phone: 00363528</p>
        <p>Email: bazaar667@gmail.com</p>
      </div>
      <div>
        <h2 className='text-xl text-white 300 mb-3'>Profile</h2>
        <p>My Account</p>
        <p>Checkout</p>
        <p>Order tracking</p>
        <p>help & support</p>

      </div>
    </div>
  )
}
