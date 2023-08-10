/* eslint-disable react/prop-types */

import "./ProductItem.css";
const ProductItem = (props) => {
  let { user } = props;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="text-center">
        <button className="btn btn-primary m-2">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger m-2">
          <i className="bi bi-trash"></i>
        </button>
        <button className="btn btn-warning m-2">
          <i className="bi bi-eye-fill"></i>
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
