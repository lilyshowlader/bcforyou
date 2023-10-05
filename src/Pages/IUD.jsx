import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './IUD.modules.css'; 

export default function IUD() {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  
  // Function to handle adding a new review
  const addReview = () => {
    if (newReview.trim() !== '') {
      setReviews([...reviews, newReview]);
      setNewReview('');
      }
    };


  return (
    <>
      <div className='centered-heading'>
        <h1 className='heading'>birth control, for you.</h1>
      </div>

      <div className='content-container'>
        <div className='imageContainer'>
          <p className='bc-heading'>THE IUD</p>
          <img
            src='https://i.imgur.com/SKFbB7b.jpg'
            alt='IUD'
            className='iudImage'
          />
        </div>

        <div className='text-container'>
          <p className='sub-heading'>WHAT IS IT?</p>
          <p className='answer'>
            An IUD is a tiny device that's put into your uterus to prevent pregnancy. It’s long-term, reversible, and one of the most effective birth control methods out there.
          </p>
          <p className='sub-heading'>WHAT DOES IUD STAND FOR?</p>
          <p className='answer'>
            IUD stands for Intrauterine Device (basically: a device inside your uterus). It's a small piece of flexible plastic shaped like a T. Sometimes it’s called an IUC — intrauterine contraception.
          </p>
          <p className='sub-heading'>WHAT ARE THE TYPES OF IUDS?</p>
          <p className='answer'>
            There are 5 different brands of IUDs that are FDA approved for use in the United States:
            <ul>
              <li>Paragard</li>
              <li>Mirena</li>
              <li>Kyleena</li>
              <li>Liletta</li>
              <li>Skyla</li>
            </ul>
          </p>
        </div>
      </div>

      <div className='content-container'>
      <div className='text-container-two'>
        <p className='sub-heading'>These IUDs are divided into 2 types:</p>
        <p className='answer'>
          Hormonal IUDs (Mirena, Kyleena, Liletta, and Skyla)
          <br />
          &amp;
          <br />
          Copper IUDs (Paragard)
          <br />
          <br />
          The Paragard IUD doesn’t have hormones. It’s wrapped in a tiny bit of copper, and it protects you from pregnancy for up to 12 years.

          The Mirena, Kyleena, Liletta, and Skyla IUDs use the hormone progestin to prevent pregnancy. Progestin is very similar to the hormone progesterone that our bodies make naturally. Mirena works for up to 8 years. Kyleena works for up to 5 years. Liletta works for up to 8 years. Skyla works for up to 3 years.
        </p>

        
        <p className='review-heading'>REVIEWS</p>
        <p>leave a review</p>

        <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love the patch!'
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className='text-area'
          ></textarea>
          <button onClick={addReview} className='submit-button'>submit</button>

          
      </div>
      </div>
   
      <div className='content-container'>
      <div>
        <Link to="/">
          <button className='home-button'>home</button>
        </Link>
      </div>
      </div>

      <div className='endofpage'></div>
    </>
  );
}
