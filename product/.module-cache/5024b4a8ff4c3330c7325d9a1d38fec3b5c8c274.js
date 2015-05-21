define(function (require) {
	function Sammy () {
	
	}

	Sammy.loadRoutes = function (Sammy) {
		Sammy(function(){
    			this.get("#app-shell" , function (argument) {
    				self.conductor.append(self, region, self.lobbyModule);
    			});

    			this.get("#user" , function (argument) {
    				module = Object.resolve(UserModule);
    				self.userVM = module;
    				self.conductor.append(self, region, module);
    			});

    			this.get("#user/register" , function () {
    				if(!self.userVM){ return; }
    				self.userVM.registerPage();
    			});

    			this.notFound = function (method) {
    				// body...
    				self.pageNotFound();
    			}
    		});

    		Sammy().run();
	}

	return Sammy;
});