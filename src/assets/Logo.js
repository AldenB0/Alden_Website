import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class Logo extends React.Component {
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
        player: "#logo",
        actions: [
          {
            state: "autoplay",
            frames: [1, 329],
            transition: "onComplete",
            delay: [1200],
          },
          {
            state: "loop",
            frames: [330, 407],
            transition: "none",
          },
        ],
      });
    });
  }
  render() {
    return (
      <lottie-player
        ref={this.myRef} // 2. set the reference for the player
        id="logo"
        mode="normal"
        src="https://lottie.host/f3af87e9-e5f9-4348-9f47-8c6f531e5377/9MB52b8b5v.json"
      ></lottie-player>
    );
  }
}

export default Logo;
