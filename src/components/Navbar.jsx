import React from 'react'
import Filter from './Filter'

const Navbar = ({setSelectedGender, setOrderByBirth}) => {
  return (
    <div className=' md:h-1/4 px-2 md:px-16 pt-6 max-sm:w-screen'>
        <div className='flex justify-between md:mx-20 px-4 '>
          <img src='netatmologo.jpg'></img>
          <h2 className='pt-2 text-lg'>Hello admin !</h2>
        </div>
        <div className='mb-4 px-3'>
          <Filter setSelectedGender= {setSelectedGender} setOrderByBirth={setOrderByBirth}/>
        </div>
    </div>
  )
}

export default Navbar