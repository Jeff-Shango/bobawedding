import React from 'react';

const Comment = ({ comment }) => {
  const messageDateGet = () => {
    const date = new Date(comment.timestamp);
    const dateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    const localeString = date.toLocaleString(undefined, dateTimeFormatOptions);
    return localeString;
  };

  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img alt="user avatar" src={comment.avatar} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <span className="user-name">{comment.name}</span>
          <span className="message-date">{messageDateGet()}</span>
          <p>{comment.comment}</p>
        </div>
      </div>
    </article>
  );
};

export default Comment;


// import React, { Component } from 'react'

// class Comment extends Component {
//   constructor(params) {
//     super(params)
//     this.messageDate = this.messageDateGet()
//   }
//   messageDateGet() {
//     const date = new Date(this.props.comment.timestamp)
//     const dateTimeFormatOptions = {
//       year: "2-digit",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//     }
//     const localeString = date.toLocaleString(undefined, dateTimeFormatOptions)
//     return localeString
//   }
//  render() {
//   return (
//     <article className="media">
//       <figure className="media-left">
//         <p className="image is-64x64">
//           <img alt="dog pic" src={this.props.comment.avatar} />
//         </p>
//       </figure>
//       <div className="media-content">
//         <div className="content">
//           <span className="user-name">{this.props.comment.name} </span>
//           <span className="message-date">{this.messageDate}</span>
//           <p>{this.props.comment.comment}</p>
//         </div>
//       </div>
//     </article>
//   )
// }
// }
// export default Comment