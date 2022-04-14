// import React, {useState, useEffect} from 'react';
// import Student from './Student';
// import axios from 'axios';
// import Spinner from '../common/Spinner';

// const Students = (props) => {
//     const [students, setStudents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() =>{
//         const _getStudents = async () => {
//             setLoading(true);
//             const apiHost = process.env.REACT_APP_API_HOST || "http://localhost:8080"
//             try {
//               const res = await axios.get(`${apiHost}/api/students`) 
//               console.log(res.data);
//               setStudents(res.data);
//               setLoading(false);
//             } catch (err) {
//               console.log(err.message);
//               console.log(err.res)
//             }
//           }
//           _getStudents();
//     }, [setLoading,setStudents])

//     const displayStudents = () =>{
//         return students.map(student => <Student student={student} key={student.id}/>)
//     }

//     return loading ? (
//         <div style={{marginTop: '2em', justifyContent: 'center'}}>
//           <Spinner />
//         </div>
//       ) : (
//         <div style={{display: 'flex', flex: 1, flexDirection: 'column', width: '100%', justifyContent:'center', alignItems: 'center'}}>
//           <h2 style={{textAlign: 'center'}}>Students</h2>
//           <div style={{display: 'flex', flexDirection: "column", maxWidth: '720px', justifyContent: 'center'}}>
    
//           {displayStudents()}
//           </div>
//         </div>
//       )
// }

// export default Students; 