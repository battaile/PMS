import React from "react";
import StoreSummary from "./StoreSummary";
import ItemDetail from "./ItemDetail";
import Items from "./Items";
import ImageSelect from "./ImageSelect";

class GoogleShop extends React.Component {
  constructor(props) {
    super(props);
    this.clearFilter = this.clearFilter.bind(this);
    this.loadImageSelection = this.loadImageSelection.bind(this);
    this.loadItemDetail = this.loadItemDetail.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setImage = this.setImage.bind(this);
    this.setImageLinks = this.setImageLinks.bind(this);
    this.setItems = this.setItems.bind(this);
    this.setSummary = this.setSummary.bind(this);
    this.setProductFilter = this.setProductFilter.bind(this);
    this.unloadImageSelection = this.unloadImageSelection.bind(this);
    this.setItemDetail = this.setItemDetail.bind(this);
    this.state = { stores: null };
  }

  componentDidMount() {
    GetGoogleSummary(this.setSummary);
  }

  clearFilter() {
    this.setFilter(null);
    this.setProductFilter(null);
  }

  loadImageSelection(item) {
    this.setState({ selectedItem: item });
    GetGoogleImageLinks(item.vendor_id, item.store_id, this.setImageLinks);
  }

  loadItemDetail(item) {
    GetGoogleItemDetail(item, this.setItemDetail);
  }

  setFilter(filter) {
    this.setState({ filter, items: null });
    if (!filter) {
      this.setState({ backgroundUpdate: true });
      GetGoogleSummary(this.setSummary);
      return;
    }

    GetGoogleItems(filter, this.setItems);
  }

  setImage(imageLink) {
    this.state.items.find(
      i => i.product_id === this.state.selectedItem.product_id
    ).image_link = imageLink;
    UpdateGoogleItem(
      this.state.filter.vendor,
      this.state.selectedItem.product_id,
      null,
      "image_link",
      imageLink
    );
    this.unloadImageSelection();
  }

  setImageLinks(data) {
    this.setState({ imageLinks: data });
  }

  setItemDetail(data) {
    this.setState({ itemDetail: data });
  }

  setItems(data) {
    this.setState({ items: data });
  }

  setProductFilter(partialProductId) {
    this.setState({ productFilter: partialProductId });
  }

  setSummary(stores) {
    this.setState({ stores, backgroundUpdate: false });
  }

  unloadImageSelection() {
    this.setState({ imageLinks: null, selectedItem: null });
  }

  render() {
    return (
      <div className="container">

        {!this.state.stores &&
          <div>
            Loading stores...
          </div>}

        {!this.state.filter &&
          this.state.stores &&
          this.state.stores.map(s => (
            <StoreSummary key={s.name} store={s} setFilter={this.setFilter} />
          ))}

        {this.state.itemDetail &&
          <ItemDetail itemDetail={this.state.itemDetail} />}

        {this.state.filter &&
          !this.state.imageLinks &&
          !this.state.itemDetail &&
          <Items
            reload={() => GetGoogleItems(this.state.filter, this.setItems)}
            filter={this.state.filter}
            clearFilter={this.clearFilter}
            loadItemDetail={this.loadItemDetail}
            items={
              this.state.items
                ? this.state.items.filter(
                    i =>
                      !this.state.productFilter ||
                      i.product_id.includes(this.state.productFilter)
                  )
                : []
            }
            imageSelection={this.loadImageSelection}
            setProductFilter={this.setProductFilter}
          />}

        {this.state.filter &&
          this.state.imageLinks &&
          <ImageSelect
            imageLinks={this.state.imageLinks}
            setImage={this.setImage}
            clearImageSelect={this.unloadImageSelection}
          />}

        {this.state.backgroundUpdate &&
          !this.state.filter &&
          <div style={{ fontSize: ".8em" }}>...refreshing data</div>}
      </div>
    );
  }
}

export default GoogleShop;
