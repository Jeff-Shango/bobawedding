 import React, { useState } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import {API}  from "aws-amplify"

const myAPI = 'showTables';
const path = '/tables';
// const tableAPI = 'showTables';
// const tablePath = '/tables';

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
    setComments(prev =>({...prev, [e.target.name]: e.target.value}))
  };

  const postComment = async (imageId) => {
    try {
      const { comments: commentText, commentator } = comments;
      
      const data = {
                comments: commentText,
                commentator: commentator,
              };
        await API.post(`/add_comment?imageId=${imageId}`, data);      

      fetchComments(imageId);
  }  catch (err) {
      console.log(err)
    }
  };

    const fetchComments = async (imageId = null) => {
      try {
        const response = await axios.get(myAPI, path + `?imageId=${imageId}`);
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
              <input type="text" name='comments' className="galleryInput" onChange={handleChange} placeholder='Enter a comment!'/>
              <input type="text" className="galleryInput" name='commentator' onChange={handleChange} placeholder='Who is leaving this message!'/>
              <button className="formButton" onClick={() => postComment(currentImageId)}>Comment</button>
            </div>
            <div className="galleryPhotoCommentsContainer">
              <p className="galleryPhotoComments">{Array.isArray(commentsData) && commentsData.map((commentsData, index) => (
                <span className='tracking-in-contract' key={index}>{commentsData.comments} - {commentsData.commentator}<br/></span>
              ))}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
