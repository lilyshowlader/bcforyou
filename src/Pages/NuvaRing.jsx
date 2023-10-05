import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NuvaRing.modules.css'; 

export default function NuvaRing() {
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
          <p className='bc-heading'>NUVARING</p>
          <img
            src='https://i.imgur.com/Y18GSk5.jpg'
            alt='NuvaRing'
            className='nuvaRingImage'
          />
        </div>

        <div className='text-container'>
          <p className='sub-heading'>WHAT IS IT?</p>
          <p className='answer'>
					The birth control ring is a safe and convenient birth control method that works really well if you always use it correctly. You wear a small, flexible ring inside your vagina, and it prevents pregnancy 24/7 by releasing hormones into your body. 
          </p>
          <p className='sub-heading'>HOW DOES IT WORK?</p>
          <p className='answer'>
					The ring works by stopping sperm from joining with an egg (which is called fertilization). Each NuvaRing lasts for up to 5 weeks. You take your old NuvaRing out of your vagina and put in a new one about once a month, depending on the ring schedule you choose. You can also use NuvaRing to safely skip your period if you want to. 
          </p>
        </div>
      </div>

      <div className='content-container'>
      <div className='text-container-two'>
        <p className='sub-heading'>HOW DO I MAKE THE RING WORK BEST FOR ME?</p>
				    <ul>
              <li>Use a calendar to mark the days you need to take out the ring, put in the ring, and get a new ring.</li>
              <li>Use a birth control reminder app or set an alarm on your phone.</li>
            </ul>

						<p className='sub-heading'>TAKING CARE OF YOUR RING PROPERLY</p>
				    <ul>
              <li>Keep your ring(s) in the same place so you don’t lose them.</li>
              <li>Store NuvaRings at room temperature, and away from direct sunlight for up to 4 months (16 weeks). Keep any NuvaRings that you won’t use within 4 months in the refrigerator.</li>
            </ul>


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

