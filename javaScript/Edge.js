/* edge object*/
function Edge(node1, node2, weight){
	this.begin = node1;
	this.end = node2;
	this.x1 = node1.x;
	this.y1 = node1.y;
	this.x2 = node2.x;
	this.y2 = node2.y;
	this.weight = weight;
	this.a = Math.abs(this.x1 - this.x2);
	this.b = Math.abs(this.y1 - this.y2);
	this.c = Math.sqrt(Math.pow(this.a,2) + Math.pow(this.b,2));

	this.newEdge = document.createElement('div');

	this.setRotate = function(degrees){
		$(this.newEdge).css({
			'-webkit-transform' : 'rotate('+degrees+'deg)',
			'-moz-transform' : 'rotate('+degrees+'deg)',  
			'-ms-transform' : 'rotate('+degrees+'deg)',  
			'-o-transform' : 'rotate('+degrees+'deg)',  
			'transform' : 'rotate('+degrees+'deg)' , 
			'zoom' : 1		
    	}); 
	}

	this.setWidth = function(c){
		$(this.newEdge).css("width", c);
	}

	this.getAngle = function(c){
		if(this.x2 >= this.x1 && this.y2 >= this.y1){
			this.alpha = Math.asin((this.y2-this.y1)/c)*(180.0/Math.PI);
		}else if(this.x2 >= this.x1){
			this.alpha = 360 - Math.asin((this.y1-this.y2)/c)*(180.0/Math.PI);
		}else if(this.y2 >= this.y1){
			this.alpha = 90 + Math.asin((this.x1-this.x2)/c)*(180.0/Math.PI);
		}else{
			this.alpha = 180 + Math.asin((this.y1-this.y2)/c)*(180.0/Math.PI);
		}
		return this.alpha;
	}

	$(this.newEdge).click(function(){
		// showEdgeInput();

		// $(this.newEdge).addClass('edgeHightlight');
	});

	$(this.newEdge).mouseenter (function() {
		if(selected == "edgeSelect"){
 			e = $('#edgeDisplayBox');
 			e.html(weight);
 			e.css("display", "block");
 			e.css("top", event.clientY + 10); //offset for mouse pointer
 			e.css("left", event.clientX + 10); //offset for mouse pointer
 		}
	}).mouseleave(function(){
		$('#edgeDisplayBox').css("display", "none");
	})


	edge = $(this.newEdge);
	edge.addClass("edge");
	this.setWidth(this.c);
	angle = this.getAngle(this.c);
	this.setRotate(angle); 
	edge.css("top", this.y1 + 20 );
	edge.css("left", this.x1 + 20 );
	$('#workSpace').append(this.newEdge);
	
	return this;
}