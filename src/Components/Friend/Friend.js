import React from 'react';
import './Friend.css'
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const {name, email,id}= props.friend

    // const history = useHistory();
    // const handleClick=(friendId)=>{
    //     const url=(`/friend/${friendId}`);
    //     history.push(url);
    // }

    return (
        <div className='friend-style'>
            <h2>Name: {name}</h2>
             <p>email: {email}</p>
            <Link to={`/friend/${id}`}>Show detail</Link>
            {/* <button onClick={()=>handleClick(id)} > click me</button> */}
            
            
        </div>
    );
};

export default Friend;