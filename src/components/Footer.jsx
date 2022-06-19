import React from 'react'
import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Twitter } from '@material-ui/icons'

function Footer() {
    const iconStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='flex items-center justify-around p-2'>
      <div className='flex-1 flex flex-col flex-wrap p-2'>
        {/* Store information  */}
        <h2>Learning React with me </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos vel ipsum saepe incidunt quos autem adipisci minus,
             itaque, molestias,
             sed distinctio cumque doloribus quidem. Aut corrupti dolorem laboriosam quaerat numquam.</p>
             <div className='flex item-center justify-center mt-3 self-start'>
                <div className={iconStyle + ' bg-blue-700'}>
                    <Facebook />
                </div>
                <div className={iconStyle + ' bg-orange-500'}>
                    <Instagram />
                </div>
                <div className={iconStyle + ' bg-sky-400'}>
                    <Twitter />
                </div>
             </div>
      </div>
      <div className='flex-1 flex flex-col p-2'>
        {/* Contsct information */}
        <div className='flex m-3'>
        <LocationOnOutlined />
        <p className='pl-3'>Abuja</p>
        </div>
        <div className='flex m-3'>
        <LocalPhoneOutlined />
        <p className='pl-3'>Abuja</p>
        </div>
        <div className='flex m-3'>
        <EmailOutlined />
        <p className='pl-3'>demo@gmail.com</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
