import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class Menu extends React.Component {
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
        player: "#menu",
        actions: [
          {
            state: "click",
            frames: [1, 43],
            transition: "onComplete",
          },
          {
            state: "click",
            frames: [44, 78],
            transition: "onComplete",
            reset: true,
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="w-[35px] h-[35px] -translate-x-14 -translate-y-14">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="menu"
          mode="normal"
          src="https://assets2.lottiefiles.com/temp_editor_files/lf30_editor_2ez0jydg.json"
          style={{ height: "150px", width: "150px" }}
        ></lottie-player>
      </div>
    );
  }
}

export default Menu;
