import React from "react";


class SearchBar extends React.Component{

	state={term:''};

	// onInputChange(event){
	// 	console.log(event.target.value);
	// }


	render(){
	return(
		<div className="ui segment">
			<form className="ui form">
				<div className="field">
					<label>Image Search</label>
					<input type="text" 
					onChange={(e)=>e.target.value}
					value={this.state.term}
					 />
					}
				</div>
			</form>
		</div>
	);
	
	};
};
export default SearchBar;