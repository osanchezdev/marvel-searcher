import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveOnLocalStorage = () => {};
  const addFavorite = () => {
    console.log('add');
  };
  const removeFavorite = () => {
    console.log('remove');
  };

  useEffect(() => {}, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesContext.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default FavoritesProvider;
