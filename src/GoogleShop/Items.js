import React, {PropTypes} from 'react';

const Items = ({filter, clearFilter}) => (
  <div>
    <div>
    <button type="button" className="btn btn-danger" onClick={clearFilter} >Back to Summary </button>
    </div>
    <div>
     {filter.vendor.name} ({filter.vendor.id}-{filter.vendor.store_id}) : {filter.status} 
    </div>
  </div>
)

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired
}

export default Items;
