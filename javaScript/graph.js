/* Global Vars */
var selected = "nodeSelect";
var tempSelected = "nodeSelect";
var nodeArray = new Array();
var adjacencyMatrix = new Array();
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

function createNode(x,y){
	if(x == null || y == null){
		x = event.clientX;
		y = event.clientY;
	}
	var newNode = new Node(x, y);
	adjacencyMatrix[newNode.num] = new Array();
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
 * Changies the selector color on footer menu
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
function addEdge(weight, node1, node2){
	if(node1 == null || node2 == null){
		node1 = node1_edge;
		node2 = node2_edge;
	}
	this.edge = new Edge(node1, node2, weight);
	adjacencyMatrix[node1.num][node2.num] = weight;
	adjacencyMatrix[node2.getNum()][node1.getNum()] = weight;
	node1_edge = null;
	node2_edge = null;
}

function myClear(){
	adjacencyMatrix = new Array();
	nodeArray = new Array();
	start = null;
	end = null;
	node1_edge = null;
	node2_edge = null;
	$('#workSpace').empty();
	document.getElementById('workSpace').innerHTML = '<div id="edgeDisplayBox"></div>';
}

function preset1(){
	myClear();
	createNode(56, 231);
	createNode(172, 141);
	createNode(176, 296);
	createNode(312, 326);
	createNode(306, 237);
	createNode(305, 148);
	createNode(439, 139);
	createNode(440, 248);
	createNode(443, 326);
	createNode(581, 283);
	createNode(596, 168);
	createNode(742, 224);
	createNode(806, 134);
	createNode(819, 315);
	createNode(965, 217);
	createNode(1070, 152);
	createNode(1092, 306);
	start = nodeArray[0]
	nodeArray[0].makeStart();
	end = nodeArray[nodeArray.length-1];
	nodeArray[nodeArray.length-1].makeEnd();

	addEdge(3, nodeArray[0], nodeArray[1]);
	addEdge(4, nodeArray[0], nodeArray[2]);
	addEdge(1, nodeArray[1], nodeArray[2]);

	addEdge(6, nodeArray[1], nodeArray[3]);
	addEdge(8, nodeArray[1], nodeArray[4]);
	addEdge(7, nodeArray[2], nodeArray[5]);
	addEdge(1, nodeArray[3], nodeArray[4]);
	addEdge(2, nodeArray[4], nodeArray[5]);

	addEdge(4, nodeArray[5], nodeArray[6]);
	addEdge(3, nodeArray[3], nodeArray[7]);
	addEdge(5, nodeArray[3], nodeArray[8]);

	addEdge(1, nodeArray[8], nodeArray[9]);
	addEdge(7, nodeArray[7], nodeArray[10]);
	addEdge(2, nodeArray[6], nodeArray[10]);
	addEdge(3, nodeArray[9], nodeArray[10]);

	addEdge(4, nodeArray[9], nodeArray[11]);
	addEdge(2, nodeArray[10], nodeArray[11]);
	addEdge(5, nodeArray[10], nodeArray[12]);
	addEdge(6, nodeArray[11], nodeArray[12]);

	addEdge(9, nodeArray[12], nodeArray[14]);
	addEdge(1, nodeArray[12], nodeArray[15]);
	addEdge(7, nodeArray[11], nodeArray[13]);
	addEdge(0, nodeArray[13], nodeArray[14]);
	addEdge(5, nodeArray[13], nodeArray[16]);
	addEdge(4, nodeArray[14], nodeArray[16]);
	addEdge(6, nodeArray[15], nodeArray[16]);
}