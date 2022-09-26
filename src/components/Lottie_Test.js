import React from "react";
import { useLottie } from "lottie-react";
import Smile from "../assets/Face.json";

const Animation = () => {
  const options = {
    animationData: Smile,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Animation;