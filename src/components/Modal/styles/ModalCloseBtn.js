import styled from 'styled-components';

const ModalCloseBtn = styled.button`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 24px;
  background: transparent;
  padding: 0 0.3rem;
  border: none;
  outline: none;

  transition: color 300ms ease;
`;

export default ModalCloseBtn;
