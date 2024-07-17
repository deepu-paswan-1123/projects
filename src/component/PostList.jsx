// import React, { useContext, useState } from "react";
// import Post from "./Post";
// import { PostListContext } from "../store/Post-List-Store";
// import WelcomeMessage from "./WelcomeMessage";
// import LoadingSpinner from "./LoadingSpinner";




// const PostList = () => {

//   const { postList, addInitialPost } = useContext(PostListContext);
//   const [fetching,setFetching] = useState(false);

//   const handleGetPostClick = () => {
//     setFetching(true);
    
//     fetch('https://dummyjson.com/posts')
//       .then(res => res.json())
//       .then(data => {
//            const posts = data.posts.map(post => ({
//             id: post.id,
//             title: post.title,
//             body: post.body,
//             reactions: post.reactions || 0, // Safeguard if reactions is missing
//             tags: post.tags || [] // Ensure tags is always an array
//           }));
//           addInitialPost(posts);
//           setFetching(false);
          
//       })
//       .catch(error => console.error("Error fetching posts:", error));
      
//   };

// //   Safeguard for postList being undefined
//   if (!postList) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {fetching && <LoadingSpinner/>}
//       { !fetching && postList.length === 0 && <WelcomeMessage OnGetPostClick={handleGetPostClick} />}
//       {postList.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
      
//     </>
//   );
// }

// export default PostList;



import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/Post-List-Store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from '@mui/material/Pagination';

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  const handleGetPostClick = () => {
    setFetching(true);

    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        const posts = data.posts.map(post => ({
          id: post.id,
          title: post.title,
          body: post.body,
          reactions: post.reactions || 0, // Safeguard if reactions is missing
          tags: post.tags || [] // Ensure tags is always an array
        }));
        addInitialPost(posts);
        setFetching(false);
      })
      .catch(error => console.error("Error fetching posts:", error));
  };

  // Safeguard for postList being undefined
  if (!postList) {
    return <div>Loading...</div>;
  }

  // Pagination logic
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage OnGetPostClick={handleGetPostClick} />}
      {currentPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination
        count={Math.ceil(postList.length / postsPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
}

export default PostList;

