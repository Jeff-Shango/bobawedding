import React, {  useState } from 'react'
import { 
    // getComments as getCommentsApi, 
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi } from './api'
import WedComment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';

// import CommentForm from './CommentForm';
const WedComments = ({ currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)
    const rootComments = backendComments.filter(
        (backendComment) => backendComment.parentId === null
    );
    const getReplies = commendId => {
        return backendComments
        .filter((backendComment) => backendComment.parentId === commendId)
        .sort(
            (a, b) => 
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    };
    const addComment = (text, parentId) => {
        console.log("addComment", text, parentId);
        createCommentApi(text, parentId)
        .then((comment) => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        })
        .catch((error) => {
            console.error('Error creating the comment, mane:')
        })
    };
    
    const deleteComment = (commentId) => {
if (window.confirm('Sure about deleting this?')) {
    deleteCommentApi(commentId).then(() => {
        const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
        setBackendComments(updatedBackendComments);
    })
}
    }

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return { ...backendComment, body: text };
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null)
        });
    };

    // useEffect(() => {
    // getCommentsApi().then((data) => {
    //     setBackendComments(data);
    // });
    // }, []);
  return (
    <div className='comments'>
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write Comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment}/>
        <div className="comments-container">
            {rootComments.map(rootComment => (
                <WedComment 
                key={rootComment.id} 
                comment={rootComment} 
                replies={getReplies(rootComment.id)} 
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                addComment={addComment}
                />
                
            ))}
        </div>
    </div>
  )
}

export default WedComments