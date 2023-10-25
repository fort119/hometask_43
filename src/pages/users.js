import {Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import { Album } from './albums';
import { Pictures } from './pictures';
// import './normilize.css';
import './users.css';


function Users (){

  const [users, setUsers] = useState([]);

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
    }, []);


    return(
     <div className='navigation'>
       {users.map((user) => {
        return (
          <div className='users-item' key={user.id}>
          <p className='name-of-user'><span className='user-span'>User:</span> {user.name}</p>
            <Link  to = {`/${user.id}`} className='user-name'>Album</Link>
          </div>
        )
       })}

     <Routes>
       <Route path='/:id/' element = {<Album />} />
       <Route path='/album/:id/pictures/:albumId/' element = {<Pictures />} />
     </Routes>
     </div>
    )
}

export {Users};