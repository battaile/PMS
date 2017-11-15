import React from 'react'

const GoogleShop = () => (
  <div className="container" style={{width:'50%'}}>
    <div className="panel panel-default">
      <div className="panel-heading">Currently Listed</div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-5">
            <strong>Select a Vendor</strong><br/>
            <select className="formControl" style={{width:'13em'}}>
              <option>--</option>
            </select>
          </div>
          <div className="col-sm-2" style={{ paddingTop:'.5em' }}><strong>OR</strong></div>
          <div className="col-sm-5">
            <strong>Select a Site</strong><br/>
            <select className="formControl" style={{width:'13em'}}>
              <option>--</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GoogleShop;
