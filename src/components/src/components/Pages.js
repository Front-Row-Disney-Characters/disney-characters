import React from 'react';

const Pages = ({page,loading})=>{
    if(loading){
        return <h2>Loading...</h2>;
    }
    return(
        <div className="card mb-3 w-100 h-100 indiv-card d-inline">
            <div className="row g-0">
                    <div className="col-md-6 my-auto">
            <ul className='list-group mb-4'>
                {page.map((post, idx )=>(
                    <li key={idx} className='list-group-item mb-4 w-50'>
                         <img src={`${post.imageUrl}`} className="img-fluid rounded-start pt-3 ps-2" alt="disney characters"/>
                        <br />{post.name}
                    </li>
                ))}
            </ul>
            </div>
            </div>
        </div>
    );
}
export default Pages;