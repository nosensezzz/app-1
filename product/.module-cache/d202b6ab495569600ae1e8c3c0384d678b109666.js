define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			var self = this;
			console.log(self.props);
			return {
				from:self.props.params,
			};
		},
	
		render: function () {
			var self = this,
				from = self.State.from;

			console.log(self.props);
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