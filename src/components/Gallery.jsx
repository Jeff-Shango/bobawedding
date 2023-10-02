import React, { useState, useEffect } from 'react';
import img1 from '../assets/imgA.jpg';
import img2 from '../assets/imgB.jpg';
import img3 from '../assets/imgC.jpg';
import "../App.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import Ably from '../Ably';
import Comments from './Comments';

const Gallery = () => {
  const imgContainer = [img1, img2, img3];
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
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
  }, []);

  const handleChange = (e) => {
    setComments({ ...comments, [e.target.name]: e.target.value });
  };

  const handleImageClick = (image, index) => {
    console.log("Image clicked:", image);
    if (enlargedImage === image) {
      setEnlargedImage(null);
    } else {
      setEnlargedImage(image);
      setComments({
        comments: "",
        commentator: "",
      });
    }
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };

  const addComment = async (e) => {
    e.preventDefault();
    const comment = e.target.elements.commentator.value.trim();
    const name = e.target.elements.comments.value.trim();
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
      setComments((prevComments) => [commentObject, ...prevComments]);
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
            <img
              id='enlargedImg'
              src={enlargedImage}
              alt="Enlarged"
              onClick={handleEnlargedImageClick}
            />
          </div>
          <div className='column is-half is-offset-one-quarter'>
            <h1 className="title">Please leave your feedback below</h1>
            <form onSubmit={addComment}>
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
                  <button type="submit" className="button is-primary">
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
