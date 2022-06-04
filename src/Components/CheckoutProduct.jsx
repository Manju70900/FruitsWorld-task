import React from "react";
import CompareModal from "./CompareModal";

const CheckoutProduct = ({ id, price, color, condition, list }) => {
  return (
    <div>
      <table class="table" style={{ textAlign: "center" }}>
        <tbody>
          <tr>
            {list.includes("price") && (
              <td style={{ color: "green", fontWeight: "bold" }}>
                Price:{price}
              </td>
            )}
            {list.includes("color") && (
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Color:{" "}
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "10px",
                    background: color,
                  }}
                ></div>
              </td>
            )}
            {list.includes("condition") &&
            <td
              style={{
                background: condition === condition ? "green" : "green",
                color: "white",
              }}
            >
              Condition:{condition}
            </td>
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutProduct;
