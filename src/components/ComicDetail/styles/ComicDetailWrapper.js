import styled from 'styled-components';

import { respondTo } from '../../../styles/mixins';

const ComicDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${respondTo.sm`
    flex-wrap: no-wrap;
    
  `}
`;

export default ComicDetailWrapper;
