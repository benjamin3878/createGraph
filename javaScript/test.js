function testAll(){
	// test1();
	// test2();
	// alert(nodeArray.length);
}
//lower right
function test1() {
	node1 = new Node(150,150);
	node2 = new Node(250, 250);
	node3 = new Node(250, 200);
	node4 = new Node(200, 250);
	node5 = new Node(250, 150);
	node6 = new Node(150, 250);
	edge1 = new Edge(node1, node3,1);
	edge2 = new Edge(node1, node2,1);
	edge3 = new Edge(node1, node4,1);
	edge4 = new Edge(node1, node5,1);
	edge5 = new Edge(node1, node6,1);
	edge1.set();
	edge2.set();
	edge3.set();
	edge4.set();
	edge5.set();
}

function test2(){
	node1 = new Node(300,250);
	node2 = new Node(300, 150);
	node3 = new Node(400, 250);
	node4 = new Node(400, 150);
	node5 = new Node(400, 200);
	node6 = new Node(350, 150);
	edge1 = new Edge(node1, node3,1);
	edge2 = new Edge(node1, node2,1);
	edge3 = new Edge(node1, node4,1);
	edge4 = new Edge(node1, node5,1);
	edge5 = new Edge(node1, node6,1);
	edge1.set();
	edge2.set();
	edge3.set();
	edge4.set();
	edge5.set();	
}