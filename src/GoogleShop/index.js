import React from "react";
import GoogleShopPanel from "./GoogleShopPanel";
import Loadable from "react-loading-overlay";

class GoogleShop extends React.Component {
  constructor() {
    super();
    this.state = {
      vendors: null
    };
  }

  componentDidMount() {
    GetVendorList(vendors => this.setState({ vendors }));
    GetStoreLookups(stores => this.setState({ stores }));
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
        <GoogleShopPanel vendors={this.state.vendors} stores={this.state.stores} />
      </Loadable>
    );
  }
}

export default GoogleShop;
