import styled from 'styled-components';

import { respondTo } from '../../../styles/mixins';

const CardsListWrapper = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;

  ${respondTo.sm`
    
  `}
`;

export default CardsListWrapper;
