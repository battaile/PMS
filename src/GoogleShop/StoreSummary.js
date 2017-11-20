import React, {PropTypes} from 'react'
import VendorSummary from './VendorSummary'

const StoreSummary = ({store}) => (
  <div style={{paddingBottom:'5em', width:'50%'}}>
    <div className = "row">
        <div className="col-xs-3">{store.name}</div>
        <div className="col-xs-3">Shopping</div>
        <div className="col-xs-3">Invalid</div>
        <div className="col-xs-3">Not Shopping</div>
    </div>
    { store.vendors.map(v => <VendorSummary vendor={v} /> ) }
  </div>  
)

StoreSummary.propTypes = {
  store: PropTypes.object.isRequired
}
export default StoreSummary;
