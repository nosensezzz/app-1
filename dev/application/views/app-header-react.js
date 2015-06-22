define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({
		getInitialState: function () {
			var self = this;
			return {

			};
		},

		Back_lv2tolv1: function (from) {
			var self = this;
			if(!window.history.back()){
				//alert();
			}
		},
	
		render: function () {
			var self = this,
				from = self.props.params;

			if(from){
				switch(from.module){
					case "hero":
						if(from.lv === 1){ // list
							return (
								<div className="app-header" id="app-header-div">
									heros
								</div>
							);
						}else if(from.lv === 2){ // summary
							return (
								<div className="app-header" id="app-header-div">
									<button className="btn btn-default" onClick={self.Back_lv2tolv1.bind(self,from)}>back</button>
								</div>
							);
						}
					break;

					case "lobby":
						if(from.lv === 1){
							return (
								<div className="app-header" id="app-header-div">
									lobby
								</div>
							);
						}else if(from.lv === 2){
							
						}
					break;
					default:break;
				}
			}else{
				return (
					<div className="app-header" id="app-header-div">
						no module
					</div>
				);
			}
		}
	});

	return HeaderReact;
});