import React from 'react'
import { createPortal } from 'react-dom';

const Compare = ({ name, colors, price, condition }) => {
    
    return createPortal(
      <div className='tablecont'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Colors</th>
              <th>Price</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{colors}</td>
              <td>{price}</td>
              <td>{condition}</td>
            </tr>
          </tbody>
        </table>
      </div>,document.getElementById("root1")
    );
}

export default Compare