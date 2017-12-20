import React from "react";
import StoreSummary from "./StoreSummary";
import Items from "./Items";
import ImageSelect from "./ImageSelect";

class GoogleShop extends React.Component {
  constructor(props) {
    super(props);
    this.summaryCallback = this.summaryCallback.bind(this);
    this.itemsCallback = this.itemsCallback.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setImage = this.setImage.bind(this);
    this.imageSelection = this.imageSelection.bind(this);
    this.imageSelectionCallback = this.imageSelectionCallback.bind(this);
    this.clearImageSelection = this.clearImageSelection.bind(this);
    this.state = { stores: null };
  }

  summaryCallback(stores) {
    this.setState({ stores, backgroundUpdate: false });
  }

  itemsCallback(data) {
    this.setState({ items: data });
  }

  componentDidMount() {
    GetGoogleSummary(this.summaryCallback);
  }

  setFilter(filter) {
    this.setState({ filter, items: null });
    if (!filter) {
      this.setState({ backgroundUpdate: true });
      GetGoogleSummary(this.summaryCallback);
      return;
    }

    GetGoogleItems(filter, this.itemsCallback);
  }

  clearImageSelection() {
    this.setState({imageLinks: null, selectedItem: null})
  }

  setImage(imageLink) {
    this.state.items.find(
      i => i.product_id === this.state.selectedItem.product_id
    ).image_link = imageLink;
    UpdateGoogleItem(this.state.filter.vendor, this.state.selectedItem.product_id, 'image_link', imageLink);
    this.clearImageSelection();
  }

  imageSelectionCallback(data) {
    this.setState({ imageLinks: data });
  }

  imageSelection(item) {
    this.setState({ selectedItem: item });
    GetGoogleImageLinks(
      item.vendor_id,
      item.store_id,
      this.imageSelectionCallback
    );
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

        {this.state.filter &&
          !this.state.imageLinks &&
          <Items
            filter={this.state.filter}
            clearFilter={() => this.setFilter(null)}
            items={this.state.items}
            imageSelection={this.imageSelection}
          />}

        {this.state.filter &&
          this.state.imageLinks &&
          <ImageSelect
            imageLinks={this.state.imageLinks}
            setImage={this.setImage}
          />}

        {this.state.backgroundUpdate &&
          !this.state.filter &&
          <div style={{ fontSize: ".8em" }}>...refreshing data</div>}
      </div>
    );
  }
}

export default GoogleShop;
