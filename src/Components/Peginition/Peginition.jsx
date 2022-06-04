import React, { useEffect, useState } from 'react';
import json from "../../be/data"

const Peginition = () => {

    let [item, setitem] = useState([]);
    let [search, setsearch] = useState();

    useEffect(() => {
        let newlist = json.slice(0, 9);
        setitem(newlist);


        
    }, [])
    
    let handlePagination = (e) => {
        let currentPage
    }






    return (
      
           <div>Peginition</div>
  )
}

export default Peginition
