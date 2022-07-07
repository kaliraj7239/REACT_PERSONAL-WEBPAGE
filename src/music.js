import React from "react";
import './music.css';
import Music1 from './music1.jpg';
import { ReactAudio } from "reactjs-media";
import Music2 from './music3.jfif';
import Music3 from './music4.jpg';
import Music4 from './music5.jfif';
import Music5 from './music6.jpg';
import Music6 from './music1.jpg';
import './index';
//import Grid from '@mui/material/Grid';
const Music=()=>{
    return(
  <div style={{marginTop:'15vh', backgroundColor:"#bf92be"}}>  
    <React.Fragment>
        
    <div class="example-container">

      <div class="right" style={{marginLeft:"300px",alignContent:"center"}}>
        <div class="song-to-add" song-to-add="0">
          <img src={Music6} style={{height:"280px",width:"390px"}}/>

          <div>

<ReactAudio
    src='/audio/music.mp3'
    poster='/music1.jpg'
    primaryColor="red"
    autoPlay
/>

</div>
        </div>
            
        <div class="song-to-add" song-to-add="1">
          <img src={Music5} style={{height:"280px",width:"390px"}}/>

          <div>

<ReactAudio
    src='/audio/music.mp3'
    poster='/music1.jpg'
    primaryColor="red"
    
/>

</div>
        </div>

        <div class="song-to-add" song-to-add="2">
          <img src={Music4} style={{height:"280px",width:"390px"}}/>

          <div>

<ReactAudio
    src='/audio/music.mp3'
    poster='/music1.jpg'
    primaryColor="red"
  
/>

</div>
        </div>

        <div class="song-to-add" song-to-add="3">
          <img src={Music3}style={{height:"280px",width:"390px"}}/>

          <div>

        <ReactAudio
            src='/audio/music.mp3'
            poster='/music1.jpg'
            primaryColor="red"
          
        />
        
      </div>
        </div>

        <div class="song-to-add" song-to-add="4">
          <img src={Music2}style= {{height:"280px",width:"390px"}}/>
          <div>

<ReactAudio
    src='/audio/music.mp3'
    poster='/music1.jpg'
    primaryColor="red"
   
/>

</div>
        </div>
 
        <div class="song-to-add" song-to-add="5">
          <img src={Music1} style={{height:"280px",width:"390px"}}/>

          <div>

<ReactAudio
    src='/audio/music.mp3'
    poster='/music1.jpg'
    primaryColor="red"
   
/>

</div>
        </div>
      </div>
    </div>
    
    
    </React.Fragment>
</div>
);
}
export default Music;