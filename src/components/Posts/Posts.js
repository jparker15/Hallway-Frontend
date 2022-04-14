import React, {useState, useEffect} from 'react';
import Post from './Post';
import axios from 'axios';
import Spinner from '../common/Spinner';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const _getPosts = async () => {
            setLoading(true);
            const apiHost = process.env.REACT_APP_API_HOST || "http://localhost:8080"
            try {
                const res = await axios.get(`${apiHost}/api/posts`) 
                console.log(res.data);
                setDevs(res.data);
                setLoading(false);
              } catch (err) {
                console.log(err.message);
                console.log(err.res)
              }
        }
        _getPosts();
    },[setLoading,setPosts])

    const displayPosts = () =>{
        return posts.map(post => <Post post ={post} key={post.id}/>)
    }

    return loading ? (
        <div style={{marginTop: '2em', justifyContent: 'center'}}>
          <Spinner />
        </div>
      ) : (
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', width: '100%', justifyContent:'center', alignItems: 'center'}}>
          <h2 style={{textAlign: 'center'}}>Posts</h2>
          <div style={{display: 'flex', flexDirection: "column", maxWidth: '720px', justifyContent: 'center'}}>
    
          {displayPosts()}
          </div>
        </div>
      )
}

export default Posts
