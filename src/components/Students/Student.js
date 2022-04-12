import React from "react";
import BorderCard from "../common/BorderCard";

const Student = (props) =>{
    const {firstName,lastName,cohort} = props.student;
    return(
        <BorderCard style={{width: '100%'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <div style={{flexDirection: 'column', margin: 10}} >
            <h2>Name</h2>
            <h2 style={{fontWeight: 'bold'}}>{firstName}</h2>
            <h2 style={{fontWeight: 'bold'}}>{lastName}</h2>
          </div>
          <div style={{flexDirection: 'column', margin: 10}}>
            <h2>Cohort</h2>
            <h2>{cohort}</h2>
          </div>
  
        </div>
      </BorderCard>
    )
}

export default Student