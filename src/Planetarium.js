import React, { useState, useEffect } from "react";
import axios from "axios";
import { Segment, Image, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styled from "styled-components";
import MyForm from "./Calendar"
export default function Planetarium (props) {
    const [photo, setPhotos] = useState([]);
    // const ScreenBackground = styled.div`
    // background: black;
    // `;
    useEffect(()=> {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo", {
            params: {date: props.selectedDay}
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
        
        <Segment inverted color='black'>
        <Image src={photo.url} size='big' centered />
        <Message size='large' color="blue"
            header={photo.title}
            content={photo.explanation}
        />
        <Image src={"https://i.imgur.com/KHdXGUA.png"} size='big' centered />
        </Segment>

        </div>
    
                   
    );
};