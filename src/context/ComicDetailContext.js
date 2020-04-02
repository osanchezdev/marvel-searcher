import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import axios from 'axios';
import qs from 'query-string';

import { TS, HASH, API_KEY, API_URL } from '../constants';

export const ComicDetailContext = createContext();

const ComicDetailProvider = ({ children }) => {
  const [comicId, setComicId] = useState(null);
  const [comicDetail, setComicDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getComicById = async () => {
      const queries = qs.stringify({
        ts: TS,
        apikey: API_KEY,
        hash: HASH,
      });
      const comicDetailResponse = await axios.get(`${API_URL}/comics/${comicId}?${queries}`);
      setComicDetail(comicDetailResponse.data.data.results[0]);
      setLoading(false);
    };
    if (comicId) getComicById();
  }, [comicId]);

  return (
    <ComicDetailContext.Provider
      value={{
        loading,
        comicId,
        comicDetail,
        setComicId,
        setLoading,
      }}
    >
      {children}
    </ComicDetailContext.Provider>
  );
};

ComicDetailProvider.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ComicDetailProvider;
