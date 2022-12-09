import React from 'react';

const Pages = ({page,loading})=>{
    if(loading){
        return <h2>Loading...</h2>;
    }
    return(
        <div>
            <ul className='list-group mb-4'>
                {page.map(post =>(
                    <li key={post.id} className='list-group-item'>
                        {post.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Pages;