import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class Face extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "chain",
        player: "#Face",
        actions: [
          {
            state: "autoplay",
            frames: [1, 104],
            transition: "onComplete",
            delay: [700],
            jumpTo: [2],
          },
          {
            state: "autoplay",
            frames: [2, 104],
            transition: "onComplete",
          },
          {
            state: "loop",
            frames: [105, 239],
            transition: "hover",
          },
          {
            state: "autoplay",
            frames: [240, 358],
            transition: "onComplete",
          },
          {
            state: "loop",
            frames: [359, 557],
            transition: "hover",
          },
          {
            state: "autoplay",
            frames: [558, 737],
            transition: "onComplete",
          },
          {
            state: "loop",
            frames: [738, 901],
            transition: "hover",
          },
          {
            state: "autoplay",
            frames: [902, 961],
            transition: "onComplete",
          },
          {
            state: "autoplay",
            frames: [0, 1],
            transition: "onComplete",
            jumpTo: [1],
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="Example">
        <div style={{ height: "28px" }}></div>
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="Face"
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_Hmy4tuNqwO.json"
        ></lottie-player>
      </div>
    );
  }
}

export default Face;
