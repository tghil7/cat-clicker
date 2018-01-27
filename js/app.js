var ViewModel = function(){
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Felix');
	this.imgSrc = ko.observable('img/Felix.jpg');
	var infant = "infant";
	var teen = "teen";
	
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
	
	this.level = ko.computed(function(){
		if (this.clickCount() < 10 || this.clickCount() == 10 )
		  return infant;
		else if (this.clickCount() > 10 && this.clickCount() < 20)
		  return teen;
		}, this);
}

ko.applyBindings(new ViewModel());