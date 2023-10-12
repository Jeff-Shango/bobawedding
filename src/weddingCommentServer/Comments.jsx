import React, { useEffect, useState } from 'react'
import WedComment from './Comment.jsx';
import CommentForm from './CommentForm.jsx';
import axios from 'axios'

const WedComments = ({ imageId, currentUserId }) => {
    const [backendComments, setBackendComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null)

    // const getReplies = commentId => {
    //     return backendComments
    //     .filter((backendComment) => backendComment.comment === commentId)
    //     .sort( 
    //         (a, b) => 
    //             new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    // };
    const getReplies = commendId => {
        return backendComments
        .filter((backendComment) => backendComment.parentId === commendId)
        .sort(
            (a, b) => 
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    };
//     const addComment = (text, parentId) => {
//         console.log("addComment", text, parentId);
//         createCommentApi(text, parentId).then(comment => {
//             setBackendComments([comment, ...backendComments])
//             setActiveComment(null)
//         })
//     };
    
//     const deleteComment = (commentId) => {
// if (window.confirm('Sure about deleting this?')) {
//     deleteCommentApi(commentId).then(() => {
//         const updatedBackendComments = backendComments.filter((backendComment) => backendComment.id !== commentId);
//         setBackendComments(updatedBackendComments);
//     })
// }
//     }

//     const updateComment = (text, commentId) => {
//         updateCommentApi(text, commentId).then(() => {
//             const updatedBackendComments = backendComments.map(backendComment => {
//                 if (backendComment.id === commentId) {
//                     return { ...backendComment, body: text };
//                 }
//                 return backendComment;
//             });
//             setBackendComments(updatedBackendComments);
//             setActiveComment(null)
//         });
//     };

    // useEffect(() => {
    // getCommentsApi().then((data) => {
    //     setBackendComments(data);
    // });
    // }, []);

    // useEffect(() => {
    //     getComments().then((data) => {
    //         setBackendComments(data);
    //     });
    // }, []);

//     useEffect(() => {
//         const fetchComments = async () => {
//             try {
//                 const response = await fetch(`/comments/${imageId}`);
//                 if (response.ok) {
//                     const comments = await response.json();
//                     setBackendComments(comments);
//                 } else {
//                 console.error('Failed to fetch the wedding comments');
//             }
//         } catch (error) {
//                 console.error('error with fetching the wedding comments:', error);
//             }
//     };

//     fetchComments();
// }, []);

useEffect(() => {
  const fetchComments = async () => {
    try {
      console.log("Sending GET request to fetch comments with imageId:", imageId);
      const response = await axios.get(`http://localhost:3012/comments/${imageId}`, {
        // Request body goes here, if you have any data to send
      });

      console.log("Response status:", response.status);

      if (response.status === 200) {
        const comments = response.data;
        console.log("Received comments:", comments);
        setBackendComments(comments);
      } else {
        console.error('Failed to fetch the wedding comments');
      }
    } catch (error) {
      console.error('Error with fetching the wedding comments:', error);
    }
  };

  fetchComments();
}, [imageId]);


// useEffect(() => {
//   const fetchComments = async () => {
//       try {
//           const response = await fetch(`/comments/${imageId}`); // Use the provided imageId
//           if (response.ok) {
//               const comments = await response.json();
//               setBackendComments(comments);
//           } else {
//               console.error('Failed to fetch the wedding comments');
//           }
//       } catch (error) {
//           console.error('Error with fetching the wedding comments:', error);
          
//       }
      
//   };

//   fetchComments();
// }, [imageId]); // Include 'imageId' as a dependency


    // const rootComments = backendComments.filter(
    // (backendComment) => backendComment.parentId === null
    // );

    const addComment = async (text, commentator) => {
        try {
          const response = await fetch('http://localhost:3012/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: text, commentator }),
          });

          if (response.ok) {
            const newComment = await response.json();
            setBackendComments([newComment, ...backendComments]);
            setActiveComment(null);
          } else {
            console.error('Failed to add comment');
          }
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      };
    
      const deleteComment = async (commentId) => {
        try {
          const response = await fetch(`http://localhost:3012/${commentId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            const updatedBackendComments = backendComments.filter(
              (backendComment) => backendComment.id !== commentId
            );
            setBackendComments(updatedBackendComments);
          } else {
            console.error('Failed to delete comment');
          }
        } catch (error) {
          console.error('Error deleting comment:', error);
        }
      };
    
      const updateComment = async (text, commentId) => {
        try {
          const response = await fetch(`http://localhost:3012/${commentId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ comment: text, commentator: currentUserId }),
          });
          if (response.ok) {
            const updatedComment = await response.json();
            console.log('Updated comment from server:', updatedComment);
            const updatedBackendComments = backendComments.map((backendComment) => {
              if (backendComment.id === commentId) {
                return { ...backendComment, comment: text };
              }
              return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
          } else {
            console.error('Failed to update comment');
          }
        } catch (error) {
          console.error('Error updating comment:', error);
        }
      };
    

  return (
    <div className='comments'>
        <h3 className="comments-title">Comments</h3>
        <div className="comment-form-title">Write Comment</div>
        <CommentForm submitLabel="Write" handleSubmit={addComment} />
        <div className="comments-container">
            {backendComments.map((comment) => (
                <WedComment 
                key={comment.id} 
                comment={comment.comment} 
                commentator={comment.commentator}
                replies={getReplies(comment.id)} 
                currentUserId={currentUserId}
                deleteComment={deleteComment}
                updateComment={updateComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                // addComment={addComment}
                />
                
            ))}
        </div>
    </div>
  )
}

export default WedComments