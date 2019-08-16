import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Message, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-day-picker/lib/style.css';
export default function Planetarium (props) {
    const [photo, setPhotos] = useState([]);

        useEffect(()=> {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", {
            params: {}
        })
        .then(response => {
            const images = response.data
            setPhotos(images);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    return (
        <div className="screen">


  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='moon' circular />
      <Header.Content>Astronomy Picture of the Day</Header.Content>
    </Header>
    
    <div className="ui rotate left reveal">
        <div className="ui visible content">
        <Image centered size="big" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" className="ui circular image"/>
        </div>
        <div className="ui hidden content">
        <Image centered src={photo.url} className="ui massive circular image"/>
    <Message size='large' color="blue"
            header={photo.title}
            content={photo.explanation}
        />
        <Image src={"https://i.imgur.com/Fng2uX8.png"} size='big' centered />

    </div>
    </div>
  </div>
  </div>
)
};