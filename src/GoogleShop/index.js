import React from "react";
import StoreSummary from "./StoreSummary";
import Items from "./Items";

class GoogleShop extends React.Component {
  constructor(props) {
    super(props);
    this.summaryCallback = this.summaryCallback.bind(this);
    this.itemsCallback = this.itemsCallback.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.state = { stores: null };
  }

  summaryCallback(stores) {
    this.setState({ stores, backgroundUpdate: false });
  }

  itemsCallback(items) {
    this.setState({ items });
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
          <Items
            filter={this.state.filter}
            clearFilter={() => this.setFilter(null)}
            items={this.state.items}
          />}
        {this.state.backgroundUpdate && !this.state.filter && 
          <div style={{ fontSize: ".8em" }}>...refreshing data</div>}
      </div>
    );
  }
}

export default GoogleShop;
