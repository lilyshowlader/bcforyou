import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Implanon.modules.css'; 

export default function Implanon() {
// State to manage user reviews
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
          <p className='bc-heading'>THE IMPLANT</p>
          <img
            src='https://i.imgur.com/CmIc9gL.jpg'
            alt='Implanon'
            className='implanonImage'
          />
        </div>

        <div className='text-container'>
          <p className='sub-heading'>WHAT IS IT?</p>
          <p className='answer'>
					The birth control implant (AKA Nexplanon) is a tiny, thin rod about the size of a matchstick. The implant releases hormones into your body that prevent you from getting pregnant. A nurse or doctor inserts the implant into your arm and that’s it — you’re protected from pregnancy for up to 5 years. It’s get-it-and-forget-it birth control.
          </p>
          <p className='sub-heading'>HOW DOES IT WORK?</p>
          <p className='answer'>
					The birth control implant is a tiny, thin rod about the size of a matchstick. It’s also called Nexplanon and there’s a slightly older version called Implanon. A doctor inserts the implant under the skin of your upper arm. It releases the hormone progestin to stop you from getting pregnant.
          </p>
        </div>
      </div>

      <div className='content-container'>
      <div className='text-container-two'>
        <p className='sub-heading'>HORMONES IN THE IMPLANT PREVENT PREGNANCY IN TWO WAYS</p>
				    <ul>
              <li>Progestin thickens the mucus on your cervix, which stops sperm from swimming through to your egg. When sperm can’t meet up with an egg, pregnancy can’t happen.</li>
              <li>Progestin can also stop eggs from leaving your ovaries (called ovulation), so there’s no egg to fertilize. When eggs aren’t released, you can’t get pregnant.</li>
            </ul>

						<p className='sub-heading'>TAKE IT OUT WHEN YOU WANT</p>
						<p className='answer'>
						One of the awesome things about the implant is that it lasts for a long time — up to 5 years — but it’s not permanent. If you decide you want to get pregnant or you just don’t want to have your implant anymore, your doctor can take it out. You’re able to get pregnant quickly after the implant is removed. 
						</p>

        <p className='bc-heading'>REVIEWS</p>
        <p>leave a review</p>


        <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>

          <textarea
            placeholder='love the implant!'
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

