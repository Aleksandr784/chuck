import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Quotes3({categoryName}) {
    
  const [data, setData] = useState("");
  useEffect( () => {
 
      const fetchData= async () => {
           const result = await axios(
      `https://api.chucknorris.io/jokes/random?category=dev`,
    ); 
 
   return result;
      }
     const frases = fetchData();
     frases.then((result)=> {
         setData(result.data.value)
     console.log(data)
     }
     );
  
    
  }); 
  return (
     <div>
   
  {data}
     </div>  
  );
}
 
export default Quotes3;