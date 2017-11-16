import React from "react";
import GoogleShopPanel from "./GoogleShopPanel";
import Loadable from "react-loading-overlay";

class GoogleShop extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.setVendor = this.setVendor.bind(this);
    this.setStore = this.setStore.bind(this);
    this.searchCallback = this.searchCallback.bind(this);
  }

  componentDidMount() {
    GetVendorList(vendors => this.setState({ vendors }));
    GetStoreLookups(stores => this.setState({ stores }));
  }

  searchCallback(items) {
    this.setState({items})
  }

  setVendor(e) {
    if (!e.target.value || e.target.value === '--'){
      return;
    }
    GetGoogleShopItems({vendorId: e.target.value}, this.searchCallback);
  }

  setStore(e) {
    if (!e.target.value || e.target.value === '--'){
      return;
    }
    GetGoogleShopItems({storeId: e.target.value}, this.searchCallback);
  }  

  render() {
    const loading = !this.state.vendors || !this.state.stores;

    let spinnerText;
    if (!this.state.vendors) {
      spinnerText = "Loading vendors...";
    } else if (!this.state.stores) {
      spinnerText = "Loading stores...";
    }

    return (
      <Loadable active={loading} spinner text={spinnerText}>
        <GoogleShopPanel vendors={this.state.vendors} stores={this.state.stores} items={this.state.items} setVendor={this.setVendor} setStore={this.setStore} />
      </Loadable>
    );
  }
}

export default GoogleShop;
