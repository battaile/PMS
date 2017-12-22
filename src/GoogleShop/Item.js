import React, { PropTypes } from "react";

const Item = ({ item, imageSelection, reloadItems }) => {
  const update = UpdateGoogleItem.bind(
    null,
    {
      vendor_id: item.vendor_id,
      store_id: item.store_id
    },
    item.product_id,
    reloadItems
  );

  return (
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
              onBlur={e => update("title", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              id="description"
              type="text"
              defaultValue={item.description}
              style={{ width: "45em" }}
              onBlur={e => update("description", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isValid">Valid?</label>
            <input
              id="isValid"
              type="checkbox"
              className="form-control"
              style={{ width: "2em" }}
              defaultChecked={item.is_valid}
              onChange={e => update("is_valid", e.target.checked)}
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
              onChange={e => update("is_shopped", e.target.checked)}
            />
          </div>
        </div>
        <div className="col-xs-4">
          {!item.image_link && "Select Image"}
          {!!item.image_link &&
            <img
              src={item.image_link}
              alt="product image"
              onClick={() => imageSelection(item)}
              style={{ height: "20em", width: "20em", cursor: "pointer" }}
            />}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object.isRequired,
  imageSelection: PropTypes.func.isRequired,
  reloadItems: PropTypes.func.isRequired
};
export default Item;
