import React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '..'
import { Link } from 'react-router-dom'
import { fetch } from '../redux/actions/actionCreators'
import { Actions, postState } from '../redux/reducer/reducers'

interface props{
    posts: postState[],
    fetch: () => void
}

const MainComponetConnect:React.FC<props> = ({posts, fetch}) => {
    return (
        <div>
            <h1>Main Compnent With Connect()!</h1>
            <button onClick={fetch}>Get Posts</button>
            {posts.map((post) => {
                return(
                    <div key={post.id}><Link to={{pathname:`/post/${post.id}`, state:{post}}}><h2>{post.title}</h2></Link><p>{post.body}</p></div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state:RootState) =>{
    return{
        posts: state.fetchReducer.posts,
    }
}

const mapDispatchToProps = (dispatch:ThunkDispatch<RootState, {}, Actions>) => {
    return{
        fetch :() => dispatch(fetch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponetConnect)