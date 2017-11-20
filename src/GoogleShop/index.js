import React from "react";
import StoreSummary from './StoreSummary';

class GoogleShop extends React.Component {
  constructor(props) {
    super(props)
    this.summaryCallback = this.summaryCallback.bind(this)
    this.state = { summary: []}
  }

  summaryCallback(summary) {
    this.setState({summary})
  }

  componentDidMount() {
    GetGoogleSummary(this.summaryCallback)
  }

  render() {
    return (
      <div style={{width: '50%', textAlign:'center'}}>
        {this.state.summary.map(s => <StoreSummary store={s} /> )}
      </div>
    );
  }
}

export default GoogleShop;
