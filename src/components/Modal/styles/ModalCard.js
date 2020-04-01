import styled from 'styled-components';

const ModalCard = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  cursor: default;
  width: 100%;
  max-width: 437px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  outline: none;
  display: flex;
  flex-direction: column;

  transition-property: background, color;
  transition: all 300ms ease;
`;

export default ModalCard;
