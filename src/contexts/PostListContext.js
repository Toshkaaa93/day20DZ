import { createContext } from "react";
import usePosts from "../hooks/useTodos";


const PostListContext = createContext();

const PostListProvider = ({ children }) => {
   const {  openModal, closeModal, viewModal } =
    usePosts();
   
  return (
    <PostListContext.Provider
      value={{  openModal, closeModal, viewModal }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;

export { PostListContext };
