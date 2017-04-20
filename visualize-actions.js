﻿function getNodes(nodeLevel, docKey, nodeName, storeId, disabled, showDisabled, callback) {
    $.getJSON('http://localhost:65515/api/Pms/Get', { nodeLevel: nodeLevel, storeId: storeId, disabled: disabled, showDisabled:showDisabled, docKey: docKey, token: localStorage.token })
      .done(function (data) { callback(data, docKey, nodeName); })
      .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
}

function getNodeList(nodeLevel, docKey, nodeName, storeId, disabled, callback) {
    $.getJSON('http://localhost:65515/api/Pms/GetList', { storeId: storeId, disabled: disabled, docKey:docKey, token: localStorage.token })
      .done(function (data) { callback(data, docKey, nodeName); })
      .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
}

function GetPendingCatalog(callback){
  $.getJSON('http://localhost:65515/api/Pms/GetPendingCatalog', {token: localStorage.token})
      .done(function (data) { callback(data); })
      .fail(function (data) {
        console.log(data.status);
          if (data.status == '401') {
              //localStorage.clear();
            //  window.location.href = "/login";
          }
      });
}

function getComponentProducts(docKey, componentName, storeId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetComponent', { docKey: docKey, storeId: storeId, token: localStorage.token })
      .done(function (data) { callback(data, componentName); })
      .fail(function (data) { console.log('GetComponent error: ' + data) });
}

function saveNode(node, nodeLevel, newNode, newNodeKey, storeId, callback) {
    //document.getElementById("ThisIsTesting").style.display = "block"
    return $.getJSON('http://localhost:65515/api/Pms/SaveNode', { docKey: node.doc_key, oldNode: node.name, newNode: newNode, oldNodeKey: node.name_key, newNodeKey: newNodeKey, username: localStorage.username, storeId:storeId, token: localStorage.token })
      .done(function (data) { callback(data, node, nodeLevel); })
      .fail(function (data) { callback(data, node, nodeLevel); });
}

function rollback(docKey, oldNode, newNode, newNodeKey, catalogId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveNode', { docKey: docKey, oldNode: oldNode, newNode: newNode, newNodeKey: newNodeKey, catalogId: catalogId, username: localStorage.username, rollback: true, token: localStorage.token })
      .done(function (data) { callback(data); })
      .fail(function (data) { callback(data); });
}

function SaveComponentData(docKey, component, refId, refQty, nodeName, nodeLevel, sku, storeId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveComponentData', { docKey: docKey, docId: component.id, oldRefId: component.RefId, refId: refId, oldRefQty: component.RefQty, refQty: refQty, oldSku: component.Sku, sku: sku, username: localStorage.username, storeId:storeId, token: localStorage.token })
  .done(function (data) { callback(data, docKey, nodeName, nodeLevel); })
  .fail(function (data) { callback(data, docKey, nodeName, nodeLevel); });
}

function rollbackComponentData(docKey, docId, oldRefId, refId, oldRefQty, refQty, oldSku, sku, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveComponentData', { docKey: docKey, docId: docId, oldRefId: oldRefId, refId: refId, oldRefQty: oldRefQty, refQty: refQty, oldSku: oldSku, sku: sku, username: localStorage.username, rollback: true, token: localStorage.token })
  .done(function (data) { callback(data); })
  .fail(function (data) { callback(data); });
}

function saveProduct(productData, newName, newDescription, docId, storeId, sku, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveProduct', { oldName: productData.name, oldDescription: productData.description, newName: newName, newDescription: newDescription, docId: docId, docKey: productData.docKey, username: localStorage.username, storeId:storeId, sku:sku, token: localStorage.token })
      .done(function (data) { callback(data); })
      .fail(function (data) { callback(data); });
}

function rollBackProduct(oldName, oldDescription, newName, newDescription, docId, docKey, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveProduct', { oldName: oldName, oldDescription: oldDescription, newName: newName, newDescription: newDescription, docId: docId, docKey: docKey, rollback: true, username: localStorage.username, token: localStorage.token })
      .done(function (data) { callback(data); })
      .fail(function (data) { callback(data); });
}

function SaveBreadCrumbText(docKey, breadCrumbText, storeId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveBreadCrumbText', { docKey: docKey, breadCrumbText: breadCrumbText, storeId:storeId, token: localStorage.token })
      .done(function (data) { callback(data); })
      .fail(function (data) { callback(data); });
}

function GetBreadCrumbText(docKey, storeId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetBreadCrumbText', { docKey: docKey, storeId: storeId, token: localStorage.token })
      .done(function (data) { callback(data); })
      .fail(function (data) { console.log('GetBreadCrumbText error: ' + data) });
}

function GetStoreLookups(callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetStoreLookups', { token: localStorage.token })
      .done(function (data) { callback(data); })
       .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
}

function SaveStore(docKey, storeId, chk, callback) {
  document.getElementById("ThisIsTesting").style.display = "block";
    return $.getJSON('http://localhost:65515/api/Pms/SaveStore', { docKey: docKey, storeId: storeId, chk: chk, token: localStorage.token })
        .done(function(data) { callback(data); })
        .fail(function(data) { callback(data); });
}

