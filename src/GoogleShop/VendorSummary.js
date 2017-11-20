import React, {PropTypes} from 'react'

const VendorSummary = ({vendor, setFilter}) => (
  <div className="row" >
    <div 
      className="col-xs-3"
       
      onClick={() => setFilter({vendor:vendor.name, status:''})} 
    >
    <span style={{cursor: 'pointer'}}> {vendor.name}</span> </div>

    <div
      className="col-xs-3" 
      style={{color: 'green', cursor: 'pointer'}} 
      onClick={() => setFilter({vendor:vendor.name, status:'shopping'})} 
    ><span style={{cursor: 'pointer'}}> {vendor.shopping} </span> </div>

    <div 
      className="col-xs-3" 
      style={{color: 'red', cursor: 'pointer'}}
      onClick={() => setFilter({vendor:vendor.name, status:'invalid'})} 
    ><span style={{cursor: 'pointer'}}> {vendor.invalid}</span></div>

    <div 
      className="col-xs-3" 
      style={{color: 'red', cursor: 'pointer'}}
      onClick={() => setFilter({vendor:vendor.name, status:'unshopped'})} 
    ><span style={{cursor: 'pointer'}}> {vendor.unshopped}</span></div>
  </div>
)

VendorSummary.propTypes = {
  vendor: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default VendorSummary;
