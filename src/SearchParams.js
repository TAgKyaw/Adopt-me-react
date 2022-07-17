import React from "react";
import { useState } from "react";
// New API Library - if haven't installed, parcel will fetch it for us
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  //this is a Hook with a default state/first state
  //   const [animal, setAnimal] = useState("Choose");
  //   const [breed, setBreed] = useState("Choose");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, breedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <breedDropdown />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
