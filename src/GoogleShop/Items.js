import React, { PropTypes } from "react";
import LazyLoad from 'react-lazyload';
import Item from "./Item";


const Items = ({
  filter,
  clearFilter,
  items,
  imageSelection,
  setProductFilter,
  reload,
  loadItemDetail
}) => (
  <div>

    <div style={{ paddingBottom: "1em" }}>
      <strong>{filter.vendor.name} {filter.status}</strong>
      <a onClick={clearFilter} style={{ marginLeft: "1em", cursor: "pointer" }}>
        back
      </a>
    </div>
    <div style={{ paddingBottom: "1em" }}>
      <input
        placeholder="product id"
        type="text"
        className="form-control"
        style={{ width: "20em" }}
        onChange={e => setProductFilter(e.target.value)}
      />
    </div>
    {!items && <div>Loading products...</div>}
    {items &&
      items.map(i => (
        <LazyLoad>
        <Item
          key={i.product_id}
          item={i}
          imageSelection={imageSelection}
          reloadItems={reload}
          loadItemDetail={loadItemDetail}
        /></LazyLoad>
      ))}
  </div>
);

Items.propTypes = {
  filter: PropTypes.object.isRequired,
  clearFilter: PropTypes.func.isRequired,
  items: PropTypes.array,
  imageSelection: PropTypes.func.isRequired,
  reload: PropTypes.func.isRequired,
  setProductFilter: PropTypes.func.isRequired,
  loadItemDetail: PropTypes.func.isRequired,
};

export default Items;
