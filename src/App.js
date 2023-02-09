
import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add_post, delete_post, get_post, update_post } from './redux/Action/PostAction';

function App() {
  const [body,setBody]=useState("");
  const [createdAt,setCreatedAt]=useState("");
  const [id,setId]=useState(Math.random());
  const [imageUrl, setImageUrl]=useState("");
  const [namee,setNamee]=useState("");
  const [title, setTitle]=useState("");
  const [video, setVideo]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch (get_post())
  }, [dispatch])
  const posts = useSelector((state)=>state.post);
  console.log(posts);
  return (
    <div className="App">
      <input type="text" placeholder="enter image url" onChange={(e)=>setImageUrl(e.target.value)}></input>
      <button onClick={()=>dispatch(add_post({id,title,namee,imageUrl,createdAt,body,video}))}>add</button>
      {posts.map((el)=>
        <div>
        <h1>{el.namee}</h1>
        <img src={el.imageUrl} alt="404" />
        <button onClick={()=>dispatch(delete_post(el.id))}>delete</button>
        <button onClick={()=>dispatch(update_post(el.id,{title,namee,imageUrl,createdAt,body,video}))}>edit</button>
        </div>
        )}
    </div>
  );
}

export default App;
