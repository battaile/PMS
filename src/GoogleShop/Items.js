import React, {PropTypes} from 'react';

const Items = ({filter}) => {
  <div> {filter.vendor}: {filter.status} </div>
}

Items.propTypes = {
  filter: PropTypes.object.isRequired
}
