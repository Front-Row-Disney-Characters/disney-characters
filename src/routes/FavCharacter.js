import React from 'react';
import { Favorites} from '../context/Favorites';


function FavCharacter() {
    return(
        <div>
            <div className='d-flex justify-content-evenly align-items-center mt-5'>
            <span style={{fontSize:30}}>My Collection</span>
                <Favorites />
            </div>
        </div>
    )

}

export { FavCharacter }