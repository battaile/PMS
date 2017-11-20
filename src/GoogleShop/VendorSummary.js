import React, {PropTypes} from 'react'

const VendorSummary = ({vendor, setFilter}) => (
  <div className="row" >
    <div className="col-xs-3">{vendor.name}</div>

    <div
      className="col-xs-3" 
      style={{color: 'green', cursor: 'pointer'}} 
      onClick={() => setFilter({vendor:vendor.name, status:'shopping'})} 
    >{vendor.shopping}</div>

    <div 
      className="col-xs-3" 
      style={{color: 'red'}}
    >{vendor.invalid}</div>

    <div 
      className="col-xs-3" 
      style={{color: 'red'}}
    >{vendor.unshopped}</div>
  </div>
)

VendorSummary.propTypes = {
  vendor: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default VendorSummary;
