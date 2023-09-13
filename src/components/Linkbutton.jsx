import React from 'react'
import { Link } from 'react-router-dom'

export const Linkbutton = () => {
  return (
  <>
    <div className="flex justify-around">
      <Link to={'/HomeNormal'} className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">User Home Sector</Link>
      <Link to={'/HomeAdmin'} className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Admin Home Sector</Link>
    </div>
    </>
  )
}
