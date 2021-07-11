import React from 'react'
import { useSpring, animated } from "react-spring";

const SpringIn = ({ children }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 5, tension: 5, friction: 5 }
  });
  return <animated.div style={props}>{children}</animated.div>;
}

export default SpringIn