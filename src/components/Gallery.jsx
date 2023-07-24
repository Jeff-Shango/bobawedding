 import React, { useEffect, useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [makecomment, setMakeComment] = useState([]);
  const [comments, setComments] = useState({
    user_comment: "",
    commentator: ""
  });

  const testFetchComments = async (imageId) => {
    try {
      const tableName = `photo_comments_/${imageId}`;      
      const response = await axios.get(`http://localhost:8000/get_comments/${imageId}`);
      console.log(`The comments for ${tableName}:`, response.data);
    } catch (err) {
      console.log(err)
    }
  };

  const handleChange = (e) => {
    setComments(prev =>({...prev, [e.target.name]: e.target.value}))
  };

  const postComment = async (e, tableName) => {
    e.preventDefault()
    try{
      if (comments.comments && comments.commentator && comments.tableName) {
        const data = {
          comments: comments.comments,
          commentator: comments.commentator,
          imageUrl: enlargedImage,
        }
      await axios.post("http://localhost:8000/add_comment", data)
      console.log("Comment Posted");
    } else { 
      console.log("Please fill in all the comment fields")
    }
      
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:8000/gallery");
        console.log("Response from API:", response.data);
        setMakeComment(response.data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchComments();
  }, [])

  const handleImageClick = (image, index) => {
    if (enlargedImage === image) {
      // If the clicked image is already enlarged, shrink it back to the original size
      setEnlargedImage(null);
    } else {
      // Otherwise, enlarge the clicked image
      setEnlargedImage(image);
      setComments({
        comments: "",
        commentator: "",
      });
      testFetchComments(index + 1);
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
          onClick={() => handleImageClick(image, index)}
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
              <input type="text" name='user_comment' className="galleryInput" onChange={handleChange} placeholder='Enter a comment!'/>
              <input type="text" className="galleryInput" name='commentator' onChange={handleChange} placeholder='Who is leaving this message!'/>
              <button className="formButton" onClick={postComment}>Comment</button>
            </div>
            <div className="galleryPhotoCommentsContainer">
              <p className="galleryPhotoComments">{makecomment.map((makecomment, index) => (
                <span className='tracking-in-contract' key={index}>{makecomment.comment} - {makecomment.commentator}<br/></span>
              ))}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
