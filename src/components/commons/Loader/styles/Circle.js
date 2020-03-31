import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const Circle = styled.div`
  animation: ${rotateAnimation} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #ff8787;
  border-right: 2px solid #ff8787;
  border-bottom: 2px solid #ff8787;
  border-left: 4px solid #f0141e;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export default Circle;
