import React, { useContext } from 'react';

import ComicsListWrapper from './styles/ComicsListWrapper';

import { ComicsContext } from '../../context';

const ComicsList = () => {
  const { comics } = useContext(ComicsContext);
  console.log(comics);
  return (
    <ComicsListWrapper>
      ComicsList
      {/* {characters.map(character => (
        <Card key={character.id} character={character} />
      ))} */}
    </ComicsListWrapper>
  );
};

export default ComicsList;
