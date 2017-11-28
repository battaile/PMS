import React, { PropTypes } from "react";
import Loading from "../Controls/loading";

const Items = ({ filter, clearFilter, items }) => (
  <div>
    <div>
      <strong>{filter.vendor.name} {filter.status}</strong>
      <a
        onClick={clearFilter}
        style={{ position: "absolute", right: 0, cursor: "pointer" }}
      >
        back
      </a>
    </div>
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
          <th>Product Type</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map(i => (
            <tr>
              <td>{i.product_id}</td>
              <td>{i.title}</td>
              <td>{i.description}</td>
              <td>{i.image_link}</td>
              <td>{i.product_type}</td>
            </tr>
          ))}
      </tbody>
    </table>
    {!items && <Loading />}
  </div>
);

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Items;
