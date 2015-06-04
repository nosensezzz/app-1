define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			var self = this;
			return {

			};
		},
	
		render: function () {
			var self = this,
				from = self.props.params;

			if(from){
				switch(from.module){
					case "hero":
						if(from.lv === 1){
							return (
								React.createElement("div", {className: "app-header", id: "app-header-div"}, 
									"heros"
								)
							);
						}else if(from.lv === 2){
							return (
								React.createElement("div", {className: "app-header", id: "app-header-div"}, 
									"heros button"
								)
							);
						}
					break;

					case "lobby":
						if(from.lv === 1){
							return (
								React.createElement("div", {className: "app-header", id: "app-header-div"}, 
									"lobby"
								)
							);
						}else if(from.lv === 2){
							
						}
					break;
					default:break;
				}
			}else{
				return (
					React.createElement("div", {className: "app-header", id: "app-header-div"}, 
						"no module"
					)
				);
			}
		}
	});

	return HeaderReact;
});