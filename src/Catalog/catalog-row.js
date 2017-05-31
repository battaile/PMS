﻿import React from 'react';
import StoreLookup from '../Controls/store-lookup';
import NodeHistoryModal from './catalog-node-history';
import CopyModal from './copy-modal';

var CatalogTreeRow = React.createClass({
    getInitialState: function() {
        return {
            isEditMode: false,
            nodeValue: this.props.node.name,
            nodeKey: this.props.node.name_key,
            showHistoryModal: false,
            showCopyModal:false,
            nodeHistoryData: [],
            selectedCatalogType:this.props.node.type_id
        };
    },
    render: function () {

        var disableVar;

        if (!this.props.node.edit_mode || this.props.node.username == localStorage.username)
        {
            disableVar = false;
            if (localStorage.CatalogEditing != 'true'){disableVar = true;}
        } else {
            disableVar = true;
        }


        var disableVis = false;
        if (localStorage.Disable == 'true')
        {
            disableVis = true;
        }

        var lockVis = false;
        if (localStorage.Lock == 'true')
        {
            lockVis = true;
        }

        if (this.state.isEditMode) {
            return (
             <tr>
                <td>
                    <input type="text" className="form-control" id="txtNodeInput" value={this.state.nodeValue} onChange={this.handleInputChange}/>
                </td>
                <td>
                    <input disabled type="text" className="form-control" id="txtNodeKey" value={this.state.nodeKey} onChange={this.handleNodeKeyChange} />
                </td>
                <td>
                  <select className="form-control" value={this.state.selectedCatalogType} style={{width:'150px'}} onChange={this.handleCatalogTypeChange}>
                    {this.createCatalogTypeItems()}
                  </select>
                </td>
                <td>
                  <button onClick={this.handleSaveClick.bind(this, this.props.node, this.props.nodeLevel, this.state.nodeValue, this.state.nodeKey, this.props.node.type_id, this.state.selectedCatalogType)} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-floppy-disk"></i></button>
                  <button style={{marginLeft:'20px'}} onClick={this.handleCancelClick.bind(this, this.props.node, this.props.nodeLevel)} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-remove"></i></button>
                </td>
              {disableVis ? <td>
                <input
                    name="disabled"
                    type="checkbox"
                    defaultChecked={this.props.node.disabled}
                    disabled />
                </td> : null }
              {lockVis ? <td>
                <input
                    name="disabled"
                    type="checkbox"
                    defaultChecked={this.props.node.locked}
                    disabled />
                </td> : null }
            </tr>
           );
    } else {
            return(
            <tr>
            <td><a href="#" onClick={this.handleClick.bind(this, this.props.node.doc_key, this.props.node.name, this.props.nodeLevel) }>{this.props.node.name}</a></td>
            <td><button disabled={disableVar} onClick={this.handleEditClick.bind(this,this.props.node)} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-pencil"></i> Edit</button></td>
            <td><button onClick={this.quickMove} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-copy"></i> Quick Move</button></td>
            <td>{this.props.copyActive ? <button onClick={this.quickPaste} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-copy"></i> Paste</button> : null }</td>
            <td><button onClick={this.showCopyModal} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-copy"></i> Custom Copy</button></td>
            <td>{/*<button disabled onClick={this.showHistoryModal} className="btn btn-sm btn-default"><i className="glyphicon glyphicon-book"></i> History</button>
                {this.state.showHistoryModal ? <NodeHistoryModal docKey={this.props.node.doc_key} catalogId={this.props.node.id} handleHideModal={this.handleHideModal} rollbackComplete={this.rollbackComplete} data={this.state.nodeHistoryData} webSent={this.props.node.web_sent} /> : null}*/}
                {this.state.showCopyModal ? <CopyModal handleHideModal={this.handleHideCopyModal} store={this.props.store} DocKey={this.props.node.doc_key} /> : null }
                </td>
           {disableVis ? <td>
            <input
            name="disabled"
            type="checkbox"
            defaultChecked={this.props.node.disabled}
            onChange={this.handleDisabledChange} />
               {/* <StoreLookup storeLookup={this.props.storeLookup} docKey={this.props.node.doc_key} storeValues={this.props.node.store} storeUpdate={this.storeUpdate} type={'node'} docId={0} /> */}
            </td> : null }
            {lockVis ? <td>
             <input
            name="disabled"
            type="checkbox"
            defaultChecked={this.props.node.locked}
            onChange={this.handleLockedChange} />
            </td> : null }
           </tr>
            );
}
    },
createCatalogTypeItems: function(){
      let items = [];
      items.push(<option value=''></option>);
      for (let i = 0; i < this.props.catalogTypes.length; i++) {
          items.push(<option key={i} value={this.props.catalogTypes[i].id}>{this.props.catalogTypes[i].name}</option>);
        }
        return items;
 },
handleCatalogTypeChange: function(event){
      this.setState({selectedCatalogType: event.target.value});
},
quickMove: function(){
    this.props.quickMove(this.props.node.doc_key);
},
quickPaste: function(){
    var pieces = this.props.copyDocKey.split("/");
    Move(pieces[pieces.length-1],this.props.copyDocKey,this.props.node.doc_key, this.props.store, this.handlePasteCallback);
    nodeValue, originDocKey, destinationDocKey, store_id, callback
},
handlePasteCallback: function(data) {
    this.props.showFeedBack(data);
    this.props.reloadData(node.doc_key, node.name, nodeLevel);
},
handleHideCopyModal: function () {
    this.setState({ showCopyModal: false });
    this.props.reloadData(this.props.node.doc_key, this.props.node.name, this.props.nodeLevel);
},
showCopyModal: function () {
    this.setState({ showCopyModal: true });
},
closeCopy: function () {
    this.props.reloadData(node.doc_key, node.name, nodeLevel);
},
showHistoryModal: function() {
    GetNodeHistory(this.props.node.id, this.getNodeHistoryCallback);
},
handleDisabledChange: function(event) {
    SaveDisabled(this.props.node.doc_key, event.target.checked, this.props.node, this.props.nodeLevel, this.props.store,  this.saveDisabledCallback);
},
handleLockedChange: function(event) {
    SaveLocked(this.props.node.doc_key, event.target.checked, this.props.node, this.props.nodeLevel, this.props.store,  this.saveLockedCallback);
},
saveDisabledCallback: function(data, node, nodeLevel) {
    this.props.showFeedBack(data);
   this.props.updateAllCatalogs();
},
saveLockedCallback: function(data, node, nodeLevel) {
    this.props.showFeedBack(data);
   this.props.updateAllCatalogs();
},
getNodeHistoryCallback: function(data) {
    this.setState({ nodeHistoryData: data,showHistoryModal:true });
},
storeUpdate: function(data) {
    this.props.storeUpdate(data);
},
handleClick: function(docKey,nodeName,nodeLevel) {
    this.props.onNodeClick(docKey, nodeName, nodeLevel);
},
handleEditClick: function () {
    UpdateEditingFlag('catalog',true,this.props.node.doc_key, this.props.store);
    this.setState({ isEditMode: true });
},
handleHideModal: function() {
    this.setState({ showHistoryModal: false });
},
handleSaveClick: function (node, nodeLevel, newNode, newNodeKey, oldCatalogType, selectedCatalogType) {
    //Save Logic Here
    saveNode(node, nodeLevel, newNode, newNodeKey, oldCatalogType, selectedCatalogType, this.props.store, this.saveCallBack);
    this.setState({ isEditMode: false });
},
handleCancelClick: function (node, nodeLevel) {
    UpdateEditingFlag('catalog',false,this.props.node.doc_key, this.props.store);
    this.setState({ isEditMode: false });
},
saveCallBack: function (data, node, nodeLevel) {
    this.props.showFeedBack(data);
    this.props.reloadData(node.doc_key, node.name, nodeLevel);
},
handleInputChange: function (event) {
    this.setState({ nodeValue: event.target.value });
    this.setState({ nodeKey: formatNameKey(event.target.value) });
},
handleNodeKeyChange: function (event) {
    this.setState({ nodeKey: event.target.value });
},
rollbackComplete: function(data) {
    this.props.showFeedBack(data);
    this.props.reloadData(this.props.node.doc_key, this.props.node.name, this.props.nodeLevel);
}
});

export default CatalogTreeRow;
