import React, { PropTypes } from "react";

const VendorSummary = ({ vendor, setFilter }) => (
  <div className="row" key={vendor.vendor_id + "-" + vendor.store_id}>
    <div
      className="col-xs-3"
      onClick={() => setFilter({ vendor: vendor, status: "" })}
    >
      <span style={{ cursor: "pointer" }}> {vendor.name}</span>{" "}
    </div>

    <div className="col-xs-3">
      <span
        style={{ color: "green", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "shopping" })}
      >
        {" "}{vendor.shopping}
      </span>
    </div>

    <div className="col-xs-2">
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "invalid" })}
      >
        {" "}{vendor.invalid}
      </span>
    </div>

    <div className="col-xs-2">
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "unshopped" })}
      >
        {" "}{vendor.unshopped}
      </span>
    </div>

    <div className="col-xs-2">
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => setFilter({ vendor: vendor, status: "needs_setup" })}
      >
        {" "}{vendor.needs_setup}
      </span>
    </div>    
  </div>
);

VendorSummary.propTypes = {
  vendor: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default VendorSummary;
