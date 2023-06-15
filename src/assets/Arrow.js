import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Load event listener for the Lottie player
    this.myRef.current.addEventListener("load", () => {
      // Configuration for Lottie Interactivity library
      create({
        mode: "scroll",
        player: "#arrow", // ID of the Lottie player
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 115], // Start and end frames of the animation
          },
        ],
      });
    });
  }

  render() {
    return (
      <div className="h-[60px] -translate-y-12">
        <lottie-player
          ref={this.myRef}
          id="arrow"
          mode="normal"
          src="https://assets6.lottiefiles.com/packages/lf20_WoQGzCBqcG.json"
          style={{ height: "160px", width: "350px" }}
        ></lottie-player>
      </div>
    );
  }
}

export default Arrow;
