import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";

const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    if (enlargedImage === image) {
      // If the clicked image is already enlarged, shrink it back to the original size
      setEnlargedImage(null);
    } else {
      // Otherwise, enlarge the clicked image
      setEnlargedImage(image);
    }
  };

  const handleEnlargedImageClick = () => {
    // When the enlarged image is clicked, shrink it back to the original size
    setEnlargedImage(null);
  };

  return (
    <div>
      {imgContainer.map((image, index) => (
        <img
          id='galleryImg'
          key={index}
          src={image}
          alt={`${index + 1}`}
          onClick={() => handleImageClick(image)}
          className={enlargedImage === image ? 'enlarged' : ''}
        />
      ))}
      {enlargedImage && (
        <div className="enlarged-container" >
          <div className="enlarged-image">
            <img id='enlargedImg' src={enlargedImage} alt="Enlarged" onClick={handleEnlargedImageClick} />
            </div>
            <h3 className='galleryEnlargeTitle'>Leave a caption!</h3>
            <input type="text" className="galleryInput" />
            <div className="galleryPhotoCommentsContainer">
              <p className="galleryPhotoComments">Comments</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
