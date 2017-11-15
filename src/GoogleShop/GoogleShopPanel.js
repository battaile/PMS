import React, {PropTypes} from 'react'

const VendorDropdown = ({vendors}) => (
  <select className="formControl" style={{width:'13em'}}>
    <option>--</option>
    {vendors && vendors.map((v)=> <option key={v.id} value={v.id}>{v.vendor_name}</option> )}
  </select>
)
VendorDropdown.propTypes = {
  vendors: PropTypes.array
}

const GoogleShopPanel = ({vendors}) => (
  <div className="container" style={{width:'50%'}}>
  <div className="panel panel-default">
    <div className="panel-heading">Currently Listed</div>
    <div className="panel-body">
      <div className="row">
        <div className="col-sm-5">
          <strong>Select a Vendor</strong><br/>
          <VendorDropdown vendors={vendors} />
          
        </div>
        <div className="col-sm-2" style={{ paddingTop:'.5em' }}><strong>OR</strong></div>
        <div className="col-sm-5">
          <strong>Select a Site</strong><br/>
          <select className="formControl" style={{width:'13em'}}>
            <option>--</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
)

GoogleShopPanel.propTypes = {
  vendors: PropTypes.array
}
export default GoogleShopPanel
