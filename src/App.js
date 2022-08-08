import { useState } from 'react';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
// import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
//import Particles from 'react-tsparticles';

// const app = new Clarifai.App({
//   apiKey : "82bf17f7072d409ba106db3532d2c70d"
// });

    //////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, model details, and the URL
    // of the image we want as an input. Change these strings to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////

    const USER_ID = 'rak0107';
    // Your PAT (Personal Access Token) can be found in the portal under Authentification
    const PAT = '7a975205b7ff45f5aa47a3028dfb6d1a';
    const APP_ID = 'acd9cbe6443c41f08123ab9aa6c7ffd3';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';    
    const IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSMVi_LmJbjZNWqXt9RJn8u5I9LwmAxCk5nqTmsc4X2Mnok9Y2fLoeeBJn6FKBlRqlag&usqp=CAU';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////







function App() {
//   const particleParams = {
//     "particles": {
//       "number": {
//           "value": 50
//       },
//       "size": {
//           "value": 5
//       }
//   },
//   "interactivity": {
//       "events": {
//           "onhover": {
//               "enable": true,
//               "mode": "repulse"
//           }
//       }
//   }
// };
console.log("App rendered");
const [input , setInput] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [faceBoxes , setFaceBoxes] = useState([]);
const [route, setRoute] = useState("signIn");
const [signedIn , setSignedIn] = useState(false);

const onRouteChange = (route) => {
  setRoute(route);
  if(route === "home"){
    setSignedIn(true);
  }else{
    setSignedIn(false);
  }
}

function onSubmit(event) {
  setImageUrl(input);

 
    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": input
                  }
              }
          }
      ]
  });
  
  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };
  
    console.log(event);
        fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
          .then(response => response.json())
          .then(result => {
                  //return console.log(result.outputs[0].data.regions[0].region_info.bounding_box);
                  setFaceBoxes(calculateFaceBox(result));
          })
          .catch(error => console.log('error', error));
 
}

 function onInputChange(event) { 
    console.log(event.target.value);
    setInput(event.target.value);
}

const calculateFaceBox = (response) => {
  let faceBoxList = [];
  const regions = response.outputs[0].data.regions
  regions.forEach((faceBox)=>{
      const boundingBox = faceBox.region_info.bounding_box;
      const inputImageBox = document.querySelector('.inputImage');
      const width = Number(inputImageBox.width);
      const height = Number(inputImageBox.height);
      faceBoxList.push({
        left : (boundingBox.left_col * width ) ,
        top : boundingBox.top_row * height,
        right : width - (boundingBox.right_col * width),
        bottom : height - (boundingBox.bottom_row * height)
      });
  });
  return faceBoxList;
}



  return (
    <div className="App">
        <Navigation signedIn={signedIn} onSetSignedIn={setSignedIn} onRouteChange={onRouteChange}/>
          { (route === "home")
          ?   
            <div>
              <Logo/>
              <Rank></Rank>
              <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit}/>
              <FaceRecognition imageUrl={imageUrl} faceBoxes={faceBoxes}/>
            </div> 
          :
            (route === "signIn") 
            ?
            <SignIn onRouteChange={onRouteChange}/>
            :
            <Register onRouteChange={onRouteChange}/>
          }
        
      
    </div>
  );
}

export default App;
