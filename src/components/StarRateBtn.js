import React, { useContext, useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import { Favorites, FavoritesList } from '../components/Favorites';
import { user } from '../routes/UserDetails';

const StarRateBtn =()=>{
    const{favorite, setFavorite} = useContext(FavoritesList)

    return(
        <div>
           {/* <Button variant='primary'>Add Me.</Button>
           <Button variant='primary'>Remove Me.</Button> */}
           {favorite.includes(user) ?(<Button className="remove" 
           onClick={()=>{favorite.filter(c=>c.id!==prod.id)}}>
            Remove Me.
            </Button>):(<Button className="add"
             onClick={()=>{setFavorite(...favorite, user)}}>
                Add Me.
            </Button>)}
        </div>
    )
}
export {StarRateBtn}
