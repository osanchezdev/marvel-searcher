import styled from 'styled-components';
import { respondTo } from '../../../styles/mixins';

const ComicImage = styled.img`
  flex: 0 0 100%;
  padding: 0 30px;
  max-width: 100%;

  ${respondTo.sm`
    flex: 0 0 50%;
    
  `}
`;

export default ComicImage;
