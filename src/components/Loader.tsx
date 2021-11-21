import styled, { keyframes } from 'styled-components';

import { Logo } from './icons';

const Animation = keyframes`
  0% {
    opacity: 0
  }
  50% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

const LoaderElement = styled.div`
  animation: ${Animation} 1s linear infinite;
  width: 100%;
  text-align: center;
`;

export const Loader = () => (
  <LoaderElement>
    <Logo size={36} />
  </LoaderElement>
);
