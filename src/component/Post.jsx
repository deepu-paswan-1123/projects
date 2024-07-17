import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/Post-List-Store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card postBody" style={{ width: "26rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {Array.isArray(post.tags) ? post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary">{tags}</span>
        )) : null}
        <div className="alert alert-info reaction" role="alert">
          This post is reacted by {post.reactions.likes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;




