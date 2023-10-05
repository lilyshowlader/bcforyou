import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Condoms.modules.css'; 

export default function Condoms() {

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
          <p className='bc-heading'>CONDOMS</p>
          <img
            src='https://i.imgur.com/AWnnCLn.jpg'
            alt='Condoms'
            className='condomImage'
          />
        </div>

        <div className='text-container'>
          <p className='sub-heading'>WHAT IS IT?</p>
          <p className='answer'>
					Condoms are thin, stretchy pouches that you wear on your penis during sex. Condoms provide great protection from both pregnancy and STDs. They’re easy to use and easy to get.
          </p>
          <p className='sub-heading'>HOW DOES IT WORK?</p>
          <p className='answer'>
					Condoms are small, thin pouches that cover your penis during sex and collect semen (cum). Condoms prevent pregnancy by stopping sperm from getting into the vagina, so sperm can’t meet up with an egg. Some types of condoms also help prevent STDs.
					<br></br>
					There are 3 types of condoms: latex condoms, plastic (non latex) condoms, and lambskin (animal skin) condoms.
          </p>
        </div>
      </div>

      <div className='content-container'>
      <div className='text-container-two'>
       		 <p className='sub-heading'>Latex condoms</p>
				    <ul>
              <li>Latex condoms are made from rubber and are the most common type of condom</li>
              <li>Latex condoms help protect against both pregnancy and STDs.</li>
              <li>Only use water-based or silicone lube with latex condoms — don’t use anything with oil, because oil can damage latex condoms.</li>
            </ul>

						<p className='sub-heading'>Plastic condoms</p>
						<ul>
						  <li>Plastic/non latex condoms are made from plastics like polyurethane, nitrile, or polyisoprene and are safe for people with latex allergies or sensitivities. </li>
              <li>Plastic/non latex condoms help protect against both pregnancy and STDs.</li>
              <li>You can use water-based and silicone lube with any kind of plastic condom. You can generally use oil-based lubes with plastic condoms. </li>
            </ul>

						<p className='sub-heading'>Lambskin condoms</p>
						<ul>
						  <li>Lambskin condoms are made from the lining of animal intestines (usually sheep).</li>
              <li>Lambskin condoms only help protect against pregnancy — they don’t prevent STDs..</li>
              <li>You can use any kind of lube, including oils, with lambskin condoms.</li>
            </ul>

        <p className='bc-heading'>REVIEWS</p>
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

