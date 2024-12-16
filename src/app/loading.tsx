import React from 'react'
import { ImSpinner } from 'react-icons/im'

function loading() {
  return (
    <div className='text-center fixed_height flex items-center justify-center'>
      <ImSpinner className='text-4xl animate-spin text-blue-500' />
    </div>
  )
}

export default loading