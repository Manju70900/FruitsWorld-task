import React, { useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import { useStateValue } from '../Apis/StateContext';

const CompareModal = ({ id, price, condition ,color,compare }) => {
  
  let [iscolor,setColor]=useState(false)
  let [isPrice,setPrice]=useState(false)
  let [isCondition, setCondition] = useState(false);


  let handleAppy = () => {
    let compareList = [];
    if(iscolor) compareList.push("color")
    if(isPrice) compareList.push("price")
    if (isCondition) compareList.push("condition")
    compare(compareList)
    }
        
    

  return (
    <div className="moda">
      <h4>compare based on </h4>
      <div>
        <form>
          <input
            type="checkbox"
            onChange={e => setPrice(e.target.checked)}
            checked={isPrice}
          />
          price <br />
          <input
            type="checkbox"
            onChange={e => setCondition(e.target.checked)}
            checked={isCondition}
          />
          condition <br />
          <input
            type="checkbox"
            onChange={e => setColor(e.target.checked)}
            checked={iscolor}
          />
          color
        </form>
        <button type="button" class="btn btn-outline-success" onClick={handleAppy}>
          Apply
        </button>
      </div>
    </div>
  );
}

export default CompareModal