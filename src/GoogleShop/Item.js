import React, { PropTypes } from "react";

const Item = ({ item }) => (
  <div
    className="panel panel-default"
    style={{ padding: "1em" }}
    key={item.product_id}
  >
    <div className="row">
      <div className="col-xs-8">
        <div className="form-group">
          <span> <strong><a href="#"> {item.product_id}</a></strong> </span>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-control"
            id="title"
            type="text"
            defaultValue={item.title}
            style={{ width: "25em" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            id="description"
            type="text"
            defaultValue={item.description}
            style={{ width: "30em" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productType">Product Type</label>
          <select className="form-control" id="productType">
            <option>{item.product_type}</option>
            {/* need to load available product types */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="isValid">Valid?</label>
          <input
            id="isValid"
            type="checkbox"
            className="form-control"
            style={{ width: "2em" }}
            defaultChecked={item.is_valid}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isShopped">Shopping?</label>
          <input
            id="isShopped"
            type="checkbox"
            className="form-control"
            style={{ width: "2em" }}
            defaultChecked={item.is_shopped}
          />
        </div>
      </div>
      <div className="col-xs-4">
        {!item.image_link && "Select Image"}
        {!!item.image_link &&
          <img
            src={item.image_link}
            alt="product image"
            style={{ height: "20em", width: "20em" }}
          />}
      </div>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object.isRequired
}
export default Item;