import React, { PropTypes } from "react";
import Loading from "../Controls/loading";

const Items = ({ filter, clearFilter, items }) => (
  <div>
    <div>
      <strong>{filter.vendor.name} {filter.status}</strong>
      <a onClick={clearFilter} style={{ marginLeft: "1em", cursor: "pointer" }}>
        back
      </a>
    </div>
    <table style={{ width: "100%", fontSize: ".8em" }}>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Title</th>
          <th>Description<br />Product Type</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {items &&
          items.map(i => (
            <tr
              key={i.product_id}
              style={{
                borderStyle: "solid",
                borderColor: "#112300",
                borderWidth: ".1em"
              }}
            >
              <td style={{ columnWidth: "15em" }}>
                <span style={{ marginLeft: ".5em" }}>{i.product_id}</span>
              </td>
              <td style={{ columnWidth: "35em" }}>
                <input
                  type="text"
                  defaultValue={i.title}
                  style={{ width: "95%" }}
                />
              </td>
              <td style={{ columnWidth: "50em" }}>
                <input
                  type="text"
                  defaultValue={i.description}
                  style={{ width: "85%", marginTop: ".5em" }}
                />
                <br />
                <select style={{ margin: ".5em 0 .5em 0" }}>
                  <option>{i.product_type}</option>
                  {/* need to actually load product type */}
                </select>
              </td>
              <td style={{ columnWidth: "30em", textAlign: "center" }}>
                {!i.image_link && "Select Image"}
                {!!i.image_link &&
                  <img
                    src={i.image_link}
                    alt="product image"
                    style={{ height: "20em", width: "20em" }}
                  />}
              </td>
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
