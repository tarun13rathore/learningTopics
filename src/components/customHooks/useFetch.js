import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFun = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Http Error");
        }

        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(`Error ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchFun();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
