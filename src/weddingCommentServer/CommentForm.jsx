import React, { useState } from 'react'
import axios from 'axios';

const CommentForm = ({ 
  handleSubmit, 
  submitLabel, 
  hasCancelButton = false, 
  initialText = '', 
  handleCancel }) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/comments', { text});
      handleSubmit(response.data);
      setText('');
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  };



  return (
    <form onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" value={text} onChange={(e) => setText(e.target.value)}/>
      <button className="content-form-button" disabled={isTextareaDisabled}>{submitLabel}</button>
      {hasCancelButton && (
        <button 
          type='button'
          className='comment-form-button comment-form-cancel-button'
          onClick={handleCancel}
          >
            Cancel
          </button>
      )}
    </form>
  )
}

export default CommentForm