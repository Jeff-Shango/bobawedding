import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
// import { Link } from 'react-router-dom';
import WedComments from '../weddingCommentServer/Comments';
import "./galleryStyles.css"

const Gallery = () => {
  // const imgContainer = [img1, img2, img3]
  const imgContainer = [
    { imageId: 'image1', image: img1, comments: [] },
    { imageId: 'image2', image: img2, comments: [] },
    { imageId: 'image3', image: img3, comments: [] }
  ];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImageClick = (image, index) => {
    console.log("Image clicked:", image.imageId);
    setSelectedImageId(image.imageId)
    if (enlargedImage === image.imageId) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image.imageId);
    }
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };
  

  return (
    <div>
      {/* <Link to="/">
        <button className="galleryHomeBtn btn btn-primary">Go To Home</button>
      </Link> */}
      {imgContainer.map((image, index) => (
        <div key={index}>
        <img
          id='galleryImg'
          key={index}
          src={image.image}
          alt={image.imageId}
          onClick={() => handleImageClick(image, index)}
          className={enlargedImage === image.imageId ? 'enlarged' : ''}
        />
        </div>
      ))}
      {enlargedImage && (
        <div className="enlarged-container">
          <div className="enlarged-image">
            <img
              id='enlargedImg'
              src={imgContainer.find(img => img.imageId === enlargedImage).image}
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
            <WedComments imageId={selectedImageId} /> 
          </section>
        </div>
      )}
    </div>
  );
};

export default Gallery;

