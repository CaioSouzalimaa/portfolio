"use client"
import {TypeAnimation} from "react-type-animation";

export const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Caio",
        1000,
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}
