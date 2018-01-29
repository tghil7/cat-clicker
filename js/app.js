var Cat = function (data){
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	var infant = "infant";
	var teen = "teen";
	var adult = "adult";
	this.nicknames = ko.observableArray(data.nicknames);
	this.level = ko.computed(function(){
	if (this.clickCount() < 10 || this.clickCount() == 10 )
		  return infant;
	else if (this.clickCount() > 10 && this.clickCount() < 18)
		  return teen;
    else if (this.clickCount()== 18 || this.clickCount() > 18)
	      return adult;
		}, this);
						
	
}

var initialCats = [
   {
	clickCount :0,
	name :"Felix",
	imgSrc :"img/Felix.jpg",
    nicknames: ['Tabby', 'Minet', 'Gregoire', ]
   },
   {
	clickCount :0,
	name :"Chewie",
	imgSrc :"img/Chewie.jpg",
    nicknames: ['Isaac', 'Sam', 'Titus', ]   
   },
   {
    clickCount :0,
	name :"Frisky",
	imgSrc :"img/Frisky.jpg",
    nicknames: ['Piper', 'Titeuf', 'Firmin', ]
   }
]




var ViewModel = function(){
	var self =this;
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
		});
		
	this.currentCat = ko.observable(this.catList()[0]);
		
	this.updateCat = function(clickedCat){
			self.currentCat(clickedCat);	
	};	
   
   this.incrementCounter = function(){
	this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());