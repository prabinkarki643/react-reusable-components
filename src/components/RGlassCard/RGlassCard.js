import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.div)`
  display: inline-block;
  padding: 3em;
  background: #c7d2fe66;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  @supports (backdrop-filter: blur(10px)) or (--webkit-backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    --webkit-backdrop-filter: blur(10px);
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function RGlassCard({ children, animated = true }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
    className="shadow"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: animated ? props.xys.interpolate(trans) : "none",
      }}
    >
      {children}
    </Container>
  );
}
