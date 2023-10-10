const {axios} = require('axios');

// export const getComments = async () => {
//     return [
//       {
//         id: "1",
//         body: "First comment",
//         username: "Jack",
//         userId: "1",
//         parentId: null,
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//       {
//         id: "2",
//         body: "Second comment",
//         username: "John",
//         userId: "2",
//         parentId: null,
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//       {
//         id: "3",
//         body: "First comment first child",
//         username: "John",
//         userId: "2",
//         parentId: "1",
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//       {
//         id: "4",
//         body: "Second comment second child",
//         username: "John",
//         userId: "2",
//         parentId: "2",
//         createdAt: "2021-08-16T23:00:33.010+02:00",
//       },
//     ];
//   };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text, commentId) => {
  try {
    await axios.put(`/comments/${commentId}`, { text }); // Assuming your API endpoint is '/comments/:id'
    // Update the comment in the frontend state if necessary
  } catch (error) {
    console.error('Error updating comment:', error);
  }
};

  
export const deleteComment = async (commentId) => {
  try {
    await axios.delete(`/comments/${commentId}`); // Assuming your API endpoint is '/comments/:id'
    // Remove the comment from the frontend state if necessary
  } catch (error) {
    console.error('Error deleting comment:', error);
  }
};
