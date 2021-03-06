import React, { PropTypes } from "react";

const numberContainerStyle = { textAlign: "right" };

const VendorSummary = ({ vendor, setFilter }) => (
  <div className="row" key={vendor.vendor_id + "-" + vendor.store_id}>
    <div className="col-xs-3">
      {vendor.name}
    </div>

    <div className="col-xs-3" style={numberContainerStyle}>
      <span
        style={{ color: "green", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "shopping" })}
      >
        {vendor.shopping.toLocaleString()}
      </span>
    </div>

    <div className="col-xs-3" style={numberContainerStyle}>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "invalid" })}
      >
        {vendor.invalid.toLocaleString()}
      </span>
    </div>

    <div className="col-xs-3" style={numberContainerStyle}>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "unshopped" })}
      >
        {vendor.unshopped.toLocaleString()}
      </span>
    </div>

  </div>
);

VendorSummary.propTypes = {
  vendor: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default VendorSummary;
