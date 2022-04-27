import React, {useState, useEffect} from 'react';
import Stuff from './Stuff';
import axios from 'axios';
import Spinner from '../common/Spinner';

const Stuffs = (props) => {
    const [stuffs, setStuffs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const _getStuffs = async () => {
            setLoading(true);
            const apiHost = process.env.REACT_APP_API_HOST || "http://localhost:8080"
            try {
                const res = await axios.get(`${apiHost}/api/stuff`) 
                console.log(res.data);
                setStuffs(res.data);
                setLoading(false);
              } catch (err) {
                console.log(err.message);
                console.log(err.res)
              }
            }
        _getStuffs();
    },[setLoading,setStuffs])

    const displayStuffs = () =>{
        return stuffs.map(stuff => <Stuff stuff ={stuff} key={stuff.id}/>)
    }

    return loading ? (
        <div style={{marginTop: '2em', justifyContent: 'center'}}>
          <Spinner />
        </div>
      ) : (
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', width: '100%', justifyContent:'center', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center'}}>Stuffs</h2>
          <div style={{display: 'flex', flexDirection: "column", maxWidth: '720px', justifyContent: 'center'}}>
    
          {displayStuffs()}
          </div>
        </div>
      )
}

export default Stuffs;