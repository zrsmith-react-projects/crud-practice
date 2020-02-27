import React from "react";

export default function AnimalCard({animal}) {

    const { name, sound, classification } = animal;
    const { species } = classification;

    return (
        <div className="card">
            <h3>This is the {name} card! {sound}</h3>
            <h4>{name}</h4>
            <h4>{species}</h4>
        </div>
    )
}