function SaveStoreComponent(docId, storeId, chk, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/SaveStoreComponent', { docId: docId, storeId: storeId, chk: chk, token: localStorage.token })
        .done(function (data) { callback(data); })
        .fail(function (data) { callback(data); });
}

function GetNodeHistory(catalogId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetNodeHistory', { catalogId: catalogId, token: localStorage.token })
  .done(function (data) { callback(data); })
  .fail(function (data) { console.log('GetNodeHistory error: ' + data) });
}

function GetComponentHistory(docId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetComponentHistory', { docId: docId, token: localStorage.token })
  .done(function (data) { callback(data); })
  .fail(function (data) { console.log('GetComponentHistory error: ' + data) });
}

function GetComponentProductHistory(docId, callback) {
    return $.getJSON('http://localhost:65515/api/Pms/GetComponentProductHistory', { docId: docId, token: localStorage.token })
  .done(function (data) { callback(data); })
  .fail(function (data) { console.log('GetComponentProductHistory error: ' + data) });
}

function Login(username, password, cb, callback) {
    return $.getJSON('http://localhost:65515/api/Account/Login', { username: username, password: password, token: localStorage.token })
  .done(function (data) { callback(data,cb); })
  .fail(function (data) { callback(data,cb); });
}

function GetCurrentImportStatus(callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetCurrentImportStatus', {token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

function UpdateSendToWebFlag(send_flag,status_message,callback){
      return $.getJSON('http://localhost:65515/api/Pms/UpdateSendToWebFlag', {send_flag: send_flag, status_message: status_message, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function AutoCompleteQuery(searchValue, searchVendors, callback){
      return $.getJSON('http://localhost:65515/api/Pms/AutoCompleteQuery', {value: searchValue, searchVendors: searchVendors, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function GetProductAndEntities(doc_key, storeId, callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetProductAndEntities', {doc_key: doc_key, storeId:storeId, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function GetVendorList(callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetVendorList', { token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401' || data.status == '0') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveProductMaster(newName,oldName,id,docKey,callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveProductMaster', {newProductName:newName,oldProductName:oldName,id:id,docKey:docKey,username:localStorage.username,token: localStorage.token })
  .done(function (data) { callback(data,newName); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function RollbackProductMaster(newName,oldName,id,docKey,callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveProductMaster', {newProductName:newName,oldProductName:oldName,id:id,docKey:docKey,username:localStorage.username, rollback: true,token: localStorage.token })
  .done(function (data) { callback(data,newName); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function GetProductMasterHistory(id,callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetProductMasterHistory', {id:id,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function GetUserStats(username,callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetUserStats', {username: username,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

   function SaveUserInfo(username,userId,firstname,lastname,email,callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveUserInfo', {username: username,userId:userId,firstname:firstname,lastname:lastname,email:email,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function GetAllUsers(callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetAllUsers', {token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveUserPermission(username,userId,permissionId,chkValue,callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveUserPermission', {username:username,userId:userId,permissionId:permissionId,chkValue:chkValue,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function SaveEnabled(username,userId,chkValue,callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveEnabled', {username:username,userId:userId,chkValue:chkValue,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

   function IsUniqueUsername(username,callback){
      return $.getJSON('http://localhost:65515/api/Pms/IsUniqueUsername', {username:username,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

    function AddUser(username,password,firstname,lastname,email,callback){
      return $.getJSON('http://localhost:65515/api/Pms/AddUser', {username:username,password:password,firstname:firstname,lastname:lastname,email:email,token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function GetDataAnalysisStats(callback){
      return $.getJSON('http://localhost:65515/api/Pms/DataAnalysisStats', {token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

  function GetDataAnalysisDetails(type, callback){
      return $.getJSON('http://localhost:65515/api/Pms/GetDataAnalysisDetails', {type: type, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveCatEntity(type, id, name, callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveCatEntity', {type: type, id: id, name: name, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveProdEnt(originalDocKey, newDocKey, sku, name, callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveProdEnt', {originalDocKey: originalDocKey, newDocKey: newDocKey, sku: sku, name: name, token: localStorage.token })
  .done(function (data) { callback(data); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveDisabled(docKey, disabledVal, node, nodeLevel, storeId, callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveDisabled', {docKey:docKey, disabledVal: disabledVal, username: localStorage.username, storeId:storeId, token: localStorage.token })
  .done(function (data) { callback(data, node, nodeLevel); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }

 function SaveLocked(docKey, lockedVal, node, nodeLevel, storeId, callback){
      return $.getJSON('http://localhost:65515/api/Pms/SaveLocked', {docKey:docKey, lockedVal: lockedVal, username: localStorage.username, storeId:storeId, token: localStorage.token })
  .done(function (data) { callback(data, node, nodeLevel); })
   .fail(function (data) {
          if (data.status == '401') {
              localStorage.clear();
              window.location.href = "/login";
          }
      });
 }


