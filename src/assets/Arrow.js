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
      <div className="h-[60px] -translate-x-14 -translate-y-14">
        <lottie-player
          ref={this.myRef}
          id="arrow"
          mode="normal"
          src="https://lottie.host/eded3de7-9ca5-4767-a801-6615a0163cf4/8wc9sfYViw.json"
          style={{ height: "160px", width: "350px" }}
        ></lottie-player>
      </div>
    );
  }
}

export default Arrow;
