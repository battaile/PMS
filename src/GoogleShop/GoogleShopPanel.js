import React, {PropTypes} from 'react'

const VendorDropdown = ({vendors}) => (
  <select className="formControl" style={{width:'13em'}}>
    <option>--</option>
    {vendors && vendors.map((v)=> <option key={v.vendor_name} value={v.id}>{v.vendor_name}</option> )}
  </select>
)
VendorDropdown.propTypes = {
  vendors: PropTypes.array
}

const StoreDropdown = ({stores}) => (
  <select className="formControl" style={{width:'13em'}}>
    <option>--</option>
    {stores && stores.map((s)=> <option key={s.id} value={s.id}>{s.store_name}</option> )}
  </select>
)
StoreDropdown.propTypes = {
  stores: PropTypes.array
}

const GoogleShopPanel = ({vendors, stores}) => (
  <div className="container" style={{width:'50%'}}>
  <div className="panel panel-default">
    <div className="panel-heading">Currently Listed</div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-5">
          <strong>Select a Vendor</strong><br/>
          { <VendorDropdown vendors={vendors} /> }          
        </div>
        <div className="col-md-2" style={{ paddingTop:'.5em' }}><strong>OR</strong></div>
        <div className="col-md-5">
          <strong>Select a Site</strong><br/>
          { <StoreDropdown stores={stores} /> }
        </div>
      </div>
    </div>
  </div>
</div>
)

GoogleShopPanel.propTypes = {
  vendors: PropTypes.array,
  stores: PropTypes.array
}
export default GoogleShopPanel
