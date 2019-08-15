import React, { useState, useEffect } from "react";
import axios from "axios";
import { Segment, Image, Message } from 'semantic-ui-react';

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
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div className="screen">
        
        <Segment>
        <Image src={photo.url} size='medium' centered />
        <Message color="blue"
            header={photo.title}
            content={photo.explanation}
        />
        </Segment>

        </div>
    
                   
    );
};