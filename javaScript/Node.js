function Node(x,y){
	this.x = x - 20;
	this.y = y - 20;
	this.newNode = document.createElement('div');
	

	$(this.newNode).addClass("node", 0);
	$(this.newNode).css("top", this.y);
	$(this.newNode).css("left", this.x);
	$('#workSpace').append(this.newNode);

	this.makeStart = function(){
		text = this.addInner("Start");
		$(text).addClass("start");
		$(this.newNode).addClass("startParent");
		$(this.newNode).append(text);
	}

	this.makeEnd = function(){
		text = this.addInner("End");
		$(text).addClass("end");
		$(this.newNode).addClass("endParent");
		$(this.newNode).append(text);
	}

	this.addDis = function(dis){
		text = this.addInner(dis);
		$(this.newNode).append(text);
	}

	this.addInner = function(str){
		child = $(this.newNode).children();
		// if(child.length == 0){
		// 	alert("in addInner, child == null");
		// }
		inner = document.createElement('p');
		inner.innerHTML = str;
		return inner;
	}

	this.removeStart = function(){
		$(this.newNode).empty();
		$(this.newNode).removeClass("startParent");
	}

	this.removeEnd = function(){
		$(this.newNode).empty();
		$(this.newNode).removeClass("endParent");
	}

}