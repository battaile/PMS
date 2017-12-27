import React, { PropTypes } from "react";

const ItemDetail = ({ itemDetail, navigateBack }) => (
  <div>
    <div style={{ paddingBottom: "1em" }}>
      <strong>{itemDetail.product_id}</strong>
      <a
        onClick={navigateBack}
        style={{ marginLeft: "1em", cursor: "pointer" }}
      >
        back
      </a>
    </div>
    <div
      className="panel panel-default"
      style={{ padding: "1em" }}
      key={itemDetail.product_id}
    >
      <div className="row">
        <div className="col-xs-2">
          {" "}
          URL
        </div>
        <div className="col-xs-4">
          <a href={itemDetail.link} target="_blank">{itemDetail.link}</a>
        </div>
      </div>
    </div>
  </div>
);

ItemDetail.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  navigateBack: PropTypes.func.isRequired
};

export default ItemDetail;
