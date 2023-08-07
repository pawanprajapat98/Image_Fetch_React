import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/App.css";
import { PhotoFrame } from "./PhotoFrame";
import { Loader } from "./Loader";

const App = (props) => {
 
    const [data,setdata]=useState([])
    const [input,setinput]=useState([])
    const [Load,setLoader]=useState(false)
      useEffect(()=>{

        if (input.length > 0){
          setLoader(true)
          axios.get(`https://jsonplaceholder.typicode.com/photos/${input}`).then((Resolve)=>{
            console.log(Resolve.data)
            setdata(Resolve.data)
            setLoader(false)
        })
        }
        else{
           setLoader(false)
        }
          
      },[input])

      function hadalInput(e){
         
         setinput(e.target.value)
      
      }
  return (
    <div>
         <div className='Container'>
             <form>
                   <label>Enter id : </label>
                   <input  type='number'  onChange={hadalInput} ></input>
                  
             </form>
             {
                Load? <Loader /> : input !== "" ? <PhotoFrame photo={data.url} caption={data.title} /> : ""
             }
             
         </div>
    </div>
  );
};

export default App;
