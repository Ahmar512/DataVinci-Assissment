import React from 'react'
import ListItem from './ListItem';

const List = (props) => {
    const filteredData = props.data.filter((t)=> props.toggle === t.status.toLowerCase());
    


  return (
    <div className='flex flex-col gap-3 mt-5'>
        {filteredData.map((data)=>(
            <ListItem data={data} />
        ))}
    </div>
  )
}

export default List