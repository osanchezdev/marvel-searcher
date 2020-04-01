import React, { useContext } from 'react';

import MainWrapper from './styles/MainWrapper';

import Loader from '../../commons/Loader';
import ComicDetail from '../../ComicDetail';
import CardsList from '../../CardsList';
import { CharactersContext, ComicDetailContext } from '../../../context';

const Main = () => {
  const { loading: charactersLoading } = useContext(CharactersContext);
  const { loading: comicDetailLoading, comicId } = useContext(ComicDetailContext);

  return (
    <MainWrapper>
      {charactersLoading || comicDetailLoading ? (
        <Loader loading={charactersLoading || comicDetailLoading} />
      ) : comicId ? (
        <ComicDetail />
      ) : (
        <CardsList />
      )}
    </MainWrapper>
  );
};

export default Main;
