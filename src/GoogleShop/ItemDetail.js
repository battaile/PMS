import React, { PropTypes } from "react";

const PriceDisplay = ({ prclevel, price }) => (
  <div className="row">
    <div className="col-xs-2">{prclevel}</div>
    <div className="col-xs-10"><strong>${price.toFixed(2)}</strong> </div>
  </div>
);

PriceDisplay.propTypes = {
  prclevel: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

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
      style={{ padding: "1em", width: "50%" }}
      key={itemDetail.product_id}
    >
      <div className="row">
        <div className="col-xs-2">
          URL
        </div>
        <div className="col-xs-10">
          <a href={itemDetail.link} target="_blank">{itemDetail.link}</a>
        </div>
      </div>
      <PriceDisplay prclevel="BNET" price={itemDetail.bnet} />
      <PriceDisplay prclevel="LVL1" price={itemDetail.lvl1} />
      <PriceDisplay prclevel="LVL2" price={itemDetail.lvl2} />
      <PriceDisplay prclevel="LVL3" price={itemDetail.lvl3} />
    </div>
  </div>
);

ItemDetail.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  navigateBack: PropTypes.func.isRequired
};

export default ItemDetail;
