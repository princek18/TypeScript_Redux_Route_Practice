import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { RootState } from '..';
import { fetch } from '../redux/actions/actionCreators';


export const MainComponentHooks:React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state:RootState) => state.fetchReducer.posts);
    
    return (
        <div>
            <h1>Main Component With Hooks!</h1>
            <button onClick={() => dispatch(fetch())}>Get Posts</button>
            {posts.map((post) => {
                return(
                    <div key={post.id}><Link to={{pathname:`/post/${post.id}`, state:{post}}}><h2>{post.title}</h2></Link><p>{post.body}</p></div>
                )
            })}
        </div>
    )
}
