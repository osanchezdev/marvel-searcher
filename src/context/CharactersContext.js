import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import axios from 'axios';
import qs from 'query-string';

import { API_URL, AUTH_QUERIES, TOTAL_CHARACTERS } from '../constants';
import { getRandomInt } from '../utils';

export const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [urlCharacters, setUrlCharacters] = useState(null);
  const [urlComics, setUrlComics] = useState(null);

  useEffect(() => {
    if (!window.location.search) return;

    const urlQueries = qs.parseUrl(window.location.search).query;
    const queryCharacters = urlQueries.character
      ? qs.parse(`character=${urlQueries.character}`, { arrayFormat: 'comma' }).character
      : [];
    const queryComics = urlQueries.comic
      ? qs.parse(`character=${urlQueries.comic}`, { arrayFormat: 'comma' })
      : [];
    let charactersByNameResponse = [];
    setUrlComics(queryComics);

    const getUrlCharacter = async name => {
      const characterByName = await axios.get(`${API_URL}/characters?name=${name}&${AUTH_QUERIES}`);
      charactersByNameResponse.push(characterByName.data.data.results[0]);
    };
    queryCharacters.forEach(character => getUrlCharacter(character));
    setLoading(false);
    setUrlCharacters(charactersByNameResponse);
  }, []);

  useEffect(() => {
    const searchQueries = () =>
      search ? `&nameStartsWith=${search}` : `&offset=${getRandomInt(0, TOTAL_CHARACTERS)}`;
    const getCharacters = async () => {
      const charactersResponse = await axios.get(
        `${API_URL}/characters?${AUTH_QUERIES}${searchQueries()}&limit=${limit}`,
      );
      setLoading(false);
      setCharacters(charactersResponse.data.data.results);
    };
    getCharacters();
  }, [search, limit]);

  return (
    <CharactersContext.Provider
      value={{
        loading,
        characters,
        urlCharacters,
        urlComics,
        setUrlCharacters,
        setLoading,
        setLimit,
        setSearch,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

CharactersContext.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default CharactersProvider;
