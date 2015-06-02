define(function (require) {

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model'),
		heroModule = require('hero/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');

	function Sammy () {
	
	}

	Sammy.loadRoutes = function (Sammy , self) {

		var 
    		region = Object.resolve(Region),
    		module = null;

    		region.setElement(self.region.$element.find($("#app-content-div")));
    		region.screen = self;

        Sammy().run("/");
		Sammy(function(){
				// ************** app shell
    			this.get("#app-shell" , function (argument) {
    				self.conductor.append(self, region, self.lobbyModule);
    			});

                // ************** app heroes
                this.get("#heroes" , function (argument) {
                    self.conductor.append(self, region, self.heroModule);
                });

                this.get("#heroes/:heroID/summary" , function (argument) {
                    // hero id => argument.params.heroID
                    var id = argument.params.heroID;
                    console.log(id);
                });

    			// ************** user shell
    			this.get("#user" , function (argument) {
    				module = Object.resolve(UserModule);
    				self.userVM = module;
    				self.conductor.append(self, region, module);
    			});

    			this.get("#user/register" , function () {
    				if(!self.userVM){ return; }
    				self.userVM.registerPage();
    			});

    			// ************** not found
    			this.notFound = function (method) {
    				// body...
    				self.pageNotFound();
    			}
    		});

	}

	return Sammy;
});