import styled from 'styled-components';
import { respondTo } from '../../../../styles/mixins';

const MainWrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 0 1rem 0;
  background: transparent;
  max-width: 1280px;
  margin: 0 auto;

  ${respondTo.sm`
    padding: 5rem 0 0 0;
  `}
`;

export default MainWrapper;
