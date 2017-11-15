import React from 'react'
import GoogleShopPanel from './GoogleShopPanel'
import Loadable from 'react-loading-overlay'

class GoogleShop extends React.Component {
  constructor(){
    super()
    this.state = { 
      vendors: null
    }
  }

  componentDidMount(){
    GetVendorList((vendors) => this.setState({vendors}))
  }

  render() {
    const loading = !this.vendors;
    const spinnerText = 'Loading vendors...';

    return  (
      <Loadable active={loading} spinner text={spinnerText}>
        <GoogleShopPanel vendors={this.state.vendors} />
      </Loadable>
    )
  }
}

export default GoogleShop
