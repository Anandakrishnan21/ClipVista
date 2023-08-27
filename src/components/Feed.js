import React from 'react'
import Video from './Video'

function Feed({selectedCategory}) {
  return (
      <div className='w-full flex flex-row flex-wrap bg-gray-800 p-2'>
        <Video selectedCategory = {selectedCategory}/>
      </div>
  )
}

export default Feed
