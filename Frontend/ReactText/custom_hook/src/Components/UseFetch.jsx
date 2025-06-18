import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return [data];
};

export default UseFetch;
