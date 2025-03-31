import { useState } from "react";

export default function SearchForm({ onSubmit, defaultValue = "" }) {
  const [query, setQuery] = useState(defaultValue);

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited:", query);

    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
