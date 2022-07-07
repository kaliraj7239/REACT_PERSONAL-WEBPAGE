import React from 'react';
import {Animated} from "react-animated-css";
export default function Items({data}){
    return (
        <div className="row ">
        {
          data.map((value)=>{
           const {id, image} = value;
           return (
            <div className="col-sm-3 my-3" key={id}>
             <div className="card bg-light text-center">
             <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                 <img src={image} className="img-fluid" style={{height:"310px", width:"490"}}/>
                 </Animated>
            </div>
         </div>
           )
          })
        }
</div>
    )
}