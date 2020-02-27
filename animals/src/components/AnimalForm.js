import React, { useState } from "react";

const initialAnimal = {
    name: '',
    sound: '',
    classification: { species:'' }
}

export default function AnimalForm({animals, updateAnimals }) {

    const [ updating, setUpdating ] = useState(false);
    const [animalToUpdate, setAnimalToUpdate] = useState(initialAnimal);

    const editAnimal = animal => {
        setUpdating(true);
        setAnimalToUpdate(animal);
    }

    const saveUpdate = e => {
        e.preventDefault();
        // How can we update the animal information?
        // Where can we get the ID? 
        // Where is the information stored?
    }

    const deleteAnimal = animal => {
        // How can we delete an animal?
    }

    return (
        <div className="animals-list">
            <ul className="organized">
                {animals.map(animal => (
                    <li key={animal.name} onClick={() => editAnimal(animal)} className="edit-animals">
                        <span>
                            <span onClick={e => {
                                    e.stopPropagation();
                                    deleteAnimal(animal)
                                }
                            } >
                                X
                            </span>{" "}
                            {animal.name}
                        </span>
                    </li>
                ))}
            </ul>
            { updating && (
                <form onSubmit={saveUpdate}>
                    <legend>Update Animal</legend>
                    <label>
                        Name:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, name: e.target.value })
                            }
                            value={animalToUpdate.name}
                        />
                    </label>
                    <label>
                        Sound:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ ...animalToUpdate, sound: e.target.value })
                            }
                            value={animalToUpdate.sound}
                        />
                    </label>
                    <label>
                        Classification:
                        <input 
                            onChange={e =>
                                setAnimalToUpdate({ 
                                    ...animalToUpdate, 
                                    classification: { species: e.target.value }
                                })
                            }
                            value={animalToUpdate.classification.species}
                        />
                    </label>
                    <div>
                        <button type="submit">Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}