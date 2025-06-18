import React from "react";
import useFetch from "./UseFetch";
import "./FetchData.css"

const FetchData = () => {
  const [data] = useFetch("https://api.npoint.io/9045c260b1565daa9e15");
  // const [data] = useFetch("https://api.npoint.io/4459a9a10e43812e1152");

  if (data) console.log(data);
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data &&
          data.map((veg) => {
            return (
              <li key={veg.name}>
                <h3>{veg.name}</h3>
                {veg.importance && <p>
                  <strong>Importance: </strong>
                  {veg.importance}
                </p>}
                <p>
                  <strong>Benefits: </strong>
                  {veg.benefits}
                </p>
                <p>
                  <strong>Time to eat: </strong>
                  {veg.best_time_to_intake}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FetchData;
