import { useState, useEffect } from 'react';

export default function useSources() {
  const [sources, setSources] = useState([]);

  useEffect(() => {
    fetch('/api/javascript')
      .then((res) => res.json())
      .then(setSources);
  }, []);

  return sources;
}
