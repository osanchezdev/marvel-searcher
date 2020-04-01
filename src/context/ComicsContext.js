import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import axios from 'axios';
import qs from 'query-string';

import { TS, HASH, API_KEY } from '../constants';

export const ComicsContext = createContext();

const ComicsProvider = ({ children }) => {
  const [collectionUri, setCollectionUri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const getComics = async () => {
      const queries = qs.stringify({
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      });
      const comicsResponse = await axios.get(`${collectionUri}?${queries}&limit=20`);
      console.log(comicsResponse);
      setLoading(false);
      setComics(comicsResponse.data.data.results);
    };
    if (collectionUri) getComics();
  }, [collectionUri]);

  return (
    <ComicsContext.Provider
      value={{
        loading,
        comics,
        setCollectionUri,
      }}
    >
      {children}
    </ComicsContext.Provider>
  );
};

ComicsContext.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ComicsProvider;
