import { CLEAR_ALL_POSTS, CREATE_POST, DELETE_POST } from "../actionTypes/postsTypes"


export const createNewPost = (topic,input,image,tags) =>{
    return{
        type: CREATE_POST,
        payload: {
            id: Date.now(),
            input,
            topic,
            image,
            tags,
        }
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export const clearAllPosts = () => {
    return {
        type: CLEAR_ALL_POSTS
    }
}

