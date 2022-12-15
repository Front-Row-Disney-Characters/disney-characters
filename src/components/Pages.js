import React from 'react';

const Pages = ({page,loading})=>{
    if(loading){
        return <h2>Loading...</h2>;
    }
    return(
        <div>
            <ul className='list-group mb-4'>
                {page.map((post, idx )=>(
                    <li key={idx} className='list-group-item'>
                         <img src={`${post.imageUrl}`} className="img-fluid rounded-start pt-3 ps-2" alt="disney characters"/>
                        {post.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Pages;