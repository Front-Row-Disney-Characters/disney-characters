import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function UserDetails({userFilteredList}) {

    const [user, setUser] = useState([])

    const params = useParams();

    // add useEffect here ⬇️
    useEffect(() => {
    const fetchSingleUser = async () => {
    const res = await fetch(`https://randomuser.me/api/?seed=bobas&results=75&nat=us`);
    const data = await res.json();
    setUser(data);
  }
    fetchSingleUser()
    //   .catch(console.error);
    }, []);

      // if user state is not(!) true (false aka still initial state of null (which is falsey)), then return "loading..." once api is fetched, this conditonal statement will be false and the other return below will render
    if (!user) {
        return <h2 className="loading" >Loading...</h2>;
      }
      
    return (
        // <div className='d-flex justify-content-evenly align-items-center mt-5 single-view'>
        //     <div>
        //       <img src={`${user.picture.large}`} height={'450'}/>
        //     </div>
        //     <div>
        //       <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        //       <div id="description" className='d-flex mt-3'>
        //         <div className='me-3'>
        //           <p><span className='fw-bold'>Height</span>: {pokemon.height}</p>
        //           <p><span className='fw-bold'>Weight</span>: {pokemon.weight}</p>
        //           <div><span className='fw-bold'>Abilities</span>:               
        //               <ul>
        //               {pokemon.abilities.map((pokemonAbility, idx) => (
        //                 <li key={idx}>{pokemonAbility.ability.name}</li>
        //               ))}
        //             </ul>
        //           </div>
        //         </div>
        //         <div>
        //           <div><span className='fw-bold'>Types</span>:               
        //               <ul>
        //               {pokemon.types.map((pokemonType, idx) => (
        //                 <li key={idx}>{pokemonType.type.name}</li>
        //               ))}
        //             </ul>
        //           </div>
        //           <div><span className='fw-bold'>Stats</span>:               
        //               <ul>
        //               {pokemon.stats.map((pokemonStat, idx) => (
        //                 <li key={idx}>{pokemonStat.stat.name}: {pokemonStat.base_stat}</li>
        //               ))}
        //             </ul>
        //           </div>
        //         </div>
        //       </div>
        //     </div>

        // </div>
        <>
            {user ? (
        userFilteredList.map((user, idx) => (
        <Col key={idx} className="mt-4" md="4" >
            <div className="card mb-3 w-100 h-100" >
                <div className="row g-0">
                    <div className="col-md-5 my-auto">
                    <img src={`${user.picture.large}`} className="img-fluid rounded-start pt-3 ps-2" alt="random-users"/>
                    </div>
                    <div className="col-md-7 my-auto">
                    <div className="card-body ">
                      <Link to={`/${user.name.first}-${user.name.last}`} style={{color: "black"}}>
                        <h5 className="card-title">{user.name.first} {user.name.last}</h5>
                      </Link>
                        {/* <h5 className="card-title">{user.name.first} {user.name.last}</h5> */}
                        <p className="card-text">{user.location.state}, {user.location.city}</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    </div>
                </div>
            </div>
        </Col>
        ))
      ) : (
        ""
      )}
        </>
      )
}

export { UserDetails }