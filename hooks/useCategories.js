import { useState, useEffect } from 'react';

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  return categories;
}
