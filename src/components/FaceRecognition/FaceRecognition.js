import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,faceBoxes}) => {
  return (
    <div className="center mt3">
       { (imageUrl) ? (
      <div className='relative'>
            <img className="inputImage" alt="" src={imageUrl} style={{width : '500px', height : 'auto'}}/>
            {faceBoxes.map((faceBox)=>{
                return <div id='box-model' style={{top : faceBox.top, right : faceBox.right, bottom : faceBox.bottom,left : faceBox.left}}> </div>
            })}
            
     </div>
             )
        : "" 
    }
        
    </div>
  )
}

export default FaceRecognition
