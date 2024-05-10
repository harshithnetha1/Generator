import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Generator from './Generator';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [quote,setquote]=useState();
  const [author,setauthor]=useState();
  const renderquote=()=>{
   axios.get("https://type.fit/api/quotes").then((res)=>{
    console.log(res.data);
    const randomindex= Math.floor(Math.random()*res.data.length);
    setquote(res.data[randomindex].text);
    setauthor(res.data[randomindex].author);
    

   }
   
  )
  }
  useEffect(renderquote,[]);
  
  return (
    <Generator quote={quote} author={author} rq={renderquote}/>
    
  ) 
}