import React, {PropTypes} from 'react'

const VendorSummary = ({vendor}) => (
  <div className="row" >
    <div className="col-xs-3">{vendor.name}</div>
    <div className="col-xs-3">{vendor.shopping}</div>
    <div className="col-xs-3">{vendor.invalid}</div>
    <div className="col-xs-3">{vendor.unshopped}</div>
  </div>
)

VendorSummary.propTypes = {
  vendor: PropTypes.object.isRequired
}

export default VendorSummary;
