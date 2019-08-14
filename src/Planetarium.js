import React, { useState, useEffect } from "react";
import axios from "axios";
import APODCard from "./APODCard";

export default function App () {
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {

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