import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './normilize.css';
import './pictures.css';



function Pictures (){

  const {albumId} = useParams();
  const [pictures, setPictures] = useState([]);  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(res => res.json())
    .then(data => setPictures(data))
  }, []);  
  return (
    <div className="pictures">
      <h2 className='pictures-heading'>Pictures:</h2>
     {pictures.map((picture) => {
      return (
        <div className='image-pad' key={picture.id}>
          <img src={picture.url} width="200px" alt='album pic'></img> 
        </div>
      )
     })} 
    </div>
  )
}

export {Pictures};