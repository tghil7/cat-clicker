var Cat = function (){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Felix');
	this.imgSrc = ko.observable('img/Felix.jpg');
	var infant = "infant";
	var teen = "teen";
	this.nicknames = ko.observableArray([{nickname:"Minet"}, 
										{nickname:"Francois"}, 
										{nickname:"Piper"}
					]);
	this.level = ko.computed(function(){
	if (this.clickCount() < 10 || this.clickCount() == 10 )
		  return infant;
	else if (this.clickCount() > 10 && this.clickCount() < 20)
		  return teen;
		}, this);
						
	
}




var ViewModel = function(){
	this.currentCat = ko.observable(new Cat());
   
   this.incrementCounter = function(){
	this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());