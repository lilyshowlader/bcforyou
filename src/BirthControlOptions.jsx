import React from 'react';
import { Link } from 'react-router-dom';

import './BirthControlOptions.modules.css';


export default function BirthControlOptions() {



  return (
    <>
      <div className='centered-heading'>
        <h1 className='heading'>birth control, for you.</h1>
      </div>

      <div className='optionsContainer'>
        <div className='optionItem'>
				<Link to='/iud'>
          <img
            src='https://i.imgur.com/SKFbB7b.jpg'
            alt='IUD'
            className='iudImage'
          />
					</Link>
          <p className='optionName'>IUD</p>
        </div>

	
				<div className='optionItem'>
				<Link to='/patch'>
          <img
            src='https://i.imgur.com/Bvfprgj.jpg'
            alt='Patch'
            className='patchImage'
          />
					</Link>
          <p className='optionName'>THE PATCH</p>
        </div>


        <div className='optionItem'>
				<Link to='/nuvaRing'>
          <img
            src='https://i.imgur.com/Y18GSk5.jpg'
            alt='Nuvaring'
            className='nuvaRingImage'
          />
					</Link>
          <p className='optionName'>NUVARING</p>
        </div>


        <div className='optionItem'>
				<Link to='/implanon'>
          <img
            src='https://i.imgur.com/CmIc9gL.jpg'
            alt='Implanon'
            className='implanonImage'
          />
					</Link>
          <p className='optionName'>IMPLANON</p>
        </div>


				<div className='optionItem'>
				<Link to='/condoms'>
          <img
            src='https://i.imgur.com/AWnnCLn.jpg'
            alt='Condoms'
            className='condomImage'
          />
					</Link>
          <p className='optionName'>CONDOMS</p>
        </div>
				

				<div className='optionItem'>
				<Link to='/pills'>
          <img
            src='https://i.imgur.com/HOptUq2.jpg'
            alt='Pills'
            className='pillsImage'
          />
					</Link>
          <p className='optionName'>PILLS</p>
        </div>

      </div>
    </>
  );
}
