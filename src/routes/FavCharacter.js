import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Favorites } from '../components/Favorites';


function FavCharacter() {
    return(
        <div>
            <Favorites />
            <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <span style={{fontSize:30}}>My Collection</span>
            </div>
        </div>
    )

}

export { FavCharacter }