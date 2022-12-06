import React, { useState } from 'react';
import { createContext } from 'react';

const FavoritesList = createContext()
const Favorites=({children})=>{
    const [favorite, setFavorite] = useState([]);
    return(
        <FavoritesList.Provider value={{favorite, setFavorite}}>
            {/* <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <span style={{fontSize:30}}>My Collection</span> */}
            {children}
        {/* </div> */}
        </FavoritesList.Provider>
    )
}
export {Favorites};
