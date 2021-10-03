import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function Quotes3() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(async () => {
    const result = await axios(
      'https://api.chucknorris.io/jokes/random?category=dev',
    );
 
    setData(result.data);
  });
 
  return (
       <div>
   
   {data.hits.value}
        </div>
  );
}
 
export default Quotes3;