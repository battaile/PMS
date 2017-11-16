import React, { PropTypes } from "react";

const VendorDropdown = ({ vendors, setVendor }) => (
  <select className="formControl" onChange={setVendor} style={{ width: "13em" }}>
    <option>--</option>
    {vendors &&
      vendors.map(v => (
        <option key={v.vendor_name_normalized} value={v.vendor_name_normalized}>
          {v.vendor_name} 
        </option>
      ))}
  </select>
);

const StoreDropdown = ({ stores, setStore }) => (
  <select className="formControl" onChange={setStore} style={{ width: "13em" }}>
    <option>--</option>
    {stores &&
      stores.map(s => (
        <option key={s.id} value={s.id}>
          {s.store_name} 
        </option>
      ))}
  </select>
);

const GoogleShopPanel = ({
  vendors,
  stores,
  items,
  setVendor,
  setStore,
}) => (
  <div className="container" style={{ width: "50%" }}>
    <div className="panel panel-default">
      <div className="panel-heading">Currently Listed</div>
      <div className="panel-body">
        <div className="row">
          <div className="col-md-5">
            <strong>Select a Vendor</strong><br />
            {
              <VendorDropdown
                vendors={vendors}
                setVendor={setVendor}
              />
            }
          </div>
          <div className="col-md-2" style={{ paddingTop: ".5em" }}>
            <strong>OR</strong>
          </div>
          <div className="col-md-5">
            <strong>Select a Site</strong><br />
            {
              <StoreDropdown
                stores={stores}
                setStore={setStore}
              />
            }
          </div>
        </div>
        { items &&
          <div>
            <h4>Listed Products</h4>
            { items.map(i => <p>{i.Name}</p>) }
          </div>
        }     
      </div>
    </div>
  </div>
);

VendorDropdown.propTypes = {
  vendors: PropTypes.array,
  setVendor: PropTypes.func.isRequired
};

StoreDropdown.propTypes = {
  stores: PropTypes.array,
  setStore: PropTypes.func.isRequired
};

GoogleShopPanel.propTypes = {
  vendors: PropTypes.array,
  stores: PropTypes.array,
  items: PropTypes.array,
  setVendor: PropTypes.func.isRequired,
  setStore: PropTypes.func.isRequired
};
export default GoogleShopPanel;
