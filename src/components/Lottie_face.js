import React, {Component} from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

// use this boy for both interactivity and the player https://lottiereact.com/

class Face extends Component {

  render() {
    return (
      <div>
        <Player
            id = "heroFace"
            autoplay
            loop
            src="https://lottie.host/883d3520-0874-4227-b053-de155136700b/BjR2wE4XYQ.json"
            style={{ height: '300px', width: '300px' }}
            >
        </Player>
      </div>
    );
  }
}
 
export default Face