import React from 'react'
import { Link } from 'react-router-dom'
import { RouteComponentProps, StaticContext } from 'react-router';
import { postState } from '../redux/reducer/reducers';

interface IState{
    post:postState
}

export const PostDetail:React.FC<RouteComponentProps<{}, StaticContext, IState>> = (props) => {
    const {post} = props.location.state;
    
    return (
        <div>
            <h1>This is Post Page!</h1>
            <Link to="/"><h2>Goto Main Page!</h2></Link>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}