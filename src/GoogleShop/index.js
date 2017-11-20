import React from "react";

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
      <div style={{width: '50%', textAlign:'center'}}>test
        {this.state.summary.map(s => <div><h4> {s.name} </h4></div>)}
      </div>
    );
  }
}

export default GoogleShop;
