import React, { createContext, useCallback, useReducer } from "react";

const PostListContext = createContext({
  postList: [], // Ensure this matches the naming in useContext
  addInitialPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  switch (action.type) {
    case 'DELETE_POST':
      return currPostList.filter(post => post.id !== action.payload.PostId);
    case 'ADD_INITIAL_POST':
      return action.payload.posts;
    case 'ADD_POST':
      return [action.payload, ...currPostList]; 
    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postListState, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: 'ADD_INITIAL_POST',
      payload: { posts }
    });
  };

  const deletePost =useCallback( (PostId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: { PostId }
    });
  },[dispatchPostList]);

  return (
    <PostListContext.Provider
      value={{
        postList: postListState,
        addPost,
        deletePost,
        addInitialPost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
export { PostListContext };
