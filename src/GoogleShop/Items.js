import React, {PropTypes} from 'react';

const Items = ({filter}) => (
  <div> {filter.vendor.name} ({filter.vendor.id}-{filter.vendor.store_id}) : {filter.status} </div>
)

Items.propTypes = {
  filter: PropTypes.object.isRequired
}

export default Items;
