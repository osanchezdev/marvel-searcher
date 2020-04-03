import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins';

const ComicDetailInfo = styled.div`
  flex: 0 0 100%;
  padding: 0 30px;

  ${respondTo.sm`
    flex: 0 0 50%;
    
  `}
`;

export default ComicDetailInfo;
