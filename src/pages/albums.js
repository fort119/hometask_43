import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './normilize.css';
import './users.css';
import './album.css';




function Album () {

  const [usersAlbum, setUsersAlbum] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    .then(res => res.json())
    .then(data => setUsersAlbum(data))
  }, []);
  return(
    <div className='albums'>
      <h2 className='albums-heading'>Choose album:</h2>
      {usersAlbum.map((album) => {
       return (
        <div className='album-item' key={album.id}>
          <p className='album-title'>{album.title}</p>
          <Link  to = {`/album/${id}/pictures/${album.id}`} className='album-link'>Photos</Link>
        </div>
       )
      })}
    </div>
   )
}

export {Album}