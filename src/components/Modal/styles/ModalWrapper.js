import styled from 'styled-components';

import { respondTo } from '../../../styles/mixins';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  color: white;

  ${respondTo.sm`
    top: 60px;
    padding: 5rem 0;
  `}

  ${({ show }) =>
    show &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default ModalWrapper;
