import React from "react";
import { useState } from "react";
// New API Library - if haven't installed, parcel will fetch it for us
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  //this is a Hook with a default state/first state
  const [animal, setAnimal] = useState("Choose");
  const [breed, setBreed] = useState("Choose");
  const [breeds, setBreeds] = useState([]);

  return (
    // We use className instead of class because class is reserved in JavaScript. Cannot read class as an attribute.
    <div className="search-params">
      <h1>{location}</h1>
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
          >
            <option value="">Choose</option>
            {/* Implicit return  */}
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
            disabled={breeds.length === 0}
          >
            <option value="">Choose</option>
            {/* Implicit return  */}
            {breeds.map((breedString) => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
