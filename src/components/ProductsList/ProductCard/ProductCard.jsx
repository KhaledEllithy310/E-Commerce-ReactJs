/* eslint-disable react/prop-types */

import "./ProductCard.css";
import { NavLink } from "react-router-dom";
const ProductCard = (props) => {
  let { product } = props;
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.title.slice(0, 30)}</td>
      <td>${product.price}</td>
      <td className="text-center">
        <button className="btn btn-primary m-2">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger m-2">
          <i className="bi bi-trash"></i>
        </button>
        <NavLink
          className="btn btn-warning m-2"
          to={`/products/ ${product.id}`}
        >
          <i className="bi bi-eye-fill"></i>
        </NavLink>
      </td>
    </tr>
  );
};

export default ProductCard;
