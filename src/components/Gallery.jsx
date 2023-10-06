import React, { useState, useEffect } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";
import Ably from '../Ably.js';
import Comments from './Comments.js';
import { generateAblyToken } from '../serverFunctions/ablyFunctions';

// var Ably = require('ably');
const Gallery = () => {
  const location = useLocation();
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentator, setCommentator] = useState('');

  const generateToken = async () => {
    try {
      const response = await generateAblyToken({ clientId: 'unique-client-id' });
      const { tokenRequest } = response.data;
      // Use the generated tokenRequest as needed in your application
      console.log('Generated Token Request:', tokenRequest);
    } catch (error) {
      console.error('Error generating Ably token:', error);
    }
  };

  useEffect(() => {
    if (location.pathname === '/gallery') {
    const fetchHistoricalComments = async () => {
      const channel = Ably.channels.get("comments");
      channel.attach();
      channel.once("attached", () => {
        channel.history((err, page) => {
          if (!err) {
            const historicalComments = Array.from(page.items, (item) => item.data);
            setComments(historicalComments);
          }
        });
      });
    };
    fetchHistoricalComments();
  }
}, [location]);

  // const handleChange = (e) => {
  //   if (e.target.name === 'comments') {
  //     setCommentator(e.target.value);
  //   } else if (e.target.name === 'commentator') {
  //     setComments(e.target.value);
  //   }
  // };

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleCommentatorChange = (e) => {
    setCommentator(e.target.value);
  }

  const handleImageClick = (image, index) => {
    console.log("Image clicked:", image);
    if (enlargedImage === image) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image);
      setComments('');
      setCommentator('');
    }
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };

  const addComment = async (commentText, commentatorName) => {
    // e.preventDefault();
    const comment = commentText.trim();
    const name = commentatorName.trim();
    // const comment = e.target.elements.comments.value.trim();
    // const name = e.target.elements.commentator.value.trim();
    const timestamp = Date.now();

    const avatar = await (
      await axios.get("https://dog.ceo/api/breeds/image/random")
    ).data.message;

    if (name && comment) {
      const commentObject = { name, comment, timestamp, avatar };
      const channel = Ably.channels.get("comments");
      channel.publish("add_comment", commentObject, (err) => {
        if (err) {
          console.log("Unable to publish message err = " + err.message);
        }
      });
      setComments((prevComments) => [ commentObject, ...prevComments]);
      // setComment('');
      setCommentator('');
      // e.target.elements.commentator.value = "";
      // e.target.elements.comments.value = "";
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
            <img
              id='enlargedImg'
              src={enlargedImage}
              alt="Enlarged"
              onClick={handleEnlargedImageClick}
            />
          </div>
          <div className='column is-half is-offset-one-quarter'>
            <h1 className="title">Please leave your feedback below</h1>
            {/* <form onSubmit={addComment}> */}
            <form onSubmit={(e) => {
              e.preventDefault();
              addComment(commentator, comments);
              // e.target.elements.commentator.value = "";
              // e.target.elements.comments.value = "";
            }}>
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="commentator"
                    placeholder="Your name"
                    value={commentator}
                    onChange={handleCommentatorChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name="comments"
                    placeholder="Add a comment"
                    value={comments}
                    onChange={handleCommentChange}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button onClick={generateToken} type="submit" className="button is-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <section className="containerComment">
            <Comments comments={comments} />
          </section>
        </div>
      )}
    </div>
  );
};

export default Gallery;

