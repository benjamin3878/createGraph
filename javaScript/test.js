goog.require('goog.dom');

goog.require('goog.structs.PriorityQueue');

function testAll(){
	// test1();
	// test2();
	
	// q = new goog.structs.PriorityQueue();
	// q.enqueue(1, "one");
	// q.enqueue(3, "three");
	// q.enqueue(4, "four");
	// q.enqueue(2, "two");
	// for (var i = 0; i < 4; i++) {
	// 	console.log(q.dequeue());
	// };
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

	// node1.addDis('&infin;');
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

}