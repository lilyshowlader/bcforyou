import React from 'react';
import './BirthControlOptions.modules.css';

export default function BirthControlOptions() {
  return (
    <>
      <div className='centered-heading'>
        <h1 className='heading'>birth control, for you.</h1>
      </div>

      <div className='optionsContainer'>
        <div className='optionItem'>
          <img
            src='https://i.imgur.com/SKFbB7b.jpg'
            alt='IUD'
            className='iudImage'
          />
          <p className='optionName'>IUD</p>
        </div>


				<div className='optionItem'>
          <img
            src='https://i.imgur.com/Bvfprgj.jpg'
            alt='Patch'
            className='patchImage'
          />
          <p className='optionName'>THE PATCH</p>
        </div>


        <div className='optionItem'>
          <img
            src='https://i.imgur.com/Y18GSk5.jpg'
            alt='Nuvaring'
            className='nuvaRingImage'
          />
          <p className='optionName'>NUVARING</p>
        </div>

        <div className='optionItem'>
          <img
            src='https://i.imgur.com/CmIc9gL.jpg'
            alt='Implanon'
            className='implanonImage'
          />
          <p className='optionName'>IMPLANON</p>
        </div>

				<div className='optionItem'>
          <img
            src='https://i.imgur.com/AWnnCLn.jpg'
            alt='Condoms'
            className='condomImage'
          />
          <p className='optionName'>CONDOMS</p>
        </div>

				<div className='optionItem'>
          <img
            src='https://i.imgur.com/HOptUq2.jpg'
            alt='Pills'
            className='pillsImage'
          />
          <p className='optionName'>PILLS</p>
        </div>

      </div>
    </>
  );
}
