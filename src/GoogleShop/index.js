import React from "react";
// import Loadable from "react-loading-overlay";
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
    this.setState({ stores });
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
      return;
    }

    GetGoogleItems(filter, this.itemsCallback);
  }

  render() {
    return (
      // <Loadable active={!this.state.stores} spinner text="Loading summary...">
      (
        <div className="container">
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
        </div>
      )
      // </Loadable>
    );
  }
}

export default GoogleShop;
