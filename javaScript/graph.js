/* Global Vars */
var selected = "nodeSelect"
var nodeArray = new Array();
var start = null;
var end = null;
var node1_edge = null;
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
				this.edge = new Edge(node1_edge, nodeArray[i]);
				node1_edge = null;
				this.edge.set();
			}		
			break;
		};
	}
	// alert("x = " + this.x + ", y = " + this.y);
	// this.edge = new Edge(this.x,this.y, this.x - this.x/2, this.y + this.y/2);
	// this.edge.set();
}

/*
 * User choose Start point
 */
function chooseStart(){
	this.x = event.clientX;
	this.y = event.clientY;
	for (i = 0; i < nodeArray.length; i++) {
		if (Math.abs(this.x-20-nodeArray[i].x) <= 17 && Math.abs(this.y-20-nodeArray[i].y) <= 17) {
			if(nodeArray[i] == end){ break;}
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
 * User choose End point
 */
function chooseEnd(){
	this.x = event.clientX;
	this.y = event.clientY;
	for (i = 0; i < nodeArray.length; i++) {
		if (Math.abs(this.x-20-nodeArray[i].x) <= 17 && Math.abs(this.y-20-nodeArray[i].y) <= 17) {
			if(nodeArray[i] == start){ break;}
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