import React, { useState } from "react"
import fruits from "../Data/data"

function FruitDropDown() {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFruit, setEditedFruit] = useState('');

  const handleSelect = (event) => {
    setSelectedFruit(event.target.value);
    setIsEditing(false); // Reset editing state when a new fruit is selected
  };

  const handleDelete = () => {
    setSelectedFruit(null);
    setIsEditing(false); // Reset editing state when fruit is deleted
  };

  const handleEdit = () => {
    setEditedFruit(selectedFruit);
    setIsEditing(true);
  };

  const handleSave = () => {
    setSelectedFruit(editedFruit);
    setIsEditing(false);
  };

  return (
    <>
       <h1>Select a Fruit</h1>
      <select onChange={handleSelect}>
        <option value="">--Select a fruit--</option>
        {fruits.map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit}
          </option>
        ))}
      </select>
      {selectedFruit && !isEditing && (
        <div>
          <p>Selected Fruit: {selectedFruit}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      {isEditing && (
        <div>
          <input
            type="text"
            value={editedFruit}
            onChange={(e) => setEditedFruit(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </>
  )
}

export default FruitDropDown
