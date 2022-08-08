import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
        <p className='f3 white tc'>
            This Magic Brain will detect your face, give it a try.
        </p>
        <div >
            <div className='form center pa3 br3 shadow-5'>
                <input className='w-70 pa2 ma3' placeholder='url...' onChange={onInputChange}></input>
                <button 
                  className='w-30 grow bg-dark-gray white dib pa1 ma3 b--white pointer'
                  onClick={onSubmit}
                > Detect </button>
            </div>
        </div>
    </div>
  )
}

export default ImageLinkForm