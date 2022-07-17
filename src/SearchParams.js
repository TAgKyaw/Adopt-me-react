import React from "react";

const SearchParams = () => {
  const location = "Seattle, WA";

  return (
    // We use className instead of class because class is reserved in JavaScript. Cannot read class as an attribute.
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
