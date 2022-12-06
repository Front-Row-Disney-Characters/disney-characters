import React, { useState } from 'react';
import { createContext } from 'react';

const FavoritesList = createContext()
const Favorites=({children})=>{
    const [favorite, setFavorite] = useState([]);
    return(
        <FavoritesList.Provider value={{favorite, setFavorite}}>
            {children}
        </FavoritesList.Provider>
    )
}
export {Favorites};
