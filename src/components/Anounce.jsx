import React, { useState } from 'react'
import { Close } from '@material-ui/icons'

function Anounce() {
   const [anounceStyle, setAnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
  const handleClose = () => {
    setAnounceStyle(anounceStyle + " hidden")
  }
   return (
    <div className={anounceStyle}>
      <h2>Hurry up new deals are available, 40% off</h2>
      <Close className='cursor-pointer' onClick = {handleClose}/>
    </div>
  )
}

export default Anounce

