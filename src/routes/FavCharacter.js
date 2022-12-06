import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Favorites } from '../components/Favorites';


function FavCharacter() {
    return(
        <div>
            <h5>hello</h5>
        </div>
    )
//     const [user, setUser] = useState(null);
//     const [myCharacter, setMyCharacter] = useState([]);

//     const params = useParams();

//     // add useEffect here ⬇️
//     useEffect(() => {
//     const fetchSingleUser = async () => {
//     const res = await fetch(`https://api.disneyapi.dev/characters/${params._id}`);
//     const data = await res.json();
//     setUser(data);
//   }
//     fetchSingleUser()
//     }, []);

    
//     if (!user) {
//         return <h2 className="loading" >Loading...</h2>;
//       }
      
//     return (
//         <>
//             <div className='d-flex justify-content-evenly align-items-center mt-5 single-view'>
//             <div>
//               <img src={`${user.imageUrl}`} height={'450'}/>
//             </div>
//             <div>
//               <h1>{user.name}</h1>
//               <div id="description" className='d-flex mt-3'>
//                 <div className='me-3'>
//                   <div><span className='fw-bold'>TV Show(s)</span>:               
//                     <ul>
//                       {user.tvShows.map((tvshow, idx) => (
//                         <li key={idx}>{tvshow}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <div><span className='fw-bold'>Films</span>:               
//                       <ul>
//                       {user.films.map((film, idx) => (
//                         <li key={idx}>{film}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div><span className='fw-bold'>Video Games</span>:               
//                       <ul>
//                       {user.videoGames.map((game, idx) => (
//                         <li key={idx}>{game}</li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                 </div>
//               </div>
//             </div>

//         </div>
//         </>
//       )
}

export { FavCharacter }