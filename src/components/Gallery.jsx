import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import Ably from 'Ably';

const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [commentsData, setCommentsData] = useState([]);
  const [comments, setComments] = useState({
    comments: "",
    commentator: ""
  });
  const [currentImageId, setCurrentImageId] = useState(null);

  const handleChange = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const postComment = async (imageId) => {
    try {
      const { comments: commentText, commentator } = comments;
      const data = {
        comments: commentText,
        commentator: commentator,
      };
      await axios.post(`/add_comment?imageId=${imageId}`, data);
      fetchComments(imageId);
    } catch (err) {
      console.log(err)
    }
  };

  const fetchComments = async (imageId = null) => {
    try {
      const response = await axios.get(`/get_comments/photo_comments_${imageId}`);
      const comments = response.data.map((item) => ({
        comments: item.comments,
        commentator: item.commentator,
      }));
      setCommentsData(comments);
    } catch (err) {
      console.log(err)
    }
  };

  const handleImageClick = (image, index) => {
    console.log("Image clicked:", image);
    if (enlargedImage === image) {
      setEnlargedImage(null);
      setCurrentImageId(null);
    } else {
      setEnlargedImage(image);
      setComments({
        comments: "",
        commentator: "",
      });
      setCurrentImageId(index + 1);
      fetchComments(index + 1);
    }
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };

  // Add the addComment method
  const addComment = (e) => {
    // Prevent the default behaviour of form submit
    e.preventDefault();
    // Get the value of the comment box and make sure it's not empty strings
    const comment = e.target.elements.comments.value.trim();
    const name = e.target.elements.commentator.value.trim();
    // Get the current time.
    const timestamp = Date.now();
    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment, timestamp };
      // Publish comment to Ably
      const channel = Ably.channels.get("comments");
      channel.publish("add_comment", commentObject, (err) => {
        if (err) {
          console.log("Unable to publish message err = " + err.message);
        }
      });
      // Clear input fields
      e.target.elements.commentator.value = "";
      e.target.elements.comments.value = "";
    }
  };

  return (
    <div>
      <Link to="/">
        <button className="galleryHomeBtn btn btn-primary">Go To Home</button>
      </Link>
      {imgContainer.map((image, index) => (
        <img
          id='galleryImg'
          key={index}
          src={image}
          alt={`${index + 1}`}
          onClick={() => handleImageClick(image, index)}
          className={enlargedImage === image ? 'enlarged' : ''}
        />
      ))}
      {enlargedImage && (
        <div className="enlarged-container">
          <div className="enlarged-image">
            <img id='enlargedImg' src={enlargedImage} alt="Enlarged" onClick={handleEnlargedImageClick} />
          </div>
          {/* Enter below here */}
          <div>
            <h1 className="title">Please leave your feedback below</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              postComment(currentImageId);
            }}>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="comments"
                    placeholder="Your name"
                    value={comments.comments}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="commentator"
                    placeholder="Add a comment"
                    value={comments.commentator}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
