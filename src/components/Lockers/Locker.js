import React from 'react';
import BorderCard from '../common/BorderCard'

const Locker = (props) => {
  const {id} = props.locker;
  return (
      
    <BorderCard style={{width: '100%'}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{flexDirection: 'column', margin: 10}} >
          <h2>Locker ID:</h2>
          <h2 style={{fontWeight: 'bold'}}>{id}</h2>
        </div>
      </div>
    </BorderCard>
  )
}

export default Locker