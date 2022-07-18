import React from "react";
import { useState, useEffect } from "react";
// New API Library - if haven't installed, parcel will fetch it for us
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  //this is a Hook with a default state/first state
  //   const [animal, setAnimal] = useState("Choose");
  //   const [breed, setBreed] = useState("Choose");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("breed", "", breeds);

  // useEffect runs only after the first render and maybe also run when things change according to dependencies.
  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error);
    setBreeds([]);
    setBreed(""); // not declared so commented out

    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedString = apiBreeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed, setBreeds]); //the last array are the dependencies that this useEffect refers to; this will run when they change
  //to run Effect only once, put an empty array for useEffect dependencies, noly very recommended

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
        <BreedDropdown />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
