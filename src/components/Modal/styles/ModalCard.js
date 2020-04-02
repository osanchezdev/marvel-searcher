import styled from 'styled-components';

import { respondTo } from '../../../styles/mixins';

const ModalCard = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  cursor: default;
  z-index: 2;
  width: 100%;
  max-width: 437px;
  height: 100vh;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  outline: none;
  display: flex;
  flex-direction: column;

  ${respondTo.sm`
    top: 60px;
    padding: 1rem;
    border-radius: 0.3rem;
    height: unset;
    min-height: 420px;
  `}

  transition-property: background, color;
  transition: all 300ms ease;
`;

export default ModalCard;
