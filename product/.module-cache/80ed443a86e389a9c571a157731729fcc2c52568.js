Sammy(function(){

	this.get("#/" , function (argument) {
		self.conductor.append(self, self.contentRegion, self.lobbyModule);
	});

	this.get("#/user" , function (argument) {
		module = Object.resolve(UserModule);
		region.setElement(self.region.$element.find($("#app-content")));
		region.screen = self;
		//console.log(region);
		self.conductor.append(self, region, module);
	});

	this.notFound = function not_found (argument) {
		// body...
	}
});