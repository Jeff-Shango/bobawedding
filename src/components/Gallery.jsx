import React, { useState } from 'react';
import Navlinks from './Navlinks/Navlinks';
// add 18
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import img4 from '../assets/imgD.jpg';
import img5 from '../assets/imgE.jpg';
import img6 from '../assets/imgF.jpg';
import img7 from '../assets/imgG.jpg';
import img8 from '../assets/imgH.jpg';
import img9 from '../assets/imgI.jpg';
import img10 from '../assets/imgJ.jpg';
import img11 from '../assets/imgK.jpg';
import img12 from '../assets/imgL.jpg';
import img13 from '../assets/imgM.jpg';
import img14 from '../assets/imgN.jpg';
import img15 from '../assets/imgO.jpg';
import img16 from '../assets/imgP.jpg';
import img17 from '../assets/imgQ.jpg';
import img18 from '../assets/imgR.jpg';
import img19 from '../assets/imgS.jpg';
import img20 from '../assets/imgT.jpg';
import img21 from '../assets/imgU.jpg';
import "../App.css";
// import { Link } from 'react-router-dom';
import WedComments from '../weddingCommentServer/Comments';
import "./galleryStyles.css"

const Gallery = () => {
  // const imgContainer = [img1, img2, img3]
  const imgContainer = [
    { imageId: 'image1', image: img1, comments: [] },
    { imageId: 'image2', image: img2, comments: [] },
    { imageId: 'image3', image: img3, comments: [] },
    { imageId: 'image4', image: img4, comments: [] },
    { imageId: 'image5', image: img5, comments: [] },
    { imageId: 'image6', image: img6, comments: [] },
    { imageId: 'image7', image: img7, comments: [] },
    { imageId: 'image8', image: img8, comments: [] },
    { imageId: 'image9', image: img9, comments: [] },
    { imageId: 'image10', image: img10, comments: [] },
    { imageId: 'image11', image: img11, comments: [] },
    { imageId: 'image12', image: img12, comments: [] },
    { imageId: 'image13', image: img13, comments: [] },
    { imageId: 'image14', image: img14, comments: [] },
    { imageId: 'image15', image: img15, comments: [] },
    { imageId: 'image16', image: img16, comments: [] },
    { imageId: 'image17', image: img17, comments: [] },
    { imageId: 'image18', image: img18, comments: [] },
    { imageId: 'image19', image: img19, comments: [] },
    { imageId: 'image20', image: img20, comments: [] },
    { imageId: 'image20', image: img21, comments: [] },
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
    <div id='galleryBox'>
      <Navlinks/>
      <div className="galleryTitleContainer">
        <h1 id="galleryTitle">GALLERY</h1>
        <h3 id="galleryDescript">CLICK THE IMAGE TO VIEW IT</h3>
      </div>
      {/* <Link to="/">
        <button className="galleryHomeBtn btn btn-primary">Go To Home</button>
      </Link> */}
      {imgContainer.map((image, index) => (
        <div key={index} id='imgBox'>
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
            {/* <h1 className="title">Please leave your feedback below</h1> */}
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
          {/* <section className="containerComment">
            <WedComments imageId={selectedImageId} /> 
          </section> */}
        </div>
      )}
    </div>
  );
};

export default Gallery;

