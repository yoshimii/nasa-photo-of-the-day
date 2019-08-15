import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCard from "./APODCard.js";

export default function Planetarium () {
    const [photo, setPhotos] = useState([]);

    useEffect(()=> {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", {
            params: {}
        })
        .then(response => {
            const images = response.data
            console.log("we are all made of stars", response);
            setPhotos(images);
        })
    }, []);
    return (
        <div className="screen">
        
                    <APODCard
                        title={photo.title}
                        key={photo.date}
                        url={photo.url}
                        explanation={photo.explanation}
                    />
          
                   </div>
    );
};