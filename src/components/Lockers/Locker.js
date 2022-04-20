import React from 'react';
import BorderCard from '../common/BorderCard'

const Locker = (props) => {
  const {id,name} = props.locker;
  return (
      
    <BorderCard style={{width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>ID:</h2>
          <h2 style={{fontWeight: 'bold'}}>{id}</h2>
        </div>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>Name:</h2>
          <h2 style={{fontWeight: 'bold'}}>{name}</h2>
        </div>
      </div>
    </BorderCard>
  )
}

export default Locker