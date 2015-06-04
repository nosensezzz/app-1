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
				from = self.props.from;

			console.log(self);
			if(from){
				switch(from.module){
					case "hero":
						return (
							React.createElement("div", {className: "app-header", id: "app-header-div"}, 
								"button"
							)
						);
					break;
					default:break;
				}
			}else{
				return (
					React.createElement("div", {className: "app-header", id: "app-header-div"}, 
						"header"
					)
				);
			}
		}
	});

	return HeaderReact;
});