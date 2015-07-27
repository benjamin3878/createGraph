/* Global Vars */
var selected = "nodeSelect";
var tempSelected = "nodeSelect";
var nodeArray = new Array();
var start = null;
var end = null;
var node1_edge = null;
var node2_edge = null;
/* End of Global Vars */

window.onload = function(){
	setScreen();
}

$(window).resize(function(){
	setScreen();
});

/*
 * Changes workSpace screen size 
 */ 
function setScreen() {
	$('#workSpace').css("height", window.innerHeight + 'px');
}

/*
 * Control system
 */
function control(){
	switch(selected){
		case "nodeSelect":
			createNode();
			break;
		case "edgeSelect":
			createEdge();
			break;
		case "startSelect":
			chooseStart();
			break;
		case "endSelect":
			chooseEnd();
			break;
		case "none":
			break;
		default:
			console.log("Global var selected set to an incorrect value");
	}
}

function createNode(){
	var newNode = new Node(event.clientX, event.clientY);
	nodeArray.push(newNode);
}

function createEdge(){
	this.x = event.clientX;
	this.y = event.clientY;

	for (i = 0; i < nodeArray.length; i++) {
		if (Math.abs(this.x-20-nodeArray[i].x) <= 17 && Math.abs(this.y-20-nodeArray[i].y) <= 17) {
			if(nodeArray[i] == node1_edge){ break;}
			if(node1_edge == null){
				node1_edge = nodeArray[i];
			}else{
				node2_edge = nodeArray[i];
				showEdgeInput();
			}		
			break;
		};
	}
}

/*
 * User choose Start node
 * This function finds the node if clciked and updates the css. If the node is already the Start 
 * or the End node, no action is taken. If there is already an Start node, the newly selected node
 * becomes the Start node and the old Start node is converted back to a normal node.
 */
function chooseStart(){
	this.x = event.clientX;
	this.y = event.clientY;
	for (i = 0; i < nodeArray.length; i++) {
		if (Math.abs(this.x-20-nodeArray[i].x) <= 17 && Math.abs(this.y-20-nodeArray[i].y) <= 17) {
			if(nodeArray[i] == start || nodeArray[i] == end){ break;}
			nodeArray[i].makeStart();
			if(start != null){
				start.removeStart();
			}
			start = nodeArray[i];
			break;
		};
	}
}

/*
 * User choose End node
 * This function finds the node if clciked and updates the css. If the node is already the Start 
 * or the End node, no action is taken. If there is already an End node, the newly selected node
 * becomes the End node and the old End node is converted back to a normal node.
 */
function chooseEnd(){
	this.x = event.clientX;
	this.y = event.clientY;
	for (i = 0; i < nodeArray.length; i++) {
		if (Math.abs(this.x-20-nodeArray[i].x) <= 17 && Math.abs(this.y-20-nodeArray[i].y) <= 17) {
			if(nodeArray[i] == start || nodeArray[i] == end){ break;}
			nodeArray[i].makeEnd();
			if(end != null){
				end.removeEnd();
			}
			end = nodeArray[i];
			break;
		};
	}
}

/* 
 * Changies the selector on footer menu
 */
function labelChange(value){
	$("#" + selected ).removeClass("userSelect");
	$("#" + value + "Select").addClass("userSelect");
	selected = value + "Select";
}

/*
 * when an edge is added, the user input box is displayed 
 */
function showEdgeInput(){
	w = window.innerWidth;
	h = window.innerHeight;
	$('#page').addClass("opacityChange");
	edgeWeight = $('#edgeWeight');
	edgeWeight.css("display", "block");
	edgeWeight.css("top", h/2 - 75);
	edgeWeight.css("left", w/2 - 150);
	tempSelected = selected;
	selected = "none"; 

}

/*
 * This function hide the edge weight input box when not in use
 */
function hideEdgeInput(){
	$('#page').removeClass("opacityChange");
	$('#edgeWeight').css("display", "none");
	selected = tempSelected;
	weight = $('#edgeInput').val();
	$('#edgeInput').val("");
	addEdge(weight);
}

/*
 * This function creates the new edge and rest the gloable variables 
 * holding the two nodes which will be connect by the new edge.
 */
function addEdge(weight){
	this.edge = new Edge(node1_edge, node2_edge, weight);
	node1_edge = null;
	node2_edge = null;
}
