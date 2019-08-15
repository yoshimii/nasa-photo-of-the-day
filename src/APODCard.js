import React from "react";

const APODCard = props => {
    return (
        <div className="photo-container" key={props.date}>
            <h1>{props.title}</h1>
            <img className="photo" src={props.url} alt="nasa-APOD"></img>
            <p>{props.explanation}</p>
        </div>
    );
};

export default APODCard;