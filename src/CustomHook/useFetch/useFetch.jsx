import { useEffect, useState } from "react";

export  const useFetch = (url) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, []);

  return [isError, isLoading, data];
};
