import React from "react";
import StoreSummary from "./StoreSummary";
import Items from "./Items";

class GoogleShop extends React.Component {
  constructor(props) {
    super(props);
    this.summaryCallback = this.summaryCallback.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.state = { summary: [] };
  }

  summaryCallback(summary) {
    this.setState({ summary });
  }

  componentDidMount() {
    GetGoogleSummary(this.summaryCallback);
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  render() {
    return (
      <div className="container">
        {!this.state.filter &&
          this.state.summary.map(s => (
            <StoreSummary key={s.name} store={s} setFilter={this.setFilter} />
          ))}
        {this.state.filter &&
          <Items
            filter={this.state.filter}
            clearFilter={() => this.setFilter(null)}
          />}
      </div>
    );
  }
}

export default GoogleShop;
