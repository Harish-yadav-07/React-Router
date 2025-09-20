import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 w-fit text-white text-3xl p-8 mx-auto m-37 rounded-lg text-center'>User: {userid}</div>
  )
}

export default User;