import React, { PropTypes } from "react";
import Loading from "../Controls/loading";
import Item from "./Item";


const Items = ({ filter, clearFilter, items }) => (
  <div>
    <div>
      <strong>{filter.vendor.name} {filter.status}</strong>
      <a onClick={clearFilter} style={{ marginLeft: "1em", cursor: "pointer" }}>
        back
      </a>
    </div>
    {items &&
      items.map(i => <Item item={i} key={i.product_id}/> )}
    {!items && <Loading />}
  </div>
);

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default Items;
