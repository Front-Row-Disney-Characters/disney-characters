import React from 'react';
import { UserDetails } from '../routes/UserDetails';
const Favorites=({favorite, setFavorite})=>{
    return(
        <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <span style={{fontSize:30}}>My Collection</span>
            {/* <div className="favoriteContainer">{favorite.map((user)=>(<UserDetails user={user} key={user.id} favorite={favorite} setFavorite={setFavorite} /> ))}</div> */}
        </div>
    )
}
export {Favorites};
