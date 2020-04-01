import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import axios from 'axios';
import qs from 'query-string';

import { TS, HASH, API_KEY, API_URL, TOTAL_CHARACTERS } from '../constants';

import { getRandomInt } from '../utils';

export const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [search, setSearch] = useState(null);
  const [limit, setLimit] = useState(20);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const searchQueries = () =>
      search ? `&nameStartsWith=${search}` : `&offset=${getRandomInt(0, TOTAL_CHARACTERS)}`;
    const getCharacters = async () => {
      const queries = qs.stringify({
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      });
      const charactersResponse = await axios.get(
        `${API_URL}characters?${queries}${searchQueries()}&limit=${limit}`,
      );
      // console.log(charactersResponse);
      // const comic = await axios.get(
      //   `https://www.marvel.com/comics/issue/70718/the_amazing_spider-man_2018_22`,
      // );
      // console.log(comic);
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
