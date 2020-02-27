import React from "react";

import AnimalCard from "./AnimalCard.js";

export default function AnimalList({animals}) {

    return (
        <div className="card-container">
            {animals.map(animal => (
                <AnimalCard key={animal.id} animal={animal} />
            ))}
        </div>
    )
}