import React from 'react';
import { Link } from 'react-router-dom';
import './IUD.modules.css'; 

export default function ThePatch() {
  return (
    <>
      <div className='centered-heading'>
        <h1 className='heading'>birth control, for you.</h1>
      </div>

      <div className='content-container'>
        <div className='imageContainer'>
          <p className='bc-heading'>THE PATCH</p>
          <img
            src='https://i.imgur.com/Bvfprgj.jpg'
            alt='The Patch'
            className='patchImage'
          />
        </div>

        <div className='text-container'>
          <p className='sub-heading'>WHAT IS IT?</p>
          <p className='answer'>
					The transdermal contraceptive patch is a safe and convenient birth control method that works really well if you always use it correctly. You wear the patch on certain parts of your body, and it releases hormones through your skin that prevent pregnancy. 
					<br></br>
          </p>
          <p className='sub-heading'>HOW DOES IT WORK</p>
          <p className='answer'>
						The birth control patch, like Xulane or Twirla, prevents pregnancy by inhibiting fertilization through hormones that stop ovulation and thicken cervical mucus to block sperm. It's applied on the belly, butt, back, or upper arm, and the hormones are absorbed through the skin to provide contraception.
          </p>
          <p className='sub-heading'>HOW DO I MAKE THE PATCH WORK BEST FOR ME?</p>
          <p className='answer'>
					To get the patch’s full birth control powers, you have to use it correctly. Making a mistake — like forgetting to refill your prescription or not putting on a new patch on time — is the main reason why people might get pregnant when they’re using the patch.
          </p>
        </div>
      </div>

      <div className='content-container'>
      <div className='text-container-two'>
        <p className='sub-heading'>TIPS TO HELP YOU STAY ON SCHEDULE</p>
				<ul>
              <li>Use Spot On, our birth control reminder app or set a weekly alarm on your phone.</li>
              <li>Note your patch change days on your calendar.</li>
              <li>Be patch buddies with friends or family members who also use the patch, and help each other remember.</li>
              <li>Your partner can help remind you.</li>
            </ul>
						<p className='bc-heading'>REVIEWS</p>
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
