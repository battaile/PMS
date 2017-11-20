import React, {PropTypes} from 'react'

const VendorSummaryRow = ({vendor}) => (
  <tr>
    <td>{vendor.shopping}</td>
    <td>{vendor.invalid}</td>
    <td>{vendor.unshopped}</td>
  </tr>
)

VendorSummaryRow.propTypes = {
  vendor: PropTypes.object.isRequired
}

export default VendorSummaryRow;
