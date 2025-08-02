import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
function App() {

  const[data, setData] = React.useState(null);
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get("http://backend-service:5000/");
        setData(response.data.message); // fix here: response.data.message, not response.message
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <>

      <h2>{data ? data : "Loading..."}</h2>
    </>
  );


  
}
      
export default App;