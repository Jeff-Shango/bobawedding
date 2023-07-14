import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";


const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [comments, setComments] = useState({
    photo_comments: "",
    commentator: ""
  });

  const handleChange = (e) => {
    setComments(prev =>({...prev, [e.target.name]: e.target.value}))
  };

  const postComment = async e => {
    e.preventDefault()
    try{
      await axios.post("/gallery", comments)
      console.log("Comment Posted")
      
    }catch(err){
      console.log(err)
    }
  }

  console.log(comments)

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

      <Link to="/">
        <button className="galleryHomeBtn btn btn-primary">Go To Home</button>
      </Link>
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
            <div className="captionContainer">
              <h3 className='galleryEnlargeTitle'>Leave a caption!</h3>
              <input type="text" name='photo_comments' className="galleryInput" onChange={handleChange} placeholder='Enter a comment!'/>
              <input type="text" className="galleryInput" name='commentator' onChange={handleChange} placeholder='Who is leaving this message!'/>
              <button className="formButton" onClick={postComment}>Comment</button>
            </div>
            <div className="galleryPhotoCommentsContainer">
              <p className="galleryPhotoComments">Comments</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
