/**
 * This script is used to create drill down in table for N level
 * 
 */


	/**
	* inserts newly created row after the element provided in 'el'
	*/
	function insertAfter(target, el) {
		if (!target.nextSibling)
			target.parentNode.appendChild(el);
		else
			target.parentNode.insertBefore(el, target.nextSibling);
	};

	/**
	*  fetches the data using jQuery AJAX and creates Header And First Row of table 
	* and all the rows after first row is created by drawTree function
	*/
	var start;
	 var enteInit = function(result) {
		 		var selectedEnteList = result.selectedEnteList;
		 		var enteData = result.proposalMonitoringStatusReportVM;
		 		start = new Date().getTime();
				var keys=["Entita Operativa "];
//				for(var colName in enteData.columnValMap){
//					keys.push(colName);
//				}
				var new_row = document.createElement('tr');
				var firstRowId = enteData.parentChildKey;
				new_row.setAttribute('id', firstRowId);
				new_row.setAttribute("parentChildSelectionTag", "parent" + enteData.parentChildKey + "child");
				insertAfter(document.getElementById("enteMainHeader"), new_row);
				for(var a=0; a<keys.length; a++){
					new_row.insertCell(a).innerHTML = enteData.codiceEntitaOperativa + " " + enteData[enteData.columnValMap[keys[a]]];
				}				

				var ff = goog.dom.getElement(firstRowId);
				goog.dom.classlist.add(ff, goog.getCssName('odd'));
				goog.dom.classlist.add(ff, goog.getCssName('goog-drilldown-td-ente'));
				
				dynamicTreeEnteFilter = new goog.ui.DrilldownRow({
					html : new_row,
					expanded: true,
					decorator: function(selfObj, handler) {
						goog.ui.DrilldownRow.decorate(selfObj);
					}
				});

				dynamicTreeEnteFilter.decorate(ff);
				goog.dom.classlist.add(ff, goog.getCssName('characterizeEvents'));
				$(".popup .table .characterizeEvents .toggle").click(function(el) {
					event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
				});
//				addSelectEventListener();
				goog.dom.classlist.remove(ff, goog.getCssName('characterizeEvents'));
				goog.dom.classlist.add(ff, goog.getCssName('selectable'));
				if(!enteData.haveChild)
					goog.dom.classlist.add(ff, goog.getCssName('goog-drilldown-lastNode'));
	

				drawEnteTree(enteData.entity, dynamicTreeEnteFilter, enteData.columnValMap, selectedEnteList);
			
	}

	/**
	* this is an recursive function.
	* It check for entity if found then function is called recursivly up till it find null or empty entity.
	* It creates row and applies css for each row
	*/
	var drawEnteTree = function(entity, d, colMap, selectedEnteList) {
		var keys=["Entita Operativa "];
//		for(var colName in enteData.columnValMap){
//			keys.push(colName);
//		}		
		
		for (var k = 0; k < entity.length; k++) {
			var htmlRow = createEnteRow(entity, colMap, keys, k);		
			
			if (entity[k].entity !== null && entity[k].entity !== "") {
				var d1 = new goog.ui.DrilldownRow({				
					html : htmlRow,
					expanded: true,	
					decorator: function(selfObj, handler) {
							goog.ui.DrilldownRow.decorate(selfObj);
							var row = selfObj.getElement();
							row.setAttribute("explored", true);
							if(k%2===0){
								goog.dom.classlist.add(row, goog.getCssName('even'));							
							}else{
								goog.dom.classlist.add(row, goog.getCssName('odd'));							
							}
							goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-td-ente'));
							goog.dom.classlist.add(row, goog.getCssName('characterizeEvents'));
							addSelectEventListener();
							addToggleEventListener();
							goog.dom.classlist.remove(row, goog.getCssName('characterizeEvents'));
							goog.dom.classlist.add(row, goog.getCssName('selectable'));
							if ($.inArray(entity[k].parentChildKey, selectedEnteList) > -1) {
								goog.dom.classlist.add(row, goog.getCssName('selected'));
							}
							if (!entity[k].haveChild){
								goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-lastNode'));
							}
						  }			
				});
				d.addChild(d1, false);
				drawEnteTree(entity[k].entity, d1, colMap,selectedEnteList);
			}else{
				var d1 = new goog.ui.DrilldownRow({				
					html : htmlRow,			
					expanded: false,						
					decorator: function(selfObj, handler) {							
							goog.ui.DrilldownRow.decorate(selfObj);
							var row = selfObj.getElement();
							if(k%2!==0){
								goog.dom.classlist.add(row, goog.getCssName('even'));							
							}else{
								goog.dom.classlist.add(row, goog.getCssName('odd'));							
							}
							
							goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-td-ente'));
							goog.dom.classlist.add(row, goog.getCssName('characterizeEvents'));
							addSelectEventListener();
							addToggleEventListener();
							goog.dom.classlist.remove(row, goog.getCssName('characterizeEvents'));
							goog.dom.classlist.add(row, goog.getCssName('selectable'));
							if ($.inArray(entity[k].parentChildKey, selectedEnteList) > -1) {
								goog.dom.classlist.add(row, goog.getCssName('selected'));
							}
							if (!entity[k].haveChild){
								goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-lastNode'));
							}
						  }			
				});
				d.addChild(d1, false);					
			}
			//d1.setExpanded(false);
		}	
	}
	
	/**
	* function creates html string for table row and row data(tr and td)
	*/
	
	var counter=0;
	var createEnteRow = function(entity, colMap, keys, k){

		var entitaOperativaCodice = entity[k].codiceEntitaOperativa;
		var parentChildKey = entity[k].parentChildKey;
		var htmlRow ='<tr parentChildSelectionTag="parent'+ parentChildKey +'child" entitaOperativa="'+entitaOperativaCodice+'" class="enteTableRow oddeven" id="' + parentChildKey + '">';
		htmlRow = htmlRow+'<td id="data'+ ++counter + '" ><div id="rowDiv'+ ++counter + '">' + entitaOperativaCodice + " " + entity[k][colMap[keys[0]]] + '</div></td>';
		htmlRow + '</tr>';		
		return htmlRow;
	}
	
	
	
	/**
	 * function to get the next row for the ente filter table
	 */
	var newRowLoadCounter = 0;
	var getNextRowEnteFilter = function (parameter){
		
		$.ajax({
			url : ctx + '/portal/desk-workflow/monitoring/enteGetTableNextRow',
			data : parameter,
			type : "post",
			success : function(result) {
				var entityData = result.proposalMonitoringStatusReportVM.entity;
		 		var selectedEnteList = result.selectedEnteList;
				
				if (entityData.length!=0){
					
					var keys=["Entita Operativa "];
//					for(var colName in enteData.columnValMap){
//						keys.push(colName);
//					}
					
				
					for (var k = 0; k < entityData.length; k++) {
						var newRow = createEnteRow(entityData, result.proposalMonitoringStatusReportVM.columnValMap, keys,k);
							//append new node
							var newNode = new goog.ui.DrilldownRow({				
								html : newRow,
								expanded: false,	
								decorator: function(selfObj, handler) {							
									goog.ui.DrilldownRow.decorate(selfObj);
									var row = selfObj.getElement();
									if(k%2!==0){
										goog.dom.classlist.add(row, goog.getCssName('even'));							
									}else{
										goog.dom.classlist.add(row, goog.getCssName('odd'));							
									}
									
									goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-td-ente'));
									goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-td-ente'));
									goog.dom.classlist.add(row, goog.getCssName('characterizeEvents'));
									addSelectEventListener();
									addToggleEventListener();
									goog.dom.classlist.remove(row, goog.getCssName('characterizeEvents'));
									goog.dom.classlist.add(row, goog.getCssName('selectable'));
									if ($.inArray(entityData[k].parentChildKey, selectedEnteList) > -1) {
										goog.dom.classlist.add(row, goog.getCssName('selected'));
									}
									if (!entityData[k].haveChild){
										goog.dom.classlist.add(row, goog.getCssName('goog-drilldown-lastNode'));
									}
								}
							});	
							recursiveSearchNodeEnte(dynamicTreeEnteFilter,newNode,parameter.rowId);
					}
				}else{
					//set current node as last node
					$('#'+parameter.rowId).addClass('goog-drilldown-lastNode');
				}
				
			}
		});
	}
	
	/**
	 * function to search for the node the user is exploring
	 */
	var recursiveSearchNodeEnte = function (dynamicTreeElement, newNode, rowIdToAppend){
		
		dynamicTreeElement.forEachChild(function(child,number){

			var childRowId = $(child.html_).attr('id');
			if (childRowId == rowIdToAppend){
				child.addChild(newNode,true);
				return;
			}
			
			if (child.hasChildren()){
				recursiveSearchNodeEnte(child, newNode, rowIdToAppend);
			}
			
		});
		
	}
	
	/**
	 * Adds the 'selected' toggle to a row 
	 */
	var addSelectEventListener = function() {
		$(".popup .table .characterizeEvents").click(function(el) {
			var oddeven = $(el.currentTarget);
				if (oddeven.hasClass("selected")) {
					oddeven.removeClass("selected");
//					recursiveRemoveChildSelected(oddeven.attr("parentChildSelectionTag"));
				} else {
					oddeven.addClass("selected");
//					recursiveSetParentSelected(oddeven.attr("parentChildSelectionTag"));
				}
			
		});
	}
	
	/**
	 * Adds the loading of data following the click on the toggle buttons
	 */
	var addToggleEventListener = function() {
		$(".popup .table .characterizeEvents .toggle").click(function(el) {
			event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
			var enteTableRow = $(this).parents(".enteTableRow")
			var alreadyExplored = enteTableRow.attr("explored");
			var isLastNode = enteTableRow.hasClass('goog-drilldown-lastNode');
			var data = {
					rowId :  enteTableRow.attr("id"),
					parentChildKey: enteTableRow.attr("id")
			};
			if(!alreadyExplored){
				if (!isLastNode){
					getNextRowEnteFilter(data);
					$(this).parents(".enteTableRow").attr("explored","true");
				}
			} 
		});
	}
	
	
	/**
	 * Sets all the parents as selected when a row is selected; recursive function.
	 */
	var recursiveSetParentSelected = function (parentChildSelectionTag) {
		var parentTag = parentChildSelectionTag.split("|")[0].replace("parent","");
		if (parentTag != "null") {
			var parent = $( "[parentChildSelectionTag*='"+parentTag+"child']" )[0];
			goog.dom.classlist.add(parent, goog.getCssName('selected'));
			var newParentChildSelectionTag = parent.attributes.parentChildSelectionTag.value;
			if (newParentChildSelectionTag.split("|")[0].replace("parent","") != "null") {
				recursiveSetParentSelected(newParentChildSelectionTag);
			}
		}
	}
	
	/**
	 * Sets all the children as unselected when a row is unselected; recursive function.
	 */
	var recursiveRemoveChildSelected = function (parentChildSelectionTag) {
		var childTag = parentChildSelectionTag.split("|")[1].replace("child","");
		var children = $( "[parentChildSelectionTag*='parent"+childTag+"']" );
		for (var i=0; i<children.length; i++) {
			var child = children[i];
			goog.dom.classlist.remove(child, goog.getCssName('selected'));
			var newParentChildSelectionTag = child.attributes.parentChildSelectionTag.value;
			recursiveRemoveChildSelected(newParentChildSelectionTag);
		}
	}