define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			var self = this;
			//console.log(self.props);
			return {
				from:self.props.params,
			};
		},
	
		render: function () {
			var self = this,
				from = self.state.from;

			if(from){
				switch(from.module){
					case "hero":
					break;

					default:
						return (
							React.createElement("div", {className: "app-header", id: "app-header-div"}, 
								"header"
							)
						);
					break;
				}
			}
		}
	});

	return HeaderReact;
});