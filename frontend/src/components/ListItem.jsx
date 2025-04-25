import React from 'react'

const ListItem = ({data}) => {
  return (
    <div className='w-full bg-white rounded-lg shadow-lg px-5 py-3'>
        <div className='text-lg font-semibold'>
            <p>Campaign Name : {data.name}</p>
        </div>
        <div className='text-lg font-semibold'>
            <p>Status  : {data.status}</p>
        </div>
        <div className='text-lg font-semibold'>
            <p>Clicks : {data.clicks}</p>
        </div>
        <div className='text-lg font-semibold'>
            <p>Cost : {data.cost}</p>
        </div>
        <div className='text-lg font-semibold'>
            <p>Impressions : {data.impressions}</p>
        </div>
    </div>
  )
}

export default ListItem