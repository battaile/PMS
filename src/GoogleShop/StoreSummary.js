import React, { PropTypes } from "react";
import VendorSummary from "./VendorSummary";

const numbericColumnStyle = { textAlign: "right" };

const StoreSummary = ({ store, setFilter }) => (
  <div style={{ paddingBottom: "2em", width: "50%" }} key={store.name}>

    <div className="row">
      <div className="col-xs-3"><strong>{store.name}</strong></div>
      <div className="col-xs-3" style={numbericColumnStyle}>Shopping</div>
      <div className="col-xs-3" style={numbericColumnStyle}>Invalid</div>
      <div className="col-xs-3" style={numbericColumnStyle}>Not Shopping</div>
    </div>
    {store.vendors.map(v => (
      <VendorSummary
        key={v.vendor_id + "-" + v.store_id}
        vendor={v}
        setFilter={setFilter}
      />
    ))}
  </div>
);

StoreSummary.propTypes = {
  store: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
};
export default StoreSummary;
