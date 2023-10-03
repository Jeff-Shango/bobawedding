import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
  if (!Array.isArray(comments)) {
    // If comments is not an array, provide a default empty array
    comments = [];
  }

  return (
    <section className="section">
      {comments.map((comment, index) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default Comments;
