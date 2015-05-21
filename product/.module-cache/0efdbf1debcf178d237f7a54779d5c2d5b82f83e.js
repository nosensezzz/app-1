define(function (require) {

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model'),
		LobbyModule = require('lobby/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');
		
	function Sammy () {
	
	}

	Sammy.loadRoutes = function (Sammy , self) {
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