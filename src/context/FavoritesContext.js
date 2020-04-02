import React, { createContext, useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const updateOnLocalStorage = () => {
    window.localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  const addFavorite = character => {
    setFavorites([...favorites, character]);
    updateOnLocalStorage();
  };
  const removeFavorite = character => {
    setFavorites([...favorites.filter(favorite => favorite.id !== character.id)]);
    updateOnLocalStorage();
  };

  useEffect(() => {
    const localFavorites = window.localStorage.getItem('favorites');
    if (localFavorites) setFavorites(JSON.parse(localFavorites));
  }, []);

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
