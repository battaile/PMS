import React, {PropTypes} from 'react'
import VendorSummary from './VendorSummary'

const StoreSummary = ({store}) => (
  <table>
    <thead>
      <tr> 
        <th>{store.name}</th>
        <th>Shopping</th>
        <th>Invalid</th>
        <th>Not Shopping</th>
      </tr>
      { store.vendors.map(v => <VendorSummary vendor={v} /> ) }
    </thead>
  </table>
)

StoreSummary.propTypes = {
  store: PropTypes.object.isRequired
}
export default StoreSummary;
