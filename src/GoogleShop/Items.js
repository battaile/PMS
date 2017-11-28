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
    {items && items.map( i => (
      <div className="panel panel-default" style={{padding: '1em'}} >
        <div className="row" >
          <div className="col-xs-8">
          <div className="form-group">
            <span> <strong><a href="#"> {i.product_id}</a></strong> </span>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input className="form-control" id="title"
                    type="text"
                    defaultValue={i.title}
                    style={{width:'25em'}}
                  />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input className="form-control" id="description"
                    type="text"
                    defaultValue={i.description}
                    style={{width:'30em'}}
                  />
            </div>
            <div className="form-group">
              <label htmlFor="productType">Product Type</label>
              <select className="form-control" id="productType">
                    <option>{i.product_type}</option>
                    {/* need to load available product types */}
                  </select>
            </div>
          </div>
          <div className="col-xs-4">
            {!i.image_link && "Select Image"}
            {!!i.image_link &&
              <img
                src={i.image_link}
                alt="product image"
                style={{ height: "20em", width: "20em" }}
              />}        
          </div>
        </div>
      </div>
    ))}
    {!items && <Loading />}
  </div>
);

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Items;
