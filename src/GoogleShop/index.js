import React from "react";
import StoreSummary from './StoreSummary';

class GoogleShop extends React.Component {
  constructor(props) {
    super(props)
    this.summaryCallback = this.summaryCallback.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.state = { summary: []}
  }

  summaryCallback(summary) {
    this.setState({summary})
  }

  componentDidMount() {
    GetGoogleSummary(this.summaryCallback)
  }

  setFilter(filter) {
    this.setState({filter})
  }

  render() {
    return (
      <div className="container">
        {!this.state.filter && this.state.summary.map(s => <StoreSummary store={s} setFilter={this.setFilter} /> )}
        {this.state.filter && <span>filter set: {this.state.filter.vendor} {this.state.filter.status} </span> }
      </div>
    );
  }
}

export default GoogleShop;
