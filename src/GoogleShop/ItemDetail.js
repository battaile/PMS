import React, {PropTypes} from "react";

const ItemDetail = ({ itemDetail }) => (
  <div
    className="panel panel-default"
    style={{ padding: "1em" }}
    key={itemDetail.product_id}
  >
    <h3>{itemDetail.product_id}</h3>
    <div className="row">
      <div className="col-xs-3">  
        URL
      </div>
      <div className="col-xs-3">
        <a href={itemDetail.link}>{itemDetail.link}</a>
      </div>
    </div>
  </div>
);

ItemDetail.propTypes = {
  itemDetail: PropTypes.object.isRequired
};

export default ItemDetail;
