var MainViewModel = function() {
	this.pageNumber = ko.observable("page1");
	
	this.showAboutUs = ko.computed(function(page) {
        if (this.pageNumber() == "page1") {
        	$('html,body').scrollTop(0);
        	return true;
        }
        
        return false;
    }, this);
	
	this.showAboutVenue = ko.computed(function(page) {
        if (this.pageNumber() == "page2") {
        	$('html,body').scrollTop(0);
        	return true;
        }
        
        return false;
    }, this);
	
	this.showRSVP = ko.computed(function(page) {
        if (this.pageNumber() == "page3") {
        	$('html,body').scrollTop(0);
        	return true;
        }
        
        return false;
    }, this);
	
	this.showMore = ko.computed(function(page) {
        if (this.pageNumber() == "page4") {
        	$('html,body').scrollTop(0);
        	return true;
        }
        
        return false;
    }, this);
	
	this.pageHandler = function(page) {
		this.pageNumber(page);
	};
};