import React from 'react';
import BorderCard from '../common/BorderCard';

const Stuff = (props) => {
    const {id, title, content} = props.stuff;
    return(
        <BorderCard style={{width: '100%'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{flexDirection: 'column', margin: 10}} >
                <h2>Stuff ID:</h2>
                <h2 style={{fontWeight: 'bold'}}>{id}</h2>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{flexDirection: 'column', margin: 10}} >
                <h2>Title:</h2>
                <h2 style={{fontWeight: 'bolder'}}>{title}</h2>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{flexDirection: 'column', margin: 10}} >
                <h2>Content:</h2>
                <h2 style={{fontWeight: "normal"}}>{content}</h2>
                </div>
            </div>
        </BorderCard>
        

    )
}

export default Stuff