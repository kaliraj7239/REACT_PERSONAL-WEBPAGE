import React, { Component } from "react";
import { ReactAudio } from "reactjs-media";

class MediaControlCard extends Component {
  
  render() {
    return (
      <div>
        <ReactAudio
            src='/audio/music.mp3'
            poster='/poster.png'
            primaryColor="red"
            autoPlay
        />
      </div>
    );
  }
}
export default MediaControlCard;



//:Pv8!sti4_PU7pp