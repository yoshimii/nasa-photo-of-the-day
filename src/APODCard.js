import React from "react";

const APODCard = props => {
    return (
        <div className="photo">
            <img src={props.url}></img>
            <p>{props.description}</p>
        </div>
    )
}

export default APODCard;