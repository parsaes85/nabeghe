import React from 'react'
import WishlistCourseBox from './WishlistCourseBox'

function Main() {
  return (
    <div className='mb-10'>
        <h5 className="font-bold text-lg mb-6">دوره هایی که پسندیدید</h5>
        <div className='space-y-12'>
            <WishlistCourseBox />
            <WishlistCourseBox />
        </div>
    </div>
  )
}

export default Main