(function() {
	'use strict';
	angular
		.module('historyCapture')
		.controller('programServiceController',
			function($compile, $filter, $window, $log, $http, SiteFactory) {

			var vm = this;
			vm.postObj = [];
			vm.showSuccess=false;




/*		    $http({
			      url:"http://localhost:5000/hi",
			      method: "GET",
			      data: JSON.stringify(dataset)
			    }).success(function(data) {})*/

/*			$http.get("http://opsg-api-eap-0.dev.uspto.gov:8080/OPSGServices/program-services").then(function(response){
				vm.companies = response.data;


			});
			$http.get("http://opsg-api-eap-0.dev.uspto.gov:8080/OPSGServices/data-elements").then(function(response){
				vm.dataelement = response.data;


			});
			$http.get("http://opsg-api-eap-0.dev.uspto.gov:8080/OPSGServices/table-columns").then(function(response){
				vm.col = response.data;

			});
			$http.get("http://opsg-api-eap-0.dev.uspto.gov:8080/OPSGServices/key-elements").then(function(response){
				vm.k = response.data;
sources?serviceName=85BSERVICE
			});
			$http.get("http://opsg-api-eap-0.dev.uspto.gov:8080/OPSGServices/sources").then(function(response){
				vm.s = response.data;

			});*/
			function programList() {
				SiteFactory.getActions('program-services')
				.then(
					function(response) {
						vm.companies = response;
						console.log(vm.companies)
					},
					function(response) {
						$log.log("Error" + response);
					}
				);

			}

			programList();
			function colList (tabstring) {
				SiteFactory.getActions(tabstring)
				.then(
					function(response) {
						vm.tableCol = response;
					},
					function(response) {
						$log.log("Error" + response);
					}
				);

			}

			function dataList(datastring) {
				SiteFactory.getActions(datastring)
				.then(
					function(response) {
						vm.dataElement = response;
						console.log(vm.dataElement)
					},
					function(response) {
						$log.log("Error" + response);
					}
				);

			}
			function keyList() {
				SiteFactory.getActions('key-elements')
				.then(
					function(response) {
						vm.k = response;
					},
					function(response) {
						$log.log("Error" + response);
					}
				);

			}
			keyList()
			function sourcelist(program) {
				var sourcestring = 'sources?serviceName=';
				sourcestring = sourcestring.concat(program)
				SiteFactory.getActions(sourcestring)
				.then(
					function(response) {
						vm.s = response;
						console.log(vm.s)
					},
					function(response) {
						$log.log("Error" + response);
					}
				);

			}


			
			vm.populate1 = function(){
				delete vm.kElement;
				delete vm.column;
				delete vm.dElement;
				vm.program1 = vm.program.name;
				sourcelist(vm.program1);
				
				
/*				vm.programSource = vm.s;
				vm.dataElement = vm.dataelement;
				vm.keyElement = vm.k;
				vm.tableCol = [];
				for (var j=0;j<vm.col.length;j++){
					var colstring = '';
					colstring = colstring.concat(vm.col[j].instanceName, ".", vm.col[j].schemaName,".",vm.col[j].tableName,".", vm.col[j].columnName,".",vm.col[j].rowKeyName);
					console.log(colstring)
					vm.tableCol.push(colstring)
				}*/
				/*vm.programSource = vm.s;
				vm.keyElement = vm.k;
				vm.dataElement = [];
				for (var i = 0; i < vm.dataelement.length;i++){
					if (vm.program.name === vm.dataelement[i].serviceInfo.name){
						vm.dataElement.push(vm.dataelement[i].name)
					}
				}*/

			};
			vm.populate2 = function(){
				vm.source1 = vm.source.name;
				var datastring = 'business-elements?sourceName=';
				datastring = datastring.concat(vm.source1,"&serviceName=",vm.program1);
				dataList(datastring);
/*				vm.tableCol = [];
				for (var j=0;j<vm.col.length;j++){
					var colstring = '';
					if (vm.element.includes(vm.col[j].dataElement.description)){
						colstring = colstring.concat(vm.col[j].tableColumnId, " ", vm.col[j].instanceName," ",vm.col[j].schemaName," ", vm.col[j].tableName," ",vm.col[j].columnName);
						console.log(colstring)
						vm.tableCol.push(colstring)
					}
				}*/
			};
			vm.populate3 = function(){
				vm.source1 = vm.source.name;
				var tabstring = 'table-columns?sourceName=';
				tabstring = tabstring.concat(vm.source.name,"&serviceName=",vm.program.name,"&businessElementName=",vm.dElement.name);
				colList(tabstring);
			
			vm.submit = function(){
				vm.sourceID = vm.source.name;
				vm.programID = vm.program.name;
				vm.elementID = vm.kElement.keyElementName;
				vm.dataElementPost = vm.dElement.name;
				vm.tablecolPost = vm.column.columnName;
				vm.instanceName = vm.column.instanceName;
				vm.schemaName = vm.column.schemaName;
				vm.tableNamePost = vm.column.tableName
				
			};
				
			};
			vm.clear = function(){
				delete vm.dataelement
				delete vm.col
				delete vm.dataElement;
				delete vm.programSource;
				delete vm.tableCol;
				delete vm.dElement;
				delete vm.column;
				delete vm.source;
				delete vm.kElement;
				delete vm.program;

			};
/*			vm.submit = function(){
				vm.obj = []
				vm.obj.push({'name':vm.program.name})
				vm.obj.push({'source':vm.source.source})
				vm.obj.push({'element':vm.element})
				vm.obj.push({'column':vm.column.col})
				console.log(vm.obj)

			};*/
			vm.clearPost = function(){
				delete vm.instanceName;
				delete vm.schemaName;
				delete vm.tableNamePost;
				delete vm.elementID;
				delete vm.programID;
				delete vm.sourceID;
				delete vm.element;
				delete vm.elementVal;
				delete vm.elementVal;
				delete vm.dataElementPost;
				delete vm.tablecolPost;
				delete vm.tablekeyVal;
				delete vm.previousdataelementVal;
				delete vm.currentdataelementVal;
				delete vm.actionType;
				vm.showSuccess=false;
			};
			vm.submitPost = function(){
				vm.postObj = {}
				vm.postObj.keyElementInfo  = {}
				vm.postObj.keyElementInfo.keyValueTx = vm.elementVal
				vm.postObj.keyElementInfo.keyElementName = vm.elementID
				vm.postObj.sourceServiceInfo = {}
				vm.postObj.sourceServiceInfo.sourceName = vm.sourceID
				vm.postObj.sourceServiceInfo.serviceName = vm.programID
				vm.postObj.dataElementCaptureList  = [{
					"name": vm.dataElementPost,
					"currentDataValue": vm.currentdataelementVal,
					"previousDataValue": vm.previousdataelementVal,
					"tableKeyValueText": vm.tablekeyVal,
					"actionTypeCt": vm.actionType,
					"elementValueCreateTs": Math.round(new Date().getTime()/1000.0),
					"associatedColumns": [{
						"instanceName": vm.instanceName,
						"schemaName":  vm.schemaName,
						"tableName": vm.tableNamePost,
						"columnName": vm.tablecolPost
						
						
						
					}
					                      ]
					
					
				}
				                                      ]
				vm.postObj.sourceUserId = "1000";
				vm.postObj.sourceTs = Math.round(new Date().getTime()/1000.0);
				vm.postObj.eventCreateUserId = "1000";
				vm.postObj.eventCreateTs = Math.round(new Date().getTime()/1000.0) ;
				console.log(vm.postObj)
				$http.post("https://opsg-api-eap-2.dev.uspto.gov:8443/OPSGHistoryTrackingServices/history-capture", vm.postObj).then(function(response){
						vm.showSuccess = true;

				});

			};
			vm.clearSuccess = function(){
				vm.showSuccess = false;
			}
		/*	vm.attorneys = [];
			vm.addRow = function(){
				vm.companies.push({ 'name':vm.name, 'residence': vm.residence, 'category':vm.category });
				vm.name='';
				vm.residence='';
				vm.category='';
				vm.show = false;
			};
			vm.addRowAttorney = function(){
				vm.attorneys.push({ 'name':vm.attorney, 'firm': vm.firm});
				vm.attorney='';
				vm.firm='';
				vm.showAttorney = false;
			};

			vm.getfeeInfo = function(){
				vm.appNo = '59483';
				vm.filingDate = 'hi';
				vm.investor = 'hi';
				vm.docketNo = 'hhi';
				vm.confirmationNo = 'hi';
				vm.appType = 'hi';
				vm.status = 'hi';
				vm.issueFee = 'hi';
				vm.pubFee= 'hi';
				vm.prevPay= 'hi';
				vm.totalFee = 'hi';
				vm.dateDue = 'hi';
				vm.Examiner = 'hi';
				vm.artUnit = 'hi';
				vm.classSub  = 'hi';
			};

			vm.add = function(){
				vm.show = true;
			};
			vm.addAttorney = function(){
				vm.showAttorney = true;
			};
			vm.Delete = function (index) {
			    vm.companies.splice(index, 1);
			};
			vm.DeleteAttorney = function (index) {
			    vm.attorneys.splice(index, 1);
			};
			vm.clear = function(){
				delete vm.applicationNo;
				delete vm.appNo;
				delete vm.filingDate;
				delete vm.investor;
				delete vm.docketNo;
				delete vm.confirmationNo;
				delete vm.appType;
				delete vm.status;
				delete vm.issueFee;
				delete vm.pubFee;
				delete vm.prevPay;
				delete vm.totalFee;
				delete vm.dateDue;
				delete vm.Examiner;
				delete vm.artUnit;
				delete vm.classSub;
				delete vm.companies;
				delete vm.attorneys;
				delete vm.attorney;
				delete vm.firm;
				delete vm.change,
				delete vm.feeAddress;
				vm.show = false;
				delete vm.issFee;
				delete vm.publicationFee;
				delete vm.copies;
				delete vm.checkEnclosed;
				delete vm.payCredit;
				delete vm.authorize;
				delete vm.micro;
				delete vm.entSmall;
				delete vm.entReg;
				vm.showAttorney = false;


			};
							vm.postObj.dataElementCaptureList.name = vm.dataElementPost
				vm.postObj.dataElementCaptureList.currentDataValue = vm.currentdataelementVal
				vm.postObj.dataElementCaptureList.previousDataValue = vm.previousdataelementVal
				vm.postObj.dataElementCaptureList.tableKeyValueText = vm.tablekeyVal
				vm.postObj.dataElementCaptureList.actionTypeCt = vm.actionType
				vm.postObj.dataElementCaptureList.elementValueCreateTs = Math.round(new Date().getTime()/1000.0);
				vm.postObj.dataElementCaptureList.associatedColumns = {}
				vm.postObj.dataElementCaptureList.associatedColumns.instanceName = vm.instanceName
				vm.postObj.dataElementCaptureList.associatedColumns.schemaName = vm.schemaName
				vm.postObj.dataElementCaptureList.associatedColumns.tableName = vm.tableNamePost
				vm.postObj.dataElementCaptureList.associatedColumns.columnName = vm.tablecolPost
				vm.postObj.sourceUserId = "1000";
			*/

			//This function will get NOA information associated with application number


		}); // End AppealsController

})();