import React, { useContext, useEffect, useState} from 'react';
import Button from "react-bootstrap/Button";
import { Favorites, FavoritesList } from '../components/Favorites';
import { user } from '../routes/UserDetails';

const StarRateBtn =()=>{
    const{favorite, toggleCharacter } = useContext(FavoritesList)

    return(
        <div>
           {favorite.includes(user) ?(<Button className="remove" 
           onClick={()=>{favorite.filter(c=>c.id!==prod.id)}}>
            Remove Me.
            </Button>):(<Button className="add"
             onClick={()=>{toggleCharacter(...favorite, user)}}>
                Add Me.
            </Button>)}
        </div>
    )
}
export {StarRateBtn}
