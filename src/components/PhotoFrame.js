import React from 'react';

export const PhotoFrame = (props) => {
   return(
       <div className='photoFrame'>
              <img src={props.photo} alt=""/>
               <h1>{props.caption}</h1>
       </div>
   )
}