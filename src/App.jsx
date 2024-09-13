
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OpenAI from 'openai';
import axios from 'axios';
import React, {useState} from "react";

const API_KEY = "sk-3tkPKaszRPu9zDu0kAXT3BLbkwQVivfgQWk5KlPEuwG";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");



function App() {

  const [imageUrl, setImageUrl] = useState(null);  
  
const generate = async() => {
  const options = {
    method: 'POST',
    url: 'https://api.getimg.ai/v1/flux-schnell/text-to-image',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer key-4SE8wefN1bTDZFuY8iGbbAvk7YrSanclKRb0Wmyyz4TZm5fChAvnEJpVv6lzGrvsRab4FnbWOKNJOdsZDnyuWP7w1Iz5poL7'
    },
    data: {prompt: 'a photo of a bird ', response_format: 'url'}
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setImageUrl(response.data.url);
    
  } catch (error) {
    console.log(error.message);
  }
}





  

  

  return (
    
      <div>
        <button onClick={generate}>generate</button>
        <img src={imageUrl} alt="" />
        
       </div>
    
  )
}

export default App
