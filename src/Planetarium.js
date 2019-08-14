import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCard from "./APODCard";

export default function App () {
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        axios.get("", {
            params: {}
        })
        .then(response) => {
            const images = response.data;
            console.log("we are all made of stars", stars);
            setPhotos(stars);
        }
    }, []);
    return (
        <>
        <div className="screen">
            {photos.map(photo => {
                return (
                    <APODCard
                    key={photo.id}
                    image={photo.url}
                    description={photo.description}
                )
            })}
            <APODCard/>
        </div>
        </>
    );
};