import React from "react";

const APODCard = props => {
    return (
        <div className="photo" key={props.id}>
            <img src={props.url}></img>
            <p>{props.description}</p>
        </div>
    );
};

export default APODCard;