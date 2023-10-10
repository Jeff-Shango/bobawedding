import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import WedComments from '../weddingCommentServer/Comments';
import "./galleryStyles.css"

const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image, index) => {
    console.log("Image clicked:", image);
    if (enlargedImage === image) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image);
    }
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
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
            {/* <form onSubmit={(e) => {
              e.preventDefault();
              // addComment(e.target.elements.comments.value, e.target.elements.commentator.value);
              // e.target.elements.commentator.value = "";
              // e.target.elements.comments.value = "";
            }}> */}
              {/* <div className="field">
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    name="commentator"
                    placeholder="Your name"
                    value={commentator}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form> */}
          </div>
          <section className="containerComment">
            <WedComments currentUserId="1" /> 
          </section>
        </div>
      )}
    </div>
  );
};

export default Gallery;

