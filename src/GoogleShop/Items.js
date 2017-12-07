import React, { PropTypes } from "react";
import Item from "./Item";


const Items = ({ filter, clearFilter, items }) => (
  <div>
    <div style={{paddingBottom: '1em'}}>
      <strong>{filter.vendor.name} {filter.status}</strong>
      <a onClick={clearFilter} style={{ marginLeft: "1em", cursor: "pointer" }}>
        back
      </a>
    </div>
    {items &&
      items.map(i => <Item item={i} vendor={filter.vendor} key={i.product_id}/> )}
  </div>
);

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Items;
