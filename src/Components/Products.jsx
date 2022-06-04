import React, { Fragment, useEffect, useState } from 'react'
import { json } from "../be/data";
import Compare from "./Compare"
// import axios from "axios"
import { useStateValue } from "../Apis/StateContext";
import CompareModal from './CompareModal';



const Products = ({id, price, description, image, name, condition, color}

) => {
  let [use, setuse] = useState(json);
  let [touch, settouch] = useState(false);
  let [click, setClick] = useState("");
  let [make, made] = useState();
  
const [{ basket }, dispatch] = useStateValue();

   const compare = (list) => {
     // dispatch the item into the data layer
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
         id: id,
         condition:condition,
         image: image,
         price: price,
         color: color,
         list
         
       },
     });
     settouch(!touch)
   };
  
  let handleclick = (e) => {
    
    settouch(!touch)
   
  }
    
  return (
    <>
      <div className="productcontainer">
        <div key={id} className="product">
          <div class="col mb-4">
            <div class="card">
              <img src={image} class="card-img-top" alt="product" />
              <div
                class="card-body"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h5 class="card-title">{name}</h5>
                <p
                  class="card-text"
                  style={{ fontWeight: "bold", color: "green" }}
                >
                  Price: {price}
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ marginLeft: "20px" }}>{description}</p>
                <p style={{ marginRight: "20px" }}>{color}</p>
              </div>
              <div className="hover">
                <button onClick={handleclick}>Compare</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {touch === true ? (
        <div>
          {" "}
          <CompareModal compare={compare}  />{" "}
          
        </div>
      ) : null}
    </>
  );
}

export default Products