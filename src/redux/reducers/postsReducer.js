import { CLEAR_ALL_POSTS, CREATE_POST, DELETE_POST } from "../actionTypes/postsTypes";

const postsReducer = (store = [], action) => {
    switch (action.type) {
        case CREATE_POST:
            return [...store, action.payload]
        case DELETE_POST:
            return store.filter(post => post.id !== action.payload)
        case CLEAR_ALL_POSTS:
            return []
       
        default:
            return store
    }
    
}
export default postsReducer