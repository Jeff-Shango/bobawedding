import React, { useState } from 'react'
import axios from 'axios';

const CommentForm = ({ 
  handleSubmit, 
  submitLabel, 
  hasCancelButton = false, 
  handleCancel }) => {
  const [comment, setComment] = useState('');
  const [commentator, setCommentator] = useState('');
  // const isTextareaDisabled = text.length === 0;
  const isTextareaDisabled = comment.trim() === '' || commentator.trim() === '';
  
  const onSubmit = async (event) => {
    event.preventDefault();
  
    try {
        const response = await axios.post('http://localhost:3012/', { 
          comment, 
          commentator,
         });

         handleSubmit(response.data);
         setComment('');
         setCommentator('');
    } catch (error) {
        console.error('Error creating comment:', error);
    }
};


  
//   const onSubmit = event => {
//     event.preventDefault()
//     handleSubmit(text);  
//     setText("");
// }



  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <textarea 
          className="comment-form-textarea"
          placeholder='Your Comment' 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input 
          type="text" 
          className="form-control"
          placeholder='Your name'
          value={commentator}
          onChange={(e) => setCommentator(e.target.value)}
        />
      </div>
      <button 
        className="content-form-button" 
        disabled={isTextareaDisabled}
      >
          {submitLabel}
      </button>
      {hasCancelButton && (
        <button 
          type='button'
          className='btn btn-secondary comment-form-button comment-form-cancel-button'
          onClick={handleCancel}
          >
            Cancel
          </button>
      )}
    </form>
  )
}

export default CommentForm