import styled from 'styled-components';

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  color: white;
  display: none;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 5rem 0;
  color: white;

  ${({ show }) =>
    show &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default ModalWrapper;
