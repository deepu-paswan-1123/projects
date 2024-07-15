import { useContext } from "react";
import { useRef } from "react";
import { PostListContext } from "../store/Post-List-Store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const {addPost}=useContext(PostListContext);
  const navigate=useNavigate();

  const userIdElement=useRef();
  const PostTitleElement=useRef();
  const PostBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleOnSubmit=(event)=>{

    event.preventDefault(); 
    const userId=userIdElement.current.value;
    const PostTitle=PostTitleElement.current.value;
    const PostBody=PostBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(' ');

    
    userIdElement.current.value="";
    PostTitleElement.current.value="";
    PostBodyElement.current.value="";
    PostBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title:PostTitle,
        body:PostBody,
        reactions: {
          likes:reactions
        },
        userId:  userId,
        tags: tags,
      })
    })
    .then(res => res.json())
    .then((post)=>{
      addPost(post);
      navigate("/");
    });
    
    
  }

 

  return (
    <>
      <form className="createpost" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">
            Enter your UserId here
          </label>
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userid"
            aria-describedby="emailHelp"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={PostTitleElement}
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            ref={PostBodyElement}
            id="body"
            aria-describedby="emailHelp"
            placeholder="Tell us more about it."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Number of reactions
          </label>
          <input
            type="number"
            className="form-control"
            ref={reactionsElement}
            id="reaction"
            aria-describedby="emailHelp"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your tags here
          </label>
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Please Enter tags using space"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Do Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
