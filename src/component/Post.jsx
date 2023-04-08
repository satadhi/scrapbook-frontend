import React, { useState } from "react";

function Post(props) {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [numLikes, setNumLikes] = useState(props.initialLikes);

  console.log("likes: ", props.initialLikes);
  function handleLike() {
    setNumLikes(numLikes + 1);
    // TODO: call api to update like of post
  }

  function handleComment() {
    setShowCommentBox(!showCommentBox);
  }

  function handleShare() {
    alert("Share button clicked!");
  }

  return (
    <div className="social-media-post">
      <div className="post-content">
        <p>{props.content}</p>
      </div>
      <div className="post-buttons">
        <button onClick={handleLike}>Like ({numLikes})</button>
        <button onClick={handleComment}>Comment</button>
        <button onClick={handleShare}>Share</button>
      </div>
      {showCommentBox && (
        <div className="comment-box">
          <textarea placeholder="Type your comment here"></textarea>
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Post;
