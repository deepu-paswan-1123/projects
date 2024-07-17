import React from "react";

const WelcomeMessage = ({ OnGetPostClick }) => {
  return (
    <div className="jumbotron container welcome text-dark">
      <h1 className="display-4">Hey, Friends!</h1>
      <p className="lead">
        Here is information about the post. There is no post yet; you might be the first person to share a post here. Please try it for your experience.
      </p>
      <hr className="my-4" />
      <p>
        Please share your experience on our website. If you have a good experience, add tags in the form; you can add multiple tags by using spaces.
      </p>
      <p className="lead">
        <a className="btn btn-info text-white btn-lg" href="#" role="button" onClick={OnGetPostClick}>
          Get Post From Server
        </a>
      </p>
    </div>
  );
};

export default WelcomeMessage;
