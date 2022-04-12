import React, {useState, useEffect} from 'react';
import Locker from './Locker';
import axios from 'axios';
import Spinner from '../common/Spinner';

const Lockers = (props) => {
  const [lockers, setLockers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getLockers = async () => {
      setLoading(true);
      const apiHost = process.env.REACT_APP_API_HOST || "http://localhost:8080"
      try {
        const res = await axios.get(`${apiHost}/api/locker`) 
        console.log(res.data);
        setLockers(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        console.log(err.res)
      }
    }
    _getLockers();
  },[setLoading, setLockers])

  const displayLockers = () => {
    return lockers.map(locker => <Locker locker={locker} key={locker.id}/>)
  }

  return loading ? (
    <div style={{marginTop: '2em', justifyContent: 'center'}}>
      <Spinner />
    </div>
  ) : (
    <div style={{display: 'flex', flex: 1, flexDirection: 'column', width: '100%', justifyContent:'center', alignItems: 'center'}}>
      <h2 style={{textAlign: 'center'}}>Lockers</h2>
      <div style={{display: 'flex', flexDirection: "column", maxWidth: '720px', justifyContent: 'center'}}>

      {displayLockers()}
      </div>
    </div>
  )
}

export default Lockers;