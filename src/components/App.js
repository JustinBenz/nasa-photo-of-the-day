import React, { useEffect, useState } from "react";
import "../App.css";
import Picture from "../components/Picture"
import PictureDetails from "../components/PictureDetails"
import axios from "axios"
import { BASE_URL, API_KEY } from '../constants'

function App() {
  const[pictureObj, setPictureObj]=useState([])
  useEffect(() => {
    axios
        .get(`${BASE_URL}${API_KEY}`)
        .then((res) => {
          setPictureObj(res.data)
          console.log(res.data)
        })
        .catch((fuzz) =>{
        console.log(fuzz)
        })
    }, [])
  return (
    <>
    <Picture 
      url={pictureObj.url}
    />
    <PictureDetails 
      title={pictureObj.title}
      date={pictureObj.date}
      desc={pictureObj.explanation}
    />
    </>
  );
}

export default App;
