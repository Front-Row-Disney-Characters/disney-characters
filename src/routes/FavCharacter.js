import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Favorites } from '../components/Favorites';


function FavCharacter() {
    return(
        <div>
            <Favorites />
        </div>
    )

}

export { FavCharacter }