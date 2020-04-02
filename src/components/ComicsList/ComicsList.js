import React, { useContext } from 'react';

import ComicsListWrapper from './styles/ComicsListWrapper';

import { ComicsContext, CharactersContext } from '../../context';
import Loader from '../commons/Loader';
import Comic from '../Comic/Comic';

const ComicsList = () => {
  const { urlComics } = useContext(CharactersContext);
  const { loading, comics } = useContext(ComicsContext);

  const filterComics = () => {
    return urlComics.length ? comics.filter(comic => urlComics.includes(comic.title)) : comics;
  };
  return (
    <ComicsListWrapper>
      {loading ? (
        <Loader loading={loading} />
      ) : filterComics().length ? (
        comics.map(comic => <Comic key={comic.id} comic={comic} />)
      ) : (
        'No comics.'
      )}
    </ComicsListWrapper>
  );
};

export default ComicsList;
